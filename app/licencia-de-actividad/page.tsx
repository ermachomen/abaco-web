import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Licencia de Actividad y Apertura en Almería | Proyecto Técnico",
  description:
    "Proyecto técnico y tramitación completa de licencia de actividad y apertura en Almería: locales, comercios, hostelería, talleres e industrias. Ingeniero colegiado, gestión ágil y visita incluida.",
  keywords: [
    "licencia de actividad Almería",
    "licencia de apertura Almería",
    "proyecto licencia de apertura Almería",
    "proyecto apertura local Almería",
    "tramitación licencia actividad Almería",
    "ingeniero licencia apertura Almería",
    "declaración responsable apertura Almería",
    "cambio de titularidad licencia Almería",
    "licencia hostelería Almería",
  ],
  alternates: {
    canonical: "/licencia-de-actividad",
    languages: { "es-ES": "/licencia-de-actividad" },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}/licencia-de-actividad`,
    siteName: "Abaco Ingeniería",
    title: "Licencia de Actividad y Apertura en Almería | Proyecto Técnico",
    description:
      "Proyecto técnico y tramitación completa de licencia de actividad y apertura en Almería.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Licencia de actividad y apertura en Almería – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencia de Actividad y Apertura en Almería",
    description:
      "Proyecto técnico y tramitación de licencia de actividad en Almería.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto para Licencia de Actividad",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
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
  areaServed: { "@type": "AdministrativeArea", name: "Almería" },
  url: `${siteUrl}/licencia-de-actividad`,
  description:
    "Redacción del proyecto técnico y tramitación administrativa completa de la licencia de actividad para locales, comercios, talleres e industrias en Almería.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la licencia de actividad o licencia de apertura en Almería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la autorización municipal obligatoria para abrir un local comercial, industrial o de servicios en Almería. Acredita que el establecimiento cumple la normativa urbanística, sectorial, de seguridad contra incendios, accesibilidad y ruidos. Requiere un proyecto técnico firmado por ingeniero colegiado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda obtener la licencia de actividad en Almería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En actividades inocuas tramitadas por declaración responsable el local puede abrir en pocos días desde la presentación. Para actividades calificadas el plazo municipal oscila entre 2 y 6 meses. El proyecto técnico lo entregamos habitualmente en 7-15 días desde la visita al local.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre licencia de actividad y declaración responsable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La declaración responsable permite iniciar la actividad de forma inmediata tras presentar el proyecto y los documentos, asumiendo bajo responsabilidad que cumplen la normativa. La licencia de actividad tradicional exige resolución expresa del ayuntamiento antes de abrir. Cada tipo de actividad tiene asignado un régimen concreto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye vuestro servicio de licencia de apertura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visita técnica al local, redacción del proyecto y anexos, visado colegial si procede, cálculo de instalaciones, presentación telemática en el ayuntamiento, contestación a requerimientos y seguimiento hasta la obtención de la licencia o la apertura efectiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajáis con cambios de titularidad y ampliaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tramitamos cambios de titular, ampliaciones de superficie, modificaciones de actividad y regularizaciones de locales que operan sin licencia, incluyendo legalización técnica del estado actual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el proyecto de licencia de actividad en Almería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio depende del tipo de actividad, la superficie y la instalación a justificar. Tras una visita gratuita al local ofrecemos presupuesto cerrado sin compromiso, sin sorpresas ni variaciones posteriores.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Licencia de Actividad en Almería",
      item: `${siteUrl}/licencia-de-actividad`,
    },
  ],
};

export default function LicenciaActividadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-abaco.jpeg"
              alt="Abaco Ingeniería"
              width={170}
              height={60}
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Inicio</Link>
            <Link href="/peritaciones-judiciales" className="text-sm font-medium text-slate-600 hover:text-slate-900">Peritaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Licencia de Actividad en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio · Almería</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Licencia de Actividad y Apertura en Almería
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Redactamos el proyecto técnico y tramitamos íntegramente la licencia
            de actividad y apertura de tu local, comercio, bar, taller o
            industria en Almería. Ingeniero colegiado, visita gratuita al local
            y seguimiento ante el ayuntamiento hasta la resolución.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué es la licencia de actividad en Almería?</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            La <strong>licencia de actividad</strong> —también llamada <strong>licencia de apertura</strong>— es
            la autorización municipal que el <strong>Ayuntamiento de Almería</strong> exige para
            poner en marcha cualquier local comercial, industrial o de servicios. Su
            obtención es obligatoria y acredita que el establecimiento cumple con la
            normativa urbanística, sectorial, de <strong>seguridad contra incendios</strong>,
            accesibilidad, <strong>protección frente al ruido</strong>, salubridad y
            compatibilidad con el uso del suelo.
          </p>
          <p>
            En Almería conviven dos regímenes: <em>declaración responsable</em> —para
            actividades inocuas o de bajo impacto— y <em>licencia previa</em> —para
            actividades calificadas, con incidencia ambiental o riesgo relevante—.
            Determinar el régimen aplicable es el primer paso y condiciona todos los
            plazos posteriores. Nos encargamos de analizarlo, redactar el proyecto y
            presentarlo telemáticamente en tu nombre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué incluye el servicio?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { t: "Visita técnica", d: "Evaluamos el local, su actividad y requisitos normativos aplicables." },
            { t: "Proyecto técnico", d: "Redacción y visado del proyecto firmado por ingeniero colegiado." },
            { t: "Tramitación integral", d: "Presentación en el ayuntamiento y seguimiento hasta la licencia." },
          ].map(({ t, d }) => (
            <article key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-slate-600">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tipos de actividad que tramitamos</h2>
          <ul className="mt-8 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>· Locales comerciales y tiendas</li>
            <li>· Hostelería (bares, restaurantes, cafeterías)</li>
            <li>· Talleres mecánicos y de reparación</li>
            <li>· Oficinas y clínicas</li>
            <li>· Naves industriales y almacenes</li>
            <li>· Cambios de titularidad y ampliaciones</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Zonas de actuación en Almería</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Trabajamos en toda la provincia de Almería: capital y barrios (Centro,
          Zapillo, Nueva Almería, Oliveros, Los Ángeles, Torrecárdenas), y
          municipios del área metropolitana como El Ejido, Roquetas de Mar,
          Vícar, Almerimar, Huércal de Almería, Viator, Níjar, Huércal-Overa,
          Adra, Berja, Cuevas del Almanzora, Vera, Mojácar y Carboneras.
          Presentación telemática en todos los ayuntamientos.
        </p>
        <h3 className="mt-10 text-xl font-semibold">Enlaces de interés</h3>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>·{" "}
            <Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">
              Peritaciones judiciales en Almería
            </Link>
          </li>
          <li>·{" "}
            <Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">
              Fichas técnicas reducidas
            </Link>
          </li>
          <li>·{" "}
            <Link href="/" className="text-sky-700 underline hover:no-underline">
              Inicio – Abaco Ingeniería
            </Link>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6">
          {faqLd.mainEntity.map((q) => (
            <div key={q.name}>
              <h3 className="text-lg font-semibold">{q.name}</h3>
              <p className="mt-2 text-slate-600">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pide presupuesto sin compromiso</h2>
          <p className="mt-4 text-slate-300">Cuéntanos tu actividad y ubicación. Te respondemos en menos de 24 h.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 lg:px-8">
          © {new Date().getFullYear()} Abaco Ingeniería · Carretera de Ronda, 293 · 04001 Almería
        </div>
      </footer>
    </main>
  );
}
