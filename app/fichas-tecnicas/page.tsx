import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Homologación y Fichas Técnicas Reducidas para Vehículos · Toda España",
  description:
    "Homologación y ficha técnica reducida para coches importados (UE, USA, Japón, UK), vehículos históricos, reformas, motos y quads. 100% online con firma digital FNMT, ámbito nacional, presupuesto sin compromiso.",
  keywords: [
    "ficha técnica reducida",
    "homologación vehículos",
    "homologación coche importado",
    "homologación coche americano España",
    "homologación coche USA",
    "pasar ITV coche extranjero",
    "matricular coche extranjero España",
    "matricular coche importado",
    "ingeniero homologación vehículos",
    "certificado COC vehículo",
    "homologación vehículo histórico",
    "matricular coche clásico",
    "homologación reforma vehículo",
    "homologación 4x4",
    "homologación camper",
    "rehabilitación vehículo baja definitiva",
    "RD 750/2010",
    "Orden ICT 1212/2018",
  ],
  alternates: {
    canonical: "/fichas-tecnicas",
    languages: { "es-ES": "/fichas-tecnicas" },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}/fichas-tecnicas`,
    siteName: "Abaco Ingeniería",
    title: "Homologación y Fichas Técnicas Reducidas · Coches importados, históricos y reformas",
    description:
      "Homologación de vehículos importados (USA, UE, Japón, UK), fichas técnicas reducidas, vehículos históricos y reformas. Ámbito nacional, online.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Homologación y fichas técnicas reducidas – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homologación y Fichas Técnicas Reducidas · Toda España",
    description:
      "Coches importados, históricos y reformas. Ingeniero colegiado, online.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación y Ficha Técnica Reducida de Vehículos",
  serviceType: "Homologación, ficha técnica reducida y matriculación de vehículos",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34687465486",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: `${siteUrl}/images/og-abaco.jpg`,
    logo: `${siteUrl}/images/logo-abaco1.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera de Ronda, 293",
      addressLocality: "Almería",
      postalCode: "04001",
      addressCountry: "ES",
    },
  },
  areaServed: { "@type": "Country", name: "España" },
  url: `${siteUrl}/fichas-tecnicas`,
  description:
    "Redacción y tramitación de fichas técnicas reducidas, homologaciones individuales y reformas para vehículos importados, históricos y modificados en toda España. Servicio online con firma digital FNMT.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de homologación de vehículos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Homologación de coche importado", url: `${siteUrl}/homologacion-coche-importado` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Homologación de coche USA", url: `${siteUrl}/homologacion-coche-usa` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pasar ITV con coche extranjero", url: `${siteUrl}/pasar-itv-coche-extranjero` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Homologación de vehículo histórico", url: `${siteUrl}/homologacion-vehiculo-historico` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Homologación de reforma de vehículo", url: `${siteUrl}/homologacion-reforma-vehiculo` } },
    ],
  },
};

const pasos = [
  {
    num: "01",
    title: "Rellena el formulario",
    desc: "Datos del vehículo (marca, modelo, país de origen, año, bastidor) y tipo de trámite. Cuanto más nos digas, más rápido te respondemos.",
  },
  {
    num: "02",
    title: "Estudio previo",
    desc: "Analizamos viabilidad y documentación. Te contactamos en menos de 24 h con presupuesto cerrado y los pasos a seguir.",
  },
  {
    num: "03",
    title: "Tramitación online",
    desc: "Redactamos el proyecto técnico y lo firmamos digitalmente con FNMT. No necesitas desplazamientos: todo se gestiona por correo.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Recibes la documentación lista para presentar en la ITV o la Jefatura Provincial de Tráfico correspondiente.",
  },
];

