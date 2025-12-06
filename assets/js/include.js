/* assets/js/include.js (auto-detect BASE_PATH)
   Cette version tente de deviner automatiquement BASE_PATH pour GitHub Pages
   (project page vs user/org page) et peut être surchargée avant chargement via :
     window.SITE_BASE_PATH = '/MyRepo';
   ou via une meta dans <head> :
     <meta name="site-base-path" content="/MyRepo">
   Si vide -> '' (user/org page).

   NOTE: include.js doit être référencé dans vos pages. Si vous préférez forcer
   le chemin, définissez window.SITE_BASE_PATH AVANT que ce script soit exécuté.
*/
(function(){
  'use strict';

  // ----- Utilities -----
  function stripTrailingSlash(s){ return (s || '').replace(/\/$/, ''); }

  // Detect BASE_PATH:
  function detectBasePath(){
    // 1) global override
    if(typeof window !== 'undefined' && typeof window.SITE_BASE_PATH === 'string'){
      return stripTrailingSlash(window.SITE_BASE_PATH);
    }
    // 2) meta tag override
    try{
      var meta = document.querySelector('meta[name="site-base-path"]');
      if(meta && meta.getAttribute('content')) return stripTrailingSlash(meta.getAttribute('content'));
    }catch(e){}
    // 3) infer from pathname
    var p = location.pathname || '/';
    // If path like /repo/fr/... => BASE_PATH = /repo
    var m = p.match(/^\/([^\/]+)\/(fr|de|en)(\/|$)/);
    if(m) return '/' + m[1];
    // If path like /fr/... => user/org page -> ''
    m = p.match(/^\/(fr|de|en)(\/|$)/);
    if(m) return '';
    // If path contains .../<lang>/ further in path, assume prefix is everything before /<lang>
    m = p.match(/^(.*)\/(fr|de|en)(\/|$)/);
    if(m) return stripTrailingSlash(m[1]);
    // Fallback empty
    return '';
  }

  var BASE_PATH = detectBasePath(); // e.g. '/Abbaye-de-Bellelay' or ''
  // Expose for debugging / other scripts
  window.SITE_INCLUDES = window.SITE_INCLUDES || {};
  window.SITE_INCLUDES.BASE_PATH = BASE_PATH;

  // ----- Page map and menu (relative paths) -----
  var PAGE_MAP = {
    'fr': {
      'programmes.html':'programmes.html',
      'sur-place.html':'sur-place.html',
      'disciplines.html':'disciplines.html',
      'tarifs.html':'tarifs.html',
      'patrimoine.html':'patrimoine.html',
      'contact.html':'contact.html'
    },
    'de': {
      'programme.html':'programme.html',
      'vor-ort.html':'vor-ort.html',
      'disziplinen.html':'disziplinen.html',
      'preise.html':'preise.html',
      'kulturerbe.html':'kulturerbe.html',
      'kontakt.html':'kontakt.html'
    },
    'en': {
      'programs.html':'programs.html',
      'on-site.html':'on-site.html',
      'disciplines.html':'disciplines.html',
      'pricing.html':'pricing.html',
      'heritage.html':'heritage.html',
      'contact.html':'contact.html'
    }
  };

  // Menu items defined as relative hrefs; we will prefix BASE_PATH when building
  var MENU = {
    'fr': [
      {label:'Programmes', href: '/fr/programmes.html'},
      {label:'Sur place', href: '/fr/sur-place.html'},
      {label:'Disciplines', href: '/fr/disciplines.html'},
      {label:'Tarifs', href: '/fr/tarifs.html'},
      {label:'Patrimoine', href: '/fr/patrimoine.html'},
      {label:'Contact', href: '/fr/contact.html'}
    ],
    'de': [
      {label:'Programm', href: '/de/programme.html'},
      {label:'Vor Ort', href: '/de/vor-ort.html'},
      {label:'Disziplinen', href: '/de/disziplinen.html'},
      {label:'Preise', href: '/de/preise.html'},
      {label:'Kulturerbe', href: '/de/kulturerbe.html'},
      {label:'Kontakt', href: '/de/kontakt.html'}
    ],
    'en': [
      {label:'Programs', href: '/en/programs.html'},
      {label:'On-site', href: '/en/on-site.html'},
      {label:'Disciplines', href: '/en/disciplines.html'},
      {label:'Pricing', href: '/en/pricing.html'},
      {label:'Heritage', href: '/en/heritage.html'},
      {label:'Contact', href: '/en/contact.html'}
    ]
  };

  // ----- Helpers -----
  function currentLanguage(){
    var m = location.pathname.match(/^\/(?:[^\/]+)?\/?(fr|de|en)(\/|$)/);
    return m ? m[1] : 'fr';
  }

  function prefix(href){
    // Only prefix root-absolute links (starting with '/')
    if(!href) return href;
    if(href.indexOf('/') !== 0) return href; // relative already
    // If href already begins with BASE_PATH, avoid double prefix
    if(BASE_PATH && href.indexOf(BASE_PATH + '/') === 0) return href;
    return (BASE_PATH || '') + href;
  }

  function mapFilenameToLang(filename, fromLang, toLang){
    var fromMap = PAGE_MAP[fromLang];
    var toMap = PAGE_MAP[toLang];
    if(!fromMap || !toMap) return null;
    var keys = Object.keys(fromMap);
    for(var i=0;i<keys.length;i++){
      var key = keys[i];
      var f = fromMap[key];
      if(f === filename){
        return toMap[key] || null;
      }
    }
    for(var k in toMap){
      if(toMap[k] === filename) return filename;
    }
    return null;
  }

  function getDefaultForLang(l){
    return (l === 'fr') ? 'patrimoine.html' : (l === 'de') ? 'kulturerbe.html' : 'heritage.html';
  }

  // Update <link> and <script> tags that point to root-absolute assets so they work with BASE_PATH
  function rewriteAssetTags(){
    // CSS links
    var links = document.querySelectorAll('link[href^="/"]');
    Array.prototype.forEach.call(links, function(ln){
      var href = ln.getAttribute('href');
      if(href && (href.indexOf('/assets/') === 0 || href.indexOf('/partials/') === 0)){
        ln.setAttribute('href', prefix(href));
      }
    });
    // Scripts (exclude this running script if necessary)
    var scripts = document.querySelectorAll('script[src^="/"]');
    Array.prototype.forEach.call(scripts, function(sc){
      var src = sc.getAttribute('src');
      if(src && (src.indexOf('/assets/') === 0 || src.indexOf('/partials/') === 0)){
        sc.setAttribute('src', prefix(src));
      }
    });
  }

  // Build language selector
  function buildLangSelector(lang){
    var el = document.getElementById('lang-select');
    if(!el) return;
    var parts = location.pathname.split('/');
    var filename = parts.pop() || parts.pop();
    var curLang = lang;
    var fragment = location.hash || '';
    var query = location.search || '';

    var container = document.createDocumentFragment();
    ['fr','de','en'].forEach(function(l){
      var targetFile = mapFilenameToLang(filename, curLang, l);
      var file = targetFile || getDefaultForLang(l);
      var a = document.createElement('a');
      a.setAttribute('lang', l);
      a.setAttribute('href', prefix('/' + l + '/' + file + query + fragment));
      if(l === curLang) a.setAttribute('aria-current', 'true');
      a.textContent = l.toUpperCase();
      container.appendChild(a);
    });
    el.innerHTML = '';
    el.appendChild(container);
  }

  // Build menu
  function buildMenu(lang){
    var list = document.getElementById('menu-list');
    if(!list) return;
    var items = MENU[lang] || MENU['fr'];
    list.innerHTML = '';
    items.forEach(function(it){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = prefix(it.href);
      a.textContent = it.label;
      a.setAttribute('role','menuitem');
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // Load a partial into nodes with data-include
  function loadPartial(name){
    var targets = document.querySelectorAll('[data-include="'+name+'"]');
    if(!targets.length) return;
    var url = prefix('/partials/' + name + '.html');
    fetch(url, {cache:'no-cache'}).then(function(res){
      if(!res.ok) throw new Error('Fetch error ' + res.status);
      return res.text();
    }).then(function(html){
      targets.forEach(function(t){
        if(name === 'head'){
          // Insert into head
          var frag = document.createElement('div');
          frag.innerHTML = html;
          // Move children into document.head
          while(frag.firstChild){
            document.head.appendChild(frag.firstChild);
          }
        } else {
          t.innerHTML = html;
        }
      });

      if(name === 'header'){
        var lang = currentLanguage();
        buildMenu(lang);
        buildLangSelector(lang);

        // Nav toggle behavior (mobile)
        var navToggle = document.getElementById('nav-toggle');
        var mainNav = document.getElementById('main-nav');
        if(navToggle){
          navToggle.addEventListener('click', function(){
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            if(mainNav) mainNav.style.display = expanded ? '' : 'block';
          });
        }
      }

      if(name === 'footer'){
        var y = new Date().getFullYear();
        var el = document.getElementById('current-year');
        if(el) el.textContent = y;
        var footerContact = document.getElementById('footer-contact');
        if(footerContact){
          var lang = currentLanguage();
          var contactFile = (lang === 'fr') ? 'contact.html' : (lang === 'de') ? 'kontakt.html' : 'contact.html';
          footerContact.setAttribute('href', prefix('/' + lang + '/' + contactFile));
        }
      }
    }).catch(function(err){
      // degrade gracefully
      console.error('include.js error loading', url, err);
    });
  }

  function initIncludes(){
    // Before doing includes, rewrite asset tags so e.g. /assets/css/style.css becomes prefixed
    rewriteAssetTags();

    var nodes = document.querySelectorAll('[data-include]');
    nodes.forEach(function(n){
      var name = n.getAttribute('data-include');
      loadPartial(name);
    });
  }

  // Run on DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initIncludes);
  } else {
    initIncludes();
  }

  // Export useful items
  window.SITE_INCLUDES.buildMenu = function(lang){ buildMenu(lang); };
  window.SITE_INCLUDES.buildLangSelector = function(lang){ buildLangSelector(lang); };
  window.SITE_INCLUDES.prefix = prefix;
})();