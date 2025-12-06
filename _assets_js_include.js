// include.js - inclusions (head, header, footer) and simple i18n
// No modules, vanilla JS

(function () {
  var translations = {
    fr: {
      site_title: "Abbaye de Bellelay",
      logo: "Abbaye de Bellelay",
      menu_programmes: "Programmes",
      menu_surplace: "Sur place",
      menu_disciplines: "Disciplines",
      menu_tarifs: "Tarifs",
      menu_patrimoine: "Patrimoine",
      menu_contact: "Contact",
      footer_contact: "Contact",
      footer_devis: "Demande d’offre",
      footer_copy: "© Abbaye de Bellelay — Tous droits réservés",
      programmes_title: "Programmes",
      prog_week: "Semaines immersives in-situ",
      prog_week_text: "Séjours pédagogiques et immersifs.",
      prog_summerschool: "Summer schools",
      prog_summerschool_text: "Stages intensifs internationaux.",
      prog_ateliers: "Ateliers et Projets",
      prog_ateliers_text: "Ateliers participatifs et collaborations.",
      prog_seminaires: "Séminaires et Congrès",
      prog_seminaires_text: "Salles et accompagnement pour événements.",
      prog_residences: "Résidences artistiques ou scientifiques",
      prog_residences_text: "Hébergements dédiés aux résidences.",
      prog_expo: "Expositions et Concerts",
      prog_expo_text: "Programme culturel ouvert au public.",
      surplace_title: "Sur place",
      surplace_hebergement: "Hébergement",
      surplace_hebergement_text: "Capacité d’accueil et chambres.",
      surplace_restauration: "Restauration",
      surplace_restauration_text: "Options culinaires locales.",
      surplace_espaces: "Espaces de formation",
      surplace_espaces_text: "Salles équipées pour enseignement.",
      surplace_alentours: "Alentours",
      surplace_alentours_text: "Randonnées et patrimoine local.",
      disciplines_title: "Disciplines",
      tarifs_title: "Tarifs — Demande de devis",
      tarifs_intro: "90.- à 130.- / personne / jour",
      devis_confirmation: "Votre demande a été préparée dans votre client mail.",
      patrimoine_title: "Patrimoine",
      contact_title: "Contact",
      contact_confirmation: "Merci — votre message a été préparé dans votre client mail.",
      contact_acces_title: "Accès et transports",
      contact_tp: "Transports publics",
      contact_tp_text: "Bus pour groupes, accès détaillé ..."
    },
    de: {
      site_title: "Abtei Bellelay",
      logo: "Abtei Bellelay",
      menu_programmes: "Programme",
      menu_surplace: "Vor Ort",
      menu_disciplines: "Disziplinen",
      menu_tarifs: "Preise",
      menu_patrimoine: "Kultur",
      menu_contact: "Kontakt",
      footer_contact: "Kontakt",
      footer_devis: "Angebotsanfrage",
      footer_copy: "© Abtei Bellelay — Alle Rechte vorbehalten",
      programmes_title: "Programme",
      prog_week: "Vor-Ort-Intensivwochen",
      prog_week_text: "Pädagogische und immersive Aufenthalte.",
      prog_summerschool: "Summer Schools",
      prog_summerschool_text: "Intensive internationale Kurse.",
      prog_ateliers: "Workshops und Projekte",
      prog_ateliers_text: "Partizipative Workshops und Kooperationen.",
      prog_seminaires: "Seminare und Kongresse",
      prog_seminaires_text: "Räumlichkeiten und Support für Events.",
      prog_residences: "Künstlerische und wissenschaftliche Residenzen",
      prog_residences_text: "Unterbringung für Residenzen.",
      prog_expo: "Ausstellungen und Konzerte",
      prog_expo_text: "Kulturelles Programm für die Öffentlichkeit.",
      surplace_title: "Vor Ort",
      surplace_hebergement: "Unterkunft",
      surplace_hebergement_text: "Kapazitäten und Zimmer.",
      surplace_restauration: "Verpflegung",
      surplace_restauration_text: "Regionale kulinarische Optionen.",
      surplace_espaces: "Ausbildungsräume",
      surplace_espaces_text: "Ausstattung für Lehrveranstaltungen.",
      surplace_alentours: "Umgebung",
      surplace_alentours_text: "Wandern und lokales Erbe.",
      disciplines_title: "Disziplinen",
      tarifs_title: "Preise — Anfrage",
      tarifs_intro: "90.- bis 130.- / Person / Tag",
      devis_confirmation: "Ihre Anfrage wurde in Ihrem Mail-Client vorbereitet.",
      patrimoine_title: "Kultur",
      contact_title: "Kontakt",
      contact_confirmation: "Danke — Ihre Nachricht wurde im Mail-Client vorbereitet.",
      contact_acces_title: "Anfahrt und Verkehr",
      contact_tp: "Öffentliche Verkehrsmittel",
      contact_tp_text: "Gruppenbusse und Fahrpläne prüfen."
    },
    en: {
      site_title: "Abbey of Bellelay",
      logo: "Abbey of Bellelay",
      menu_programmes: "Programmes",
      menu_surplace: "On site",
      menu_disciplines: "Disciplines",
      menu_tarifs: "Rates",
      menu_patrimoine: "Heritage",
      menu_contact: "Contact",
      footer_contact: "Contact",
      footer_devis: "Request an offer",
      footer_copy: "© Abbey of Bellelay — All rights reserved",
      programmes_title: "Programmes",
      prog_week: "Immersive in-situ weeks",
      prog_week_text: "Short pedagogical immersive stays.",
      prog_summerschool: "Summer schools",
      prog_summerschool_text: "Intensive international courses.",
      prog_ateliers: "Workshops and Projects",
      prog_ateliers_text: "Participatory workshops and collaborations.",
      prog_seminaires: "Seminars and Conferences",
      prog_seminaires_text: "Rooms and support for events.",
      prog_residences: "Artistic or scientific residencies",
      prog_residences_text: "Accommodation for residencies.",
      prog_expo: "Exhibitions and Concerts",
      prog_expo_text: "Cultural programme open to the public.",
      surplace_title: "On site",
      surplace_hebergement: "Accommodation",
      surplace_hebergement_text: "Capacity and rooms.",
      surplace_restauration: "Catering",
      surplace_restauration_text: "Local culinary options.",
      surplace_espaces: "Training spaces",
      surplace_espaces_text: "Rooms equipped for teaching.",
      surplace_alentours: "Surroundings",
      surplace_alentours_text: "Hiking and local heritage.",
      disciplines_title: "Disciplines",
      tarifs_title: "Rates — Request an offer",
      tarifs_intro: "90.- to 130.- / person / day",
      devis_confirmation: "Your request has been prepared in your mail client.",
      patrimoine_title: "Heritage",
      contact_title: "Contact",
      contact_confirmation: "Thank you — your message has been prepared in your mail client.",
      contact_acces_title: "Access and transport",
      contact_tp: "Public transport",
      contact_tp_text: "Group buses and schedules to check."
    }
  };

  function getLang() {
    var m = location.search.match(/[?&]lang=(fr|de|en)/);
    return (m && m[1]) || 'fr';
  }

  var lang = getLang();

  function applyTranslations(root) {
    root = root || document;
    var nodes = root.querySelectorAll('[data-i18n]');
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = (translations[lang] && translations[lang][key]) || '';
      if (text) {
        el.textContent = text;
      }
    });
  }

  function buildLangHref(targetLang) {
    var url = new URL(location.href);
    url.searchParams.set('lang', targetLang);
    return url.pathname + url.search;
  }

  function includePartials() {
    var includes = document.querySelectorAll('[data-include]');
    includes.forEach(function (node) {
      var name = node.getAttribute('data-include');
      var path = '/Abbaye-de-Bellelay/partials/' + name + '.html';
      fetch(path).then(function (res) {
        if (!res.ok) throw new Error('Failed to fetch ' + path);
        return res.text();
      }).then(function (html) {
        if (name === 'head') {
          document.head.insertAdjacentHTML('beforeend', html);
        } else {
          node.insertAdjacentHTML('afterend', html);
        }
      }).catch(function (err) {
        console.error(err);
      });
    });
  }

  function onPartialsLoaded() {
    var header = document.querySelector('header.site-header');
    if (!header) return;

    applyTranslations();

    var langLinks = header.querySelectorAll('.lang-link');
    langLinks.forEach(function (a) {
      var l = a.getAttribute('data-lang');
      a.href = buildLangHref(l);
      if (l === lang) {
        a.setAttribute('aria-current', 'true');
        a.classList.add('active');
      } else {
        a.removeAttribute('aria-current');
        a.classList.remove('active');
      }
    });

    var toggle = header.querySelector('.menu-toggle');
    var nav = header.querySelector('#main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        if (!expanded) {
          nav.style.display = 'block';
        } else {
          nav.style.display = '';
        }
      });
    }

    var navLinks = header.querySelectorAll('nav a');
    navLinks.forEach(function (a) {
      try {
        var u = new URL(a.href);
        u.searchParams.set('lang', lang);
        a.href = u.pathname + u.search;
      } catch (e) {
        a.href = a.getAttribute('href').split('?')[0] + '?lang=' + lang;
      }
    });

    var footer = document.querySelector('footer.site-footer');
    if (footer) {
      applyTranslations(footer);
      var footerLinks = footer.querySelectorAll('a');
      footerLinks.forEach(function (a) {
        try {
          var u = new URL(a.href);
          u.searchParams.set('lang', lang);
          a.href = u.pathname + u.search;
        } catch (e) {
          a.href = a.getAttribute('href').split('?')[0] + '?lang=' + lang;
        }
      });
    }

    applyTranslations(document);

    var main = document.getElementById('content');
    if (main) {
      main.setAttribute('tabindex', '-1');
    }
  }

  var obs = new MutationObserver(function (mutations, o) {
    var header = document.querySelector('header.site-header');
    if (header) {
      onPartialsLoaded();
      o.disconnect();
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });

  includePartials();

  window.ABB_INCLUDE = {
    getLang: function () { return lang; },
    setLang: function (l) {
      if (l === 'fr' || l === 'de' || l === 'en') {
        lang = l;
        location.search = '?lang=' + l;
      }
    },
    translate: applyTranslations
  };
})();