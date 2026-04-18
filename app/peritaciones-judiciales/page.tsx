import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Peritaciones Judiciales en Almería | Perito Ingeniero Colegiado",
  description:
    "Peritaciones judiciales e informes periciales de ingeniería en Almería. Perito judicial para juzgados, abogados, aseguradoras y particulares. Informes rigurosos, ratificación en sala y presupuesto sin compromiso.",
  keywords: [
    "peritaciones judiciales Almería",
    "perito judicial Almería",
    "perito ingeniero Almería",
    "informes periciales Almería",
    "dictamen pericial Almería",
    "perito seguros Almería",
    "perito humedades Almería",
    "perito incendios Almería",
  ],
  alternates: {
    canonical: "/peritaciones-judiciales",
    languages: { "es-ES": "/peritaciones-judiciales" },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}/peritaciones-judiciales`,
    siteName: "Abaco Ingeniería",
    title: "Peritaciones Judiciales en Almería | Perito Ingeniero",
    description:
      "Informes periciales de ingeniería para procedimientos judiciales en Almería.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Peritaciones judiciales en Almería – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peritaciones Judiciales en Almería",
    description: "Perito ingeniero judicial en Almería.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Peritaciones Judiciales",
  provider: {
    "@type": "LocalBusiness",
    name: "Abaco Ingeniería",
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera de Ronda, 293",
      addressLocality: "Almería",
      postalCode: "04001",
      addressCountry: "ES",
    },
  },
  areaServed: { "@type": "AdministrativeArea", name: "Almería" },
  url: `${siteUrl}/peritaciones-judiciales`,
  description:
    "Informes periciales judiciales de ingeniería para juzgados, abogados, aseguradoras y particulares en Almería.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un informe pericial judicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un dictamen técnico redactado por un perito cualificado para aportar evidencia objetiva en un procedimiento judicial. Puede ser de parte —contratado por una de las partes— o emitido por un perito designado judicialmente. Tiene valor probatorio y debe ser defendible en sala.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué materias intervenís como perito ingeniero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patologías constructivas, humedades, grietas, aluminosis, defectos de ejecución, valoraciones de daños, incendios, accidentes laborales, vehículos, maquinaria, instalaciones eléctricas, térmicas y mecánicas, reclamaciones a aseguradoras y comunidades de propietarios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ratificáis el informe pericial en sala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Comparecemos ante el juzgado para ratificar y defender el informe cuando el procedimiento lo requiere, respondiendo a las preguntas de las partes y del juez.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda elaborar un informe pericial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo habitual es de 15 a 30 días desde la visita de inspección, dependiendo de la complejidad del caso y de la documentación disponible. En casos urgentes con plazos procesales ajustados podemos priorizar la entrega.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una peritación judicial en Almería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Valoramos cada caso en una consulta previa sin coste. El presupuesto depende del alcance del dictamen, las mediciones necesarias y la eventual ratificación en sala. Emitimos factura con IVA.",
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
      name: "Peritaciones Judiciales en Almería",
      item: `${siteUrl}/peritaciones-judiciales`,
    },
  ],
};

export default function PeritacionesJudicialesPage() {
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
            <Link href="/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Peritaciones Judiciales en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio · Almería</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Peritaciones Judiciales en Almería
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Informes periciales de ingeniería rigurosos y defendibles para
            procedimientos judiciales. Trabajamos con juzgados, abogados,
            aseguradoras y particulares.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Consultar caso</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Áreas de peritación</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { t: "Edificación", d: "Patologías, humedades, grietas, defectos constructivos y valoración de daños." },
            { t: "Instalaciones", d: "Eléctricas, mecánicas, climatización, incendios y siniestros industriales." },
            { t: "Vehículos y maquinaria", d: "Accidentes, siniestros, averías, homologaciones y reclamaciones." },
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Metodología del informe</h2>
          <ol className="mt-8 space-y-4 text-slate-700">
            <li><strong>1. Estudio previo</strong> — análisis de documentación y antecedentes del caso.</li>
            <li><strong>2. Inspección técnica</strong> — visita presencial, mediciones y fotografía del objeto pericial.</li>
            <li><strong>3. Redacción del dictamen</strong> — informe motivado con conclusiones y anexos.</li>
            <li><strong>4. Ratificación en sala</strong> — defensa del informe ante el juzgado si procede.</li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cobertura y enlaces</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Intervenimos en toda la provincia de Almería: capital, El Ejido,
          Roquetas de Mar, Vícar, Níjar, Huércal-Overa, Adra, Berja, Cuevas del
          Almanzora, Vera, Mojácar y Carboneras. Trabajamos con juzgados,
          abogados, aseguradoras y particulares.
        </p>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>·{" "}
            <Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">
              Licencia de actividad y apertura en Almería
            </Link>
          </li>
          <li>·{" "}
            <Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">
              Fichas técnicas reducidas
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Consúltanos tu caso</h2>
          <p className="mt-4 text-slate-300">Describe brevemente el asunto. Valoramos la viabilidad pericial y te damos presupuesto.</p>
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
