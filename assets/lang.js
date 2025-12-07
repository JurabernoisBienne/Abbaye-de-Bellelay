/* assets/lang.js
   - Same robust lookup & URL update as before
   - Expanded patrimoine (pat) entries: years, brief and longer text for modal, in FR/DE/EN
*/
(function(){
  const translations = {
    fr: {
      brand: "Abbaye de Bellelay",
      aria: { lang: "Langue" },
      nav: {
        programmes: "Programmes",
        surplace: "Sur place",
        disciplines: "Disciplines",
        tarifs: "Tarifs",
        patrimoine: "Patrimoine",
        contact: "Contact"
      },
      hero: { title: "Un lieu pour penser, créer et se rencontrer", subtitle: "Programmes culturels, résidences, formations et événements." },
      title: {
        programmes: "Programmes — Abbaye de Bellelay",
        surplace: "Sur place — Abbaye de Bellelay",
        disciplines: "Disciplines — Abbaye de Bellelay",
        tarifs: "Tarifs — Abbaye de Bellelay",
        patrimoine: "Patrimoine — Abbaye de Bellelay",
        contact: "Contact — Abbaye de Bellelay"
      },
      // ... other translations unchanged (kept from your current file) ...
      patrimoine: { title: "Patrimoine", subtitle: "Une frise de la mémoire", heading: "Frise chronologique" },
      pat: {
        p1: {
          years: "Depuis 2022",
          title: "Réouverture et mission culturelle",
          brief: "Réaffectation du site et ouverture au public, développement d’un programme culturel renouvelé.",
          text: "Depuis 2022, l'Abbaye de Bellelay a entamé une nouvelle phase : restauration sélective des bâtiments, aménagement d'espaces d'exposition et lancement d'un programme de résidences, d'ateliers et d’événements publics. L’accent est mis sur l’accessibilité, la médiation et la réactivation du patrimoine par des activités culturelles et formatives."
        },
        p2: {
          years: "1890–2022",
          title: "Période industrielle et transformations",
          brief: "Utilisations industrielles et modifications structurelles ayant marqué l’aspect du site.",
          text: "Entre 1890 et 2022, le site a été largement transformé par des usages industriels et productifs : installation d’ateliers, modifications des volumes intérieurs et adaptations techniques. Ces usages ont parfois altéré des éléments patrimoniaux, mais ont aussi contribué à la survie matérielle de certains bâtiments, ouvrant la voie à des reconversions successives."
        },
        p3: {
          years: "1797–1890",
          title: "Sécularisation et premières reconversions",
          brief: "Période où l'abbaye perd ses fonctions monastiques et trouve de nouveaux usages civils.",
          text: "Après les événements révolutionnaires de la fin du XVIIIe siècle, l’abbaye est sécularisée et cesse sa vocation monastique. S’ensuivent des phases de vente, de division de parties du domaine et d’emplois variés — agricoles, administratifs et parfois résidentiels — qui modifient l’organisation interne du site."
        },
        p4: {
          years: "1714–1797",
          title: "Apogée monastique",
          brief: "Période d’expansion architecturale et d’importance religieuse et sociale dans la région.",
          text: "Les XVIIIe et début XIXe siècles correspondent à une phase d'essor pour la communauté monastique : agrandissements, aménagements décoratifs et intensification des activités religieuses, éducatives et économiques. De nombreux éléments architecturaux encore visibles aujourd’hui datent de cette période."
        },
        p5: {
          years: "1136–1714",
          title: "Fondation et longue histoire médiévale",
          brief: "Origines médiévales, construction du noyau historique et rôle spirituel durable.",
          text: "Fondée en 1136, l'abbaye se développe au Moyen Âge comme un centre spirituel, culturel et économique pour la région. Les premières constructions, les cloîtres et les structures monastiques établissent le noyau du patrimoine bâti. Cette longue période pose les bases de l’identité historique du site."
        }
      },
      // ... rest of translations ...
      // (keep the other sections from your existing lang.js — only the pat block is shown/updated here for brevity)
    },
    de: {
      brand: "Abbaye de Bellelay",
      aria: { lang: "Sprache" },
      // ... other translations ...
      patrimoine: { title: "Erbe", subtitle: "Eine Zeitleiste", heading: "Zeitleiste" },
      pat: {
        p1: {
          years: "Seit 2022",
          title: "Wiedereröffnung und kulturelle Mission",
          brief: "Neunutzung des Geländes und öffentliche Öffnung mit neuem Kulturprogramm.",
          text: "Seit 2022 befindet sich die Abtei Bellelay in einer neuen Phase: gezielte Restaurierungen, Einrichtung von Ausstellungsräumen und Start eines Programms mit Residenzen, Workshops und öffentlichen Veranstaltungen. Der Fokus liegt auf Zugänglichkeit, Vermittlung und Aktivierung des Kulturerbes durch kulturelle und bildungsbezogene Aktivitäten."
        },
        p2: {
          years: "1890–2022",
          title: "Industrielle Periode und Umwandlungen",
          brief: "Industrielle Nutzung und strukturelle Veränderungen prägten das Erscheinungsbild.",
          text: "Zwischen 1890 und 2022 wurde der Ort überwiegend industriell genutzt: Werkstätten, innere Strukturveränderungen und technische Anpassungen. Diese Perioden führten zu teils substanziellen Eingriffen, ermöglichten aber zugleich die materielle Erhaltung bestimmter Bauabschnitte und legten Grundlagen für spätere Umnutzungen."
        },
        p3: {
          years: "1797–1890",
          title: "Säkularisation und erste Umnutzungen",
          brief: "Das Kloster verliert seine monastische Funktion und wird zivil genutzt.",
          text: "Nach der Revolution wurde das Kloster säkularisiert und seine Rolle als Ordensniederlassung beendet. Es folgten Verkäufe, Teilungen und wechselnde Verwendungen (landwirtschaftlich, administrativ, wohnlich), die die Struktur des Ortes veränderten."
        },
        p4: {
          years: "1714–1797",
          title: "Klösterliche Blütezeit",
          brief: "Architektonische Erweiterungen und ausgeprägte religiöse Aktivität.",
          text: "Im 18. Jahrhundert erlebte die Gemeinschaft eine Phase des Wachstums: Erweiterungen, dekorative Ausstattungen und verstärkte religiöse, bildungsbezogene und wirtschaftliche Tätigkeiten prägten den Ort. Zahlreiche heute sichtbare Strukturen stammen aus dieser Zeit."
        },
        p5: {
          years: "1136–1714",
          title: "Gründung und mittelalterliche Entwicklung",
          brief: "Gründungszeit, Bau des historischen Kerns und religiöse Bedeutung.",
          text: "Gegründet 1136, entwickelte sich die Abtei im Mittelalter zu einem Zentrum spirituellen, kulturellen und wirtschaftlichen Lebens. Die ersten Bauphasen, Kreuzgänge und klösterlichen Strukturen formten das historische Fundament des Ensembles."
        }
      }
    },
    en: {
      brand: "Abbaye de Bellelay",
      aria: { lang: "Language" },
      // ... other translations ...
      patrimoine: { title: "Heritage", subtitle: "A timeline", heading: "Timeline" },
      pat: {
        p1: {
          years: "Since 2022",
          title: "Reopening and cultural mission",
          brief: "Site repurposing and public opening with a renewed cultural programme.",
          text: "Since 2022 the Abbey of Bellelay entered a new phase: selective restoration, adaptation of exhibition spaces and the launch of a programme of residencies, workshops and public events. The emphasis is on accessibility, mediation and reactivating the heritage through cultural and educational activities."
        },
        p2: {
          years: "1890–2022",
          title: "Industrial use and transformations",
          brief: "Industrial uses and structural changes that left visible marks on the site.",
          text: "From 1890 to 2022 the site saw extensive industrial uses: workshops, structural alterations and technical adaptations. Those periods sometimes altered heritage elements, but also contributed to the physical preservation of buildings and enabled successive reuses."
        },
        p3: {
          years: "1797–1890",
          title: "Secularization and early reuses",
          brief: "The abbey loses its monastic function and is used for civil purposes.",
          text: "After the revolutionary era the abbey was secularized and ceased to function as a monastery. Sales, parceling and varying civil uses (agricultural, administrative, residential) followed, reshaping the internal organisation of the site."
        },
        p4: {
          years: "1714–1797",
          title: "Monastic heyday",
          brief: "Period of architectural growth and strong religious/social role.",
          text: "The 18th century saw a flourishing of the monastic community, with expansions, decorative works and intensified religious, educational and economic activities. Many of the present architectural elements date from this phase."
        },
        p5: {
          years: "1136–1714",
          title: "Foundation and medieval history",
          brief: "Medieval origins: construction of the historic core and long-standing significance.",
          text: "Founded in 1136, the abbey developed into a central spiritual, cultural and economic site in the Middle Ages. Early constructions, cloisters and monastic structures established the historical core of the ensemble."
        }
      }
    }
  };

  // --- robust lookup & URL helpers (unchanged) ---
  function getLang(){
    const params = new URLSearchParams(location.search);
    const l = (params.get('lang') || 'fr').toLowerCase();
    return ['fr','de','en'].includes(l) ? l : 'fr';
  }

  function lookup(dict, key){
    if(!key || !dict) return null;
    if(Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];

    const parts = key.split('.');
    let val = dict;
    for(let i = 0; i < parts.length; i++){
      const p = parts[i];
      if(typeof val === 'object' && val !== null && Object.prototype.hasOwnProperty.call(val, p)){
        const parent = val;
        val = val[p];
        if((typeof val !== 'object' || val === null) && i < parts.length - 1){
          const restKey = parts.slice(i + 1).join('.');
          const compound = p + '.' + restKey;
          if(Object.prototype.hasOwnProperty.call(parent, compound)){
            return parent[compound];
          }
          return null;
        }
      } else {
        const restKey = parts.slice(i).join('.');
        if(typeof val === 'object' && val !== null && Object.prototype.hasOwnProperty.call(val, restKey)){
          return val[restKey];
        }
        return null;
      }
    }
    return val;
  }

  function applyLang(lang){
    // existing application logic - apply all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = lookup(translations[lang] || translations.fr, key);
      if(val !== null && typeof val !== 'object'){
        el.textContent = val;
      }
    });

    // update title mapping (kept from earlier version)
    const path = location.pathname.split('/').pop();
    const map = {
      'programmes.html': 'programmes',
      'surplace.html': 'surplace',
      'disciplines.html': 'disciplines',
      'tarifs.html': 'tarifs',
      'patrimoine.html': 'patrimoine',
      'contact.html': 'contact',
      '': 'programmes'
    };
    const key = map[path] || null;
    if(key && translations[lang] && translations[lang].title && translations[lang].title[key]){
      document.title = translations[lang].title[key];
    }

    const sel = document.getElementById('lang');
    if(sel) sel.value = lang;

    document.querySelectorAll('.main-nav a, .cta').forEach(a=>{
      try{
        const href = a.getAttribute('href');
        if(!href) return;
        const u = new URL(href, location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname + u.search + u.hash);
      }catch(e){}
    });
  }

  function updateUrlLangParam(newLang){
    try{
      const u = new URL(location.href);
      u.searchParams.set('lang', newLang);
      const newUrl = u.pathname + u.search + u.hash;
      history.replaceState(null, document.title, newUrl);
      if((new URL(location.href)).searchParams.get('lang') === newLang) return;
      history.pushState(null, document.title, newUrl);
    }catch(e){
      // ignore
    }
  }

  window.__abbayeLang = { getLang, applyLang, translations, updateUrlLangParam };

  document.addEventListener('DOMContentLoaded', function(){
    const lang = getLang();
    applyLang(lang);

    // timeline modal interaction already implemented in main.js;
    // ensure timeline buttons are focusable and accessible
    const sel = document.getElementById('lang');
    if(!sel) return;
    sel.addEventListener('change', function(){
      const newLang = sel.value;
      applyLang(newLang);
      updateUrlLangParam(newLang);
    });
  });
})();
