import type { Metadata } from "next";

const siteUrl = "https://www.ingenierial.es";

export type MunicipioZona = { zona: string; desc: string };
export type MunicipioFaq = { q: string; a: string };

export type MunicipioAlmeria = {
  slug: string;
  nombre: string;
  comarca: string;
  heroSub: string;
  intro1: string;
  intro2: string;
  zonas: MunicipioZona[];
  faqs: MunicipioFaq[];
  keywordsExtra: string[];
};

// Contenido único por municipio (rellenado tras investigación local).
export const MUNICIPIOS_ALMERIA: MunicipioAlmeria[] = [
  {
    "slug": "nijar",
    "nombre": "Níjar",
    "comarca": "Área Metropolitana de Almería",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Níjar para almacenes y manipulados hortofrutícolas, naves del polígono de San Isidro, comercios y talleres, restaurantes y alojamientos del Parque Natural de Cabo de Gata y talleres artesanos de la villa de Níjar.",
    "intro1": "Níjar es, después de El Ejido, el segundo municipio de Europa en producción hortofrutícola bajo invernadero: miles de hectáreas de tomate, calabacín, pepino y pimiento sostienen una intensa actividad de almacenes de manipulado, cooperativas y empresas auxiliares repartidas por el Campo de Níjar, Campohermoso y San Isidro. A esa base agrícola se suma un potente sector turístico ligado al Parque Natural de Cabo de Gata, con hostelería, restaurantes y alojamientos en San José, Las Negras o Agua Amarga, y la tradición artesana de la villa de Níjar, reconocida por sus jarapas, su cerámica y el esparto. Es un término municipal extenso y muy diverso donde cada mes se abren negocios de perfiles muy distintos.",
    "intro2": "Para abrir cualquier local, nave o alojamiento en Níjar necesitas licencia municipal de actividad. Según el epígrafe, se resuelve por declaración responsable, con apertura inmediata, o como actividad calificada, con proyecto técnico y resolución expresa del ayuntamiento. Redactamos y firmamos el proyecto como ingeniero técnico industrial colegiado y lo presentamos a través de la Oficina Virtual y la sede electrónica del Ayuntamiento de Níjar, con seguimiento en las oficinas municipales de la villa de Níjar, Campohermoso o San Isidro hasta la resolución.",
    "zonas": [
      {
        "zona": "Villa de Níjar (casco histórico)",
        "desc": "Talleres artesanos de jarapas, cerámica y esparto, comercio, hostelería y servicios"
      },
      {
        "zona": "Campohermoso",
        "desc": "Comercio de proximidad, servicios, hostelería y almacenes hortofrutícolas"
      },
      {
        "zona": "San Isidro (polígonos San Isidro y Santa Olalla)",
        "desc": "Naves industriales, talleres, logística y manipulado de hortalizas"
      },
      {
        "zona": "San José",
        "desc": "Restaurantes, apartamentos y alojamientos turísticos en el Parque Natural de Cabo de Gata"
      },
      {
        "zona": "Las Negras y Agua Amarga",
        "desc": "Chiringuitos, apartamentos y casas rurales en la franja costera"
      },
      {
        "zona": "Campo de Níjar (zonas agrícolas)",
        "desc": "Almacenes de confección, cooperativas y empresas auxiliares del invernadero"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Níjar?",
        "a": "En la sede electrónica y la Oficina Virtual del Ayuntamiento de Níjar. Nos ocupamos de la presentación telemática y del seguimiento en las oficinas municipales de la villa de Níjar (Plaza de la Glorieta), Campohermoso y San Isidro hasta obtener la resolución."
      },
      {
        "q": "¿Cuál es la actividad más habitual que tramitáis en Níjar?",
        "a": "Los almacenes de manipulado y confección de hortalizas son la actividad más frecuente en el Campo de Níjar, Campohermoso y San Isidro. Al superar cierta superficie e instalaciones (cámaras, líneas de confección, carga de fuego) suelen ir por actividad calificada, con proyecto que justifica protección contra incendios, evacuación y saneamiento."
      },
      {
        "q": "¿Cuánto tarda la licencia en Níjar?",
        "a": "Por declaración responsable la apertura es inmediata al presentar el proyecto y la documentación. Las actividades calificadas requieren resolución expresa del ayuntamiento y suelen tardar entre 2 y 6 meses, según la carga documental y los requerimientos municipales o de otras administraciones."
      },
      {
        "q": "He comprado un negocio que ya funciona, ¿tengo que sacar licencia nueva?",
        "a": "No hace falta empezar de cero. Se tramita un cambio de titularidad por declaración responsable siempre que la actividad no varíe y el local conserve las condiciones autorizadas. Comprobamos que la licencia previa está en regla y actualizamos la documentación técnica si es necesario."
      },
      {
        "q": "¿Puedo abrir un restaurante o alojamiento dentro del Parque Natural de Cabo de Gata?",
        "a": "Sí, pero además de la licencia municipal de actividad, los negocios situados dentro de los límites del Parque Natural suelen necesitar informe o autorización de la Junta de Andalucía en materia de medio ambiente. Coordinamos ambos trámites para San José, Las Negras, Agua Amarga, Rodalquilar o La Isleta del Moro."
      }
    ],
    "keywordsExtra": [
      "licencia almacén hortofrutícola Níjar",
      "licencia nave polígono San Isidro Níjar",
      "licencia restaurante San José Cabo de Gata",
      "licencia chiringuito Las Negras Níjar",
      "licencia taller artesanía jarapas Níjar"
    ]
  },
  {
    "slug": "huercal-overa",
    "nombre": "Huércal-Overa",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Huércal-Overa para tu licencia de actividad: comercios del centro comercial comarcal, bares y restaurantes, clínicas y consultas, talleres, naves del polígono y explotaciones agroganaderas de las pedanías.",
    "intro1": "Huércal-Overa es la capital comercial y administrativa del Levante Almeriense y cabeza de su partido judicial, con cerca de 21.000 habitantes repartidos entre el casco urbano y casi cuarenta núcleos de población. Su economía se apoya en un potente sector servicios (el Hospital La Inmaculada, los juzgados y las oficinas comarcales atraen a población de toda la comarca), en un comercio que ejerce de referencia para los pueblos del bajo Almanzora y en un tejido agroganadero de peso: almendro, cítricos, olivar y una destacada ganadería porcina. A ello se suman la construcción, la transformación de piedra y mármol y los servicios logísticos junto a la autovía. Ese dinamismo genera aperturas constantes de comercios, hostelería, clínicas, talleres y naves.",
    "intro2": "A la hora de abrir, la tramitación depende del tipo de negocio: la mayoría de comercios y oficinas se ponen en marcha con una declaración responsable de inicio de actividad, mientras que las actividades calificadas (hostelería con cocina, talleres, industrias o naves con incidencia ambiental) requieren proyecto técnico y calificación ambiental. En Abaco Ingeniería redactamos el proyecto, el certificado técnico y toda la documentación exigida, y lo presentamos de forma telemática en la sede electrónica del Ayuntamiento de Huércal-Overa, con desplazamiento presencial al local cuando hace falta.",
    "zonas": [
      {
        "zona": "Casco urbano y centro comercial (Avenida Guillermo Reina, Calle Ancha, entorno del mercado)",
        "desc": "comercio minorista, moda, hostelería, clínicas, consultas y oficinas que dan servicio a toda la comarca"
      },
      {
        "zona": "Polígono industrial de Huércal-Overa",
        "desc": "naves, talleres mecánicos, almacenes y empresas de distribución"
      },
      {
        "zona": "Nuevo polígono industrial La Morena",
        "desc": "suelo industrial y logístico para naves productivas y de transporte de mercancías"
      },
      {
        "zona": "Área de La Ballabona (junto a la N-340 y la A-7)",
        "desc": "estaciones de servicio, áreas de servicio y logística en el eje viario"
      },
      {
        "zona": "Pedanías del valle: Overa, San Francisco y Santa María de Nieva",
        "desc": "comercio de proximidad, agroindustria y almacenes agrícolas"
      },
      {
        "zona": "Diputaciones agrícolas: Góñar, Úrcal, Almajalejo y El Saltador",
        "desc": "explotaciones agroganaderas, granjas porcinas y naves agrícolas"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Huércal-Overa?",
        "a": "Se presenta ante el Ayuntamiento de Huércal-Overa, en la Avenida Guillermo Reina 7, o de forma telemática en su sede electrónica. Nosotros redactamos toda la documentación técnica, la presentamos por ti, gestionamos el pago de tasas y hacemos el seguimiento del expediente hasta el alta de la actividad."
      },
      {
        "q": "¿Qué necesito para abrir un comercio en el centro de Huércal-Overa?",
        "a": "Al ser el centro comercial de referencia del Levante Almeriense, la mayoría de tiendas y oficinas del casco urbano se abren con una declaración responsable, que permite iniciar la actividad de forma inmediata siempre que el local cumpla las condiciones. Preparamos el certificado de adecuación, la memoria técnica y la comprobación de compatibilidad urbanística."
      },
      {
        "q": "¿Cuánto se tarda en obtener la licencia de apertura?",
        "a": "Con declaración responsable puedes abrir el mismo día de la presentación, una vez lista la documentación técnica. Si es una actividad calificada (hostelería con cocina, taller, nave o granja) hay que sumar la calificación ambiental, cuyo trámite suele llevar entre 2 y 6 meses según el proyecto y los informes sectoriales necesarios."
      },
      {
        "q": "¿Puedo reabrir un local que ya tuvo actividad cambiando solo el titular?",
        "a": "Sí. Si el local ya contaba con licencia y no cambias la actividad ni realizas reformas relevantes, basta con una comunicación de cambio de titularidad en el Ayuntamiento de Huércal-Overa. Antes de tramitarla revisamos que la licencia anterior siga vigente y que el local cumpla la normativa actual."
      },
      {
        "q": "¿Cómo legalizo una nave ganadera o una explotación porcina en Huércal-Overa?",
        "a": "Las explotaciones ganaderas, muy presentes en las diputaciones agrícolas del municipio, son actividades calificadas: necesitan proyecto técnico, calificación ambiental y, según el tamaño, autorización sectorial de ganadería. Redactamos el proyecto, tramitamos la calificación y coordinamos los informes entre el Ayuntamiento y la Junta de Andalucía."
      }
    ],
    "keywordsExtra": [
      "licencia nave polígono La Morena Huércal-Overa",
      "licencia local centro comercial Huércal-Overa",
      "licencia granja porcina Huércal-Overa",
      "proyecto actividad La Ballabona Huércal-Overa",
      "declaración responsable Huércal-Overa"
    ]
  },
  {
    "slug": "adra",
    "nombre": "Adra",
    "comarca": "Poniente Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Adra para abrir tu negocio: comercios y hostelería del centro, pescaderías y bares junto al puerto, chiringuitos de playa, naves en el polígono de La Azucarera y almacenes hortícolas de las pedanías. Redactamos el proyecto y lo presentamos por sede electrónica.",
    "intro1": "Adra es una de las poblaciones más antiguas de la costa del Poniente almeriense y hoy vive de tres motores muy definidos. La agricultura intensiva bajo plástico es su principal fuente de empleo y riqueza: forma parte del Campo de Dalías y su vega concentra invernaderos, comercializadoras y almacenes de manipulado hortícola orientados a la exportación. A ello se suma un puerto pesquero histórico, con una de las flotas más activas del litoral andaluz y su propia lonja, y un comercio urbano vivo heredero de una tradición conservera y azucarera. Este tejido genera una demanda constante de licencias para almacenes agrícolas, pescaderías, locales comerciales, hostelería y naves industriales.",
    "intro2": "A la hora de abrir, la clave está en distinguir entre la declaración responsable, que permite iniciar la actividad de forma prácticamente inmediata para los usos inocuos como una tienda o una oficina, y la actividad calificada, que exige proyecto técnico y un periodo de tramitación y calificación ambiental más largo. En Abaco Ingeniería redactamos el proyecto adaptado a tu local y lo presentamos telemáticamente a través de la sede electrónica del Ayuntamiento de Adra, encargándonos del seguimiento del expediente hasta la resolución.",
    "zonas": [
      {
        "zona": "Casco urbano y centro comercial",
        "desc": "Comercios, hostelería, oficinas y servicios en torno a la Plaza Puerta del Mar y el centro histórico"
      },
      {
        "zona": "Puerto pesquero y lonja",
        "desc": "Pescaderías, hostelería marinera, almacenes de frío y actividad auxiliar ligada a la flota"
      },
      {
        "zona": "Polígono Industrial La Azucarera",
        "desc": "Naves industriales, talleres, manipulado y logística sobre el suelo de la antigua azucarera"
      },
      {
        "zona": "Pago del Campillo",
        "desc": "Nuevo suelo industrial para naves de nueva implantación e industria agroalimentaria"
      },
      {
        "zona": "Pedanías de La Curva y Puente del Río",
        "desc": "Comercializadoras hortícolas, almacenes agrícolas y comercio de proximidad"
      },
      {
        "zona": "Playas y paseo marítimo de San Nicolás",
        "desc": "Chiringuitos, hostelería estacional y apartamentos turísticos en la franja costera"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Adra?",
        "a": "La tramitación se realiza en el Ayuntamiento de Adra, en la Plaza Puerta del Mar, y de forma telemática a través de su sede electrónica (adra.sedelectronica.es). En Abaco Ingeniería preparamos toda la documentación técnica y presentamos el expediente por vía electrónica, evitándote desplazamientos y colas en ventanilla."
      },
      {
        "q": "Quiero abrir un almacén o comercializadora de productos hortícolas, ¿qué licencia necesito?",
        "a": "Al estar Adra dentro del Campo de Dalías, los almacenes de manipulado y las comercializadoras son una de las actividades más habituales del municipio. Según la superficie, la maquinaria de confección y las cámaras de frío, suele tramitarse como actividad calificada con proyecto técnico, ya que conlleva clasificación ambiental. Estudiamos tu caso y definimos la vía más ágil."
      },
      {
        "q": "¿Cuánto tarda en concederse la licencia?",
        "a": "Con declaración responsable, para actividades inocuas como una tienda o una oficina, puedes abrir de forma casi inmediata tras presentar la documentación completa. Si la actividad es calificada (hostelería, taller, industria o almacén con clasificación ambiental), el proceso suele llevar entre 2 y 6 meses según la complejidad y los informes municipales."
      },
      {
        "q": "Voy a traspasar un local que ya tenía licencia, ¿necesito una nueva?",
        "a": "No siempre. Si la actividad y las instalaciones no cambian, normalmente basta con una comunicación de cambio de titularidad ante el Ayuntamiento de Adra, más rápida y económica que una licencia nueva. Si vas a reformar el local o modificar el uso, sí habrá que tramitar una nueva licencia. Revisamos el expediente anterior antes de decidir."
      },
      {
        "q": "¿Puedo abrir un bar, una pescadería o un chiringuito junto al puerto o las playas de Adra?",
        "a": "Sí. La hostelería marinera, las pescaderías y los chiringuitos de temporada son negocios muy propios de Adra por su tradición pesquera y su litoral. Estas actividades son calificadas y requieren proyecto técnico con medidas contra ruidos, humos y de seguridad alimentaria. Si el establecimiento se ubica en dominio público marítimo-terrestre, además tramitamos la autorización costera correspondiente."
      }
    ],
    "keywordsExtra": [
      "licencia almacén hortícola Adra",
      "licencia pescadería puerto Adra",
      "licencia nave polígono La Azucarera Adra",
      "licencia chiringuito playa Adra",
      "declaración responsable actividad Adra"
    ]
  },
  {
    "slug": "berja",
    "nombre": "Berja",
    "comarca": "Alpujarra Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Berja para almacenes hortofrutícolas y de manipulado, cooperativas, comercios, bares y restaurantes, talleres y naves agrícolas de la vega y las barriadas.",
    "intro1": "Berja es la localidad de mayor peso de la Alpujarra almeriense y ejerce de cabecera comercial de su comarca, la puerta natural entre el Poniente y la montaña. Tras el declive de las minas de plomo de la Sierra de Gádor y del histórico parral de uva de mesa de la variedad Ohanes, su economía gira hoy en torno a la agricultura intensiva bajo plástico: el pimiento es el cultivo dominante, con cientos de hectáreas de invernadero, junto al almendro y otros hortícolas. Con más de mil explotaciones agrarias y cerca de dos mil establecimientos, la demanda de licencias para almacenes de manipulado, cooperativas, comercios y hostelería es constante.",
    "intro2": "El Ayuntamiento de Berja diferencia las actividades inocuas, que se resuelven por declaración responsable con apertura prácticamente inmediata, de las actividades calificadas, con mayor carga documental y controles ambientales. La presentación se realiza en la sede electrónica municipal, integrada en la plataforma provincial de la Diputación de Almería. Nosotros redactamos el proyecto técnico ajustado a cada régimen, reunimos la documentación exigida y lo presentamos telemáticamente con certificado digital, además de desplazarnos al local para tomar datos.",
    "zonas": [
      {
        "zona": "Casco urbano de Berja",
        "desc": "comercio de comarca, hostelería y servicios en torno a la Plaza Mayor y el centro"
      },
      {
        "zona": "Vega de Berja (invernaderos)",
        "desc": "almacenes hortofrutícolas, plantas de manipulado y cooperativas del pimiento"
      },
      {
        "zona": "Alcaudique, Benejí y San Roque",
        "desc": "barriadas de la vega con locales de barrio y almacenes agrícolas"
      },
      {
        "zona": "Castala",
        "desc": "restaurantes y alojamiento rural en el parque periurbano de la Sierra de Gádor"
      },
      {
        "zona": "Río Grande, Río Chico y Chirán",
        "desc": "núcleos rurales dispersos con explotaciones agrarias y turismo rural"
      },
      {
        "zona": "Accesos y carretera A-347",
        "desc": "naves, talleres y almacenes en los principales viales hacia Adra y Alcolea"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Berja?",
        "a": "En la sede electrónica del Ayuntamiento de Berja (Plaza de la Constitución, 1), integrada en la plataforma de la Diputación de Almería. Nos ocupamos de la presentación telemática y del seguimiento del expediente hasta la resolución."
      },
      {
        "q": "¿Tramitáis almacenes hortofrutícolas y de manipulado de pimiento?",
        "a": "Sí, es la actividad más habitual en Berja. Redactamos el proyecto técnico con justificación de las líneas de confección, cámaras de frío, protección contra incendios y evacuación, tanto para naves nuevas como para legalizar almacenes ya en funcionamiento."
      },
      {
        "q": "¿Cuánto tarda la licencia en Berja?",
        "a": "Con declaración responsable la apertura es prácticamente inmediata al presentar la documentación. Para actividades calificadas, con más trámites ambientales y de seguridad, el plazo suele ir de 2 a 6 meses según el tipo de actividad."
      },
      {
        "q": "¿Qué ocurre si compro un local o almacén con actividad previa?",
        "a": "Gestionamos el cambio de titularidad. Si la actividad se mantiene y las instalaciones no se modifican, el trámite es ágil; si cambia el uso o se reforma el local, redactamos un proyecto nuevo adaptado a la normativa vigente."
      },
      {
        "q": "¿Tramitáis restaurantes y alojamientos rurales en Castala y la Sierra de Gádor?",
        "a": "Sí. El entorno de Castala concentra hostelería y turismo rural. Tramitamos licencias de bares, restaurantes, casas rurales y alojamientos, con las particularidades de salida de humos, aforo, accesibilidad y aislamiento acústico que exige cada caso."
      }
    ],
    "keywordsExtra": [
      "licencia almacén hortofrutícola Berja",
      "licencia invernadero Berja",
      "ingeniero licencia actividad Berja",
      "licencia restaurante Castala Berja",
      "proyecto actividad cooperativa Berja"
    ]
  },
  {
    "slug": "vera",
    "nombre": "Vera",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Vera para tu licencia de actividad: restaurantes y chiringuitos de Vera Playa, comercios y oficinas del casco urbano, apartamentos turísticos, naves y talleres del corredor Vera-Garrucha y locales de hostelería.",
    "intro1": "Vera es el gran núcleo comercial y turístico del Levante Almeriense, con más de 20.000 habitantes y una notable presencia de residentes extranjeros. Su economía combina el comercio tradicional (el mercadillo de los sábados sigue atrayendo compradores de toda la comarca), el turismo de sol y playa a lo largo de sus casi cinco kilómetros de litoral y, de forma singular, el turismo naturista de Vera Playa, pionero en España. A ello se suman una restauración muy activa, los apartamentos turísticos, la agricultura de cítricos y hortalizas y un tejido de talleres, almacenes y comercio de proximidad. Este dinamismo genera en Vera una demanda constante de licencias de apertura y actividad.",
    "intro2": "Cada apertura en Vera sigue uno de dos caminos. Las actividades inocuas (pequeño comercio, oficinas y muchos servicios) arrancan mediante declaración responsable, de efecto prácticamente inmediato. Las actividades calificadas (hostelería con cocina, talleres, industrias o locales con afección ambiental) exigen proyecto técnico y un procedimiento más largo. En Abaco Ingeniería redactamos el proyecto y la documentación técnica y la presentamos por vía telemática en la sede electrónica del Ayuntamiento de Vera, con desplazamiento presencial al local cuando el trámite lo requiere.",
    "zonas": [
      {
        "zona": "Casco urbano y Plaza Mayor",
        "desc": "Comercio tradicional, oficinas, farmacias y hostelería junto al mercadillo de los sábados"
      },
      {
        "zona": "Vera Playa y El Playazo",
        "desc": "Hoteles, apartamentos turísticos, restaurantes y chiringuitos en la zona naturista"
      },
      {
        "zona": "Puerto Rey y Las Marinas",
        "desc": "Urbanizaciones costeras con comercio de proximidad y hostelería de temporada"
      },
      {
        "zona": "Parque Comercial Vera Plaza",
        "desc": "Supermercados, restauración, retail textil y locales de servicios"
      },
      {
        "zona": "Corredor industrial Vera-Garrucha",
        "desc": "Naves, talleres, almacenes y empresas de construcción y distribución"
      },
      {
        "zona": "Valle del Este",
        "desc": "Resort de golf con hostelería, servicios turísticos y comercio asociado"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Vera?",
        "a": "La tramitación se realiza ante el Ayuntamiento de Vera, a través de su sede electrónica (vera.sedelectronica.es) y del departamento de Urbanismo. En Abaco Ingeniería preparamos el proyecto y toda la documentación y la presentamos telemáticamente por usted, evitándole desplazamientos y colas."
      },
      {
        "q": "¿Qué tipo de negocio se abre con más frecuencia en Vera?",
        "a": "Por el peso del turismo y del comercio, en Vera predominan las aperturas de hostelería (restaurantes, bares y chiringuitos, sobre todo en Vera Playa) y de comercio minorista en el casco urbano y en el parque comercial. También son muy habituales los apartamentos turísticos y los alojamientos de la zona naturista."
      },
      {
        "q": "¿Cuánto tarda la licencia según el tipo de actividad?",
        "a": "Una actividad inocua tramitada por declaración responsable permite abrir de forma prácticamente inmediata tras presentar la documentación. Una actividad calificada (hostelería con cocina, talleres, industria) requiere proyecto técnico y suele resolverse en un plazo aproximado de dos a seis meses, según la complejidad y las autorizaciones sectoriales."
      },
      {
        "q": "¿Puedo cambiar la titularidad de un local que ya tenía licencia en Vera?",
        "a": "Sí. Cuando el local ya cuenta con licencia y no se modifica la actividad ni las instalaciones, el cambio de titularidad se resuelve con una comunicación al Ayuntamiento de Vera, mucho más ágil que una apertura nueva. Nosotros verificamos que la licencia previa esté vigente y preparamos la documentación del traspaso."
      },
      {
        "q": "¿Qué necesito para abrir un restaurante o chiringuito en Vera Playa?",
        "a": "Al tratarse de una actividad calificada con cocina y afluencia de público, se requiere proyecto técnico de actividad, cumplimiento de condiciones de higiene, ventilación, insonorización y accesibilidad, y en zona de dominio público marítimo-terrestre pueden intervenir autorizaciones adicionales. Redactamos el proyecto y coordinamos toda la tramitación ante el Ayuntamiento de Vera."
      }
    ],
    "keywordsExtra": [
      "licencia apertura restaurante Vera Playa",
      "licencia chiringuito Vera",
      "licencia apartamento turístico Vera",
      "proyecto actividad nave Vera-Garrucha",
      "licencia comercio casco urbano Vera"
    ]
  },
  {
    "slug": "mojacar",
    "nombre": "Mojácar",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Mojácar para chiringuitos, restaurantes y bares del Paseo del Mediterráneo, hoteles y apartamentos turísticos, comercio del casco histórico y locales de primera línea de playa.",
    "intro1": "Mojácar vive del turismo desde hace más de medio siglo y es uno de los destinos pioneros de la costa almeriense. Con algo más de 7.500 vecinos empadronados y más de 18.000 plazas turísticas, es el único municipio de la provincia con más camas para visitantes que habitantes. El modelo es sobre todo hotelero, complementado con camping, alojamiento rural y vivienda vacacional, y el turismo sostiene en torno a 1.340 empleos directos. Esa intensidad genera una rotación constante de aperturas: chiringuitos, restaurantes, bares, heladerías, comercio de temporada y apartamentos turísticos que abren, cambian de manos o se reforman cada temporada.",
    "intro2": "En Mojácar cada apertura sigue uno de dos caminos. Las actividades inocuas se resuelven con declaración responsable y permiten abrir de inmediato; las calificadas, con más aforo, cocina o incidencia acústica y ambiental, requieren proyecto técnico y un plazo municipal mayor. Todo se presenta en la sede electrónica del Ayuntamiento de Mojácar y en la oficina virtual de tramitación de la Diputación de Almería con certificado digital o Cl@ve. Nosotros redactamos el proyecto, visitamos el local sin coste y presentamos el expediente telemáticamente por ti.",
    "zonas": [
      {
        "zona": "Mojácar Pueblo (casco histórico)",
        "desc": "Comercio de artesanía y recuerdos, galerías, restaurantes con encanto y alojamientos boutique"
      },
      {
        "zona": "Mojácar Playa y Paseo del Mediterráneo",
        "desc": "Hoteles, restaurantes, bares, heladerías y comercio de temporada en primera línea"
      },
      {
        "zona": "Las Ventanicas y El Cantal",
        "desc": "Zona hotelera y de apartamentos turísticos con hostelería de playa"
      },
      {
        "zona": "Marina de la Torre",
        "desc": "Resort de golf, hoteles y apartamentos turísticos con restauración vinculada al campo"
      },
      {
        "zona": "Macenas",
        "desc": "Playa y entorno natural con chiringuitos y hostelería estacional"
      },
      {
        "zona": "Sopalmo",
        "desc": "Núcleo rural del sur con casas rurales, agroturismo y pequeña restauración"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Mojácar?",
        "a": "En la sede electrónica del Ayuntamiento de Mojácar y en la oficina virtual de tramitación de la Diputación de Almería, con certificado digital o Cl@ve. El registro presencial está en la Plaza del Ayuntamiento, 1. La presentación es telemática y nos encargamos nosotros con tu autorización."
      },
      {
        "q": "¿Qué actividades son las más habituales en Mojácar?",
        "a": "La hostelería manda: restaurantes, bares, heladerías y chiringuitos en Mojácar Playa y el Paseo del Mediterráneo, junto con apartamentos y viviendas de uso turístico. En el casco histórico predominan el pequeño comercio, las galerías y los alojamientos con encanto."
      },
      {
        "q": "¿Cuánto tarda la licencia en Mojácar?",
        "a": "Con declaración responsable, la apertura es prácticamente inmediata al presentar el expediente completo. Para actividades calificadas (hostelería con cocina, ocio o mayor aforo) el plazo municipal suele ir de 2 a 6 meses según la complejidad."
      },
      {
        "q": "Voy a coger un local que ya funcionaba, ¿necesito tramitar algo?",
        "a": "Sí. El cambio de titularidad se comunica al Ayuntamiento de Mojácar y conviene comprobar que la licencia anterior cubre tu actividad y las instalaciones actuales. Si has reformado o cambias el uso, hay que actualizar el proyecto. Lo revisamos en la visita antes de firmar presupuesto."
      },
      {
        "q": "¿Qué necesita un chiringuito o local en primera línea de playa en Mojácar?",
        "a": "Además de la licencia municipal, los establecimientos sobre el dominio público marítimo-terrestre necesitan autorización de Costas. A ello se suman la justificación acústica, la salida de humos si hay cocina y los requisitos de accesibilidad. Coordinamos el proyecto con todos estos trámites."
      }
    ],
    "keywordsExtra": [
      "licencia chiringuito Mojácar",
      "licencia apartamento turístico Mojácar",
      "licencia restaurante Mojácar Playa",
      "proyecto actividad hostelería Mojácar",
      "licencia bar Paseo del Mediterráneo"
    ]
  },
  {
    "slug": "cuevas-del-almanzora",
    "nombre": "Cuevas del Almanzora",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Cuevas del Almanzora para locales comerciales, bares y restaurantes de la costa, almacenes agrícolas, naves del polígono Los Pocicos y alojamientos turísticos.",
    "intro1": "Cuevas del Almanzora es uno de los municipios más extensos de la provincia de Almería y combina un interior agrícola de regadío con catorce kilómetros de costa. La agricultura sigue siendo el motor económico: cítricos y naranjos, cultivos hortícolas, olivar y almendro que se benefician del agua del embalse del Almanzora, con numerosos almacenes de manipulado, cooperativas y agroindustria repartidos por Guazamara, El Largo y El Alhanchete. En paralelo, el litoral de Villaricos, Palomares y Pozo del Esparto, junto al complejo residencial y de golf de Desert Springs, ha impulsado la hostelería, el comercio y los servicios. Todo ello genera una demanda constante de licencias de actividad para nuevos negocios.",
    "intro2": "La tramitación depende del tipo de negocio. Muchas actividades comerciales y de servicios de bajo impacto se ponen en marcha mediante declaración responsable, mientras que las actividades calificadas (bares, restaurantes, talleres, naves industriales o almacenes agrícolas) exigen proyecto técnico, calificación ambiental y un plazo de resolución más largo. En Abaco Ingeniería redactamos el proyecto, la memoria y la documentación técnica, y lo presentamos telemáticamente en la sede electrónica del Ayuntamiento de Cuevas del Almanzora, con desplazamiento presencial al local siempre que sea necesario.",
    "zonas": [
      {
        "zona": "Casco urbano de Cuevas del Almanzora",
        "desc": "Comercio de proximidad, hostelería, oficinas y servicios profesionales en el núcleo histórico junto al castillo."
      },
      {
        "zona": "Polígono industrial Los Pocicos",
        "desc": "Naves, talleres mecánicos, almacenes y actividades industriales que suelen requerir proyecto de actividad calificada."
      },
      {
        "zona": "Villaricos",
        "desc": "Pedanía pesquera y turística de la costa: chiringuitos, bares, restaurantes y alojamientos de temporada."
      },
      {
        "zona": "Palomares",
        "desc": "Núcleo agrícola y residencial junto al mar con comercio, almacenes hortofrutícolas y servicios."
      },
      {
        "zona": "Guazamara y El Alhanchete",
        "desc": "Zona agrícola interior con almacenes de manipulado de fruta, cooperativas y agroindustria."
      },
      {
        "zona": "Desert Springs y entorno de Pozo del Esparto",
        "desc": "Ámbito turístico-residencial con hostelería, comercio y servicios ligados al golf y la costa."
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Cuevas del Almanzora?",
        "a": "Se tramita en el Ayuntamiento de Cuevas del Almanzora a través de su sede electrónica (sede.cuevasdelalmanzora.es). Nosotros preparamos toda la documentación técnica y la presentamos telemáticamente por usted; el ayuntamiento atiende además consultas en el correo pac@cuevasdelalmanzora.es."
      },
      {
        "q": "Quiero abrir un bar o un chiringuito en Villaricos o Palomares, ¿qué necesito?",
        "a": "La hostelería es actividad calificada: requiere proyecto técnico con estudio de ruido, ventilación y protección contra incendios, además de la calificación ambiental. Redactamos el proyecto y, si el local ya cumple, gestionamos la puesta en marcha; en la costa conviene anticiparse a la temporada de verano para tener todo en regla."
      },
      {
        "q": "¿Cuánto tarda en concederse la licencia?",
        "a": "Con declaración responsable la apertura es prácticamente inmediata desde la presentación correcta del expediente. Una actividad calificada suele resolverse en un plazo aproximado de dos a seis meses, según la calificación ambiental y los informes municipales que correspondan."
      },
      {
        "q": "Voy a traspasar un local que ya tenía licencia, ¿empiezo de cero?",
        "a": "No. Si la actividad no cambia, se tramita un cambio de titularidad, mucho más ágil que una licencia nueva. Comprobamos que la licencia anterior esté vigente y que el local siga cumpliendo la normativa vigente antes de presentar el traspaso."
      },
      {
        "q": "Necesito legalizar un almacén agrícola o una nave en el polígono Los Pocicos, ¿cómo se hace?",
        "a": "Estos usos suelen exigir proyecto de actividad e instalaciones (electricidad, cámaras de frío, prevención de incendios) y, según el caso, calificación ambiental. Nos desplazamos a la nave, redactamos el proyecto adaptado al manipulado o almacenamiento previsto y presentamos el expediente completo ante el ayuntamiento."
      }
    ],
    "keywordsExtra": [
      "licencia de actividad Cuevas del Almanzora",
      "licencia chiringuito Villaricos",
      "licencia almacén agrícola Cuevas del Almanzora",
      "licencia nave polígono Los Pocicos",
      "declaración responsable Palomares"
    ]
  },
  {
    "slug": "huercal-de-almeria",
    "nombre": "Huércal de Almería",
    "comarca": "Área Metropolitana de Almería",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Huércal de Almería para naves de los polígonos San Rafael, La Cepa y Los Callejones, medianas superficies, comercios de proximidad, talleres, almacenes logísticos y hostelería.",
    "intro1": "Huércal de Almería es uno de los municipios más dinámicos del área metropolitana de la capital, a solo siete kilómetros de Almería y con cerca de 18.600 habitantes tras un crecimiento demográfico superior al 12 por ciento en la última década. Su posición estratégica junto a la A-7 y la antigua N-340a lo ha convertido en un gran polo industrial, logístico y comercial: los polígonos San Rafael, La Cepa y Los Callejones concentran naves de almacenamiento, transporte, comercio mayorista, talleres y concesionarios, mientras que el parque comercial de la avenida Emilio Peña y la calle Rosita reúne medianas superficies y restauración. Todo ello genera una demanda constante de licencias de actividad y apertura.",
    "intro2": "Cada apertura en Huércal de Almería sigue un camino distinto según su impacto. Las actividades inocuas se resuelven mediante declaración responsable, de efecto prácticamente inmediato, mientras que las calificadas, con incidencia ambiental, sanitaria o de seguridad, exigen proyecto técnico y calificación previa. En Abaco Ingeniería redactamos el proyecto, memorias y certificados, y los presentamos telemáticamente en la sede electrónica del Ayuntamiento de Huércal de Almería, con desplazamiento presencial al local para tomar mediciones y comprobar el cumplimiento normativo.",
    "zonas": [
      {
        "zona": "Casco urbano",
        "desc": "comercio de proximidad, hostelería, peluquerías, clínicas y despachos profesionales"
      },
      {
        "zona": "Polígono Industrial San Rafael",
        "desc": "naves logísticas, transporte, comercio mayorista y talleres con acceso directo a la autovía"
      },
      {
        "zona": "Polígono Industrial La Cepa",
        "desc": "naves industriales, almacenes y actividades de fabricación y reparación"
      },
      {
        "zona": "Polígono Industrial Los Callejones",
        "desc": "industria, almacenamiento y distribución de mercancías"
      },
      {
        "zona": "Avenida Emilio Peña y calle Rosita",
        "desc": "parque comercial y medianas superficies, restauración y ocio"
      },
      {
        "zona": "Urbanizaciones Los Pinos y Villa Inés",
        "desc": "nuevos comercios y servicios de proximidad en zonas residenciales de expansión"
      }
    ],
    "faqs": [
      {
        "q": "Dónde se tramita la licencia de actividad en Huércal de Almería?",
        "a": "La tramitación se realiza ante el Ayuntamiento de Huércal de Almería, en la Plaza de las Mascaranas, a través de su sede electrónica. Nosotros preparamos toda la documentación técnica y la presentamos telemáticamente por usted, evitándole desplazamientos y colas."
      },
      {
        "q": "Voy a abrir una nave de almacenamiento o logística en el polígono San Rafael. Qué necesito?",
        "a": "Para una nave en San Rafael, La Cepa o Los Callejones se necesita un proyecto técnico que justifique la actividad, la protección contra incendios, la accesibilidad y el cumplimiento urbanístico. Según el uso puede bastar una declaración responsable o requerir calificación ambiental; lo valoramos en una visita al local."
      },
      {
        "q": "Cuánto tarda en concederse la licencia?",
        "a": "Con la declaración responsable la actividad puede iniciarse de forma prácticamente inmediata tras presentar el proyecto y la documentación correcta. Las actividades calificadas, por su incidencia ambiental o de seguridad, conllevan un procedimiento más largo que suele oscilar entre dos y seis meses."
      },
      {
        "q": "Voy a traspasar un local que ya tenía licencia. Tengo que empezar de cero?",
        "a": "No. Si la actividad no cambia, basta con una comunicación previa de cambio de titularidad ante el Ayuntamiento de Huércal de Almería. Comprobamos que la licencia anterior esté vigente y en regla y tramitamos el traspaso; solo si modifica la actividad o hace obras haría falta una nueva licencia."
      },
      {
        "q": "Quiero abrir un bar o restaurante con terraza en Huércal de Almería. Qué licencias necesito?",
        "a": "La hostelería es actividad calificada: requiere proyecto técnico con insonorización, ventilación y salida de humos, además de la licencia de actividad. Si además coloca veladores en la vía pública, se tramita aparte la autorización municipal de terrazas. Preparamos ambos expedientes de forma conjunta."
      }
    ],
    "keywordsExtra": [
      "licencia apertura nave polígono San Rafael Huércal de Almería",
      "licencia actividad almacén logístico Huércal de Almería",
      "proyecto licencia local comercial Huércal de Almería",
      "declaración responsable actividad Huércal de Almería",
      "licencia bar restaurante Huércal de Almería"
    ]
  },
  {
    "slug": "macael",
    "nombre": "Macael",
    "comarca": "Valle del Almanzora",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Macael para naves de elaboración de mármol, talleres de corte y pulido, showrooms de piedra natural, industria auxiliar y comercios u hostelería del casco urbano.",
    "intro1": "Macael es la capital del mármol de España y el corazón industrial del Valle del Almanzora, al pie de la Sierra de los Filabres. Sus canteras, en explotación desde hace más de veinticinco siglos, atesoran uno de los mayores yacimientos de roca ornamental del mundo, con el reconocido Blanco Macael como producto estrella. Alrededor de la extracción se ha consolidado un potente tejido de naves de elaboración, talleres de corte y pulido, showrooms de piedra natural e industria auxiliar. Esa actividad, sumada al comercio y la hostelería que abastecen a la población, genera una demanda constante de licencias de actividad para poner en marcha o legalizar cada instalación.",
    "intro2": "No todas las aperturas se tramitan igual. Un pequeño comercio u oficina suele resolverse por declaración responsable, con inicio prácticamente inmediato, mientras que una nave de elaboración de mármol, un taller o una industria auxiliar es actividad calificada y exige proyecto técnico y, con frecuencia, calificación ambiental. En Abaco Ingeniería redactamos el proyecto, lo firmamos como ingeniero técnico industrial colegiado y lo presentamos telemáticamente en la sede electrónica del Ayuntamiento de Macael.",
    "zonas": [
      {
        "zona": "Casco urbano de Macael",
        "desc": "Comercio de proximidad, alimentación, farmacias y pequeña hostelería."
      },
      {
        "zona": "Avenida Paco Cosentino",
        "desc": "Eje principal de servicios: oficinas, banca, comercio y restauración."
      },
      {
        "zona": "Polígono Industrial Rubira Sola",
        "desc": "Naves de corte, pulido y elaboración de mármol y showrooms de piedra."
      },
      {
        "zona": "Canteras de la Sierra de los Filabres",
        "desc": "Explotaciones extractivas y plantas de machaqueo y micronizado."
      },
      {
        "zona": "Industria auxiliar del mármol",
        "desc": "Talleres de maquinaria, herramienta diamantada, abrasivos, resinas y transporte."
      },
      {
        "zona": "Entorno del Centro de Interpretación del Mármol",
        "desc": "Hostelería, restauración y turismo industrial del municipio."
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Macael?",
        "a": "La tramitación se realiza en el Ayuntamiento de Macael, en la Avenida Paco Cosentino, 33. La presentación es telemática, a través de la Oficina Virtual y la sede electrónica municipal, con certificado digital o Cl@ve. Nosotros preparamos toda la documentación y la registramos por usted."
      },
      {
        "q": "¿Qué necesito para abrir una nave de elaboración de mármol en Macael?",
        "a": "Al tratarse de una industria con corte, pulido, generación de polvo, ruido y vertidos de agua, es una actividad calificada. Requiere proyecto técnico de actividad firmado por ingeniero, en la mayoría de casos calificación ambiental, y justificación de protección contra incendios, insonorización y gestión de residuos y aguas. Lo redactamos y tramitamos completo."
      },
      {
        "q": "¿Cuánto tarda en concederse la licencia?",
        "a": "Una declaración responsable, propia de un comercio u oficina de bajo riesgo, permite iniciar la actividad de forma prácticamente inmediata tras el registro. Una actividad calificada, como una nave o un taller del mármol, suele resolverse en un plazo aproximado de dos a seis meses según los informes municipales y ambientales."
      },
      {
        "q": "¿Puedo cambiar la titularidad de un local o nave que ya tenía licencia?",
        "a": "Sí. El cambio de titularidad se tramita mediante declaración responsable siempre que la actividad no varíe y las instalaciones se mantengan. Revisamos que la licencia anterior esté vigente y en regla y gestionamos el traspaso ante el Ayuntamiento de Macael."
      },
      {
        "q": "¿Una cantera o una planta de tratamiento de mármol necesita licencia ambiental?",
        "a": "Sí. Las explotaciones extractivas y muchas plantas de machaqueo, micronizado o tratamiento de la Sierra de los Filabres están sometidas a instrumentos de prevención ambiental, como la calificación o la autorización ambiental, además de la licencia de actividad. Le indicamos el procedimiento que corresponde a su caso y lo tramitamos."
      }
    ],
    "keywordsExtra": [
      "licencia nave mármol Macael",
      "licencia taller corte y pulido Macael",
      "proyecto actividad calificada mármol Macael",
      "licencia showroom piedra natural Macael",
      "calificación ambiental nave mármol Macael"
    ]
  },
  {
    "slug": "albox",
    "nombre": "Albox",
    "comarca": "Valle del Almanzora",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Albox para tiendas de muebles y decoración, comercio, hostelería, talleres y naves de elaboración de mármol del Valle del Almanzora.",
    "intro1": "Albox es la capital comercial del Valle del Almanzora: su casco urbano concentra el comercio que abastece a toda la comarca, con una densidad de tiendas de muebles, decoración y colchonerías poco habitual para su tamaño, junto a moda, electrodomésticos, concesionarios y grandes superficies como Mercadona, Lidl y Dia. El mercadillo de los martes, en la Calle Ramón y Cajal, es uno de los mayores de la provincia y atrae a compradores de toda la zona y a una notable comunidad residente extranjera, cercana al 27 por ciento de la población. A ese comercio se suma la extracción y elaboración de travertino amarillo en las canteras de Los Marcelinos y una actividad hostelera y de servicios en crecimiento. Todo ello genera una demanda constante de aperturas de locales y naves.",
    "intro2": "Cada apertura sigue uno de dos caminos. Las actividades inocuas, la mayoría del comercio y muchos servicios, se resuelven con declaración responsable y comunicación previa, con apertura prácticamente inmediata. Las actividades calificadas, como la hostelería con cocina, los talleres o las naves de elaboración de piedra, exigen proyecto técnico y calificación ambiental antes de abrir. Redactamos el proyecto de actividad, lo firmamos como ingeniero técnico industrial colegiado y lo presentamos de forma telemática en la sede electrónica del Ayuntamiento de Albox, en albox.sedelectronica.es, acompañándote durante todo el trámite.",
    "zonas": [
      {
        "zona": "Casco urbano y Avenida América",
        "desc": "comercio minorista, tiendas de muebles y decoración, moda, alimentación y hostelería"
      },
      {
        "zona": "Calle Ramón y Cajal y entorno del mercadillo",
        "desc": "comercio de proximidad, bazares, bares y locales de restauración"
      },
      {
        "zona": "Paraje y polígono de Terdiguera",
        "desc": "naves industriales, almacenes y talleres de aserrado y elaboración de mármol"
      },
      {
        "zona": "Canteras de Los Marcelinos",
        "desc": "extracción y elaboración de travertino amarillo y piedra natural"
      },
      {
        "zona": "Pedanías de Aljambra, El Cañico y Las Labores",
        "desc": "agricultura, ganadería y pequeño comercio de proximidad"
      },
      {
        "zona": "Saliente Alto, Saliente Bajo y Locaíba",
        "desc": "núcleos rurales, alojamiento y hostelería vinculada al Santuario del Saliente"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Albox?",
        "a": "En el Ayuntamiento de Albox, con sede en la Plaza San Vicente de Paúl. La presentación es telemática a través de su sede electrónica, albox.sedelectronica.es. Nosotros redactamos el proyecto, lo firmamos como ingeniero técnico industrial colegiado y lo presentamos con certificado digital, así que no tienes que desplazarte."
      },
      {
        "q": "¿Qué tipo de negocio se abre con más frecuencia en Albox?",
        "a": "El comercio, y en especial las tiendas de muebles, decoración y colchones, que son una seña de identidad de Albox como capital comercial del Valle del Almanzora. También son frecuentes las aperturas de moda, alimentación, bazares y hostelería. Para la mayoría de estos comercios basta una declaración responsable, con apertura inmediata."
      },
      {
        "q": "¿Cuánto tarda en tramitarse la licencia?",
        "a": "Con declaración responsable el local puede abrir en el momento de presentar la documentación completa; la comprobación municipal es posterior y no frena la actividad. Si se trata de una actividad calificada, como hostelería con cocina o una nave industrial, el plazo hasta la resolución suele ir de 2 a 6 meses según la complejidad del proyecto."
      },
      {
        "q": "¿Puedo cambiar la titularidad de un local que ya tenía licencia?",
        "a": "Sí. Si el local ya contaba con licencia o declaración responsable en regla y no cambian la actividad ni las instalaciones, el cambio de titularidad se resuelve con una comunicación en el Ayuntamiento de Albox. Revisamos que la documentación anterior esté correcta y tramitamos el cambio; si la actividad se modificó, valoramos si hace falta un nuevo proyecto."
      },
      {
        "q": "¿Cómo se legaliza una nave de elaboración de mármol o travertino en Albox?",
        "a": "Las naves de aserrado, corte y pulido de piedra del entorno de Terdiguera y de las canteras de Los Marcelinos son actividades calificadas: requieren proyecto técnico y calificación ambiental que justifique el control del ruido, del polvo y la gestión del agua y los lodos de corte. Redactamos el proyecto completo con sus instalaciones y lo tramitamos ante el Ayuntamiento de Albox."
      }
    ],
    "keywordsExtra": [
      "licencia tienda de muebles Albox",
      "licencia nave mármol Terdiguera Albox",
      "licencia actividad comercio Albox",
      "proyecto apertura local Albox",
      "licencia cantera travertino Albox"
    ]
  },
  {
    "slug": "pulpi",
    "nombre": "Pulpí",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Pulpí para tu licencia de actividad: comercios y oficinas en el casco urbano, chiringuitos y restaurantes en San Juan de los Terreros, y almacenes de manipulado hortofrutícola, talleres y naves en el Polígono Industrial.",
    "intro1": "Pulpí es el municipio más septentrional de la provincia, en el Levante Almeriense y a un paso de Murcia, y su economía descansa sobre dos motores muy distintos. Por un lado, una potente agricultura intensiva al aire libre: sus campos figuran entre los mayores productores europeos de lechuga iceberg, cogollos, brócoli, apio, sandía y melón, con grandes almacenes de manipulado y comercializadoras que exportan a Alemania, Reino Unido y Francia. Por otro, el turismo del litoral en San Juan de los Terreros, con trece kilómetros de costa, urbanizaciones residenciales y una hostelería estacional muy viva. A ello se suma el tirón geoturístico de la Geoda de Pulpí, en Pilar de Jaravía. Todo este tejido genera una demanda constante de licencias para comercios, restaurantes, alojamientos, talleres y naves agroindustriales.",
    "intro2": "En la mayoría de comercios, oficinas y pequeños locales la apertura se resuelve mediante declaración responsable, que permite iniciar la actividad de forma casi inmediata tras su presentación. Las actividades calificadas o con incidencia ambiental (hostelería con cocina, talleres, industria agroalimentaria o naves con procesos) exigen proyecto técnico y calificación, con plazos más amplios. En Abaco Ingeniería redactamos el proyecto, la memoria y la documentación técnica y la presentamos telemáticamente en la sede electrónica del Ayuntamiento de Pulpí, integrada en la plataforma provincial de la Diputación de Almería y accesible con Cl@ve.",
    "zonas": [
      {
        "zona": "Casco urbano de Pulpí",
        "desc": "comercio de proximidad, oficinas, farmacias, bares y pequeña hostelería"
      },
      {
        "zona": "San Juan de los Terreros",
        "desc": "chiringuitos, restaurantes, apartamentos turísticos y comercio de temporada en el litoral"
      },
      {
        "zona": "Polígono Industrial de Pulpí (junto a la A-350)",
        "desc": "naves, almacenes, talleres mecánicos y empresas de servicios agroindustriales"
      },
      {
        "zona": "Pilar de Jaravía",
        "desc": "hostelería y comercio ligados a la Geoda de Pulpí y la Mina Rica"
      },
      {
        "zona": "Pozo de la Higuera y La Fuente",
        "desc": "explotaciones agrícolas y almacenes de manipulado hortofrutícola"
      },
      {
        "zona": "El Convoy y La Estación",
        "desc": "talleres, servicios agrarios y comercio rural en las pedanías"
      }
    ],
    "faqs": [
      {
        "q": "¿Dónde se tramita la licencia de actividad en Pulpí?",
        "a": "La tramitación se realiza ante el Ayuntamiento de Pulpí, a través de su sede electrónica integrada en la plataforma de la Diputación de Almería, con acceso mediante Cl@ve. Nosotros redactamos el proyecto y presentamos toda la documentación de forma telemática, sin que tengas que desplazarte."
      },
      {
        "q": "¿Qué licencia necesito para un almacén de manipulado hortofrutícola o una nave agrícola en Pulpí?",
        "a": "Al tratarse de una actividad con incidencia ambiental y procesos productivos, suele exigir proyecto técnico y calificación ambiental. Redactamos la memoria de actividad, las instalaciones y las medidas correctoras necesarias para naves del Polígono Industrial o de las zonas agrícolas de Pozo de la Higuera y La Fuente."
      },
      {
        "q": "¿Cuánto tarda en tramitarse la licencia?",
        "a": "Una declaración responsable para un comercio u oficina permite abrir prácticamente de inmediato tras su presentación. Una actividad calificada (hostelería con cocina, taller o industria) requiere calificación y suele resolverse en un plazo aproximado de dos a seis meses, según la complejidad y los informes municipales."
      },
      {
        "q": "¿Puedo reabrir un local que ya tuvo licencia o cambiar la titularidad del negocio?",
        "a": "Sí. Si el negocio mantiene la misma actividad y las instalaciones cumplen la normativa vigente, el cambio de titularidad es un trámite sencillo mediante comunicación al Ayuntamiento de Pulpí. Revisamos antes que la licencia anterior sea válida y que no haya habido reformas que obliguen a un nuevo proyecto."
      },
      {
        "q": "¿Qué necesito para abrir un chiringuito o un restaurante en San Juan de los Terreros?",
        "a": "La hostelería con cocina y la actividad en primera línea de costa se consideran actividad calificada: hace falta proyecto técnico con instalaciones, ventilación e insonorización y, según la ubicación, autorizaciones sectoriales por el dominio público marítimo-terrestre. Preparamos toda la documentación con margen para llegar a la temporada de verano del litoral de Pulpí."
      }
    ],
    "keywordsExtra": [
      "licencia actividad Pulpí",
      "licencia chiringuito San Juan de los Terreros",
      "licencia nave Polígono Industrial Pulpí",
      "licencia almacén hortofrutícola Pulpí",
      "proyecto apertura restaurante San Juan de los Terreros"
    ]
  },
  {
    "slug": "carboneras",
    "nombre": "Carboneras",
    "comarca": "Levante Almeriense",
    "heroSub": "Proyecto técnico y tramitación ante el Ayuntamiento de Carboneras para abrir tu negocio: bares, restaurantes y alojamientos del paseo marítimo, comercios del casco urbano, naves y talleres del polígono industrial e industria auxiliar del entorno portuario.",
    "intro1": "Carboneras es uno de los grandes polos industriales del Levante Almeriense y, al mismo tiempo, un municipio pesquero y turístico en plena costa mediterránea. Su economía combina la fábrica de cemento de Holcim (la antigua Hornos Ibéricos), la central térmica del Litoral en proceso de reconversión, una de las mayores plantas desaladoras de España y un puerto pesquero muy activo dedicado al palangre y el arrastre. A ese tejido se suman el comercio del casco urbano, la hostelería del paseo marítimo y un turismo de playa en crecimiento. Por eso conviven aquí licencias muy distintas: desde bares, comercios y alojamientos hasta talleres, almacenes, naves logísticas e industria auxiliar.",
    "intro2": "La tramitación depende del tipo de negocio. Muchas actividades comerciales y de servicios de bajo impacto se abren mediante declaración responsable, con puesta en marcha prácticamente inmediata una vez presentada la documentación. Otras, como industria, talleres o locales de hostelería con cocina, se consideran actividades calificadas y requieren proyecto técnico y, según el caso, evaluación ambiental. En Ábaco Ingeniería redactamos el proyecto, preparamos la documentación y la presentamos telemáticamente a través de la sede electrónica del Ayuntamiento de Carboneras, con desplazamiento presencial al local cuando hace falta.",
    "zonas": [
      {
        "zona": "Casco urbano y paseo marítimo",
        "desc": "comercio minorista, bares, restaurantes, cafeterías y alojamientos turísticos"
      },
      {
        "zona": "Playas urbanas (Las Marinicas, Los Barquicos-Cocones y El Ancón)",
        "desc": "chiringuitos, kioscos, ocio y servicios de temporada de bandera azul"
      },
      {
        "zona": "Polígono Industrial de Carboneras",
        "desc": "naves, almacenes, talleres mecánicos e industria auxiliar junto a la N-341"
      },
      {
        "zona": "Entorno portuario (puerto pesquero y puerto industrial)",
        "desc": "lonja, comercialización de pescado, frío industrial, náutica y logística"
      },
      {
        "zona": "Barriadas del interior (El Llano de Don Antonio, El Argamasón, El Saltador, La Cueva del Pájaro y Gafares)",
        "desc": "explotaciones agrícolas y ganaderas, naves rurales y pequeño comercio de proximidad"
      },
      {
        "zona": "El Algarrobico y accesos al Parque Natural Cabo de Gata-Níjar",
        "desc": "alojamiento rural, hostelería y servicios turísticos de naturaleza"
      }
    ],
    "faqs": [
      {
        "q": "Dónde se tramita una licencia de actividad en Carboneras?",
        "a": "Las licencias y declaraciones responsables de apertura se gestionan en el Ayuntamiento de Carboneras, con presentación telemática a través de su sede electrónica (carboneras.sedelectronica.es). En Ábaco Ingeniería preparamos toda la documentación técnica y la presentamos por ti, evitándote desplazamientos y trámites."
      },
      {
        "q": "Quiero abrir un bar o restaurante en el paseo marítimo de Carboneras, qué necesito?",
        "a": "La hostelería con cocina se considera actividad calificada, así que necesita proyecto técnico y justificación de las condiciones de ruido, ventilación de humos, extracción y seguridad contra incendios, además de evaluación ambiental en muchos casos. Redactamos el proyecto, coordinamos la puesta en marcha y tramitamos la licencia ante el ayuntamiento."
      },
      {
        "q": "Cuánto se tarda en poder abrir con la licencia?",
        "a": "Depende del tipo de actividad. Con declaración responsable, un comercio o servicio de bajo impacto puede iniciar la actividad de forma prácticamente inmediata tras presentar la documentación. Una actividad calificada (industria, taller, hostelería) conlleva revisión municipal e informes sectoriales, con plazos habituales de entre 2 y 6 meses."
      },
      {
        "q": "Voy a traspasar un local que ya tenía licencia, hay que hacer algún trámite?",
        "a": "Si el local ya contaba con licencia en regla y no cambias la actividad ni realizas obras, normalmente basta con comunicar el cambio de titularidad al Ayuntamiento de Carboneras. Revisamos que la licencia anterior siga siendo válida y tramitamos la comunicación para que el negocio siga funcionando sin interrupciones."
      },
      {
        "q": "Necesito abrir una nave o un taller en el Polígono Industrial de Carboneras, cómo es el proceso?",
        "a": "Las naves, almacenes y talleres del polígono suelen ser actividades calificadas: requieren proyecto técnico, justificación de instalaciones (electricidad, contra incendios, gestión de residuos) y, según la actividad, autorización ambiental. Nos desplazamos a la nave, tomamos datos y redactamos el proyecto adaptado a tu proceso productivo, y lo tramitamos ante el ayuntamiento."
      }
    ],
    "keywordsExtra": [
      "licencia de actividad Carboneras",
      "licencia apertura bar paseo marítimo Carboneras",
      "licencia nave polígono industrial Carboneras",
      "proyecto actividad calificada Carboneras",
      "licencia chiringuito playa Carboneras"
    ]
  }
];

