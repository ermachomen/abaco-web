import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-climatizacion-almeria";

export const metadata: Metadata = {
  title: "Legalizar aire acondicionado y climatización RITE en Almería",
  description: "Legalizamos el aire acondicionado y la climatización RITE de tu local o nave en Almería: memoria técnica o proyecto según la potencia. Estudio previo gratis.",
  keywords: ["legalizar aire acondicionado Almería","legalización climatización Almería","certificado RITE Almería","memoria técnica RITE Almería","legalizar aerotermia Almería","proyecto climatización Almería","legalización instalación térmica Almería","puesta en servicio climatización Almería","legalizar aire acondicionado local Almería","RITE Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-climatizacion-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de climatización y aire acondicionado (RITE) en Almería",
    description: "Legalizamos el aire acondicionado y la climatización RITE de tu local o nave en Almería: memoria técnica o proyecto según la potencia. Estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de climatización y aire acondicionado (RITE) en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de climatización y aire acondicionado (RITE) en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de climatización y aire acondicionado (RITE) en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-climatizacion-almeria",
  description: "Legalizamos el aire acondicionado y la climatización RITE de tu local o nave en Almería: memoria técnica o proyecto según la potencia. Estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Tengo que legalizar el aire acondicionado de mi casa?",
    "a": "Un único split doméstico de menos de 5 kW no necesita legalización, solo cumplir el RITE. El problema aparece cuando sumas varios equipos: si la potencia térmica total de la vivienda supera los 5 kW, hay que presentar memoria técnica y certificado de la instalación ante Industria. En viviendas con aerotermia también se suele superar ese umbral."
  },
  {
    "q": "¿Cuánto cuesta legalizar la climatización de un local en Almería?",
    "a": "Depende de la potencia y de si basta una memoria técnica o hace falta proyecto. Una memoria para un local entre 5 y 70 kW es bastante más económica que un proyecto de más de 70 kW. Tras el estudio previo gratuito te damos un presupuesto cerrado, sin variaciones posteriores, con la tramitación ante la Junta de Andalucía incluida."
  },
  {
    "q": "¿Qué diferencia hay entre memoria técnica y proyecto?",
    "a": "El umbral son los 70 kW de potencia térmica. Entre 5 y 70 kW basta una memoria técnica de diseño; por encima de 70 kW la ley exige un proyecto técnico completo, con más cálculos y justificaciones. Ambos deben acompañarse del certificado de la instalación e ir firmados por técnico competente cuando corresponde."
  },
  {
    "q": "¿La aerotermia se legaliza igual que el aire acondicionado?",
    "a": "Sí. La aerotermia es una instalación térmica RITE y se legaliza por potencia igual que un aire acondicionado. Como la bomba de calor de una vivienda suele pasar de 5 kW, casi siempre necesita memoria técnica, certificado y puesta en servicio. Si además lleva fotovoltaica de autoconsumo, ese es un trámite distinto que también tramitamos."
  },
  {
    "q": "Instalé el aire hace años sin legalizar, ¿se puede regularizar?",
    "a": "Sí. Legalizamos a posteriori instalaciones térmicas ya montadas: levantamos los datos reales de los equipos, redactamos la documentación que falte y presentamos el certificado y la puesta en servicio. Es lo habitual antes de una inspección, de tramitar la licencia de actividad o de la compraventa de un local o una nave."
  },
  {
    "q": "¿Tramitáis solo en Almería capital?",
    "a": "No. Somos oficina técnica con sede en Almería y tramitamos el 100% online con firma FNMT en toda España. Nos desplazamos de forma presencial a Almería capital y a la provincia (El Ejido, Roquetas, Níjar, Vera, el Poniente y el Levante) y también a Granada, Málaga y Murcia cuando hay que medir la instalación."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de climatización y aire acondicionado (RITE) en Almería", item: "https://www.ingenierial.es/legalizacion-climatizacion-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "¿Hay que legalizarlo? Los umbrales de potencia",
    "cuerpo": "La clave es la potencia térmica nominal total de la instalación, no el número de equipos. Por debajo de 5 kW no exige documentación, aunque debe cumplir el RITE. Entre 5 y 70 kW hace falta una memoria técnica de diseño más el certificado de la instalación. A partir de 70 kW la ley obliga a un proyecto firmado por técnico competente. En comercios y oficinas es fácil superar los 5 kW sumando varios splits."
  },
  {
    "titulo": "Climatización de locales, comercios y naves",
    "cuerpo": "Legalizamos la climatización de bares, restaurantes, tiendas, oficinas, clínicas y naves de Almería. Suele ser un paso dentro de la licencia de actividad: sin la instalación térmica en regla, el expediente del local queda incompleto. Definimos la potencia real, justificamos la ventilación y la calidad del aire interior (IT 1.1.4) y preparamos la documentación para que el aire acondicionado del negocio supere cualquier inspección."
  },
  {
    "titulo": "Aerotermia y bombas de calor",
    "cuerpo": "La aerotermia se rige por el mismo RITE: cuenta la potencia térmica de la bomba de calor, que se obtiene de la potencia eléctrica multiplicada por el COP. Una aerotermia de vivienda unifamiliar suele superar los 5 kW y necesita memoria técnica. Legalizamos aerotermia para climatización y agua caliente sanitaria, tanto en obra nueva como en sustituciones de caldera, y la dejamos inscrita ante Industria."
  },
  {
    "titulo": "Sustitución de equipos y reformas",
    "cuerpo": "Cambiar una caldera o los equipos de aire acondicionado también puede exigir trámite. Una reforma que aumente la potencia instalada, cambie el tipo de energía o sustituya el sistema por encima de 5 kW obliga a nueva documentación y certificado de la instalación. Nos ocupamos del papeleo cuando renuevas equipos antiguos, unificas varios splits o pasas de gasóleo o gas a aerotermia, para que la reforma quede registrada."
  },
  {
    "titulo": "Mantenimiento e inspecciones RITE",
    "cuerpo": "El RITE no acaba con la puesta en servicio. Las instalaciones de más de 70 kW deben tener contrato de mantenimiento con empresa habilitada e inspecciones periódicas de eficiencia energética; entre 5 y 70 kW se aplican revisiones según el tipo de equipo. Revisamos qué obligaciones te corresponden y regularizamos instalaciones antiguas de comercios y naves que nunca llegaron a legalizarse, algo frecuente antes de una compraventa o un traspaso."
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
            <Link href="/legalizacion-instalaciones-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Legalización</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/legalizacion-instalaciones-almeria" className="hover:text-slate-900">Legalización</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Legalización de climatización y aire acondicionado (RITE) en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de climatización y aire acondicionado (RITE) en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Resolvemos primero si tu aire acondicionado necesita legalización y después lo dejamos en regla: climatización, aerotermia y bombas de calor conforme al RITE en Almería, con presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Tengo que legalizar mi aire acondicionado: es la primera duda de cualquier comercio, oficina o vivienda de Almería que instala frío o calor, y la respuesta depende de la potencia térmica. El Reglamento de Instalaciones Térmicas en los Edificios (RITE, RD 1027/2007, actualizado por el RD 178/2021) considera instalación térmica cualquier equipo destinado al bienestar de las personas: aire acondicionado, bomba de calor, aerotermia o climatización. Por debajo de 5 kW no hay que presentar documentación; a partir de esa cifra la instalación queda sujeta y hay que registrarla ante Industria. Un split doméstico de 3,5 kW no obliga, pero varios equipos que sumen más de 5 kW en un mismo local sí lo requieren."}</p>
          <p>{"En Abaco Ingeniería somos oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años en legalizaciones. Redactamos la memoria técnica o el proyecto RITE según los kilovatios de tu instalación, emitimos el certificado y tramitamos la puesta en servicio ante la Delegación de Industria de la Junta de Andalucía. Firmamos con certificado digital FNMT, así que trabajamos el 100% online en toda España y nos desplazamos a tu local o nave en Almería capital y provincia. Estudio previo gratuito y presupuesto cerrado, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">Legalizar placas solares en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización contra incendios en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial en Almería</Link></li>
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
