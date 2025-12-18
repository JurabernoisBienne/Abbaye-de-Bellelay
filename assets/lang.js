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
          img: "assets/img/discipline-architecture.jpg",
          paragraphs: [
            "À Bellelay l’architecture étudie le rapport entre formes historiques et interventions contemporaines : relevés, analyses matériaux, et discussions sur la conservation.",
            "Les ateliers combinent pratique et réflexion : relevés, maquettes, propositions de réaffectation et restitution publique.",
            "Les résidences favorisent l’expérimentation in-situ et la production d’outils documentaires liés au patrimoine bâti."
          ]
        },
        amenagement: {
          title: "Aménagement du territoire",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
            "L’aménagement interroge les liens entre territoire, ressources et usages : cartographies, plans et stratégies locales.",
            "Projets participatifs réunissant acteurs locaux, chercheurs et praticiens pour co-construire propositions territoriales.",
            "Études de mobilité, accessibilité et scénarios de paysage intégrant enjeux sociaux et écologiques."
          ]
        },
        histoire: {
          title: "Histoire",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
            "Recherche historique et travail d’archives autour de l’abbaye : sources, mutations et récits locaux.",
            "Séminaires et projets éditoriaux permettent de restituer les résultats au public et de questionner les narrations régionales.",
            "Approches critiques qui mettent en lumière continuités, ruptures et usages politiques du patrimoine."
          ]
        },
        culture_art: {
          title: "Culture et art",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
            "Programmes artistiques et expositions : création in-situ, dialogues interdisciplinaires et médiation culturelle.",
            "Résidences favorisant collaborations entre artistes et chercheurs pour produire œuvres et dispositifs contextuels.",
            "Actions publiques (vernissages, performances, ateliers) ancrent le projet sur le territoire et le rendent accessible."
          ]
        },
        circularity: {
          title: "Circularité",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
            "Approches de circularité appliquées au bâtiment et aux pratiques : réemploi, cycles de matériaux et économie locale.",
            "Ateliers pratiques testant stratégies de récupération, fabrication locale et chaînes courtes dans un contexte patrimonial.",
            "Propositions visant à réduire déchets, valoriser matériaux et imaginer modèles économiques résilients."
          ]
        },
        tourisme: {
          title: "Tourisme durable",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
            "Stratégies de tourisme basées sur durabilité : mobilité douce, capacité d’accueil et respect des écosystèmes.",
            "Projets explorant expériences de visite responsable, circuits locaux et contribution aux économies régionales.",
            "Mise en place d’outils pour gérer flux, renforcer qualité d’accueil et articuler tourisme et patrimoine."
          ]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
            "Approches sociales : inclusion, participation et dispositifs favorisant cohabitation et engagement local.",
            "Programmes soutenant initiatives communautaires, médiation et formats participatifs sur site.",
            "Axes de travail : accessibilité, accueil pour publics divers et collaborations intersectorielles."
          ]
        },
        paix: {
          title: "Paix & réparations de guerre",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
            "Thématiques de mémoire, réconciliation et pratiques de réparations liées à conflits historiques et contemporains.",
            "Ateliers et séminaires sur commémoration, justice transitionnelle et construction de récits partagés.",
            "Projets favorisant l’écoute, le travail de mémoire et la mise en place d’espaces de dialogue et de réparation."
          ]
        }
      },
    },


