import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-nijar";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Níjar · Campohermoso y San Isidro",
  description: "Legalizamos naves y almacenes en Campohermoso, Santa Olaya, La Granatilla y San Isidro, en Níjar: actividad, incendios y electricidad. Estudio previo gratuito.",
  keywords: ["legalizar nave industrial Níjar","legalización de naves Níjar","licencia de actividad nave Níjar","polígono industrial Campohermoso","polígono industrial Santa Olaya","polígono de la Granatilla","sector industrial Los Grillos San Isidro","legalizar almacén Campohermoso","legalizar nave San Isidro Níjar","ingeniero industrial Níjar"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-nijar",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Níjar",
    description: "Legalizamos naves y almacenes en Campohermoso, Santa Olaya, La Granatilla y San Isidro, en Níjar: actividad, incendios y electricidad. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Níjar – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Níjar", description: "Legalizamos naves y almacenes en Campohermoso, Santa Olaya, La Granatilla y San Isidro, en Níjar: actividad, incendios y electricidad. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Níjar",
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
    { "@type": "City", name: "Níjar" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-nijar",
  description: "Legalizamos naves y almacenes en Campohermoso, Santa Olaya, La Granatilla y San Isidro, en Níjar: actividad, incendios y electricidad. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar una nave en el polígono de Campohermoso?",
    "a": "No damos un plazo sin ver la nave. Depende de si falta la licencia de actividad, de si hay que registrar instalaciones o de si hay que aclarar la situación urbanística, y de lo que tarden en resolver el Ayuntamiento y la Junta. Tras la visita y el estudio previo gratuito te decimos qué pasos habría, cuáles dependen de nosotros y cuáles no, y en qué orden convendría darlos."
  },
  {
    "q": "¿Podéis venir a una nave de San Isidro o de Los Grillos?",
    "a": "Sí. Visitamos naves en el sector industrial Los Grillos de San Isidro, en el núcleo de San Isidro y en el resto del término. La visita sirve para medir, ver la actividad y revisar las instalaciones; el resto del expediente, con proyectos, certificados y tramitación, se resuelve online con firma digital FNMT, así que no necesitas desplazarte a ninguna parte."
  },
  {
    "q": "¿Puedo alquilar una nave en Níjar para un almacén de manipulado?",
    "a": "Puedes, siempre que la nave y su licencia admitan esa actividad. Un manipulado exige más que un simple almacén: instalación eléctrica adecuada, protección contra incendios acorde con su riesgo y, a veces, cámaras frigoríficas. Antes de firmar, conviene revisar la licencia, las instalaciones y la situación urbanística. Si nos pasas los datos o nos dejas verla, te decimos qué habría que ordenar."
  },
  {
    "q": "¿Qué hago si mi nave del Polígono Santa Olaya no tiene los papeles?",
    "a": "Reúne lo que tengas, aunque sea poco: escritura, recibos, boletines o fotos. Después visitamos la nave y reconstruimos el expediente: qué se construyó, qué actividad se hace y qué instalaciones hay. Con eso se ve qué documentos faltan y por dónde empezar. Antes de gastar en proyectos, el estudio previo gratuito te da una idea clara de las vías posibles."
  },
  {
    "q": "¿Qué pasa si recibo un requerimiento de la administración sobre mi nave?",
    "a": "Lo primero es no dejarlo pasar y mirar qué documentación pide exactamente. Nos lo mandas y lo revisamos: a menudo lo que falta es un certificado, un proyecto o una actualización de la licencia, y se puede preparar con tiempo. Visitamos la nave si hace falta y te decimos qué presentar y con qué prioridad. No prometemos resultados, pero sí orden."
  },
  {
    "q": "¿Se puede legalizar la parte de oficinas y aseos de una nave?",
    "a": "Sí, y se trata aparte de la parte industrial. En lo que aplique, esa zona se rige por el Código Técnico, Real Decreto 314/2006, mientras que la actividad y las instalaciones siguen su propia normativa. Revisamos en la visita qué parte es oficina o servicio, cómo está construida y qué documentación necesita, para que todo el expediente encaje."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Níjar", item: "https://www.ingenierial.es/legalizacion-nave-industrial-nijar" },
  ],
};