const tiposVehiculo = [
  {
    titulo: "Coche importado UE",
    desc: "Vehículos comprados en Alemania, Francia, Italia, Holanda… con homologación europea y certificado de conformidad.",
    href: "/homologacion-coche-importado",
  },
  {
    titulo: "Coche importado USA / fuera UE",
    desc: "Coches americanos, japoneses o británicos. Adaptación de luces, velocímetro km/h y emisiones para superar la ITV española.",
    href: "/homologacion-coche-usa",
  },
  {
    titulo: "Vehículo histórico / clásico",
    desc: "Clasificación de vehículos con más de 30 años (RD 892/2024), antigüedades de interés y vehículos de colección. Matriculación con placa histórica.",
    href: "/homologacion-vehiculo-historico",
  },
  {
    titulo: "Reformas y modificaciones",
    desc: "Cambio de motor, llantas, suspensión, paragolpes, snorkel, defensas, transformación a camper, vehículos taller.",
    href: "/homologacion-reforma-vehiculo",
  },
  {
    titulo: "Pasar ITV con coche extranjero",
    desc: "Inspección técnica previa a matriculación. Documentación y adaptaciones necesarias según país de origen del vehículo.",
    href: "/pasar-itv-coche-extranjero",
  },
  {
    titulo: "Rehabilitación tras baja",
    desc: "Recuperación de vehículos dados de baja definitiva en Tráfico para volverlos a matricular y circular legalmente.",
    href: "/fichas-tecnicas",
  },
  {
    titulo: "Homologación de vehículos en Almería",
    desc: "¿Estás en Almería o provincia? Hub local con ficha reducida, camper, enganche e histórico, y desplazamiento a Almería, El Ejido y Huércal.",
    href: "/homologacion-vehiculos-almeria",
  },
];

const faqs = [
  {
    q: "¿Qué es una ficha técnica reducida y para qué sirve?",
    a: "Es un documento técnico firmado por un ingeniero colegiado que recoge las características del vehículo (dimensiones, peso, potencia, emisiones, contraseña de homologación). Sirve como sustituto de la tarjeta ITV original cuando el vehículo no tiene homologación válida en España, ha sido reformado o procede del extranjero. Se exige en la inspección previa a matriculación.",
  },
  {
    q: "¿Qué es la homologación individual y cuándo hace falta?",
    a: "La homologación individual es el procedimiento de RD 750/2010 que se aplica a vehículos sin contraseña de homologación europea (CE). Es obligatoria, por ejemplo, para coches americanos, vehículos anteriores al año 2002 o coches modificados que se separan del tipo homologado. Una ficha técnica reducida basta cuando el vehículo sí tiene homologación CE válida.",
  },
  {
    q: "¿Cómo paso la ITV con un coche importado?",
    a: "El primer paso es la inspección previa a matriculación en una estación ITV. Necesitas: ficha técnica del país de origen, ficha reducida o certificado de conformidad (COC), justificantes de propiedad y, para vehículos no UE, justificante de aduana. Si el coche viene de fuera de la UE, suele ser obligatorio adaptar luces, velocímetro a km/h y comprobar emisiones.",
  },
  {
    q: "¿Tramitáis vehículos importados de USA, Japón o Reino Unido?",
    a: "Sí. Tenemos casos resueltos de vehículos procedentes de Estados Unidos, Canadá, Japón, Reino Unido, Australia y Suiza. Para coches sin homologación europea hace falta homologación individual; te indicamos qué adaptaciones físicas son necesarias antes de pasar la ITV.",
  },
  {
    q: "¿Cuánto tarda el trámite y cuál es el plazo total?",
    a: "Una ficha técnica reducida estándar se entrega en 7-15 días hábiles desde que tenemos toda la documentación. Para homologaciones individuales más complejas el plazo es de 2-4 semanas. La inspección ITV y los trámites en Jefatura de Tráfico añaden 1-2 semanas adicionales según la provincia.",
  },
  {
    q: "¿Cuánto cuesta homologar o tramitar la ficha reducida?",
    a: "Una ficha técnica reducida de un coche con homologación CE oscila entre 60 € y 150 € según urgencia. Una homologación individual completa parte de 600 €. Las reformas dependen del alcance (suspensión, llantas, motor, etc.). Tras revisar tu documentación damos presupuesto cerrado sin compromiso.",
  },
  {
    q: "¿Trabajáis a toda España? ¿Tengo que ir a Almería?",
    a: "Trabajamos en toda España de forma 100% online. La documentación se intercambia por email y se firma digitalmente con FNMT, válida ante cualquier ITV y Jefatura Provincial de Tráfico. No necesitas desplazarte salvo si lo prefieres; nuestra oficina está en Almería pero el trámite no lo requiere.",
  },
  {
    q: "¿Qué documentación necesito enviar?",
    a: "DNI/NIE del titular, factura o contrato de compraventa, ficha técnica original del país de origen (o COC si lo tiene), permiso de circulación, fotografías del vehículo (frontal, lateral, trasera, bastidor y placa fabricante), y justificante de aduana si procede de fuera de la UE.",
  },
  {
    q: "¿Qué normativa se aplica?",
    a: "RD 750/2010 (homologación individual de vehículos), Orden ICT 1212/2018 (modificaciones técnicas), RD 866/2010 (reformas), RD 2028/1986 (homologación tipo) y RD 2822/1998 (Reglamento General de Vehículos). Trabajamos con todas las versiones consolidadas vigentes.",
  },
  {
    q: "¿Puedo catalogar mi coche como vehículo histórico?",
    a: "Sí, si tiene más de 30 años desde su fabricación, está en estado original o restaurado fielmente y conserva la documentación. La catalogación como histórico la realiza un laboratorio oficial; nosotros redactamos el informe técnico previo y gestionamos la rematriculación con placa histórica.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Homologación y Fichas Técnicas",
      item: `${siteUrl}/fichas-tecnicas`,
    },
  ],
};

