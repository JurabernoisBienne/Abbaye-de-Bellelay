/* include.js
 - Charge partials header/footer/lang-switcher et injecte dans la page.
 - Récupère les textes locaux (JSON) depuis chaque page (script#page-i18n) et applique les labels.
 - Gère le mapping des pages entre langues (pour le sélecteur de langue).
 - Aucun texte localisé dans ce fichier : il lit les traductions depuis la page HTML.
*/
(function(){
  'use strict';

  // Utility : try several relative paths to find partials (works with repo subpaths)
  function fetchPartial(relativePaths, onSuccess){
    (function attempt(i){
      if(i>=relativePaths.length){ console.error('partials not found:', relativePaths); return; }
      fetch(relativePaths[i]).then(function(r){
        if(!r.ok) throw new Error('not ok');
        return r.text();
      }).then(function(text){
        onSuccess(text, relativePaths[i]);
      }).catch(function(){
        attempt(i+1);
      });
    })(0);
  }

  // List of candidate prefixes from /fr/ pages: ../partials/, ../../partials/, ./partials/
  var prefixes = ['../partials/','../../partials/','./partials/','/partials/'];

  // Insert a partial into a target selector
  function insertPartial(name, targetSelector){
    var paths = prefixes.map(function(p){ return p + name; });
    fetchPartial(paths, function(html){
      var container = document.querySelector(targetSelector);
      if(container){
        container.innerHTML = html;
        // dispatch event after injection
        container.dispatchEvent(new Event('partial:loaded'));
      }
    });
  }

  // Determine current language by path segment (/fr/, /de/, /en/)
  function currentLang(){
    var m = location.pathname.match(/\/(fr|de|en)\//);
    return m ? m[1] : 'fr';
  }

  // Basic page-key mapping (filenames) — kept as structural info (not user-facing text)
  var pageMap = {
    program: {fr:'programmes.html', de:'programme.html', en:'programs.html'},
    surplace:{fr:'sur-place.html', de:'vor-ort.html', en:'on-site.html'},
    disciplines:{fr:'disciplines.html', de:'disziplinen.html', en:'disciplines.html'},
    tarifs:{fr:'tarifs.html', de:'preise.html', en:'pricing.html'},
    patrimoine:{fr:'patrimoine.html', de:'kulturerbe.html', en:'heritage.html'},
    contact:{fr:'contact.html', de:'kontakt.html', en:'contact.html'},
    home:{fr:'programmes.html', de:'programme.html', en:'programs.html'}
  };

  // Reverse lookup: given filename, find page key
  function findPageKey(filename){
    filename = filename.split('/').pop();
    for(var k in pageMap){
      for(var lang in pageMap[k]){
        if(pageMap[k][lang] === filename) return k;
      }
    }
    return 'home';
  }

  // Build href for a data-page and a language
  function hrefFor(pageKey, lang){
    var prefix = '../' + lang + '/';
    var fname = pageMap[pageKey] ? pageMap[pageKey][lang] : pageMap['home'][lang];
    return prefix + fname;
  }

  // After header/footer injection, populate text and links using page-i18n JSON
  function bindI18nAndLinks(){
    var i18nScript = document.getElementById('page-i18n');
    var strings = {};
    if(i18nScript){
      try{ strings = JSON.parse(i18nScript.textContent); }catch(e){ console.warn('i18n parse error', e); }
    }

    var lang = currentLang();
    // Fill text nodes for elements with data-key
    document.querySelectorAll('[data-key]').forEach(function(el){
      var key = el.getAttribute('data-key');
      var text = (strings && getNested(strings, key)) || '';
      if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea'){
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    });

    // Set hrefs for anchors with data-page
    document.querySelectorAll('[data-page]').forEach(function(a){
      var pageKey = a.getAttribute('data-page');
      if(!pageMap[pageKey]) pageKey = findPageKey(pageKey);
      var target = hrefFor(pageKey, lang);
      a.setAttribute('href', target);
    });

    // Language switcher: set links to matching page in other languages
    var currentFile = location.pathname.split('/').pop();
    var pageKey = findPageKey(currentFile);
    document.querySelectorAll('[data-lang]').forEach(function(a){
      var toLang = a.getAttribute('data-lang');
      a.setAttribute('href', hrefFor(pageKey, toLang));
      // mark current lang
      if(toLang === lang) a.setAttribute('aria-current','true');
    });

    // Update document title if provided
    var titleKey = strings['pageTitle'];
    if(titleKey){
      document.title = titleKey;
    }
  }

  function getNested(obj, key){
    if(!key) return '';
    return key.split('.').reduce(function(acc,k){ return acc && acc[k] !== undefined ? acc[k] : ''; }, obj);
  }

  // Load partials into placeholders and then bind texts
  document.addEventListener('DOMContentLoaded', function(){
    insertPartial('header.html', '#header');
    insertPartial('footer.html', '#footer');
    insertPartial('lang-switcher.html', '#lang-switcher');

    // When all partials are loaded, apply i18n & links.
    // We'll listen for partial:loaded on each placeholder and then run bind once all three exist.
    var loaded = {header:false, footer:false, lang:false};
    function checkAndBind(){
      if(loaded.header && loaded.footer && loaded.lang){
        bindI18nAndLinks();
        // dispatch an event so main.js can hook behaviors if needed
        document.dispatchEvent(new Event('includes:ready'));
      }
    }
    var headerEl = document.querySelector('#header');
    if(headerEl) headerEl.addEventListener('partial:loaded', function(){ loaded.header=true; checkAndBind(); });
    var footerEl = document.querySelector('#footer');
    if(footerEl) footerEl.addEventListener('partial:loaded', function(){ loaded.footer=true; checkAndBind(); });
    var langEl = document.querySelector('#lang-switcher');
    if(langEl) langEl.addEventListener('partial:loaded', function(){ loaded.lang=true; checkAndBind(); });

    // Basic menu toggle for small screens (delegated)
    document.addEventListener('click', function(e){
      var t = e.target;
      if(t && t.id === 'menu-toggle'){
        var btn = t;
        var nav = document.getElementById('main-nav');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', (!expanded).toString());
        if(nav){
          nav.style.display = expanded ? 'none' : 'block';
        }
      }
    });
  });
})();