// main.js - translations + interactions (no modules, vanilla)
(function(){
  'use strict';

  // Simple translations store
  const T = {
    fr: {
      title: 'Abbaye de Bellelay',
      brand: 'Abbaye de Bellelay',
      'nav.programmes':'Programmes',
      'nav.surplace':'Sur place',
      'nav.disciplines':'Disciplines',
      'nav.tarifs':'Tarifs',
      'nav.patrimoine':'Patrimoine',
      'nav.contact':'Contact',
      'lang.label':'Langue',
      'programmes.title':'Programmes',
      'programmes.slide1.title':'Semaines immersives in-situ',
      'programmes.slide1.text':'Immersion thématique sur site.',
      'programmes.slide2.title':'Summer schools',
      'programmes.slide2.text':'Programmes intensifs estivaux.',
      'programmes.slide3.title':'Ateliers et Projets',
      'programmes.slide3.text':'Ateliers pratiques et développement de projets.',
      'programmes.slide4.title':'Séminaires et Congrès',
      'programmes.slide4.text':'Espaces pour rencontres académiques.',
      'programmes.slide5.title':'Résidences artistiques ou scientifiques',
      'programmes.slide5.text':'Séjours de création et de recherche.',
      'programmes.slide6.title':'Expositions et Concerts',
      'programmes.slide6.text':'Événements culturels ouverts au public.',
      'surplace.title':'Sur place',
      'surplace.hebergement.title':'Hébergement',
      'surplace.hebergement.text':'Informations sur chambres et dortoirs.',
      'surplace.restauration.title':'Restauration',
      'surplace.restauration.text':'Options de repas et régimes.',
      'surplace.espaces.title':'Espaces de formation',
      'surplace.espaces.text':'Salles, capacités et équipements.',
      'surplace.alentours.title':'Alentours',
      'surplace.alentours.text':'Randonnées et points d\'intérêt.',
      'disciplines.title':'Disciplines',
      'tarifs.title':'Tarifs — Demande de devis',
      'tarifs.intro':'90.- à 130.- / personne / jour',
      'tarifs.send':'Demander un devis',
      'patrimoine.title':'Patrimoine',
      'contact.title':'Contact',
      'contact.send':'Envoyer',
      'contact.access':'Accès',
      'contact.tp':'Transport public et bus pour groupes.',
      'footer.about':'À propos',
      'footer.description':'Abbaye de Bellelay — résidences, formations et patrimoine.',
      'footer.contact':'Contact'
    },
    de: {
      title: 'Abtei von Bellelay',
      brand: 'Abtei von Bellelay',
      'nav.programmes':'Programme',
      'nav.surplace':'Vor Ort',
      'nav.disciplines':'Disziplinen',
      'nav.tarifs':'Preise',
      'nav.patrimoine':'Erbe',
      'nav.contact':'Kontakt',
      'lang.label':'Sprache',
      'programmes.title':'Programme',
      'programmes.slide1.title':'Vor-Ort-Immersionswochen',
      'programmes.slide1.text':'Thematische Immersion vor Ort.',
      'programmes.slide2.title':'Summer schools',
      'programmes.slide2.text':'Intensive Sommerprogramme.',
      'programmes.slide3.title':'Workshops und Projekte',
      'programmes.slide3.text':'Praktische Workshops und Projektentwicklung.',
      'programmes.slide4.title':'Seminare und Kongresse',
      'programmes.slide4.text':'Räume für akademische Treffen.',
      'programmes.slide5.title':'Künstlerische oder wissenschaftliche Residenzen',
      'programmes.slide5.text':'Aufenthalte für Forschung und Schaffen.',
      'programmes.slide6.title':'Ausstellungen und Konzerte',
      'programmes.slide6.text':'Kulturelle Veranstaltungen für die Öffentlichkeit.',
      'surplace.title':'Vor Ort',
      'surplace.hebergement.title':'Unterkunft',
      'surplace.hebergement.text':'Informationen zu Zimmern und Schlafsälen.',
      'surplace.restauration.title':'Verpflegung',
      'surplace.restauration.text':'Mahlzeiten und Diätoptionen.',
      'surplace.espaces.title':'Schulungsräume',
      'surplace.espaces.text':'Räume, Kapazitäten und Ausstattung.',
      'surplace.alentours.title':'Umgebung',
      'surplace.alentours.text':'Wanderungen und Sehenswürdigkeiten.',
      'disciplines.title':'Disziplinen',
      'tarifs.title':'Preise — Anfrage',
      'tarifs.intro':'90.- bis 130.- / Person / Tag',
      'tarifs.send':'Anfrage senden',
      'patrimoine.title':'Erbe',
      'contact.title':'Kontakt',
      'contact.send':'Senden',
      'contact.access':'Zugang',
      'contact.tp':'Öffentliche Verkehrsmittel und Busse für Gruppen.',
      'footer.about':'Über',
      'footer.description':'Abtei von Bellelay — Residenzen, Schulungen und Erbe.',
      'footer.contact':'Kontakt'
    },
    en: {
      title: 'Abbey of Bellelay',
      brand: 'Abbey of Bellelay',
      'nav.programmes':'Programs',
      'nav.surplace':'On site',
      'nav.disciplines':'Disciplines',
      'nav.tarifs':'Rates',
      'nav.patrimoine':'Heritage',
      'nav.contact':'Contact',
      'lang.label':'Language',
      'programmes.title':'Programs',
      'programmes.slide1.title':'On-site immersive weeks',
      'programmes.slide1.text':'Thematic on-site immersion.',
      'programmes.slide2.title':'Summer schools',
      'programmes.slide2.text':'Intensive summer programs.',
      'programmes.slide3.title':'Workshops and Projects',
      'programmes.slide3.text':'Practical workshops and project development.',
      'programmes.slide4.title':'Seminars and Conferences',
      'programmes.slide4.text':'Spaces for academic meetings.',
      'programmes.slide5.title':'Artistic or scientific residencies',
      'programmes.slide5.text':'Stays for creation and research.',
      'programmes.slide6.title':'Exhibitions and Concerts',
      'programmes.slide6.text':'Cultural events open to the public.',
      'surplace.title':'On site',
      'surplace.hebergement.title':'Accommodation',
      'surplace.hebergement.text':'Information about rooms and dormitories.',
      'surplace.restauration.title':'Catering',
      'surplace.restauration.text':'Meal options and diets.',
      'surplace.espaces.title':'Training spaces',
      'surplace.espaces.text':'Rooms, capacities and equipment.',
      'surplace.alentours.title':'Surroundings',
      'surplace.alentours.text':'Hikes and points of interest.',
      'disciplines.title':'Disciplines',
      'tarifs.title':'Rates — Quote request',
      'tarifs.intro':'90.- to 130.- / person / day',
      'tarifs.send':'Request a quote',
      'patrimoine.title':'Heritage',
      'contact.title':'Contact',
      'contact.send':'Send',
      'contact.access':'Access',
      'contact.tp':'Public transport and coach access for groups.',
      'footer.about':'About',
      'footer.description':'Abbey of Bellelay — residencies, trainings and heritage.',
      'footer.contact':'Contact'
    }
  };

  // Utilities
  function getLang(){ const p = new URLSearchParams(location.search); return (p.get('lang')||'fr'); }
  function translatePage(){
    const lang = getLang();
    const dict = T[lang] || T.fr;
    // iterate over data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(function(node){
      const key = node.getAttribute('data-i18n');
      if(dict[key]) node.textContent = dict[key];
    });
    // also support custom data-i18n-title and data-i18n-text on slides (for headings inside)
    document.querySelectorAll('[data-i18n-title]').forEach(function(node){
      const key = node.getAttribute('data-i18n-title');
      if(dict[key]) {
        // find inner heading if present
        const h = node.querySelector('h2') || node;
        h.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-text]').forEach(function(node){
      const key = node.getAttribute('data-i18n-text');
      if(dict[key]) {
        const p = node.querySelector('p') || node;
        p.textContent = dict[key];
      }
    });
    // Update page title if available
    if(dict.title) document.title = dict.title;
    // update lang-select if present
    const sel = document.querySelector('#lang-select');
    if(sel) sel.value = lang;
  }

  // Carousel (mobile single slide)
  function initCarousel(){
    const carousel = document.getElementById('program-carousel');
    if(!carousel) return;
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    let index = 0;
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');

    function show(i){
      slides.forEach((s,idx)=>{
        s.classList.toggle('active', idx===i);
        s.setAttribute('aria-hidden', String(idx!==i));
      });
      index = (i+slides.length)%slides.length;
    }
    // initial
    show(0);

    if(prev) prev.addEventListener('click', function(){ show(index-1); prev.focus(); });
    if(next) next.addEventListener('click', function(){ show(index+1); next.focus(); });

    // keyboard navigation
    carousel.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft') show(index-1);
      if(e.key === 'ArrowRight') show(index+1);
    });
    // Make slides focusable on mobile
    slides.forEach(s=>s.setAttribute('tabindex', '0'));
  }

  // Disciplines interactivity
  function initDisciplines(){
    const list = document.getElementById('disciplines-list');
    if(!list) return;
    const content = document.getElementById('discipline-content');
    const img = document.getElementById('discipline-img');
    const title = document.getElementById('discipline-title');
    const desc = document.getElementById('discipline-desc');

    const DATA = {
      architecture: {title:'Architecture', img:'/Abbaye-de-Bellelay/assets/img/arch.jpg', desc:'Architecture — description.'},
      amenagement: {title:'Aménagement du territoire', img:'/Abbaye-de-Bellelay/assets/img/amenagement.jpg', desc:'Aménagement — description.'},
      histoire: {title:'Histoire', img:'/Abbaye-de-Bellelay/assets/img/histoire.jpg', desc:'Histoire — description.'},
      culture: {title:'Culture / Art', img:'/Abbaye-de-Bellelay/assets/img/culture.jpg', desc:'Culture — description.'},
      circularite: {title:'Circularité', img:'/Abbaye-de-Bellelay/assets/img/circularite.jpg', desc:'Circularité — description.'},
      tourisme: {title:'Tourisme durable', img:'/Abbaye-de-Bellelay/assets/img/tourisme.jpg', desc:'Tourisme durable — description.'},
      social: {title:'Social', img:'/Abbaye-de-Bellelay/assets/img/social.jpg', desc:'Social — description.'},
      paix: {title:'Paix et réparations de guerre', img:'/Abbaye-de-Bellelay/assets/img/paix.jpg', desc:'Paix — description.'}
    };

    function show(name){
      const d = DATA[name] || DATA.architecture;
      title.textContent = d.title;
      desc.textContent = d.desc;
      if(img) { img.src = d.img; img.alt = d.title; }
      // update active
      list.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.getAttribute('data-discipline')===name));
    }

    list.addEventListener('click', function(e){
      const b = e.target.closest('button[data-discipline]');
      if(!b) return;
      show(b.getAttribute('data-discipline'));
      b.focus();
    });

    // keyboard support
    list.addEventListener('keydown', function(e){
      const btns = Array.from(list.querySelectorAll('button'));
      const idx = btns.indexOf(document.activeElement);
      if(e.key === 'ArrowDown' && idx < btns.length-1) btns[idx+1].focus();
      if(e.key === 'ArrowUp' && idx > 0) btns[idx-1].focus();
      if(e.key === 'Enter' || e.key === ' ') {
        const name = document.activeElement.getAttribute('data-discipline');
        if(name) show(name);
      }
    });

    // initial
    show('architecture');
  }

  // Timeline modal
  function initTimeline(){
    const periods = document.querySelectorAll('.timeline .period');
    const modal = document.getElementById('timeline-modal');
    if(!periods.length || !modal) return;
    const titleEl = modal.querySelector('#modal-title');
    const imgEl = modal.querySelector('#modal-img');
    const textEl = modal.querySelector('#modal-text');
    const closeBtn = modal.querySelector('.modal-close');

    function open(node){
      modal.setAttribute('aria-hidden','false');
      const period = node.getAttribute('data-period');
      titleEl.textContent = period;
      imgEl.src = node.getAttribute('data-img') || '';
      imgEl.alt = node.querySelector('strong') ? node.querySelector('strong').textContent : period;
      textEl.textContent = node.getAttribute('data-full') || node.textContent;
      closeBtn.focus();
      // trap focus minimally
      document.body.style.overflow = 'hidden';
    }
    function close(){
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    periods.forEach(function(p){
      p.addEventListener('click', function(){ open(p); });
      p.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' ') open(p); });
    });
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', function(e){ if(e.target === modal) close(); });
    modal.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
  }

  // Forms -> mailto
  function initForms(){
    // Quote form
    const quote = document.getElementById('quote-form');
    if(quote){
      quote.addEventListener('submit', function(e){
        e.preventDefault();
        const fd = new FormData(quote);
        const subject = encodeURIComponent('Demande de devis — Abbaye de Bellelay');
        const bodyLines = [
          'Entité: ' + (fd.get('entity')||''),
          'Nom: ' + (fd.get('lastname')||''),
          'Prénom: ' + (fd.get('firstname')||''),
          'Téléphone: ' + (fd.get('phone')||''),
          'Email: ' + (fd.get('email')||''),
          'Dates: ' + (fd.get('dates')||''),
          'Nombre de personnes: ' + (fd.get('people')||''),
          'Nombre de chambres: ' + (fd.get('rooms')||''),
          'Type de repas: ' + (fd.get('meals')||'')
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailto = 'mailto:info@bellelay.example?subject=' + subject + '&body=' + body;
        // confirmation message
        const conf = document.getElementById('quote-confirm');
        if(conf){ conf.className = ''; conf.textContent = 'Préparation du message…'; }
        // open mailto
        location.href = mailto;
        if(conf){ conf.textContent = 'Message ouvert dans votre client de messagerie.'; }
      });
    }

    // Contact form
    const contact = document.getElementById('contact-form');
    if(contact){
      contact.addEventListener('submit', function(e){
        e.preventDefault();
        const fd = new FormData(contact);
        const subject = encodeURIComponent('Contact — Abbaye de Bellelay');
        const bodyLines = [
          'Nom: ' + (fd.get('name')||''),
          'Email: ' + (fd.get('email')||''),
          '',
          (fd.get('message')||'')
        ];
        const body = encodeURIComponent(bodyLines.join('\n'));
        const mailto = 'mailto:info@bellelay.example?subject=' + subject + '&body=' + body;
        const conf = document.getElementById('contact-confirm');
        if(conf){ conf.className = ''; conf.textContent = 'Préparation du message…'; }
        location.href = mailto;
        if(conf){ conf.textContent = 'Message ouvert dans votre client de messagerie.'; }
      });
    }
  }

  // Initialization on DOM ready
  document.addEventListener('DOMContentLoaded', function(){
    translatePage();
    initCarousel();
    initDisciplines();
    initTimeline();
    initForms();
    // Re-translate after include scripts have injected header/footer (safe to call again)
    setTimeout(translatePage, 200);
  });

})();