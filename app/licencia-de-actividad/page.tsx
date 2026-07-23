import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";
import { CITIES } from "../_data/cities";
import { MUNICIPIOS_ALMERIA } from "../_data/almeria-municipios";

// Municipios de Almería con página propia (incluye los ya existentes)
const MUNICIPIOS_EXISTENTES = [
  { slug: "el-ejido", nombre: "El Ejido" },
  { slug: "roquetas-de-mar", nombre: "Roquetas de Mar" },
  { slug: "vicar", nombre: "Vícar" },
];
const MUNICIPIOS_LICENCIA = [
  ...MUNICIPIOS_EXISTENTES,
  ...MUNICIPIOS_ALMERIA.map((m) => ({ slug: m.slug, nombre: m.nombre })),
].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Licencias de Actividad y Apertura en Toda España · Proyecto Técnico",
  description:
    "Proyecto técnico y tramitación completa de licencias de actividad y apertura en toda España: locales, comercios, hostelería, talleres e industrias. Ingeniero técnico colegiado, ámbito nacional, gestión 100% online.",
  keywords: [
    "licencia de actividad España",
    "licencia de apertura España",
    "proyecto licencia de apertura",
    "proyecto técnico de actividad",
    "tramitación licencia actividad",
    "ingeniero licencia apertura",
    "declaración responsable apertura",
    "cambio de titularidad licencia",
    "licencia hostelería",
    "licencia bar restaurante",
    "licencia comercio",
    "licencia oficina",
    "licencia nave industrial",
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
    title: "Licencias de Actividad y Apertura · Toda España",
    description:
      "Proyecto técnico y tramitación completa de licencias de actividad y apertura en toda España.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Licencias de actividad y apertura – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencias de Actividad y Apertura · Toda España",
    description:
      "Proyecto técnico y tramitación con ingeniero colegiado.",
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
  url: `${siteUrl}/licencia-de-actividad`,
  description:
    "Redacción del proyecto técnico y tramitación administrativa completa de la licencia de actividad para locales, comercios, talleres e industrias en toda España.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la licencia de actividad o licencia de apertura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la autorización municipal obligatoria para abrir un local comercial, industrial o de servicios. Acredita que el establecimiento cumple la normativa urbanística, sectorial, de seguridad contra incendios, accesibilidad y ruidos. Requiere un proyecto técnico firmado por ingeniero colegiado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda obtener la licencia de actividad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En actividades inocuas tramitadas por declaración responsable el local puede abrir en pocos días desde la presentación. Para actividades calificadas el plazo municipal oscila entre 2 y 6 meses. El proyecto técnico lo entregamos habitualmente en 7-15 días desde el envío de la documentación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es lo mismo licencia de actividad, licencia de apertura y proyecto de actividad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Licencia de actividad y licencia de apertura son dos nombres para la misma autorización municipal. El proyecto de actividad (o proyecto de apertura) es el documento técnico firmado por ingeniero colegiado que se presenta para obtenerla: memoria, planos y justificación del cumplimiento normativo. Nosotros redactamos el proyecto y tramitamos la licencia completa.",
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
      name: "¿Cuánto cuesta el proyecto de licencia de actividad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de actividad, superficie e instalación. Para un comercio pequeño parte de 600-900 €. Para hostelería con cocina, 1.400-2.200 €. Para naves industriales, 1.500-2.500 €. Tras revisar tu caso damos presupuesto cerrado sin compromiso.",
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
      name: "Licencias de Actividad",
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
            <Logo className="h-11 w-auto" />
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
          <li aria-current="page" className="text-slate-700">Licencias de Actividad</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio nacional · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Licencias de Actividad y Apertura en toda España
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Redactamos el proyecto técnico y tramitamos la licencia de
            actividad y apertura de tu local, comercio, bar, taller, oficina o
            nave industrial en cualquier capital de España. Ingeniero técnico
            colegiado, firma digital FNMT y seguimiento ante el ayuntamiento
            hasta la resolución.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué es la licencia de actividad?</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            La <strong>licencia de actividad</strong> —también llamada <strong>licencia de apertura</strong>— es
            la autorización municipal que cualquier ayuntamiento exige para
            poner en marcha un local comercial, industrial o de servicios. Su
            obtención es obligatoria y acredita que el establecimiento cumple con la
            normativa urbanística, sectorial, de <strong>seguridad contra incendios</strong>,
            accesibilidad, <strong>protección frente al ruido</strong>, salubridad y
            compatibilidad con el uso del suelo.
          </p>
          <p>
            En la mayoría de ayuntamientos conviven dos regímenes:{" "}
            <em>declaración responsable</em> —para actividades inocuas o de bajo
            impacto— y <em>licencia previa</em> —para actividades calificadas,
            con incidencia ambiental o riesgo relevante—. Determinar el régimen
            aplicable es el primer paso y condiciona todos los plazos
            posteriores. Nos encargamos de analizarlo, redactar el proyecto y
            presentarlo telemáticamente en tu nombre en cualquier ayuntamiento
            de España.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
          <h3 className="text-xl font-semibold text-slate-900">
            ¿Licencia de actividad, licencia de apertura o proyecto de actividad?
          </h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Son tres nombres que suelen confundirse pero forman parte del mismo
            trámite. <strong>Licencia de actividad</strong> y{" "}
            <strong>licencia de apertura</strong> son la misma autorización
            municipal: la primera pone el foco en la actividad que se ejerce y
            la segunda en la apertura del local, pero los ayuntamientos las usan
            indistintamente. El{" "}
            <Link href="/proyecto-de-actividad" className="text-brand-navy underline hover:no-underline">
              <strong>proyecto de actividad</strong>
            </Link>{" "}
            (también llamado <em>proyecto de apertura</em> o <em>memoria
            técnica</em>) es el documento firmado por ingeniero colegiado que se
            presenta para conseguirla. Nosotros nos encargamos de las dos cosas:
            redactamos el proyecto y tramitamos la licencia hasta la resolución.
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Licencias por capital de provincia</h2>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Tramitamos licencias de actividad en toda España. Tenemos páginas
          dedicadas para las principales capitales con información sobre el
          ayuntamiento, particularidades del PGOU y normativa autonómica
          aplicable.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/licencia-actividad-${c.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-navy hover:text-brand-navy"
            >
              Licencia en {c.nombre} →
            </Link>
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-bold tracking-tight">Licencias por municipio de Almería</h3>
        <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
          Somos oficina técnica con sede en Almería. Nos desplazamos sin coste a
          cualquier municipio de la provincia y conocemos las particularidades
          de cada ayuntamiento, desde los almacenes hortofrutícolas del Poniente
          hasta las naves de mármol del Almanzora o la hostelería del Levante.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MUNICIPIOS_LICENCIA.map((mun) => (
            <Link
              key={mun.slug}
              href={`/licencia-actividad-${mun.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-navy hover:text-brand-navy"
            >
              Licencia en {mun.nombre} →
            </Link>
          ))}
        </div>

        <h3 className="mt-12 text-xl font-semibold">Guías y servicios relacionados</h3>
        <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">
          <li>· <Link href="/proyecto-de-actividad-almeria" className="text-brand-navy underline hover:no-underline">Proyecto de actividad en Almería</Link></li>
          <li>· <Link href="/declaracion-responsable-actividad-almeria" className="text-brand-navy underline hover:no-underline">Declaración responsable de actividad</Link></li>
          <li>· <Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-brand-navy underline hover:no-underline">Cambio de titularidad de licencia</Link></li>
          <li>· <Link href="/licencia-bar-restaurante-almeria" className="text-brand-navy underline hover:no-underline">Licencia de bar y restaurante en Almería</Link></li>
          <li>· <Link href="/licencia-discoteca-pub-almeria" className="text-brand-navy underline hover:no-underline">Licencia de discoteca, pub y ocio nocturno</Link></li>
          <li>· <Link href="/precio-licencia-actividad-almeria" className="text-brand-navy underline hover:no-underline">Cuánto cuesta una licencia de actividad</Link></li>
          <li>· <Link href="/licencia-actividad-roquetas-de-mar" className="text-brand-navy underline hover:no-underline">Licencia en Roquetas de Mar</Link></li>
          <li>· <Link href="/licencia-actividad-el-ejido" className="text-brand-navy underline hover:no-underline">Licencia en El Ejido</Link></li>
          <li>· <Link href="/licencia-actividad-vicar" className="text-brand-navy underline hover:no-underline">Licencia en Vícar</Link></li>
          <li>· <Link href="/peritaciones-judiciales" className="text-brand-navy underline hover:no-underline">Peritaciones judiciales</Link></li>
          <li>· <Link href="/tasaciones" className="text-brand-navy underline hover:no-underline">Tasaciones técnicas</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Homologación de vehículos</Link></li>
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

      <SiteFooter />
    </main>
  );
}
