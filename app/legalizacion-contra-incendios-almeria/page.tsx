import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-contra-incendios-almeria";

export const metadata: Metadata = {
  title: "Legalización y Proyecto Contra Incendios (PCI) en Almería",
  description: "Proyecto y legalización de protección contra incendios (PCI) en Almería: RSCIEI en naves y CTE DB-SI en locales. Presupuesto cerrado y estudio previo gratis.",
  keywords: ["legalización contra incendios Almería","proyecto protección contra incendios Almería","proyecto PCI Almería","RSCIEI Almería","RD 164/2025 incendios","CTE DB-SI Almería","protección contra incendios naves Almería","certificado instalación contra incendios Almería","plan de autoprotección Almería","nivel de riesgo intrínseco carga de fuego","inspección OCA incendios Almería","ingeniero protección contra incendios Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-contra-incendios-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización y proyecto de protección contra incendios (PCI) en Almería",
    description: "Proyecto y legalización de protección contra incendios (PCI) en Almería: RSCIEI en naves y CTE DB-SI en locales. Presupuesto cerrado y estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización y proyecto de protección contra incendios (PCI) en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización y proyecto de protección contra incendios (PCI) en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización y proyecto de protección contra incendios (PCI) en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-contra-incendios-almeria",
  description: "Proyecto y legalización de protección contra incendios (PCI) en Almería: RSCIEI en naves y CTE DB-SI en locales. Presupuesto cerrado y estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Mi nave necesita un proyecto de protección contra incendios o basta un certificado de instalación?",
    "a": "Depende del alcance. Si solo instalas o renuevas equipos concretos (extintores, BIEs, detección), suele bastar el certificado de instalación que emite la empresa instaladora autorizada. Cuando hay que justificar la seguridad del conjunto de la nave o del local (sectorización, carga de fuego, evacuación, sistemas exigibles) o abrir actividad, la normativa pide un proyecto o memoria firmada por ingeniero. En el estudio previo gratuito te decimos qué necesitas exactamente."
  },
  {
    "q": "¿Se aplica el RSCIEI o el CTE DB-SI a mi caso?",
    "a": "El criterio es el uso. Si es un establecimiento industrial (nave de producción, almacén, taller) se aplica el RSCIEI, basado en el nivel de riesgo intrínseco y la carga de fuego. Si es un uso no industrial (comercio, oficina, hostelería, sanitario, pública concurrencia) se aplica el Documento Básico SI del Código Técnico. Un mismo edificio puede tener zonas de cada tipo; en ese caso justificamos cada sector con su reglamento."
  },
  {
    "q": "¿Ha cambiado la normativa de incendios industriales en 2025?",
    "a": "Sí. El RD 164/2025 aprobó un nuevo RSCIEI que sustituye al RD 2267/2004, vigente durante más de veinte años. Entre otras cosas revisa el cálculo de la carga de fuego y del nivel de riesgo intrínseco, de modo que algunas naves y almacenes suben de categoría y pasan a exigir más medidas (detección, extinción automática, sectorización, control de humo). Redactamos ya los proyectos conforme al reglamento vigente."
  },
  {
    "q": "¿Cuánto cuesta un proyecto de PCI en Almería?",
    "a": "Depende de la superficie, la ocupación, el nivel de riesgo y los sistemas necesarios. De forma orientativa, un proyecto de protección contra incendios para una nave suele moverse entre unos 900 y 3.500 euros, y un certificado de instalación de sistemas concretos entre 80 y 300 euros, sin contar tasas ni la ejecución de la instalación. Tras el estudio previo te damos un presupuesto cerrado, sin variaciones posteriores."
  },
  {
    "q": "¿Cada cuánto hay que inspeccionar la instalación contra incendios?",
    "a": "Además del mantenimiento periódico (revisiones trimestrales, semestrales y anuales por empresa mantenedora), la instalación pasa inspecciones de un Organismo de Control Autorizado (OCA). En establecimientos industriales la periodicidad depende del riesgo: cada cinco años en riesgo bajo, cada tres en medio y cada dos en alto. En el ámbito del RIPCI la inspección reglamentaria suele ser cada diez años. Te ayudamos a planificar los plazos."
  },
  {
    "q": "¿Trabajáis solo en Almería y también hacéis el plan de autoprotección?",
    "a": "Somos oficina técnica con sede en Almería e ingeniero colegiado desde 1983. Tramitamos el 100% online con firma FNMT en toda España y nos desplazamos a Almería capital y provincia (y a Granada, Málaga y Murcia) para medir e inspeccionar. Si tu actividad está obligada por aforo, altura o carga de fuego, redactamos también el plan de autoprotección y lo inscribimos en el registro de la Junta de Andalucía."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización y proyecto de protección contra incendios (PCI) en Almería", item: "https://www.ingenierial.es/legalizacion-contra-incendios-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "RSCIEI: naves y establecimientos industriales",
    "cuerpo": "Las naves, almacenes y talleres se rigen por el Reglamento de Seguridad Contra Incendios en Establecimientos Industriales, hoy actualizado por el RD 164/2025, que sustituye al histórico RD 2267/2004. El proyecto parte de calcular la densidad de carga de fuego ponderada y corregida para fijar el nivel de riesgo intrínseco (de 1 a 8, agrupado en bajo, medio y alto). De ese nivel y de la superficie del sector dependen la sectorización, la resistencia al fuego de la estructura y los sistemas de detección y extinción exigibles."
  },
  {
    "titulo": "CTE DB-SI: locales, comercios y pública concurrencia",
    "cuerpo": "Cuando el uso no es industrial (comercio, oficina, hostelería, sanitario, docente o cualquier local de pública concurrencia) se aplica el Documento Básico SI del Código Técnico de la Edificación. Aquí los medios de PCI se fijan por uso y superficie: extintores en casi todos los casos, BIEs en establecimientos comerciales de más de 500 m2, detección y alarma según la ocupación, más las condiciones de evacuación, sectorización y resistencia al fuego. Justificamos el DB-SI en el proyecto del local o del bar-restaurante."
  },
  {
    "titulo": "RIPCI: certificado de instalación, mantenimiento e inspecciones",
    "cuerpo": "Los equipos y sistemas (extintores, BIEs, detección, rociadores, hidrantes, grupos de presión) se diseñan, instalan y mantienen conforme al Reglamento de Instalaciones de Protección Contra Incendios, el RD 513/2017. La instalación la ejecuta y certifica una empresa instaladora autorizada e inscrita en la Junta de Andalucía; nosotros redactamos el proyecto y coordinamos ese certificado de instalación. Después llegan el mantenimiento periódico (trimestral, semestral y anual) y las inspecciones por Organismo de Control Autorizado (OCA) en función del riesgo."
  },
  {
    "titulo": "PCI y licencia de actividad: un mismo expediente",
    "cuerpo": "El proyecto de protección contra incendios rara vez va solo: es una parte del proyecto de licencia de actividad de la nave o el local. Al abrir un negocio o legalizar una nave, la PCI se integra con la instalación eléctrica, la climatización y el resto de medidas en un único expediente. Lo coordinamos de principio a fin para que la memoria de incendios, la licencia municipal y la puesta en servicio encajen y no se rechace ningún trámite por incoherencias entre documentos."
  },
  {
    "titulo": "Plan de autoprotección y puesta en servicio ante Industria",
    "cuerpo": "Determinadas actividades, por aforo, altura o carga de fuego, deben contar además con un plan de autoprotección inscrito en el registro autonómico de Andalucía. Valoramos si tu establecimiento entra en el catálogo, redactamos el plan cuando procede y presentamos toda la documentación de PCI de forma telemática ante la Delegación de la Junta de Andalucía, con certificado de instalación, certificado final de obra y la puesta en servicio que deja la instalación legalizada y lista para funcionar o inspeccionar."
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
          <li aria-current="page" className="text-slate-700">Legalización y proyecto de protección contra incendios (PCI) en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización y proyecto de protección contra incendios (PCI) en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Redactamos el proyecto y legalizamos la protección contra incendios de naves, almacenes y locales en Almería, con RSCIEI o CTE DB-SI según el uso, certificado de instalación y puesta en servicio. Ingeniero técnico industrial colegiado desde 1983 y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La protección contra incendios (PCI) es el conjunto de medidas constructivas y de instalación (sectorización, resistencia al fuego de la estructura, detección, extintores, BIEs, hidrantes, rociadores, control de humo, alumbrado de emergencia y señalización) que un edificio debe cumplir para funcionar con seguridad. Legalizarla significa justificar por proyecto o memoria que la nave o el local cumple la normativa y dejar la instalación registrada ante Industria. Es obligatoria al abrir o reformar naves industriales, almacenes, talleres, comercios y locales de pública concurrencia, y es una de las piezas centrales de la licencia de actividad. En Almería la necesitan a diario polígonos, almacenes de manipulado hortofrutícola, naves logísticas y hostelería."}</p>
          <p>{"En Abaco Ingeniería lo resolvemos como oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia. Calculamos la carga de fuego y el nivel de riesgo, redactamos el proyecto o la memoria de PCI, coordinamos con la empresa instaladora autorizada el certificado de instalación y tramitamos la puesta en servicio ante la Junta de Andalucía. Firmamos con certificado digital FNMT, así que trabajamos el 100% online en toda España y nos desplazamos a Almería capital y provincia. Estudio previo gratuito y presupuesto cerrado, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones y registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia y proyecto de actividad</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial y puesta en servicio en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-climatizacion-almeria" className="text-sky-700 underline hover:no-underline">Legalización de climatización (RITE) en Almería</Link></li>
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
