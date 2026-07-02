import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";
import { CITIES } from "../_data/cities";

const siteUrl = "https://www.ingenierial.es";
const path = "/proyecto-de-actividad";

export const metadata: Metadata = {
  title: "Proyecto de Actividad y Apertura · Qué es, Qué Incluye y Precio",
  description:
    "Redactamos tu proyecto de actividad (proyecto de apertura o memoria técnica) firmado por ingeniero colegiado: memoria, planos y justificación normativa para la licencia de tu local. Toda España, desde 600 €.",
  keywords: [
    "proyecto de actividad",
    "proyecto de apertura",
    "proyecto técnico de actividad",
    "memoria técnica de actividad",
    "proyecto para licencia de apertura",
    "quién firma un proyecto de actividad",
    "precio proyecto de actividad",
    "proyecto actividad ingeniero",
    "memoria técnica local comercial",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Proyecto de Actividad y Apertura · Toda España",
    description:
      "Proyecto de actividad firmado por ingeniero colegiado: memoria, planos y justificación normativa para tu licencia.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Proyecto de actividad – Abaco Ingeniería" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto de Actividad y Apertura",
    description: "Redactado y firmado por ingeniero colegiado. Toda España.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto de Actividad",
  serviceType: "Redacción de proyecto técnico de actividad y apertura",
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
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04001", addressCountry: "ES" },
  },
  areaServed: { "@type": "Country", name: "España" },
  url: `${siteUrl}${path}`,
  description:
    "Redacción del proyecto de actividad (proyecto de apertura, memoria técnica) firmado por ingeniero técnico colegiado para la obtención de la licencia de actividad de locales, comercios, hostelería e industrias en toda España.",
};

const faqs = [
  {
    q: "¿Qué es un proyecto de actividad?",
    a: "Es el documento técnico que exige el ayuntamiento para conceder la licencia de actividad de un local. Lo redacta y firma un técnico competente (ingeniero o ingeniero técnico colegiado) e incluye memoria descriptiva, planos, justificación del cumplimiento normativo (incendios, accesibilidad, ruido, ventilación) y anexos de instalaciones. También se le llama proyecto de apertura o memoria técnica de actividad.",
  },
  {
    q: "¿Es lo mismo proyecto de actividad que licencia de actividad?",
    a: "No exactamente: el proyecto es el documento técnico; la licencia es la autorización municipal que se obtiene presentándolo. Sin proyecto firmado por técnico competente no hay licencia. Nosotros hacemos ambas cosas: redactamos el proyecto y tramitamos la licencia hasta la resolución.",
  },
  {
    q: "¿Quién puede firmar un proyecto de actividad?",
    a: "Un técnico competente colegiado: ingeniero técnico industrial, ingeniero industrial, arquitecto o arquitecto técnico, según el tipo de actividad. En Abaco Ingeniería firma Manuel Marín Vicente, ingeniero técnico industrial colegiado desde 1983, con firma digital FNMT válida en cualquier ayuntamiento de España.",
  },
  {
    q: "¿Qué incluye exactamente el documento?",
    a: "Memoria descriptiva de la actividad y del local, planos (estado actual, distribución, instalaciones, evacuación), justificación del CTE (DB-SI incendios, DB-SUA accesibilidad, DB-HS salubridad), REBT para la instalación eléctrica, RITE para climatización, estudio de ruido si procede, y los anexos que exija la ordenanza municipal concreta.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de actividad?",
    a: "Depende de superficie, tipo de actividad e instalaciones. Orientativamente: local comercial inocuo desde 600 €, oficina o clínica 800-1.200 €, bar o cafetería 900-1.400 €, restaurante con cocina 1.400-2.200 €, nave industrial 1.500-2.500 €. Presupuesto cerrado sin compromiso tras revisar tu caso.",
  },
  {
    q: "¿Cuánto tardáis en redactarlo?",
    a: "Entre 7 y 15 días desde que disponemos de la información del local (planos o medidas, fotos, tipo de actividad). En casos urgentes podemos priorizar la entrega. La tramitación municipal posterior depende del régimen: inmediata con declaración responsable, 2-6 meses con licencia previa.",
  },
  {
    q: "¿Trabajáis en cualquier ciudad?",
    a: "Sí, en toda España. El proyecto se firma digitalmente con FNMT y se presenta telemáticamente en la sede electrónica del ayuntamiento que corresponda. Tenemos páginas específicas para Madrid, Sevilla, Málaga, Granada, Córdoba, Cádiz, Huelva, Jaén, Murcia y Almería.",
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
    { "@type": "ListItem", position: 2, name: "Licencias de Actividad", item: `${siteUrl}/licencia-de-actividad` },
    { "@type": "ListItem", position: 3, name: "Proyecto de Actividad", item: `${siteUrl}${path}` },
  ],
};