/*DEUTSCH*/

     
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


      /*programmes de*/
   programmes: {
      heading: "Unsere Programme",
   },  
   programs: {
      immersive: {
        title: "Immersive Wochen vor Ort",
        text: "Themenaufenthalte mit Workshops und Besichtigungen.",
        text2: "Praktische Vertiefungen durch die Untersuchung ortsbezogener Attribute mit öffentlichen Präsentationen am Ende des Aufenthalts.",
      },
      summer: {
        title: "Sommerkurse",
        text: "Intensivkurse von ein bis drei Wochen.",
        text2: "Praxisorientierte Module, externe Referenten oder kollaborative Arbeitssitzungen. Mit Möglichkeiten für Outdoor-Aktivitäten und Sightseeing.",
      },
      ateliers: {
        title: "Workshops und Projekte",
        text: "Partizipative Projekte und praktische Workshops.",
        text2: "Prototyping, Experimente oder Schulungen in speziellen Handwerkswerkstätten.",
      },
      seminars: {
        title: "Seminare und Tagungen",
        text: "Räumlichkeiten für Konferenzen, Seminare, Kongresse oder Preisverleihungen.",
        text2: "Vollständige Organisation, einschließlich Logistik und Dienstleistungen für die Teilnehmer.",
      },
      residences: {
        title: "Künstlerische oder Wissenschaftliche Residenzen",
        text: "Langzeitunterkunft in ruhiger und einzigartiger Umgebung, die kreative Entwicklung fördert.",
        text2: "Möglichkeiten zur Ausstellung von Arbeiten am Ende des Aufenthalts.",
      },
      expositions: {
        title: "Ausstellungen und Konzerte",
        text: "Öffentliche Veranstaltungen und kulturelle Abende, sowohl drinnen als auch draußen.",
        text2: "Vernissagen, Konzerte, Ausstellungen, Treffen und öffentliche Vermittlungen das ganze Jahr über.",
      },
    },
       

      /*surplace de*/
     
      surplace: {
       title: "Alles für Ihren Aufenthalt",
       subtitle: "Unterkunft, Verpflegung, Schulungsräume und Natur.",
       heading: "Vor Ort",
       hebergement: {
         title: "Unterkunft",
         text: "Komfortable und preiswerte Gemeinschaftsunterkünfte.",
         text2: "Ob für eine Übernachtung oder einen längeren Aufenthalt, wir passen die Konfiguration an Ihre Bedürfnisse an (Einzel-, Doppel- oder Vierbettzimmer).<br><br> Einige Zimmer verfügen über eigene Badezimmer. Das Unterkunftsgebäude, das die Abtei überblickt, umfasst auch Gemeinschaftsräume mit einer kleinen Küche auf jeder Etage."
       },
       restauration: {
         title: "Verpflegung",
         text: "Buffet mit regionaler Küche.",
         text2: "Individuelle Menüs: von einer Mahlzeit bis zur Vollpension, von leichtem Frühstück bis hin zu opulentem Brunch, von einem schlichten Tellergericht bis zu einem Drei-Gänge-Menü.<br><br> Wir gehen auf Ihre Bedürfnisse (Zeitpläne, spezielle Diäten) ein und stellen lokale Produkte (im Umkreis von 35 km) in den Vordergrund, ergänzt durch eine kreative und zeitgenössische Note."
       },
       espaces: {
         title: "Schulungs-/Arbeitsräume",
         text: "Flexible und ausgestattete Räume.",
         text2: "Für 10 bis 250 Personen: mit mehreren Tagungsräumen, zahlreichen Klassenzimmern, Werkstätten und informellen Innen- und Außenbereichen sind Gruppen jeglicher Art willkommen.<br><br> Audiovisuelle Ausrüstung ist vor Ort verfügbar, und das Mobiliar kann nach Ihren Bedürfnissen angepasst werden."
       },
       alentours: {
         title: "Umgebung",
         text: "Landschaft, Wanderungen und kulturelles Erbe in der Umgebung.",
         text2: "Empfohlene Spazier- oder Fahrradrouten, historische Sehenswürdigkeiten und Tagesausflugsvorschläge.<br><br> Möglichkeiten für Führungen durch die Abteikirche oder das Haus des Tête de Moine sowie für Outdoor-Team-Building-Aktivitäten.<br><br> Unser Team steht Ihnen zur Verfügung, um Sie zu beraten und einen Teil der Logistik zu übernehmen."
       },
      },


      title: {
       surplace: "Vor Ort — Abbaye de Bellelay"
     },
       
      /*disciplines de*/
       
      disciplines: {
        architecture: {
          title: "Architektur",
          img: "assets/img/discipline-architecture.jpg",
          paragraphs: [
            "In Bellelay untersucht die Architektur das Verhältnis von historischer Form und zeitgenössischer Intervention: Vermessung, Materialanalyse und Erhaltungsdiskurse.",
            "Workshops verbinden Praxis und Theorie: Vermessung, Modellbau, Umnutzungsvorschläge und öffentliche Präsentationen.",
            "Residencies ermöglichen ortsbezogene Experimente und die Erstellung dokumentarischer Werkzeuge zum gebauten Erbe."
          ]
        },
        amenagement: {
          title: "Raumplanung",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
            "Die Raumplanung thematisiert Verbindungen zwischen Territorium, Ressourcen und Nutzung: Kartierungen, Konzepte und lokale Strategien.",
            "Partizipative Projekte bringen lokale Akteur*innen, Forschende und Praktiker*innen zusammen, um gemeinschaftlich Vorschläge zu entwickeln.",
            "Arbeiten umfassen Mobilitätsstudien, Zugänglichkeit und Landschaftsszenarien unter Berücksichtigung sozialer und ökologischer Fragen."
          ]
        },
        histoire: {
          title: "Geschichte",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
            "Historische Forschung und Archivarbeit zur Abtei: Quellen, Wandel und lokale Narrative.",
            "Seminare und Publikationsprojekte geben Ergebnisse an die Öffentlichkeit weiter und hinterfragen regionale Erzählungen.",
            "Kritische Ansätze beleuchten Kontinuitäten, Brüche und politische Nutzungen des Erbes über die Zeit."
          ]
        },
        culture_art: {
          title: "Kultur & Kunst",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
            "Kunstprogramme und Ausstellungen: ortsbezogene Schaffensprozesse, interdisziplinäre Dialoge und Vermittlung.",
            "Residenzen fördern Kooperationen zwischen Künstler*innen und Wissenschaft, führend zu kontextbezogenen Arbeiten.",
            "Öffentliche Formate (Vernissagen, Performances, Workshops) verankern das Projekt lokal und machen es zugänglich."
          ]
        },
        circularity: {
          title: "Zirkularität",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
            "Zirkuläre Ansätze für Gebäude und Praxis: Wiederverwendung, Materialkreisläufe und lokale Ökonomie.",
            "Praktische Workshops erproben Rückbau-, Recycling- und lokale Produktionsstrategien im denkmalpflegerischen Kontext.",
            "Vorschläge zielen auf Abfallreduktion, Materialwertschöpfung und resilientere Geschäftsmodelle."
          ]
        },
        tourisme: {
          title: "Nachhaltiger Tourismus",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
            "Tourismusstrategien mit Fokus auf Nachhaltigkeit: sanfte Mobilität, Kapazitätsfragen und Ökosystemschutz.",
            "Projekte entwickeln verantwortungsvolle Besuchserfahrungen, lokale Routen und Beiträge zur regionalen Wirtschaft.",
            "Werkzeuge zur Steuerung von Besucherströmen, Qualitätssteigerung und Verbindung von Tourismus und Erbe."
          ]
        },
        social: {
          title: "Soziales",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
            "Soziale Ansätze: Inklusion, Partizipation und Maßnahmen für gemeinschaftliches Engagement.",
            "Programme unterstützen lokale Initiativen, Vermittlung und partizipative Formate vor Ort.",
            "Fokus: Barrierefreiheit, Aufnahmeformate für diverse Zielgruppen und intersektorale Kooperationen."
          ]
        },
        paix: {
          title: "Frieden & Wiedergutmachung",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
            "Themen: Erinnerung, Versöhnung und Wiedergutmachungspraktiken im Kontext historischer und aktueller Konflikte.",
            "Workshops und Seminare zu Gedenken, transitionaler Gerechtigkeit und gemeinsamer Narrativbildung.",
            "Projekte fördern Zuhören, Erinnerungsarbeit und die Schaffung von Dialog- und Reparationsräumen."
          ]
        },
        },
     


      /*tarifs de*/

 tarifs: {
    title: "Preise & individuelle Angebote",
    subtitle: "CHF 90.- bis CHF 130.- / Person / Tag",
    heading: "Angebotanfrage",
    intro: {
      p1: "Die Preise werden individuell erstellt und hängen insbesondere von der Art der Zimmer, der Qualität der Menüs sowie der Nutzung der Schulungs- und Arbeitsräume ab.",
      p2: "Zur Orientierung: Die Preise liegen zwischen CHF 90.– und CHF 130.– pro Person und Tag, für ein All-inclusive-Angebot.",
      p3: "Dies beinhaltet die Unterkunft vor Ort, die Verpflegung (Frühstück, Mittag- und Abendessen) sowie den Zugang zu den Schulungs- und Arbeitsräumen.",
      p4: "Da jedes Projekt einzigartig ist, stellen wir Ihnen gerne ein individuelles Angebot über das untenstehende Formular aus."
    }
  },
  form: {
    entite: "Einrichtung",
    nom: "Name",
    prenom: "Vorname",
    tel: "Telefon",
    email: "E-Mail",
    dates: "Daten",
    nbpersonnes: "Personenzahl",
    chambres: "Zimmeranzahl",
    labels: {
      chambre_indiv: "Einzelzimmer mit eigenem Bad",
      chambre_double: "Doppelzimmer",
      chambre_quad: "Vierbettzimmer"
    },
    typeRepas: "Art der Verpflegung",
    repas: {
      complete: "Vollpension (Frühstück, Mittag-, Abendessen)",
      demi: "Halbpension (Frühstück und Abendessen)",
      unique: "Einzelverpflegung"
    },
     submit: "Anfrage absenden"
  },
 },    

