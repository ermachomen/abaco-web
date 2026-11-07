import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-albox";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Albox · Valle del Almanzora",
  description: "Legalización de naves en Albox, Olula del Río, Purchena, Arboleas y Macael: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
  keywords: ["legalizar nave en Albox","legalización de nave industrial Albox","Polígono Industrial de Albox","licencia de actividad nave Albox","legalizar nave Valle del Almanzora","legalizar taller mármol Macael","ingeniero nave industrial Albox","regularizar nave sin licencia Almanzora","centro de transformación nave Albox"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-albox",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Albox",
    description: "Legalización de naves en Albox, Olula del Río, Purchena, Arboleas y Macael: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Albox – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Albox", description: "Legalización de naves en Albox, Olula del Río, Purchena, Arboleas y Macael: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Albox",
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
    { "@type": "City", name: "Albox" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-albox",
  description: "Legalización de naves en Albox, Olula del Río, Purchena, Arboleas y Macael: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar una nave en el Polígono Industrial de Albox?",
    "a": "No damos plazos sin ver la nave, porque dependen de qué falte: licencia, instalaciones, ajustes en obra o la situación urbanística. También cuenta el ritmo de respuesta del Ayuntamiento y de la Delegación de Industria. Tras el estudio previo gratuito te explicamos qué se puede hacer a la vez y qué depende de otro trámite, y así puedes planificar la apertura o la venta con criterio."
  },
  {
    "q": "¿Legalizáis talleres de piedra natural o mármol en Macael?",
    "a": "Sí. Trabajamos en Macael y su entorno del mármol. Estas naves suelen tener maquinaria de potencia y necesidades propias en electricidad e incendios, que dependen de los procesos y de lo almacenado. Visitamos el taller, clasificamos el establecimiento según el Real Decreto 164/2025, revisamos la instalación eléctrica y te decimos qué falta antes de proponerte proyecto alguno."
  },
  {
    "q": "¿Puedo alquilar una nave en Albox para un taller?",
    "a": "Puedes, pero antes de firmar comprueba que la licencia de la nave ampara una actividad como la tuya, que las instalaciones están documentadas y registradas y que la situación urbanística es regular. Un taller con maquinaria exige más a la electricidad y a la protección contra incendios que un almacén. Revisamos la nave contigo antes de la firma y te decimos qué habría que pactar en el contrato."
  },
  {
    "q": "¿Mi nave necesita un centro de transformación?",
    "a": "Depende de la potencia que necesite la actividad y de cómo se suministre la nave, y no se puede afirmar sin ver la instalación y los equipos. Si la nave ya tiene uno, su documentación se rige por el Real Decreto 337/2014. En el estudio previo valoramos la demanda real de la nave, vemos el suministro y te indicamos si hay que actuar o basta con regularizar lo que existe."
  },
  {
    "q": "¿Os desplazáis a Olula del Río, Purchena o Arboleas?",
    "a": "Sí, atendemos todo el Valle del Almanzora: Olula del Río, con su Polígono Industrial Olula del Río; Purchena, con el Polígono Industrial de Purchena; Arboleas; y Macael y su entorno. También visitamos naves que no están en un polígono. Hacemos la visita presencial para tomar datos y el resto del expediente se gestiona online con firma digital FNMT."
  },
  {
    "q": "¿Qué hago si he comprado una nave en Albox con ampliaciones sin declarar?",
    "a": "Lo primero es no tocar nada ni iniciar nuevas obras hasta saber cómo está la nave. Después la medimos, contrastamos lo construido con la documentación que haya y analizamos su situación urbanística con la Ley 7/2021 (LISTA). Con eso te decimos qué vías existen para regularizarla y en qué orden, sin prometer resultados que dependen del Ayuntamiento."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Albox", item: "https://www.ingenierial.es/legalizacion-nave-industrial-albox" },
  ],
};

