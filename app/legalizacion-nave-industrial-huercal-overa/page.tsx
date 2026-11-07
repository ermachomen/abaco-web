import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-huercal-overa";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Huércal-Overa y el Levante",
  description: "Legalización de naves en Huércal-Overa, Antas, Cuevas del Almanzora y Pulpí: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
  keywords: ["legalizar nave en Huércal-Overa","legalización de nave industrial Huércal-Overa","Polígono Industrial de Huércal-Overa","licencia de actividad nave Huércal-Overa","legalizar nave Levante Almeriense","ingeniero nave industrial Huércal-Overa","legalizar nave Antas Cuevas del Almanzora Pulpí","regularizar nave sin licencia Levante","proyecto contra incendios nave Huércal-Overa"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-overa",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Huércal-Overa",
    description: "Legalización de naves en Huércal-Overa, Antas, Cuevas del Almanzora y Pulpí: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Huércal-Overa – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Huércal-Overa", description: "Legalización de naves en Huércal-Overa, Antas, Cuevas del Almanzora y Pulpí: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Huércal-Overa",
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
    { "@type": "City", name: "Huércal-Overa" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-overa",
  description: "Legalización de naves en Huércal-Overa, Antas, Cuevas del Almanzora y Pulpí: licencia de actividad, instalaciones y urbanismo. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar una nave en el Polígono Industrial de Huércal-Overa?",
    "a": "No damos plazos sin ver la nave. Dependen de si ya existe licencia o hay que tramitarla, de cuántas instalaciones deben documentarse, de si hay que corregir algo en la obra y del ritmo de respuesta del Ayuntamiento y de la Delegación de Industria. Con el estudio previo gratuito te explicamos qué trámites pueden avanzar a la vez y cuáles esperan a otros, para que organices tu negocio con realismo."
  },
  {
    "q": "¿Os desplazáis a Antas, Cuevas del Almanzora o Pulpí?",
    "a": "Sí. Trabajamos en todo el Levante Almeriense: en Antas, el Polígono Industrial El Real y el Polígono Industrial El Aljoroque; en Cuevas del Almanzora, el Polígono Industrial Valle de Almanzora; y en Pulpí, el Polígono Industrial La Fuente. También vamos a naves que están fuera de cualquier polígono. Visitamos la nave y el resto del expediente se tramita online con firma digital FNMT."
  },
  {
    "q": "¿Puedo alquilar una nave en Huércal-Overa para un almacén?",
    "a": "Sí, pero conviene comprobar antes de firmar que la licencia de la nave ampara una actividad como la tuya, que sus instalaciones están documentadas y registradas y que su situación urbanística es regular. Si el almacén guarda productos que cambian el riesgo de incendio, también influye en la clasificación del Real Decreto 164/2025. Podemos revisar la nave antes de que firmes y decirte qué habría que arreglar."
  },
  {
    "q": "¿Se puede regularizar una nave antigua sin licencia en Huércal-Overa?",
    "a": "Depende de su situación urbanística, que se analiza con la Ley 7/2021 (LISTA), y de qué se construyó y cuándo. No afirmamos una vía sin ver el caso. Medimos lo ejecutado, lo contrastamos con la documentación que exista y te decimos con franqueza qué recorrido tiene la nave. Después se ordenan los trámites de licencia, instalaciones y registro, empezando por lo que condiciona al resto."
  },
  {
    "q": "¿Hace falta proyecto o basta una memoria técnica para la electricidad de mi nave?",
    "a": "No se puede responder sin ver la instalación. Depende de sus características, de la actividad y de si se amplía o se modifica una instalación existente, con el Real Decreto 842/2002 como referencia. En el estudio previo lo valoramos tras la visita y te indicamos qué documento corresponde, quién lo firma y qué certificado acompaña al registro ante la Delegación de Industria."
  },
  {
    "q": "¿Qué diferencia hay entre la licencia de actividad y el registro de las instalaciones?",
    "a": "Son dos trámites distintos con administraciones distintas. La licencia de actividad se tramita ante el Ayuntamiento y autoriza la actividad en esa nave. El registro de las instalaciones, como la eléctrica o la de incendios, se hace ante la Delegación de Industria de la Junta con proyecto o memoria y certificados. Tener uno no suple el otro, y por eso revisamos ambos desde el principio."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Huércal-Overa", item: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-overa" },
  ],
};

