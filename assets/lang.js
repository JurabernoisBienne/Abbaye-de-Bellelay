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
      hero: { title: "Un lieu de Formation et de Culture", subtitle: "pour apprendre, créer ou partager" },
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
           "INTRODUCTION\nBellelay est un terrain d’étude architectural rare : un ensemble bâti étendu, historiquement stratifié, et porteur d’une forte valeur patrimoniale (bien culturel d'importance nationale). La coexistence de bâtiments et d’éléments construits issus de périodes différentes, conjuguée à des exigences contemporaines d’usage et de gestion, en fait un cas d’école pour analyser, documenter et transformer un site sans en altérer la valeur et la cohérence.",
         
           "PATRIMOINE ET PROTECTIONS : DOCTRINE D’INTERVENTION\nLes protections et la valeur patrimoniale imposent une méthode : diagnostic, compatibilité des matériaux, réversibilité et lisibilité des interventions. Il s’agit de concevoir des transformations contemporaines justes, discrètes et argumentées, capables d’intégrer les contraintes actuelles (sécurité, accessibilité, confort) sans banaliser l’existant.",
         
           "DIAGNOSTIC CONSTRUCTIF : MATÉRIALITÉS ET PATHOLOGIES\nBellelay permet une analyse fine des systèmes constructifs (maçonneries, charpentes, enveloppes, menuiseries) et de leurs vulnérabilités : humidité, vieillissement, reprises, valeurs énergétiques, points singuliers. L’enjeu est de relier l’auscultation à des choix de projet robustes, réparables et durables.",
         
           "GRANDEUR ET COMPLEXITÉ : PROGRAMMATION ET PHASAGE\nLa multiplicité des bâtiments et des séquences d’espaces appelle une programmation par unités fonctionnelles et par temporalités. On y travaille les compatibilités d’usage, les flux, la logistique et un phasage réaliste, pour permettre une évolution progressive du site sans rupture d’exploitation.",
         
           "ESPACES COMMUNS : MUTUALISATION ET GOUVERNANCE\nBellelay pose un enjeu central de gestion : organiser des espaces communs pour une pluralité d’utilisateurs, avec des règles d’usage traduites en spatialité. Gradients public/privé, zones tampon, accueil, stockage, circulation et sécurité doivent soutenir une mutualisation efficace et pérenne.",
         
           "AMÉNAGEMENT DU TERRITOIRE ET RÉALITÉS DU TERRAIN\nOutre l'affectation du sol (zone d'utilité publique), le projet s’inscrit dans des contraintes territoriales concrètes : accès, livraisons, stationnement, réseaux, topographie, paysage et voisinage. Cet axe étudie l’interface entre bâti et territoire pour concevoir des solutions cohérentes, sobres et adaptées au contexte.",
         
           "CIRCULARITÉS ET ÉCOSYSTÈME DU SITE\nLe site offre un cadre pertinent pour une approche circulaire globale : réemploi, dépose sélective, maintenance et boucles locales de matériaux, et aussi toutes interactions économiques de proximité. Les extérieurs peuvent contribuer à un écosystème complet — loisirs, production, gestion écologique — en cohérence avec les usages et la gouvernance du lieu.",
         
           "USAGES CONTEMPORAINS ET INTÉGRATION DES DISPOSITIFS\nRésidences, travail, événements et accueil exigent confort et mise aux normes (acoustique, énergétique, thermique, qualité de l’air, accessibilité, incendie). Sur un site patrimonial, ces dispositifs doivent être intégrés avec tact : interventions minimales, solutions réversibles et respect de la lecture architecturale.",
         
           "CONCLUSION\nTravailler sur Bellelay, c’est aborder l’architecture comme un pont entre le passé et le futur : comprendre un ensemble complexe, protéger ce qui fait sa valeur, et organiser sa transformation pour des usages multiples et durables. L’ambition est de produire des scénarios d’intervention sobres, réversibles et opérationnels, capables de renforcer la cohérence du site tout en ouvrant de nouvelles possibilités d’occupation, de mutualisation et d’expérimentation."
         ]
        },
        amenagement: {
          title: "Aménagement du territoire",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, l’aménagement du territoire constitue un levier déterminant pour rendre possibles des usages contemporains tout en assurant une évolution maîtrisée du site dans la durée. La spécificité du lieu—à la fois patrimonial, vaste, et potentiellement multi-usages—exige une articulation fine entre les cadres réglementaires communaux, les orientations régionales et cantonales, et les réalités opérationnelles (mobilité, accès, phasage, gestion des impacts). L’objectif est de construire un dispositif de planification capable d’accompagner la transformation du site de manière lisible, juridiquement robuste et politiquement soutenable.",

  "DIAGNOSTIC TERRITORIAL ET CADRE D’INSCRIPTION\nLa première étape consiste à objectiver la situation territoriale : affectations en vigueur, droits à bâtir, périmètres et contraintes (patrimoine, environnement, paysage), capacité des réseaux, conditions d’accès et de sécurité, ainsi que les enjeux de voisinage. Ce diagnostic fonde la stratégie : identifier ce qui est immédiatement activable, ce qui nécessite des procédures, et ce qui doit être réservé à des phases ultérieures. L’enjeu est d’éviter une planification abstraite et de produire une lecture opérationnelle des contraintes et marges de manœuvre.",

  "ADAPTATION DES RÈGLEMENTS COMMUNAUX POUR DES UTILISATIONS TRANSITOIRES\nLes usages transitoires (ateliers, résidences, événements, occupations temporaires) sont souvent freinés par des cadres normatifs conçus pour des situations stabilisées. Cet axe vise à définir, en concertation avec la commune, des mécanismes d’assouplissement encadré : conditions temporaires, autorisations limitées dans le temps, exigences proportionnées au risque, et critères de réversibilité. L’objectif n’est pas de contourner les règles, mais de rendre possible l’expérimentation contrôlée, afin de tester des programmes, qualifier des besoins réels et alimenter la planification pérenne.",

  "PLAN DIRECTEUR LOCALISÉ : VISION, PHASAGE ET COHÉRENCE\nLa transformation de Bellelay nécessite un cadre stratégique lisible, capable d’aligner vision, gouvernance et temporalités. L’édiction d’un plan directeur localisé permet de clarifier les intentions : vocation du site, intensités et compatibilités d’usage, principes de préservation, organisation des espaces communs, gestion des extérieurs, et articulation avec les infrastructures. Ce document doit intégrer un phasage réaliste (ce qui peut évoluer rapidement vs ce qui requiert des étapes longues) et servir de référence partagée pour les autorités, les opérateurs et les usagers.",

  "PLAN DE QUARTIER CONFORME AUX DÉVELOPPEMENTS FUTURS DU SITE\nAu-delà de la vision, un plan de quartier (ou instrument équivalent) est nécessaire pour sécuriser juridiquement les évolutions : règles d’implantation, périmètres d’intervention, conditions de transformation, gestion des accès, stationnement, affectations possibles, et exigences de qualité (paysage, espaces publics/communs, intégration patrimoniale). Cet axe vise à produire une base réglementaire cohérente avec la réalité du site : permettre des adaptations et changements d’affectation tout en garantissant des garde-fous et une qualité d’ensemble, y compris pour une pluralité d’acteurs et d’usages.",

  "ENJEUX POLITIQUES RÉGIONAUX ET CANTONAUX LIÉS AUX CHANGEMENTS D’AFFECTATION\nLes changements d’affectation sur un site de cette ampleur ne relèvent pas uniquement d’une décision locale : ils engagent des orientations régionales et cantonales en matière de développement territorial, de protection du paysage, de patrimoine, d’économie et de cohésion sociale. Cet axe traite la dimension politico-institutionnelle : construction d’un récit partagé, identification des parties prenantes, anticipation des procédures et des arbitrages, et alignement avec les objectifs supérieurs (stratégies cantonales, politiques sectorielles). L’enjeu est de rendre le projet “audible” et défendable, en démontrant sa pertinence publique et sa compatibilité avec les cadres directeurs.",

  "COORDINATION AVEC LA PLANIFICATION RÉGIONALE DE LA MOBILITÉ\nLa mobilité est un facteur structurant de la viabilité du site : elle conditionne l’accueil, l’accessibilité, l’acceptabilité locale et l’impact environnemental. Cet axe vise une coordination étroite avec la planification régionale : renforcement des transports publics (cadencement, arrêts, connexions), hiérarchisation des accès, et gestion du stationnement selon les phases et les pics d’activité. L’objectif est de réduire la dépendance à la voiture individuelle tout en assurant une accessibilité inclusive et réaliste, en cohérence avec les capacités du territoire.",

  "MOBILITÉ DOUCE : CONTINUITÉS, SÉCURITÉ ET QUALITÉ DES PARCOURS\nEn complément des transports publics, la mise en réseau des mobilités douces constitue un enjeu de projet à part entière : continuités piétonnes et cyclables, sécurisation des traversées, lisibilité des itinéraires, stationnements vélos, et articulation avec les accès techniques. Cet axe aborde aussi la qualité d’usage : faire des parcours une expérience (arrivées, séquences, paysage) et non un simple flux, tout en assurant la robustesse et l’exploitation au quotidien.",

  "MISE EN ŒUVRE : GOUVERNANCE, OUTILS, ET SUIVI DANS LA DURÉE\nUne planification efficace suppose des outils et une gouvernance clairs : calendrier de procédures, répartition des rôles (propriétaire, exploitant, commune, canton, partenaires), modalités de concertation, et indicateurs de suivi (mobilité, nuisances, usages, impacts). Cet axe vise à transformer les documents de planification en dispositif vivant : capable d’intégrer des retours d’expérience, d’ajuster des règles si nécessaire, et d’accompagner l’évolution du site sans perdre la cohérence d’ensemble.",

  "CONCLUSION\nL’aménagement du territoire à Bellelay doit concilier expérimentation et sécurisation : permettre des usages transitoires pour tester et activer le site, tout en construisant un cadre de planification pérenne via un plan directeur localisé et un plan de quartier adaptés aux développements futurs. La réussite du projet dépend aussi de son inscription politique et institutionnelle, ainsi que de sa coordination avec la planification régionale de la mobilité, en particulier les transports publics et les mobilités douces. L’ambition est de produire une trajectoire de transformation crédible, progressive et partagée, à la hauteur des enjeux patrimoniaux, territoriaux et sociétaux du lieu."
]
        },
        histoire: {
          title: "Histoire",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
"INTRODUCTION\nAborder Bellelay par l’histoire, c’est considérer le site comme un document vivant : un ensemble bâti et paysager dont les formes, les usages et les récits se sont constitués par strates. L’étude historique vise moins l’accumulation d’érudition que la compréhension des continuités, des ruptures et des réaffectations qui ont façonné le lieu. Elle permet d’éclairer les choix contemporains—conservation, transformation, programmation—en replaçant le site dans les temporalités qui l’ont produit.",

  "LE SITE COMME ARCHIVE : TRACES MATÉRIELLES ET RÉCITS\nBellelay se prête à une lecture croisée des sources et des indices matériels : organisation des bâtiments, transformations, reprises constructives, inscriptions d’usage dans les espaces, relations au territoire. L’enjeu est de mettre en regard ce que racontent les documents (textes, plans, archives) et ce que révèle le bâti lui-même, afin d’identifier les grandes séquences de formation du site et les logiques qui ont orienté ses évolutions.",

  "GRANDES PÉRIODES ET MOMENTS DE TRANSITION\nL’étude historique s’intéresse aux périodes structurantes traversées par Bellelay et, surtout, aux moments de bascule : changements d’affectation, modifications institutionnelles, nouvelles pratiques, événements et décisions qui transforment les espaces et leur signification. Plutôt que d’énumérer une chronologie exhaustive, l’objectif est de dégager des “moments-clés” permettant de comprendre pourquoi certaines formes, certains parcours ou certains bâtiments existent tels qu’ils sont aujourd’hui.",

  "USAGES, COMMUNAUTÉS ET ÉCONOMIES DU LIEU\nL’histoire du site se lit aussi à travers ses usages et les communautés qui l’ont animé : modes d’habiter et de travailler, organisation quotidienne, accueil, production, rapports à la terre et aux ressources. Cet axe vise à relier l’évolution des espaces aux pratiques sociales et économiques, afin de saisir comment l’architecture répond à des fonctions changeantes et comment, inversement, elle influence les manières d’occuper le lieu.",

  "HISTOIRE ET PROJET : MÉTHODE POUR UNE TRANSFORMATION ÉCLAIRÉE\nL’histoire n’est pas un décor : elle constitue un outil de projet. En identifiant les valeurs, les invariants et les transformations antérieures, elle aide à décider de ce qui doit être préservé, révélé, interprété ou adapté. Cet axe propose une approche pragmatique : documenter, hiérarchiser les enjeux, expliciter les choix, et construire des interventions contemporaines qui restent lisibles et respectueuses des récits du site.",

  "REPÈRES ET RESSOURCES : SE RÉFÉRER À LA FRISE CHRONOLOGIQUE\nPour situer Bellelay dans ses principales étapes historiques, il est recommandé de se référer à la frise chronologique disponible sur ce site internet, dans la page « Patrimoine ». Elle offre des repères synthétiques sur les périodes importantes et facilite l’articulation entre lecture historique, visite du lieu et compréhension des transformations.",

  "CONCLUSION\nÉtudier l’histoire de Bellelay, c’est se donner les moyens de comprendre un site en profondeur, sans figer son évolution. En éclairant les grandes phases, les transitions et les usages, l’approche historique nourrit une transformation plus juste : capable de respecter la mémoire du lieu tout en accompagnant des fonctions contemporaines. La frise chronologique de la page « Patrimoine » constitue un point d’entrée essentiel pour structurer cette lecture et orienter les approfondissements."
]
        },
        culture_art: {
          title: "Culture et art",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, culture et art ne s’ajoutent pas au site : ils s’y inscrivent naturellement, tant l’architecture, l’acoustique, la lumière et le paysage constituent déjà une scène. Le lieu offre un cadre rare où diffusion culturelle, création artistique et production peuvent coexister : des espaces monumentaux et intimes, des ambiances très différenciées, et une atmosphère de tranquillité propice au travail de fond. L’enjeu est de valoriser ces qualités sans les surexploiter, en construisant une programmation sensible, cohérente et respectueuse du site.",

  "UNE DYNAMIQUE CULTURELLE DÉJÀ ACTIVE\nBellelay accueille déjà des activités culturelles et artistiques, notamment grâce à la Fondation de l’Abbatiale de Bellelay, qui organise des concerts et des expositions d’art. Cet ancrage existant constitue une base solide : il permet de s’appuyer sur des expériences éprouvées, des publics, et une compréhension fine des contraintes d’accueil. L’objectif est de renforcer cette dynamique, de la diversifier, et de mieux articuler diffusion (événements, expositions) et création (résidences, production).",

  "PRODUCTION SONORE ET EXPÉRIENCE ACOUSTIQUE\nLe site se prête particulièrement à la création sonore. L’abbatiale, avec son écho et sa résonance hors du commun, offre un contexte exceptionnel pour la musique, l’expérimentation acoustique, la voix, les ensembles et la spatialisation du son. Au-delà des concerts, cette dimension ouvre des possibilités de recherche et de production : prises de son, compositions in situ, dispositifs immersifs, dialogues entre architecture et son, ainsi que des formats hybrides mêlant performance, installation et médiation.",

  "ESPACES UNIQUES POUR EXPOSITIONS ET INSTALLATIONS\nBellelay propose des lieux d’exposition rares, capables d’accueillir des œuvres et des formats très variés dans un cadre exceptionnel. Des combles remarquables, une crypte unique, et des jardins magnifiques composent une diversité d’ambiances—verticalités, pénombres, vues, textures—qui invitent à des expositions in situ, des installations, des parcours curatoriaux et des interventions sensibles. L’enjeu est de travailler l’adéquation entre œuvre et lieu, en valorisant la singularité des espaces plutôt qu’une neutralité muséale.",

  "TRANQUILLITÉ, VASTES ESPACES ET CONDITIONS DE CRÉATION\nLa tranquillité du site, la présence d’espaces vastes et la qualité du paysage offrent des conditions précieuses pour l’inspiration et la création. Bellelay permet des temporalités longues : recherche, esquisses, répétitions, prototypage, écriture, montage. Cette approche met l’accent sur l’hospitalité de travail : rythmes compatibles avec le lieu, cohabitation respectueuse des usages, et mise en place de conditions favorables à la concentration comme au partage.",

  "PROGRAMMATION : COHÉRENCE, QUALITÉ ET RESPECT DU SITE\nDévelopper culture et art à Bellelay implique une programmation pensée comme un équilibre : intensités maîtrisées, formats adaptés, gestion des flux et des impacts, et attention à la conservation du site. L’objectif est de construire une offre culturelle exigeante, ouverte et ancrée, qui associe événements, expositions et résidences, tout en préservant ce qui fait la force du lieu : ses ambiances, ses silences, et sa qualité d’expérience.",

  "CONCLUSION\nBellelay réunit des conditions rarement réunies : une vie culturelle déjà active, une acoustique remarquable, des espaces singuliers pour exposer et installer, et une tranquillité propice à la création. En articulant diffusion et production, et en développant une programmation respectueuse de l’architecture et du paysage, le site peut devenir un cadre de référence pour des projets culturels et artistiques à la fois ambitieux, sensibles et durablement inscrits dans le lieu."
]
        },
        circularity: {
          title: "Circularité",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, la circularité n’est pas un concept plaqué : elle s’inscrit dans une logique de site, héritée d’un fonctionnement monastique et réactivée aujourd’hui par des pratiques concrètes. La configuration du lieu—bâtiments, extérieurs, ressources, savoir-faire, espaces de transformation—permet d’imaginer des boucles courtes et lisibles, où production, usage, entretien et réemploi s’organisent à l’échelle d’un même ensemble. L’ambition est de faire de Bellelay un écosystème opérationnel, démonstratif et durable, fondé sur le local, la sobriété et la transmission.",

  "CIRCULARITÉ ALIMENTAIRE : DE LA PRODUCTION À LA CONSOMMATION\nLe site dispose d’atouts remarquables pour valoriser une circularité alimentaire complète. Les terrasses héritées de la période monastique constituent une base paysagère et productive rare ; elles accueillent déjà des cultures de légumes et de céréales, ainsi que des fruits issus d’anciens arbres palissés. Cette production locale peut être renforcée, diversifiée et articulée à des usages quotidiens, à l’éducation et à l’accueil. Surtout, Bellelay possède sur place des infrastructures de transformation et de consommation : de grandes cuisines capables de traiter les récoltes et une cafétéria au plafond voûté monumental, qui rend possible une chaîne courte, de la terre à l’assiette, dans un cadre architectural exceptionnel.",

  "CIRCULARITÉ ARTISANALE : SAVOIR-FAIRE, RÉPARATION ET ENTRETIEN\nBellelay porte une tradition de métiers intégrés : historiquement, à chaque période, des corps de métiers étaient présents pour répondre aux besoins du site, notamment dans le domaine de la construction. Cette logique se prolonge aujourd’hui : un menuisier a repris les locaux d’une ancienne menuiserie et travaille le bois selon des pratiques anciennes et durables—choix de matière, gestes, temps long, et mise en œuvre attentive. Il coupe ses troncs dans les forêts alentours, les débite à la scie à main et privilégie des colles naturelles, inscrivant la production dans une économie de proximité et une maîtrise des impacts. En parallèle, une blanchisserie sur place répond aux besoins des utilisateurs et renforce une approche de service, de maintenance et de logistique interne, essentielle à la pérennité d’un site multi-usages.",

  "UNE CIRCULARITÉ À L’ÉCHELLE DU SITE : BOUCLES COURTES, LOGISTIQUE ET QUALITÉ D’USAGE\nLa circularité à Bellelay se joue dans l’organisation : rendre les boucles visibles, efficaces et compatibles avec la vie quotidienne. Cela implique de penser les flux (récoltes, stockage, préparation, distribution, déchets organiques), les espaces (ateliers, réserves, zones de tri, lieux de réparation), et les règles d’usage (mutualisation, responsabilités, entretien). L’objectif est d’éviter une circularité “symbolique” et de construire une circularité praticable : simple à exploiter, mesurable, et suffisamment robuste pour fonctionner avec une diversité d’usagers et de rythmes.",

  "CONCLUSION\nBellelay réunit des conditions rares pour incarner une circularité complète et crédible : une base productive agricole déjà active, des infrastructures de transformation et de consommation sur place, et une continuité artisanale concrète au service du site et de ses utilisateurs. En consolidant ces dynamiques—sans perdre la sobriété et l’ancrage local—le site peut devenir un exemple de circularité vécue : un modèle où l’alimentation, les métiers, l’entretien et la gestion quotidienne se répondent dans des boucles courtes, durables et transmissibles."
]
        },
        tourisme: {
          title: "Tourisme durable",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, le tourisme durable s’appuie sur une situation géographique et paysagère particulièrement favorable, au cœur de l’Arc jurassien. Le site permet de conjuguer découverte culturelle, immersion dans la nature, mobilité douce et sensibilisation, dans un territoire qui valorise déjà des pratiques respectueuses : rythmes lents, saisonnalité, attention aux milieux, et ancrage dans les savoir-faire locaux. L’enjeu est de développer une hospitalité à faible impact, fondée sur l’expérience du lieu et la qualité des parcours plutôt que sur la surfréquentation.",

  "UN TERRITOIRE PROPICE AU TOURISME DURABLE DANS L’ARC JURASSIEN\nL’Arc jurassien offre un cadre idéal pour un tourisme durable : paysages ouverts et forestiers, reliefs favorables aux activités de plein air, patrimoine bâti et rural, et culture de la randonnée. Bellelay s’inscrit dans cette logique en proposant une destination où l’on vient pour marcher, observer, écouter, apprendre et prendre le temps. Le site peut ainsi devenir un point d’appui pour des séjours sobres, centrés sur la découverte, l’interprétation du territoire et la mise en valeur des ressources locales.",

  "À L’INTERSECTION DES PARCS NATURELS DU DOUBS ET DU CHASSERAL\nBellelay se situe à l’intersection de deux dynamiques fortes : le Parc du Doubs et le Parc Chasseral, qui portent des initiatives en matière de restauration de milieux, de mise en récit des paysages, d’amélioration de l’accessibilité et de la qualité d’accueil. Cette proximité favorise des synergies : itinéraires et offres coordonnées, actions de médiation, signalétique et informations partagées, ainsi qu’un cadre d’exigence en matière de respect des milieux et de gestion des flux. Le site peut s’inscrire comme une porte d’entrée, un lieu-relais et un point d’interprétation du territoire.",

  "LA VIA BERNA : UN AXE DE MARCHE AU LONG COURS\nLa présence de la Via Berna, itinéraire de randonnée de longue distance reconnu, inscrit Bellelay dans un réseau de mobilité douce à l’échelle nationale. Pour les marcheurs, le site peut fonctionner comme étape qualitative : pause, visite, restauration, voire hébergement selon les possibilités, avec une attention à l’accueil des randonneurs (information, eau, abri, services). Cet ancrage renforce une fréquentation étalée, compatible avec une approche durable, et favorise une relation directe et sensible au paysage jurassien.",

  "VÉLO DE ROUTE ET VTT : CONNECTIVITÉS ET PRATIQUES DOUCES\nLe territoire autour de Bellelay est propice au cyclotourisme, que ce soit en vélo de route ou en VTT, grâce à la diversité des reliefs, des routes secondaires et des chemins. Cette proximité d’itinéraires ouvre des perspectives d’accueil ciblé : stationnement vélo, petites réparations, points d’eau, informations d’itinéraires, et articulation avec les transports publics. En favorisant ces pratiques, Bellelay peut contribuer à un tourisme à faible impact, qui valorise le déplacement comme expérience et non comme simple accès.",

  "UN SITE MARÉCAGEUX D’EXCEPTION À PROXIMITÉ IMMÉDIATE\nÀ proximité immédiate se trouve un site marécageux remarquable, d’importance nationale, offrant un milieu rare et fragile. Le parcours didactique dédié aux libellules constitue un outil de sensibilisation exemplaire : il permet de découvrir la biodiversité, de comprendre les équilibres écologiques et de développer une culture du respect des habitats. Bellelay peut renforcer cette lecture en proposant un lien clair entre patrimoine et nature : un tourisme d’observation, d’éducation et de contemplation, attentif aux saisons et à la capacité d’accueil des milieux.",

  "SAVOIR-FAIRE LOCAUX : LA MAISON DE LA TÊTE DE MOINE ET SON MUSÉE\nLa proximité de la Maison de la Tête de Moine et de son musée constitue un atout pour relier tourisme durable et transmission des savoir-faire. Ce lieu valorise des pratiques ancestrales respectueuses, l’histoire d’un produit emblématique et les liens entre territoire, agriculture et culture. En complément, Bellelay peut contribuer à une offre cohérente : parcours thématiques, médiations croisées et expériences qui associent patrimoine, paysage et traditions vivantes.",

  "CONCLUSION\nBellelay réunit des ingrédients rares pour un tourisme durable de qualité : une situation centrale dans l’Arc jurassien, la proximité de dynamiques fortes portées par les Parcs du Doubs et du Chasseral, un ancrage sur des itinéraires de marche et de vélo, et l’accès à des milieux naturels remarquables et à des savoir-faire locaux. En privilégiant la mobilité douce, la médiation et l’attention aux milieux, le site peut proposer une hospitalité sobre, instructive et profondément ancrée dans le territoire."
]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
  "INTRODUCTION\nÀ Bellelay, le volet social est une dimension structurante du projet de site : il ne s’agit pas seulement d’« accueillir » des activités, mais de créer des conditions de cohabitation, d’apprentissage et d’inclusion dans un cadre quotidien partagé. La diversité des usagers, la présence d’espaces communs intérieurs et extérieurs, et l’implantation de fonctions à forte valeur sociétale font du lieu un terrain particulièrement pertinent pour expérimenter des formes de vivre-ensemble, de gouvernance et de solidarité, à l’échelle d’un ensemble patrimonial.",

  "INTÉGRATION : FORMER ET ACCOMPAGNER VERS L’EMPLOI\nBellelay accueille un centre de formation pour migrants, projet pilote en Suisse, qui forme sur place environ une centaine de personnes en vue de leur intégration au marché du travail, notamment comme assistants médico-sociaux. Cette présence ancre le site dans une mission sociale concrète : offrir un cadre stable, des parcours qualifiants et un accompagnement vers l’autonomie. Elle permet aussi de questionner l’architecture et l’organisation du lieu comme supports d’intégration : espaces d’apprentissage, conditions d’accueil, rythmes de vie, et articulation avec la région (stages, réseaux, mobilité).",

  "VIVRE-ENSEMBLE : USAGES MULTIPLES ET ESPACES DE VIE COMMUNS\nLe site, par sa multiplicité d’usagers, génère des dynamiques sociales riches : croisements de temporalités, cohabitation de pratiques, et mise en commun de ressources. Les espaces partagés—salles, circulations, cours, jardins, cafétéria, lieux de travail—ne sont pas seulement des surfaces : ce sont des dispositifs sociaux qui influencent les rencontres, la coopération, mais aussi les frictions. Un enjeu central est d’identifier les conditions d’un vivre-ensemble durable : règles d’usage claires, hospitalité, sécurité, gestion des nuisances, et qualité des espaces communs pour favoriser une cohabitation sereine.",

  "GOUVERNANCE D’UN LIEU DE PARTAGE : MODÈLES, RÔLES ET OUTILS\nBellelay pose une question essentielle : quels modèles de gouvernance pour un lieu à la fois partagé et multi-acteurs ? Au-delà des intentions, la gouvernance se traduit par des outils concrets : modalités de décision, responsabilités d’entretien, réservation et priorisation des espaces, gestion des conflits, communication interne, et principes de répartition des coûts. Ce volet explore des formes de gouvernance capables de tenir dans le temps, d’être comprises par tous, et de soutenir une mutualisation réelle plutôt qu’une simple juxtaposition d’usages.",

  "INTERGÉNÉRATIONNEL ET INTERCULTUREL : UN LABORATOIRE À ÉCHELLE RÉELLE\nAvec ses nombreux usagers et la future implantation d’une école primaire partageant certains espaces communs, Bellelay est voué à devenir un laboratoire intergénérationnel et interculturel. La proximité entre enfants, adultes en formation, visiteurs, résidents et professionnels ouvre des opportunités uniques de liens et d’apprentissages réciproques, à condition d’être soigneusement organisée. L’enjeu est de concevoir des espaces et des temporalités compatibles : zones de rencontre et zones de retrait, parcours sécurisés, usages partagés cadrés, et médiations favorisant le respect, la curiosité et l’attention à l’autre.",

  "CONCLUSION\nLe volet social de Bellelay se construit à partir d’actions déjà concrètes—comme le centre de formation pour migrants—et d’un potentiel fort lié à la diversité des usagers et aux espaces communs. En travaillant finement l’organisation, les règles et la gouvernance du lieu, Bellelay peut devenir une référence en matière d’intégration, de vivre-ensemble et d’expérimentation intergénérationnelle et interculturelle : un site capable de produire du lien social de manière durable, lisible et partagée."
]
        },
        paix: {
          title: "Paix & réparations de guerre",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
"INTRODUCTION\nÀ Bellelay, le volet « paix » peut devenir une thématique structurante, à la fois ancrée localement et connectée aux enjeux contemporains. Dans un contexte mondial marqué par des conflits prolongés, des déplacements forcés et des besoins massifs de reconstruction, la Suisse dispose d’une prédisposition reconnue—neutralité, diplomatie et bons offices—pour accueillir des démarches de dialogue, de formation et de coopération. L’enjeu est de traduire cette vocation en dispositifs concrets : compétences, programmes, partenariats et lieux d’échange, capables de produire des effets utiles au-delà du symbole.",

  "PAIX ET BONS OFFICES : UNE VOCATION À ACTIVER\nLa paix n’est pas seulement une idée, c’est un travail : prévention, médiation, soins, sécurité, reconstruction, et reconstitution du lien social. Dans ce cadre, la tradition suisse de neutralité et de facilitation offre une légitimité particulière pour accueillir des rencontres, des formations et des coopérations. Bellelay, par son calme, sa capacité d’accueil et la diversité de ses espaces, peut devenir un lieu propice à des formats sobres et efficaces : séminaires, retraites de travail, ateliers de médiation, sessions de transmission et programmes inter-institutionnels, en lien avec des acteurs compétents.",

  "MIGRATIONS : DE L’ACCUEIL À LA CAPACITÉ D’AGIR\nLa présence sur place d’un centre de formation pour migrants ouvre une perspective directe : relier intégration et contribution, ici et ailleurs. Au-delà de l’accès au marché de l’emploi en Suisse, le site peut développer—en complément—des compétences utiles à la reconstruction et à la stabilisation lors d’un éventuel retour : médiation et résolution de conflits, santé et accompagnement médico-social, compétences de base en construction et maintenance, organisation communautaire, ou encore logistique. L’objectif est de former des personnes capables d’agir dans des contextes fragiles, en valorisant des savoirs transférables et une éthique du soin et de la coopération.",

  "UN ÉCOSYSTÈME DE FONDATIONS ET D’EXPERTISES À PROXIMITÉ\nLe développement de ce volet peut s’appuyer sur un écosystème national et régional de fondations et d’organisations compétentes. Tout près, la Fondation Digger à Tavannes est active dans la production de robots de déminage, apportant une expertise concrète sur un enjeu majeur de sécurisation post-conflit. La Fondation Gobat à Tramelan contribue, quant à elle, à la recherche et aux échanges de connaissances dans ces domaines. Bellelay peut jouer un rôle de plateforme : accueillir des formations, des démonstrations, des rencontres, des programmes de sensibilisation, et favoriser la mise en réseau entre acteurs, publics et territoires.",

  "COMPÉTENCES TECHNIQUES DE L’ARC JURASSIEN : DE LA PRÉCISION À L’UTILITÉ\nL’Arc jurassien dispose de compétences reconnues en mécanique et micro-techniques, ainsi que de savoir-faire dans le domaine de la construction et des métiers associés. Ces compétences peuvent contribuer à des objectifs liés à la paix : technologies utiles à la sécurité (par exemple, solutions de déminage), outillage robuste et réparable, dispositifs de mesure, et capacités de production locales adaptées à des besoins concrets. La question centrale est de relier l’excellence technique à l’utilité publique, en privilégiant des solutions responsables, accessibles et orientées terrain.",

  "DE LA THÉMATIQUE À UN PROGRAMME : FORMATIONS, RECHERCHE ET ÉTHIQUE\nPour éviter un volet « paix » purement déclaratif, il s’agit de construire un programme clair : champs d’action, partenaires, formats, publics, résultats attendus. Cela peut prendre la forme d’un cycle régulier de formations (médiation, santé, construction, maintenance), de résidences ou laboratoires de projet, et d’événements sobres de partage de connaissances. Un cadre éthique est essentiel : respect des personnes concernées, prudence sur les narratifs, sécurité, et articulation avec des acteurs légitimes. Bellelay peut ainsi devenir un lieu d’apprentissage, de coordination et de fabrication de solutions, à la mesure des enjeux et des responsabilités.",

  "CONCLUSION\nBellelay réunit des conditions fortes pour développer un volet « paix » crédible : une vocation suisse reconnue pour la facilitation et les bons offices, une réalité sociale déjà présente via la formation de migrants, un réseau de fondations expertes à proximité (dont Digger à Tavannes et Gobat à Tramelan) et des compétences techniques d’excellence dans l’Arc jurassien. En articulant formation, recherche appliquée et coopération, le site peut contribuer de manière concrète à des enjeux de prévention, de reconstruction et de transmission, tout en restant fidèle à l’esprit du lieu : sobriété, accueil et utilité."
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
      hero: { title: "Ein Ort für Bildung und Kultur", subtitle: "zum Lernen, Gestalten und Teilen" },
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
      heading: "Ihre möglichen Aufenthaltsformate",
   },  
   programs: {
      immersive: {
        title: "Immersive Wochen vor Ort",
        text: "Der Zugang zu zahlreichen Gebäuden und Außenbereichen bietet eine Vielzahl von Untersuchungs- und Studienobjekten.",
        text2: "Zahlreiche Möglichkeiten zur praktischen Vertiefung durch die Untersuchung von standortbezogenen Merkmalen oder Elementen der näheren Umgebung, mit öffentlichen Präsentationen der Ergebnisse am Ende des Aufenthalts.",
      },
      summer: {
        title: "Sommerkurse",
        text: "Dienstleistungen und Orte von Interesse, die sich besonders für intensive Ausbildungsformate von ein bis drei Wochen eignen.",
        text2: "Über die Arbeitsräume und die Vollpension hinaus bietet die natürliche Umgebung sowie die nahegelegenen Orte von Interesse vielfältige und attraktive Möglichkeiten für begleitende Aktivitäten.",
      },
      ateliers: {
        title: "Workshops und Projekte",
        text: "PArbeitsräume, die sich für partizipative Projekte und praxisorientierte Workshops eignen.",
        text2: "Räume, die eher Werkstätten als klassischen Unterrichtsräumen entsprechen und sich für experimentelle Tätigkeiten oder handwerkliche bzw. künstlerische Produktionen eignen.",
      },
      seminars: {
        title: "Seminare und Tagungen",
        text: "Räumlichkeiten für Konferenzen, Seminare, Kongresse oder Preisverleihungen.",
        text2: "Die großzügigen Außenbereiche, Verkehrsflächen und Säle ermöglichen es, mehrere hundert Personen komfortabel aufzunehmen.",
      },
      residences: {
        title: "Künstlerische oder Wissenschaftliche Residenzen",
        text: "Langzeitunterkunft in ruhiger und einzigartiger Umgebung, die kreative Entwicklung fördert.",
        text2: "Möglichkeiten zur Ausstellung von Arbeiten am Ende des Aufenthalts.",
      },
      expositions: {
        title: "Ausstellungen und Konzerte",
        text: "Öffentliche Veranstaltungen und kulturelle Abende, sowohl drinnen als auch draußen.",
        text2: "Vernissagen, Konzerte, Ausstellungen, Treffen und öffentliche Vermittlungen das ganze Jahr über. Auf der Website der <a href='https://www.abbatialebellelay.ch/' target='_blank'>Fondation de l'Abbatiale de Bellelay</a> wird ein vielfältiges Kulturprogramm in der Abbatiale vorgestellt.",
      },
    },
       
      /*patrimoine de*/

