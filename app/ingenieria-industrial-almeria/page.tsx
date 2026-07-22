import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/ingenieria-industrial-almeria";

export const metadata: Metadata = {
  title: "Ingeniería Industrial en Almería · Oficina Técnica",
  description: "Oficina técnica y estudio de ingeniería industrial en Almería. Ingeniero colegiado desde 1983, online con FNMT y presencial. Presupuesto: 687 46 54 86.",
  keywords: ["ingeniería industrial almería","ingeniero industrial almería","oficina técnica almería","estudio de ingeniería almería","empresa de ingeniería almería","gabinete de ingeniería almería","ingeniero técnico industrial almería","servicios de ingeniería industrial almería","consultoría industrial almería","ingeniería en almería capital","ingeniero que firme proyecto almería","proyecto de nave industrial almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/ingenieria-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería",
    description: "Oficina técnica y estudio de ingeniería industrial en Almería. Ingeniero colegiado desde 1983, online con FNMT y presencial. Presupuesto: 687 46 54 86.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34687465486",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04001", addressCountry: "ES" },
  },
  areaServed: [
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
    { "@type": "Country", name: "España" },
  ],
  url: "https://www.ingenierial.es/ingenieria-industrial-almeria",
  description: "Oficina técnica y estudio de ingeniería industrial en Almería. Ingeniero colegiado desde 1983, online con FNMT y presencial. Presupuesto: 687 46 54 86.",
};

