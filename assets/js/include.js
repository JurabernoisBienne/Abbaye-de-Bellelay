/* include.js - inclut partials, gère la langue via ?lang, applique traductions JSON et met à jour les liens internes.
   Vanilla JS, pas d'ES modules.
*/
(function(){
  if (!window.BASE) window.BASE = '/';

  function qs(name) {
    var m = location.search.match(new RegExp('[?&]'+name+'=([^&]+)'));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function getLang() {
    var l = qs('lang');
    if (!l) {
      // fallback: try browser language
      var bl = (navigator.language || 'fr').slice(0,2).toLowerCase();
      return ['fr','de','en'].includes(bl) ? bl : 'fr';
    }
    return l.toLowerCase();
  }

  function fetchText(url) {
    return fetch(url).then(function(r){
      if (!r.ok) throw new Error('Fetch failed: ' + url);
      return r.text();
    });
  }

  function fetchJSON(url) {
    return fetch(url).then(function(r){
      if (!r.ok) throw new Error('Fetch failed: ' + url);
      return r.json();
    });
  }

  // inclut tous les partials data-include
  function includePartials() {
    var nodes = document.querySelectorAll('[data-include]');
    var promises = [];
    nodes.forEach(function(node){
      var name = node.getAttribute('data-include');
      var url = window.BASE + 'partials/' + name + '.html';
      var p = fetchText(url).then(function(html){
        node.innerHTML = html;
        // après insertion, process les liens placeholders : data-href -> href
        processPlaceholders(node);
      }).catch(function(err){
        console.error('Include failed for', name, err);
      });
      promises.push(p);
    });
    return Promise.all(promises);
  }

  // transforme les éléments avec data-href en href absolu basé sur BASE
  function processPlaceholders(rootEl) {
    rootEl = rootEl || document;
    rootEl.querySelectorAll('[data-href]').forEach(function(el){
      var href = el.getAttribute('data-href');
      // if it's an absolute URL, leave it
      if (/^(?:https?:|mailto:|tel:|#)/.test(href)) {
        el.href = href;
      } else {
        // assign base + href, preserve existing query/hash
        el.href = window.BASE + href;
      }
    });
    // wire language buttons
    rootEl.querySelectorAll('[data-lang]').forEach(function(btn){
      btn.addEventListener('click', function(){
        changeLang(btn.getAttribute('data-lang'));
      });
    });
  }

  function applyTranslations(strings) {
    // data-i18n -> textContent (simple)
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (strings[key]) {
        // preserve deeply nested content if there's HTML? We'll use textContent for accessibility
        el.textContent = strings[key];
      }
    });
    // Certain attributes e.g. alt, placeholder
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      try {
        var payload = JSON.parse(el.getAttribute('data-i18n-attr'));
        Object.keys(payload).forEach(function(attr){
          var key = payload[attr];
          if (strings[key]) el.setAttribute(attr, strings[key]);
        });
      } catch(e){}
    });
  }

  // append ?lang=xx to internal links and data-href anchors
  function appendLangToLinks(lang) {
    document.querySelectorAll('a[href]').forEach(function(a){
      try {
        var href = a.getAttribute('href');
        // skip external links and anchors and mailto/tel
        if (/^(?:https?:|mailto:|tel:|#)/.test(href)) return;
        // normalize: if href starts with '/', it's repo-root relative -> keep as-is
        var newHref = href;
        // ensure it starts with BASE
        if (!href.startsWith(window.BASE)) {
          // remove leading ./ or ../
          newHref = (href.indexOf('./') === 0) ? href.slice(2) : href;
          newHref = window.BASE + newHref.replace(/^\//,'');
        }
        var url = new URL(newHref, location.origin);
        url.searchParams.set('lang', lang);
        a.href = url.pathname + url.search + url.hash;
      } catch(e){}
    });
  }

  // change language: reload with same path and new lang param
  function changeLang(lang) {
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    // preserve hash
    location.href = url.toString();
  }

  // load translations
  function loadTranslations(lang) {
    var url = window.BASE + 'assets/lang/' + lang + '.json';
    return fetchJSON(url).catch(function(){
      console.warn('Translation file missing for', lang);
      return {};
    });
  }

  // expose for other scripts
  window.site = window.site || {};
  window.site.getLang = getLang;
  window.site.changeLang = changeLang;
  window.site.BASE = window.BASE;

  document.addEventListener('DOMContentLoaded', function(){
    var lang = getLang();
    includePartials().then(function(){
      return loadTranslations(lang);
    }).then(function(strings){
      applyTranslations(strings);
      appendLangToLinks(lang);
      // call initUI if present (main.js)
      if (window.initUI && typeof window.initUI === 'function') {
        window.initUI(lang, strings);
      }
    });
  });
})();