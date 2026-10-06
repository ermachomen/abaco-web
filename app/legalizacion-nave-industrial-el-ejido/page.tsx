import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-el-ejido";

export const metadata: Metadata = {
  title: "Legalizar nave en El Ejido: licencia o fuera de ordenación",
  description: "Legalizar nave en El Ejido: obra, actividad e instalaciones. Licencia o asimilado a fuera de ordenación. Ingeniero colegiado. Estudio previo gratuito.",
  keywords: ["legalizar nave en El Ejido","legalización de nave industrial El Ejido","legalizar almacén El Ejido","legalizar nave sin licencia Poniente","licencia nave El Ejido","asimilado a fuera de ordenación El Ejido","legalizar almacén de manipulado El Ejido","ingeniero legalización nave El Ejido","regularizar nave ampliada Poniente almeriense"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-el-ejido",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en El Ejido",
    description: "Legalizar nave en El Ejido: obra, actividad e instalaciones. Licencia o asimilado a fuera de ordenación. Ingeniero colegiado. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalizar nave en El Ejido – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en El Ejido", description: "Legalizar nave en El Ejido: obra, actividad e instalaciones. Licencia o asimilado a fuera de ordenación. Ingeniero colegiado. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalizar nave en El Ejido",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04009", addressCountry: "ES" },
  },
  areaServed: [
    { "@type": "City", name: "El Ejido" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-el-ejido",
  description: "Legalizar nave en El Ejido: obra, actividad e instalaciones. Licencia o asimilado a fuera de ordenación. Ingeniero colegiado. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Se puede legalizar una nave en El Ejido construida sin licencia?",
    "a": "Depende de su situación urbanística y de si ha transcurrido el plazo que fija la legislación urbanística para actuar contra la obra. Si todavía cabe actuar, la vía es la legalización con licencia mediante proyecto y comprobación estructural. Si ya no cabe, puede solicitarse ante el Ayuntamiento el reconocimiento de asimilado a fuera de ordenación. Tras un estudio previo gratuito te decimos cuál de las dos vías tiene recorrido en tu caso."
  },
  {
    "q": "¿Qué significa que una nave esté asimilada a fuera de ordenación?",
    "a": "Según el artículo 173 de la LISTA, son las edificaciones irregulares terminadas sobre las que ya no se pueden adoptar medidas de protección de la legalidad por haber transcurrido el plazo para ello. El Ayuntamiento debe reconocerlo mediante un procedimiento con plazo máximo de seis meses, y el silencio equivale a desestimación. Mientras no haya resolución no pueden acceder a los servicios básicos ni hacerse obras, salvo las que ordene el Ayuntamiento por seguridad."
  },
  {
    "q": "¿Mi almacén necesita licencia o declaración responsable para la actividad?",
    "a": "No lo afirmamos sin ver la actividad: depende de lo que se haga en la nave y del régimen que aplique el Ayuntamiento de El Ejido. Un almacén de manipulado, un taller y una nave logística con frío no se tratan igual. En el estudio previo identificamos la actividad real, comprobamos qué trámite corresponde y redactamos el proyecto o la documentación necesarios para presentarla por vía telemática."
  },
  {
    "q": "¿Qué instalaciones hay que legalizar además de la obra?",
    "a": "Las que tenga la nave: la eléctrica en baja tensión (Real Decreto 842/2002), la protección contra incendios y, si las hay, frío industrial, climatización o alta tensión. En incendios, el artículo 11 del Real Decreto 164/2025 prevé la comunicación al órgano de industria de la comunidad autónoma, para su registro, con proyecto o memoria técnica y certificado de técnico titulado competente. Revisamos cada instalación y su registro ante la Junta de Andalucía."
  },
  {
    "q": "¿Cuánto cuesta y cuánto tarda legalizar una nave en El Ejido?",
    "a": "Depende de la superficie, del número de ampliaciones, de la vía urbanística aplicable y de las instalaciones, y no damos cifras sin ver la nave. Tras el estudio previo gratuito entregamos un presupuesto cerrado que desglosa proyecto, certificados y tramitación. Los plazos de resolución los marcan el Ayuntamiento y la Junta, pero te informamos de cada paso y respondemos en 24 horas."
  },
  {
    "q": "¿Os desplazáis a Almerimar, Balerma o Las Norias de Daza?",
    "a": "Sí. Nos desplazamos a todos los núcleos del término de El Ejido, como Santa María del Águila, Las Norias de Daza, San Agustín, Balerma, Almerimar, Matagorda, Pampanico y Tarambana, y también a La Mojonera, Vícar, Roquetas de Mar y Adra. Visitamos la nave para medir y el resto del expediente se gestiona con firma digital FNMT, sin que tengas que ir a nuestra oficina de Almería."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalizar nave en El Ejido", item: "https://www.ingenierial.es/legalizacion-nave-industrial-el-ejido" },
  ],
};

const bloques = [
  {
    "titulo": "Naves del Poniente y papeles pendientes",
    "cuerpo": "Hay patrones que se repiten en El Ejido y su entorno. Naves ampliadas por fases, con una primera construcción autorizada y ampliaciones posteriores sin proyecto. Naves que nacieron para uso agrícola y hoy funcionan como almacén industrial, taller o centro logístico, sin que el cambio de uso se haya tramitado. Cámaras de frío, muelles de carga o altillos añadidos años después, y titulares que cambiaron sin que la actividad se actualizara. Ninguna de estas situaciones es rara y casi todas tienen vía de solución, pero cuál depende de cada caso. Por eso no empezamos por el proyecto, sino por una comparación honesta entre lo que está construido, lo que se autorizó y lo que se hace hoy dentro de la nave."
  },
  {
    "titulo": "Diagnóstico de obra, actividad e instalaciones",
    "cuerpo": "Visitamos la nave, medimos y levantamos planos de lo realmente ejecutado. Después ordenamos el expediente en las tres capas que tiene toda legalización. Primero, la obra: qué se construyó, cuándo y con qué cobertura. Segundo, la actividad: qué se hace hoy en la nave y si cuenta con licencia o declaración responsable que la ampare. Tercero, las instalaciones: electricidad, protección contra incendios y, si las hay, frío industrial o climatización, con su registro ante la Junta. El diagnóstico termina en un informe claro con las vías posibles, el orden recomendado de los trámites y un presupuesto cerrado. El estudio previo es gratuito y no te compromete, y si algo no tiene recorrido te lo decimos desde el principio."
  },
  {
    "titulo": "Licencia o asimilado a fuera de ordenación",
    "cuerpo": "Si todavía cabe actuar urbanísticamente sobre la nave, la vía es legalizarla con licencia: proyecto de legalización, levantamiento de lo construido y comprobación de la seguridad estructural. Si ya no es posible adoptar medidas de protección de la legalidad por haber transcurrido el plazo que fija la legislación urbanística, entra el artículo 173 de la Ley 7/2021 (LISTA): las edificaciones irregulares terminadas en esa situación «se encuentran en situación de asimilado a fuera de ordenación». Corresponde al Ayuntamiento resolver el reconocimiento, con un plazo máximo de seis meses y desestimación por silencio. Hasta que haya resolución, esa edificación no puede acceder a los servicios básicos ni se pueden hacer obras en ella, salvo las que ordene el Ayuntamiento por seguridad."
  },
  {
    "titulo": "Actividad ante el Ayuntamiento de El Ejido",
    "cuerpo": "Una nave regularizada en lo constructivo sigue necesitando que su actividad esté amparada ante el Ayuntamiento de El Ejido. Según la actividad, se tramita mediante licencia o mediante declaración responsable, y eso solo se decide analizando qué se hace realmente en la nave: manipulado y envasado, almacén de suministros, taller de maquinaria, logística con frío o industria auxiliar no se tratan igual. Redactamos el proyecto de actividad con la descripción de procesos, maquinaria, superficies y medidas de seguridad, y presentamos la documentación por vía telemática. Si compraste una nave con actividad previa o cambiaste de uso, revisamos si basta una actualización o hace falta un expediente nuevo, y coordinamos los tiempos con la obra y las instalaciones para que ninguna capa retrase a las demás."
  },
  {
    "titulo": "Instalaciones: frío, baja tensión y contra incendios",
    "cuerpo": "Las instalaciones son la capa que más se descuida en naves ampliadas por fases. La instalación eléctrica en baja tensión se rige por el Real Decreto 842/2002 (REBT) y se documenta y registra ante la Junta de Andalucía. En protección contra incendios, el artículo 11 del Real Decreto 164/2025 establece que para la puesta en servicio de un establecimiento industrial se comunica al órgano de industria de la comunidad autónoma, para su registro, el proyecto o memoria técnica y un certificado de técnico titulado competente que acredite la adecuación de las instalaciones al proyecto y el cumplimiento de las prescripciones reglamentarias. Si la nave tiene cámaras o maquinaria de frío industrial, las tratamos con su propia documentación técnica y su registro."
  },
  {
    "titulo": "Cómo trabajamos",
    "cuerpo": "Primero, un estudio previo gratuito: nos cuentas qué nave tienes y qué te preocupa, y vamos a verla. Medimos, contrastamos con la documentación existente y te entregamos un diagnóstico con las vías posibles. Con tu conformidad fijamos un presupuesto cerrado que desglosa proyecto, certificados y tramitación, para que sepas el coste antes de empezar; las tasas de las administraciones se suman aparte y no dependen de nosotros. Redactamos y firmamos los proyectos y certificados con firma digital FNMT, dirigimos la obra cuando procede y gestionamos el expediente ante el Ayuntamiento de El Ejido y la Junta de Andalucía. Te informamos de cada paso y respondemos en 24 horas. No prometemos resultados que dependen de la administración: te decimos con franqueza qué recorrido tiene tu nave."
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
          <li aria-current="page" className="text-slate-700">{"Legalizar nave en El Ejido"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves del Poniente · El Ejido"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalizar nave en El Ejido"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalización de nave industrial en El Ejido: almacenes de manipulado, talleres y naves logísticas con obra, actividad o instalaciones pendientes. Diagnóstico, proyecto y tramitación ante el Ayuntamiento, con estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El Poniente almeriense está lleno de naves que crecieron al ritmo del negocio: un almacén de manipulado hortofrutícola al que se añadió una cámara, una nave de suministros agrícolas ampliada hacia la parcela contigua, un taller de maquinaria que empezó como simple almacén o una nave de transporte refrigerado que cambió de uso sin tocar la documentación. Cada fase se hizo con prisa y casi nunca se cerró el papel. El resultado es una nave en pleno funcionamiento cuyo expediente no coincide con lo construido. Eso se nota el día que quieres vender, pedir financiación, contratar un seguro o ampliar, y también cuando llega un requerimiento. Somos una oficina técnica de Almería y nos desplazamos a cualquier núcleo de El Ejido para medir y diagnosticar."}</p>
          <p>{"Trabajamos en El Ejido, Santa María del Águila, Las Norias de Daza, San Agustín, Balerma, Almerimar, Matagorda, Pampanico y Tarambana, y también en La Mojonera, Vícar, Roquetas de Mar y Adra. Un ingeniero técnico industrial colegiado desde 1983 revisa tu nave sobre el terreno, contrasta lo construido con lo autorizado y te explica, antes de que gastes en proyectos, qué capas hay que resolver: la obra, la actividad y las instalaciones. Redactamos y firmamos los proyectos y certificados, y tramitamos ante el Ayuntamiento de El Ejido y ante la Junta de Andalucía con firma digital FNMT."}</p>
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
          <li>·{" "}<Link href="/legalizacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-agricola-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de nave agrícola"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-el-ejido" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en El Ejido"}</Link></li>
          <li>·{" "}<Link href="/tasaciones-el-ejido" className="text-sky-700 underline hover:no-underline">{"Tasaciones en El Ejido"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-camara-frigorifica-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de cámara frigorífica"}</Link></li>
          <li>·{" "}<Link href="/proyecto-electrico-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto eléctrico de nave industrial"}</Link></li>
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
