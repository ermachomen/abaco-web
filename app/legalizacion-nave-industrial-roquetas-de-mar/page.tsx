import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-roquetas-de-mar";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Roquetas de Mar · Las Salinas",
  description: "Legalizamos naves y almacenes en Roquetas de Mar y en el Polígono Industrial de las Salinas: licencia, instalaciones y urbanismo. Estudio previo gratuito.",
  keywords: ["legalizar nave en Roquetas de Mar","legalización de nave industrial Roquetas de Mar","nave Polígono Industrial de las Salinas","licencia de actividad nave Roquetas de Mar","legalizar almacén Roquetas de Mar","ingeniero para nave industrial Roquetas de Mar","proyecto contra incendios nave Roquetas de Mar","regularizar nave sin licencia Poniente almeriense","comprar nave industrial Roquetas de Mar"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-roquetas-de-mar",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Roquetas de Mar",
    description: "Legalizamos naves y almacenes en Roquetas de Mar y en el Polígono Industrial de las Salinas: licencia, instalaciones y urbanismo. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Roquetas de Mar – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Roquetas de Mar", description: "Legalizamos naves y almacenes en Roquetas de Mar y en el Polígono Industrial de las Salinas: licencia, instalaciones y urbanismo. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Roquetas de Mar",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
  },
  areaServed: [
    { "@type": "City", name: "Roquetas de Mar" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-roquetas-de-mar",
  description: "Legalizamos naves y almacenes en Roquetas de Mar y en el Polígono Industrial de las Salinas: licencia, instalaciones y urbanismo. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar una nave en el Polígono Industrial de las Salinas?",
    "a": "No damos plazos sin ver la nave, porque dependen de varios factores: si la nave ya tiene licencia o se parte de cero, cuántas instalaciones hay que documentar, si hay que corregir algo en obra y el ritmo de respuesta del Ayuntamiento y de la Delegación de Industria. Tras el estudio previo gratuito te explicamos qué trámites pueden ir en paralelo y cuáles dependen de otros, para que puedas planificar con criterio."
  },
  {
    "q": "¿Puedo alquilar una nave en Roquetas de Mar para montar un taller?",
    "a": "Puedes, pero antes de firmar conviene comprobar que la nave tiene licencia para una actividad compatible con la tuya, que sus instalaciones están registradas y que su situación urbanística es regular. Un taller suele tener otras exigencias de incendios y de electricidad que un almacén. Con una visita revisamos la nave y te decimos qué habría que hacer, y a cargo de quién conviene pactarlo en el contrato."
  },
  {
    "q": "¿Qué pasa si compro una nave en Roquetas de Mar sin licencia de actividad?",
    "a": "La falta de licencia no desaparece con la compraventa: pasa al nuevo titular, que es quien puede recibir un requerimiento o ver frenada una financiación o un seguro. Antes de comprar, revisamos la documentación y la nave para saber qué falta y qué supondría regularizarla. Si ya has comprado, empezamos por el diagnóstico y ordenamos los trámites según lo que haya que resolver primero."
  },
  {
    "q": "¿Mi nave necesita proyecto de incendios según el Real Decreto 164/2025?",
    "a": "Depende de cómo clasifique el reglamento a tu establecimiento: su tipo y su nivel de riesgo intrínseco, que a su vez dependen de la actividad y de lo almacenado. No lo afirmamos sin visitar la nave. Según el caso bastará una memoria técnica o hará falta proyecto, y en ambos casos se acompaña del certificado correspondiente. Lo comprobamos en el estudio previo y te decimos qué documentación necesita tu nave."
  },
  {
    "q": "¿Trabajáis también con naves fuera del Polígono Industrial de las Salinas?",
    "a": "Sí. Nos desplazamos a las naves y almacenes de todo el término municipal de Roquetas de Mar, estén o no en un polígono. Lo que cambia no es el sitio sino lo que hay que revisar: la actividad, las instalaciones y la situación urbanística de cada nave. Visitamos la nave, tomamos datos y el resto del expediente se hace online con firma digital FNMT."
  },
  {
    "q": "¿Qué hago si el Ayuntamiento o Industria me han enviado un requerimiento sobre mi nave?",
    "a": "No lo dejes correr: lo primero es leerlo con un técnico para saber qué te piden y qué margen tienes, que figura en el propio escrito. Revisamos el requerimiento, visitamos la nave y preparamos la documentación o la respuesta que corresponda, ordenando lo que haya que corregir. No prometemos un resultado, que depende de la administración, pero sí que sabrás en qué punto estás y qué opciones tienes."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Roquetas de Mar", item: "https://www.ingenierial.es/legalizacion-nave-industrial-roquetas-de-mar" },
  ],
};

