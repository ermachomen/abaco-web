import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-huercal-de-almeria";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Huércal de Almería · La Cepa",
  description: "Legalizamos naves en los polígonos La Cepa, San Rafael y Venta Alegre de Huércal de Almería: actividad, incendios y electricidad. Estudio previo gratuito.",
  keywords: ["legalizar nave industrial Huércal de Almería","legalización de naves Huércal de Almería","licencia de actividad nave Huércal de Almería","polígono industrial La Cepa","polígono industrial San Rafael Huércal","polígono industrial Venta Alegre","proyecto contra incendios nave Huércal de Almería","boletín eléctrico nave Huércal de Almería","ingeniero industrial Huércal de Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-de-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Huércal de Almería",
    description: "Legalizamos naves en los polígonos La Cepa, San Rafael y Venta Alegre de Huércal de Almería: actividad, incendios y electricidad. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Huércal de Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Huércal de Almería", description: "Legalizamos naves en los polígonos La Cepa, San Rafael y Venta Alegre de Huércal de Almería: actividad, incendios y electricidad. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Huércal de Almería",
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
    { "@type": "City", name: "Huércal de Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-de-almeria",
  description: "Legalizamos naves en los polígonos La Cepa, San Rafael y Venta Alegre de Huércal de Almería: actividad, incendios y electricidad. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar una nave en La Cepa, San Rafael o Venta Alegre?",
    "a": "No damos un plazo sin ver la nave, porque depende de qué capas haya que resolver: licencia de actividad, instalaciones o situación urbanística. También influye que la documentación de partida esté completa y lo que tarden el Ayuntamiento y la Junta en resolver. Tras la visita y el estudio previo gratuito te decimos qué pasos hay, en qué orden conviene darlos y cuáles dependen de nosotros y cuáles de la administración."
  },
  {
    "q": "¿Puedo alquilar una nave en Huércal de Almería para montar un taller?",
    "a": "Puedes, pero antes de firmar conviene comprobar que la actividad de taller encaja con la licencia que tiene la nave y con el uso que permite su situación urbanística. También hay que revisar la instalación eléctrica y la protección contra incendios, porque un taller suele exigir más que un almacén. Nos mandas los datos o vamos a verla, y te decimos qué falta antes de que firmes el contrato."
  },
  {
    "q": "¿Se legaliza por separado una nave que es un módulo dentro de un conjunto de naves?",
    "a": "Depende de cómo esté construido y de qué figure en el expediente. Cada módulo suele tener su propia actividad, pero hay elementos compartidos, como la estructura, las instalaciones generales o la sectorización contra incendios, que se estudian en conjunto. Visitamos el módulo y revisamos la documentación del conjunto para decirte qué parte es tuya y qué parte hay que coordinar con los vecinos."
  },
  {
    "q": "¿Una nave pequeña también necesita proyecto contra incendios?",
    "a": "Toda nave industrial se clasifica según el Real Decreto 164/2025 por su tipo y su nivel de riesgo intrínseco, sea grande o pequeña. Lo que cambia con esa clasificación es qué instalaciones exige y si basta una memoria técnica o hace falta proyecto. No lo afirmamos sin conocer la actividad y lo que se almacena. En la visita lo determinamos y te explicamos qué documentación corresponde."
  },
  {
    "q": "¿Trabajáis también en Viator, Benahadux y Pechina?",
    "a": "Sí. Nos desplazamos a naves de Viator, donde está el Polígono Industrial La Juaida, y también de Benahadux y Pechina, además de las de Huércal de Almería. La visita se hace en la propia nave para tomar datos y ver la actividad real; el resto del expediente, desde los proyectos hasta la tramitación, se gestiona online con firma digital FNMT."
  },
  {
    "q": "¿Qué debo tener a mano antes de que vayáis a ver la nave?",
    "a": "Todo lo que tengas, aunque esté incompleto: escritura o contrato, licencias o autorizaciones anteriores, boletines y certificados de instalaciones, planos y recibos de suministro. Si no tienes nada, tampoco pasa nada, porque parte del diagnóstico consiste en averiguar qué existe y qué no. En la visita medimos, comprobamos lo que hay y te decimos qué documentos faltan."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Huércal de Almería", item: "https://www.ingenierial.es/legalizacion-nave-industrial-huercal-de-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Tres capas, no una",
    "cuerpo": "Legalizar una nave en Huércal de Almería significa resolver tres cosas que siguen caminos distintos. La primera es la licencia de actividad ante el Ayuntamiento: que lo que se hace hoy en la nave esté amparado por el trámite que corresponda. La segunda son las instalaciones ante Industria, en la Junta de Andalucía: electricidad, incendios, climatización y lo que haya, con su documentación técnica y su registro. La tercera es la situación urbanística de la nave, es decir, si se construyó con licencia, si se ha ampliado desde entonces y si encaja con el planeamiento, algo que en Andalucía regula la Ley 7/2021, LISTA. Una capa en orden no arregla las otras, y conviene saber en cuál estás antes de gastar nada."
  },
  {
    "titulo": "Los polígonos de Huércal de Almería",
    "cuerpo": "El Polígono Industrial La Cepa, el Polígono Industrial San Rafael, el Polígono Industrial Venta Alegre, el Polígono Industrial San Silvestre y el Polígono Industrial Alfa son los entornos industriales donde más a menudo nos piden visitar una nave. En polígonos así es habitual encontrar naves de almacenaje, talleres, pequeña industria, distribución y logística, muchas divididas en módulos que se alquilan o se venden por separado. Esa división es una fuente de problemas: cada módulo puede tener un uso distinto del que figura en el expediente original. No damos por supuesto qué hay en cada polígono; lo comprobamos en la nave. Si la tuya está en otro punto del término, también vamos, y lo mismo si está en Viator, en el Polígono Industrial La Juaida, o en Benahadux y Pechina."
  },
  {
    "titulo": "Incendios según el Real Decreto 164/2025",
    "cuerpo": "El Real Decreto 164/2025 es el reglamento de seguridad contra incendios en los establecimientos industriales. Lo primero es clasificar la nave: por su tipo, de A a E, según cómo se sitúa respecto a otros edificios y a la parcela, y por su nivel de riesgo intrínseco, que depende de la actividad y de lo que se almacena. De esa clasificación sale lo que hay que instalar. Lo que suele faltar en las naves que revisamos son extintores sin mantenimiento acreditado, alumbrado de emergencia incompleto, señalización que no corresponde a la distribución actual y ninguna documentación que justifique el nivel de riesgo. Las instalaciones y su mantenimiento se rigen además por el Real Decreto 513/2017, RIPCI. Redactamos el proyecto o la memoria y el certificado cuando procede."
  },
  {
    "titulo": "Electricidad: baja tensión y centro de transformación",
    "cuerpo": "La instalación eléctrica de una nave se rige por el Real Decreto 842/2002, REBT. Según la actividad, la potencia prevista y las características del local, bastará una memoria técnica o hará falta un proyecto firmado por técnico competente; eso se decide con los datos de la nave delante, no antes. Muchas naves llegan con cuadros ampliados sin esquema, líneas añadidas para maquinaria nueva y una instalación que ya no coincide con la documentación registrada. Si la nave tiene alta tensión o un centro de transformación propio, entra el Real Decreto 337/2014, con su documentación y su puesta en servicio. Si hay o quieres instalar autoconsumo solar, se rige por el Real Decreto 244/2019 y se tramita por separado."
  },
  {
    "titulo": "Casos en los que nos llaman",
    "cuerpo": "Hay cinco situaciones que se repiten. La primera, compraventa o alquiler de una nave ya en uso: conviene revisar antes de firmar qué licencia ampara la actividad y si las instalaciones están registradas. La segunda, cambio de actividad: lo que servía para un almacén no sirve sin más para un taller. La tercera, ampliación: un altillo, una cubierta o una oficina nueva, con la parte no industrial sujeta al Código Técnico, Real Decreto 314/2006, en lo que aplique. La cuarta, nave antigua sin papeles, donde primero se estudia su situación urbanística. La quinta, el requerimiento: una inspección o una comunicación de la administración que pide documentación. Cuanto antes se mira, más margen queda para ordenar las cosas."
  },
  {
    "titulo": "Cómo trabajamos",
    "cuerpo": "Empezamos con una visita a la nave para tomar datos, ver la actividad real y revisar las instalaciones. Con eso hacemos el diagnóstico: qué está en orden, qué falta y en qué orden conviene resolverlo. Te entregamos un estudio previo gratuito y un presupuesto cerrado, para que sepas el coste antes de decidir. Si seguimos adelante, redactamos y firmamos los proyectos, memorias y certificados, y tramitamos ante el Ayuntamiento y la Delegación de Industria de la Junta. Salvo la visita, todo se hace online con firma digital FNMT, así que no tienes que perder una mañana en ventanillas. Respondemos en 24 h y no prometemos resultados que dependen de la administración: te decimos con franqueza qué recorrido tiene tu nave."
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
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Huércal de Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves en Huércal de Almería"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Huércal de Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos naves industriales en La Cepa, San Rafael y Venta Alegre: licencia de actividad, instalaciones registradas ante Industria y situación urbanística aclarada. Visitamos la nave y el resto lo tramitamos online con firma digital."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Una nave en Huércal de Almería rara vez falla por una sola cosa. Lo habitual es que la actividad cambie de manos, que alguien añada un altillo o una cámara, que el contrato de alquiler pida un certificado que nadie tiene y que el expediente acabe contando algo distinto de lo que hay dentro. Esa distancia entre papeles y realidad la vemos una y otra vez, y casi siempre se puede ordenar si se empieza por mirar la nave y no por rellenar impresos. Trabajamos en los polígonos La Cepa, San Rafael, Venta Alegre, San Silvestre y Alfa, y nos desplazamos a la nave para tomar datos y hacer el diagnóstico antes de proponerte ningún gasto."}</p>
          <p>{"Somos un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia en instalaciones. Redactamos y firmamos los proyectos, memorias técnicas y certificados de la nave: baja tensión, alta tensión y centros de transformación, protección contra incendios, climatización y ventilación, autoconsumo solar y licencia de actividad. Presentamos el expediente ante el Ayuntamiento y ante la Delegación de Industria de la Junta. Después de la visita, todo se hace online con firma digital FNMT. Trabajamos también en el vecino Viator, donde está el Polígono Industrial La Juaida, y en Benahadux y Pechina. El estudio previo es gratuito, el presupuesto es cerrado y respondemos en 24 h."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-huercal-de-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Huércal de Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar una nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico en Almería"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de nave industrial en Almería"}</Link></li>
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
