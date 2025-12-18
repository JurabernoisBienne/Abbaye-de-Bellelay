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
           "INTRODUCTION\nBellelay est un terrain d’étude architectural rare : un ensemble bâti étendu, historiquement stratifié, et porteur d’une forte valeur patrimoniale. La coexistence de bâtiments et d’éléments construits issus de périodes différentes, conjuguée à des exigences contemporaines d’usage et de gestion, en fait un cas d’école pour analyser, documenter et transformer un site sans en altérer la cohérence.",
         
           "AXE 1 — PATRIMOINE ET PROTECTIONS : DOCTRINE D’INTERVENTION\nLes protections et la valeur patrimoniale imposent une méthode : diagnostic, compatibilité des matériaux, réversibilité et lisibilité des interventions. Il s’agit de concevoir des transformations contemporaines justes, discrètes et argumentées, capables d’intégrer les contraintes actuelles (sécurité, accessibilité, confort) sans banaliser l’existant.",
         
           "AXE 2 — DIAGNOSTIC CONSTRUCTIF : MATÉRIALITÉS ET PATHOLOGIES\nBellelay permet une analyse fine des systèmes constructifs (maçonneries, charpentes, enveloppes, menuiseries) et de leurs vulnérabilités : humidité, vieillissement, reprises, points singuliers. L’enjeu est de relier l’auscultation à des choix de projet robustes, réparables et durables.",
         
           "AXE 3 — GRANDEUR ET COMPLEXITÉ : PROGRAMMATION ET PHASAGE\nLa multiplicité des bâtiments et des séquences d’espaces appelle une programmation par unités fonctionnelles et par temporalités. On y travaille les compatibilités d’usage, les flux, la logistique et un phasage réaliste, pour permettre une évolution progressive du site sans rupture d’exploitation.",
         
           "AXE 4 — ESPACES COMMUNS : MUTUALISATION ET GOUVERNANCE\nBellelay pose un enjeu central de gestion : organiser des espaces communs pour une pluralité d’utilisateurs, avec des règles d’usage traduites en spatialité. Gradients public/privé, zones tampon, accueil, stockage, circulation et sécurité doivent soutenir une mutualisation efficace et pérenne.",
         
           "AXE 5 — AMÉNAGEMENT DU TERRITOIRE ET RÉALITÉS DU TERRAIN\nLe projet s’inscrit dans des contraintes territoriales concrètes : accès, livraisons, stationnement, réseaux, topographie, paysage et voisinage. Cet axe étudie l’interface entre bâti et territoire pour concevoir des solutions cohérentes, sobres et adaptées au contexte.",
         
           "AXE 6 — CIRCULARITÉ ET ÉCOSYSTÈME DU SITE\nLe site offre un cadre pertinent pour une approche circulaire : réemploi, dépose sélective, maintenance et boucles locales de matériaux. Les extérieurs peuvent contribuer à un écosystème complet — loisirs, production, gestion écologique — en cohérence avec les usages et la gouvernance du lieu.",
         
           "AXE 7 — USAGES CONTEMPORAINS ET INTÉGRATION DES DISPOSITIFS\nRésidences, travail, événements et accueil exigent confort et mise aux normes (acoustique, thermique, qualité de l’air, accessibilité, incendie). Sur un site patrimonial, ces dispositifs doivent être intégrés avec tact : interventions minimales, solutions réversibles et respect de la lecture architecturale.",
         
           "CONCLUSION\nTravailler sur Bellelay, c’est aborder l’architecture comme une discipline de précision : comprendre un ensemble complexe, protéger ce qui fait sa valeur, et organiser sa transformation pour des usages multiples et durables. L’ambition est de produire des scénarios d’intervention sobres, réversibles et opérationnels, capables de renforcer la cohérence du site tout en ouvrant de nouvelles possibilités d’occupation, de mutualisation et d’expérimentation."
         ]
        },
        amenagement: {
          title: "Aménagement du territoire",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, l’aménagement du territoire constitue un levier déterminant pour rendre possibles des usages contemporains tout en assurant une évolution maîtrisée du site dans la durée. La spécificité du lieu—à la fois patrimonial, vaste, et potentiellement multi-usages—exige une articulation fine entre les cadres réglementaires communaux, les orientations régionales et cantonales, et les réalités opérationnelles (mobilité, accès, phasage, gestion des impacts). L’objectif est de construire un dispositif de planification capable d’accompagner la transformation du site de manière lisible, juridiquement robuste et politiquement soutenable.",

  "AXE 1 — DIAGNOSTIC TERRITORIAL ET CADRE D’INSCRIPTION\nLa première étape consiste à objectiver la situation territoriale : affectations en vigueur, droits à bâtir, périmètres et contraintes (patrimoine, environnement, paysage), capacité des réseaux, conditions d’accès et de sécurité, ainsi que les enjeux de voisinage. Ce diagnostic fonde la stratégie : identifier ce qui est immédiatement activable, ce qui nécessite des procédures, et ce qui doit être réservé à des phases ultérieures. L’enjeu est d’éviter une planification abstraite et de produire une lecture opérationnelle des contraintes et marges de manœuvre.",

  "AXE 2 — ADAPTATION DES RÈGLEMENTS COMMUNAUX POUR DES UTILISATIONS TRANSITOIRES\nLes usages transitoires (ateliers, résidences, événements, occupations temporaires) sont souvent freinés par des cadres normatifs conçus pour des situations stabilisées. Cet axe vise à définir, en concertation avec la commune, des mécanismes d’assouplissement encadré : conditions temporaires, autorisations limitées dans le temps, exigences proportionnées au risque, et critères de réversibilité. L’objectif n’est pas de contourner les règles, mais de rendre possible l’expérimentation contrôlée, afin de tester des programmes, qualifier des besoins réels et alimenter la planification pérenne.",

  "AXE 3 — PLAN DIRECTEUR LOCALISÉ : VISION, PHASAGE ET COHÉRENCE\nLa transformation de Bellelay nécessite un cadre stratégique lisible, capable d’aligner vision, gouvernance et temporalités. L’édiction d’un plan directeur localisé permet de clarifier les intentions : vocation du site, intensités et compatibilités d’usage, principes de préservation, organisation des espaces communs, gestion des extérieurs, et articulation avec les infrastructures. Ce document doit intégrer un phasage réaliste (ce qui peut évoluer rapidement vs ce qui requiert des étapes longues) et servir de référence partagée pour les autorités, les opérateurs et les usagers.",

  "AXE 4 — PLAN DE QUARTIER CONFORME AUX DÉVELOPPEMENTS FUTURS DU SITE\nAu-delà de la vision, un plan de quartier (ou instrument équivalent) est nécessaire pour sécuriser juridiquement les évolutions : règles d’implantation, périmètres d’intervention, conditions de transformation, gestion des accès, stationnement, affectations possibles, et exigences de qualité (paysage, espaces publics/communs, intégration patrimoniale). Cet axe vise à produire une base réglementaire cohérente avec la réalité du site : permettre des adaptations et changements d’affectation tout en garantissant des garde-fous et une qualité d’ensemble, y compris pour une pluralité d’acteurs et d’usages.",

  "AXE 5 — ENJEUX POLITIQUES RÉGIONAUX ET CANTONAUX LIÉS AUX CHANGEMENTS D’AFFECTATION\nLes changements d’affectation sur un site de cette ampleur ne relèvent pas uniquement d’une décision locale : ils engagent des orientations régionales et cantonales en matière de développement territorial, de protection du paysage, de patrimoine, d’économie et de cohésion sociale. Cet axe traite la dimension politico-institutionnelle : construction d’un récit partagé, identification des parties prenantes, anticipation des procédures et des arbitrages, et alignement avec les objectifs supérieurs (stratégies cantonales, politiques sectorielles). L’enjeu est de rendre le projet “audible” et défendable, en démontrant sa pertinence publique et sa compatibilité avec les cadres directeurs.",

  "AXE 6 — COORDINATION AVEC LA PLANIFICATION RÉGIONALE DE LA MOBILITÉ\nLa mobilité est un facteur structurant de la viabilité du site : elle conditionne l’accueil, l’accessibilité, l’acceptabilité locale et l’impact environnemental. Cet axe vise une coordination étroite avec la planification régionale : renforcement des transports publics (cadencement, arrêts, connexions), hiérarchisation des accès, et gestion du stationnement selon les phases et les pics d’activité. L’objectif est de réduire la dépendance à la voiture individuelle tout en assurant une accessibilité inclusive et réaliste, en cohérence avec les capacités du territoire.",

  "AXE 7 — MOBILITÉ DOUCE : CONTINUITÉS, SÉCURITÉ ET QUALITÉ DES PARCOURS\nEn complément des transports publics, la mise en réseau des mobilités douces constitue un enjeu de projet à part entière : continuités piétonnes et cyclables, sécurisation des traversées, lisibilité des itinéraires, stationnements vélos, et articulation avec les accès techniques. Cet axe aborde aussi la qualité d’usage : faire des parcours une expérience (arrivées, séquences, paysage) et non un simple flux, tout en assurant la robustesse et l’exploitation au quotidien.",

  "AXE 8 — MISE EN ŒUVRE : GOUVERNANCE, OUTILS, ET SUIVI DANS LA DURÉE\nUne planification efficace suppose des outils et une gouvernance clairs : calendrier de procédures, répartition des rôles (propriétaire, exploitant, commune, canton, partenaires), modalités de concertation, et indicateurs de suivi (mobilité, nuisances, usages, impacts). Cet axe vise à transformer les documents de planification en dispositif vivant : capable d’intégrer des retours d’expérience, d’ajuster des règles si nécessaire, et d’accompagner l’évolution du site sans perdre la cohérence d’ensemble.",

  "CONCLUSION\nL’aménagement du territoire à Bellelay doit concilier expérimentation et sécurisation : permettre des usages transitoires pour tester et activer le site, tout en construisant un cadre de planification pérenne via un plan directeur localisé et un plan de quartier adaptés aux développements futurs. La réussite du projet dépend aussi de son inscription politique et institutionnelle, ainsi que de sa coordination avec la planification régionale de la mobilité, en particulier les transports publics et les mobilités douces. L’ambition est de produire une trajectoire de transformation crédible, progressive et partagée, à la hauteur des enjeux patrimoniaux, territoriaux et sociétaux du lieu."
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
         title: "Disziplinen",
         subtitle: "Erkundung nach Fachgebieten.",
         menu: {
           architecture: "Architektur",
           amenagement: "Raumplanung",
           histoire: "Geschichte",
           culture_art: "Kultur und Kunst",
           circularity: "Zirkularität",
           tourisme: "Nachhaltiger Tourismus",
           social: "Soziales",
           paix: "Frieden & Wiedergutmachung"
         },
         
        architecture: {
          title: "Architektur",
          img: "assets/img/discipline-architecture.jpg",
          paragraphs: [
"EINLEITUNG\nBellelay ist ein seltenes architektonisches Untersuchungsfeld: ein weitläufiges, historisch geschichtetes Bauensemble von hohem denkmalpflegerischem Wert. Das Nebeneinander von Gebäuden und Bauteilen aus unterschiedlichen Epochen, verbunden mit heutigen Anforderungen an Nutzung und Betrieb, macht den Ort zu einem Referenzfall, um ein Ensemble zu analysieren, zu dokumentieren und weiterzuentwickeln, ohne seine Kohärenz zu beeinträchtigen.",

  "ACHSE 1 — DENKMALWERT UND SCHUTZSTATUS: INTERVENTIONSLEITBILD\nSchutzbestimmungen und Denkmalwert erfordern eine klare Methodik: Diagnose, Materialverträglichkeit, Reversibilität und Lesbarkeit der Eingriffe. Ziel sind präzise, zurückhaltende und begründete zeitgenössische Transformationen, die aktuelle Anforderungen (Sicherheit, Barrierefreiheit, Komfort) integrieren, ohne das Bestehende zu trivialisieren.",

  "ACHSE 2 — BAUTECHNISCHE DIAGNOSE: MATERIALITÄTEN UND SCHADENSBILDER\nBellelay ermöglicht eine differenzierte Analyse der Konstruktionen (Mauerwerk, Tragwerke und Dachstühle, Gebäudehülle, Fenster und Türen) sowie ihrer Vulnerabilitäten: Feuchtigkeit, Alterung, Eingriffe und Reparaturen, kritische Detailpunkte. Entscheidend ist, die Befundaufnahme mit robusten, reparierbaren und dauerhaften Projektentscheidungen zu verknüpfen.",

  "ACHSE 3 — GRÖSSE UND KOMPLEXITÄT: PROGRAMMIERUNG UND ETAPPIERUNG\nDie Vielzahl der Gebäude und Raumsequenzen verlangt eine Programmierung nach Funktionsbausteinen und zeitlichen Etappen. Im Fokus stehen Nutzungskompatibilitäten, Wege- und Betriebsabläufe, Logistik sowie eine realistische Etappierung, um eine schrittweise Entwicklung des Areals ohne Unterbruch des Betriebs zu ermöglichen.",

  "ACHSE 4 — GEMEINSCHAFTSRÄUME: GEMEINSAME NUTZUNG UND GOVERNANCE\nBellelay stellt eine zentrale Betriebsfrage: Gemeinschaftsflächen für eine Vielzahl von Nutzerinnen und Nutzern zu organisieren und Nutzungsregeln räumlich zu übersetzen. Öffentlich/privat-Gradienten, Pufferzonen, Empfang, Lagerung, Zirkulation und Sicherheit müssen eine effiziente und langfristig tragfähige gemeinsame Nutzung unterstützen.",

  "ACHSE 5 — RAUMPLANUNG UND ÖRTLICHE REALITÄTEN\nDas Projekt ist in konkrete räumliche Rahmenbedingungen eingebettet: Erschliessung, Anlieferung, Parkierung, Infrastrukturnetze, Topografie, Landschaft und Nachbarschaft. Diese Achse untersucht die Schnittstelle zwischen Bauensemble und Territorium, um kohärente, zurückhaltende und kontextgerechte Lösungen zu entwickeln.",

  "ACHSE 6 — ZIRKULARITÄT UND ÖKOSYSTEM DES AREALS\nDer Ort bietet einen geeigneten Rahmen für eine zirkuläre Herangehensweise: Wiederverwendung, selektiver Rückbau, Instandhaltung und lokale Materialkreisläufe. Aussenräume können zu einem ganzheitlichen Ökosystem beitragen — Freizeit, Produktion, ökologische Bewirtschaftung — im Einklang mit den Nutzungen und der Governance des Ortes.",

  "ACHSE 7 — ZEITGENÖSSISCHE NUTZUNGEN UND INTEGRATION DER SYSTEME\nResidenzen, Arbeit, Veranstaltungen und Empfang erfordern Komfort und Normenkonformität (Akustik, Thermik, Luftqualität, Barrierefreiheit, Brandschutz). In einem denkmalgeschützten Kontext müssen diese Systeme mit Feingefühl integriert werden: minimale Eingriffe, reversible Lösungen und Respekt vor der architektonischen Lesbarkeit.",

  "SCHLUSSFOLGERUNG\nAn Bellelay zu arbeiten bedeutet, Architektur als Disziplin der Präzision zu verstehen: ein komplexes Ensemble lesen, das Wertvolle schützen und seine Transformation für vielfältige und dauerhafte Nutzungen organisieren. Ziel ist es, zurückhaltende, reversible und betriebstaugliche Interventionsszenarien zu entwickeln, die die Kohärenz des Ortes stärken und zugleich neue Möglichkeiten der Nutzung, gemeinsamen Bewirtschaftung und Erprobung eröffnen."
          ]
        },
        amenagement: {
          title: "Raumplanung",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
  "EINLEITUNG\nIn Bellelay ist die Raumplanung ein entscheidender Hebel, um zeitgemässe Nutzungen zu ermöglichen und gleichzeitig eine langfristig kontrollierte Entwicklung des Areals sicherzustellen. Die Besonderheit des Ortes—denkmalgeschützt, grossräumig und potenziell mit Mehrfachnutzungen—erfordert eine präzise Abstimmung zwischen kommunalen Regelwerken, regionalen und kantonalen Zielsetzungen sowie den betrieblichen Realitäten (Mobilität, Erschliessung, Etappierung, Wirkungen auf das Umfeld). Ziel ist ein Planungsrahmen, der die Transformation des Standortes nachvollziehbar, rechtssicher und politisch tragfähig begleitet.",

  "ACHSE 1 — RÄUMLICHE DIAGNOSE UND EINBETTUNG IN DEN KONTEXT\nErster Schritt ist die sachliche Klärung der Ausgangslage: geltende Nutzungszuweisungen, Baurechte, Perimeter und Restriktionen (Denkmalschutz, Umwelt, Landschaft), Kapazitäten der Netze, Bedingungen für Zugang und Sicherheit sowie Nachbarschaftsthemen. Diese Diagnose bildet die Grundlage der Strategie: was kurzfristig aktivierbar ist, was Verfahren erfordert und was für spätere Etappen vorzusehen ist. Ziel ist eine operative Lesart von Restriktionen und Handlungsspielräumen.",

  "ACHSE 2 — ANPASSUNG KOMMUNALER VORSCHRIFTEN FÜR TRANSITORISCHE NUTZUNGEN\nTransitorische Nutzungen (Ateliers, Residenzen, Veranstaltungen, temporäre Belegung) werden häufig durch Regelwerke gebremst, die auf stabilisierte Situationen ausgerichtet sind. Diese Achse entwickelt—in Abstimmung mit der Gemeinde—Mechanismen eines kontrollierten Spielraums: befristete Bewilligungen, zeitlich limitierte Nutzungen, risikoproportionale Anforderungen und Kriterien der Reversibilität. Es geht nicht um Umgehung, sondern um ermöglichtes, gesteuertes Experimentieren, um Programme zu testen, reale Bedarfe zu präzisieren und die langfristige Planung zu speisen.",

  "ACHSE 3 — LOKALISIERTES RICHTPROJEKT / MASTERPLAN: VISION, ETAPPIERUNG UND KOHÄRENZ\nDie Transformation von Bellelay benötigt einen klar lesbaren strategischen Rahmen, der Vision, Governance und Zeithorizonte ausrichtet. Ein lokalisiertes Richtprojekt (Masterplan) klärt die Leitlinien: Standortvokation, Intensitäten und Nutzungskompatibilitäten, Prinzipien der Erhaltung, Organisation der Gemeinschaftsflächen, Umgang mit Aussenräumen sowie die Einbindung in die Infrastruktur. Das Dokument muss eine realistische Etappierung enthalten (was rasch möglich ist vs. was lange Vorläufe hat) und als gemeinsame Referenz für Behörden, Betreiber und Nutzende dienen.",

  "ACHSE 4 — QUARTIERPLAN / DETAILPLAN IM EINKLANG MIT DER ZUKÜNFTIGEN ENTWICKLUNG\nÜber die Vision hinaus ist ein Quartierplan (oder ein gleichwertiges Instrument) erforderlich, um die Entwicklung rechtlich zu sichern: Regeln zur Setzung und Nutzung, Interventionsperimeter, Bedingungen für Umbau und Umnutzung, Erschliessung, Parkierung, mögliche Nutzungen sowie Qualitätsanforderungen (Landschaft, gemeinschaftliche Räume, denkmalpflegerische Einbindung). Ziel ist eine Regelbasis, die der Realität des Areals entspricht: Anpassungen und Nutzungsänderungen ermöglichen und zugleich Leitplanken für Gesamtqualität und Mehrakteursfähigkeit setzen.",

  "ACHSE 5 — REGIONALE UND KANTONALE POLITISCHE THEMEN BEI UMNUTZUNGEN\nUmnutzungen in dieser Grössenordnung sind nicht nur lokale Entscheidungen: Sie berühren regionale und kantonale Zielsetzungen zu Raumentwicklung, Landschaftsschutz, Denkmalpflege, Wirtschaft und sozialem Zusammenhalt. Diese Achse adressiert die politisch-institutionelle Dimension: ein gemeinsames Narrativ, Stakeholder-Mapping, Antizipation von Verfahren und Abwägungen sowie die Ausrichtung an übergeordneten Strategien (kantonale Konzepte, sektorale Politiken). Ziel ist ein Projekt, das öffentlich nachvollziehbar und in den übergeordneten Rahmen plausibel integrierbar ist.",

  "ACHSE 6 — ABSTIMMUNG MIT DER REGIONALEN MOBILITÄTSPLANUNG\nMobilität ist ein Schlüsselfaktor für die Tragfähigkeit des Standortes: Sie beeinflusst Erreichbarkeit, Akzeptanz und Umweltwirkungen. Diese Achse zielt auf eine enge Koordination mit der regionalen Planung: Stärkung des öffentlichen Verkehrs (Takt, Haltestellen, Anschlüsse), Hierarchisierung der Zufahrten sowie eine phasen- und spitzenorientierte Parkierungssteuerung. Ziel ist, die Abhängigkeit vom Individualverkehr zu reduzieren und gleichzeitig eine inklusive und realistische Erreichbarkeit zu gewährleisten.",

  "ACHSE 7 — LANGSAME MOBILITÄT: KONTINUITÄTEN, SICHERHEIT UND QUALITÄT DER WEGE\nErgänzend zum ÖV ist die Vernetzung der aktiven Mobilität ein eigenständiges Projektthema: sichere Fuss- und Veloverbindungen, klare Routenführung, Querungssicherheit, Veloabstellanlagen sowie die Abstimmung mit technischen Zufahrten. Ebenso geht es um Nutzungsqualität: Ankunfts- und Wegsequenzen sollen als Teil der Ortserfahrung funktionieren und zugleich im Alltag robust und betriebssicher sein.",

  "ACHSE 8 — UMSETZUNG: GOVERNANCE, INSTRUMENTE UND LANGFRISTIGES MONITORING\nWirksame Planung braucht klare Instrumente und Zuständigkeiten: Verfahrensfahrplan, Rollenverteilung (Eigentümer, Betreiber, Gemeinde, Kanton, Partner), Partizipationsformate und Monitoring (Mobilität, Immissionen, Nutzungen, Wirkungen). Ziel ist ein lebendiger Planungsprozess, der Rückmeldungen integriert, Regeln bei Bedarf nachschärft und die Entwicklung steuert, ohne die Gesamtlogik des Areals zu verlieren.",

  "SCHLUSSFOLGERUNG\nDie Raumplanung für Bellelay muss Experiment und Absicherung verbinden: transitorische Nutzungen ermöglichen, um das Areal zu aktivieren und zu testen, und zugleich einen langfristigen Rahmen über ein lokalisiertes Richtprojekt und einen Quartierplan schaffen, der die künftige Entwicklung trägt. Der Erfolg hängt von politischer und institutioneller Verankerung sowie der Abstimmung mit der regionalen Mobilitätsplanung ab—insbesondere mit dem öffentlichen Verkehr und der aktiven Mobilität. Ziel ist eine glaubwürdige, schrittweise und breit getragene Transformationsstrategie, die den denkmalpflegerischen, räumlichen und gesellschaftlichen Anforderungen des Ortes entspricht."
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


      /*contact de*/
   contact: {
    title: "Ein Projekt, eine Frage? Sprechen wir darüber.",
    subtitle: "Kontaktinformationen und Anfahrtsbeschreibung",
    heading: "Kontaktieren Sie uns"
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
      title: "Disciplines",
      subtitle: "Exploration by disciplinary fields.",
      menu: {
        architecture: "Architecture",
        amenagement: "Spatial Planning",
        histoire: "History",
        culture_art: "Culture and Art",
        circularity: "Circularity",
        tourisme: "Sustainable Tourism",
        social: "Social",
        paix: "Peace & War Reparations"
      },

        architecture: {
          title: "Architecture",
          img: "assets/img/discipline-architecture.jpg",
          paragraphs: [
"INTRODUCTION\nBellelay is a rare architectural field of study: an extensive, historically layered built ensemble with significant heritage value. The coexistence of buildings and components from different periods, combined with contemporary requirements for use and management, makes it an exemplary case for analysing, documenting, and transforming a site without compromising its overall coherence.",

  "AXIS 1 — HERITAGE VALUE AND PROTECTIONS: AN INTERVENTION DOCTRINE\nHeritage protections and cultural value call for a clear methodology: diagnosis, material compatibility, reversibility, and legibility of interventions. The goal is to design accurate, restrained, and well-argued contemporary transformations that integrate current constraints (safety, accessibility, comfort) without trivialising the existing fabric.",

  "AXIS 2 — BUILDING DIAGNOSIS: MATERIALS AND PATHOLOGIES\nBellelay enables a precise analysis of construction systems (masonry, roof and timber structures, envelope, joinery) and their vulnerabilities: moisture, ageing, alterations and repairs, critical details. The challenge is to connect on-site assessment to robust, repairable, and durable design decisions.",

  "AXIS 3 — SCALE AND COMPLEXITY: PROGRAMMING AND PHASING\nThe multiplicity of buildings and spatial sequences requires programming by functional units and time-based phases. Work focuses on use compatibility, flows, operations and logistics, and a realistic phasing strategy, enabling gradual evolution of the site without disrupting ongoing operation.",

  "AXIS 4 — SHARED SPACES: RESOURCE SHARING AND GOVERNANCE\nBellelay raises a central operational issue: organising shared spaces for a diversity of users, with rules of use translated into spatial terms. Public/private gradients, buffer zones, reception, storage, circulation, and safety must support efficient and long-term shared use.",

  "AXIS 5 — SPATIAL PLANNING AND ON-THE-GROUND REALITIES\nThe project is embedded in tangible territorial constraints: access, deliveries, parking, utilities and networks, topography, landscape, and neighbouring contexts. This axis examines the interface between the built ensemble and its territory to develop coherent, understated, and context-responsive solutions.",

  "AXIS 6 — CIRCULARITY AND THE SITE ECOSYSTEM\nThe site offers a strong framework for a circular approach: reuse, selective deconstruction, maintenance, and local material loops. Outdoor spaces can contribute to a complete ecosystem—leisure, production, ecological management—aligned with uses and the site’s governance.",

  "AXIS 7 — CONTEMPORARY USES AND INTEGRATION OF SYSTEMS\nResidencies, work, events, and reception require comfort and compliance (acoustics, thermal performance, indoor air quality, accessibility, fire safety). In a heritage context, these systems must be integrated with care: minimal interventions, reversible solutions, and respect for architectural legibility.",

  "CONCLUSION\nWorking on Bellelay means approaching architecture as a discipline of precision: understanding a complex ensemble, protecting what gives it value, and organising its transformation for multiple and lasting uses. The ambition is to produce restrained, reversible, and operational intervention scenarios that reinforce the site’s coherence while opening new possibilities for occupation, shared use, and experimentation."
]
        },
        amenagement: {
          title: "Spatial planning",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
"INTRODUCTION\nIn Bellelay, spatial planning is a decisive lever for enabling contemporary uses while ensuring a controlled, long-term evolution of the site. The specificity of the place—heritage-based, large in scale, and potentially multi-use—requires a fine articulation between municipal regulations, regional and cantonal priorities, and operational realities (mobility, access, phasing, and impacts). The aim is to build a planning framework that can accompany transformation in a legible, legally robust, and politically sustainable way.",

  "AXIS 1 — TERRITORIAL DIAGNOSIS AND CONTEXTUAL BASELINE\nThe first step is to clarify the territorial baseline: current zoning and land-use designations, development rights, perimeters and constraints (heritage, environment, landscape), capacity of utilities and networks, access and safety conditions, and neighbourhood considerations. This diagnosis underpins the strategy by distinguishing what can be activated immediately, what requires procedures, and what should be reserved for later phases. The objective is an operational reading of constraints and room for manoeuvre.",

  "AXIS 2 — ADAPTING MUNICIPAL REGULATIONS FOR TRANSITIONAL USES\nTransitional uses (studios, residencies, events, temporary occupancy) are often constrained by regulatory frameworks designed for stable, permanent situations. This axis aims—together with the municipality—to define mechanisms for controlled flexibility: time-limited authorisations, proportionate requirements aligned with risk, and clear reversibility criteria. The goal is not to bypass rules, but to enable supervised experimentation that can test programmes, clarify real needs, and feed long-term planning.",

  "AXIS 3 — A LOCALISED MASTERPLAN: VISION, PHASING, AND COHERENCE\nBellelay’s transformation requires a clear strategic framework capable of aligning vision, governance, and timelines. Establishing a localised masterplan makes intentions explicit: the site’s vocation, intensity and compatibility of uses, conservation principles, organisation of shared spaces, management of outdoor areas, and alignment with infrastructure. The document must include realistic phasing (what can happen quickly versus what requires longer lead times) and serve as a shared reference for authorities, operators, and users.",

  "AXIS 4 — A DISTRICT PLAN ALIGNED WITH FUTURE SITE DEVELOPMENT\nBeyond vision, a district plan (or equivalent instrument) is needed to secure future evolution legally: rules for siting and intervention perimeters, conditions for conversion and change of use, access, parking, permitted uses, and quality requirements (landscape, shared/public spaces, heritage integration). This axis aims to provide a regulatory basis that matches the site’s realities—enabling adaptation while setting clear safeguards and ensuring overall quality, even with multiple stakeholders and users.",

  "AXIS 5 — REGIONAL AND CANTONAL POLITICAL ISSUES RELATED TO CHANGES OF USE\nChanges of use at this scale are not purely local decisions: they engage regional and cantonal priorities regarding territorial development, landscape protection, heritage, the economy, and social cohesion. This axis addresses the political and institutional dimension: building a shared narrative, identifying stakeholders, anticipating procedures and trade-offs, and aligning with higher-level strategies (cantonal frameworks and sectoral policies). The goal is to make the project understandable, defensible, and compatible with overarching planning objectives.",

  "AXIS 6 — COORDINATION WITH REGIONAL MOBILITY PLANNING\nMobility is a structural factor for the site’s viability: it conditions accessibility, local acceptability, and environmental impact. This axis focuses on close coordination with regional planning: strengthening public transport (frequency, stops, connections), clarifying access hierarchies, and managing parking according to phases and peak events. The objective is to reduce dependency on private cars while ensuring inclusive and realistic accessibility, consistent with the territory’s capacities.",

  "AXIS 7 — ACTIVE MOBILITY: CONTINUITY, SAFETY, AND QUALITY OF ROUTES\nIn addition to public transport, connecting active mobility networks is a project topic in its own right: continuous pedestrian and cycling links, safer crossings, legible wayfinding, bicycle parking, and coordination with technical access routes. This axis also addresses the experiential dimension: routes and arrivals should contribute to the site’s identity, while remaining robust and manageable in daily operation.",

  "AXIS 8 — IMPLEMENTATION: GOVERNANCE, TOOLS, AND LONG-TERM MONITORING\nEffective planning requires clear tools and governance: a procedural roadmap, role allocation (owner, operator, municipality, canton, partners), consultation formats, and monitoring indicators (mobility, nuisances, uses, impacts). The aim is to turn planning documents into a living framework—able to integrate feedback, adjust rules when needed, and support evolution without losing overall coherence.",

  "CONCLUSION\nSpatial planning for Bellelay must reconcile experimentation and legal security: enabling transitional uses to activate and test the site, while establishing a durable planning framework through a localised masterplan and a district plan aligned with future development. Success also depends on political and institutional embedding, and on coordination with regional mobility planning—especially public transport and active mobility. The ambition is to deliver a credible, gradual, and shared transformation trajectory, commensurate with the site’s heritage, territorial, and societal stakes."
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


      /*contact en*/
       contact: {
          title: "A project, a question? Let’s talk about it.",
          subtitle: "Contact details and access information",
          heading: "Contact us"
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
