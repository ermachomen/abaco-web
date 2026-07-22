import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/proyecto-de-actividad-almeria";

export const metadata: Metadata = {
  title: "Proyecto de Actividad en Almería | Ingeniero Colegiado",
  description: "Proyecto de actividad en Almería, inocua o calificada: memoria, planos, cálculos e instalaciones firmados por ingeniero técnico industrial colegiado. Estudio previo gratis.",
  keywords: ["proyecto de actividad Almería","proyecto de actividad inocua Almería","proyecto actividad calificada Almería","memoria técnica de actividad Almería","proyecto de apertura Almería","quién firma el proyecto de actividad","ingeniero proyecto de actividad Almería","licencia ambiental Almería LEGAM","declaración responsable de actividad Almería","proyecto técnico para licencia de actividad Almería","proyecto actividad ingeniero industrial Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/proyecto-de-actividad-almeria",
    siteName: "Abaco Ingeniería",
    title: "Proyecto de actividad en Almería",
    description: "Proyecto de actividad en Almería, inocua o calificada: memoria, planos, cálculos e instalaciones firmados por ingeniero técnico industrial colegiado. Estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Proyecto de actividad en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Proyecto de actividad en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto de actividad en Almería",
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
  url: "https://www.ingenierial.es/proyecto-de-actividad-almeria",
  description: "Proyecto de actividad en Almería, inocua o calificada: memoria, planos, cálculos e instalaciones firmados por ingeniero técnico industrial colegiado. Estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Qué diferencia hay entre un proyecto de actividad y una memoria técnica?",
    "a": "El proyecto de actividad es el documento técnico completo (memoria, planos, cálculos y anexos de instalaciones) que se exige para las actividades calificadas: hostelería con cocina, talleres, industria, locales de ocio o con ruido, humos o vertidos. La memoria técnica es una versión más reducida que suele bastar para actividades inocuas de poca entidad, como una oficina o una tienda pequeña, que se tramitan por declaración responsable o comunicación previa. En ambos casos debe firmarlo un técnico competente colegiado. En el estudio previo gratuito te decimos cuál necesita tu local en Almería."
  },
  {
    "q": "¿Quién puede firmar el proyecto de actividad, un ingeniero o un arquitecto?",
    "a": "Puede firmarlo un técnico competente colegiado según el tipo de actividad. Para actividades industriales y calificadas, con instalaciones eléctricas de potencia, climatización, frío, procesos o protección contra incendios, el ingeniero técnico industrial tiene plena competencia, a menudo más ajustada que la de un arquitecto técnico. En Abaco Ingeniería firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia y firma digital FNMT válida en cualquier ayuntamiento. Esa es nuestra principal ventaja para bares, talleres, obradores, clínicas y naves."
  },
  {
    "q": "¿Mi actividad es inocua o calificada?",
    "a": "Una actividad es inocua cuando no genera molestias ni riesgos apreciables (ruido, humos, vertidos, olores o riesgo de incendio) para las personas o el entorno; es calificada cuando sí puede generarlos. La hostelería con cocina, los talleres, la industria, los gimnasios, las clínicas o el comercio con cámaras y maquinaria suelen ser calificadas. En Andalucía, con la nueva LEGAM (Ley 2/2026), las calificadas pasan por licencia ambiental municipal o declaración responsable de efectos ambientales. Clasificamos tu actividad correctamente para que el proyecto y el trámite sean los adecuados y no te pidan subsanaciones."
  },
  {
    "q": "¿El proyecto de actividad me da directamente la licencia?",
    "a": "No exactamente. El proyecto es el documento técnico; la licencia, o la declaración responsable, es la autorización municipal que se obtiene presentándolo. Sin un proyecto firmado por técnico competente no hay apertura legal. Nosotros hacemos las dos partes: redactamos el proyecto y, si lo deseas, tramitamos la licencia de actividad en Almería hasta la resolución. Si quieres ver el trámite completo, tienes más detalle en nuestra página de licencia de actividad en Almería."
  },
  {
    "q": "¿Qué normativa se aplica al proyecto de actividad en Almería?",
    "a": "Se combinan la normativa estatal y la andaluza. Del Código Técnico de la Edificación se justifican incendios (DB-SI), accesibilidad (DB-SUA) y salubridad (DB-HS); las instalaciones siguen el REBT en electricidad y el RITE en climatización; la protección contra incendios de establecimientos industriales, el RSCIEI; y el ruido, el reglamento andaluz de protección contra la contaminación acústica. La vía ambiental se rige por la nueva Ley 2/2026 para la Gestión Ambiental de Andalucía. A ello se suma la ordenanza del ayuntamiento almeriense concreto, que revisamos en cada caso."
  },
  {
    "q": "¿Trabajáis en toda la provincia y en cuánto tiempo entregáis el proyecto?",
    "a": "Sí. Somos oficina técnica con sede en Almería capital y trabajamos toda la provincia: El Ejido, Roquetas de Mar, Níjar, Vícar, Huércal de Almería, Huércal-Overa, Vera, Adra y el resto de municipios, además de Granada, Málaga y Murcia. Firmamos con certificado digital FNMT, así que tramitamos el 100% online y nos desplazamos a medir cuando hace falta. La redacción suele llevar entre 7 y 15 días desde que tenemos la información del local. Tras un estudio previo gratuito te damos un presupuesto cerrado, sin variaciones posteriores."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Proyecto de actividad en Almería", item: "https://www.ingenierial.es/proyecto-de-actividad-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto de actividad o memoria técnica: qué necesita tu local",
    "cuerpo": "El primer paso es saber qué documento exige tu caso. Si la actividad es inocua (una tienda pequeña, una oficina o un despacho sin apenas instalaciones ni molestias) suele bastar una memoria técnica más sencilla presentada con una declaración responsable o comunicación previa, al amparo de la Ley 12/2012 de liberalización del comercio minorista para locales de hasta cierta superficie. Si la actividad es calificada (hostelería con cocina, talleres, industria, ocio, o cualquier actividad con ruido, humos o vertidos) hace falta un proyecto de actividad completo. Analizamos tu actividad, la clasificamos y te confirmamos si necesitas memoria o proyecto antes de empezar, sin coste."
  },
  {
    "titulo": "Qué incluye el proyecto de actividad",
    "cuerpo": "Un proyecto de actividad bien redactado no es un trámite de relleno. Incluye la memoria descriptiva de la actividad y del local con superficies y aforo, los planos técnicos (emplazamiento, distribución, instalaciones y recorridos de evacuación), los cálculos justificativos y la justificación del cumplimiento normativo: Código Técnico de la Edificación en incendios (DB-SI), accesibilidad (DB-SUA) y salubridad (DB-HS). Añade los anexos de instalaciones que correspondan (eléctrica según el REBT, climatización y ventilación según el RITE, protección contra incendios y fontanería) y el estudio acústico conforme al reglamento andaluz de protección contra la contaminación acústica cuando la actividad lo requiere."
  },
  {
    "titulo": "Actividad calificada y licencia ambiental en Andalucía (LEGAM 2026)",
    "cuerpo": "En Andalucía, las actividades con incidencia ambiental pasan por un instrumento de prevención ambiental. Desde el 20 de junio de 2026, la nueva Ley 2/2026 para la Gestión Ambiental de Andalucía (LEGAM) sustituye a la GICA y a la antigua calificación ambiental por dos figuras de competencia municipal: la licencia ambiental, con resolución en tres meses, y la declaración responsable de efectos ambientales. El proyecto de actividad es el soporte técnico de ese trámite: justifica ante el ayuntamiento que tu local cumple en ruido, humos, residuos y seguridad. Redactamos el proyecto y encajamos la vía ambiental que corresponda a tu actividad concreta en Almería."
  },
  {
    "titulo": "Instalaciones y actividades calificadas: por qué un ingeniero industrial",
    "cuerpo": "Aquí está la diferencia que importa. Un proyecto de actividad con instalaciones de potencia, procesos, maquinaria, frío industrial o protección contra incendios de establecimiento industrial es competencia natural del ingeniero técnico industrial, no del arquitecto técnico. Firmamos con plena competencia legal las actividades industriales y calificadas, dimensionamos la instalación eléctrica, la climatización y la protección contra incendios, y coordinamos después su legalización y puesta en servicio ante la Delegación de Industria. Para un bar, un taller, un obrador, una clínica o una nave, tener detrás a un ingeniero industrial colegiado evita proyectos que se quedan cortos y expedientes que se atascan."
  },
  {
    "titulo": "De la firma a la apertura: tramitación en Almería",
    "cuerpo": "No entregamos solo un PDF. Redactamos el proyecto, lo firmamos digitalmente con certificado FNMT y, si quieres, lo presentamos de forma telemática en la sede electrónica de tu ayuntamiento de Almería junto con la declaración responsable, la comunicación previa o la licencia ambiental que proceda. Coordinamos el proyecto de actividad con el resto de trámites (licencia de obra si hay reforma, boletines e instalaciones, o el cambio de titularidad si reabres un local con licencia anterior) para que todo sea coherente. El objetivo es uno: que abras con toda la documentación en regla y sin requerimientos que retrasen meses la apertura."
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
            <Link href="C:/Program Files/Git/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Proyecto de actividad en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Proyecto de actividad en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Redactamos el proyecto de actividad de tu local, comercio o pequeña industria en Almería: memoria, planos, cálculos e instalaciones, firmado por ingeniero técnico industrial colegiado y competente en actividades calificadas. Estudio previo gratuito, presupuesto cerrado y tramitación 100% online en toda España."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si ya sabes que tu ayuntamiento te pide un proyecto de actividad, esta es tu página. El proyecto de actividad es el documento técnico que describe y justifica tu local o nave para poder abrir: memoria, planos, cálculos e instalaciones, firmado por un técnico competente. En Almería lo redactamos como oficina técnica con sede en la capital, dirigida por un ingeniero técnico industrial colegiado desde 1983. Es el mismo documento que unos llaman proyecto de apertura, memoria técnica o proyecto de licencia; lo que importa es que esté bien hecho para que el expediente municipal avance sin requerimientos y puedas poner en marcha tu negocio cuanto antes."}</p>
          <p>{"No todos los locales necesitan el mismo documento. Una actividad inocua suele resolverse con una memoria técnica y una declaración responsable; una actividad calificada, con efectos sobre el medio ambiente o las personas, exige un proyecto completo y, con la nueva Ley 2/2026 para la Gestión Ambiental de Andalucía (LEGAM), la licencia ambiental municipal o la declaración responsable de efectos ambientales. Te decimos qué te toca en un estudio previo gratuito y te damos un presupuesto cerrado. Trabajamos el 100% online con firma digital FNMT y nos desplazamos a medir por Almería capital y provincia."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">Declaración responsable de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia de bar y restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">Proyecto de actividad (guía nacional)</Link></li>
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
