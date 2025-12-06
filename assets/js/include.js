/* include.js - version robuste
   - essais multiples de chemins pour les partials
   - exécution immédiate si document already loaded
   - gestion simple des langues et des liens internes
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
      var bl = (navigator.language || 'fr').slice(0,2).toLowerCase();
      return ['fr','de','en'].includes(bl) ? bl : 'fr';
    }
    return l.toLowerCase();
  }

  function fetchText(url) {
    return fetch(url, {cache: 'no-store'}).then(function(r){
      if (!r.ok) throw new Error('Fetch failed: ' + url + ' (' + r.status + ')');
      return r.text();
    });
  }

  function fetchJSON(url) {
    return fetch(url, {cache: 'no-store'}).then(function(r){
      if (!r.ok) throw new Error('Fetch failed: ' + url + ' (' + r.status + ')');
      return r.json();
    });
  }

  // Génère une liste d'URL candidates pour un partial selon différents contextes
  function partialCandidates(name) {
    var candidates = [];
    var filename = 'partials/' + name + '.html';
    // 1) BASE + partials/...
    if (window.BASE && window.BASE !== '/') candidates.push(window.BASE.replace(/\/+$/,'/') + filename);
    // 2) root-relative /partials/...
    candidates.push('/' + filename);
    // 3) relative to current document (pages/...)
    candidates.push(filename);
    // 4) one level up (../partials/...)
    candidates.push('../' + filename);
    // 5) two levels up (in case of deep nesting)
    candidates.push('../../' + filename);
    // unique & keep order
    return candidates.filter(function(v,i,self){ return v && self.indexOf(v) === i; });
  }

  // Essaie les candidats dans l'ordre jusqu'à réussite
  function fetchPartialWithFallback(name) {
    var c = partialCandidates(name);
    var lastErr = null;
    // essayer séquentiellement
    return c.reduce(function(prev, url){
      return prev.catch(function(){
        return fetchText(url).then(function(text){
          return {url:url, text:text};
        });
      });
    }, Promise.reject()).catch(function(err){
      // si dernier reduce échoue, essayer séquentiellement manuellement pour capturer le dernier message
      var p = Promise.reject();
      c.forEach(function(url){
        p = p.catch(function(){
          return fetchText(url).then(function(text){ return {url:url, text:text}; });
        });
      });
      return p;
    });
  }

  // remplace data-href par href en tenant compte de différents formats
  function processPlaceholders(rootEl) {
    rootEl = rootEl || document;
    rootEl.querySelectorAll('[data-href]').forEach(function(el){
      var href = el.getAttribute('data-href') || '';
      // ne pas toucher aux URL externes, mailto, tel ou ancres
      if (/^(?:https?:|mailto:|tel:|#)/.test(href)) {
        el.href = href;
        return;
      }
      // Cas où href est déjà commençant par BASE
      if (window.BASE && href.indexOf(window.BASE) === 0) {
        el.href = href;
        return;
      }
      // Normaliser ./ et ../
      var normalized = href.replace(/^\.\//,'').replace(/^\//,'');
      // Assemblage le plus probable : BASE + normalized
      el.href = (window.BASE ? window.BASE.replace(/\/+$/,'/') : '/') + normalized;
    });

    // wiring des boutons de langue (présents dans les partials)
    rootEl.querySelectorAll('[data-lang]').forEach(function(btn){
      if (btn._langBound) return;
      btn._langBound = true;
      btn.addEventListener('click', function(e){
        var l = btn.getAttribute('data-lang');
        if (!l) return;
        var url = new URL(location.href);
        url.searchParams.set('lang', l);
        location.href = url.toString();
      });
    });
  }

  function applyTranslations(strings) {
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (key && strings[key]) {
        el.textContent = strings[key];
      }
    });
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

  // Ajoute ?lang=xx aux liens internes; évite les liens externes/mailto/ancres
  function appendLangToLinks(lang) {
    document.querySelectorAll('a[href]').forEach(function(a){
      try {
        var href = a.getAttribute('href') || '';
        if (!href) return;
        if (/^(?:https?:|mailto:|tel:|#)/.test(href)) return;
        // si absolute root (/something) ou BASE prefixed, construire URL puis set lang
        var abs = href;
        if (window.location.protocol === 'file:') {
          // en file:// on ne peut pas utiliser new URL de la même façon, on laisse tel quel
          // ajouter simplement ?lang si absent
          if (href.indexOf('?') === -1) a.href = href + '?lang=' + lang;
          else a.href = href.replace(/([?&])lang=[^&]*(&?)/, function(_,a,b){ return a + 'lang=' + lang + (b||''); }) || href + '&lang=' + lang;
          return;
        }
        if (!href.startsWith('/')) {
          // si ne commence pas par /, préfixer par BASE
          abs = (window.BASE ? window.BASE.replace(/\/+$/,'/') : '/') + href.replace(/^\.\//,'').replace(/^\//,'');
        }
        var u = new URL(abs, location.origin);
        u.searchParams.set('lang', lang);
        a.href = u.pathname + u.search + u.hash;
      } catch(e){}
    });
  }

  function includePartials() {
    var nodes = document.querySelectorAll('[data-include]');
    if (!nodes.length) return Promise.resolve();
    var promises = Array.prototype.map.call(nodes, function(node){
      var name = node.getAttribute('data-include');
      return fetchPartialWithFallback(name).then(function(res){
        node.innerHTML = res.text;
        processPlaceholders(node);
        return {name:name, url: res.url};
      }).catch(function(err){
        console.error('include: failed to load partial "'+name+'". Tried candidates. Error:', err);
        return {name:name, url:null, error:err};
      });
    });
    return Promise.all(promises);
  }

  function loadTranslations(lang) {
    var url = (window.BASE ? window.BASE.replace(/\/+$/,'/') : '/') + 'assets/lang/' + lang + '.json';
    // aussi essayer /assets/lang/... and assets/lang/... si nécessaire
    return fetchJSON(url).catch(function(){
      // fallback candidates
      var c = [
        '/assets/lang/' + lang + '.json',
        'assets/lang/' + lang + '.json',
        '../assets/lang/' + lang + '.json'
      ];
      var p = Promise.reject();
      c.forEach(function(u){
        p = p.catch(function(){ return fetchJSON(u); });
      });
      return p.catch(function(err){
        console.warn('Translations not found for', lang, err);
        return {};
      });
    });
  }

  // Expose minimal API
  window.site = window.site || {};
  window.site.getLang = getLang;
  window.site.changeLang = function(l){ var url = new URL(location.href); url.searchParams.set('lang', l); location.href = url.toString(); };
  window.site.BASE = window.BASE;

  // Initialisation principale
  function init() {
    var lang = getLang();
    includePartials().then(function(results){
      // useful debug: log loaded partials
      // console.log('partials loaded', results);
      return loadTranslations(lang);
    }).then(function(strings){
      applyTranslations(strings);
      appendLangToLinks(lang);
      if (window.initUI && typeof window.initUI === 'function') {
        try { window.initUI(lang, strings); } catch(e){ console.error('initUI error', e); }
      }
    }).catch(function(err){
      console.error('include.js init error', err);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // document already parsed, init immediately
    setTimeout(init, 0);
  }
})();
