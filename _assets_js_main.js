// main.js - carousels, timeline, FAQ, modals, forms
// Vanilla JS, no modules

(function () {
  function qs(sel, root) { return (root||document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }

  function initCarousels() {
    qsa('.carousel').forEach(function (carousel) {
      var grid = qs('.carousel-grid', carousel);
      var slides = qsa('.slide', grid);
      var prev = qs('.prev', carousel);
      var next = qs('.next', carousel);
      var page = 0;
      function itemsPerPage() {
        return window.matchMedia('(min-width:768px)').matches ? 6 : 1;
      }
      function render() {
        var ipp = itemsPerPage();
        var pages = Math.ceil(slides.length / ipp);
        page = Math.max(0, Math.min(page, pages - 1));
        slides.forEach(function (s, i) {
          var visible = (Math.floor(i / ipp) === page);
          s.style.display = visible ? '' : 'none';
          s.setAttribute('aria-hidden', visible ? 'false' : 'true');
        });
      }
      if (prev) prev.addEventListener('click', function () { page--; render(); });
      if (next) next.addEventListener('click', function () { page++; render(); });
      var startX = null;
      if (grid) {
        grid.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, {passive:true});
        grid.addEventListener('touchend', function (e) {
          if (startX == null) return;
          var dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) {
            page += dx > 0 ? -1 : 1;
            render();
          }
          startX = null;
        });
      }
      window.addEventListener('resize', render);
      render();
    });
  }

  function initDisciplines() {
    var list = qs('#disc-list');
    if (!list) return;
    var contentTitle = qs('#discipline-title');
    var contentSummary = qs('#discipline-summary');
    var contentImage = qs('#discipline-image');

    var data = {
      architecture: {
        title: 'Architecture',
        summary: 'Études et interventions sur les bâtiments historiques.',
        img: '/Abbaye-de-Bellelay/assets/img/architecture.svg'
      },
      amenagement: {
        title: 'Aménagement du territoire',
        summary: 'Projets territoriaux et planification durable.',
        img: '/Abbaye-de-Bellelay/assets/img/amenagement.svg'
      },
      histoire: {
        title: 'Histoire',
        summary: 'Approche historique du site et des archives.',
        img: '/Abbaye-de-Bellelay/assets/img/histoire.svg'
      },
      culture: {
        title: 'Culture / Art',
        summary: 'Programmation culturelle et résidences artistiques.',
        img: '/Abbaye-de-Bellelay/assets/img/culture.svg'
      },
      circularite: {
        title: 'Circularité',
        summary: 'Initiatives d’économie circulaire en site patrimonial.',
        img: '/Abbaye-de-Bellelay/assets/img/circularite.svg'
      },
      tourisme: {
        title: 'Tourisme durable',
        summary: 'Accueil des visiteurs et tourisme responsable.',
        img: '/Abbaye-de-Bellelay/assets/img/tourisme.svg'
      },
      social: {
        title: 'Social',
        summary: 'Actions socioculturelles et inclusion.',
        img: '/Abbaye-de-Bellelay/assets/img/social.svg'
      },
      paix: {
        title: 'Paix et réparations de guerre',
        summary: 'Projets mémoriels et processus de réparation.',
        img: '/Abbaye-de-Bellelay/assets/img/paix.svg'
      }
    };

    list.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-key]');
      if (!btn) return;
      var key = btn.getAttribute('data-key');
      var d = data[key];
      if (d) {
        contentTitle.textContent = d.title;
        contentSummary.textContent = d.summary;
        contentImage.src = d.img;
        contentImage.alt = d.title;
      }
    });
  }

  function initTimeline() {
    var periods = qsa('.period');
    var modal = qs('#modal');
    if (!modal) return;
    var modalText = qs('#modal-text', modal);
    var modalImg = qs('#modal-img', modal);
    var closeBtn = qs('.modal-close', modal);

    var details = {
      'since2022': {
        title: 'Depuis 2022',
        img: '/Abbaye-de-Bellelay/assets/img/since2022.svg',
        text: 'Depuis 2022, focus sur projets éducatifs, culturels, artistiques et innovation circulaire. Description complète.'
      },
      '1890-2022': {
        title: '1890-2022',
        img: '/Abbaye-de-Bellelay/assets/img/1890-2022.svg',
        text: 'Acquisition du site par le canton de Berne. Histoire et usages durant la période.'
      },
      '1797-1890': {
        title: '1797-1890',
        img: '/Abbaye-de-Bellelay/assets/img/1797-1890.svg',
        text: 'Désacralisation, occupation des troupes françaises, transformations industrielles.'
      },
      '1714-1797': {
        title: '1714-1797',
        img: '/Abbaye-de-Bellelay/assets/img/1714-1797.svg',
        text: 'Reconstruction baroque de l’abbatiale, pensionnat et formation.'
      },
      '1136-1714': {
        title: '1136-1714',
        img: '/Abbaye-de-Bellelay/assets/img/1136-1714.svg',
        text: 'Monastère à vocation d’accueil, activités et métiers circulaires.'
      }
    };

    periods.forEach(function (p) {
      var key = p.getAttribute('data-key');
      var btn = p.querySelector('.period-btn');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var d = details[key];
        if (!d) return;
        modalImg.src = d.img;
        modalImg.alt = d.title;
        modalText.innerHTML = '<h2>' + d.title + '</h2><p>' + d.text + '</p>';
        modal.hidden = false;
        closeBtn.focus();
      });

      p.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          p.querySelector('.period-btn').click();
        }
      });
    });

    closeBtn.addEventListener('click', function () {
      modal.hidden = true;
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.hidden = true;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') modal.hidden = true;
    });
  }

  function initFAQ() {
    qsa('.faq').forEach(function (faq) {
      qsa('.faq-item', faq).forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        var ans = item.querySelector('.faq-answer');
        if (!btn || !ans) return;
        btn.addEventListener('click', function () {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          ans.hidden = expanded;
        });
      });
    });
  }

  function initForms() {
    var devis = qs('#devis-form');
    if (devis) {
      devis.addEventListener('submit', function (e) {
        e.preventDefault();
        var form = e.target;
        var data = new FormData(form);
        var bodyArr = [];
        data.forEach(function (v, k) { bodyArr.push(k + ': ' + v); });
        var subject = encodeURIComponent('Demande de devis — Abbaye de Bellelay');
        var mailto = 'mailto:info@abbaye-bellelay.example?subject=' + subject + '&body=' + encodeURIComponent(bodyArr.join('\n'));
        window.location.href = mailto;
        var conf = qs('#devis-confirm');
        if (conf) conf.hidden = false;
      });
    }

    var contact = qs('#contact-form');
    if (contact) {
      contact.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(contact);
        var subject = encodeURIComponent('Contact — Abbaye de Bellelay');
        var bodyLines = [];
        data.forEach(function (v, k) { bodyLines.push(k + ': ' + v); });
        var mailto = 'mailto:info@abbaye-bellelay.example?subject=' + subject + '&body=' + encodeURIComponent(bodyLines.join('\n'));
        window.location.href = mailto;
        var conf = qs('#contact-confirm');
        if (conf) conf.hidden = false;
      });
    }
  }

  function focusMain() {
    var main = qs('#content');
    if (main) {
      setTimeout(function () { main.focus(); }, 300);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCarousels();
    initDisciplines();
    initTimeline();
    initFAQ();
    initForms();
    focusMain();
  });
})();