export default function FichasTecnicasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/">
            <Logo className="h-11 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:+34687465486" className="hidden text-sm font-medium text-slate-600 hover:text-brand-navy md:inline">
              687 465 486
            </a>
            <Link
              href="/#contacto"
              className="rounded-xl bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-navy-dark"
            >
              Contacto
            </Link>
          </div>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Homologación y fichas técnicas</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-600/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Servicio nacional · 100% online
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Homologación y{" "}
            <span className="text-sky-400">Fichas Técnicas Reducidas</span>{" "}
            para vehículos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tramitamos la documentación técnica de tu vehículo en toda España:
            coches importados (UE, USA, Japón, UK), vehículos históricos,
            reformas, motos y quads. Firmado por ingeniero técnico colegiado
            con firma digital FNMT.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#formulario"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
            >
              Solicitar presupuesto
            </a>
            <a
              href="tel:+34687465486"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Llamar 687 465 486
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Desde 60 € · Entrega habitual en 7-15 días · Presupuesto cerrado sin compromiso
          </p>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
                ¿En qué consiste?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Ficha técnica reducida, homologación individual y reforma técnica
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                La <strong>ficha técnica reducida</strong> y la{" "}
                <strong>homologación individual</strong> son los dos
                procedimientos técnicos que permiten matricular legalmente en
                España un vehículo importado, modificado o que ha perdido su
                tarjeta ITV. Son documentos firmados por un ingeniero técnico
                colegiado con plena validez legal ante DGT e ITV.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                En <strong>abacoingeniería®</strong> llevamos más de 40 años
                tramitando estos procedimientos. Trabajamos para particulares,
                concesionarios e importadores de toda España con firma digital
                FNMT, sin necesidad de desplazamientos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Ámbito nacional", "Tramitamos en cualquier ITV y Jefatura Provincial de España."],
                ["Firma digital FNMT", "Documentos válidos sin presentación física."],
                ["Ingeniero colegiado", "Más de 40 años de trayectoria. Responsabilidad directa."],
                ["Presupuesto cerrado", "Tras revisar tu caso, sin sorpresas posteriores."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPOS DE VEHÍCULO ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
              Servicios por tipo de vehículo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Qué tipo de trámite necesitas?
            </h2>
            <p className="mt-3 text-slate-600">
              Cada caso tiene su procedimiento específico. Pulsa en el que se
              parezca al tuyo para ver los detalles, plazos y precios orientativos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tiposVehiculo.map(({ titulo, desc, href }) => (
              <Link
                key={titulo}
                href={href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-navy group-hover:underline">
                  Ver detalles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
              Proceso
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              ¿Cómo funciona el trámite?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso) => (
              <div key={paso.num} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-4xl font-black text-sky-100 select-none">{paso.num}</span>
                <h3 className="mt-2 font-semibold text-slate-900">{paso.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NORMATIVA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Normativa aplicable
          </h2>
          <p className="mt-4 text-slate-600">
            Trabajamos siempre con la versión consolidada vigente de:
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>RD 750/2010</strong> — Procedimientos para autorización de vehículos a motor (homologación individual).
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>Orden ICT 1212/2018</strong> — Vehículos con modificaciones técnicas.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>RD 866/2010</strong> — Reformas de vehículos.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>RD 2028/1986</strong> — Homologación de tipo CE.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>RD 2822/1998</strong> — Reglamento General de Vehículos.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong>Reglamento (UE) 2018/858</strong> — Homologación europea de vehículos a motor.
            </li>
          </ul>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
              Solicitud online
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Solicita tu ficha técnica u homologación
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Rellena el formulario con los datos del vehículo y te respondemos
              con presupuesto cerrado en menos de 24 h.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <FichaForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <SiteFooter />
    </main>
  );
}