patrimoine: {
  title: "Geschichte von Bellelay in Kürze",
  subtitle: "Eine Zeitleiste der Erinnerung",
  heading: "Chronologie"
},

pat: {
  p1: {
    years: "Seit 2022",
    title: "Umnutzung",
    brief: "Standort in Entwicklung, mit Fokus auf Bildungs-, Kultur- und Kunstprojekte sowie zirkuläre Innovation."
  },
  p2: {
    years: "1890–2022",
    title: "Psychiatrische Klinik",
    brief: "Erwerb des Areals durch den Kanton Bern und Betrieb einer psychiatrischen Klinik."
  },
  p3: {
    years: "1797–1890",
    title: "Säkularisierung und vielfältige Nutzungen",
    brief: "Entsakralisierung durch die Besetzung französischer Truppen während der Revolution. Danach Uhrenfabrik, Brauerei, Glashütte und weitere Nutzungen."
  },
  p4: {
    years: "1714–1797",
    title: "Monastische Blütezeit",
    brief: "Barocker Wiederaufbau der Abteikirche und Ausbildungsinternat für europäische Adelige."
  },
  p5: {
    years: "1136–1714",
    title: "Gründung und mittelalterliche Zeit",
    brief: "Kloster mit Fokus auf Einkehr, Aufnahme von Pilgern und zirkuläre Aktivitäten."
  }
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
         text2: "Für 10 bis 150 Personen: mit mehreren Tagungsräumen, zahlreichen Klassenzimmern, Werkstätten und informellen Innen- und Außenbereichen sind Gruppen jeglicher Art willkommen.<br><br> Audiovisuelle Ausrüstung ist vor Ort verfügbar, und das Mobiliar kann nach Ihren Bedürfnissen angepasst werden.<br><br>Über die Einrichtung hinaus steht Ihnen während Ihres gesamten Aufenthalts jederzeit technischer Support zur Verfügung, um auf Ihre Bedürfnisse einzugehen."
       },
       alentours: {
         title: "Umgebung",
         text: "Landschaft, Wanderungen und kulturelles Erbe in der Umgebung.",
         text2: "Empfohlene Routen zu Fuss oder mit dem Fahrrad, historische Sehenswürdigkeiten und Vorschläge für Tagesausflüge.<br><br>Möglichkeiten für <a href='https://www.j3l.ch/de/P32737/erlebnisse/kultur-museen/fuehrung/fuehrung-der-abteikirche' target='_blank'>individuelle oder geführte Besichtigungen der Abbatiale</a> oder <a href='https://maisondelatetedemoine.ch/de/museum' target='_blank'>des Maison de la Tête de Moine</a>.<br><br>Das Team von <a href='https://www.j3l.ch/de/Z10490/grand-chasseral-tourismus?regionFilters[]=3e' target='_blank'>Grand Chasseral Tourisme</a> steht Ihnen gerne beratend zur Verfügung."
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
"EINLEITUNG\nBellelay ist ein seltenes architektonisches Untersuchungsfeld: ein weitläufiges, historisch geschichtetes Bauensemble von hohem denkmalpflegerischem Wert (Kulturgut von nationaler Bedeutung). Das Nebeneinander von Gebäuden und Bauteilen aus unterschiedlichen Epochen, verbunden mit heutigen Anforderungen an Nutzung und Betrieb, macht den Ort zu einem Referenzfall, um ein Ensemble zu analysieren, zu dokumentieren und weiterzuentwickeln, ohne seine Kohärenz oder seinem Wert zu beeinträchtigen.",

  "DENKMALWERT UND SCHUTZSTATUS: INTERVENTIONSLEITBILD\nSchutzbestimmungen und Denkmalwert erfordern eine klare Methodik: Diagnose, Materialverträglichkeit, Reversibilität und Lesbarkeit der Eingriffe. Ziel sind präzise, zurückhaltende und begründete zeitgenössische Transformationen, die aktuelle Anforderungen (Sicherheit, Barrierefreiheit, Komfort) integrieren, ohne das Bestehende zu trivialisieren.",

  "BAUTECHNISCHE DIAGNOSE: MATERIALITÄTEN UND SCHADENSBILDER\nBellelay ermöglicht eine differenzierte Analyse der Konstruktionen (Mauerwerk, Tragwerke und Dachstühle, Gebäudehülle, Fenster und Türen) sowie ihrer Vulnerabilitäten: Feuchtigkeit, Energiekennwerte, Alterung, Eingriffe und Reparaturen, kritische Detailpunkte. Entscheidend ist, die Befundaufnahme mit robusten, reparierbaren und dauerhaften Projektentscheidungen zu verknüpfen.",

  "GRÖSSE UND KOMPLEXITÄT: PROGRAMMIERUNG UND ETAPPIERUNG\nDie Vielzahl der Gebäude und Raumsequenzen verlangt eine Programmierung nach Funktionsbausteinen und zeitlichen Etappen. Im Fokus stehen Nutzungskompatibilitäten, Wege- und Betriebsabläufe, Logistik sowie eine realistische Etappierung, um eine schrittweise Entwicklung des Areals ohne Unterbruch des Betriebs zu ermöglichen.",

  "GEMEINSCHAFTSRÄUME: GEMEINSAME NUTZUNG UND GOVERNANCE\nBellelay stellt eine zentrale Betriebsfrage: Gemeinschaftsflächen für eine Vielzahl von Nutzerinnen und Nutzern zu organisieren und Nutzungsregeln räumlich zu übersetzen. Öffentlich/privat-Gradienten, Pufferzonen, Empfang, Lagerung, Zirkulation und Sicherheit müssen eine effiziente und langfristig tragfähige gemeinsame Nutzung unterstützen.",

  "RAUMPLANUNG UND ÖRTLICHE REALITÄTEN\nNeben der Bodennutzung (Zone für öffentliche Zwecke), ist das Projekt in konkrete räumliche Rahmenbedingungen eingebettet: Erschliessung, Anlieferung, Parkierung, Infrastrukturnetze, Topografie, Landschaft und Nachbarschaft. Diese Achse untersucht die Schnittstelle zwischen Bauensemble und Territorium, um kohärente, zurückhaltende und kontextgerechte Lösungen zu entwickeln.",

  "ZIRKULARITÄT UND ÖKOSYSTEM DES AREALS\nDer Ort bietet einen geeigneten Rahmen für eine globale zirkuläre Herangehensweise: Wiederverwendung, selektiver Rückbau, Instandhaltung und lokale Materialkreisläufe, sowie alle wirtschaftlichen Wechselwirkungen im lokalen Umfeld. Aussenräume können zu einem ganzheitlichen Ökosystem beitragen — Freizeit, Produktion, ökologische Bewirtschaftung — im Einklang mit den Nutzungen und der Governance des Ortes.",

  "ZEITGENÖSSISCHE NUTZUNGEN UND INTEGRATION DER SYSTEME\nResidenzen, Arbeit, Veranstaltungen und Empfang erfordern Komfort und Normenkonformität (Akustik, Energie, Thermik, Luftqualität, Barrierefreiheit, Brandschutz). In einem denkmalgeschützten Kontext müssen diese Systeme mit Feingefühl integriert werden: minimale Eingriffe, reversible Lösungen und Respekt vor der architektonischen Lesbarkeit.",

  "SCHLUSSFOLGERUNG\nAn Bellelay zu arbeiten bedeutet, Architektur als  Brücke zwischen Vergangenheit und Zukunft zu verstehen: ein komplexes Ensemble lesen, das Wertvolle schützen und seine Transformation für vielfältige und dauerhafte Nutzungen organisieren. Ziel ist es, zurückhaltende, reversible und betriebstaugliche Interventionsszenarien zu entwickeln, die die Kohärenz des Ortes stärken und zugleich neue Möglichkeiten der Nutzung, gemeinsamen Bewirtschaftung und Erprobung eröffnen."
          ]
        },
        amenagement: {
          title: "Raumplanung",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
  "EINLEITUNG\nIn Bellelay ist die Raumplanung ein entscheidender Hebel, um zeitgemässe Nutzungen zu ermöglichen und gleichzeitig eine langfristig kontrollierte Entwicklung des Areals sicherzustellen. Die Besonderheit des Ortes—denkmalgeschützt, grossräumig und potenziell mit Mehrfachnutzungen—erfordert eine präzise Abstimmung zwischen kommunalen Regelwerken, regionalen und kantonalen Zielsetzungen sowie den betrieblichen Realitäten (Mobilität, Erschliessung, Etappierung, Wirkungen auf das Umfeld). Ziel ist ein Planungsrahmen, der die Transformation des Standortes nachvollziehbar, rechtssicher und politisch tragfähig begleitet.",

  "RÄUMLICHE DIAGNOSE UND EINBETTUNG IN DEN KONTEXT\nErster Schritt ist die sachliche Klärung der Ausgangslage: geltende Nutzungszuweisungen, Baurechte, Perimeter und Restriktionen (Denkmalschutz, Umwelt, Landschaft), Kapazitäten der Netze, Bedingungen für Zugang und Sicherheit sowie Nachbarschaftsthemen. Diese Diagnose bildet die Grundlage der Strategie: was kurzfristig aktivierbar ist, was Verfahren erfordert und was für spätere Etappen vorzusehen ist. Ziel ist eine operative Lesart von Restriktionen und Handlungsspielräumen.",

  "ANPASSUNG KOMMUNALER VORSCHRIFTEN FÜR TRANSITORISCHE NUTZUNGEN\nTransitorische Nutzungen (Ateliers, Residenzen, Veranstaltungen, temporäre Belegung) werden häufig durch Regelwerke gebremst, die auf stabilisierte Situationen ausgerichtet sind. Diese Achse entwickelt—in Abstimmung mit der Gemeinde—Mechanismen eines kontrollierten Spielraums: befristete Bewilligungen, zeitlich limitierte Nutzungen, risikoproportionale Anforderungen und Kriterien der Reversibilität. Es geht nicht um Umgehung, sondern um ermöglichtes, gesteuertes Experimentieren, um Programme zu testen, reale Bedarfe zu präzisieren und die langfristige Planung zu speisen.",

  "LOKALISIERTES RICHTPROJEKT / MASTERPLAN: VISION, ETAPPIERUNG UND KOHÄRENZ\nDie Transformation von Bellelay benötigt einen klar lesbaren strategischen Rahmen, der Vision, Governance und Zeithorizonte ausrichtet. Ein lokalisiertes Richtprojekt (Masterplan) klärt die Leitlinien: Standortvokation, Intensitäten und Nutzungskompatibilitäten, Prinzipien der Erhaltung, Organisation der Gemeinschaftsflächen, Umgang mit Aussenräumen sowie die Einbindung in die Infrastruktur. Das Dokument muss eine realistische Etappierung enthalten (was rasch möglich ist vs. was lange Vorläufe hat) und als gemeinsame Referenz für Behörden, Betreiber und Nutzende dienen.",

  "QUARTIERPLAN / DETAILPLAN IM EINKLANG MIT DER ZUKÜNFTIGEN ENTWICKLUNG\nÜber die Vision hinaus ist ein Quartierplan (oder ein gleichwertiges Instrument) erforderlich, um die Entwicklung rechtlich zu sichern: Regeln zur Setzung und Nutzung, Interventionsperimeter, Bedingungen für Umbau und Umnutzung, Erschliessung, Parkierung, mögliche Nutzungen sowie Qualitätsanforderungen (Landschaft, gemeinschaftliche Räume, denkmalpflegerische Einbindung). Ziel ist eine Regelbasis, die der Realität des Areals entspricht: Anpassungen und Nutzungsänderungen ermöglichen und zugleich Leitplanken für Gesamtqualität und Mehrakteursfähigkeit setzen.",

  "REGIONALE UND KANTONALE POLITISCHE THEMEN BEI UMNUTZUNGEN\nUmnutzungen in dieser Grössenordnung sind nicht nur lokale Entscheidungen: Sie berühren regionale und kantonale Zielsetzungen zu Raumentwicklung, Landschaftsschutz, Denkmalpflege, Wirtschaft und sozialem Zusammenhalt. Diese Achse adressiert die politisch-institutionelle Dimension: ein gemeinsames Narrativ, Stakeholder-Mapping, Antizipation von Verfahren und Abwägungen sowie die Ausrichtung an übergeordneten Strategien (kantonale Konzepte, sektorale Politiken). Ziel ist ein Projekt, das öffentlich nachvollziehbar und in den übergeordneten Rahmen plausibel integrierbar ist.",

  "ABSTIMMUNG MIT DER REGIONALEN MOBILITÄTSPLANUNG\nMobilität ist ein Schlüsselfaktor für die Tragfähigkeit des Standortes: Sie beeinflusst Erreichbarkeit, Akzeptanz und Umweltwirkungen. Diese Achse zielt auf eine enge Koordination mit der regionalen Planung: Stärkung des öffentlichen Verkehrs (Takt, Haltestellen, Anschlüsse), Hierarchisierung der Zufahrten sowie eine phasen- und spitzenorientierte Parkierungssteuerung. Ziel ist, die Abhängigkeit vom Individualverkehr zu reduzieren und gleichzeitig eine inklusive und realistische Erreichbarkeit zu gewährleisten.",

  "LANGSAME MOBILITÄT: KONTINUITÄTEN, SICHERHEIT UND QUALITÄT DER WEGE\nErgänzend zum ÖV ist die Vernetzung der aktiven Mobilität ein eigenständiges Projektthema: sichere Fuss- und Veloverbindungen, klare Routenführung, Querungssicherheit, Veloabstellanlagen sowie die Abstimmung mit technischen Zufahrten. Ebenso geht es um Nutzungsqualität: Ankunfts- und Wegsequenzen sollen als Teil der Ortserfahrung funktionieren und zugleich im Alltag robust und betriebssicher sein.",

  "UMSETZUNG: GOVERNANCE, INSTRUMENTE UND LANGFRISTIGES MONITORING\nWirksame Planung braucht klare Instrumente und Zuständigkeiten: Verfahrensfahrplan, Rollenverteilung (Eigentümer, Betreiber, Gemeinde, Kanton, Partner), Partizipationsformate und Monitoring (Mobilität, Immissionen, Nutzungen, Wirkungen). Ziel ist ein lebendiger Planungsprozess, der Rückmeldungen integriert, Regeln bei Bedarf nachschärft und die Entwicklung steuert, ohne die Gesamtlogik des Areals zu verlieren.",

  "SCHLUSSFOLGERUNG\nDie Raumplanung für Bellelay muss Experiment und Absicherung verbinden: transitorische Nutzungen ermöglichen, um das Areal zu aktivieren und zu testen, und zugleich einen langfristigen Rahmen über ein lokalisiertes Richtprojekt und einen Quartierplan schaffen, der die künftige Entwicklung trägt. Der Erfolg hängt von politischer und institutioneller Verankerung sowie der Abstimmung mit der regionalen Mobilitätsplanung ab—insbesondere mit dem öffentlichen Verkehr und der aktiven Mobilität. Ziel ist eine glaubwürdige, schrittweise und breit getragene Transformationsstrategie, die den denkmalpflegerischen, räumlichen und gesellschaftlichen Anforderungen des Ortes entspricht."
]
        },
        histoire: {
          title: "Geschichte",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
"EINLEITUNG\nBellelay historisch zu betrachten bedeutet, den Ort als lebendiges Dokument zu verstehen: ein gebautes und landschaftliches Ensemble, dessen Formen, Nutzungen und Erzählungen sich in Schichten herausgebildet haben. Die historische Untersuchung zielt weniger auf die Anhäufung von Gelehrsamkeit als auf das Verständnis von Kontinuitäten, Brüchen und Umnutzungen, die den Ort geprägt haben. Sie hilft, heutige Entscheidungen—Erhaltung, Transformation, Programmierung—in den Zeitlichkeiten zu verorten, aus denen der Ort hervorgegangen ist.",

  "DER ORT ALS ARCHIV: MATERIELLE SPUREN UND ERZÄHLUNGEN\nBellelay eignet sich für eine kombinierte Lektüre von Quellen und baulichen Indizien: Anordnung der Gebäude, Umbauten, konstruktive Überformungen, Nutzungsspuren in Räumen sowie die Beziehungen zum Territorium. Ziel ist es, das, was Dokumente erzählen (Texte, Pläne, Archive), mit dem, was das Bauwerk selbst offenlegt, zusammenzuführen, um die grossen Formationsphasen des Ortes und die Logiken seiner Entwicklung zu identifizieren.",

  "PRÄGENDE ZEITABSCHNITTE UND WENDEPUNKTE\nDie historische Analyse richtet sich auf die prägenden Epochen, die Bellelay durchlaufen hat, und insbesondere auf die Übergänge: Nutzungswechsel, institutionelle Veränderungen, neue Praktiken, Ereignisse und Entscheidungen, die Räume und Bedeutungen transformieren. Statt eine vollständige Chronologie aufzuzählen, geht es darum, „Schlüsselmomente“ herauszuarbeiten, die erklären, warum bestimmte Formen, Wegeführungen oder Gebäude heute so sind, wie sie sind.",

  "NUTZUNGEN, GEMEINSCHAFTEN UND ÖKONOMIEN DES ORTES\nDie Geschichte des Areals lässt sich auch über seine Nutzungen und die Gemeinschaften lesen, die es belebt haben: Formen des Wohnens und Arbeitens, Alltagsorganisation, Empfang, Produktion sowie der Umgang mit Land und Ressourcen. Diese Achse verbindet räumliche Entwicklungen mit sozialen und wirtschaftlichen Praktiken, um zu verstehen, wie Architektur auf wechselnde Funktionen reagiert—und wie sie umgekehrt Nutzungen und Verhaltensweisen prägt.",

  "GESCHICHTE UND PROJEKT: METHODE FÜR EINE INFORMIERTE TRANSFORMATION\nGeschichte ist nicht Kulisse, sondern ein Projektinstrument. Indem Werte, Konstanten und frühere Transformationen sichtbar werden, unterstützt sie Entscheidungen darüber, was zu bewahren, freizulegen, zu interpretieren oder anzupassen ist. Diese Achse steht für einen pragmatischen Ansatz: dokumentieren, Prioritäten setzen, Entscheidungen begründen und zeitgenössische Eingriffe entwickeln, die lesbar bleiben und die Erzählungen des Ortes respektieren.",

  "ORIENTIERUNG UND RESSOURCEN: BEZUG AUF DIE ZEITLEISTE\nUm Bellelay innerhalb seiner wichtigsten historischen Etappen zu verorten, wird empfohlen, die Zeitleiste auf dieser Website in der Seite „Kulturerbe“ (Patrimoine) zu konsultieren. Sie bietet kompakte Bezugspunkte zu den zentralen Perioden und erleichtert die Verbindung zwischen historischer Lektüre, Ortsbegehung und Verständnis der Transformationen.",

  "SCHLUSSFOLGERUNG\nDie Geschichte von Bellelay zu studieren bedeutet, die Voraussetzungen zu schaffen, um den Ort in seiner Tiefe zu verstehen, ohne seine Entwicklung zu erstarren. Indem Phasen, Übergänge und Nutzungen beleuchtet werden, trägt der historische Ansatz zu einer angemessenen Transformation bei: Er respektiert das Gedächtnis des Ortes und unterstützt zugleich zeitgenössische Funktionen. Die Zeitleiste auf der Seite „Kulturerbe“ ist ein zentraler Einstieg, um diese Lektüre zu strukturieren und Vertiefungen zu orientieren."
]
        },
        culture_art: {
          title: "Kultur & Kunst",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
"EINLEITUNG\nIn Bellelay sind Kultur und Kunst keine Ergänzung zum Ort – sie ergeben sich aus ihm selbst, denn Architektur, Akustik, Licht und Landschaft bilden bereits eine Bühne. Der Standort bietet einen seltenen Rahmen, in dem kulturelle Vermittlung, künstlerische Praxis und Produktion zusammenfinden können: monumentale wie intime Räume, stark differenzierte Atmosphären und eine Ruhe, die konzentriertes Arbeiten begünstigt. Entscheidend ist, diese Qualitäten zu stärken, ohne sie zu übernutzen – durch eine sensible, kohärente und ortsgerechte Programmierung.",

  "EINE BEREITS AKTIVE KULTURELLE DYNAMIK\nBellelay beherbergt bereits kulturelle und künstlerische Aktivitäten, insbesondere durch die Fondation de l’Abbatiale de Bellelay, die Konzerte und Kunstausstellungen organisiert. Diese bestehende Verankerung ist eine solide Basis: Sie baut auf erprobten Erfahrungen, einem Publikum und einem feinen Verständnis der Rahmenbedingungen für den Betrieb auf. Ziel ist es, diese Dynamik zu stärken, zu diversifizieren und Vermittlung (Veranstaltungen, Ausstellungen) besser mit Kreation (Residenzen, Produktion) zu verzahnen.",

  "KLANGPRODUKTION UND AKUSTISCHE ERFAHRUNG\nDer Ort eignet sich in besonderer Weise für klangbezogene Praxis. Die Abteikirche, mit ihrem aussergewöhnlichen Echo und Resonanzraum, bietet einen einzigartigen Kontext für Musik, akustische Experimente, Stimme, Ensembles und räumliche Klanggestaltung. Über Konzerte hinaus eröffnet dies Möglichkeiten für Forschung und Produktion: Aufnahmen, ortsspezifische Kompositionen, immersive Set-ups, Dialoge zwischen Architektur und Klang sowie hybride Formate zwischen Performance, Installation und Vermittlung.",

  "EINZIGARTIGE RÄUME FÜR AUSSTELLUNGEN UND INSTALLATIONEN\nBellelay bietet seltene Ausstellungsorte, die sehr unterschiedliche Werke und Formate in einem aussergewöhnlichen Rahmen aufnehmen können. Beeindruckende Dachräume, eine einzigartige Krypta und grossartige Gärten schaffen vielfältige Atmosphären—Höhen, Halbdunkel, Ausblicke, Texturen—und laden zu ortsspezifischen Ausstellungen, Installationen, kuratierten Parcours und sensiblen Interventionen ein. Im Zentrum steht die Passung zwischen Werk und Ort, nicht eine neutrale White-Cube-Logik.",

  "RUHE, GROSSZÜGIGE RÄUME UND BEDINGUNGEN FÜR KREATION\nDie Ruhe des Ortes, die grosszügigen Räume und die Qualität der Landschaft schaffen wertvolle Bedingungen für Inspiration und künstlerische Arbeit. Bellelay ermöglicht lange Zeitlichkeiten: Recherche, Skizzen, Proben, Prototyping, Schreiben und Montage. Im Fokus steht eine Arbeits-Hospitalität: Rhythmen, die zum Ort passen, respektvolle Koexistenz der Nutzungen sowie Bedingungen, die Konzentration und Austausch gleichermassen fördern.",

  "PROGRAMMIERUNG: KOHÄRENZ, QUALITÄT UND RESPEKT VOR DEM ORT\nKultur und Kunst in Bellelay weiterzuentwickeln erfordert eine Programmierung als Balance: kontrollierte Intensitäten, passende Formate, Steuerung von Flüssen und Auswirkungen sowie Aufmerksamkeit für den Erhalt des Ortes. Ziel ist ein anspruchsvolles, offenes und verankertes kulturelles Angebot, das Veranstaltungen, Ausstellungen und Residenzen verbindet und zugleich bewahrt, was Bellelay auszeichnet: Atmosphären, Stille und die Qualität der Erfahrung.",

  "SCHLUSSFOLGERUNG\nBellelay vereint selten zusammenkommende Voraussetzungen: ein bereits aktives Kulturleben, eine bemerkenswerte Akustik, einzigartige Räume für Ausstellungen und Installationen sowie eine Ruhe, die Kreation begünstigt. Durch die Verbindung von Vermittlung und Produktion und eine Programmierung, die Architektur und Landschaft respektiert, kann der Ort zu einem Referenzrahmen für kulturelle und künstlerische Projekte werden—ambitioniert, sensibel und nachhaltig im Ort verankert."
]
        },
        circularity: {
          title: "Zirkularität",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
  "EINLEITUNG\nIn Bellelay ist Zirkularität kein aufgesetztes Konzept: Sie entspricht einer standortbezogenen Logik, die aus der klösterlichen Betriebsweise hervorgeht und heute durch konkrete Praktiken wieder aktiviert wird. Die Anlage des Ortes—Gebäude, Aussenräume, Ressourcen, Handwerk, Verarbeitungsräume—ermöglicht kurze und gut nachvollziehbare Kreisläufe, in denen Produktion, Nutzung, Unterhalt und Wiederverwendung innerhalb desselben Ensembles organisiert werden. Ziel ist, Bellelay als operatives, anschauliches und dauerhaftes Ökosystem zu entwickeln – mit Fokus auf Regionalität, Suffizienz und Weitergabe von Wissen.",

  "ERNÄHRUNGS-ZIRKULARITÄT: VON DER PRODUKTION BIS ZUM KONSUM\nDer Ort verfügt über aussergewöhnliche Voraussetzungen, um eine vollständige Ernährungskreislauf-Logik zu stärken. Die Terrassen aus der monastischen Epoche bilden eine seltene landschaftliche und produktive Grundlage; bereits heute werden dort Gemüse und Getreide angebaut, ebenso Früchte an alten Spalierbäumen. Diese lokale Produktion kann ausgebaut und diversifiziert werden und mit Alltag, Bildung und Gastlichkeit verknüpft werden. Entscheidend ist zudem, dass Bellelay über Infrastruktur für Verarbeitung und Konsum vor Ort verfügt: grosse Küchen, die Ernten verarbeiten können, und eine Cafeteria mit monumentaler Gewölbedecke, die eine kurze Kette von der Erde bis auf den Teller in einem aussergewöhnlichen architektonischen Rahmen ermöglicht.",

  "HANDWERKLICHE ZIRKULARITÄT: KNOW-HOW, REPARATUR UND INSTANDHALTUNG\nBellelay trägt eine Tradition integrierter Gewerke: Historisch waren in jeder Epoche Handwerksbetriebe präsent, um die Bedürfnisse des Ortes zu decken – insbesondere im Bauwesen. Diese Logik setzt sich heute fort: Ein Schreiner hat die Räume einer ehemaligen Schreinerei übernommen und arbeitet Holz nach alten, nachhaltigen Methoden—Materialwahl, Handwerklichkeit, Zeitlichkeit und sorgfältige Ausführung. Er schlägt seine Stämme in den umliegenden Wäldern, sägt sie von Hand auf und setzt bevorzugt natürliche Leime ein. Damit verankert sich die Produktion in einer lokalen Ökonomie und in einer bewussten Kontrolle der Auswirkungen. Parallel dazu befindet sich eine Wäscherei vor Ort, die die Bedürfnisse der Nutzenden abdeckt und eine interne Dienstleistungs-, Unterhalts- und Logistikstruktur stärkt – zentral für die Dauerhaftigkeit eines Mehrnutzungsstandorts.",

  "ZIRKULARITÄT AUF STANDORTEBENE: KURZE KREISLÄUFE, LOGISTIK UND NUTZUNGSQUALITÄT\nZirkularität in Bellelay entscheidet sich in der Organisation: Kreisläufe sichtbar, effizient und alltagstauglich zu machen. Das erfordert die Planung von Flüssen (Ernte, Lagerung, Verarbeitung, Ausgabe, organische Reststoffe), von Räumen (Werkstätten, Depots, Sortierbereiche, Reparaturorte) und von Nutzungsregeln (Gemeinschaftsnutzung, Verantwortlichkeiten, Pflege). Ziel ist, eine rein „symbolische“ Zirkularität zu vermeiden und eine praktikable zu schaffen: einfach im Betrieb, messbar und robust genug, um mit unterschiedlichen Nutzenden und Rhythmen zu funktionieren.",

  "SCHLUSSFOLGERUNG\nBellelay vereint seltene Voraussetzungen, um eine vollständige und glaubwürdige Zirkularität zu verkörpern: eine bereits aktive landwirtschaftliche Produktionsbasis, Infrastruktur für Verarbeitung und Konsum vor Ort sowie eine konkrete handwerkliche Kontinuität im Dienst des Standortes und seiner Nutzenden. Durch die Stärkung dieser Dynamiken—ohne Suffizienz und regionale Verankerung zu verlieren—kann Bellelay zu einem Beispiel gelebter Zirkularität werden: ein Modell, in dem Ernährung, Gewerke, Unterhalt und Alltag in kurzen, dauerhaften und weitergebbaren Kreisläufen zusammenwirken."
]
        },
        tourisme: {
          title: "Nachhaltiger Tourismus",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
"EINLEITUNG\nIn Bellelay stützt sich nachhaltiger Tourismus auf eine besonders günstige geografische und landschaftliche Lage im Herzen des Jurabogens. Der Ort ermöglicht es, kulturelle Entdeckung, Naturerlebnis, sanfte Mobilität und Sensibilisierung zu verbinden – in einem Gebiet, das bereits ressourcenschonende Praktiken fördert: langsame Rhythmen, Saisonalität, Aufmerksamkeit für Lebensräume und die Verankerung in lokalem Wissen. Ziel ist eine gastfreundliche, wirkungsarme Form des Besuchs, die auf Qualität der Erfahrung und der Wege setzt – nicht auf Überfrequenz.",

  "EIN GEBIET IM JURABOGEN, DAS SICH FÜR NACHHALTIGEN TOURISMUS EIGNET\nDer Jurabogen bietet ideale Voraussetzungen für nachhaltigen Tourismus: offene und bewaldete Landschaften, Reliefs, die Outdoor-Aktivitäten begünstigen, ein reiches Bau- und Kulturerbe sowie eine ausgeprägte Wanderkultur. Bellelay fügt sich darin als Ziel ein, das man besucht, um zu gehen, zu beobachten, zuzuhören, zu lernen und sich Zeit zu nehmen. Der Standort kann so zu einem Ankerpunkt für suffiziente Aufenthalte werden, die Entdeckung, Landschaftsinterpretation und die Wertschätzung lokaler Ressourcen verbinden.",

  "AN DER SCHNITTSTELLE DER NATURPÄRKE DOUBS UND CHASSERAL\nBellelay liegt an der Schnittstelle zweier starker Dynamiken: des Parc du Doubs und des Parc Chasseral, die zahlreiche Initiativen zur Renaturierung von Lebensräumen, zur Vermittlung von Landschaften sowie zur Verbesserung von Zugänglichkeit und Gastqualität tragen. Diese Nähe begünstigt Synergien: abgestimmte Routen und Angebote, Vermittlungsformate, gemeinsame Signaletik und Informationen sowie ein hoher Anspruch an Lebensraumschutz und Besuchslenkung. Der Standort kann als Eingang, Relais und Interpretationspunkt für das Gebiet wirken.",

  "DIE VIA BERNA: EIN ANERKANNTER WEITWANDERWEG\nDie Via Berna, ein anerkannter Weitwanderweg, verankert Bellelay in einem Netzwerk sanfter Mobilität auf nationaler Ebene. Für Wandernde kann der Ort eine qualitative Etappe sein: Pause, Besuch, Verpflegung und – je nach Möglichkeiten – Übernachtung, mit einer wanderfreundlichen Infrastruktur (Information, Wasser, Unterstand, Services). Diese Einbindung fördert eine zeitlich gestreute, nachhaltige Frequentierung und unterstützt eine direkte, sensible Beziehung zur Jurawelt.",

  "RENNRAD UND MTB: ANBINDUNG UND SANFTE PRAXIS\nDie Umgebung von Bellelay eignet sich hervorragend für Velotourismus – sowohl mit dem Rennrad als auch mit dem Mountainbike – dank der Vielfalt an Reliefs, Nebenstrassen und Wegen. Die Nähe zu Routen eröffnet gezielte Empfangsangebote: Veloparkierung, kleine Reparaturen, Wasserpunkte, Routeninformationen und die Verbindung mit dem öffentlichen Verkehr. So kann Bellelay einen wirkungsarmen Tourismus fördern, bei dem die Fortbewegung selbst Teil der Erfahrung ist.",

  "EIN AUSSERGEWÖHNLICHES MOORGEBIET IN UNMITTELBARER NÄHE\nIn unmittelbarer Nähe befindet sich ein bemerkenswertes Moorgebiet von nationaler Bedeutung – ein seltener und sensibler Lebensraum. Der didaktische Rundweg zu den Libellen ist ein vorbildliches Sensibilisierungsangebot: Er vermittelt Biodiversität, erklärt ökologische Gleichgewichte und fördert eine Kultur des Respekts gegenüber Lebensräumen. Bellelay kann diese Perspektive stärken, indem es den Zusammenhang zwischen Kulturerbe und Natur lesbar macht: ein Tourismus des Beobachtens, Lernens und der Kontemplation – orientiert an Jahreszeiten und Tragfähigkeit der Milieus.",

  "LOKALES KÖNNEN: DAS HAUS DER TÊTE DE MOINE UND SEIN MUSEUM\nDie Nähe zum Haus der Tête de Moine und seinem Museum ist ein Pluspunkt, um nachhaltigen Tourismus mit der Vermittlung lokaler Handwerks- und Produktionsweisen zu verbinden. Der Ort macht respektvolle, überlieferte Praktiken sichtbar, erzählt die Geschichte eines emblematischen Produkts und zeigt die Verknüpfung von Territorium, Landwirtschaft und Kultur. Ergänzend kann Bellelay zu einem kohärenten Angebot beitragen: thematische Routen, vernetzte Vermittlung und Erlebnisse, die Kulturerbe, Landschaft und lebendige Traditionen zusammenführen.",

  "SCHLUSSFOLGERUNG\nBellelay vereint seltene Voraussetzungen für hochwertigen nachhaltigen Tourismus: eine zentrale Lage im Jurabogen, die Nähe zu starken Dynamiken der Naturpärke Doubs und Chasseral, die Einbindung in Wander- und Velonetze sowie der Zugang zu bemerkenswerten Naturräumen und lokalem Wissen. Durch Förderung sanfter Mobilität, gute Vermittlung und einen respektvollen Umgang mit Lebensräumen kann der Standort eine suffiziente, lehrreiche und tief im Territorium verankerte Gastlichkeit anbieten."
]
        },
        social: {
          title: "Soziales",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
"EINLEITUNG\nIn Bellelay ist die soziale Dimension ein tragender Bestandteil des Standortprojekts: Es geht nicht nur darum, Aktivitäten „unterzubringen“, sondern Bedingungen für Zusammenleben, Lernen und Inklusion in einem geteilten Alltag zu schaffen. Die Vielfalt der Nutzenden, die gemeinsamen Innen- und Aussenräume sowie Funktionen mit hohem gesellschaftlichem Nutzen machen den Ort zu einem besonders geeigneten Feld, um Formen des Zusammenlebens, der Governance und der Solidarität im Massstab eines denkmalgeprägten Ensembles zu erproben.",

  "INTEGRATION: QUALIFIZIEREN UND IN DEN ARBEITSMARKT BEGLEITEN\nBellelay beherbergt ein Ausbildungszentrum für Migrantinnen und Migranten – ein Pilotprojekt in der Schweiz –, das vor Ort rund hundert Personen ausbildet, mit dem Ziel der Integration in den Arbeitsmarkt, insbesondere als Assistenz in der Pflege und Betreuung (medizinisch-soziale Assistenz). Diese Präsenz verankert den Standort in einer konkreten sozialen Aufgabe: Stabilität bieten, Qualifizierungswege ermöglichen und den Weg in Selbstständigkeit unterstützen. Gleichzeitig stellt sie Fragen an Architektur und Organisation als Integrationsfaktoren: Lernräume, Rahmenbedingungen der Aufnahme, Tagesrhythmen sowie die Anbindung an die Region (Praktika, Netzwerke, Mobilität).",

  "ZUSAMMENLEBEN: MEHRFACHNUTZUNGEN UND GEMEINSAME LEBENSRÄUME\nDie Vielzahl der Nutzenden erzeugt auf dem Areal reichhaltige soziale Dynamiken: unterschiedliche Zeitlichkeiten, Koexistenz verschiedener Praktiken und die gemeinsame Nutzung von Ressourcen. Geteilte Räume—Säle, Erschliessungen, Höfe, Gärten, Cafeteria, Arbeitsorte—sind nicht nur Flächen, sondern soziale Dispositive, die Begegnung, Kooperation, aber auch Reibung beeinflussen. Zentral ist, Bedingungen für ein dauerhaft tragfähiges Zusammenleben zu klären: verständliche Nutzungsregeln, Gastlichkeit, Sicherheit, Umgang mit Immissionen sowie eine hohe Qualität der gemeinsamen Räume, die ein ruhiges Miteinander unterstützt.",

  "GOVERNANCE EINES GETEILTEN ORTES: MODELLE, ROLLEN UND INSTRUMENTE\nBellelay stellt eine Kernfrage: Welche Governance-Modelle eignen sich für einen geteilten, multi-aktiven Ort? Jenseits von Absichten braucht es konkrete Werkzeuge: Entscheidungswege, Verantwortlichkeiten für Unterhalt, Reservation und Priorisierung von Räumen, Konfliktbearbeitung, interne Kommunikation sowie Prinzipien zur Kostenverteilung. Dieser Bereich untersucht Governance-Formen, die langfristig funktionieren, für alle verständlich sind und echte gemeinsame Nutzung ermöglichen – statt bloss einer Nebeneinanderstellung von Angeboten.",

  "INTERGENERATIONELL UND INTERKULTURELL: EIN LABOR IM REALMASSSTAB\nMit den vielen Nutzenden und der geplanten Ansiedlung einer Primarschule, die bestimmte Gemeinschaftsflächen mitnutzt, ist Bellelay prädestiniert, ein intergenerationelles und interkulturelles Labor zu werden. Die Nähe von Kindern, Erwachsenen in Ausbildung, Besuchenden, Bewohnenden und Fachpersonen eröffnet einzigartige Chancen für Beziehungen und gegenseitiges Lernen – vorausgesetzt, sie wird sorgfältig organisiert. Entscheidend sind kompatible Räume und Zeitfenster: Zonen der Begegnung und des Rückzugs, sichere Wegführungen, klar gerahmte geteilte Nutzungen sowie Vermittlungsformate, die Respekt, Neugier und Aufmerksamkeit fördern.",

  "SCHLUSSFOLGERUNG\nDie soziale Dimension von Bellelay beruht auf bereits konkreten Aktivitäten—wie dem Ausbildungszentrum für Migrantinnen und Migranten—und auf einem starken Potenzial, das aus der Vielfalt der Nutzenden und den gemeinschaftlichen Räumen entsteht. Durch eine präzise Organisation sowie klare Regeln und Governance kann Bellelay zu einer Referenz für Integration, Zusammenleben und intergenerationelles wie interkulturelles Experimentieren werden: ein Ort, der sozialen Zusammenhalt dauerhaft, nachvollziehbar und gemeinsam getragen hervorbringt."
]
        },
        paix: {
          title: "Frieden & Wiedergutmachung",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
"EINLEITUNG\nIn Bellelay kann der Schwerpunkt «Frieden» zu einem tragenden Thema werden – lokal verankert und zugleich mit aktuellen globalen Herausforderungen verbunden. In einem weltweiten Kontext lang andauernder Konflikte, erzwungener Migration und massiver Wiederaufbaubedarfe verfügt die Schweiz über eine anerkannte besondere Ausgangslage—Neutralität, Diplomatie und Gute Dienste—um Dialog, Ausbildung und Kooperation zu ermöglichen. Entscheidend ist, diese Berufung in konkrete Instrumente zu übersetzen: Kompetenzen, Programme, Partnerschaften und Austauschformate, die über Symbolik hinaus wirksame Beiträge leisten.",

  "FRIEDEN UND GUTE DIENSTE: EINE BERUFUNG AKTIVIEREN\nFrieden ist nicht nur eine Idee, sondern Arbeit: Prävention, Mediation, Versorgung, Sicherheit, Wiederaufbau und die Wiederherstellung sozialer Bindungen. In diesem Rahmen bietet die Schweizer Tradition der Neutralität und der Vermittlung eine besondere Legitimität, Begegnungen, Trainings und Kooperationen zu hosten. Bellelay kann – durch Ruhe, Aufnahmefähigkeit und vielfältige Räume – ein geeigneter Ort für schlanke und wirksame Formate sein: Seminare, Arbeitsretreats, Mediationsworkshops, Wissensweitergabe und institutionenübergreifende Programme in Zusammenarbeit mit kompetenten Akteuren.",

  "MIGRATION: VOM ANKOMMEN ZUR HANDLUNGSFÄHIGKEIT\nDas Ausbildungszentrum für Migrantinnen und Migranten vor Ort eröffnet eine direkte Perspektive: Integration und Beitrag, hier und anderswo, miteinander zu verbinden. Über den Zugang zum Schweizer Arbeitsmarkt hinaus kann der Standort ergänzend Kompetenzen fördern, die für Wiederaufbau und Stabilisierung bei einer möglichen Rückkehr relevant sind: Mediation und Konfliktbearbeitung, Gesundheit und medizinisch-soziale Begleitung, Grundkompetenzen in Bau und Unterhalt, community-orientierte Organisation sowie Logistik. Ziel ist, Menschen auszubilden, die in fragilen Kontexten handlungsfähig sind – mit übertragbaren Fähigkeiten und einer Ethik der Fürsorge und Kooperation.",

  "EIN NAHES ÖKOSYSTEM AUS STIFTUNGEN UND EXPERTISE\nDie Entwicklung dieses Schwerpunkts kann auf ein nationales und regionales Ökosystem von Stiftungen und Organisationen mit einschlägiger Kompetenz aufbauen. In unmittelbarer Nähe ist die Fondation Digger in Tavannes aktiv in der Herstellung von Minenräumrobotern und bringt konkrete Expertise zu einem zentralen Thema der Nachkriegssicherheit ein. Die Fondation Gobat in Tramelan trägt zur Forschung und zum Wissensaustausch in diesem Feld bei. Bellelay kann als Plattform wirken: Trainings, Demonstrationen, Begegnungen und Sensibilisierungsprogramme aufnehmen und Vernetzung zwischen Akteuren, Öffentlichkeit und Region fördern.",

  "TECHNISCHE KOMPETENZEN IM JURABOGEN: VON PRÄZISION ZU ÖFFENTLICHEM NUTZEN\nDer Jurabogen verfügt über anerkannte Kompetenzen in Mechanik und Mikrotechnik sowie über Know-how im Bauwesen und in verwandten Gewerken. Diese Fähigkeiten können zu friedensbezogenen Zielen beitragen: nützliche Technologien für Sicherheit (z. B. Minenräumlösungen), robustes und reparierbares Werkzeug, Mess- und Kontrollsysteme sowie lokale Produktionskapazitäten für konkrete Bedarfe. Die zentrale Frage ist, technische Exzellenz mit öffentlichem Nutzen zu verbinden – durch verantwortungsvolle, zugängliche und praxisorientierte Lösungen.",

  "VOM THEMA ZUM PROGRAMM: AUSBILDUNG, ANGEWANDTE FORSCHUNG UND ETHIK\nDamit «Frieden» nicht zu einer rein deklarativen Rubrik wird, braucht es ein klares Programm: Handlungsfelder, Partner, Formate, Zielgruppen und erwartete Ergebnisse. Das kann sich in regelmässigen Ausbildungszyklen (Mediation, Gesundheit, Bau, Unterhalt), in Residenzen oder Projektlaboren sowie in schlanken Wissensaustausch-Formaten niederschlagen. Ein ethischer Rahmen ist zentral: Respekt gegenüber Betroffenen, Sorgfalt in Narrativen, Sicherheit und Zusammenarbeit mit legitimierten Akteuren. So kann Bellelay zu einem Ort des Lernens, der Koordination und der Entwicklung von Lösungen werden – in angemessener Relation zu den Herausforderungen und Verantwortlichkeiten.",

  "SCHLUSSFOLGERUNG\nBellelay vereint starke Voraussetzungen für einen glaubwürdigen Schwerpunkt «Frieden»: eine anerkannte Schweizer Rolle in Vermittlung und Guten Diensten, eine bereits vorhandene soziale Realität durch die Ausbildung von Migrantinnen und Migranten, ein nahes Netzwerk spezialisierter Stiftungen (insbesondere Digger in Tavannes und Gobat in Tramelan) sowie technische Exzellenz im Jurabogen. Durch die Verknüpfung von Ausbildung, angewandter Forschung und Kooperation kann der Standort konkret zu Prävention, Wiederaufbau und Wissensweitergabe beitragen – und zugleich dem Geist des Ortes treu bleiben: Nüchternheit, Gastlichkeit und Nutzen."
]
        },
        },


      /*contact de*/
   contact: {
    title: "Ein Projekt, eine Frage? Sprechen wir darüber.",
    subtitle: "Kontakt und Anfahrt",
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
      hero: { title: "A place for Education and Culture", subtitle: "to learn, create, or share" },
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
      heading: "Your possible Stay Formats",
    },  
       
    programs: {
      immersive: {
        title: "Immersive in-situ weeks",
        text: "Access to numerous buildings and outdoor areas offers a wide range of study and research subjects.",
        text2: "Many opportunities for in-depth practical learning through the study of site-specific features or elements of the surrounding area, with public presentations of outcomes at the end of the stay.",
      },
      summer: {
        title: "Summer schools",
        text: "Services and points of interest that are well suited to intensive training programs lasting from one to three weeks.",
        text2: "Beyond workspaces and full-board accommodation, the natural environment and nearby places of interest provide attractive opportunities for complementary activities.",
      },
      ateliers: {
        title: "Workshops and Projects",
        text: "Workspaces adapted to participatory projects and hands-on workshops.",
        text2: "Spaces that are closer to workshops than traditional classrooms, suitable for experimental activities or for artisanal and artistic production.",
      },
      seminars: {
        title: "Seminars and Conferences",
        text: "Spaces for conferences, seminars, congresses, or award ceremonies.",
        text2: "The generous outdoor areas, circulation spaces, and halls can comfortably accommodate several hundred people.",
      },
      residences: {
        title: "Artistic or Scientific Residencies",
        text: "Long-term accommodation in a calm and unique setting conducive to creative development.",
        text2: "Opportunities to exhibit works at the end of the residency.",
      },
      expositions: {
        title: "Exhibitions and Concerts",
        text: "Public events and cultural evenings, both indoors and outdoors.",
        text2: "Openings, concerts, exhibitions, meetings, and public mediations throughout the year. The webiste of the <a href='https://www.abbatialebellelay.ch/' target='_blank'>Fondation de l'Abbatiale de Bellelay</a> offers a rich cultural programme hosted within the Abbatiale",
      }
    },       
       

         /*patrimoine en*/