export default function ProyectoDeActividadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Abaco Ingeniería - inicio">
            <Logo className="h-11 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:+34687465486" className="hidden text-sm font-medium text-slate-600 hover:text-brand-navy md:inline">687 465 486</a>
            <Link href="/#contacto" className="rounded-xl bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-navy-dark">Contacto</Link>
          </div>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/licencia-de-actividad" className="hover:text-slate-900">Licencias de actividad</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Proyecto de actividad</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Documento técnico · Toda España</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Proyecto de Actividad y Apertura
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Redactamos el proyecto de actividad de tu local —también llamado
            proyecto de apertura o memoria técnica— firmado por ingeniero
            técnico colegiado con firma digital FNMT. Es el documento que tu
            ayuntamiento exige para concederte la licencia. Válido en toda
            España.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Desde 600 € · Entrega en 7-15 días · Presupuesto cerrado sin compromiso</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué incluye el proyecto de actividad</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            ["Memoria descriptiva", "Descripción de la actividad, el local, superficies, aforo y horario. Clasificación de la actividad según normativa autonómica."],
            ["Planos técnicos", "Estado actual, distribución, cotas, instalaciones, alzados y recorridos de evacuación. Formato digital para presentación telemática."],
            ["Justificación normativa", "CTE (DB-SI incendios, DB-SUA accesibilidad, DB-HS salubridad), ordenanza municipal de ruidos y compatibilidad urbanística con el PGOU."],
            ["Anexos de instalaciones", "Electricidad (REBT), climatización y ventilación (RITE), fontanería, gas y protección contra incendios según la actividad."],
            ["Estudio acústico", "Cuando la actividad lo requiere (hostelería con música, talleres): aislamiento, limitador-registrador y mediciones."],
            ["Firma y visado", "Firma digital FNMT de ingeniero técnico colegiado. Visado colegial cuando la actividad lo exige."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proyecto de actividad, proyecto de apertura y memoria técnica: aclaramos los nombres
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Según el ayuntamiento, la comunidad autónoma o incluso el gestor
              que te atienda, el mismo documento recibe nombres distintos:{" "}
              <strong>proyecto de actividad</strong>,{" "}
              <strong>proyecto de apertura</strong>,{" "}
              <strong>proyecto técnico de actividad</strong> o{" "}
              <strong>memoria técnica</strong>. En actividades inocuas
              tramitadas por declaración responsable algunos ayuntamientos
              aceptan una memoria técnica simplificada; en actividades
              calificadas (hostelería con cocina, industria, ocio) siempre se
              exige proyecto completo.
            </p>
            <p>
              Lo importante: en todos los casos debe firmarlo un{" "}
              <strong>técnico competente colegiado</strong>, y de su calidad
              depende que el expediente avance sin requerimientos. Nuestro
              proyecto incluye siempre la justificación completa para evitar
              subsanaciones que retrasan meses la apertura.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proyectos de actividad por ciudad</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Presentamos telemáticamente en cualquier ayuntamiento de España.
          Páginas con información local específica:
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/licencia-actividad-${c.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-navy hover:text-brand-navy"
            >
              Proyecto en {c.nombre} →
            </Link>
          ))}
        </div>
      </section>

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

      <section id="contacto" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu proyecto de actividad</h2>
            <p className="mt-3 text-base text-slate-600">Cuéntanos la actividad y la ubicación del local. Presupuesto cerrado en menos de 24 h.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
