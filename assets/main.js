/* main.js
   - Carousel scrolling on mobile (prev/next)
   - Disciplines menu interaction (keyboard & click)
   - Timeline modal logic
   - Forms building mailto links and showing confirmation messages
   - Accessible behaviors
*/
(function(){
  // Utilities
  const qs = s=>document.querySelector(s);
  const qsa = s=>Array.from(document.querySelectorAll(s));

  document.addEventListener('DOMContentLoaded', function(){
    const lang = window.__abbayeLang && window.__abbayeLang.getLang ? window.__abbayeLang.getLang() : 'fr';

    initCarousel();
    initDisciplines();
    initTimeline();
    initForms(lang);
    updateNavLinksWithLang(lang);
  });

  function updateNavLinksWithLang(lang){
    qsa('.main-nav a, .cta').forEach(a=>{
      try{
        const href = a.getAttribute('href');
        if(!href) return;
        const u = new URL(href, location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname + u.search);
      }catch(e){}
    });
  }

  /* CAROUSEL (mobile) */
  function initCarousel(){
    const wrap = qs('.programs-wrap');
    if(!wrap) return;
    const list = wrap.querySelector('.programs-list');
    const btnPrev = wrap.querySelector('[data-action="prev"]');
    const btnNext = wrap.querySelector('[data-action="next"]');
    if(!list) return;
    const step = ()=> Math.round(list.clientWidth * 0.9);

    if(btnPrev) btnPrev.addEventListener('click', ()=> list.scrollBy({left:-step(),behavior:'smooth'}));
    if(btnNext) btnNext.addEventListener('click', ()=> list.scrollBy({left:step(),behavior:'smooth'}));

    // keyboard support: left/right when list focused
    list.addEventListener('keydown', (ev)=>{
      if(ev.key === 'ArrowLeft'){ ev.preventDefault(); list.scrollBy({left:-step(),behavior:'smooth'}); }
      if(ev.key === 'ArrowRight'){ ev.preventDefault(); list.scrollBy({left:step(),behavior:'smooth'}); }
    });
  }

  /* DISCIPLINES */
  function initDisciplines(){
    const menu = qs('#disc-menu');
    const content = qs('#disc-content');
    if(!menu || !content) return;

    function activate(button){
      const key = button.getAttribute('data-discipline');
      // swap image and text by mapping key to placeholder images and i18n keys
      const img = qs('#disc-image');
      const title = qs('#disc-title');
      const text = qs('#disc-text');

      // set image based on key
      img.src = 'assets/img/placeholder-' + (key || '1') + '.svg';
      // set i18n keys if available
      const translations = window.__abbayeLang && window.__abbayeLang.translations;
      const lang = window.__abbayeLang.getLang();
      if(translations && translations[lang] && translations[lang].disc && translations[lang].disc[key]){
        const d = translations[lang].disc[key];
        title.textContent = d.title || key;
        text.textContent = d.text || '';
      } else {
        // fallback to button label
        title.textContent = button.textContent;
        text.textContent = '';
      }

      // focus state / aria
      menu.querySelectorAll('.disc-item').forEach(b=>b.setAttribute('aria-pressed','false'));
      button.setAttribute('aria-pressed','true');
      button.focus();
    }

    // initial activation
    const first = menu.querySelector('.disc-item');
    if(first) activate(first);

    menu.addEventListener('click', (ev)=>{
      const button = ev.target.closest('.disc-item');
      if(button) activate(button);
    });

    // keyboard navigation
    menu.addEventListener('keydown', (ev)=>{
      const items = Array.from(menu.querySelectorAll('.disc-item'));
      const idx = items.indexOf(document.activeElement);
      if(ev.key === 'ArrowDown' || ev.key === 'ArrowRight'){
        ev.preventDefault();
        const next = items[(idx+1)%items.length];
        if(next) activate(next);
      } else if(ev.key === 'ArrowUp' || ev.key === 'ArrowLeft'){
        ev.preventDefault();
        const prev = items[(idx-1+items.length)%items.length];
        if(prev) activate(prev);
      }
    });
  }

  /* TIMELINE & MODAL */
  function initTimeline(){
  const timeline = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text');
  const modalTitle = document.getElementById('modal-title');
  const closeBtn = modal && modal.querySelector('.modal-close');
  if(!timeline || !modal) return;

  let lastTrigger = null;

  function openModalFor(period, triggerBtn){
    const lang = window.__abbayeLang.getLang();
    const dict = window.__abbayeLang.translations[lang] || window.__abbayeLang.translations.fr;
    const data = (dict.pat && dict.pat[period]) || null;
    // set aria-expanded on trigger
    if(triggerBtn){
      // collapse any previously expanded
      timeline.querySelectorAll('.timeline-item').forEach(it => it.setAttribute('aria-expanded', 'false'));
      triggerBtn.setAttribute('aria-expanded', 'true');
      lastTrigger = triggerBtn;
    }
    // populate modal content
    modalTitle.textContent = data && data.title ? data.title : '';
    modalImg.src = `assets/img/timeline${period.replace('p','')}.svg`;
    modalImg.alt = data && data.title ? data.title : '';
    modalText.textContent = data && data.text ? data.text : '';
    modal.setAttribute('aria-hidden', 'false');
    // set focus to close button
    if(closeBtn) closeBtn.focus();
    // trap focus a simple way: listen for Tab on modal (basic)
    document.addEventListener('focus', onDocFocus, true);
  }

  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    // reset aria-expanded
    timeline.querySelectorAll('.timeline-item').forEach(it => it.setAttribute('aria-expanded', 'false'));
    // return focus to trigger
    if(lastTrigger) lastTrigger.focus();
    document.removeEventListener('focus', onDocFocus, true);
  }

  function onDocFocus(e){
    if(modal.getAttribute('aria-hidden') === 'false' && !modal.contains(e.target)){
      e.stopPropagation();
      modal.querySelector('.modal-close').focus();
    }
  }

  // click handler
  timeline.addEventListener('click', (ev)=>{
    const btn = ev.target.closest('.timeline-item');
    if(!btn) return;
    const period = btn.getAttribute('data-period');
    openModalFor(period, btn);
  });

  // keyboard support: Enter / Space
  timeline.addEventListener('keydown', (ev)=>{
    const target = ev.target.closest('.timeline-item') || document.activeElement.closest && document.activeElement.closest('.timeline-item');
    if(!target) return;
    if(ev.key === 'Enter' || ev.key === ' '){
      ev.preventDefault();
      const period = target.getAttribute('data-period');
      openModalFor(period, target);
    }
  });

  // close handlers
  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (ev)=>{ if(ev.target === modal) closeModal(); });
  document.addEventListener('keydown', (ev)=>{ if(ev.key === 'Escape') closeModal(); });
}

  /* FORMS: build mailto links and show confirmation
     - For tarifs (quote form): send mailto to a fixed address (placeholder)
     - For contact: same pattern
  */
  function initForms(lang){
    const quote = qs('#quote-form');
    if(quote){
      quote.addEventListener('submit', function(ev){
        ev.preventDefault();
        const data = new FormData(quote);
        const subject = encodeURIComponent('Demande de devis — Abbaye de Bellelay');
        let body = '';
        for(const [k,v] of data.entries()){
          body += `${k}: ${v}\n`;
        }
        body += `\nTarif indicatif: 90.- à 130.- / personne / jour\n`;

        const mailto = `mailto:contact@abbayebellelay.example?subject=${subject}&body=${encodeURIComponent(body)}`;
        // open mailto
        window.location.href = mailto;
        // show confirmation message
        const msg = qs('#quote-msg');
        if(msg){
          msg.hidden = false;
          msg.textContent = (lang === 'fr') ? 'Votre demande a été préparée dans votre client mail.' : (lang === 'de' ? 'Ihre Anfrage wurde in Ihrem E-Mail-Programm vorbereitet.' : 'Your request has been prepared in your mail client.');
        }
      });
    }

    const contact = qs('#contact-form');
    if(contact){
      contact.addEventListener('submit', function(ev){
        ev.preventDefault();
        const data = new FormData(contact);
        const subject = encodeURIComponent('Contact — Abbaye de Bellelay');
        let body = '';
        for(const [k,v] of data.entries()){
          body += `${k}: ${v}\n`;
        }
        const mailto = `mailto:contact@abbayebellelay.example?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        const msg = qs('#contact-msg');
        if(msg){
          msg.hidden = false;
          msg.textContent = (window.__abbayeLang.getLang() === 'fr') ? 'Votre message a été préparé dans votre client mail.' : (window.__abbayeLang.getLang() === 'de' ? 'Ihre Nachricht wurde in Ihrem E-Mail-Programm vorbereitet.' : 'Your message has been prepared in your mail client.');
        }
      });
    }
  }

})();