export function getMunicipio(slug: string): MunicipioAlmeria | undefined {
  return MUNICIPIOS_ALMERIA.find((m) => m.slug === slug);
}

export function buildMunicipioMetadata(m: MunicipioAlmeria): Metadata {
  const path = `/licencia-actividad-${m.slug}`;
  return {
    title: `Licencia de Actividad y Apertura en ${m.nombre} | Ingeniero`,
    description: `Proyecto técnico y tramitación de licencia de actividad en ${m.nombre}: comercios, hostelería, talleres, naves e industrias. Ingeniero colegiado, visita sin coste y presupuesto cerrado.`,
    keywords: [
      `licencia de actividad ${m.nombre}`,
      `licencia de apertura ${m.nombre}`,
      `proyecto licencia ${m.nombre}`,
      `ingeniero ${m.nombre}`,
      ...m.keywordsExtra,
    ],
    alternates: { canonical: path, languages: { "es-ES": path } },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url: `${siteUrl}${path}`,
      siteName: "Abaco Ingeniería",
      title: `Licencia de Actividad en ${m.nombre}`,
      description: `Tramitación completa de licencia de actividad en ${m.nombre}.`,
      images: [
        {
          url: "/images/og-abaco.jpg",
          width: 1200,
          height: 630,
          alt: `Licencia de actividad ${m.nombre} – Abaco Ingeniería`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Licencia de Actividad ${m.nombre}`,
      description: "Proyecto técnico e ingeniero colegiado.",
      images: ["/images/og-abaco.jpg"],
    },
  };
}