const faqs = [
  {
    "q": "¿Qué es una oficina técnica de ingeniería y en qué se diferencia de otras opciones?",
    "a": "Una oficina técnica de ingeniería es un estudio privado formado por ingenieros que redactan, calculan y firman proyectos y documentación técnica. No somos un organismo público ni un centro de formación: somos la empresa que resuelve tu trámite. En Ábaco lo hace un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años ejerciendo en Almería y en toda España."
  },
  {
    "q": "¿Trabajáis de forma online o presencial en Almería?",
    "a": "Las dos. Trabajamos 100% online con firma digital FNMT, con plena validez legal en toda España, así que buena parte de los encargos se resuelven sin que tengas que desplazarte. Cuando hay que visitar el local, la nave o la instalación, nos desplazamos por Almería capital y provincia, y también a Granada, Málaga y Murcia."
  },
  {
    "q": "¿Podéis firmar mi proyecto como ingeniero colegiado?",
    "a": "Sí. Nuestro ingeniero técnico industrial está colegiado desde 1983 y se responsabiliza técnicamente del proyecto que firma, ya sea un proyecto de actividad, una legalización de instalaciones o el proyecto de una nave. Si solo necesitas un técnico competente que firme y tramite un trabajo concreto, cuéntanos qué tienes y te decimos cómo lo enfocamos."
  },
  {
    "q": "¿Qué servicios de ingeniería industrial ofrecéis en Almería?",
    "a": "Proyectos de actividad y licencias de apertura, legalización de instalaciones eléctricas de baja y alta tensión, climatización y protección contra incendios, registro industrial, proyectos de naves industriales y agrícolas, energía solar y autoconsumo, homologación de vehículos y fichas técnicas, y peritaciones y tasaciones. Funcionamos como oficina técnica única para todos los trámites de tu empresa."
  },
  {
    "q": "¿Hacéis proyectos de naves industriales y agrícolas en la provincia?",
    "a": "Sí. Proyectamos y legalizamos naves industriales, agrícolas y agroindustriales en El Ejido, Roquetas de Mar, Níjar, Vícar, Huércal-Overa y toda la provincia, incluidas sus instalaciones y su protección contra incendios. Tras un primer estudio te damos un precio orientativo y, si nos encargas el trabajo, un presupuesto cerrado."
  },
  {
    "q": "¿Cómo pido presupuesto y cuánto cuesta?",
    "a": "Cuéntanos tu caso por teléfono en el 687 46 54 86 o a través de la web y hacemos un estudio previo gratuito. Con esa información te damos un presupuesto cerrado, sin sorpresas: sabrás lo que cuesta antes de empezar. Cada proyecto es distinto, por eso preferimos ver el tuyo en lugar de darte una tarifa genérica."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Oficina técnica, estudio y gabinete de ingeniería en Almería",
    "cuerpo": "Cuando buscas una oficina técnica en Almería, un estudio de ingeniería o un gabinete de ingeniería, buscas lo mismo: profesionales que conviertan tu idea o tu obligación legal en un proyecto solvente y firmado. Eso es Ábaco. Redactamos memorias, planos, cálculos y documentación técnica para actividades, industrias e instalaciones, y los presentamos ante el ayuntamiento y los organismos competentes de la provincia. Un único interlocutor, del estudio inicial a la puesta en marcha."
  },
  {
    "titulo": "Un ingeniero colegiado que firma tu proyecto",
    "cuerpo": "Muchos clientes llegan buscando simplemente un ingeniero que firme su proyecto de actividad o su legalización. Aquí lo hace un ingeniero técnico industrial colegiado desde 1983, que se responsabiliza técnicamente del trabajo y lo tramita por ti. Estés en Almería o en cualquier punto de España, podemos gestionarlo en remoto con firma digital FNMT: nos envías la documentación, resolvemos dudas por teléfono o correo y firmamos. Rigor, disponibilidad y una firma con respaldo real."
  },
  {
    "titulo": "Servicios de ingeniería industrial en Almería",
    "cuerpo": "Como oficina técnica integral cubrimos todo el ciclo de tu actividad: proyectos de actividad y licencias de apertura; legalización de instalaciones eléctricas de baja y alta tensión, climatización RITE y protección contra incendios; registro industrial; proyectos de naves industriales y agrícolas; energía solar y autoconsumo; homologación de vehículos y fichas técnicas reducidas; y peritaciones judiciales, tasaciones y valoraciones. Un mismo equipo para todos los trámites técnicos de tu empresa en Almería."
  },
  {
    "titulo": "Consultoría e ingeniería de proyectos",
    "cuerpo": "Además de la tramitación, ofrecemos consultoría industrial y asesoría técnica para empresas de Almería que necesitan una mirada de ingeniería antes de invertir: viabilidad de una nueva línea o nave, adecuación de instalaciones a normativa, eficiencia energética o resolución de requerimientos de la Administración. Ponemos la ingeniería de proyectos al servicio de tu decisión, con informes claros y recomendaciones aplicables, no con teoría. Consúltanos tu caso sin compromiso."
  },
  {
    "titulo": "Naves e instalaciones en la provincia de Almería",
    "cuerpo": "El tejido industrial almeriense es marcadamente agroindustrial: almacenes de manipulado, cámaras frigoríficas y naves de confección en El Ejido, Roquetas de Mar, Níjar, Vícar o Huércal-Overa. Proyectamos y legalizamos naves industriales y agrícolas, con su protección contra incendios, sus instalaciones eléctricas y su registro industrial, y damos un precio orientativo antes de encargar. Sea una nave nueva o la regularización de una existente, lo llevamos completo hasta la licencia."
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
            <Link href="/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Ingeniería industrial en Almería: oficina técnica y estudio de ingeniería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Oficina técnica y estudio de ingeniería industrial en Almería, con ingeniero colegiado desde 1983. Proyectos, legalizaciones, licencias, peritaciones y tasaciones, 100% online con firma FNMT en toda España y atención presencial en Almería capital y provincia."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Ábaco Ingeniería (marca abacoingeniería®) es la oficina técnica de ingeniería con sede en Almería que ayuda a empresas, autónomos y particulares a poner en marcha y legalizar su actividad. Somos un estudio de ingeniería privado que redacta, calcula y firma proyectos, no un centro académico ni un organismo público: somos la empresa que resuelve tu trámite. Damos servicio a todo el tejido productivo almeriense, desde la agroindustria del Poniente y el Levante hasta el comercio y la hostelería de la capital, los talleres y las naves de los polígonos. Si buscas una empresa de ingeniería industrial en Almería capital o provincia que lleve tu proyecto de principio a fin, con criterio técnico y trato cercano, este es tu sitio."}</p>
          <p>{"Detrás de cada trabajo hay un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia firmando proyectos en toda España. Trabajamos 100% online con firma digital FNMT, lo que permite tramitar sin desplazamientos y con plena validez legal en cualquier comunidad; y cuando el caso lo exige, nos desplazamos a Almería capital y provincia (y también a Granada, Málaga y Murcia) para visitar tu local, tu nave o tu instalación. Antes de empezar hacemos un estudio previo gratuito y te damos un presupuesto cerrado, sin sorpresas ni sobrecostes."}</p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué hacemos</h2>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones y registro industrial</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones técnicas en Almería</Link></li>
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Homologación de vehículos</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencias de actividad (general)</Link></li>
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
