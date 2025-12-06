// include.js - load partials and wire language selector
(function(){
  'use strict';
  const BASE = '/Abbaye-de-Bellelay/partials/';

  // Load partials
  document.querySelectorAll('[data-include]').forEach(function(el){
    const name = el.getAttribute('data-include');
    const url = BASE + name + '.html';
    fetch(url, {credentials:'same-origin'}).then(function(resp){
      if(!resp.ok) throw new Error('Failed to load ' + url);
      return resp.text();
    }).then(function(html){
      el.innerHTML = html;
      // After injecting header, wire nav toggle
      if(name === 'header') wireHeader(el);
    }).catch(function(err){
      console.error(err);
    });
  });

  function wireHeader(root){
    const select = root.querySelector('#lang-select');
    if(!select) return;
    // set select from URL param
    const lang = getLangFromUrl() || 'fr';
    select.value = lang;
    select.addEventListener('change', function(){
      // update current URL preserving path, replace lang param and reload
      const url = new URL(location.href);
      url.searchParams.set('lang', select.value);
      // set location to same page with lang param (absolute path preserved)
      location.href = url.pathname + url.search;
    });

    // Small screen nav toggle
    const toggle = root.querySelector('.nav-toggle');
    const nav = root.querySelector('.main-nav');
    if(toggle && nav){
      toggle.addEventListener('click', function(){
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav.style.display = expanded ? '' : 'block';
      });
    }
  }

  function getLangFromUrl(){
    const params = new URLSearchParams(location.search);
    return params.get('lang');
  }
})();