patrimoine: {
  title: "A brief history of Bellelay",
  subtitle: "A timeline of memory",
  heading: "Chronology"
},

pat: {
  p1: {
    years: "Since 2022",
    title: "Adaptive reuse",
    brief: "Site under development, focusing on educational, cultural and artistic projects, as well as circular innovation."
  },
  p2: {
    years: "1890–2022",
    title: "Psychiatric clinic",
    brief: "Acquisition of the site by the Canton of Bern and operation of a psychiatric clinic."
  },
  p3: {
    years: "1797–1890",
    title: "Secularisation and various uses",
    brief: "Desacralisation following the occupation by French troops during the Revolution. Later: watchmaking factory, brewery, glassworks and other uses."
  },
  p4: {
    years: "1714–1797",
    title: "Monastic peak",
    brief: "Baroque reconstruction of the abbey church and a boarding school for the education of European nobles."
  },
  p5: {
    years: "1136–1714",
    title: "Foundation and medieval period",
    brief: "Monastery dedicated to retreat, welcoming pilgrims and circular activities."
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
         text2: "From 10 to 150 people: with several plenary rooms, numerous classrooms, workshops, and informal indoor and outdoor spaces, all types of groups are welcome.<br><br>Audio-visual equipment is available on-site, and the furniture can be configured based on your needs.<br><br>Beyond the setup, technical support is available at all times to meet your needs throughout your stay."
       },
       alentours: {
         title: "Surroundings",
         text: "Scenery, hikes, and heritage sites nearby.",
         text2: "Recommended walking or cycling routes, historical points of interest, and suggestions for day trips.<br><br>Opportunities for <a href='https://www.j3l.ch/en/P32737/things-to-do/culture-museums/guided-city-tour/guided-tour-of-the-abbey-of-bellelay/' target='_blank'>individual or guided visits to the Abbatiale</a> or <a href='https://maisondelatetedemoine.ch/en/museum' target='_blank'>the Maison de la Tête de Moine</a>.<br><br>The team at <a href='https://www.j3l.ch/en/Z10490/grand-chasseral-tourism?regionFilters%5B0%5D=3&regionFilters[]=3' target='_blank'>Grand Chasseral Tourisme</a> is available to provide advice."
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
"INTRODUCTION\nBellelay is a rare architectural field of study: an extensive, historically layered built ensemble with significant heritage value (cultural property of national significance). The coexistence of buildings and components from different periods, combined with contemporary requirements for use and management, makes it an exemplary case for analysing, documenting, and transforming a site without compromising its value and its overall coherence.",

  "HERITAGE VALUE AND PROTECTIONS: AN INTERVENTION DOCTRINE\nHeritage protections and cultural value call for a clear methodology: diagnosis, material compatibility, reversibility, and legibility of interventions. The goal is to design accurate, restrained, and well-argued contemporary transformations that integrate current constraints (safety, accessibility, comfort) without trivialising the existing fabric.",

  "BUILDING DIAGNOSIS: MATERIALS AND PATHOLOGIES\nBellelay enables a precise analysis of construction systems (masonry, roof and timber structures, envelope, joinery) and their vulnerabilities: moisture, ageing, alterations and repairs, energy performence values, critical details. The challenge is to connect on-site assessment to robust, repairable, and durable design decisions.",

  "SCALE AND COMPLEXITY: PROGRAMMING AND PHASING\nThe multiplicity of buildings and spatial sequences requires programming by functional units and time-based phases. Work focuses on use compatibility, flows, operations and logistics, and a realistic phasing strategy, enabling gradual evolution of the site without disrupting ongoing operation.",

  "HARED SPACES: RESOURCE SHARING AND GOVERNANCE\nBellelay raises a central operational issue: organising shared spaces for a diversity of users, with rules of use translated into spatial terms. Public/private gradients, buffer zones, reception, storage, circulation, and safety must support efficient and long-term shared use.",

  "SPATIAL PLANNING AND ON-THE-GROUND REALITIES\nIn addition to land use (public utility zone), the project is embedded in tangible territorial constraints: access, deliveries, parking, utilities and networks, topography, landscape, and neighbouring contexts. This axis examines the interface between the built ensemble and its territory to develop coherent, understated, and context-responsive solutions.",

  "CIRCULARITY AND THE SITE ECOSYSTEM\nThe site offers a strong framework for a global circular approach: reuse, selective deconstruction, maintenance, and local material loops, as well as all local economic interactions. Outdoor spaces can contribute to a complete ecosystem—leisure, production, ecological management—aligned with uses and the site’s governance.",

  "CONTEMPORARY USES AND INTEGRATION OF SYSTEMS\nResidencies, work, events, and reception require comfort and compliance (acoustics, thermal performance, energies, indoor air quality, accessibility, fire safety). In a heritage context, these systems must be integrated with care: minimal interventions, reversible solutions, and respect for architectural legibility.",

  "CONCLUSION\nWorking on Bellelay means approaching architecture as a bridge between past and future: understanding a complex ensemble, protecting what gives it value, and organising its transformation for multiple and lasting uses. The ambition is to produce restrained, reversible, and operational intervention scenarios that reinforce the site’s coherence while opening new possibilities for occupation, shared use, and experimentation."
]
        },
        amenagement: {
          title: "Spatial planning",
          img: "assets/img/discipline-amenagement.jpg",
          paragraphs: [
"INTRODUCTION\nIn Bellelay, spatial planning is a decisive lever for enabling contemporary uses while ensuring a controlled, long-term evolution of the site. The specificity of the place—heritage-based, large in scale, and potentially multi-use—requires a fine articulation between municipal regulations, regional and cantonal priorities, and operational realities (mobility, access, phasing, and impacts). The aim is to build a planning framework that can accompany transformation in a legible, legally robust, and politically sustainable way.",

  "TERRITORIAL DIAGNOSIS AND CONTEXTUAL BASELINE\nThe first step is to clarify the territorial baseline: current zoning and land-use designations, development rights, perimeters and constraints (heritage, environment, landscape), capacity of utilities and networks, access and safety conditions, and neighbourhood considerations. This diagnosis underpins the strategy by distinguishing what can be activated immediately, what requires procedures, and what should be reserved for later phases. The objective is an operational reading of constraints and room for manoeuvre.",

  "ADAPTING MUNICIPAL REGULATIONS FOR TRANSITIONAL USES\nTransitional uses (studios, residencies, events, temporary occupancy) are often constrained by regulatory frameworks designed for stable, permanent situations. This axis aims—together with the municipality—to define mechanisms for controlled flexibility: time-limited authorisations, proportionate requirements aligned with risk, and clear reversibility criteria. The goal is not to bypass rules, but to enable supervised experimentation that can test programmes, clarify real needs, and feed long-term planning.",

  "A LOCALISED MASTERPLAN: VISION, PHASING, AND COHERENCE\nBellelay’s transformation requires a clear strategic framework capable of aligning vision, governance, and timelines. Establishing a localised masterplan makes intentions explicit: the site’s vocation, intensity and compatibility of uses, conservation principles, organisation of shared spaces, management of outdoor areas, and alignment with infrastructure. The document must include realistic phasing (what can happen quickly versus what requires longer lead times) and serve as a shared reference for authorities, operators, and users.",

  "A DISTRICT PLAN ALIGNED WITH FUTURE SITE DEVELOPMENT\nBeyond vision, a district plan (or equivalent instrument) is needed to secure future evolution legally: rules for siting and intervention perimeters, conditions for conversion and change of use, access, parking, permitted uses, and quality requirements (landscape, shared/public spaces, heritage integration). This axis aims to provide a regulatory basis that matches the site’s realities—enabling adaptation while setting clear safeguards and ensuring overall quality, even with multiple stakeholders and users.",

  "REGIONAL AND CANTONAL POLITICAL ISSUES RELATED TO CHANGES OF USE\nChanges of use at this scale are not purely local decisions: they engage regional and cantonal priorities regarding territorial development, landscape protection, heritage, the economy, and social cohesion. This axis addresses the political and institutional dimension: building a shared narrative, identifying stakeholders, anticipating procedures and trade-offs, and aligning with higher-level strategies (cantonal frameworks and sectoral policies). The goal is to make the project understandable, defensible, and compatible with overarching planning objectives.",

  "COORDINATION WITH REGIONAL MOBILITY PLANNING\nMobility is a structural factor for the site’s viability: it conditions accessibility, local acceptability, and environmental impact. This axis focuses on close coordination with regional planning: strengthening public transport (frequency, stops, connections), clarifying access hierarchies, and managing parking according to phases and peak events. The objective is to reduce dependency on private cars while ensuring inclusive and realistic accessibility, consistent with the territory’s capacities.",

  "ACTIVE MOBILITY: CONTINUITY, SAFETY, AND QUALITY OF ROUTES\nIn addition to public transport, connecting active mobility networks is a project topic in its own right: continuous pedestrian and cycling links, safer crossings, legible wayfinding, bicycle parking, and coordination with technical access routes. This axis also addresses the experiential dimension: routes and arrivals should contribute to the site’s identity, while remaining robust and manageable in daily operation.",

  "IMPLEMENTATION: GOVERNANCE, TOOLS, AND LONG-TERM MONITORING\nEffective planning requires clear tools and governance: a procedural roadmap, role allocation (owner, operator, municipality, canton, partners), consultation formats, and monitoring indicators (mobility, nuisances, uses, impacts). The aim is to turn planning documents into a living framework—able to integrate feedback, adjust rules when needed, and support evolution without losing overall coherence.",

  "CONCLUSION\nSpatial planning for Bellelay must reconcile experimentation and legal security: enabling transitional uses to activate and test the site, while establishing a durable planning framework through a localised masterplan and a district plan aligned with future development. Success also depends on political and institutional embedding, and on coordination with regional mobility planning—especially public transport and active mobility. The ambition is to deliver a credible, gradual, and shared transformation trajectory, commensurate with the site’s heritage, territorial, and societal stakes."
]
        },
        histoire: {
          title: "History",
          img: "assets/img/discipline-history.jpg",
          paragraphs: [
"INTRODUCTION\nApproaching Bellelay through history means reading the site as a living document: a built and landscape ensemble whose forms, uses, and narratives have been shaped layer by layer. The historical study is less about accumulating erudition than about understanding continuities, ruptures, and reassignments of use that have formed the place. It helps inform contemporary choices—conservation, transformation, programming—by situating the site within the timelines that produced it.",

  "THE SITE AS AN ARCHIVE: MATERIAL TRACES AND NARRATIVES\nBellelay lends itself to a combined reading of sources and physical evidence: the organisation of buildings, successive alterations, constructive ‘overwrites’, traces of use inscribed in spaces, and relationships to the surrounding territory. The aim is to connect what documents convey (texts, plans, archives) with what the fabric itself reveals, in order to identify the site’s major phases of formation and the logics that guided its evolution.",

  "KEY PERIODS AND MOMENTS OF TRANSITION\nHistorical research focuses on the periods that structured Bellelay and, above all, on turning points: changes of use, institutional shifts, emerging practices, events and decisions that transform spaces and their meaning. Rather than producing an exhaustive chronology, the goal is to highlight “key moments” that explain why certain forms, routes, or buildings appear as they do today.",

  "USES, COMMUNITIES, AND THE SITE’S ECONOMIES\nThe site’s history can also be read through its uses and the communities that shaped it: ways of living and working, everyday organisation, hospitality, production, and relationships to land and resources. This axis links spatial evolution to social and economic practices, showing how architecture responds to changing functions—and how, in turn, it influences ways of occupying the place.",

  "HISTORY AND DESIGN: A METHOD FOR INFORMED TRANSFORMATION\nHistory is not a backdrop; it is a design tool. By identifying values, invariants, and past transformations, it helps decide what should be preserved, revealed, interpreted, or adapted. This axis promotes a pragmatic approach: documenting, prioritising issues, making choices explicit, and developing contemporary interventions that remain legible and respectful of the site’s narratives.",

  "REFERENCES AND RESOURCES: CONSULT THE TIMELINE\nTo situate Bellelay within its main historical stages, it is recommended to consult the timeline available on this website under the “Heritage” (Patrimoine) page. It provides concise reference points on key periods and helps connect historical reading, on-site visits, and an understanding of transformations.",

  "CONCLUSION\nStudying the history of Bellelay is a way to understand the site in depth without freezing its evolution. By clarifying major phases, transitions, and uses, the historical approach supports a more accurate transformation—one that respects the site’s memory while enabling contemporary functions. The timeline on the “Heritage” page is an essential entry point for structuring this reading and guiding further research."
]
        },
        culture_art: {
          title: "Culture & art",
          img: "assets/img/discipline-art.jpg",
          paragraphs: [
"INTRODUCTION\nAt Bellelay, culture and art are not added onto the site; they arise naturally from it, as architecture, acoustics, light, and landscape already form a stage. The place offers a rare setting where cultural presentation, artistic practice, and production can coexist: monumental and intimate spaces, strongly differentiated atmospheres, and a sense of calm that supports deep work. The challenge is to enhance these qualities without overexploiting them, through programming that is sensitive, coherent, and respectful of the site.",

  "AN ALREADY ACTIVE CULTURAL DYNAMIC\nBellelay already hosts cultural and artistic activities, notably through the Fondation de l’Abbatiale de Bellelay, which organises concerts and art exhibitions. This existing foundation provides a solid base: proven experience, established audiences, and a nuanced understanding of hosting and operational constraints. The aim is to strengthen and diversify this dynamic, and to better connect presentation (events, exhibitions) with creation (residencies, production).",

  "SOUND PRODUCTION AND ACOUSTIC EXPERIENCE\nThe site is particularly suited to sound-based practice. The abbey church, with its exceptional echo and resonance, offers a unique context for music, acoustic experimentation, voice, ensembles, and spatialised sound. Beyond concerts, this opens opportunities for research and production: recording sessions, site-specific compositions, immersive set-ups, dialogues between architecture and sound, and hybrid formats combining performance, installation, and mediation.",

  "UNIQUE SPACES FOR EXHIBITIONS AND INSTALLATIONS\nBellelay offers rare exhibition settings capable of hosting a wide range of works and formats within an exceptional framework. Remarkable attic spaces, a unique crypt, and magnificent gardens create diverse atmospheres—verticality, penumbra, views, textures—inviting in situ exhibitions, installations, curated routes, and sensitive interventions. The focus is on the fit between work and place, rather than on a neutral “white cube” approach.",

  "CALM, GENEROUS SPACES, AND CONDITIONS FOR CREATION\nThe site’s tranquillity, its generous spaces, and the quality of the surrounding landscape provide precious conditions for inspiration and creation. Bellelay supports long timeframes: research, sketching, rehearsals, prototyping, writing, and production. This approach emphasises working hospitality: rhythms that align with the place, respectful coexistence of uses, and conditions that foster both concentration and exchange.",

  "PROGRAMMING: COHERENCE, QUALITY, AND RESPECT FOR THE SITE\nDeveloping culture and art at Bellelay calls for programming conceived as a balance: managed intensities, appropriate formats, control of flows and impacts, and attention to conservation. The goal is to build a demanding, open, and locally anchored cultural offer that brings together events, exhibitions, and residencies, while preserving what makes the place distinctive: its atmospheres, its silences, and the quality of the experience.",

  "CONCLUSION\nBellelay brings together conditions that rarely coincide: an already active cultural life, remarkable acoustics, singular spaces for exhibitions and installations, and a calm environment conducive to creation. By connecting presentation and production, and by developing programming that respects architecture and landscape, the site can become a reference setting for cultural and artistic projects—ambitious, sensitive, and durably rooted in the place."
]
        },
        circularity: {
          title: "Circularity",
          img: "assets/img/discipline-circularity.jpg",
          paragraphs: [
"INTRODUCTION\nAt Bellelay, circularity is not an applied concept; it is rooted in the site’s own logic—historically shaped by monastic organisation and reactivated today through tangible practices. The configuration of the place—buildings, outdoor areas, resources, skills, and spaces for transformation—makes it possible to build short, legible loops in which production, use, upkeep, and reuse are organised within a single ensemble. The ambition is to develop Bellelay as an operational, demonstrative, and durable ecosystem, grounded in local resources, sobriety, and knowledge transmission.",

  "FOOD CIRCULARITY: FROM PRODUCTION TO CONSUMPTION\nThe site offers outstanding conditions for a complete local food loop. Terraces built during the monastic period provide a rare productive landscape base; vegetables and cereals are already cultivated there today, along with fruit from old trained (espaliered) trees. This local production can be strengthened and diversified, and linked to everyday uses, education, and hospitality. Crucially, Bellelay also has on-site infrastructure for processing and consumption: large kitchens that can transform harvests, and a cafeteria beneath a monumental vaulted ceiling—enabling a short chain from soil to plate within an exceptional architectural setting.",

  "CRAFT-BASED CIRCULARITY: SKILLS, REPAIR, AND UPKEEP\nBellelay carries a tradition of integrated trades: historically, in each period, skilled crafts were present to meet the site’s needs, particularly in construction. That logic continues today. A joiner has taken over the existing premises of a former carpentry workshop and works wood through old, durable practices—careful material selection, time-honoured techniques, and attentive making. He cuts his logs in the surrounding forests, saws them by hand, and uses only natural glues, anchoring production in a local economy and in controlled environmental impacts. In parallel, an on-site laundry supports users’ needs and reinforces an internal service, maintenance, and logistics capacity—essential to the long-term viability of a multi-user site.",

  "CIRCULARITY AT THE SCALE OF THE SITE: SHORT LOOPS, LOGISTICS, AND QUALITY OF USE\nAt Bellelay, circularity ultimately depends on organisation: making loops visible, efficient, and compatible with everyday operation. This means designing flows (harvest, storage, preparation, distribution, organic residues), spaces (workshops, stores, sorting areas, repair zones), and rules of use (shared resources, responsibilities, upkeep). The goal is to avoid “symbolic” circularity and instead build circularity that is practicable: easy to operate, measurable, and robust enough to work with diverse users and rhythms.",

  "CONCLUSION\nBellelay brings together rare conditions for a complete and credible circular approach: an already active agricultural base, on-site facilities for processing and consumption, and a real continuity of craft practices serving the site and its users. By consolidating these dynamics—without losing sobriety and local anchoring—the site can become an example of lived circularity: a model where food, trades, upkeep, and daily management reinforce one another through short, durable, and transferable loops."
]
        },
        tourisme: {
          title: "Sustainable tourism",
          img: "assets/img/discipline-tourisme.jpg",
          paragraphs: [
  "INTRODUCTION\nAt Bellelay, sustainable tourism builds on an exceptionally favourable geographic and landscape setting in the heart of the Jura Arc. The site makes it possible to combine cultural discovery, immersion in nature, low-impact mobility, and interpretation—within a territory that already values respectful practices: slower rhythms, seasonality, care for sensitive environments, and strong local know-how. The challenge is to develop low-impact hospitality based on the quality of experience and routes rather than on over-visitation.",

  "A JURA ARC TERRITORY WELL-SUITED TO SUSTAINABLE TOURISM\nThe Jura Arc provides an ideal framework for sustainable tourism: open and forested landscapes, terrain well-suited to outdoor activities, a rich built and rural heritage, and a strong hiking culture. Bellelay fits naturally into this logic as a destination where visitors come to walk, observe, listen, learn, and take time. The site can become a base for sober stays focused on discovery, landscape interpretation, and the valorisation of local resources.",

  "AT THE INTERSECTION OF THE DOUBS AND CHASSERAL REGIONAL NATURE PARKS\nBellelay sits at the crossroads of two strong regional dynamics: the Parc du Doubs and Parc Chasseral, both of which develop initiatives around habitat restoration, landscape interpretation, improved accessibility, and visitor experience. This proximity encourages synergies: coordinated routes and offers, shared mediation tools, wayfinding and information, and an ambitious approach to protecting environments and managing visitor flows. The site can operate as a gateway, a relay point, and a place for interpreting the territory.",

  "THE VIA BERNA: A RECOGNISED LONG-DISTANCE HIKING ROUTE\nThe presence of the Via Berna, a recognised long-distance hiking route, anchors Bellelay within a national-scale network of low-impact mobility. For hikers, the site can function as a high-quality stop: rest, visit, food services, and—depending on possibilities—accommodation, with hiker-oriented amenities (information, water, shelter, basic services). This connection supports a more evenly distributed visitation pattern and fosters a direct, attentive relationship with the Jura landscape.",

  "ROAD CYCLING AND MTB: CONNECTIVITY AND LOW-IMPACT PRACTICES\nThe territory around Bellelay is well-suited to cycle tourism—both road cycling and mountain biking—thanks to varied relief, secondary roads, and trails. Proximity to routes opens opportunities for targeted services: bicycle parking, minor repairs, water points, route information, and links to public transport. By supporting these practices, Bellelay can contribute to low-impact tourism where movement itself is part of the experience.",

  "AN EXCEPTIONAL WETLAND SITE IN IMMEDIATE PROXIMITY\nIn immediate proximity lies a remarkable wetland of national importance—a rare and fragile habitat. The educational trail dedicated to dragonflies is an exemplary tool for awareness: it enables visitors to discover biodiversity, understand ecological balances, and develop a culture of respect for sensitive environments. Bellelay can reinforce this reading by linking heritage and nature in a clear way: a form of tourism centred on observation, learning, and contemplation, attentive to seasons and to the carrying capacity of the site.",

  "LOCAL KNOW-HOW: THE TÊTE DE MOINE HOUSE AND ITS MUSEUM\nThe nearby Maison de la Tête de Moine and its museum are a major asset for connecting sustainable tourism with the transmission of local know-how. The site highlights respectful ancestral practices, the history of an emblematic product, and the ties between territory, agriculture, and culture. In complement, Bellelay can contribute to a coherent offer: thematic routes, cross-linked mediation, and experiences that bring together heritage, landscape, and living traditions.",

  "CONCLUSION\nBellelay brings together rare ingredients for high-quality sustainable tourism: a central position in the Jura Arc, proximity to the strong initiatives of the Doubs and Chasseral nature parks, anchoring in hiking and cycling networks, and access to outstanding natural environments and local know-how. By prioritising low-impact mobility, interpretation, and care for sensitive habitats, the site can offer sober, meaningful hospitality deeply rooted in the territory."
]
        },
        social: {
          title: "Social",
          img: "assets/img/discipline-social.jpg",
          paragraphs: [
"INTRODUCTION\nAt Bellelay, the social dimension is a structural component of the site project: it is not only about “hosting” activities, but about creating conditions for coexistence, learning, and inclusion within a shared everyday life. The diversity of users, the presence of shared indoor and outdoor living spaces, and functions with strong societal value make the site a particularly relevant field for experimenting with models of living together, governance, and solidarity at the scale of a heritage ensemble.",

  "INTEGRATION: TRAINING AND PATHWAYS INTO EMPLOYMENT\nBellelay hosts a training centre for migrants—a pilot project in Switzerland—which welcomes and trains around one hundred people on site, supporting their integration into the labour market, notably as medico-social assistants. This anchors the site in a concrete social mission: providing stability, qualification pathways, and support towards autonomy. It also invites reflection on architecture and organisation as vectors of integration: learning spaces, hosting conditions, daily rhythms, and connections to the region (internships, networks, mobility).",

  "LIVING TOGETHER: MULTIPLE USERS AND SHARED LIVING SPACES\nBecause of its multiple user groups, the site generates rich social dynamics: overlapping timeframes, coexistence of practices, and shared resources. Shared spaces—rooms, circulation areas, courtyards, gardens, cafeteria, workspaces—are not merely surfaces; they are social devices that shape encounters, cooperation, and also friction. A key challenge is to define the conditions for lasting coexistence: clear rules of use, hospitality, safety, management of nuisances, and the quality of common spaces to support calm, respectful cohabitation.",

  "GOVERNANCE OF A SHARED PLACE: MODELS, ROLES, AND TOOLS\nBellelay raises an essential question: what governance models can support a shared, multi-actor place? Beyond intentions, governance is expressed through practical tools: decision-making processes, maintenance responsibilities, booking and prioritisation of spaces, conflict management, internal communication, and principles for sharing costs. This component explores governance approaches that can endure over time, be understood by all, and enable real sharing rather than a simple juxtaposition of uses.",

  "INTERGENERATIONAL AND INTERCULTURAL: A FULL-SCALE LABORATORY\nWith its many users and the future implantation of a primary school that will share certain common spaces, Bellelay is set to become a full-scale intergenerational and intercultural laboratory. Proximity between children, adults in training, visitors, residents, and professionals creates unique opportunities for connection and reciprocal learning—provided it is carefully organised. The challenge is to design compatible spaces and timeframes: areas for meeting and for retreat, safe routes, clearly framed shared uses, and mediation that fosters respect, curiosity, and attentiveness to others.",

  "CONCLUSION\nBellelay’s social component builds on already concrete actions—such as the migrant training centre—and on strong potential generated by diverse users and shared spaces. By carefully shaping organisation, rules, and governance, Bellelay can become a reference for integration, living together, and intergenerational and intercultural experimentation: a site capable of producing social cohesion in a durable, legible, and collectively supported way."
]
        },
        paix: {
          title: "Peace & war reparations",
          img: "assets/img/discipline-paix.jpg",
          paragraphs: [
"INTRODUCTION\nAt Bellelay, the “peace” component can become a structuring theme—locally rooted while connected to contemporary global challenges. In a world marked by prolonged conflicts, forced displacement, and massive reconstruction needs, Switzerland has a recognised predisposition—neutrality, diplomacy, and good offices—which makes this a theme that should be developed decisively. The challenge is to translate that vocation into concrete arrangements: skills, programmes, partnerships, and exchange formats capable of producing effects beyond symbolism.",

  "PEACE AND GOOD OFFICES: ACTIVATING A VOCATION\nPeace is not only an idea; it is work: prevention, mediation, care, security, reconstruction, and the rebuilding of social ties. In this context, Switzerland’s tradition of neutrality and facilitation offers particular legitimacy to host meetings, training, and cooperation. With its calm atmosphere, hosting capacity, and diverse spaces, Bellelay can support sober and effective formats: seminars, working retreats, mediation workshops, knowledge-transfer sessions, and inter-institutional programmes in partnership with competent actors.",

  "MIGRATION: FROM WELCOMING TO CAPACITY TO ACT\nThe on-site migrant training centre creates a direct opportunity: linking integration with contribution, here and elsewhere. Beyond access to employment in Switzerland, the site could also develop complementary skills relevant to reconstruction and stabilisation in the event of return: mediation and conflict resolution, health and medico-social support, basic construction and maintenance competencies, community organisation, and logistics. The aim is to train people who can act in fragile contexts, valuing transferable know-how and an ethic of care and cooperation.",

  "A REGIONAL AND NATIONAL ECOSYSTEM OF FOUNDATIONS AND EXPERTISE\nThis component can build on a national and regional ecosystem of competent foundations and organisations. Nearby, the Fondation Digger in Tavannes is active in producing demining robots, bringing practical expertise to a major post-conflict safety issue. The Fondation Gobat in Tramelan contributes to research and knowledge exchange in the field. Bellelay can function as a platform: hosting training sessions, demonstrations, meetings, awareness programmes, and supporting networking between actors, publics, and territories.",

  "TECHNICAL CAPABILITIES IN THE JURA ARC: FROM PRECISION TO PUBLIC USEFULNESS\nThe Jura Arc has recognised strengths in mechanics and microtechnology, as well as know-how in construction and related trades. These capabilities can contribute to peace-related goals: technologies supporting safety (for example, demining solutions), robust and repairable tools, measurement and monitoring devices, and local production capacity adapted to concrete needs. The key question is how to connect technical excellence with public usefulness, prioritising responsible, accessible, field-oriented solutions.",

  "FROM A THEME TO A PROGRAMME: TRAINING, APPLIED RESEARCH, AND ETHICS\nTo avoid a purely declarative “peace” component, a clear programme is needed: fields of action, partners, formats, target audiences, and expected outcomes. This could take the form of a recurring training cycle (mediation, health, construction, maintenance), project residencies or labs, and low-key knowledge-sharing events. An ethical framework is essential: respect for affected people, caution in narratives, safety, and alignment with legitimate actors. Bellelay can thus become a place for learning, coordination, and the development of solutions, proportionate to the issues and responsibilities involved.",

  "CONCLUSION\nBellelay brings together strong conditions for a credible “peace” component: Switzerland’s recognised role in facilitation and good offices, an already present social reality through migrant training, a nearby network of expert foundations (including Digger in Tavannes and Gobat in Tramelan), and high-level technical skills in the Jura Arc. By linking training, applied research, and cooperation, the site can contribute concretely to prevention, reconstruction, and knowledge transfer—while remaining faithful to the spirit of the place: sobriety, hospitality, and usefulness."
]
        }
      },


      /*contact en*/
       contact: {
          title: "A project, a question? Let’s talk about it.",
          subtitle: "Contact and access",
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

  // Mise à jour les titres
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

    // Mettre à jour les liens de navigation avec le paramètre "lang"
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