/*ENGLISH*/

     
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

       /* programmes.en */ 

    programmes: {
      heading: "Our programs",
    },  
       
    programs: {
      immersive: {
        title: "Immersive in-situ weeks",
        text: "Thematic stays with workshops and visits.",
        text2: "Practical deep dives through the study of site-related attributes, with public presentations at the end of the stay.",
      },
      summer: {
        title: "Summer schools",
        text: "Intensive courses from one to three weeks.",
        text2: "Practice modules, external speakers, or collaborative work sessions. With opportunities for outdoor activities and sightseeing.",
      },
      ateliers: {
        title: "Workshops and Projects",
        text: "Participatory projects and practical workshops.",
        text2: "Prototyping, experimentation, or training in dedicated artisan workshops.",
      },
      seminars: {
        title: "Seminars and Conferences",
        text: "Spaces for conferences, seminars, congresses, or award ceremonies.",
        text2: "Full organization, including logistics and services for participants.",
      },
      residences: {
        title: "Artistic or Scientific Residencies",
        text: "Long-term accommodation in a calm and unique setting conducive to creative development.",
        text2: "Opportunities to exhibit works at the end of the residency.",
      },
      expositions: {
        title: "Exhibitions and Concerts",
        text: "Public events and cultural evenings, both indoors and outdoors.",
        text2: "Openings, concerts, exhibitions, meetings, and public mediations throughout the year.",
      }
    },       
       

      /*surplace en*/

      surplace : {
       title: "Everything for your stay",
       subtitle: "Accommodation, catering, training spaces, and natural surroundings.",
       heading: "On-site",
       hebergement: {
         title: "Accommodation",
         text: "Comfortable and affordable group accommodations.",
         text2: "Whether for a single night or an extended stay, we adapt rooms to your needs (single, double, or quadruple rooms).<br><br>Some rooms include private bathrooms. The accommodation building overlooking the abbey also includes communal areas with small kitchens on each floor."
       },
       restauration: {
         title: "Catering",
         text: "Local cuisine served buffet-style.",
         text2: "Custom menus: from one meal to full board, from light breakfast to elaborate brunch, and from simple dishes to three-course meals.<br><br>We adapt our services to your needs (timings, special diets), highlighting local products (within 35 km), with a creative and contemporary touch."
       },
       espaces: {
         title: "Training or workspaces",
         text: "Flexible and equipped rooms.",
         text2: "From 10 to 250 people: with several plenary rooms, numerous classrooms, workshops, and informal indoor and outdoor spaces, all types of groups are welcome.<br><br>Audio-visual equipment is available on-site, and the furniture can be configured based on your needs."
       },
       alentours: {
         title: "Surroundings",
         text: "Scenery, hikes, and heritage sites nearby.",
         text2: "Recommended walking or cycling routes, historic landmarks, and day trip suggestions.<br><br>Opportunities for guided tours of the Abbey Church or the Tête de Moine House, as well as outdoor team-building activities.<br><br>Our team is available to advise and assist with a portion of the logistics."
       }
     },

     title: {
       surplace: "On-site — Abbaye de Bellelay"
     },

       
       /* disciplines.en */

      disciplines: {
        architecture: {
          title: "Architecture",
          img: "assets/img/discipline-architecture.jpg",
          paragraphs: [
            "At Bellelay architecture explores the relation between historic form and contemporary interventions: surveys, material analysis and conservation debates.",
            "Workshops mix practice and reflection: surveying, model-making, adaptive-reuse proposals and public outcomes.",
            "Residencies support on-site experimentation and production of documentary tools linked to the built heritage."
          ]
        },
        amenagement: {
          title: "Spatial planning",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
            "Spatial planning examines links between territory, resources and uses: mapping, planning and local strategies.",
            "Participatory projects bring local stakeholders, researchers and practitioners together to co-design proposals.",
            "Work includes mobility studies, accessibility and landscape scenarios integrating social and ecological concerns."
          ]
        },
        histoire: {
          title: "History",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
            "Historical research and archival work on the abbey: sources, transformations and local narratives.",
            "Seminars and editorial projects share findings with the public and question regional storytelling.",
            "Critical approaches highlight continuities, ruptures and political uses of heritage across time."
          ]
        },
        culture_art: {
          title: "Culture & art",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
            "Artistic programmes and exhibitions: on-site creation, interdisciplinary dialogue and cultural mediation.",
            "Residencies encourage artist–researcher collaborations, producing context-sensitive works and formats.",
            "Public actions (openings, performances, workshops) anchor the project in the territory and make it accessible."
          ]
        },
        circularity: {
          title: "Circularity",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
            "Circular approaches for buildings and practice: reuse, material cycles and local economies.",
            "Hands-on workshops test recovery strategies, local making and short supply chains in a heritage context.",
            "Proposals aim to reduce waste, valorize materials and design resilient economic models."
          ]
        },
        tourisme: {
          title: "Sustainable tourism",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
            "Tourism strategies focused on sustainability: soft mobility, capacity and ecosystem respect.",
            "Projects explore responsible visitor experiences, local circuits and contributions to regional economies.",
            "Development of tools to manage flows, enhance quality and link tourism with heritage."
          ]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
            "Social approaches: inclusion, participation and measures that foster cohabitation and local engagement.",
            "Programs support community initiatives, mediation and participatory formats on site.",
            "Focus areas: accessibility, welcoming diverse publics and intersectoral collaborations."
          ]
        },
        paix: {
          title: "Peace & war reparations",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
            "Themes of memory, reconciliation and reparative practices related to historical and contemporary conflicts.",
            "Workshops and seminars on commemoration, transitional justice and building shared narratives.",
            "Projects foster listening, memory work and creation of spaces for dialogue and reparation."
          ]
        }
      },

      /*tarifs en*/

   tarifs: {
    title: "Rates & Custom Quotes",
    subtitle: "CHF 90.- to CHF 130.- / person / day",
    heading: "Request a Quote",
    intro: {
      p1: "Rates are determined on a case-by-case basis, depending on the type of rooms, quality of meals, and training or working spaces used.",
      p2: "As an indication, prices range between CHF 90.– and CHF 130.– per person per day for an all-inclusive service.",
      p3: "This includes on-site accommodation, catering (breakfast, lunch, and dinner), as well as access to training and workspaces.",
      p4: "Since each project is unique, we offer to provide a personalized quote using the form below."
    }
  },
  form: {
    entite: "Entity",
    nom: "Last Name",
    prenom: "First Name",
    tel: "Phone Number",
    email: "Email",
    dates: "Dates",
    nbpersonnes: "Number of People",
    chambres: "Number of Rooms",
    labels: {
      chambre_indiv: "Single room with private bathroom",
      chambre_double: "Double room",
      chambre_quad: "Quadruple room",
    },
    typeRepas: "Meal Type",
    repas: {
      complete: "Full Board (breakfast, lunch, dinner)",
      demi: "Half Board (breakfast and dinner)",
      unique: "Single Meal"
    },
   submit: "Send request"
  },
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

   
function applyLang(lang) {
  const dict = translations[lang] || translations.fr;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = lookup(dict, key);

    if (val !== null && typeof val === 'string') {
      // Si la valeur contient des balises HTML, on utilise innerHTML
      if (val.includes('<br>') || val.includes('</')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
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