const bloques = [
  {
    "titulo": "Legalizar una nave en Huércal-Overa: tres capas",
    "cuerpo": "En Huércal-Overa, como en cualquier municipio, legalizar una nave significa revisar tres cosas que se tramitan por separado. La licencia de actividad se resuelve ante el Ayuntamiento y ampara la actividad concreta que se ejerce en la nave. Las instalaciones, eléctrica, de incendios, de climatización o de frío, se documentan y se registran ante la Delegación de Industria de la Junta de Andalucía. Y la situación urbanística de la nave depende de cómo y cuándo se construyó, con la Ley 7/2021 (LISTA) como marco en Andalucía. Conviene saber en cuál de las tres está el problema antes de contratar nada, porque corregir una no arregla las demás y el orden de los trámites importa."
  },
  {
    "titulo": "Polígonos de Huércal-Overa y del Levante",
    "cuerpo": "El Polígono Industrial de Huércal-Overa concentra buena parte de las naves que revisamos en el municipio: es habitual encontrar naves de almacenaje, talleres, pequeña industria y servicios para el campo, siempre con matices según cada nave. Nuestro trabajo no se limita a él. En Antas actuamos en el Polígono Industrial El Real y en el Polígono Industrial El Aljoroque; en Cuevas del Almanzora, en el Polígono Industrial Valle de Almanzora; y en Pulpí, en el Polígono Industrial La Fuente. El Levante es un territorio extenso y nos desplazamos a cada polígono y a cada nave aislada; la parte documental se resuelve online, sin que tengas que moverte."
  },
  {
    "titulo": "Incendios según el Real Decreto 164/2025",
    "cuerpo": "En el Levante hay naves de usos muy distintos y por eso no existe una respuesta única en incendios. El Real Decreto 164/2025 obliga a empezar clasificando el establecimiento por su tipo, de la A a la E, y por su nivel de riesgo intrínseco, que depende de la actividad. Con esa clasificación se determina qué medidas de protección corresponden y qué documentación las acredita. En naves de Huércal-Overa y su entorno solemos encontrar actividades que han cambiado sin revisar la protección, instalaciones sin certificar o sin mantenimiento acreditado conforme al Real Decreto 513/2017 (RIPCI), y almacenamientos que han crecido sobre lo que se previó. Nuestro trabajo es ajustar la protección a la nave tal como está hoy."
  },
  {
    "titulo": "Electricidad, autoconsumo y alta tensión",
    "cuerpo": "La baja tensión de una nave se rige por el Real Decreto 842/2002 (REBT). Que haga falta proyecto o baste una memoria técnica depende de las características de la instalación y de la actividad, y lo valoramos tras la visita. En naves del Levante es frecuente que la instalación haya crecido con cada máquina nueva, con cuadros ampliados y líneas sin documentar, o que se haya sumado una instalación de autoconsumo solar, regulada por el Real Decreto 244/2019. Si la nave dispone de centro de transformación o de línea de alta tensión, interviene además el Real Decreto 337/2014, con su propia documentación. Para las zonas no industriales, como la administrativa y los aseos, tenemos presente el CTE (Real Decreto 314/2006)."
  },
  {
    "titulo": "Los casos que más nos llegan",
    "cuerpo": "En Huércal-Overa y comarca los casos se repiten. Quien compra o alquila una nave ya en uso y quiere asegurarse de que lo que recibe está en regla. Quien cambia de actividad y no sabe si su licencia le sigue valiendo. Quien amplía una nave y necesita encajar la ampliación en lo ya autorizado. Quien tiene una nave antigua sin papeles, levantada hace años sin licencia o con ampliaciones sin declarar, y necesita conocer su situación urbanística. Y quien ha recibido un requerimiento de inspección y no sabe cómo responder. En todos ellos empezamos igual: visita, comparación entre lo construido y lo documentado, y un plan de trámites ordenado por prioridades."
  },
  {
    "titulo": "Cómo trabajamos en el Levante",
    "cuerpo": "La visita es presencial y sirve para tomar datos y diagnosticar; en el Levante nos desplazamos a la nave, esté en un polígono o aislada. Con esos datos preparamos un estudio previo gratuito y un presupuesto cerrado, para que sepas qué vas a pagar antes de empezar. Después redactamos y firmamos el proyecto, las memorias técnicas y los certificados que haga falta, y los presentamos ante el Ayuntamiento y la Delegación de Industria de la Junta. Todo el trámite posterior es online, con firma digital FNMT. Contestamos en 24 horas y te explicamos cada paso con claridad, sin prometer resultados que dependen de la administración."
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
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Huércal-Overa"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves en Huércal-Overa y Levante"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Huércal-Overa"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos naves y almacenes en Huércal-Overa, en su polígono industrial y en el resto del Levante Almeriense: licencia de actividad, instalaciones ante Industria y situación urbanística. Estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Huércal-Overa, con unos 20.860 habitantes, es uno de los núcleos del Levante Almeriense y punto de paso entre varios municipios de la comarca. Sus naves y almacenes atienden actividades muy variadas, desde talleres y almacenaje hasta pequeña industria y servicios al campo, y es frecuente que hayan crecido por fases, con ampliaciones y cambios de uso que nunca llegaron al expediente. Cuando llega una compraventa, un alquiler, una financiación o un requerimiento, esa diferencia entre lo construido y lo documentado aparece de golpe. Nos desplazamos a tu nave, revisamos qué hay y te decimos qué falta antes de que gastes en proyectos."}</p>
          <p>{"Trabajamos en el Polígono Industrial de Huércal-Overa y en el resto del Levante: en Antas, el Polígono Industrial El Real y el Polígono Industrial El Aljoroque; en Cuevas del Almanzora, el Polígono Industrial Valle de Almanzora; y en Pulpí, el Polígono Industrial La Fuente. Un ingeniero técnico industrial colegiado desde 1983 firma los proyectos, memorias técnicas y certificados, y tramitamos ante el Ayuntamiento y ante la Delegación de Industria de la Junta. Tras la visita, todo se hace online con firma digital FNMT. Estudio previo gratuito, presupuesto cerrado y respuesta en 24 horas."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-huercal-overa" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Huércal-Overa"}</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">{"Alta tensión y centros de transformación"}</Link></li>
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