const bloques = [
  {
    "titulo": "Qué significa legalizar una nave en Níjar",
    "cuerpo": "Una nave legalizada en Níjar ha resuelto tres frentes distintos. El primero es la licencia de actividad ante el Ayuntamiento: lo que se hace en la nave tiene que estar amparado por el trámite que corresponda. El segundo son las instalaciones, que se documentan y se registran ante Industria, en la Junta de Andalucía. El tercero es la situación urbanística de la nave, que en Andalucía se trata conforme a la Ley 7/2021, LISTA, y que pesa especialmente en edificaciones levantadas hace tiempo, ampliadas por partes o destinadas hoy a un uso diferente del original. Muchas veces un propietario cree tener un problema de papeles cuando en realidad tiene dos o tres; separarlos es lo primero que hacemos."
  },
  {
    "titulo": "Campohermoso, Santa Olaya, La Granatilla y Los Grillos",
    "cuerpo": "Atendemos naves en el Polígono Industrial de Campohermoso (I-3), en el Polígono Industrial Santa Olaya, en el Polígono de la Granatilla y en el sector industrial Los Grillos de San Isidro. En los núcleos agrícolas de Campohermoso y San Isidro es habitual encontrar almacenes de manipulado, naves de suministros, cámaras y talleres que dan servicio a las explotaciones; en los polígonos puede haber además almacenaje, logística, talleres y pequeña industria. Son referencias generales, no un inventario ni una descripción de cada polígono: lo que cuenta es la actividad real de tu nave. También vamos a naves fuera de estos polígonos, repartidas por el término."
  },
  {
    "titulo": "Protección contra incendios en tu nave",
    "cuerpo": "Con el Real Decreto 164/2025, cada establecimiento industrial se clasifica por tipo, de A a E, y por nivel de riesgo intrínseco, y de ahí se deduce qué protección necesita. Dos naves del mismo tamaño pueden resultar muy distintas: no pesa igual un almacén de producto envasado que un taller con combustibles. En las naves que revisamos suele faltar la clasificación justificada, la señalización al día, el alumbrado de emergencia completo o el mantenimiento acreditado de los equipos, que se rige por el Real Decreto 513/2017, RIPCI. Una vez visto el caso, preparamos el proyecto o la memoria y el certificado que correspondan y los registramos."
  },
  {
    "titulo": "Instalación eléctrica y energía",
    "cuerpo": "En baja tensión, el Real Decreto 842/2002, REBT, es la referencia. Que baste una memoria técnica o que haga falta proyecto depende de la actividad y de las características de la instalación, y lo decidimos con la nave a la vista. En zonas alejadas del núcleo es frecuente que la nave tenga su propio centro de transformación o acometida en alta tensión, que se rige por el Real Decreto 337/2014 y requiere su documentación. También revisamos la climatización y ventilación conforme al Real Decreto 1027/2007, RITE, y las instalaciones de autoconsumo solar conforme al Real Decreto 244/2019, cada vez más presentes en cubiertas de naves de la zona."
  },
  {
    "titulo": "Situaciones frecuentes en el término",
    "cuerpo": "La compraventa o el alquiler de una nave en uso, cuando el nuevo titular necesita licencia a su nombre y certificados al día. El cambio de actividad, por ejemplo de almacén a manipulado o de almacén a taller. La ampliación con altillos, cubiertas, cámaras u oficinas, donde la parte no industrial se somete al Código Técnico, Real Decreto 314/2006, en lo que aplique. La nave antigua sin papeles, cuya situación urbanística se estudia antes de proponer nada. Y los requerimientos de inspección, que piden documentación concreta. En todos ellos el primer paso es el mismo: ver la nave y contrastar lo construido con lo que consta en los papeles."
  },
  {
    "titulo": "De la visita a la tramitación",
    "cuerpo": "La visita a la nave es el punto de partida: tomamos datos, medimos y valoramos las instalaciones. Con ella redactamos el diagnóstico y el estudio previo gratuito, donde vas a ver qué falta y en qué orden resolverlo. Después te damos un presupuesto cerrado. Si lo aceptas, elaboramos y firmamos los proyectos, memorias y certificados con firma digital FNMT y los presentamos ante el Ayuntamiento y la Delegación de Industria de la Junta. Todo ello online, de modo que no hacen falta más desplazamientos. Te informamos en cada fase, respondemos en 24 h y te decimos con claridad qué depende de nosotros y qué de la administración."
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
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Níjar"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves en Níjar y Campohermoso"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Níjar"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos naves y almacenes en los polígonos de Campohermoso, Santa Olaya y La Granatilla y en el sector Los Grillos de San Isidro: actividad, instalaciones y situación urbanística. Visita a la nave y gestión online."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El término de Níjar es extenso y su actividad industrial está repartida. Hay naves en los núcleos agrícolas de Campohermoso y San Isidro, vinculadas en buena medida a la producción hortícola de la zona, y otras en polígonos de uso más variado. Esa dispersión complica algo que en otros sitios se resuelve con una llamada: encontrar a un técnico que se desplace de verdad a la nave. Nosotros vamos. Visitamos la nave, medimos, vemos qué actividad se hace y qué instalaciones hay, y con eso te decimos si lo que tienes está en orden, si falta algo y por dónde conviene empezar, sin presupuestos a ciegas."}</p>
          <p>{"Somos un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia. Redactamos y firmamos proyectos, memorias técnicas y certificados de baja tensión, alta tensión y centros de transformación, protección contra incendios, climatización y ventilación, autoconsumo solar y licencia de actividad, y los tramitamos ante el Ayuntamiento y la Delegación de Industria de la Junta. Tras la visita, el expediente se gestiona online con firma digital FNMT, lo que evita desplazamientos innecesarios en un término tan grande como el de Níjar, y te permite seguir cada paso sin perder jornadas de trabajo. Estudio previo gratuito, presupuesto cerrado y respuesta en 24 h."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-nijar" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Níjar"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar una nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-almacen-hortofruticola-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de almacén hortofrutícola"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">{"Alta tensión y centros de transformación"}</Link></li>
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
