/* main.js
 - Interactions : carousels (mobile), disciplines tab switching, timeline modals, FAQ toggles, forms -> mailto:, confirmation modals
 - No localized text inside this file.
 - Uses progressive enhancement: runs after includes:ready (so header/footer exist).
*/
(function(){
  'use strict';

  // Helper : delegate
  function on(el, event, sel, fn){
    el.addEventListener(event, function(e){
      var target = e.target.closest(sel);
      if(target && el.contains(target)) fn(e, target);
    });
  }

  // Carousel simple implementation (mobile)
  function initCarousels(){
    document.querySelectorAll('.carousel').forEach(function(carousel){
      var track = carousel.querySelector('.carousel-track');
      if(!track) return;
      var items = Array.from(track.children);
      var index = 0;
      var prevBtn = carousel.querySelector('.carousel-prev');
      var nextBtn = carousel.querySelector('.carousel-next');

      function update(){
        track.style.transform = 'translateX(' + (-index*100) + '%)';
        if(prevBtn) prevBtn.disabled = index===0;
        if(nextBtn) nextBtn.disabled = index===items.length-1;
      }

      if(prevBtn) prevBtn.addEventListener('click', function(){ index = Math.max(0, index-1); update(); });
      if(nextBtn) nextBtn.addEventListener('click', function(){ index = Math.min(items.length-1, index+1); update(); });

      // touch support
      var startX = 0, currentX = 0, dragging=false;
      track.addEventListener('touchstart', function(e){
        startX = e.touches[0].clientX; dragging = true;
      }, {passive:true});
      track.addEventListener('touchmove', function(e){
        if(!dragging) return;
        currentX = e.touches[0].clientX;
      }, {passive:true});
      track.addEventListener('touchend', function(){
        if(!dragging) return;
        var dx = currentX - startX;
        if(Math.abs(dx) > 40){
          if(dx < 0) index = Math.min(items.length-1, index+1);
          else index = Math.max(0, index-1);
        }
        dragging = false; startX = currentX = 0;
        update();
      });

      // re-layout on resize: if desktop (>=768) disable carousel by resetting transform
      function checkMode(){
        if(window.matchMedia('(min-width:768px)').matches){
          track.style.transform = '';
          if(prevBtn) prevBtn.style.display='none';
          if(nextBtn) nextBtn.style.display='none';
        } else {
          if(prevBtn) prevBtn.style.display='';
          if(nextBtn) nextBtn.style.display='';
          update();
        }
      }
      window.addEventListener('resize', checkMode);
      checkMode();
    });
  }

  // Disciplines switching: each page should include content panels with data-discipline attributes
  function initDisciplines(){
    document.querySelectorAll('.disciplines').forEach(function(root){
      var sidebar = root.querySelector('.sidebar');
      if(!sidebar) return;
      var contentPanels = root.querySelectorAll('[data-discipline-content]');
      sidebar.querySelectorAll('button[data-discipline]').forEach(function(btn){
        btn.addEventListener('click', function(){
          sidebar.querySelectorAll('button').forEach(function(b){ b.removeAttribute('aria-current'); });
          btn.setAttribute('aria-current','true');
          var key = btn.getAttribute('data-discipline');
          contentPanels.forEach(function(p){
            if(p.getAttribute('data-discipline-content') === key){
              p.style.display = '';
              p.querySelector('img, p') && p.focus && p.focus();
            } else {
              p.style.display = 'none';
            }
          });
        });
      });
      // activate first
      var first = sidebar.querySelector('button[data-discipline]');
      if(first) first.click();
    });
  }

  // Timeline: click on period to open modal (content present in the DOM)
  function initTimeline(){
    document.querySelectorAll('.timeline').forEach(function(tl){
      on(tl, 'click', '[data-period]', function(e, target){
        var key = target.getAttribute('data-period');
        var panel = document.querySelector('[data-period-content="'+key+'"]');
        if(!panel) return;
        openModal(panel.innerHTML);
      });
    });
  }

  // Modals: create and manage
  function openModal(html){
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.tabIndex = -1;
    overlay.innerHTML = '<div class="modal" role="dialog" aria-modal="true">'+
                        '<button class="close" aria-label="Fermer">×</button>'+
                        '<div class="modal-body"></div></div>';
    document.body.appendChild(overlay);
    overlay.querySelector('.modal-body').innerHTML = html;
    // focus management
    var previouslyFocused = document.activeElement;
    var closeBtn = overlay.querySelector('.close');
    closeBtn.focus();
    function close(){
      document.body.removeChild(overlay);
      if(previouslyFocused) previouslyFocused.focus();
    }
    overlay.addEventListener('click', function(e){
      if(e.target === overlay) close();
    });
    closeBtn.addEventListener('click', function(){ close(); });
    overlay.addEventListener('keydown', function(e){
      if(e.key === 'Escape') close();
    });
  }

  // FAQ toggles (class .faq with items .faq-item [data-faq-question] & .faq-answer)
  function initFAQ(){
    document.querySelectorAll('.faq').forEach(function(root){
      on(root, 'click', '[data-faq-question]', function(e, btn){
        var parent = btn.closest('.faq-item');
        var ans = parent.querySelector('.faq-answer');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', (!expanded).toString());
        if(ans) ans.style.display = expanded ? 'none' : 'block';
      });
    });
  }

  // Forms: send mailto and show confirmation (works for both pricing and contact).
  function initForms(){
    document.querySelectorAll('form[data-mailto]').forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // minimal validation
        var requiredOk = true;
        form.querySelectorAll('[required]').forEach(function(inp){
          if(!inp.value.trim()) requiredOk = false;
        });
        var email = form.querySelector('input[type="email"]');
        if(email && email.value){
          var re = /\S+@\S+\.\S+/;
          if(!re.test(email.value)) requiredOk = false;
        }
        if(!requiredOk){
          // simple inline message
          showFormMessage(form, 'Veuillez compléter les champs requis.');
          return;
        }
        // build mailto
        var to = form.getAttribute('data-mailto') || 'contact@monsite.ch';
        var subject = encodeURIComponent(form.getAttribute('data-mailto-subject') || 'Demande depuis le site');
        var bodyLines = [];
        form.querySelectorAll('input,textarea,select').forEach(function(el){
          var name = el.getAttribute('name') || el.getAttribute('id') || '';
          var val = el.value || '';
          if(name) bodyLines.push(name + ': ' + val);
        });
        var body = encodeURIComponent(bodyLines.join('\n'));
        var mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
        // Open mail client
        window.location.href = mailto;
        // Show confirmation modal
        openModal('<p>Merci — votre demande a été préparée dans votre client de messagerie.</p>');
        form.reset();
      });
    });
  }

  function showFormMessage(form, text){
    var el = form.querySelector('.form-message');
    if(!el){
      el = document.createElement('div');
      el.className = 'form-message';
      form.prepend(el);
    }
    el.textContent = text;
    el.style.color = 'crimson';
  }

  // Initialization after includes are ready
  document.addEventListener('includes:ready', function(){
    initCarousels();
    initDisciplines();
    initTimeline();
    initFAQ();
    initForms();
  });

  // Also run on DOMContentLoaded in case includes already present
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
      initCarousels();
      initDisciplines();
      initTimeline();
      initFAQ();
      initForms();
    }, 300);
  });
})();