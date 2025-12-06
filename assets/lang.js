/* lang.js
   - Holds translations for FR/DE/EN
   - Applies language based on ?lang=xx or default 'fr'
   - Rewrites textContent of elements with data-i18n attributes
   - Updates nav links to include ?lang=xx
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
      programs: {
        immersive: "Semaines immersives in-situ",
        "immersive.text": "Séjours thématiques avec ateliers et visites.",
        summer: "Summer schools",
        "summer.text": "Formations intensives d'une à deux semaines.",
        ateliers: "Ateliers et Projets",
        "ateliers.text": "Projets participatifs et ateliers pratiques.",
        seminars: "Séminaires et Congrès",
        "seminars.text": "Espaces pour conférences et rencontres professionnelles.",
        residences: "Résidences artistiques ou scientifiques",
        "residences.text": "Hébergement et ateliers pour résident·e·s.",
        expositions: "Expositions et Concerts",
        "expositions.text": "Événements publics et soirées culturelles."
      },
      surplace: {
        title: "Sur place",
        subtitle: "Hébergement, restauration, espaces de formation et alentours.",
        heading: "Sur place",
        hebergement: "hébergement",
        "hebergement.text": "Chambres simples et doubles, dortoirs et hébergements collectifs.",
        restauration: "restauration",
        "restauration.text": "Cuisine locale pour groupes et menus adaptés aux besoins.",
        espaces: "espaces de formation",
        "espaces.text": "Salles modulables équipées pour ateliers et conférences.",
        alentours: "alentours",
        "alentours.text": "Paysage, randonnées et patrimoine aux alentours."
      },
      disciplines: { title: "Disciplines", subtitle: "Exploration par champs disciplinaires." },
      disc: {
        architecture: { title: "architecture", text: "Étude des formes, matériaux et conservation du bâti." }
      },
      tarifs: {
        title: "Tarifs & Demande de devis",
        subtitle: "90.- à 130.- / personne / jour (ex. standard)",
        heading: "Demande de devis"
      },
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
      cta: { devis: "Demander un devis" },
      patrimoine: { title: "Patrimoine", subtitle: "Une frise de la mémoire", heading: "Frise chronologique" },
      pat: {
        p1: { title: "Depuis 2022", summary: "Nouvelle mission culturelle et ouverture publique.", text: "Depuis 2022 l'abbaye a été réaffectée..." },
        p2: { title: "1890–2022", summary: "Période d'usage industriel et transformations.", text: "Entre 1890 et 2022, le site a connu..." },
        p3: { title: "1797–1890", summary: "Sécularisation et reconversions.", text: "La période post-révolutionnaire marque..." },
        p4: { title: "1714–1797", summary: "Apogée monastique et développement.", text: "Les XVIIe–XVIIIe siècles voient..." },
        p5: { title: "1136–1714", summary: "Fondation et longue histoire médiévale.", text: "Fondée en 1136, l'abbaye a traversé..." }
      },
      contact: {
        title: "Contact",
        subtitle: "Formulaire et infos d'accès",
        heading: "Nous contacter",
        access: "Accès et transports",
        tp: "Train jusqu'à Tramelan, puis bus local. Infos pour bus de groupe disponibles sur demande."
      }
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
      programs: {
        immersive: "Vor-Ort-Intensivwochen",
        "immersive.text": "Themenaufenthalte mit Workshops und Besichtigungen.",
        summer: "Summer schools",
        "summer.text": "Intensive Kurse von ein bis zwei Wochen.",
        ateliers: "Workshops und Projekte",
        "ateliers.text": "Partizipative Projekte und praktische Workshops.",
        seminars: "Seminare und Kongresse",
        "seminars.text": "Räume für Konferenzen und berufliche Treffen.",
        residences: "Künstlerische oder wissenschaftliche Residenzen",
        "residences.text": "Unterkunft und Arbeitsräume für Residente.",
        expositions: "Ausstellungen und Konzerte",
        "expositions.text": "Öffentliche Veranstaltungen und Kulturabende."
      },
      surplace: {
        title: "Vor Ort",
        subtitle: "Unterkunft, Verpflegung, Schulungsräume und Umgebung.",
        heading: "Vor Ort",
        hebergement: "Unterkunft",
        "hebergement.text": "Einzel-/Doppelzimmer, Schlafsäle und Gruppenunterkünfte.",
        restauration: "Verpflegung",
        "restauration.text": "Regionale Küche für Gruppen und angepasste Menüs.",
        espaces: "Schulungsräume",
        "espaces.text": "Modulare Räume ausgestattet für Workshops und Konferenzen.",
        alentours: "Umgebung",
        "alentours.text": "Landschaft, Wanderungen und historisches Erbe."
      },
      disciplines: { title: "Disziplinen", subtitle: "Erkundung der Fachbereiche." },
      disc: {
        architecture: { title: "Architektur", text: "Studium von Formen, Materialien und Baudenkmalpflege." }
      },
      tarifs: {
        title: "Preise & Angebotsanfrage",
        subtitle: "90.- bis 130.- / Person / Tag (z.B. Standard)",
        heading: "Anfrage für ein Angebot"
      },
      form: {
        entite: "Einrichtung",
        nom: "Name",
        prenom: "Vorname",
        tel: "Telefon",
        email: "Email",
        dates: "Daten",
        nbpersonnes: "Personenanzahl",
        nbchambres: "Zimmeranzahl",
        typeRepas: "Mahlzeitenart",
        "repas.standard": "Standard",
        "repas.veg": "Vegetarisch",
        "repas.vegan": "Vegan",
        submit: "Anfrage senden",
        message: "Nachricht",
        send: "Senden"
      },
      cta: { devis: "Angebot anfragen" },
      patrimoine: { title: "Erbe", subtitle: "Eine Zeitleiste", heading: "Zeitleiste" },
      pat: {
        p1: { title: "Seit 2022", summary: "Neue kulturelle Mission und Öffnung.", text: "Seit 2022 wurde das Kloster neu genutzt..." },
        p2: { title: "1890–2022", summary: "Industrielle Nutzung und Wandel.", text: "Zwischen 1890 und 2022 erlebte der Ort..." },
        p3: { title: "1797–1890", summary: "Säkularisierung und Umnutzung.", text: "Die Zeit nach der Revolution brachte..." },
        p4: { title: "1714–1797", summary: "Klösterliche Blütezeit und Entwicklung.", text: "Die Jahrhunderte XVII–XVIII zeigen..." },
        p5: { title: "1136–1714", summary: "Gründung und lange mittelalterliche Geschichte.", text: "Gegründet 1136, durchlief die Abtei..." }
      },
      contact: {
        title: "Kontakt",
        subtitle: "Formular und Zugangsinfos",
        heading: "Kontaktieren Sie uns",
        access: "Zugang & Verkehr",
        tp: "Zug nach Tramelan, dann lokaler Bus. Informationen für Reisebusse auf Anfrage."
      }
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
      programs: {
        immersive: "Immersive on-site weeks",
        "immersive.text": "Thematic stays with workshops and visits.",
        summer: "Summer schools",
        "summer.text": "Intensive trainings of one to two weeks.",
        ateliers: "Workshops and Projects",
        "ateliers.text": "Participatory projects and practical workshops.",
        seminars: "Seminars and Congresses",
        "seminars.text": "Spaces for conferences and professional meetings.",
        residences: "Artistic or scientific residencies",
        "residences.text": "Accommodation and studios for residents.",
        expositions: "Exhibitions and Concerts",
        "expositions.text": "Public events and cultural evenings."
      },
      surplace: {
        title: "On-site",
        subtitle: "Accommodation, catering, training spaces and surroundings.",
        heading: "On-site",
        hebergement: "accommodation",
        "hebergement.text": "Single and double rooms, dormitories and group lodging.",
        restauration: "catering",
        "restauration.text": "Local cuisine for groups and tailored menus.",
        espaces: "training spaces",
        "espaces.text": "Modular rooms equipped for workshops and conferences.",
        alentours: "surroundings",
        "alentours.text": "Landscape, hikes and local heritage."
      },
      disciplines: { title: "Disciplines", subtitle: "Exploration by disciplinary fields." },
      disc: {
        architecture: { title: "architecture", text: "Study of forms, materials and conservation of buildings." }
      },
      tarifs: {
        title: "Rates & Quote request",
        subtitle: "90.- to 130.- / person / day (ex. standard)",
        heading: "Request a quote"
      },
      form: {
        entite: "Entity",
        nom: "Last name",
        prenom: "First name",
        tel: "Phone",
        email: "Email",
        dates: "Dates",
        nbpersonnes: "Number of people",
        nbchambres: "Number of rooms",
        typeRepas: "Meal type",
        "repas.standard": "Standard",
        "repas.veg": "Vegetarian",
        "repas.vegan": "Vegan",
        submit: "Send request",
        message: "Message",
        send: "Send"
      },
      cta: { devis: "Request a quote" },
      patrimoine: { title: "Heritage", subtitle: "A timeline", heading: "Timeline" },
      pat: {
        p1: { title: "Since 2022", summary: "New cultural mission and public opening.", text: "Since 2022 the abbey has been repurposed..." },
        p2: { title: "1890–2022", summary: "Industrial use and transformations.", text: "From 1890 to 2022 the site experienced..." },
        p3: { title: "1797–1890", summary: "Secularization and reuses.", text: "The post-revolutionary era brought..." },
        p4: { title: "1714–1797", summary: "Monastic heyday and development.", text: "The 17th–18th centuries saw..." },
        p5: { title: "1136–1714", summary: "Foundation and long medieval history.", text: "Founded in 1136, the abbey went through..." }
      },
      contact: {
        title: "Contact",
        subtitle: "Form and access information",
        heading: "Contact us",
        access: "Access & public transport",
        tp: "Train to Tramelan, then local bus. Group bus info available on request."
      }
    }
  };

  function getLang(){
    const params = new URLSearchParams(location.search);
    const l = (params.get('lang') || 'fr').toLowerCase();
    return ['fr','de','en'].includes(l) ? l : 'fr';
  }

  function applyLang(lang){
    const dict = translations[lang] || translations.fr;

    // apply all elements with data-i18n attribute (full path or simple key)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = dict;
      for(const p of parts){
        if(val && (p in val)) val = val[p];
        else { val = null; break; }
      }
      if(val !== null && typeof val !== 'object'){
        // use textContent for accessibility
        el.textContent = val;
      }
    });

    // apply elements with data-i18n-* (e.g. data-i18n-title) for attributes if any
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const key = el.getAttribute('data-i18n-title');
      const val = dictProgramsLookup(dict, key);
      if(val) el.setAttribute('title', val);
    });

    // Update document.title if available
    const t = dict.title;
    if(t && typeof t === 'object'){
      const pageKey = (document.querySelector('title') && document.querySelector('title').getAttribute('data-i18n')) || '';
      // Some pages set data-i18n on title element at load
      // As fallback, try known mapping by URL
      // We'll attempt to update to the closest match:
      const path = location.pathname.split('/').pop();
      const map = {
        'programmes.html': 'programmes',
        'surplace.html': 'surplace',
        'disciplines.html': 'disciplines',
        'tarifs.html': 'tarifs',
        'patrimoine.html': 'patrimoine',
        'contact.html': 'contact'
      };
      const key = map[path];
      if(key && t[key]) document.title = t[key];
    }

    // Set lang select value
    const sel = document.getElementById('lang');
    if(sel) sel.value = lang;

    // Update navigation links to include ?lang=xx preserving existing queries
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(a=>{
      try{
        const u = new URL(a.getAttribute('href'), location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname + u.search);
      }catch(e){}
    });

    // Update CTA links
    document.querySelectorAll('.cta').forEach(a=>{
      try{
        const href = a.getAttribute('href');
        if(!href) return;
        const u = new URL(href, location.href);
        u.searchParams.set('lang', lang);
        a.setAttribute('href', u.pathname + u.search);
      }catch(e){}
    });
  }

  function dictProgramsLookup(dict, key){
    // helper fallback for keys in programs object
    const parts = key.split('.');
    let v = dict;
    for(const p of parts){
      if(v && (p in v)) v = v[p];
      else { v = null; break; }
    }
    return v;
  }

  // expose small API
  window.__abbayeLang = {
    getLang,
    applyLang,
    translations
  };

  // auto-apply on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function(){
    const lang = getLang();
    applyLang(lang);

    // language selector: reload page with param when changed
    const sel = document.getElementById('lang');
    if(sel){
      sel.addEventListener('change', function(){
        const newLang = sel.value;
        const url = new URL(location.href);
        url.searchParams.set('lang', newLang);
        location.assign(url.pathname + url.search);
      });
    }
  });
})();