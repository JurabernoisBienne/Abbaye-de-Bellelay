/* main.js
 - Interactions : carousels (mobile), disciplines tab switching, timeline modals, FAQ toggles, forms -> mailto:, confirmation modals
 - Header/menu enhancements (menu toggle accessible, auto-reserve space for header-actions)
 - Normalise automatiquement les href du header pour éviter les doublons de langue (/fr/fr)
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

  /* ---------------------------
     Small utilities used by header helpers
     --------------------------- */
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  // Debounce helper
  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  }

  /* ---------------------------
     Header & menu helpers
     --------------------------- */

  function initMenuToggle() {
    var toggle = qs('#menu-toggle');
    var nav = qs('#main-nav');
    if (!toggle || !nav) return;

    // Close handlers
    function onDocClick(e) {
      var target = e.target;
      if (!nav.contains(target) && !toggle.contains(target)) {
        setOpen(false);
      }
    }
    function onDocKeydown(e) {
      if (e.key === 'Escape' || e.key === 'Esc') setOpen(false);
    }

    function setOpen(open) {
      if (open) {
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        var first = nav.querySelector('a');
        if (first) first.focus();
        document.addEventListener('click', onDocClick, true);
        document.addEventListener('keydown', onDocKeydown, true);
      } else {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onDocKeydown, true);
      }
    }

    toggle.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        var first = nav.querySelector('a');
        if (first) first.focus();
        document.addEventListener('click', onDocClick, true);
        document.addEventListener('keydown', onDocKeydown, true);
      } else {
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onDocKeydown, true);
      }
    }, { passive: true });

    // Close the menu when switching to desktop
    window.addEventListener('resize', debounce(function () {
      if (window.innerWidth >= 768 && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }, 150));
  }

  function updateHeaderActionWidth() {
    var actions = qs('.header-actions');
    var headerInner = qs('.header-inner');
    if (!actions || !headerInner) return;
    window.requestAnimationFrame(function () {
      var rect = actions.getBoundingClientRect();
      var w = Math.ceil(rect.width) + 24; // small safety gap
      var min = 160;
      var max = Math.max(window.innerWidth * 0.4, 320);
      if (w < min) w = min;
      if (w > max) w = Math.ceil(max);
      document.documentElement.style.setProperty('--header-action-width', w + 'px');
      // inline fallback to ensure header-inner spacing even if CSS not yet applied
      headerInner.style.paddingRight = w + 'px';
    });
  }

  function observeHeaderActions() {
    var actions = qs('.header-actions');
    if (!actions) return null;
    var mo = new MutationObserver(debounce(function () {
      updateHeaderActionWidth();
      normalizeNavLinks(); // re-normalize if lang switcher injected/changed
    }, 80));
    mo.observe(actions, { childList: true, subtree: true, attributes: true, characterData: true });
    return mo;
  }

  // Robust normalize: skip externals and protocols, use new URL(..., location.href), and always write an absolute href
  function normalizeNavLinks() {
    var anchors = qsa('#main-nav a, .lang-switcher-list a');
    if (!anchors.length) return;

    anchors.forEach(function(a){
      var original = a.getAttribute('href') || '';
      if (!original) return;

      // skip anchors that are anchors only
      if (original === '#' || original.startsWith('mailto:') || original.startsWith('tel:') || original.trim().startsWith('javascript:')) return;

      try {
        // resolve relative against current page
        var resolved = new URL(original, location.href);

        // Only normalize same-origin links (don't touch external links)
        if (resolved.origin !== location.origin) return;

        // Split pathname into segments and compress consecutive duplicates
        var parts = resolved.pathname.split('/').filter(Boolean); // removes empty segments
        if (parts.length === 0) return;

        var newParts = [];
        for (var i = 0; i < parts.length; i++) {
          if (i === 0 || parts[i] !== parts[i-1]) {
            newParts.push(parts[i]);
          }
        }

        var normalizedPath = '/' + newParts.join('/');
        if (resolved.pathname.endsWith('/') && !normalizedPath.endsWith('/')) normalizedPath += '/';

        var normalizedHref = resolved.origin + normalizedPath + (resolved.search || '') + (resolved.hash || '');

        // Only update if different (avoid infinite loops / unnecessary writes)
        if (normalizedHref !== resolved.href) {
          a.setAttribute('href', normalizedHref);
        }
      } catch (err) {
        // invalid URL — skip
        return;
      }
    });
  }

  function initHeaderEnhancements() {
    initMenuToggle();
    updateHeaderActionWidth();
    observeHeaderActions();
    normalizeNavLinks(); // run normalization once at init
    // re-run normalization on window load/resize to catch environment changes
    window.addEventListener('load', function(){
      updateHeaderActionWidth();
      normalizeNavLinks();
    });
    window.addEventListener('resize', debounce(function(){
      updateHeaderActionWidth();
      normalizeNavLinks();
    }, 120));
    window.addEventListener('orientationchange', debounce(function(){
      updateHeaderActionWidth();
      normalizeNavLinks();
    }, 200));
  }

  /* ---------------------------
     Carousel simple implementation (mobile)
     --------------------------- */
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

  /* ---------------------------
     Disciplines switching
     --------------------------- */
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

  /* ---------------------------
     Timeline: open modal on click
     --------------------------- */
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

  /* ---------------------------
     Modals: create and manage
     --------------------------- */
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
      if (overlay.parentNode) document.body.removeChild(overlay);
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

  /* ---------------------------
     FAQ toggles
     --------------------------- */
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

  /* ---------------------------
     Forms: mailto & confirmation
     --------------------------- */
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

  /* ---------------------------
     Initialization after includes are ready
     --------------------------- */
  document.addEventListener('includes:ready', function(){
    initCarousels();
    initDisciplines();
    initTimeline();
    initFAQ();
    initForms();
    // header/menu helpers
    initHeaderEnhancements();
  });

  // Also run on DOMContentLoaded in case includes already present
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
      initCarousels();
      initDisciplines();
      initTimeline();
      initFAQ();
      initForms();
      // header/menu helpers
      initHeaderEnhancements();
    }, 300);
  });

  /* expose small API for debugging in console if needed */
  window.__siteMain = window.__siteMain || {};
  window.__siteMain.initHeaderEnhancements = initHeaderEnhancements;
  window.__siteMain.updateHeaderActionWidth = updateHeaderActionWidth;
  window.__siteMain.normalizeNavLinks = normalizeNavLinks;

})();
