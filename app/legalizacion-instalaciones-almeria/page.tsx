import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-instalaciones-almeria";

export const metadata: Metadata = {
  title: "Legalización de Instalaciones y Registro Industrial en Almería",
  description: "Legalizamos instalaciones eléctricas, climatización, incendios y fotovoltaica en Almería: boletín, proyecto y registro industrial. Pide presupuesto gratis.",
  keywords: ["legalización de instalaciones Almería","legalización instalaciones eléctricas Almería","boletín eléctrico Almería","legalizar aire acondicionado Almería","certificado RITE Almería","legalización contra incendios Almería","legalizar placas solares Almería","legalización centro de transformación Almería","registro industrial Almería","puesta en servicio Industria Almería","ingeniero legalización instalaciones Almería","legalizar nave industrial Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-instalaciones-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de instalaciones y registro industrial en Almería",
    description: "Legalizamos instalaciones eléctricas, climatización, incendios y fotovoltaica en Almería: boletín, proyecto y registro industrial. Pide presupuesto gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de instalaciones y registro industrial en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de instalaciones y registro industrial en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de instalaciones y registro industrial en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-instalaciones-almeria",
  description: "Legalizamos instalaciones eléctricas, climatización, incendios y fotovoltaica en Almería: boletín, proyecto y registro industrial. Pide presupuesto gratis.",
};

const faqs = [
  {
    "q": "¿Necesito un boletín eléctrico o un proyecto para legalizar mi instalación?",
    "a": "El boletín eléctrico, o certificado de instalación eléctrica (CIE), lo emite un instalador autorizado y suele bastar para instalaciones pequeñas: dar de alta la luz, una ampliación de potencia o un local sencillo. Un boletín en Almería ronda los 150-200 euros orientativos. Cuando la instalación supera ciertos umbrales de potencia o es un local de pública concurrencia, la ley exige además un proyecto o una memoria técnica de diseño firmada por ingeniero. Te decimos qué necesitas en el estudio previo gratuito y, si solo hace falta boletín, te derivamos a un instalador."
  },
  {
    "q": "¿Tengo que legalizar el aire acondicionado de mi local o vivienda?",
    "a": "Depende de la potencia térmica total instalada. Los equipos de menos de 5 kW no necesitan legalización. Entre 5 y 70 kW hay que presentar una memoria técnica y el certificado RITE; por encima de 70 kW se requiere proyecto. En locales comerciales, oficinas y naves es muy habitual superar los 5 kW sumando varios equipos, así que conviene revisarlo antes de una inspección o de tramitar la licencia de actividad."
  },
  {
    "q": "Tengo placas solares sin legalizar, ¿podéis dejarlas en regla?",
    "a": "Sí. Aunque no vendemos ni instalamos placas, legalizamos instalaciones fotovoltaicas de autoconsumo que ya están montadas. Redactamos la documentación técnica que falte, tramitamos el certificado de instalación y la puesta en servicio ante la Junta de Andalucía y dejamos tu autoconsumo inscrito conforme al RD 244/2019. Es la situación típica de quien montó las placas por su cuenta, cambió de instalador o compró una nave o vivienda con fotovoltaica no registrada."
  },
  {
    "q": "¿Cómo se legaliza un centro de transformación o una instalación de alta tensión?",
    "a": "Las instalaciones de alta tensión y los centros de transformación requieren proyecto firmado por ingeniero, la conformidad de la empresa distribuidora (E-Redes en gran parte de Almería) y la puesta en servicio (PUES) ante Industria. Para un único usuario suele tramitarse mediante la ficha técnica de alta tensión, más ágil que un proyecto completo. Nos encargamos del proyecto o la ficha, de la coordinación con la distribuidora y de todo el expediente ante la Junta de Andalucía."
  },
  {
    "q": "¿Qué es el registro industrial y cómo me doy de alta en Almería?",
    "a": "El registro industrial es la inscripción de tu establecimiento o instalación en el Registro Integrado Industrial de Andalucía (RIIA), que sustituyó al antiguo REIA. No debe confundirse con el registro de la propiedad industrial, que es el de marcas y patentes. En la práctica, el alta en el registro industrial suele producirse de forma automática al presentar la puesta en servicio de la instalación ante la Delegación de Industria. Tramitamos ese alta y te facilitamos tu número de registro."
  },
  {
    "q": "¿Trabajáis solo en Almería y cuánto cuesta legalizar?",
    "a": "Somos oficina técnica con sede en Almería y ingeniero colegiado desde 1983. Tramitamos el 100% online con firma digital FNMT en toda España y nos desplazamos de forma presencial a Almería capital y provincia (y también a Granada, Málaga y Murcia) cuando hay que medir o inspeccionar la instalación. El coste depende del tipo de instalación y de su potencia; tras un estudio previo gratuito te damos un presupuesto cerrado, sin variaciones posteriores."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de instalaciones y registro industrial en Almería", item: "https://www.ingenierial.es/legalizacion-instalaciones-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Legalización de instalaciones eléctricas: baja y alta tensión",
    "cuerpo": "Legalizamos instalaciones eléctricas de baja tensión de locales comerciales, oficinas, naves y viviendas: redactamos la memoria técnica de diseño o el proyecto según la potencia y el tipo de local, y coordinamos con el instalador autorizado el boletín necesario para dar de alta o ampliar la potencia con tu compañía. Para instalaciones de alta tensión y centros de transformación redactamos el proyecto, tramitamos la ficha técnica de un solo usuario cuando procede y presentamos la puesta en servicio (PUES) ante Industria de la Junta de Andalucía."
  },
  {
    "titulo": "Climatización y aire acondicionado (RITE)",
    "cuerpo": "¿Tienes que legalizar el aire acondicionado o la climatización de tu local? Depende de la potencia térmica. Por debajo de 5 kW la instalación se considera no sujeta; entre 5 y 70 kW hace falta memoria técnica y certificado RITE; a partir de 70 kW se exige proyecto. Legalizamos equipos de aire acondicionado, aerotermia y climatización de comercios, oficinas y naves en Almería conforme al Reglamento de Instalaciones Térmicas en los Edificios, con su puesta en servicio y certificado final ante Industria."
  },
  {
    "titulo": "Protección contra incendios (PCI) en naves y locales",
    "cuerpo": "La legalización de las instalaciones de protección contra incendios es imprescindible en naves industriales, almacenes y locales de pública concurrencia, y es una de las piezas del proyecto de licencia de actividad. Redactamos y legalizamos la PCI justificando el reglamento que corresponda: el RSCIEI (RD 2267/2004) en establecimientos industriales y el CTE DB-SI en el resto. Calculamos la carga de fuego, definimos detección, extinción y evacuación y tramitamos la puesta en servicio, coordinándolo con la licencia de la nave o el local."
  },
  {
    "titulo": "Autoconsumo y placas solares fotovoltaicas",
    "cuerpo": "Legalizamos instalaciones fotovoltaicas de autoconsumo ya montadas: si tienes placas solares sin legalizar o has cambiado de instalador, tramitamos toda la documentación técnica para dejarlas en regla. Redactamos memoria o proyecto según la potencia (hasta 500 kW en baja tensión, RD 244/2019), gestionamos el certificado de instalación y la puesta en servicio (PUES) ante la Junta de Andalucía y, cuando aplica, el alta del autoconsumo. Somos ingeniería, no vendemos placas: nos ocupamos solo de la legalización de tu instalación solar, doméstica o de nave."
  },
  {
    "titulo": "Registro industrial y puesta en servicio ante Industria",
    "cuerpo": "Cuando legalizas una instalación o abres una industria, el trámite culmina con la puesta en servicio ante la Delegación de Industria de la Junta de Andalucía y, en su caso, con el alta en el Registro Integrado Industrial de Andalucía (RIIA, antes REIA). Ojo: no es el registro de marcas ni de patentes, sino la inscripción de tu establecimiento o instalación industrial. En muchos casos el alta se genera de forma automática con la propia puesta en servicio. Nosotros preparamos y presentamos toda la documentación y te entregamos tu número de registro."
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
          <li aria-current="page" className="text-slate-700">Legalización de instalaciones y registro industrial en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de instalaciones y registro industrial en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos instalaciones eléctricas de baja y alta tensión, climatización (RITE), protección contra incendios y autoconsumo fotovoltaico en Almería, con boletines, proyectos, puesta en servicio y alta en el registro industrial. Ingeniero técnico industrial colegiado, presupuesto cerrado y tramitación 100% online en toda España con desplazamiento presencial a Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La legalización de instalaciones es el trámite que convierte una instalación ya ejecutada en una instalación legal, con su documentación técnica registrada ante Industria y lista para funcionar. En Abaco Ingeniería la gestionamos para empresas, autónomos y particulares de Almería que necesitan dar de alta el suministro eléctrico de un local, adecuar una nave del polígono, poner en marcha la climatización de un comercio o inscribir su actividad en el registro industrial. El tejido almeriense (invernaderos, almacenes de manipulado, talleres, naves logísticas y hostelería en la capital y la provincia) genera a diario instalaciones que hay que legalizar antes de abrir o de contratar potencia. Nosotros nos ocupamos del proyecto, la memoria y la puesta en servicio."}</p>
          <p>{"Trabajamos como oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años legalizando instalaciones. Firmamos digitalmente con certificado FNMT, de modo que tramitamos el 100% online en toda España y, cuando el caso lo pide, nos desplazamos a tu local, nave o parcela en Almería capital y provincia. Antes de empezar hacemos un estudio previo gratuito, te explicamos si basta un boletín o hace falta proyecto y te damos un presupuesto cerrado, sin sorpresas ni añadidos posteriores."}</p>
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tipos de legalización que tramitamos</h2>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Cada instalación tiene su normativa y su trámite. Entra en el servicio
          que necesitas para ver los detalles, plazos y qué documentación exige:
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/legalizacion-instalaciones-electricas-almeria", "Instalaciones eléctricas (baja tensión)"],
            ["/boletin-electrico-almeria", "Boletín eléctrico (CIE)"],
            ["/legalizacion-alta-tension-almeria", "Alta tensión y centros de transformación"],
            ["/legalizacion-climatizacion-almeria", "Climatización y aire acondicionado (RITE)"],
            ["/legalizacion-contra-incendios-almeria", "Protección contra incendios (PCI)"],
            ["/legalizacion-placas-solares-almeria", "Placas solares y autoconsumo"],
            ["/registro-industrial-almeria", "Registro industrial"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
            >
              {label} →
            </Link>
          ))}
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
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones técnicas en Almería</Link></li>
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
