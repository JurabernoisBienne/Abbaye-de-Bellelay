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
  function initDisciplines() {
  const menu = qs('#disc-list') || qs('#disc-menu');
  const img = qs('#disc-image') || document.getElementById('disc-image');
  const titleEl = qs('#disc-title') || document.getElementById('disc-title');
  const textEl = qs('#disc-text') || document.getElementById('disc-text');

  if (!menu) {
    console.warn('initDisciplines: no #disc-list or #disc-menu found in DOM');
    return;
  }
  if (!img || !titleEl || !textEl) {
    console.warn('initDisciplines: missing content area elements (#disc-image, #disc-title, #disc-text)');
    return;
  }

  // Helper function to get the current language
  function currentLang() {
    return (window.__abbayeLang && typeof window.__abbayeLang.getLang === 'function')
      ? window.__abbayeLang.getLang()
      : (document.getElementById('lang') ? document.getElementById('lang').value : 'fr');
  }

  // Fetch translation entry for a discipline key from lang.js
  function getEntryForKey(key) {
    const lang = currentLang();
    const translations = window.__abbayeLang && window.__abbayeLang.translations;
    if (!translations) return null;
    const dict = translations[lang] || translations['fr'];
    if (!dict) return null;

    return dict.disciplines && dict.disciplines[key] ? dict.disciplines[key] : null;
  }

  // Render content for the given discipline key
  function renderKey(key) {
    const entry = getEntryForKey(key);
    if (!entry) {
      // Fallback: Use the button label as title if no translation entry is found
      const button = menu.querySelector(`.disc-item[data-key="${key}"]`);
      const label = button ? button.textContent.trim() : key;
      console.info(`renderKey: no translation entry for "${key}" in current language; falling back to label "${label}"`);
      img.src = img.src || ''; // Use existing or empty
      img.alt = label;
      titleEl.textContent = label;
      textEl.innerHTML = '';
      return;
    }

    // Update image (allowing entry.img or entry.image)
    img.src = entry.img || entry.image || '';
    img.alt = entry.title || '';

    // Update title
    titleEl.textContent = entry.title || '';

    // Update paragraphs
    textEl.innerHTML = '';
    if (Array.isArray(entry.paragraphs)) {
      entry.paragraphs.forEach(p => {
        const pEl = document.createElement('p');
        pEl.textContent = p;
        textEl.appendChild(pEl);
      });
    } else if (typeof entry.paragraphs === 'string') {
      const pEl = document.createElement('p');
      pEl.textContent = entry.paragraphs;
      textEl.appendChild(pEl);
    } else if (entry.text) { // Legacy support
      const pEl = document.createElement('p');
      pEl.textContent = entry.text;
      textEl.appendChild(pEl);
    }
  }

  // Activate a button and render its associated content
  function activateButton(btn, focusIt = true) {
    if (!btn) return;

    // Reset all buttons
    menu.querySelectorAll('.disc-item').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });

    // Set the clicked button to active
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    if (focusIt) btn.focus();

    // Get key from `data-key` and render its content
    const key = btn.getAttribute('data-key');
    if (key) {
      renderKey(key);
    } else {
      console.warn('activateButton: clicked button has no data-key attribute', btn);
    }
  }

  // Delegated click handler for menu buttons
  menu.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.disc-item');
    if (!btn) return;
    activateButton(btn, false);
  });

  // Keyboard navigation: navigate with arrows, activate with Enter or Space
  menu.addEventListener('keydown', (ev) => {
    const items = Array.from(menu.querySelectorAll('.disc-item'));
    if (!items.length) return;

    const focusedIndex = items.indexOf(document.activeElement);
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      const nextIndex = (focusedIndex + 1) % items.length;
      items[nextIndex].focus();
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      const prevIndex = (focusedIndex <= 0) ? items.length - 1 : focusedIndex - 1;
      items[prevIndex].focus();
    } else if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      const focused = document.activeElement;
      if (focused && focused.classList.contains('disc-item')) {
        activateButton(focused, false);
      }
    }
  });

  // On language change, re-render the currently active item
  document.addEventListener('abbaye:langChanged', () => {
    const active = menu.querySelector('.disc-item.active') || menu.querySelector('.disc-item');
    if (active) {
      renderKey(active.getAttribute('data-key'));
    }
  });

  // Initialize: activate the first menu item if present
  const first = menu.querySelector('.disc-item');
  if (first) {
    // Ensure translations are loaded before activating the first item
    setTimeout(() => activateButton(first, false), 0);
  } else {
    console.warn('initDisciplines: no .disc-item elements found inside', menu);
  }
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
  // only active when modal is shown
  if(!modal || modal.getAttribute('aria-hidden') !== 'false') return;

  const target = e.target;

  // if focus moved inside the modal, allow it
  if(modal.contains(target)) return;

  // If user is focusing a navigation link (header / main-nav) or an <a href="...">, allow it.
  // This permits clicking header links to navigate away even while modal is open.
  if(target.closest && (target.closest('.main-nav') || target.closest('header') || (target.tagName === 'A' && target.getAttribute('href')))){
    // remove the focus trap listener to avoid fighting native navigation
    document.removeEventListener('focus', onDocFocus, true);
    return;
  }

  // Prevent focus leaving modal for other elements (keep focus inside)
  e.stopPropagation();
  const close = modal.querySelector('.modal-close');
  if(close) close.focus();
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

        const mailto = `mailto:denis.beer@jb-b.ch?subject=${subject}&body=${encodeURIComponent(body)}`;
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
        const mailto = `mailto:denis.beer@jb-b.ch?subject=${subject}&body=${encodeURIComponent(body)}`;
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