const bloques = [
  {
    "titulo": "Qué hay que legalizar en una nave de Albox",
    "cuerpo": "Una nave de Albox puede estar bien en un aspecto y mal en otro, y por eso separamos lo que hay que revisar en tres capas. Primero, la licencia de actividad ante el Ayuntamiento de Albox, que ampara la actividad concreta que se hace dentro. Segundo, las instalaciones ante la Delegación de Industria de la Junta de Andalucía: la eléctrica, la de incendios, la de climatización y, si las hay, otras específicas de la actividad. Tercero, la situación urbanística de la nave, que se analiza con la Ley 7/2021 (LISTA) cuando la nave se construyó sin licencia o está fuera de ordenación. Tras revisar las tres, sabrás qué es urgente, qué puede esperar y qué depende de la administración."
  },
  {
    "titulo": "Polígonos de Albox y del Valle del Almanzora",
    "cuerpo": "En el Polígono Industrial de Albox es habitual encontrar naves de almacenaje, talleres, pequeña industria y servicios, cada una con su historia. El valle es amplio y nos desplazamos a toda la comarca. En Olula del Río trabajamos en el Polígono Industrial Olula del Río; en Purchena, en el Polígono Industrial de Purchena; también en Arboleas, y en Macael y su entorno del mármol, donde las naves de elaboración de piedra natural tienen necesidades propias de maquinaria y de potencia eléctrica. Sea cual sea el emplazamiento, el método es el mismo: ver la nave, ordenar lo que hay y proponer solo lo que hace falta."
  },
  {
    "titulo": "Incendios: clasificar bien el establecimiento",
    "cuerpo": "El Real Decreto 164/2025 parte de clasificar el establecimiento industrial por su tipo, de la A a la E, y por su nivel de riesgo intrínseco. Ese nivel no depende de que haya maquinaria pesada, sino de lo que se hace y de lo que se almacena, y por eso dos naves parecidas pueden quedar clasificadas de forma distinta. De ahí salen las medidas de protección exigibles. En el valle lo que más encontramos es una protección pensada para una actividad anterior, instalaciones sin certificado y un mantenimiento sin acreditar, que regula el Real Decreto 513/2017 (RIPCI). Revisamos la nave real y ajustamos la documentación a ella."
  },
  {
    "titulo": "Electricidad de potencia y centros de transformación",
    "cuerpo": "Las naves con maquinaria de corte, elaboración o transporte interno tienen consumos importantes, y eso condiciona la instalación. La baja tensión se rige por el Real Decreto 842/2002 (REBT), y que haga falta proyecto o baste una memoria técnica se decide tras ver la instalación. Cuando la nave tiene centro de transformación propio o línea de alta tensión, se aplica el Real Decreto 337/2014, con su documentación específica; si el suministro actual se queda corto, lo valoramos contigo. Si quieres reducir consumo con autoconsumo solar, el marco es el Real Decreto 244/2019. Para la zona administrativa y los aseos tenemos presente el CTE (Real Decreto 314/2006)."
  },
  {
    "titulo": "Situaciones habituales en Albox y alrededores",
    "cuerpo": "Compraventa o alquiler de una nave en uso, donde conviene verificar antes de firmar licencia, instalaciones y situación urbanística, porque cualquier carencia pasa al nuevo titular. Cambio de actividad, por ejemplo de almacén a taller de elaboración, que obliga a revisar licencia, incendios y electricidad. Ampliación de una nave con nueva maquinaria. Nave antigua sin papeles, levantada sin licencia o con ampliaciones no declaradas, cuya situación urbanística hay que estudiar. Y requerimientos de inspección del Ayuntamiento o de Industria, en los que conviene responder con un técnico a tu lado y con la documentación ordenada, sin improvisar plazos ni compromisos."
  },
  {
    "titulo": "De la visita al registro",
    "cuerpo": "Empezamos visitando la nave: medimos, vemos las instalaciones y entendemos la actividad. Con eso y con tu documentación preparamos un estudio previo gratuito, con las vías posibles y el orden recomendado, y un presupuesto cerrado si decides continuar. Luego redactamos y firmamos el proyecto o la memoria técnica, los certificados de cada instalación y, cuando procede, el expediente de licencia de actividad. Lo presentamos ante el Ayuntamiento y la Delegación de Industria de la Junta de Andalucía con firma digital FNMT, así que no necesitas desplazarte. Respondemos en 24 horas y no prometemos resultados que dependen de la administración: te decimos con franqueza qué recorrido tiene tu nave."
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
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Albox"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves en Albox y Almanzora"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Albox"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos naves, talleres y almacenes en Albox, en su polígono industrial y en todo el Valle del Almanzora: licencia de actividad, instalaciones ante Industria y situación urbanística. Estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Albox, con unos 12.800 habitantes, es uno de los núcleos principales del Valle del Almanzora, una comarca cuyo carácter industrial lo marca en buena parte la piedra natural y el mármol de Macael y su entorno. En el valle se mezclan talleres con maquinaria de potencia, almacenes, naves de servicios y pequeña industria, y muchas han ido creciendo sobre la marcha con nuevas máquinas, nuevos usos y ampliaciones. Ese ritmo suele dejar el expediente por detrás de la realidad. Visitamos tu nave, vemos qué se hace en ella y qué consta en los papeles, y te explicamos qué hay que resolver, en qué orden y con qué presupuesto."}</p>
          <p>{"Trabajamos en el Polígono Industrial de Albox y en todo el Valle del Almanzora: en Olula del Río, el Polígono Industrial Olula del Río; en Purchena, el Polígono Industrial de Purchena; en Arboleas; y en Macael y su entorno del mármol. Un ingeniero técnico industrial colegiado desde 1983 redacta y firma los proyectos, memorias técnicas y certificados, y los tramita ante el Ayuntamiento y la Delegación de Industria de la Junta. Tras la visita, el expediente es online con firma digital FNMT. Estudio previo gratuito, presupuesto cerrado y respuesta en 24 horas."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-albox" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Albox"}</Link></li>
          <li>·{" "}<Link href="/proyecto-electrico-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto eléctrico de nave industrial"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">{"Alta tensión y centros de transformación"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
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