const bloques = [
  {
    "titulo": "Qué significa legalizar una nave en Roquetas de Mar",
    "cuerpo": "Legalizar una nave no es un único trámite, sino tres capas que conviene no mezclar. La primera es la licencia de actividad ante el Ayuntamiento de Roquetas de Mar: acredita que lo que se hace en la nave está autorizado en ese emplazamiento. La segunda son las instalaciones ante la Delegación de Industria de la Junta de Andalucía: electricidad, incendios, climatización o frío, cada una con su documentación y su registro. La tercera es la situación urbanística de la nave, que se rige por la Ley 7/2021 (LISTA) y afecta a las construidas sin licencia o fuera de ordenación. Una nave puede tener bien una capa y mal otra, y por eso empezamos comprobando las tres antes de proponerte nada."
  },
  {
    "titulo": "Polígono Industrial de las Salinas y naves del municipio",
    "cuerpo": "El Polígono Industrial de las Salinas es la zona industrial de Roquetas de Mar donde más a menudo nos piden revisar naves. En un entorno así es habitual encontrar naves de almacenaje, talleres, pequeña industria auxiliar y actividades de logística, aunque cada nave tiene su historia y no damos nada por supuesto sin verla. Fuera del polígono también hay naves y almacenes repartidos por el término municipal, algunos junto a zonas residenciales o agrícolas, y en ellos la compatibilidad de la actividad con el entorno pesa mucho en la licencia. Ya esté en el polígono o fuera de él, partimos de lo mismo: qué actividad hay, qué se autorizó y qué instalaciones la sostienen."
  },
  {
    "titulo": "Incendios en la nave: tipo de establecimiento y riesgo",
    "cuerpo": "El Real Decreto 164/2025 aprueba el reglamento de seguridad contra incendios en los establecimientos industriales. Lo primero es clasificar la nave: su tipo, de la A a la E, según cómo se relaciona con los edificios de alrededor, y su nivel de riesgo intrínseco, que depende de la actividad y de lo que se almacena. De esa clasificación salen las medidas exigibles. Lo que suele faltar en naves de Roquetas de Mar es la documentación más que los extintores: ausencia de proyecto o memoria técnica, instalaciones que no se corresponden con la actividad actual, o un mantenimiento que no se ha registrado según el Real Decreto 513/2017 (RIPCI). Lo revisamos y proponemos solo lo que tu nave necesita."
  },
  {
    "titulo": "Electricidad: baja tensión y, si procede, alta tensión",
    "cuerpo": "La instalación eléctrica de una nave se rige por el Real Decreto 842/2002 (REBT). Según sus características y su potencia, la nave necesitará un proyecto o bastará una memoria técnica, y eso lo decidimos tras ver la instalación y la actividad, no antes. Lo habitual es encontrar cuadros ampliados sin documentar, líneas añadidas con cada nueva máquina o un boletín que ya no refleja la nave real. Si la nave tiene centro de transformación o línea de alta tensión, se aplica el Real Decreto 337/2014 y su documentación es aparte. Para la parte no industrial, como la zona administrativa o los aseos, tenemos en cuenta el CTE (Real Decreto 314/2006) en lo que corresponda."
  },
  {
    "titulo": "Casos típicos en Roquetas de Mar",
    "cuerpo": "Estas son las situaciones que más vemos. Compraventa o alquiler de una nave que ya está en uso: conviene comprobar antes de firmar que licencia, instalaciones y situación urbanística están en regla, porque el problema pasa al nuevo titular. Cambio de actividad, por ejemplo de almacén a taller, que casi siempre exige revisar licencia, incendios y electricidad. Ampliación de una nave existente. Nave antigua sin papeles, construida sin licencia o con ampliaciones nunca declaradas, donde hay que mirar la situación urbanística con la LISTA. Y requerimientos de inspección del Ayuntamiento o de Industria, en los que contar con un técnico desde el primer día ordena la respuesta y evita decisiones precipitadas."
  },
  {
    "titulo": "Cómo trabajamos",
    "cuerpo": "Primero visitamos la nave para tomar datos y hacer el diagnóstico: es la única parte presencial. Con lo que vemos y con la documentación que tengas, preparamos un estudio previo gratuito que dice qué falta, qué vías hay y en qué orden conviene actuar. Si decides seguir, te damos un presupuesto cerrado. Después redactamos y firmamos el proyecto o la memoria técnica, los certificados de instalaciones y, cuando procede, el expediente de la licencia de actividad. Lo tramitamos ante el Ayuntamiento y ante la Delegación de Industria de la Junta de Andalucía, con firma digital FNMT y sin que tengas que desplazarte. Respondemos en 24 horas y te contamos cada paso, sin prometer resultados que dependen de la administración."
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-11 w-auto" />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Inicio</Link>
            <Link href="/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/ingenieria-industrial-almeria" className="hover:text-slate-900">Ingeniería industrial</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Roquetas de Mar"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves en Roquetas de Mar"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Roquetas de Mar"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos naves y almacenes en Roquetas de Mar y en el Polígono Industrial de las Salinas: licencia de actividad, instalaciones ante Industria y situación urbanística. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Roquetas de Mar es el municipio más poblado de la provincia después de la capital, con unos 111.240 habitantes según el INE de 2025. Esa densidad se nota en las naves: conviven almacenes, talleres y locales de servicios con zonas residenciales y comerciales, y muchas se levantaron o se reformaron sin cerrar del todo el papeleo. En Abaco Ingeniería nos desplazamos a la nave para medirla, vemos qué se hace realmente dentro y comparamos esa realidad con la licencia, los certificados y la inscripción que constan. Con ese diagnóstico sabes qué falta, en qué orden conviene resolverlo y cuánto cuesta antes de empezar, sin sorpresas ni trámites innecesarios."}</p>
          <p>{"Trabajamos en el Polígono Industrial de las Salinas y en las naves y almacenes del término municipal de Roquetas de Mar. Un ingeniero técnico industrial colegiado desde 1983 revisa cada caso sobre el terreno y firma los proyectos, memorias técnicas y certificados que hagan falta: baja tensión, protección contra incendios, climatización, autoconsumo solar o la licencia de actividad. El resto del expediente se gestiona online con firma digital FNMT, de modo que no pierdes jornadas de trabajo en ventanillas. Respondemos en 24 horas y el estudio previo es gratuito. Si tu nave no tiene arreglo por la vía que esperabas, te lo decimos con franqueza desde el principio."}</p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué incluye el servicio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {bloques.map((b) => (
              <article key={b.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{b.titulo}</h3>
                <p className="mt-3 text-slate-600">{b.cuerpo}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <h2 className="text-2xl font-bold">Servicios relacionados</h2>
        <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">
          <li>·{" "}<Link href="/legalizacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar una nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-roquetas-de-mar" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Roquetas de Mar"}</Link></li>
          <li>·{" "}<Link href="/proyecto-electrico-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto eléctrico de nave industrial"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar placas solares en Almería"}</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pide presupuesto sin compromiso</h2>
          <p className="mt-4 text-slate-300">Cuéntanos tu caso. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
