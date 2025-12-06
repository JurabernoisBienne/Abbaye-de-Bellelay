/* assets/js/main.js
   Comportements : carrousel minimal, FAQ, timeline modal, formulaire validation
   Vanilla JS, accessible au clavier. Pas d'autoplay.
*/
(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){

    /* ---------- CAROUSEL ---------- */
    function initCarousels(){
      var carousels = document.querySelectorAll('.carousel');
      carousels.forEach(function(car){
        var track = car.querySelector('.carousel-track');
        if(!track) return;
        var items = track.children;
        var index = 0;
        var prev = car.querySelector('.carousel-prev');
        var next = car.querySelector('.carousel-next');

        function update(){
          track.style.transform = 'translateX(' + (-index * 100) + '%)';
          // update aria
          Array.prototype.forEach.call(items, function(it, i){
            it.setAttribute('aria-hidden', i !== index);
          });
        }

        if(prev) prev.addEventListener('click', function(){ index = Math.max(0, index-1); update(); });
        if(next) next.addEventListener('click', function(){ index = Math.min(items.length-1, index+1); update(); });

        // keyboard
        car.addEventListener('keydown', function(e){
          if(e.key === 'ArrowLeft'){ index = Math.max(0, index-1); update(); }
          if(e.key === 'ArrowRight'){ index = Math.min(items.length-1, index+1); update(); }
        });

        // touch support
        var startX = null;
        car.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
        car.addEventListener('touchend', function(e){
          if(startX === null) return;
          var dx = e.changedTouches[0].clientX - startX;
          if(Math.abs(dx) > 40){
            if(dx < 0) index = Math.min(items.length-1, index+1);
            else index = Math.max(0, index-1);
            update();
          }
          startX = null;
        });

        // initialize
        update();
      });
    }

    /* ---------- FAQ ---------- */
    function initFAQ(){
      var faqs = document.querySelectorAll('.faq-item');
      faqs.forEach(function(item){
        var btn = item.querySelector('.faq-question');
        var ans = item.querySelector('.faq-answer');
        if(!btn || !ans) return;
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function(){
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          if(!expanded){
            ans.style.maxHeight = ans.scrollHeight + 'px';
          } else {
            ans.style.maxHeight = null;
          }
        });
      });
    }

    /* ---------- TIMELINE (modal) ---------- */
    function initTimeline(){
      var root = document.getElementById('modal-root');
      if(!root) return;
      document.querySelectorAll('.timeline-item [data-info]').forEach(function(btn){
        btn.addEventListener('click', function(){
          var content = this.getAttribute('data-info') || '—';
          openModal('<h2>Info</h2><div>'+escapeHtml(content)+'</div>');
        });
      });

      function openModal(html){
        root.innerHTML = '<div class="modal" role="dialog" aria-modal="true" tabindex="-1">'+
                         '<button class="modal-close" aria-label="Fermer">×</button>'+
                         html +
                         '</div>';
        root.style.display = 'flex';
        root.setAttribute('aria-hidden','false');
        var close = root.querySelector('.modal-close');
        close.focus();
        close.addEventListener('click', closeModal);
        root.addEventListener('click', function(e){
          if(e.target === root) closeModal();
        });
        document.addEventListener('keydown', modalKey);
      }
      function closeModal(){
        root.style.display = 'none';
        root.setAttribute('aria-hidden','true');
        root.innerHTML = '';
        document.removeEventListener('keydown', modalKey);
      }
      function modalKey(e){
        if(e.key === 'Escape') closeModal();
      }
    }

    function escapeHtml(s){
      return String(s).replace(/[&<>"']/g, function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];});
    }

    /* ---------- FORMULAIRES ---------- */
    function initForms(){
      document.querySelectorAll('form[data-validate="true"]').forEach(function(form){
        form.addEventListener('submit', function(e){
          e.preventDefault();
          var valid = true;
          form.querySelectorAll('[required]').forEach(function(inp){
            if(!inp.value.trim()){
              inp.setAttribute('aria-invalid','true');
              valid = false;
            } else {
              inp.removeAttribute('aria-invalid');
            }
          });
          if(!valid){
            // focus first invalid
            var first = form.querySelector('[aria-invalid="true"]');
            if(first) first.focus();
            return;
          }
          // Simulate success
          var msg = form.getAttribute('data-success') || 'Merci, votre message a été envoyé.';
          openConfirmation(msg);
          form.reset();
        });
      });

      function openConfirmation(msg){
        var root = document.getElementById('modal-root');
        if(!root) return;
        root.innerHTML = '<div class="modal" role="dialog" aria-modal="true" tabindex="-1">'+
                         '<button class="modal-close" aria-label="Fermer">×</button>'+
                         '<div>'+escapeHtml(msg)+'</div>' +
                         '</div>';
        root.style.display = 'flex';
        root.setAttribute('aria-hidden','false');
        var close = root.querySelector('.modal-close');
        close.focus();
        close.addEventListener('click', closeModal);
        document.addEventListener('keydown', modalKey);
        function closeModal(){ root.style.display = 'none'; root.innerHTML=''; document.removeEventListener('keydown', modalKey); }
        function modalKey(e){ if(e.key === 'Escape') closeModal(); }
      }
    }

    /* ---------- UTIL ---------- */
    function initAll(){
      initCarousels();
      initFAQ();
      initTimeline();
      initForms();
    }

    // Init after small delay to allow includes to populate header/footer first
    setTimeout(initAll, 80);

  });

})();