/* main.js - UI init for carrousel, timeline modals, disciplines switching, forms (mailto) */
(function(){
  if (!window.site) window.site = {};
  // simple initialization function called after translations are applied
  function initUI(lang, strings){
    initDisciplines();
    initTimeline();
    initForms();
    // carrousel could be extended; current grid is responsive only
  }

  // Disciplines: on click, fill content area
  function initDisciplines(){
    var menu = document.getElementById('disciplines-menu');
    var content = document.getElementById('discipline-text');
    var img = document.getElementById('discipline-img');
    if (!menu || !content) return;
    menu.querySelectorAll('button[data-discipline]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var key = btn.getAttribute('data-discipline');
        // minimal content mapping; in real project replace with full texts or fetch
        var data = {
          architecture: {title:'Architecture', text:'Texte sur l\'architecture.', img: window.site.BASE + 'assets/img/placeholder-architecture.jpg'},
          amenagement: {title:'Aménagement', text:'Texte sur l\'aménagement du territoire.', img: window.site.BASE + 'assets/img/placeholder-amenagement.jpg'},
          histoire: {title:'Histoire', text:'Texte sur l\'histoire.', img: window.site.BASE + 'assets/img/placeholder-histoire.jpg'},
          culture: {title:'Culture / Art', text:'Texte sur la culture / art.', img: window.site.BASE + 'assets/img/placeholder-culture.jpg'},
          circularite: {title:'Circularité', text:'Texte sur la circularité.', img: window.site.BASE + 'assets/img/placeholder-circularite.jpg'},
          tourisme: {title:'Tourisme durable', text:'Texte sur le tourisme durable.', img: window.site.BASE + 'assets/img/placeholder-tourisme.jpg'},
          social: {title:'Social', text:'Texte sur le social.', img: window.site.BASE + 'assets/img/placeholder-social.jpg'},
          paix: {title:'Paix et réparations', text:'Texte sur la paix et réparations de guerre.', img: window.site.BASE + 'assets/img/placeholder-paix.jpg'}
        };
        var item = data[key] || {title:key,text:'',img:''};
        var container = document.getElementById('discipline-content');
        if (container) container.querySelector('h1').textContent = item.title;
        if (content) content.textContent = item.text;
        if (img) {
          if (item.img) { img.src = item.img; img.alt = item.title; img.style.display='block'; }
          else img.style.display = 'none';
        }
        // focus content for keyboard users
        if (container) container.focus();
      });
    });
  }

  // Timeline: open modal showing more info
  function initTimeline(){
    var timeline = document.getElementById('timeline');
    var modal = document.getElementById('modal');
    var modalBody = document.getElementById('modal-body');
    var closeBtn = modal && modal.querySelector('.modal-close');
    if (!timeline || !modal || !modalBody) return;

    timeline.querySelectorAll('.timeline-item').forEach(function(item){
      function open(){
        var period = item.getAttribute('data-period');
        modalBody.innerHTML = '<h2>' + period + '</h2><p>Texte détaillé pour la période ' + period + '.</p><img src="' + window.site.BASE + 'assets/img/placeholder-patrimoine.jpg" alt="">';
        modal.setAttribute('aria-hidden','false');
        // trap focus basic: set focus to close button
        if (closeBtn) closeBtn.focus();
      }
      item.addEventListener('click', open);
      item.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });

    function closeModal(){
      modal.setAttribute('aria-hidden','true');
      modalBody.innerHTML = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e){
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
    });
  }

  // Forms: create mailto and show confirmation to user
  function initForms(){
    // devis form
    var devis = document.getElementById('devis-form');
    if (devis){
      devis.addEventListener('submit', function(e){
        e.preventDefault();
        var f = new FormData(devis);
        var subject = encodeURIComponent('Demande de devis - ' + (f.get('entite') || ''));
        var bodyLines = [];
        ['entite','nom','prenom','tel','email','dates','nb_personnes','nb_chambres','repas','message'].forEach(function(k){
          bodyLines.push(k + ': ' + (f.get(k) || ''));
        });
        var body = encodeURIComponent(bodyLines.join('\n'));
        var mailto = 'mailto:contact@abbaye-example.org?subject=' + subject + '&body=' + body;
        // show confirmation
        var conf = document.getElementById('devis-confirm');
        if (conf){ conf.classList.remove('visually-hidden'); conf.textContent = 'Ouverture du client mail...'; }
        // open mail client
        window.location.href = mailto;
        // no reliable callback to know if mail sent; show instruction
        setTimeout(function(){
          if (conf) conf.textContent = 'Si rien ne s\'est passé, vérifiez votre client mail ou copiez l\'adresse.';
        },800);
      });
    }

    var contact = document.getElementById('contact-form');
    if (contact){
      contact.addEventListener('submit', function(e){
        e.preventDefault();
        var f = new FormData(contact);
        var subject = encodeURIComponent('Contact - ' + (f.get('nom') || ''));
        var body = encodeURIComponent((f.get('message') || '') + '\n\nEmail: ' + (f.get('email') || ''));
        var mailto = 'mailto:contact@abbaye-example.org?subject=' + subject + '&body=' + body;
        var conf = document.getElementById('contact-confirm');
        if (conf){ conf.classList.remove('visually-hidden'); conf.textContent = 'Ouverture du client mail...'; }
        window.location.href = mailto;
      });
    }
  }

  // expose initUI
  window.initUI = initUI;
})();