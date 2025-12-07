/* assets/lang.js - translations + robust lookup and URL helpers
   - This file contains the translations for the site (FR/DE/EN)
   - It also exposes getLang/applyLang/translations/updateUrlLangParam on window.__abbayeLang
   - Added a `disciplines` section per language for the disciplines page content (title + paragraphs + image)
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

      /* ... other translations kept unchanged (programs, surplace, tarifs, patrimoine, etc.) ... */

      /* Disciplines content: titles, image paths and paragraphs in FR */
      disciplines: {
        architecture: {
          title: "Architecture",
          img: "assets/img/discipline-architecture.svg",
          paragraphs: [
            "À Bellelay l’architecture étudie le rapport entre formes historiques et interventions contemporaines : relevés, analyses matériaux, et discussions sur la conservation.",
            "Les ateliers combinent pratique et réflexion : relevés, maquettes, propositions de réaffectation et restitution publique.",
            "Les résidences favorisent l’expérimentation in-situ et la production d’outils documentaires liés au patrimoine bâti."
          ]
        },
        amenagement: {
          title: "Aménagement du territoire",
          img: "assets/img/discipline-amenagement.svg",
          paragraphs: [
            "L’aménagement interroge les liens entre territoire, ressources et usages : cartographies, plans et stratégies locales.",
            "Projets participatifs réunissant acteurs locaux, chercheurs et praticiens pour co-construire propositions territoriales.",
            "Études de mobilité, accessibilité et scénarios de paysage intégrant enjeux sociaux et écologiques."
          ]
        },
        histoire: {
          title: "Histoire",
          img: "assets/img/discipline-history.svg",
          paragraphs: [
            "Recherche historique et travail d’archives autour de l’abbaye : sources, mutations et récits locaux.",
            "Séminaires et projets éditoriaux permettent de restituer les résultats au public et de questionner les narrations régionales.",
            "Approches critiques qui mettent en lumière continuités, ruptures et usages politiques du patrimoine."
          ]
        },
        culture_art: {
          title: "Culture et art",
          img: "assets/img/discipline-art.svg",
          paragraphs: [
            "Programmes artistiques et expositions : création in-situ, dialogues interdisciplinaires et médiation culturelle.",
            "Résidences favorisant collaborations entre artistes et chercheurs pour produire œuvres et dispositifs contextuels.",
            "Actions publiques (vernissages, performances, ateliers) ancrent le projet sur le territoire et le rendent accessible."
          ]
        },
        circularity: {
          title: "Circularité",
          img: "assets/img/discipline-circularity.svg",
          paragraphs: [
            "Approches de circularité appliquées au bâtiment et aux pratiques : réemploi, cycles de matériaux et économie locale.",
            "Ateliers pratiques testant stratégies de récupération, fabrication locale et chaînes courtes dans un contexte patrimonial.",
            "Propositions visant à réduire déchets, valoriser matériaux et imaginer modèles économiques résilients."
          ]
        },
        tourisme: {
          title: "Tourisme durable",
          img: "assets/img/discipline-tourisme.svg",
          paragraphs: [
            "Stratégies de tourisme basées sur durabilité : mobilité douce, capacité d’accueil et respect des écosystèmes.",
            "Projets explorant expériences de visite responsable, circuits locaux et contribution aux économies régionales.",
            "Mise en place d’outils pour gérer flux, renforcer qualité d’accueil et articuler tourisme et patrimoine."
          ]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.svg",
          paragraphs: [
            "Approches sociales : inclusion, participation et dispositifs favorisant cohabitation et engagement local.",
            "Programmes soutenant initiatives communautaires, médiation et formats participatifs sur site.",
            "Axes de travail : accessibilité, accueil pour publics divers et collaborations intersectorielles."
          ]
        },
        paix: {
          title: "Paix & réparations de guerre",
          img: "assets/img/discipline-paix.svg",
          paragraphs: [
            "Thématiques de mémoire, réconciliation et pratiques de réparations liées à conflits historiques et contemporains.",
            "Ateliers et séminaires sur commémoration, justice transitionnelle et construction de récits partagés.",
            "Projets favorisant l’écoute, le travail de mémoire et la mise en place d’espaces de dialogue et de réparation."
          ]
        }
      },

      /* ... rest of translations ... */
      form: {
        entite: "Entité",
        nom: "Nom",
        prenom: "Prénom",
        tel: "Téléphone",
        email: "Email",
        dates: "Dates",
        nbpersonnes: "Nombre de personnes",
        nbchambres: "Nombre de chambres",
        typeRepas: "Type de repas",
        "repas.standard": "Standard",
        "repas.veg": "Végétarien",
        "repas.vegan": "Vegan",
        submit: "Envoyer la demande",
        message: "Message",
        send: "Envoyer"
      },
      cta: { devis: "Demander un devis" }
    },

    de: {
      brand: "Abbaye de Bellelay",
      aria: { lang: "Sprache" },
      nav: {
        programmes: "Programme",
        surplace: "Vor Ort",
        disciplines: "Disziplinen",
        tarifs: "Preise",
        patrimoine: "Erbe",
        contact: "Kontakt"
      },
      hero: { title: "Ein Ort zum Denken, Schaffen und Begegnen", subtitle: "Kulturelle Programme, Residenzen, Ausbildungen und Veranstaltungen." },
      title: {
        programmes: "Programme — Abbaye de Bellelay",
        surplace: "Vor Ort — Abbaye de Bellelay",
        disciplines: "Disziplinen — Abbaye de Bellelay",
        tarifs: "Preise — Abbaye de Bellelay",
        patrimoine: "Erbe — Abbaye de Bellelay",
        contact: "Kontakt — Abbaye de Bellelay"
      },



      /*disciplines fr et de*/
      amenagement: {
        title: "Aménagement du territoire",
        img: "assets/img/discipline-amenagement.svg",
        paragraphs: [
          "L’aménagement interroge les liens entre territoire, ressources et usages : cartographies, plans et stratégies locales.",
          "Projets participatifs réunissant acteurs locaux, chercheurs et praticiens pour co-construire propositions territoriales.",
          "Études de mobilité, accessibilité et scénarios de paysage intégrant enjeux sociaux et écologiques."
        ]
      },
      histoire: {
        title: "Histoire",
        img: "assets/img/discipline-history.svg",
        paragraphs: [
          "Recherche historique et travail d'archives autour de l'abbaye : sources, mutations et récits locaux.",
          "Séminaires et projets éditoriaux pour restituer les résultats au public et questionner les narrations régionales.",
          "Approches critiques mettant en lumière continuités, ruptures et usages politiques du patrimoine."
        ]
      },
      culture_art: {
        title: "Culture et art",
        img: "assets/img/discipline-art.svg",
        paragraphs: [
          "Programmes artistiques : création in-situ, expositions et dialogues interdisciplinaires.",
          "Résidences favorisant collaborations entre artistes et chercheurs, aboutissant à œuvres contextuelles.",
          "Actions publiques (vernissages, performances, ateliers) permettent la médiation et l'engagement local."
        ]
      },
      circularity: {
        title: "Circularité",
        img: "assets/img/discipline-circularity.svg",
        paragraphs: [
          "Approches de circularité appliquées au bâtiment et aux pratiques : réemploi, cycles de matériaux et économie locale.",
          "Ateliers pratiques sur récupération, réutilisation et fabrication locale en contexte patrimonial.",
          "Propositions concrètes visant à réduire les déchets et imaginer modèles économiques résilients."
        ]
      },
      tourisme: {
        title: "Tourisme durable",
        img: "assets/img/discipline-tourisme.svg",
        paragraphs: [
          "Stratégies de tourisme durable : mobilité douce, gestion des capacités et respect des écosystèmes.",
          "Expériences de visite responsable, circuits locaux et retombées pour l'économie régionale.",
          "Outils pour piloter les flux de visiteurs et articuler tourisme avec préservation du patrimoine."
        ]
      },
      social: {
        title: "Social",
        img: "assets/img/discipline-social.svg",
        paragraphs: [
          "Initiatives d'inclusion et participation, dispositifs favorisant engagements et cohabitation locale.",
          "Programmes soutenant les projets communautaires, médiation et formats participatifs sur site.",
          "Axes de travail : accessibilité, accueil de publics divers et partenariats intersectoriels."
        ]
      },
      paix: {
        title: "Paix & réparations de guerre",
        img: "assets/img/discipline-paix.svg",
        paragraphs: [
          "Thématiques de mémoire, réconciliation et pratiques de réparation liées aux conflits historiques et contemporains.",
          "Ateliers et séminaires sur commémoration, justice transitionnelle et construction de récits partagés.",
          "Projets favorisant l'écoute, la mémoire et l'instauration d'espaces de dialogue et réparation."
        ]
      }

       
      disciplines: {
        architecture: {
          title: "Architektur",
          img: "assets/img/discipline-architecture.svg",
          paragraphs: [
            "In Bellelay untersucht die Architektur das Verhältnis von historischer Form und zeitgenössischer Intervention: Vermessung, Materialanalyse und Erhaltungsdiskurse.",
            "Workshops verbinden Praxis und Theorie: Vermessung, Modellbau, Umnutzungsvorschläge und öffentliche Präsentationen.",
            "Residencies ermöglichen ortsbezogene Experimente und die Erstellung dokumentarischer Werkzeuge zum gebauten Erbe."
          ]
        },
        amenagement: {
          title: "Raumplanung",
          img: "assets/img/discipline-amenagement.svg",
          paragraphs: [
            "Die Raumplanung thematisiert Verbindungen zwischen Territorium, Ressourcen und Nutzung: Kartierungen, Konzepte und lokale Strategien.",
            "Partizipative Projekte bringen lokale Akteur*innen, Forschende und Praktiker*innen zusammen, um gemeinschaftlich Vorschläge zu entwickeln.",
            "Arbeiten umfassen Mobilitätsstudien, Zugänglichkeit und Landschaftsszenarien unter Berücksichtigung sozialer und ökologischer Fragen."
          ]
        },
        histoire: {
          title: "Geschichte",
          img: "assets/img/discipline-history.svg",
          paragraphs: [
            "Historische Forschung und Archivarbeit zur Abtei: Quellen, Wandel und lokale Narrative.",
            "Seminare und Publikationsprojekte geben Ergebnisse an die Öffentlichkeit weiter und hinterfragen regionale Erzählungen.",
            "Kritische Ansätze beleuchten Kontinuitäten, Brüche und politische Nutzungen des Erbes über die Zeit."
          ]
        },
        culture_art: {
          title: "Kultur & Kunst",
          img: "assets/img/discipline-art.svg",
          paragraphs: [
            "Kunstprogramme und Ausstellungen: ortsbezogene Schaffensprozesse, interdisziplinäre Dialoge und Vermittlung.",
            "Residenzen fördern Kooperationen zwischen Künstler*innen und Wissenschaft, führend zu kontextbezogenen Arbeiten.",
            "Öffentliche Formate (Vernissagen, Performances, Workshops) verankern das Projekt lokal und machen es zugänglich."
          ]
        },
        circularity: {
          title: "Zirkularität",
          img: "assets/img/discipline-circularity.svg",
          paragraphs: [
            "Zirkuläre Ansätze für Gebäude und Praxis: Wiederverwendung, Materialkreisläufe und lokale Ökonomie.",
            "Praktische Workshops erproben Rückbau-, Recycling- und lokale Produktionsstrategien im denkmalpflegerischen Kontext.",
            "Vorschläge zielen auf Abfallreduktion, Materialwertschöpfung und resilientere Geschäftsmodelle."
          ]
        },
        tourisme: {
          title: "Nachhaltiger Tourismus",
          img: "assets/img/discipline-tourisme.svg",
          paragraphs: [
            "Tourismusstrategien mit Fokus auf Nachhaltigkeit: sanfte Mobilität, Kapazitätsfragen und Ökosystemschutz.",
            "Projekte entwickeln verantwortungsvolle Besuchserfahrungen, lokale Routen und Beiträge zur regionalen Wirtschaft.",
            "Werkzeuge zur Steuerung von Besucherströmen, Qualitätssteigerung und Verbindung von Tourismus und Erbe."
          ]
        },
        social: {
          title: "Soziales",
          img: "assets/img/discipline-social.svg",
          paragraphs: [
            "Soziale Ansätze: Inklusion, Partizipation und Maßnahmen für gemeinschaftliches Engagement.",
            "Programme unterstützen lokale Initiativen, Vermittlung und partizipative Formate vor Ort.",
            "Fokus: Barrierefreiheit, Aufnahmeformate für diverse Zielgruppen und intersektorale Kooperationen."
          ]
        },
        paix: {
          title: "Frieden & Wiedergutmachung",
          img: "assets/img/discipline-paix.svg",
          paragraphs: [
            "Themen: Erinnerung, Versöhnung und Wiedergutmachungspraktiken im Kontext historischer und aktueller Konflikte.",
            "Workshops und Seminare zu Gedenken, transitionaler Gerechtigkeit und gemeinsamer Narrativbildung.",
            "Projekte fördern Zuhören, Erinnerungsarbeit und die Schaffung von Dialog- und Reparationsräumen."
          ]
        }
      },

      /* ... rest ... */
      form: {
        entite: "Einrichtung",
        nom: "Name",
        prenom: "Vorname",
        tel: "Telefon",
        email: "Email"
      },
      cta: { devis: "Angebot anfragen" }
    },

    en: {
      brand: "Abbaye de Bellelay",
      aria: { lang: "Language" },
      nav: {
        programmes: "Programs",
        surplace: "On-site",
        disciplines: "Disciplines",
        tarifs: "Rates",
        patrimoine: "Heritage",
        contact: "Contact"
      },
      hero: { title: "A place to think, create and meet", subtitle: "Cultural programmes, residencies, trainings and events." },
      title: {
        programmes: "Programs — Abbaye de Bellelay",
        surplace: "On-site — Abbaye de Bellelay",
        disciplines: "Disciplines — Abbaye de Bellelay",
        tarifs: "Rates — Abbaye de Bellelay",
        patrimoine: "Heritage — Abbaye de Bellelay",
        contact: "Contact — Abbaye de Bellelay"
      },

      /* ... other translations ... */

      disciplines: {
        architecture: {
          title: "Architecture",
          img: "assets/img/discipline-architecture.svg",
          paragraphs: [
            "At Bellelay architecture explores the relation between historic form and contemporary interventions: surveys, material analysis and conservation debates.",
            "Workshops mix practice and reflection: surveying, model-making, adaptive-reuse proposals and public outcomes.",
            "Residencies support on-site experimentation and production of documentary tools linked to the built heritage."
          ]
        },
        amenagement: {
          title: "Spatial planning",
          img: "assets/img/discipline-amenagement.svg",
          paragraphs: [
            "Spatial planning examines links between territory, resources and uses: mapping, planning and local strategies.",
            "Participatory projects bring local stakeholders, researchers and practitioners together to co-design proposals.",
            "Work includes mobility studies, accessibility and landscape scenarios integrating social and ecological concerns."
          ]
        },
        histoire: {
          title: "History",
          img: "assets/img/discipline-history.svg",
          paragraphs: [
            "Historical research and archival work on the abbey: sources, transformations and local narratives.",
            "Seminars and editorial projects share findings with the public and question regional storytelling.",
            "Critical approaches highlight continuities, ruptures and political uses of heritage across time."
          ]
        },
        culture_art: {
          title: "Culture & art",
          img: "assets/img/discipline-art.svg",
          paragraphs: [
            "Artistic programmes and exhibitions: on-site creation, interdisciplinary dialogue and cultural mediation.",
            "Residencies encourage artist–researcher collaborations, producing context-sensitive works and formats.",
            "Public actions (openings, performances, workshops) anchor the project in the territory and make it accessible."
          ]
        },
        circularity: {
          title: "Circularity",
          img: "assets/img/discipline-circularity.svg",
          paragraphs: [
            "Circular approaches for buildings and practice: reuse, material cycles and local economies.",
            "Hands-on workshops test recovery strategies, local making and short supply chains in a heritage context.",
            "Proposals aim to reduce waste, valorize materials and design resilient economic models."
          ]
        },
        tourisme: {
          title: "Sustainable tourism",
          img: "assets/img/discipline-tourisme.svg",
          paragraphs: [
            "Tourism strategies focused on sustainability: soft mobility, capacity and ecosystem respect.",
            "Projects explore responsible visitor experiences, local circuits and contributions to regional economies.",
            "Development of tools to manage flows, enhance quality and link tourism with heritage."
          ]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.svg",
          paragraphs: [
            "Social approaches: inclusion, participation and measures that foster cohabitation and local engagement.",
            "Programs support community initiatives, mediation and participatory formats on site.",
            "Focus areas: accessibility, welcoming diverse publics and intersectoral collaborations."
          ]
        },
        paix: {
          title: "Peace & war reparations",
          img: "assets/img/discipline-paix.svg",
          paragraphs: [
            "Themes of memory, reconciliation and reparative practices related to historical and contemporary conflicts.",
            "Workshops and seminars on commemoration, transitional justice and building shared narratives.",
            "Projects foster listening, memory work and creation of spaces for dialogue and reparation."
          ]
        }
      },

      /* ... rest ... */
      form: { entite: "Entity", nom: "Last name" },
      cta: { devis: "Request a quote" }
    }
  };

  function getLang(){
    const params = new URLSearchParams(location.search);
    const l = (params.get('lang') || 'fr').toLowerCase();
    return ['fr','de','en'].includes(l) ? l : 'fr';
  }

  // Robust lookup (handles dotted keys and nested objects)
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
    const dict = translations[lang] || translations.fr;

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = lookup(dict, key);
      if(val !== null && typeof val !== 'object'){
        el.textContent = val;
      }
    });

    // update title mapping
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
    if(key && dict.title && dict.title[key]){
      document.title = dict.title[key];
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
    }catch(e){}
  }

  window.__abbayeLang = { getLang, applyLang, translations, updateUrlLangParam };

  document.addEventListener('DOMContentLoaded', function(){
    const lang = getLang();
    applyLang(lang);

    const sel = document.getElementById('lang');
    if(!sel) return;
    sel.addEventListener('change', function(){
      const newLang = sel.value;
      applyLang(newLang);
      updateUrlLangParam(newLang);
      // other modules can listen to the select change
      const evt = new CustomEvent('abbaye:langChanged', { detail: { lang: newLang } });
      document.dispatchEvent(evt);
    });
  });
})();
