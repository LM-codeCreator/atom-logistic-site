// ============================================
// ATOM LOGISTIC — Traduceri (RO / EN / DE / IT)
// Adaugă o limbă nouă copiind un bloc întreg
// și traducând valorile (nu cheile).
// ============================================

const TRANSLATIONS = {

  ro: {
    meta: {
      title: "Atom Logistic – Transport Frigorific Europa",
      description: "Atom Logistic oferă servicii de transport frigorific comunitar în toată Europa. Flotă DAF & MAN cu semiremorci frigorifice Schmitz Cargobull și Krone Double Deck și Blumenbrete."
    },
    nav: { servicii: "Servicii", flota: "Flotă", cariere: "Cariere", despre: "Despre noi", contact: "Contact", cta: "Solicită Ofertă" },
    hero: {
      eyebrow: "Transport Frigorific · Europa",
      h1_l1: "Calitate la rece,", h1_l2: "în toată", h1_accent: "Europa",
      p: "Transportăm marfa dumneavoastră frigorificată cu precizie și siguranță. Flotă modernă, temperaturi controlate, trasee comunitare confirmate.",
      btn_primary: "Solicită Ofertă", btn_outline: "Descoperă Serviciile",
      gauge_label: "Interval temperatură controlată",
      stat1: "Camioane DAF & MAN", stat2: "Țări acoperite", stat3: "Temperatură controlată", stat4: "Disponibilitate"
    },
    services: {
      eyebrow: "Ce oferim", h2: "Servicii de transport frigorific",
      p: "Suntem specializați exclusiv în transportul la temperatură controlată, cu echipamente dedicate pentru fiecare tip de marfă.",
      s1_title: "Transport Frigorific",
      s1_p: "Transport profesional la temperaturi controlate între −28°C și +28°C. Ideal pentru produse alimentare, farmaceutice și perisabile ce necesită lanț frigorific continuu.",
      s1_li1: "Temperaturi −28°C până la +28°C", s1_li2: "Monitorizare GPS în timp real", s1_li3: "Certificare ATP valabilă", s1_li4: "Documentație completă CMR",
      s2_title: "Double Deck",
      s2_p: "Semiremorcile frigorifice Schmitz Cargobull și Krone Double Deck permit transportul pe două niveluri, maximizând capacitatea de încărcare cu până la 33 de europaleți pe nivel.",
      s2_tag: "2 niveluri · capacitate maximă",
      s3_title: "Blumenbrete",
      s3_p: "Configurație Blumenbrete dedicată transportului florilor și plantelor vii, cu control precis al temperaturii și umidității pentru produse floricole sensibile.",
      s3_tag: "Flori & Plante · specializare floricultură",
      s4_title: "Transport Comunitar European",
      s4_p: "Operăm rute regulate în toată Uniunea Europeană, asigurând transport frigorific intra-comunitar conform normelor europene. Licență de transport internațional, documente CMR și asigurare marfă incluse.",
      countries: ["Germania", "Franța", "Italia", "Spania", "Belgia", "Olanda", "Austria", "Polonia", "Cehia", "Ungaria", "România", "și altele..."]
    },
    fleet: {
      eyebrow: "Parcul auto", h2: "Flotă modernă & fiabilă",
      p: "Parcul nostru auto cuprinde 10 tractoare DAF și MAN echipate cu remorci frigorifice Schmitz Cargobull și Krone de ultimă generație, verificate periodic și dotate cu monitorizare de temperatură în timp real.",
      item1_desc: "Tractor — motor Euro 6, consum optimizat, cabină mare",
      item2_desc: "Tractor — motor Euro 6, consum optimizat, cabină mare",
      item3_title: "Remorci frigorifice Schmitz Cargobull & Krone",
      item3_desc: "Semiremorci frigorifice Double Deck — 2 niveluri de încărcare",
      item4_title: "Configurație Blumenbrete",
      item4_desc: "Adaptate pentru flori și plante vii — control umiditate",
      count_units: "unități", count_trailers: "remorci", count_available: "disponibil",
      route_title: "Distribuție flotă pe rute",
      route1: "Germania – România", route2: "Franța – România", route3: "Italia – România", route4: "Alte destinații UE"
    },
    careers: {
      eyebrow: "Cariere", h2: "Angajăm șoferi profesioniști",
      p: "Căutăm șoferi profesioniști de camion pentru distribuție internațională. Oferim contracte stabile, camioane DAF și MAN de ultimă generație și condiții de lucru de top.",
      li1: "Camioane DAF și MAN de ultimă generație", li2: "Salariu atractiv plus diurnă", li3: "Trasee fixe și planificare eficientă", li4: "Echipament și sprijin complet asigurate",
      btn: "Aplică Acum", eyebrow2: "Distribuție internațională",
      c1: "Austria", c2: "Germania", c3: "Elveția", c4: "Franța", c5: "Italia", c6: "Benelux", c7: "Marea Britanie"
    },
    about: {
      eyebrow: "Despre noi", h2: "De ce Atom Logistic?",
      p: "Suntem specializați exclusiv în transportul frigorific, cu o flotă omogenă și echipamente de ultimă generație pentru lanțul frigorific european.",
      c1_title: "Lanț Frigorific Complet", c1_p: "Temperatura rămâne constantă de la încărcare până la livrare. Zero întreruperi ale lanțului frigorific.",
      c2_title: "Siguranță & Fiabilitate", c2_p: "Camioane DAF și MAN cu sisteme de siguranță avansate, asigurare marfă CMR și monitorizare GPS continuu.",
      c3_title: "Rețea Europeană", c3_p: "Rute regulate în toată UE. Livrăm oriunde în Europa cu documentație completă și trasabilitate deplină.",
      c4_title: "Punctualitate", c4_p: "Respectăm termenele de livrare. Comunicare transparentă și actualizări în timp real privind statusul transportului."
    },
    contact: {
      eyebrow: "Contactează-ne", h2: "Solicită o ofertă",
      p: "Echipa noastră vă răspunde în cel mai scurt timp cu o ofertă personalizată pentru nevoile tale de transport frigorific.",
      email_label: "Email", phone_label: "Telefon", website_label: "Website",
      form_note: "Prin trimitere se deschide clientul tău de email cu mesajul precompletat."
    },
    form: {
      name_label: "Nume complet *", email_label: "Email *", type_label: "Tip transport",
      type_placeholder: "Selectați tipul de transport...",
      opt1: "Transport frigorific standard", opt2: "Double Deck", opt3: "Blumenbrete (flori/plante)", opt4: "Aplicare ca șofer",
      details_label: "Detalii solicitare *", submit: "Trimite Solicitarea", hp_label: "Nu completați acest câmp"
    },
    footer: {
      p: "Servicii profesionale de transport frigorific în toată Europa. Fiabilitate, precizie și temperaturi controlate pentru marfa dumneavoastră.",
      nav_heading: "Navigare", services_heading: "Servicii", rights: "Toate drepturile rezervate."
    }
  },

  en: {
    meta: {
      title: "Atom Logistic – Refrigerated Transport Europe",
      description: "Atom Logistic provides refrigerated community transport services across Europe. DAF & MAN fleet with Schmitz Cargobull and Krone Double Deck refrigerated trailers and Blumenbrete."
    },
    nav: { servicii: "Services", flota: "Fleet", cariere: "Careers", despre: "About Us", contact: "Contact", cta: "Request a Quote" },
    hero: {
      eyebrow: "Refrigerated Transport · Europe",
      h1_l1: "Cool quality,", h1_l2: "all across", h1_accent: "Europe",
      p: "We transport your refrigerated cargo with precision and safety. Modern fleet, controlled temperatures, confirmed community routes.",
      btn_primary: "Request a Quote", btn_outline: "Discover Our Services",
      gauge_label: "Controlled temperature range",
      stat1: "DAF & MAN Trucks", stat2: "Countries Covered", stat3: "Temperature Controlled", stat4: "Availability"
    },
    services: {
      eyebrow: "What We Offer", h2: "Refrigerated Transport Services",
      p: "We specialize exclusively in temperature-controlled transport, with dedicated equipment for every type of cargo.",
      s1_title: "Refrigerated Transport",
      s1_p: "Professional transport at controlled temperatures between −28°C and +28°C. Ideal for food, pharmaceutical and perishable products that require an unbroken cold chain.",
      s1_li1: "Temperatures −28°C to +28°C", s1_li2: "Real-time GPS tracking", s1_li3: "Valid ATP certification", s1_li4: "Complete CMR documentation",
      s2_title: "Double Deck",
      s2_p: "Schmitz Cargobull and Krone Double Deck refrigerated trailers allow transport on two levels, maximizing loading capacity with up to 33 europallets per level.",
      s2_tag: "2 levels · maximum capacity",
      s3_title: "Blumenbrete",
      s3_p: "Dedicated Blumenbrete configuration for transporting cut flowers and live plants, with precise temperature and humidity control for sensitive floricultural products.",
      s3_tag: "Flowers & Plants · floriculture specialists",
      s4_title: "European Community Transport",
      s4_p: "We operate regular routes across the European Union, ensuring intra-community refrigerated transport in line with European regulations. International transport licence, CMR documents and cargo insurance included.",
      countries: ["Germany", "France", "Italy", "Spain", "Belgium", "Netherlands", "Austria", "Poland", "Czech Republic", "Hungary", "Romania", "and more..."]
    },
    fleet: {
      eyebrow: "Our Fleet", h2: "Modern & Reliable Fleet",
      p: "Our fleet includes 10 DAF and MAN tractor units equipped with the latest generation Schmitz Cargobull and Krone refrigerated trailers, regularly inspected and fitted with real-time temperature monitoring.",
      item1_desc: "Tractor unit — Euro 6 engine, optimized fuel consumption, large cab",
      item2_desc: "Tractor unit — Euro 6 engine, optimized fuel consumption, large cab",
      item3_title: "Schmitz Cargobull & Krone Refrigerated Trailers",
      item3_desc: "Double Deck refrigerated trailers — 2 loading levels",
      item4_title: "Blumenbrete Configuration",
      item4_desc: "Adapted for flowers and live plants — humidity control",
      count_units: "units", count_trailers: "trailers", count_available: "available",
      route_title: "Fleet Distribution by Route",
      route1: "Germany – Romania", route2: "France – Romania", route3: "Italy – Romania", route4: "Other EU destinations"
    },
    careers: {
      eyebrow: "Careers", h2: "We're Hiring Professional Drivers",
      p: "We are looking for professional truck drivers for international distribution. We offer stable contracts, the latest generation DAF and MAN trucks, and top working conditions.",
      li1: "Latest generation DAF and MAN trucks", li2: "Attractive salary plus daily allowance", li3: "Fixed routes and efficient planning", li4: "Full equipment and support provided",
      btn: "Apply Now", eyebrow2: "International Distribution",
      c1: "Austria", c2: "Germany", c3: "Switzerland", c4: "France", c5: "Italy", c6: "Benelux", c7: "United Kingdom"
    },
    about: {
      eyebrow: "About Us", h2: "Why Atom Logistic?",
      p: "We specialize exclusively in refrigerated transport, with a homogeneous fleet and the latest generation equipment for the European cold chain.",
      c1_title: "Complete Cold Chain", c1_p: "Temperature remains constant from loading to delivery. Zero breaks in the cold chain.",
      c2_title: "Safety & Reliability", c2_p: "DAF and MAN trucks with advanced safety systems, CMR cargo insurance and continuous GPS monitoring.",
      c3_title: "European Network", c3_p: "Regular routes across the EU. We deliver anywhere in Europe with complete documentation and full traceability.",
      c4_title: "Punctuality", c4_p: "We meet delivery deadlines. Transparent communication and real-time updates on shipment status."
    },
    contact: {
      eyebrow: "Contact Us", h2: "Request a Quote",
      p: "Our team will get back to you as soon as possible with a personalized quote for your refrigerated transport needs.",
      email_label: "Email", phone_label: "Phone", website_label: "Website",
      form_note: "Submitting opens your email client with the message pre-filled."
    },
    form: {
      name_label: "Full Name *", email_label: "Email *", type_label: "Transport Type",
      type_placeholder: "Select transport type...",
      opt1: "Standard refrigerated transport", opt2: "Double Deck", opt3: "Blumenbrete (flowers/plants)", opt4: "Driver application",
      details_label: "Request Details *", submit: "Send Request", hp_label: "Please leave this field empty"
    },
    footer: {
      p: "Professional refrigerated transport services across Europe. Reliability, precision and controlled temperatures for your cargo.",
      nav_heading: "Navigation", services_heading: "Services", rights: "All rights reserved."
    }
  },

  de: {
    meta: {
      title: "Atom Logistic – Kühltransport Europa",
      description: "Atom Logistic bietet innergemeinschaftlichen Kühltransport in ganz Europa. DAF- & MAN-Flotte mit Schmitz Cargobull und Krone Double-Deck-Kühlaufliegern sowie Blumenbrete."
    },
    nav: { servicii: "Leistungen", flota: "Flotte", cariere: "Karriere", despre: "Über uns", contact: "Kontakt", cta: "Angebot anfordern" },
    hero: {
      eyebrow: "Kühltransport · Europa",
      h1_l1: "Kühle Qualität,", h1_l2: "in ganz", h1_accent: "Europa",
      p: "Wir transportieren Ihre gekühlte Fracht präzise und sicher. Moderne Flotte, kontrollierte Temperaturen, bestätigte innergemeinschaftliche Routen.",
      btn_primary: "Angebot anfordern", btn_outline: "Leistungen entdecken",
      gauge_label: "Kontrollierter Temperaturbereich",
      stat1: "DAF- & MAN-LKW", stat2: "Abgedeckte Länder", stat3: "Temperaturkontrolle", stat4: "Verfügbarkeit"
    },
    services: {
      eyebrow: "Unser Angebot", h2: "Kühltransport-Dienstleistungen",
      p: "Wir sind ausschließlich auf temperaturgeführten Transport spezialisiert, mit dedizierter Ausrüstung für jede Frachtart.",
      s1_title: "Kühltransport",
      s1_p: "Professioneller Transport bei kontrollierten Temperaturen zwischen −28°C und +28°C. Ideal für Lebensmittel, Pharmazeutika und verderbliche Waren, die eine durchgehende Kühlkette benötigen.",
      s1_li1: "Temperaturen −28°C bis +28°C", s1_li2: "Echtzeit-GPS-Ortung", s1_li3: "Gültige ATP-Zertifizierung", s1_li4: "Vollständige CMR-Dokumentation",
      s2_title: "Double Deck",
      s2_p: "Die Kühlauflieger Schmitz Cargobull und Krone Double Deck ermöglichen den Transport auf zwei Ebenen und maximieren die Ladekapazität mit bis zu 33 Europaletten pro Ebene.",
      s2_tag: "2 Ebenen · maximale Kapazität",
      s3_title: "Blumenbrete",
      s3_p: "Spezielle Blumenbrete-Konfiguration für den Transport von Schnittblumen und lebenden Pflanzen, mit präziser Temperatur- und Feuchtigkeitskontrolle für empfindliche Blumenprodukte.",
      s3_tag: "Blumen & Pflanzen · Spezialisierung Floristik",
      s4_title: "Europäischer Gemeinschaftstransport",
      s4_p: "Wir betreiben regelmäßige Routen in der gesamten Europäischen Union und gewährleisten innergemeinschaftlichen Kühltransport gemäß europäischen Vorschriften. Internationale Transportlizenz, CMR-Dokumente und Frachtversicherung inbegriffen.",
      countries: ["Deutschland", "Frankreich", "Italien", "Spanien", "Belgien", "Niederlande", "Österreich", "Polen", "Tschechien", "Ungarn", "Rumänien", "und weitere..."]
    },
    fleet: {
      eyebrow: "Unser Fuhrpark", h2: "Moderne & zuverlässige Flotte",
      p: "Unser Fuhrpark umfasst 10 DAF- und MAN-Zugmaschinen, ausgestattet mit Kühlaufliegern der neuesten Generation von Schmitz Cargobull und Krone, regelmäßig geprüft und mit Echtzeit-Temperaturüberwachung ausgestattet.",
      item1_desc: "Zugmaschine — Euro-6-Motor, optimierter Verbrauch, große Kabine",
      item2_desc: "Zugmaschine — Euro-6-Motor, optimierter Verbrauch, große Kabine",
      item3_title: "Kühlauflieger Schmitz Cargobull & Krone",
      item3_desc: "Double-Deck-Kühlauflieger — 2 Ladeebenen",
      item4_title: "Blumenbrete-Konfiguration",
      item4_desc: "Angepasst für Blumen und lebende Pflanzen — Feuchtigkeitskontrolle",
      count_units: "Einheiten", count_trailers: "Auflieger", count_available: "verfügbar",
      route_title: "Flottenverteilung nach Routen",
      route1: "Deutschland – Rumänien", route2: "Frankreich – Rumänien", route3: "Italien – Rumänien", route4: "Andere EU-Ziele"
    },
    careers: {
      eyebrow: "Karriere", h2: "Wir stellen Berufskraftfahrer ein",
      p: "Wir suchen Berufskraftfahrer für die internationale Distribution. Wir bieten stabile Verträge, DAF- und MAN-LKW der neuesten Generation und erstklassige Arbeitsbedingungen.",
      li1: "DAF- und MAN-LKW der neuesten Generation", li2: "Attraktives Gehalt plus Spesen", li3: "Feste Routen und effiziente Planung", li4: "Vollständige Ausrüstung und Unterstützung",
      btn: "Jetzt bewerben", eyebrow2: "Internationale Distribution",
      c1: "Österreich", c2: "Deutschland", c3: "Schweiz", c4: "Frankreich", c5: "Italien", c6: "Benelux", c7: "Vereinigtes Königreich"
    },
    about: {
      eyebrow: "Über uns", h2: "Warum Atom Logistic?",
      p: "Wir sind ausschließlich auf Kühltransport spezialisiert, mit einer homogenen Flotte und modernster Ausrüstung für die europäische Kühlkette.",
      c1_title: "Durchgehende Kühlkette", c1_p: "Die Temperatur bleibt vom Beladen bis zur Lieferung konstant. Keine Unterbrechungen der Kühlkette.",
      c2_title: "Sicherheit & Zuverlässigkeit", c2_p: "DAF- und MAN-LKW mit fortschrittlichen Sicherheitssystemen, CMR-Frachtversicherung und kontinuierlicher GPS-Überwachung.",
      c3_title: "Europäisches Netzwerk", c3_p: "Regelmäßige Routen in der gesamten EU. Wir liefern überall in Europa mit vollständiger Dokumentation und lückenloser Rückverfolgbarkeit.",
      c4_title: "Pünktlichkeit", c4_p: "Wir halten Liefertermine ein. Transparente Kommunikation und Echtzeit-Updates zum Sendungsstatus."
    },
    contact: {
      eyebrow: "Kontaktieren Sie uns", h2: "Angebot anfordern",
      p: "Unser Team meldet sich schnellstmöglich mit einem individuellen Angebot für Ihren Kühltransportbedarf.",
      email_label: "E-Mail", phone_label: "Telefon", website_label: "Webseite",
      form_note: "Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorausgefüllten Nachricht."
    },
    form: {
      name_label: "Vollständiger Name *", email_label: "E-Mail *", type_label: "Transportart",
      type_placeholder: "Transportart auswählen...",
      opt1: "Standard-Kühltransport", opt2: "Double Deck", opt3: "Blumenbrete (Blumen/Pflanzen)", opt4: "Bewerbung als Fahrer",
      details_label: "Anfragedetails *", submit: "Anfrage senden", hp_label: "Bitte dieses Feld leer lassen"
    },
    footer: {
      p: "Professionelle Kühltransportdienstleistungen in ganz Europa. Zuverlässigkeit, Präzision und kontrollierte Temperaturen für Ihre Fracht.",
      nav_heading: "Navigation", services_heading: "Leistungen", rights: "Alle Rechte vorbehalten."
    }
  },

  it: {
    meta: {
      title: "Atom Logistic – Trasporto Frigorifero Europa",
      description: "Atom Logistic offre servizi di trasporto frigorifero comunitario in tutta Europa. Flotta DAF & MAN con semirimorchi frigoriferi Schmitz Cargobull e Krone Double Deck e Blumenbrete."
    },
    nav: { servicii: "Servizi", flota: "Flotta", cariere: "Carriere", despre: "Chi siamo", contact: "Contatti", cta: "Richiedi un preventivo" },
    hero: {
      eyebrow: "Trasporto Frigorifero · Europa",
      h1_l1: "Qualità a freddo,", h1_l2: "in tutta", h1_accent: "Europa",
      p: "Trasportiamo la vostra merce refrigerata con precisione e sicurezza. Flotta moderna, temperature controllate, rotte comunitarie confermate.",
      btn_primary: "Richiedi un preventivo", btn_outline: "Scopri i servizi",
      gauge_label: "Intervallo di temperatura controllata",
      stat1: "Camion DAF e MAN", stat2: "Paesi coperti", stat3: "Temperatura controllata", stat4: "Disponibilità"
    },
    services: {
      eyebrow: "Cosa offriamo", h2: "Servizi di trasporto frigorifero",
      p: "Siamo specializzati esclusivamente nel trasporto a temperatura controllata, con attrezzature dedicate per ogni tipo di merce.",
      s1_title: "Trasporto Frigorifero",
      s1_p: "Trasporto professionale a temperature controllate tra −28°C e +28°C. Ideale per prodotti alimentari, farmaceutici e deperibili che richiedono una catena del freddo continua.",
      s1_li1: "Temperature da −28°C a +28°C", s1_li2: "Monitoraggio GPS in tempo reale", s1_li3: "Certificazione ATP valida", s1_li4: "Documentazione CMR completa",
      s2_title: "Double Deck",
      s2_p: "I semirimorchi frigoriferi Schmitz Cargobull e Krone Double Deck consentono il trasporto su due livelli, massimizzando la capacità di carico fino a 33 europallet per livello.",
      s2_tag: "2 livelli · capacità massima",
      s3_title: "Blumenbrete",
      s3_p: "Configurazione Blumenbrete dedicata al trasporto di fiori recisi e piante vive, con controllo preciso di temperatura e umidità per prodotti floricoli sensibili.",
      s3_tag: "Fiori & Piante · specializzazione floricoltura",
      s4_title: "Trasporto Comunitario Europeo",
      s4_p: "Operiamo rotte regolari in tutta l'Unione Europea, garantendo il trasporto frigorifero intracomunitario in conformità con le normative europee. Licenza di trasporto internazionale, documenti CMR e assicurazione merci incluse.",
      countries: ["Germania", "Francia", "Italia", "Spagna", "Belgio", "Paesi Bassi", "Austria", "Polonia", "Repubblica Ceca", "Ungheria", "Romania", "e altri..."]
    },
    fleet: {
      eyebrow: "Il nostro parco mezzi", h2: "Flotta moderna e affidabile",
      p: "Il nostro parco mezzi comprende 10 trattori DAF e MAN dotati di semirimorchi frigoriferi Schmitz Cargobull e Krone di ultima generazione, controllati periodicamente e dotati di monitoraggio della temperatura in tempo reale.",
      item1_desc: "Trattore — motore Euro 6, consumi ottimizzati, cabina ampia",
      item2_desc: "Trattore — motore Euro 6, consumi ottimizzati, cabina ampia",
      item3_title: "Semirimorchi frigoriferi Schmitz Cargobull e Krone",
      item3_desc: "Semirimorchi frigoriferi Double Deck — 2 livelli di carico",
      item4_title: "Configurazione Blumenbrete",
      item4_desc: "Adattati per fiori e piante vive — controllo dell'umidità",
      count_units: "unità", count_trailers: "semirimorchi", count_available: "disponibile",
      route_title: "Distribuzione della flotta per rotta",
      route1: "Germania – Romania", route2: "Francia – Romania", route3: "Italia – Romania", route4: "Altre destinazioni UE"
    },
    careers: {
      eyebrow: "Carriere", h2: "Assumiamo autisti professionisti",
      p: "Cerchiamo autisti professionisti per la distribuzione internazionale. Offriamo contratti stabili, camion DAF e MAN di ultima generazione e condizioni di lavoro di alto livello.",
      li1: "Camion DAF e MAN di ultima generazione", li2: "Stipendio interessante più diaria", li3: "Percorsi fissi e pianificazione efficiente", li4: "Attrezzatura e supporto completi garantiti",
      btn: "Candidati ora", eyebrow2: "Distribuzione internazionale",
      c1: "Austria", c2: "Germania", c3: "Svizzera", c4: "Francia", c5: "Italia", c6: "Benelux", c7: "Regno Unito"
    },
    about: {
      eyebrow: "Chi siamo", h2: "Perché Atom Logistic?",
      p: "Siamo specializzati esclusivamente nel trasporto frigorifero, con una flotta omogenea e attrezzature di ultima generazione per la catena del freddo europea.",
      c1_title: "Catena del Freddo Completa", c1_p: "La temperatura rimane costante dal carico alla consegna. Zero interruzioni della catena del freddo.",
      c2_title: "Sicurezza & Affidabilità", c2_p: "Camion DAF e MAN con sistemi di sicurezza avanzati, assicurazione merci CMR e monitoraggio GPS continuo.",
      c3_title: "Rete Europea", c3_p: "Rotte regolari in tutta l'UE. Consegniamo ovunque in Europa con documentazione completa e piena tracciabilità.",
      c4_title: "Puntualità", c4_p: "Rispettiamo le scadenze di consegna. Comunicazione trasparente e aggiornamenti in tempo reale sullo stato della spedizione."
    },
    contact: {
      eyebrow: "Contattaci", h2: "Richiedi un preventivo",
      p: "Il nostro team vi risponderà al più presto con un preventivo personalizzato per le vostre esigenze di trasporto frigorifero.",
      email_label: "Email", phone_label: "Telefono", website_label: "Sito web",
      form_note: "L'invio apre il tuo client email con il messaggio precompilato."
    },
    form: {
      name_label: "Nome completo *", email_label: "Email *", type_label: "Tipo di trasporto",
      type_placeholder: "Seleziona il tipo di trasporto...",
      opt1: "Trasporto frigorifero standard", opt2: "Double Deck", opt3: "Blumenbrete (fiori/piante)", opt4: "Candidatura come autista",
      details_label: "Dettagli richiesta *", submit: "Invia richiesta", hp_label: "Non compilare questo campo"
    },
    footer: {
      p: "Servizi professionali di trasporto frigorifero in tutta Europa. Affidabilità, precisione e temperature controllate per la vostra merce.",
      nav_heading: "Navigazione", services_heading: "Servizi", rights: "Tutti i diritti riservati."
    }
  }

};
