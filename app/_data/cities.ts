// Datos de las 10 capitales de provincia donde Abaco Ingeniería tiene
// landings dedicadas. Una capital aparece en varios servicios; el contexto
// local cambia según el servicio para no generar contenido duplicado.

export type Servicio = "licencia-actividad" | "peritaciones" | "tasaciones";

export interface CityData {
  slug: string;              // "madrid"
  nombre: string;            // "Madrid"
  preposicion: "en" | "en";  // "en Madrid"
  comunidad: string;         // "Comunidad de Madrid"
  provincia: string;         // "Madrid"
  ayuntamientoLink?: string; // URL sede electrónica del ayuntamiento (opcional)
  comunidadLink?: string;    // URL portal autonómico
}

/** Las 10 capitales que cubrimos */
export const CITIES: CityData[] = [
  {
    slug: "madrid",
    nombre: "Madrid",
    preposicion: "en",
    comunidad: "Comunidad de Madrid",
    provincia: "Madrid",
    ayuntamientoLink: "https://sede.madrid.es",
    comunidadLink: "https://www.comunidad.madrid",
  },
  {
    slug: "sevilla",
    nombre: "Sevilla",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Sevilla",
    ayuntamientoLink: "https://sede.sevilla.org",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "malaga",
    nombre: "Málaga",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Málaga",
    ayuntamientoLink: "https://sede.malaga.eu",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "granada",
    nombre: "Granada",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Granada",
    ayuntamientoLink: "https://sede.granada.org",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "cordoba",
    nombre: "Córdoba",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Córdoba",
    ayuntamientoLink: "https://sede.cordoba.es",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "cadiz",
    nombre: "Cádiz",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Cádiz",
    ayuntamientoLink: "https://sede.cadiz.es",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "huelva",
    nombre: "Huelva",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Huelva",
    ayuntamientoLink: "https://sede.huelva.es",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "jaen",
    nombre: "Jaén",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Jaén",
    ayuntamientoLink: "https://sede.aytojaen.es",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
  {
    slug: "murcia",
    nombre: "Murcia",
    preposicion: "en",
    comunidad: "Región de Murcia",
    provincia: "Murcia",
    ayuntamientoLink: "https://sede.murcia.es",
    comunidadLink: "https://www.carm.es",
  },
  {
    slug: "almeria",
    nombre: "Almería",
    preposicion: "en",
    comunidad: "Andalucía",
    provincia: "Almería",
    ayuntamientoLink: "https://sede.almeriaciudad.es",
    comunidadLink: "https://www.juntadeandalucia.es",
  },
];

export const SERVICIOS = {
  "licencia-actividad": {
    nombre: "Licencias de Actividad",
    nombreCorto: "Licencia de actividad",
    descripcionCorta: "Proyecto técnico y tramitación de licencias de apertura, declaraciones responsables y proyectos de actividad para locales, comercios, hostelería e industrias.",
    hubPath: "/licencia-de-actividad",
    pathPrefix: "/licencia-actividad-",
  },
  peritaciones: {
    nombre: "Peritaciones Judiciales",
    nombreCorto: "Peritaciones",
    descripcionCorta: "Informes periciales de ingeniería para juzgados, abogados, aseguradoras y particulares. Patologías constructivas, valoraciones, incendios, daños, accidentes y ratificación en sala.",
    hubPath: "/peritaciones-judiciales",
    pathPrefix: "/peritaciones-",
  },
  tasaciones: {
    nombre: "Tasaciones Técnicas",
    nombreCorto: "Tasaciones",
    descripcionCorta: "Tasaciones técnicas y valoraciones de inmuebles, maquinaria, vehículos e industrias para herencias, divorcios, operaciones financieras y procedimientos administrativos.",
    hubPath: "/tasaciones",
    pathPrefix: "/tasaciones-",
  },
} as const;

/** Devuelve la ruta absoluta a una landing de servicio + ciudad */
export function cityServicePath(servicio: Servicio, citySlug: string): string {
  return `${SERVICIOS[servicio].pathPrefix}${citySlug}`;
}

/**
 * Contexto local único por ciudad y servicio.
 * Cada combinación tiene ~150-250 palabras propias para evitar contenido
 * duplicado y dar relevancia local real.
 */
export const CITY_CONTEXT: Record<Servicio, Record<string, string>> = {
  "licencia-actividad": {
    madrid:
      "Madrid concentra el mayor volumen de aperturas de locales de España: oficinas, comercio, hostelería y centros de servicios. El Ayuntamiento de Madrid distingue entre actividades inocuas (sujetas a declaración responsable) y calificadas (que pueden requerir licencia previa), siguiendo la ORCOMA y la Ordenanza de Apoyo a la Actividad Económica. Las zonas con más actividad son Centro, Salamanca, Chamberí y los grandes ejes comerciales (Gran Vía, Castellana, Bravo Murillo). Para hostelería con cocina hay que justificar salida de humos por cubierta y aislamiento acústico según la Ordenanza de Protección contra la Contaminación Acústica. Tramitamos también ampliaciones, cambios de titularidad y regularizaciones para locales con actividad previa sin documentación.",
    sevilla:
      "Sevilla mantiene un fuerte ecosistema comercial y hostelero, especialmente en el casco antiguo (Triana, Santa Cruz, San Vicente, Alfalfa) y en los polígonos industriales (Carretera Amarilla, Pino Montano, Calonge). La Gerencia de Urbanismo del Ayuntamiento de Sevilla aplica la normativa autonómica de Andalucía (Ley 7/2007 GICA, Decreto 297/1995) para actividades calificadas. La hostelería con terraza está fuertemente regulada por la Ordenanza Municipal de Veladores. Para bares con cocina o música amplificada hay que cumplir requisitos específicos de salida de humos, aislamiento acústico y limitador-registrador de sonido.",
    malaga:
      "Málaga es uno de los mercados más activos de aperturas de España, con un peso enorme de la hostelería costera (Pedregalejo, El Palo, Centro, Soho, Muelle Uno) y un crecimiento muy fuerte del sector tecnológico (Málaga TechPark, Soho). El Ayuntamiento de Málaga aplica la normativa autonómica de Andalucía y su ordenanza propia para actividades comerciales y de ocio. Para hostelería costera hay particularidades sobre veladores en zona marítima y aislamiento acústico en zonas residenciales. También tramitamos en Torremolinos, Marbella, Fuengirola, Benalmádena, Estepona y otros municipios de la Costa del Sol.",
    granada:
      "Granada combina hostelería universitaria, turismo cultural en Albayzín y Centro, y comercio en las zonas comerciales (Pedro Antonio de Alarcón, Recogidas, Reyes Católicos). El Albayzín es Patrimonio de la Humanidad y aplica condicionantes específicos de protección. La Junta de Andalucía y el Ayuntamiento de Granada exigen proyectos técnicos rigurosos para actividades en cascos históricos. Para hostelería con tapeo, terraza o música hay particularidades acústicas. También tramitamos en municipios de la comarca: Motril, Almuñécar, Salobreña, Loja.",
    cordoba:
      "Córdoba mantiene una actividad comercial y hostelera estable, con foco en el comercio del Centro Comercial Abierto (Cruz Conde, Tendillas, Gran Capitán) y la hostelería patrimonial en la Judería, La Ribera y San Lorenzo. Los polígonos industriales (Las Quemadas, Chinales, Tecnocórdoba) concentran actividad industrial y logística. El Ayuntamiento de Córdoba aplica la normativa autonómica andaluza. La hostelería en entornos patrimoniales tiene requisitos específicos de protección y compatibilidad estética. Tramitamos también ampliaciones, cambios de titular y regularizaciones.",
    cadiz:
      "Cádiz tiene un tejido económico marcado por la hostelería costera, el sector pesquero y portuario, y el comercio del casco histórico. El Ayuntamiento de Cádiz aplica la normativa de la Junta de Andalucía y sus ordenanzas propias para actividades en zonas patrimoniales y portuarias. La Bahía de Cádiz concentra actividad industrial en San Fernando, Puerto Real y Puerto de Santa María, donde también trabajamos. Para hostelería costera y zonas turísticas hay particularidades sobre veladores y aislamiento acústico.",
    huelva:
      "Huelva concentra una fuerte actividad industrial vinculada al Polo Químico y al sector portuario, con polígonos en Punta del Sebo, Tartessos y la Zona Franca. El comercio y la hostelería se concentran en el casco urbano y en zonas comerciales. El Ayuntamiento de Huelva aplica normativa autonómica y específica para actividades industriales con incidencia ambiental. Para naves y almacenes hay requisitos específicos de contraincendios, atmósferas explosivas y gestión de residuos. También tramitamos en Aljaraque, Punta Umbría, Cartaya, Ayamonte y municipios de la costa.",
    jaen:
      "Jaén es un mercado fuertemente vinculado al olivar y a las almazaras, además de un comercio urbano consolidado y hostelería del casco histórico (Plaza de Santa María, Catedral, Bernabé Soriano). El Ayuntamiento de Jaén aplica la normativa autonómica andaluza, con particularidades para almazaras, cooperativas oleícolas, oleoturismo y otras actividades del sector agroalimentario. Tramitamos también en municipios productores: Úbeda, Baeza, Linares, Andújar, Martos.",
    murcia:
      "Murcia combina un fuerte tejido comercial urbano (Centro, Trapería, Platería, Cardenal Belluga), hostelería del casco antiguo, sector industrial (Polígono Oeste, Cabezo Cortao, La Polvorista) y la huerta. El Ayuntamiento de Murcia y la CARM (Comunidad Autónoma de la Región de Murcia) aplican normativa específica para actividades calificadas. Para hostelería en la zona del Centro hay particularidades sobre veladores, terrazas y aislamiento acústico. Tramitamos también en Cartagena, Lorca, Molina de Segura, Alcantarilla, Águilas y Mazarrón.",
    almeria:
      "Almería tiene un mercado de aperturas marcado por la hostelería costera (Cabo de Gata, Aguadulce, Roquetas), la agricultura intensiva (almacenes hortofrutícolas en El Ejido, Vícar, Roquetas) y el comercio urbano. El Ayuntamiento de Almería aplica la normativa autonómica andaluza. Trabajamos también en los municipios de la provincia: El Ejido, Roquetas de Mar, Vícar, Huércal-Overa, Adra, Berja, Cuevas del Almanzora, Vera, Mojácar y Carboneras. Tenemos landings dedicadas para los municipios con más volumen de aperturas.",
  },
  peritaciones: {
    madrid:
      "Madrid concentra la mayor demanda de peritaciones judiciales de España: patologías constructivas en comunidades de propietarios, daños por humedades y aluminosis, reclamaciones a aseguradoras, peritajes laborales y de accidentes, valoraciones por herencias y divorcios, peritajes de incendios y peritajes en obras nuevas (defectos de ejecución, Ley de Ordenación de la Edificación). Comparecemos ante los juzgados de Madrid capital y provincia para ratificar informes y responder preguntas del juez y las partes. Trabajamos con bufetes y aseguradoras de toda la Comunidad de Madrid.",
    sevilla:
      "Sevilla es una de las plazas con más actividad pericial de Andalucía. Realizamos informes para los juzgados de Sevilla y provincia, especialmente peritajes constructivos (patologías, humedades, grietas, aluminosis), valoraciones de daños, peritajes laborales y de accidentes de tráfico, peritajes de incendios y peritajes en obras nuevas o reformas. Comparecemos para ratificar en sala. Trabajamos también con bufetes especializados en derecho de la edificación y derecho de seguros.",
    malaga:
      "Málaga concentra una alta demanda pericial vinculada a la actividad inmobiliaria y de aseguradoras: patologías constructivas en zonas costeras (humedades, salinidad, fisuras), valoraciones de daños por temporales, peritajes en obras nuevas, peritajes de incendios y peritajes laborales. Comparecemos ante los juzgados de Málaga capital, Marbella, Estepona, Torremolinos y resto de la provincia. Trabajamos con bufetes especializados en derecho de la edificación y derecho de seguros.",
    granada:
      "Granada presenta una demanda pericial específica vinculada a su patrimonio: patologías constructivas en edificios protegidos, humedades en cascos antiguos, peritajes de obras nuevas con condicionantes patrimoniales, valoraciones de inmuebles en zonas turísticas y peritajes laborales y de accidentes. Comparecemos ante los juzgados de Granada capital y Costa Tropical (Motril, Almuñécar, Salobreña).",
    cordoba:
      "Córdoba demanda peritajes constructivos en cascos patrimoniales (Judería, San Basilio, San Lorenzo, Santa Marina), valoraciones por herencias y divorcios, peritajes de obras nuevas y reformas, peritajes laborales y de accidentes. La actividad industrial de los polígonos también genera peritajes de daños, incendios y patologías. Comparecemos ante los juzgados de Córdoba capital y provincia.",
    cadiz:
      "Cádiz tiene una demanda pericial marcada por la actividad portuaria, pesquera e industrial, además de los peritajes urbanos y costeros: patologías en edificios próximos al mar (humedades, salinidad, carbonatación), valoraciones, peritajes laborales y de accidentes. Comparecemos ante los juzgados de Cádiz, San Fernando, Puerto Real, Puerto de Santa María, Jerez y la Bahía.",
    huelva:
      "Huelva tiene una demanda pericial vinculada al sector industrial (Polo Químico, puerto), agroalimentario y costero. Realizamos peritajes de daños, incendios, accidentes laborales, patologías constructivas en zonas costeras y valoraciones. Comparecemos ante los juzgados de Huelva capital, Aljaraque, Ayamonte, La Palma del Condado y municipios de la provincia.",
    jaen:
      "Jaén tiene una demanda pericial vinculada al sector oleícola (almazaras, cooperativas), al comercio rural y a la actividad agraria. Realizamos peritajes de daños, incendios en almazaras, accidentes laborales en aceitunas y olivar, patologías constructivas y valoraciones. Comparecemos ante los juzgados de Jaén capital, Úbeda, Baeza, Linares, Andújar y Martos.",
    murcia:
      "Murcia concentra una alta demanda pericial vinculada al sector agroalimentario (huerta, conservas, almacenes), industrial y urbano. Realizamos peritajes de patologías constructivas, humedades, accidentes laborales, daños en industrias, valoraciones e incendios. Comparecemos ante los juzgados de Murcia capital, Cartagena, Lorca, Molina de Segura y resto de la Región.",
    almeria:
      "Almería tiene una demanda pericial vinculada a la agricultura intensiva (almacenes hortofrutícolas, invernaderos, plantas de manipulado), construcción costera y comercio. Realizamos peritajes de daños por temporales, accidentes laborales, patologías constructivas, incendios y valoraciones. Comparecemos ante los juzgados de Almería capital, El Ejido, Roquetas, Huércal-Overa, Vera y resto de la provincia.",
  },
  tasaciones: {
    madrid:
      "Madrid tiene un mercado de tasaciones técnicas muy activo por el volumen de operaciones inmobiliarias, herencias, divorcios y procedimientos judiciales. Realizamos tasaciones de viviendas, locales comerciales, oficinas, naves industriales, plazas de garaje, trasteros, suelo urbano y maquinaria. También tasamos vehículos clásicos y de colección. Nuestras tasaciones son admitidas en juzgados, ante notarios y para presentación ante Hacienda en ITP, ISD y otros tributos.",
    sevilla:
      "Sevilla genera una demanda alta de tasaciones por su volumen de transacciones inmobiliarias, herencias y procedimientos judiciales. Tasamos viviendas, locales, oficinas, naves del polígono, suelo y maquinaria. Especial demanda para tasaciones de inmuebles en cascos históricos (Santa Cruz, San Vicente, Alfalfa) con condicionantes patrimoniales que afectan al valor.",
    malaga:
      "Málaga combina un mercado inmobiliario muy activo (costa, ciudad, urbanizaciones) con una alta demanda de tasaciones para operaciones, herencias y procedimientos judiciales. Tasamos viviendas, apartamentos turísticos, locales costeros, naves del polígono y maquinaria. Especialistas en tasaciones de inmuebles costeros y de la Costa del Sol.",
    granada:
      "Granada demanda tasaciones de inmuebles en cascos patrimoniales (Albayzín, Realejo, Centro), viviendas vacacionales y locales hosteleros. También tasamos suelo rural, almacenes y maquinaria del sector agrícola y comercial. Trabajamos para herencias, divorcios, procedimientos judiciales y Hacienda.",
    cordoba:
      "Córdoba demanda tasaciones de inmuebles en cascos patrimoniales (Judería, San Basilio), polígonos industriales, comercio y maquinaria. La actividad agrícola y oleícola genera tasaciones específicas de almazaras, cooperativas y fincas. Trabajamos para herencias, divorcios y procedimientos judiciales.",
    cadiz:
      "Cádiz demanda tasaciones marcadas por la actividad costera (viviendas, locales playa, urbanizaciones), portuaria (instalaciones, naves) e industrial (Bahía de Cádiz). Trabajamos en toda la provincia incluida Jerez, San Fernando, Puerto Real, Puerto de Santa María.",
    huelva:
      "Huelva demanda tasaciones vinculadas al sector industrial (Polo Químico, puerto), agroalimentario (fresa, frutos rojos) e inmobiliario costero (Punta Umbría, Mazagón). Tasamos viviendas, locales, naves, instalaciones industriales, maquinaria y suelo. Trabajamos en toda la provincia.",
    jaen:
      "Jaén demanda tasaciones de inmuebles, fincas olivareras, almazaras, cooperativas, comercios y maquinaria del sector oleícola. Trabajamos para herencias, divorcios, procedimientos judiciales y Hacienda en toda la provincia: Úbeda, Baeza, Linares, Andújar, Martos.",
    murcia:
      "Murcia demanda tasaciones del sector agroalimentario (almacenes, conserveras), industrial y urbano. Tasamos viviendas, locales, naves, maquinaria, fincas de huerta y suelo. Trabajamos en toda la Región incluida Cartagena, Lorca y Molina de Segura.",
    almeria:
      "Almería demanda tasaciones del sector agrícola intensivo (invernaderos, almacenes hortofrutícolas, plantas de manipulado), inmuebles costeros (Cabo de Gata, Aguadulce, Roquetas) y maquinaria agraria. Trabajamos en toda la provincia.",
  },
};

/**
 * FAQ específicas por ciudad y servicio.
 * Mínimo 4-5 preguntas únicas por combinación, mencionando ayuntamientos,
 * juzgados, organismos y particularidades locales.
 */
export const CITY_FAQS: Record<Servicio, Record<string, { q: string; a: string }[]>> = {
  "licencia-actividad": {
    madrid: [
      { q: "¿Cómo se tramita la licencia de actividad en Madrid?", a: "En el Ayuntamiento de Madrid el régimen depende del tipo de actividad: declaración responsable para actividades inocuas (la mayoría de comercio y oficinas), comunicación previa con verificación posterior o licencia urbanística para actividades calificadas (hostelería con cocina, ocio, espectáculos). La tramitación es 100% telemática a través de la sede electrónica del Ayuntamiento. Nos encargamos del proyecto técnico y de la presentación con nuestro certificado digital." },
      { q: "¿Cuánto tarda la licencia en Madrid?", a: "Con declaración responsable, el local puede abrir en el momento de la presentación. La revisión municipal puede tardar 1-3 meses pero no impide la actividad. Para licencias previas el plazo va de 2 a 6 meses." },
      { q: "¿Qué normativa aplica en Madrid?", a: "Ley 2/2012 de la Comunidad de Madrid, ORCOMA (Ordenanza Reguladora de la Tramitación de Licencias), Ordenanza de Apoyo a la Actividad Económica, Ordenanza de Protección contra la Contaminación Acústica, y los DB del CTE (DB-SI, DB-HS, DB-SUA). Para hostelería: salida de humos por cubierta y limitador-registrador si hay música." },
      { q: "¿Trabajáis con bares, restaurantes y locales de música en Madrid?", a: "Sí. Hostelería con cocina, locales de música, salas de fiestas, terrazas, hoteles, salas de juego. Tramitamos con todas las particularidades acústicas y de salida de humos exigidas por Madrid." },
      { q: "¿Tramitáis también el cambio de titularidad y ampliaciones?", a: "Sí. Cambios de titular, ampliaciones de superficie, modificaciones de actividad y regularizaciones de locales sin licencia previa. Madrid permite el cambio de titularidad por comunicación simple cuando no se modifican datos esenciales." },
    ],
    sevilla: [
      { q: "¿Dónde se tramita la licencia de actividad en Sevilla?", a: "En la Gerencia de Urbanismo del Ayuntamiento de Sevilla, mediante sede electrónica. Aplicamos la Ley 7/2007 GICA y los decretos autonómicos andaluces para actividades calificadas." },
      { q: "¿Qué exigencias tiene la hostelería en el casco antiguo de Sevilla?", a: "El casco antiguo tiene condicionantes patrimoniales adicionales (Conjunto Histórico). Para terrazas y veladores rigen las ordenanzas municipales de ocupación de vía pública. Si hay cocina, salida de humos por cubierta con justificación específica. Para música, limitador-registrador y aislamiento acústico reforzado." },
      { q: "¿Trabajáis en municipios de la provincia de Sevilla?", a: "Sí. Dos Hermanas, Alcalá de Guadaíra, Utrera, Écija, Carmona, Mairena del Aljarafe, Tomares y todos los municipios del Aljarafe y el Alcor." },
      { q: "¿Cuánto tarda la licencia en Sevilla?", a: "Por declaración responsable, apertura inmediata. Para licencias previas, el plazo medio es de 3-5 meses según la complejidad de la actividad y la carga de trabajo de Urbanismo." },
      { q: "¿Tramitáis cambios de uso de local a vivienda o viceversa?", a: "Sí. Cambios de uso requieren proyecto técnico específico, compatibilidad con el PGOU y, en algunos casos, licencia urbanística adicional. Lo gestionamos completo." },
    ],
    malaga: [
      { q: "¿Cómo se tramita la licencia de apertura en Málaga?", a: "El Ayuntamiento de Málaga tiene sede electrónica para presentar declaraciones responsables (actividades inocuas) y licencias previas (calificadas). Aplicamos normativa andaluza y la ordenanza propia municipal." },
      { q: "¿Qué exigencias tiene la hostelería costera en Málaga?", a: "Para zonas costeras como Pedregalejo, El Palo o Muelle Uno hay particularidades sobre veladores, terrazas y aislamiento acústico por proximidad a zonas residenciales. Para bares con cocina, salida de humos por cubierta. Para música, limitador-registrador." },
      { q: "¿Trabajáis en Marbella, Fuengirola y resto de la Costa del Sol?", a: "Sí. Marbella, Estepona, Fuengirola, Torremolinos, Benalmádena, Mijas, Vélez-Málaga y Ronda. Cada ayuntamiento tiene su sede electrónica y particularidades; conocemos los criterios de cada uno." },
      { q: "¿Cuánto cuesta el proyecto en Málaga?", a: "Depende del tipo de actividad, superficie e instalaciones. Para un comercio pequeño parte de 600-900 €. Para hostelería con cocina 1.400-2.200 €. Tras visita gratuita damos presupuesto cerrado." },
      { q: "¿Tramitáis también licencias para apartamentos turísticos?", a: "Sí. La licencia/registro de apartamentos turísticos en Málaga requiere proyecto técnico de habitabilidad y declaración responsable autonómica. Lo tramitamos completo, incluyendo el registro en la Junta de Andalucía." },
    ],
    granada: [
      { q: "¿Cómo se tramita la licencia en Granada?", a: "Ayuntamiento de Granada mediante sede electrónica. Para el Albayzín y otros conjuntos histórico-patrimoniales hay informes adicionales del Consejo de Patrimonio Histórico." },
      { q: "¿Qué exigencias tienen los locales en el Albayzín?", a: "El Albayzín es Patrimonio de la Humanidad, lo que añade requisitos de compatibilidad estética, conservación de fachadas y elementos protegidos. Para hostelería, particularidades en salida de humos y aislamiento acústico por proximidad residencial." },
      { q: "¿Trabajáis con licencias de tapeo y restauración granadina?", a: "Sí. Conocemos las particularidades del modelo de tapeo granadino (alta densidad de locales, terrazas, aforos compactos). Tramitamos con todas las garantías ante el ayuntamiento y la Junta de Andalucía." },
      { q: "¿Trabajáis en municipios de la provincia de Granada?", a: "Sí. Motril, Almuñécar, Salobreña, Loja, Baza, Guadix y todos los municipios de la Costa Tropical y la Vega." },
      { q: "¿Cuánto tarda la licencia en Granada?", a: "Por declaración responsable, apertura inmediata. Para licencias previas, 3-6 meses según complejidad, especialmente si hay condicionantes patrimoniales." },
    ],
    cordoba: [
      { q: "¿Cómo se tramita la licencia en Córdoba?", a: "Ayuntamiento de Córdoba por sede electrónica. Aplicamos normativa autonómica andaluza y las ordenanzas municipales propias." },
      { q: "¿Qué exigencias tienen los locales en la Judería y casco antiguo?", a: "La Judería es Patrimonio de la Humanidad; los locales del Conjunto Histórico tienen condicionantes patrimoniales y de compatibilidad estética. Para hostelería, salida de humos por cubierta con especial cuidado por estructuras singulares." },
      { q: "¿Trabajáis con almazaras y cooperativas oleícolas?", a: "Sí. Tramitamos licencias de actividad y modificaciones para almazaras y cooperativas con sus particularidades (residuos, alpechín, gestión de subproductos, contraincendios)." },
      { q: "¿Trabajáis en municipios de la provincia?", a: "Sí. Lucena, Puente Genil, Cabra, Montilla, Priego, Aguilar y todos los municipios de la Campiña y la Subbética." },
      { q: "¿Tramitáis terrazas y veladores en Córdoba?", a: "Sí. Las terrazas requieren autorización municipal de ocupación de vía pública, que se tramita en paralelo a la licencia de actividad." },
    ],
    cadiz: [
      { q: "¿Cómo se tramita la licencia en Cádiz?", a: "Ayuntamiento de Cádiz mediante sede electrónica. Aplicamos normativa andaluza y las ordenanzas municipales propias." },
      { q: "¿Qué particularidades tienen los locales en el casco antiguo de Cádiz?", a: "El casco antiguo tiene condicionantes patrimoniales por su valor histórico. Las particularidades estructurales (edificios antiguos, plantas altas, patios interiores) condicionan salida de humos, accesibilidad y contraincendios." },
      { q: "¿Trabajáis con la Bahía de Cádiz: San Fernando, Puerto Real, Puerto?", a: "Sí. Toda la Bahía: San Fernando, Puerto Real, Puerto de Santa María, Jerez, Chiclana, Sanlúcar y municipios costeros." },
      { q: "¿Tramitáis licencias para chiringuitos y locales playa?", a: "Sí. Los chiringuitos requieren autorización de Costas además de la licencia municipal, lo que añade trámites específicos." },
      { q: "¿Cuánto tarda la licencia en Cádiz?", a: "Declaración responsable: apertura inmediata. Licencias previas: 3-6 meses según complejidad." },
    ],
    huelva: [
      { q: "¿Cómo se tramita la licencia en Huelva?", a: "Ayuntamiento de Huelva por sede electrónica. Aplicamos normativa andaluza y, para actividades industriales del Polo Químico, normativa específica de prevención de riesgos químicos y atmósferas explosivas." },
      { q: "¿Trabajáis con naves y locales industriales del Polo Químico?", a: "Sí. Aplicamos requisitos adicionales: ATEX (atmósferas explosivas), gestión de residuos químicos, contraincendios reforzado y planes de emergencia específicos." },
      { q: "¿Trabajáis en la costa: Punta Umbría, Mazagón, Ayamonte?", a: "Sí. Toda la costa onubense incluyendo Punta Umbría, Mazagón, Ayamonte, Lepe, Cartaya, Isla Cristina y Aljaraque." },
      { q: "¿Tramitáis licencias para almacenes de frutos rojos y agroalimentarios?", a: "Sí. Almacenes hortofrutícolas, cámaras frigoríficas, plantas de manipulado y conserveras. Aplicamos requisitos sanitarios, contraincendios y gestión de subproductos." },
      { q: "¿Cuánto tarda la licencia en Huelva?", a: "Por declaración responsable, apertura inmediata. Licencias previas (industria, hostelería con música): 3-6 meses." },
    ],
    jaen: [
      { q: "¿Cómo se tramita la licencia en Jaén?", a: "Ayuntamiento de Jaén por sede electrónica. Aplicamos normativa andaluza para actividades calificadas y particularidades específicas para almazaras y cooperativas oleícolas." },
      { q: "¿Trabajáis con almazaras y cooperativas?", a: "Sí. Es uno de los servicios más demandados en la provincia. Aplicamos requisitos sobre gestión de alpechín, subproductos, contraincendios y atmósferas (silos, depósitos)." },
      { q: "¿Trabajáis en Úbeda, Baeza, Linares, Andújar?", a: "Sí. Toda la provincia incluyendo los principales municipios olivareros y comerciales." },
      { q: "¿Tramitáis licencias para oleoturismo (visitas a almazaras)?", a: "Sí. El oleoturismo combina licencia industrial con licencia turística y, en muchos casos, autorización para visitas y cata. Tramitamos todos los aspectos." },
      { q: "¿Cuánto cuesta la licencia para una almazara?", a: "Depende del tamaño y procesos (almazara, envasadora, biomasa). Para una almazara pequeña parte de 1.500 €. Para cooperativas grandes con biomasa puede superar los 5.000 €. Damos presupuesto cerrado tras visita." },
    ],
    murcia: [
      { q: "¿Cómo se tramita la licencia en Murcia?", a: "Ayuntamiento de Murcia mediante sede electrónica. Aplicamos normativa estatal, autonómica de la Región de Murcia y las ordenanzas municipales propias." },
      { q: "¿Qué exigencias tiene la hostelería en el Centro de Murcia?", a: "El Centro (Trapería, Platería, Cardenal Belluga) tiene condicionantes patrimoniales y aforos compactos. Para bares con cocina, salida de humos por cubierta. Para música, limitador y aislamiento acústico reforzado." },
      { q: "¿Trabajáis en Cartagena, Lorca y resto de la Región?", a: "Sí. Toda la Región de Murcia: Cartagena, Lorca, Molina de Segura, Alcantarilla, Águilas, Mazarrón, San Javier, Yecla, Jumilla, Caravaca." },
      { q: "¿Tramitáis licencias para almacenes y conserveras?", a: "Sí. Almacenes agroalimentarios, conserveras, plantas de manipulado, cámaras frigoríficas. Aplicamos requisitos sanitarios, contraincendios y atmósferas si procede." },
      { q: "¿Cuánto tarda la licencia en Murcia?", a: "Por declaración responsable, apertura inmediata. Para licencias previas: 3-5 meses según complejidad." },
    ],
    almeria: [
      { q: "¿Cómo se tramita la licencia en Almería?", a: "Ayuntamiento de Almería por sede electrónica. Aplicamos normativa andaluza y la ordenanza propia municipal. Como oficina técnica en Almería desde 1983, conocemos a fondo los criterios específicos." },
      { q: "¿Trabajáis en El Ejido, Roquetas, Vícar y municipios de la provincia?", a: "Sí. Toda la provincia incluyendo El Ejido, Roquetas de Mar, Vícar, Huércal-Overa, Adra, Berja, Cuevas del Almanzora, Vera, Mojácar y Carboneras. Tenemos landings dedicadas para los principales municipios." },
      { q: "¿Trabajáis con almacenes hortofrutícolas?", a: "Sí. Es uno de los servicios más demandados en Almería. Almacenes de manipulado, cámaras frigoríficas, plantas de envasado. Aplicamos requisitos sanitarios, contraincendios y gestión de residuos." },
      { q: "¿Tramitáis hostelería costera?", a: "Sí. Chiringuitos (con autorización adicional de Costas), bares, restaurantes y locales de música. Aplicamos requisitos acústicos y de salida de humos específicos para zonas costeras y residenciales." },
      { q: "¿Cuánto cuesta el proyecto en Almería?", a: "Desde 600 € para locales pequeños hasta 2.500 € para industrias o hostelería compleja. Visita gratuita y presupuesto cerrado tras revisar tu caso." },
    ],
  },
  peritaciones: {
    madrid: [
      { q: "¿Comparecéis ante los juzgados de Madrid?", a: "Sí. Comparecemos para ratificar el informe ante los juzgados de Madrid capital y de los partidos judiciales de la provincia (Móstoles, Alcalá, Getafe, etc.)." },
      { q: "¿Qué tipos de peritaje hacéis con más frecuencia en Madrid?", a: "Patologías constructivas en comunidades de propietarios, humedades, aluminosis, peritajes laborales, accidentes de tráfico, valoraciones por herencias y divorcios, peritajes en obras nuevas (LOE) e incendios." },
      { q: "¿Cuánto tarda un informe pericial en Madrid?", a: "Plazo habitual: 15-30 días desde la visita de inspección. En casos urgentes con plazo procesal ajustado podemos priorizar." },
      { q: "¿Trabajáis con bufetes especializados en derecho de la edificación?", a: "Sí. Bufetes especializados en LOE, derecho de seguros, comunidades de propietarios, derecho laboral y derecho civil. Coordinamos contenido técnico con argumento jurídico." },
      { q: "¿Cuánto cuesta una peritación judicial en Madrid?", a: "Depende del alcance: visita, mediciones, ensayos, ratificación en sala. Damos presupuesto cerrado tras consulta previa sin coste." },
    ],
    sevilla: [
      { q: "¿Comparecéis ante los juzgados de Sevilla?", a: "Sí. Sevilla capital y partidos judiciales de la provincia (Dos Hermanas, Alcalá de Guadaíra, Utrera, Écija, Carmona)." },
      { q: "¿Qué peritajes hacéis con más frecuencia en Sevilla?", a: "Patologías en cascos antiguos (humedades, fisuras, aluminosis), peritajes laborales, accidentes, valoraciones, peritajes de obras nuevas e incendios. También peritajes específicos del sector industrial sevillano." },
      { q: "¿Cuánto tarda un informe en Sevilla?", a: "15-30 días desde la visita. Urgencias procesales priorizadas." },
      { q: "¿Trabajáis para aseguradoras?", a: "Sí. Reclamaciones por daños, valoraciones para indemnizaciones, contraperitajes y peritajes contradictorios." },
      { q: "¿Cuánto cuesta una peritación en Sevilla?", a: "Presupuesto cerrado tras consulta previa sin coste. Depende del alcance del informe y de si requiere ratificación en sala." },
    ],
    malaga: [
      { q: "¿Comparecéis ante los juzgados de Málaga?", a: "Sí. Málaga capital, Marbella, Estepona, Fuengirola, Torremolinos y resto de partidos judiciales de la provincia." },
      { q: "¿Qué peritajes específicos hacéis en Málaga?", a: "Patologías de edificios costeros (humedades, salinidad, carbonatación), daños por temporales, peritajes en obras nuevas (LOE), peritajes laborales, accidentes y valoraciones." },
      { q: "¿Trabajáis con propiedades de extranjeros en la Costa del Sol?", a: "Sí. Reclamaciones por defectos de obra, valoraciones para herencias internacionales, peritajes para procedimientos judiciales con residentes extranjeros. Coordinamos con bufetes internacionales." },
      { q: "¿Cuánto tarda el informe?", a: "15-30 días desde la visita. Para procedimientos urgentes priorizamos la entrega." },
      { q: "¿Trabajáis para comunidades de propietarios?", a: "Sí. Reclamaciones a constructoras por defectos LOE, valoraciones de daños comunes, peritajes para juicios verbales y ordinarios." },
    ],
    granada: [
      { q: "¿Comparecéis ante los juzgados de Granada?", a: "Sí. Granada capital y Costa Tropical (Motril, Almuñécar, Salobreña), así como Loja, Baza y Guadix." },
      { q: "¿Qué peritajes hacéis en Granada?", a: "Patologías en cascos protegidos (Albayzín, Realejo), humedades, peritajes en obras nuevas, peritajes laborales y de accidentes, valoraciones e incendios." },
      { q: "¿Trabajáis con vivienda turística en zonas patrimoniales?", a: "Sí. Peritajes de daños en viviendas de uso turístico, valoraciones, reclamaciones a propietarios o gestores." },
      { q: "¿Cuánto tarda y cuánto cuesta?", a: "15-30 días para informe. Presupuesto cerrado tras consulta previa." },
      { q: "¿Trabajáis con bufetes especializados en derecho de la edificación?", a: "Sí. Coordinamos con bufetes locales especializados en LOE, derecho de seguros y comunidades de propietarios." },
    ],
    cordoba: [
      { q: "¿Comparecéis ante los juzgados de Córdoba?", a: "Sí. Córdoba capital y partidos judiciales de la provincia (Lucena, Puente Genil, Cabra, Montilla, Priego)." },
      { q: "¿Qué peritajes hacéis en Córdoba?", a: "Patologías en cascos patrimoniales, peritajes industriales en polígonos, peritajes oleícolas (almazaras, cooperativas), accidentes laborales, valoraciones e incendios." },
      { q: "¿Trabajáis con almazaras y cooperativas?", a: "Sí. Peritajes de daños, incendios, gestión de subproductos, valoraciones para herencias en familias propietarias." },
      { q: "¿Cuánto tarda el informe?", a: "15-30 días desde la visita. Urgencias procesales priorizadas." },
      { q: "¿Cuánto cuesta?", a: "Presupuesto cerrado tras consulta previa sin coste." },
    ],
    cadiz: [
      { q: "¿Comparecéis ante los juzgados de Cádiz y la Bahía?", a: "Sí. Cádiz capital, San Fernando, Puerto Real, Puerto de Santa María, Jerez, Chiclana, Sanlúcar y partidos judiciales de la provincia." },
      { q: "¿Qué peritajes hacéis en Cádiz?", a: "Patologías costeras (humedades, salinidad), peritajes portuarios e industriales (Bahía), peritajes pesqueros, accidentes laborales y valoraciones." },
      { q: "¿Trabajáis con peritajes de embarcaciones?", a: "Trabajamos con embarcaciones civiles (no náutica de recreo de competición). Daños en cascos, valoraciones, peritajes laborales en sector pesquero." },
      { q: "¿Cuánto tarda y cuánto cuesta?", a: "15-30 días. Presupuesto cerrado tras consulta previa." },
      { q: "¿Trabajáis con aseguradoras de la zona?", a: "Sí. Reclamaciones por daños, contraperitajes, peritajes contradictorios." },
    ],
    huelva: [
      { q: "¿Comparecéis ante los juzgados de Huelva?", a: "Sí. Huelva capital y partidos judiciales de la provincia." },
      { q: "¿Qué peritajes hacéis en Huelva?", a: "Peritajes industriales (Polo Químico), agroalimentarios (fresa, frutos rojos), accidentes laborales, patologías constructivas costeras y valoraciones." },
      { q: "¿Trabajáis con instalaciones del Polo Químico?", a: "Sí. Peritajes de daños, incendios, fugas, atmósferas explosivas y reclamaciones contra empresas industriales." },
      { q: "¿Cuánto tarda y cuánto cuesta?", a: "15-30 días. Presupuesto cerrado tras consulta previa." },
      { q: "¿Trabajáis con aseguradoras?", a: "Sí. Reclamaciones, contraperitajes y valoraciones para indemnizaciones." },
    ],
    jaen: [
      { q: "¿Comparecéis ante los juzgados de Jaén?", a: "Sí. Jaén capital y partidos judiciales (Úbeda, Baeza, Linares, Andújar, Martos)." },
      { q: "¿Qué peritajes hacéis en Jaén?", a: "Peritajes oleícolas (almazaras, cooperativas, fincas), accidentes laborales del olivar, daños en explotaciones, valoraciones e incendios." },
      { q: "¿Trabajáis con peritajes del sector oleícola?", a: "Sí. Es uno de nuestros nichos. Peritajes de calidad del aceite, daños en almacenes, accidentes en almazaras, valoraciones de explotaciones." },
      { q: "¿Cuánto tarda y cuánto cuesta?", a: "15-30 días. Presupuesto cerrado tras consulta previa sin coste." },
      { q: "¿Trabajáis con accidentes laborales en olivar?", a: "Sí. Caídas, atropellos por maquinaria, accidentes con varas y vibradores. Peritajes técnicos rigurosos para procedimientos laborales." },
    ],
    murcia: [
      { q: "¿Comparecéis ante los juzgados de Murcia?", a: "Sí. Murcia capital, Cartagena, Lorca, Molina de Segura y partidos judiciales de la Región." },
      { q: "¿Qué peritajes hacéis en Murcia?", a: "Patologías constructivas, peritajes agroalimentarios (huerta, conservas, almacenes), accidentes laborales, valoraciones e incendios industriales." },
      { q: "¿Trabajáis con peritajes del sector conservero?", a: "Sí. Peritajes de incendios, daños en instalaciones, accidentes laborales, contaminación cruzada, gestión de subproductos." },
      { q: "¿Cuánto tarda el informe?", a: "15-30 días desde la visita." },
      { q: "¿Cuánto cuesta?", a: "Presupuesto cerrado tras consulta previa sin coste." },
    ],
    almeria: [
      { q: "¿Comparecéis ante los juzgados de Almería?", a: "Sí. Almería capital, El Ejido, Huércal-Overa, Vera, Roquetas y resto de partidos judiciales. Tenemos sede en Almería desde 1983." },
      { q: "¿Qué peritajes hacéis en Almería?", a: "Patologías agrícolas (invernaderos, almacenes), accidentes laborales, daños por temporales, peritajes industriales y costeros, valoraciones e incendios." },
      { q: "¿Trabajáis con peritajes en invernaderos y agricultura?", a: "Sí. Es uno de nuestros nichos. Daños por temporales, accidentes con maquinaria, peritajes de cubiertas, valoraciones de explotaciones." },
      { q: "¿Cuánto tarda?", a: "15-30 días desde la visita." },
      { q: "¿Cuánto cuesta?", a: "Presupuesto cerrado tras consulta previa sin coste." },
    ],
  },
  tasaciones: {
    madrid: [
      { q: "¿Para qué casos hacéis tasaciones en Madrid?", a: "Herencias y donaciones (ISD), divorcios y separaciones, procedimientos judiciales, ventas entre particulares, operaciones financieras, valoraciones para Hacienda (ITP, Patrimonio) y procedimientos administrativos." },
      { q: "¿Qué tipos de bienes tasamos?", a: "Viviendas, locales, oficinas, naves industriales, plazas de garaje, trasteros, suelo urbano y rural, maquinaria industrial, vehículos clásicos." },
      { q: "¿Son válidas para Hacienda y juzgados?", a: "Sí. Nuestras tasaciones están firmadas por ingeniero técnico colegiado con plena validez ante notarios, juzgados, Hacienda, AEAT, Patrimonio y procedimientos administrativos." },
      { q: "¿Cuánto cuesta una tasación en Madrid?", a: "Tasación de vivienda: desde 250 €. Naves y locales: desde 400 €. Maquinaria: según complejidad. Damos presupuesto cerrado tras consulta previa." },
      { q: "¿Cuánto tarda?", a: "Habitualmente 7-15 días desde la visita de inspección." },
    ],
    sevilla: [
      { q: "¿Para qué casos hacéis tasaciones en Sevilla?", a: "Herencias, divorcios, procedimientos judiciales, operaciones financieras, Hacienda e ITP. Especial demanda por inmuebles en cascos históricos con condicionantes patrimoniales." },
      { q: "¿Qué tipos de bienes tasamos?", a: "Viviendas, locales, oficinas, naves del polígono, suelo, maquinaria, vehículos clásicos. También inmuebles en zonas patrimoniales." },
      { q: "¿Son válidas para Hacienda y juzgados?", a: "Sí, plena validez legal." },
      { q: "¿Cuánto cuesta?", a: "Vivienda desde 250 €. Locales desde 350 €. Naves desde 450 €. Presupuesto cerrado tras consulta previa." },
      { q: "¿Trabajáis con peritos de la Junta de Andalucía?", a: "Sí. Conocemos los criterios de Hacienda autonómica y aplicamos métodos de valoración aceptados por la Administración." },
    ],
    malaga: [
      { q: "¿Tasáis inmuebles costeros de la Costa del Sol?", a: "Sí. Es uno de nuestros nichos: viviendas costeras, apartamentos turísticos, locales en zonas turísticas, urbanizaciones en Marbella, Estepona, Fuengirola, Torremolinos." },
      { q: "¿Trabajáis para herederos extranjeros?", a: "Sí. Tasaciones para herencias internacionales con propiedades en Costa del Sol. Coordinamos con notarios y abogados internacionales." },
      { q: "¿Son válidas para Hacienda?", a: "Sí. Plena validez ante AEAT, Junta de Andalucía, juzgados y notarios." },
      { q: "¿Cuánto cuesta una tasación en Málaga?", a: "Desde 250 € para vivienda estándar. Inmuebles costeros y de lujo: presupuesto a medida. Damos presupuesto cerrado." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    granada: [
      { q: "¿Tasáis inmuebles en cascos protegidos como Albayzín?", a: "Sí. Los inmuebles en Conjunto Histórico tienen particularidades de valoración (protección, restricciones de obra). Aplicamos métodos específicos para estos bienes." },
      { q: "¿Qué otros bienes tasáis en Granada?", a: "Viviendas, locales, suelo rural, fincas, maquinaria agrícola, almacenes, naves." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez ante AEAT, Junta de Andalucía y notarios." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 €. Presupuesto cerrado tras consulta previa." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    cordoba: [
      { q: "¿Tasáis inmuebles en la Judería y casco antiguo?", a: "Sí. Aplicamos métodos específicos para inmuebles con protección patrimonial." },
      { q: "¿Trabajáis con fincas olivareras y agrícolas?", a: "Sí. Tasaciones de explotaciones agrícolas, olivar, almazaras, cooperativas y maquinaria del sector." },
      { q: "¿Para qué casos?", a: "Herencias, divorcios, ventas, Hacienda, operaciones financieras, procedimientos judiciales." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € vivienda. Fincas y explotaciones: presupuesto a medida según extensión." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    cadiz: [
      { q: "¿Tasáis inmuebles costeros e instalaciones portuarias?", a: "Sí. Inmuebles costeros, naves industriales de la Bahía, instalaciones portuarias y embarcaciones civiles." },
      { q: "¿Trabajáis con Jerez y resto de la provincia?", a: "Sí. Toda la provincia incluyendo Jerez, Bahía, Costa Noroeste y Sierra." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € para vivienda. Embarcaciones y naves: presupuesto a medida." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    huelva: [
      { q: "¿Tasáis instalaciones industriales del Polo Químico?", a: "Sí. Instalaciones industriales, naves, maquinaria, depósitos, infraestructuras." },
      { q: "¿Trabajáis con fincas agrícolas de fresa y frutos rojos?", a: "Sí. Tasaciones de explotaciones, plantas de manipulado, cámaras frigoríficas." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € vivienda. Instalaciones industriales: presupuesto a medida." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    jaen: [
      { q: "¿Tasáis fincas olivareras y almazaras?", a: "Sí. Es uno de nuestros nichos en la provincia. Aplicamos métodos específicos del sector oleícola (rendimiento, calidad del aceite, edad del olivar)." },
      { q: "¿Trabajáis con maquinaria oleícola?", a: "Sí. Tasaciones de almazaras, líneas de extracción, depósitos, envasadoras." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € vivienda. Fincas olivareras: presupuesto a medida según extensión." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    murcia: [
      { q: "¿Tasáis fincas agrícolas y conserveras?", a: "Sí. Fincas de huerta, almacenes, conserveras, plantas de manipulado, cámaras frigoríficas." },
      { q: "¿Trabajáis con maquinaria industrial?", a: "Sí. Maquinaria conservera, agrícola, frío industrial, líneas de envasado." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez ante AEAT y CARM." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € vivienda. Industria: presupuesto a medida." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
    almeria: [
      { q: "¿Tasáis invernaderos y explotaciones agrícolas?", a: "Sí. Es uno de nuestros nichos desde 1983. Invernaderos, plantas de manipulado, cámaras frigoríficas, almacenes hortofrutícolas y maquinaria agraria." },
      { q: "¿Trabajáis con inmuebles costeros?", a: "Sí. Viviendas costeras de Cabo de Gata, Aguadulce, Roquetas, Mojácar, Vera." },
      { q: "¿Son válidas para Hacienda?", a: "Sí, plena validez ante AEAT, Junta de Andalucía, notarios y juzgados." },
      { q: "¿Cuánto cuesta?", a: "Desde 250 € vivienda. Invernaderos y explotaciones: presupuesto a medida." },
      { q: "¿Cuánto tarda?", a: "7-15 días desde la inspección." },
    ],
  },
};

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
