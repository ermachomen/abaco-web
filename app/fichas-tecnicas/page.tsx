import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.abacoingenieria.es";

export const metadata: Metadata = {
  title: "Fichas Técnicas Reducidas para Vehículos | Abaco Ingeniería",
  description:
    "Tramitación online de fichas técnicas reducidas para matriculación, rehabilitación, importación y catalogación de vehículos históricos. Ingeniero colegiado, ámbito nacional, presupuesto sin compromiso.",
  keywords: [
    "ficha técnica reducida",
    "ficha técnica reducida Almería",
    "homologación vehículos Almería",
    "matriculación vehículo importado",
    "rehabilitación vehículo baja definitiva",
    "catalogación vehículo histórico",
    "ingeniero homologación vehículos",
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
    title: "Fichas Técnicas Reducidas para Vehículos",
    description:
      "Ficha técnica reducida para matriculación, rehabilitación, importación y vehículos históricos.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Fichas técnicas reducidas – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fichas Técnicas Reducidas para Vehículos",
    description: "Homologación y ficha técnica reducida online.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ficha Técnica Reducida",
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
  areaServed: { "@type": "Country", name: "España" },
  url: `${siteUrl}/fichas-tecnicas`,
  description:
    "Redacción y tramitación de fichas técnicas reducidas para matriculación, rehabilitación, importación y catalogación de vehículos históricos en España.",
};

const pasos = [
  {
    num: "01",
    title: "Rellena el formulario",
    desc: "Introduce los datos del vehículo y el tipo de trámite que necesitas. Cuanta más información nos facilites, más rápido podremos atenderte.",
  },
  {
    num: "02",
    title: "Estudio previo",
    desc: "Analizamos la documentación y viabilidad del trámite. Te contactamos para informarte del presupuesto y los pasos a seguir.",
  },
  {
    num: "03",
    title: "Tramitación",
    desc: "Nos encargamos de redactar la ficha técnica reducida y gestionar todos los trámites necesarios ante la administración.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Recibes la documentación lista para presentar en la ITV o la Jefatura de Tráfico correspondiente.",
  },
];

const faqs = [
  {
    q: "¿Qué es una ficha técnica reducida?",
    a: "Es un documento técnico elaborado por un ingeniero que recoge las características del vehículo y sirve como sustituto de la ficha técnica original cuando ésta no existe o está incompleta. Es imprescindible para matricular, rehabilitar o catalogar un vehículo.",
  },
  {
    q: "¿Qué vehículos necesitan ficha técnica reducida?",
    a: "Principalmente vehículos importados sin documentación homologada en España, vehículos antiguos o clásicos que van a ser catalogados como históricos, vehículos rehabilitados tras baja definitiva, y vehículos con modificaciones que requieren nueva homologación.",
  },
  {
    q: "¿Cuánto tarda el trámite?",
    a: "El plazo habitual es de 7 a 15 días hábiles desde que disponemos de toda la documentación. Los tiempos pueden variar según la complejidad del caso y los plazos de la administración.",
  },
  {
    q: "¿Qué documentación necesito aportar?",
    a: "Depende del trámite, pero en general: DNI del titular, título de propiedad o factura de compra, documentación original del vehículo (si existe), y fotografías del vehículo. Te indicaremos exactamente qué necesitas tras revisar tu caso.",
  },
  {
    q: "¿Puedo tramitar un vehículo importado de fuera de la UE?",
    a: "Sí. Gestionamos la documentación técnica para vehículos procedentes de cualquier país, incluyendo EE.UU., Japón, Reino Unido y otros mercados con normativas distintas a la española.",
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
      name: "Fichas Técnicas Reducidas",
      item: `${siteUrl}/fichas-tecnicas`,
    },
  ],
};

export default function FichasTecnicasPage() {
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

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/">
            <Logo className="h-11 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:+34670607830" className="hidden text-sm font-medium text-slate-600 hover:text-sky-700 md:inline">
              670 607 830
            </a>
            <Link
              href="/#contacto"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
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
          <li aria-current="page" className="text-slate-700">Fichas técnicas reducidas</li>
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
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition"
          >
            ← Volver a inicio
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Homologaciones y vehículos
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Fichas Técnicas{" "}
            <span className="text-sky-400">Reducidas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tramitamos la ficha técnica reducida de tu vehículo de forma rápida
            y eficaz. Matriculaciones, rehabilitaciones, importaciones y
            catalogación de vehículos históricos en toda España.
          </p>
          <a
            href="#formulario"
            className="mt-8 inline-block rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
          >
            Solicitar ficha técnica →
          </a>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                ¿En qué consiste?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Todo lo que necesitas saber sobre la ficha técnica reducida
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                La ficha técnica reducida es el documento oficial que acredita
                las características técnicas de un vehículo ante la Dirección
                General de Tráfico (DGT). Es elaborada y firmada por un
                ingeniero técnico colegiado y tiene plena validez legal.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                En abacoingeniería® llevamos más de 40 años realizando este
                tipo de trámites. Conocemos a fondo la normativa vigente y los
                requisitos de cada Jefatura Provincial de Tráfico, lo que nos
                permite resolver cualquier caso con garantías.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Vehículos importados", "Homologación de vehículos procedentes de cualquier país."],
                ["Vehículos históricos", "Catalogación y matriculación de clásicos y antigüedades."],
                ["Rehabilitaciones", "Recuperación de vehículos dados de baja definitiva."],
                ["Modificaciones", "Legalización de reformas técnicas sobre el vehículo."],
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

      {/* ── CÓMO FUNCIONA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Proceso
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              ¿Cómo funciona el trámite?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso) => (
              <div key={paso.num} className="relative rounded-2xl border border-slate-200 p-6">
                <span className="text-4xl font-black text-sky-100 select-none">{paso.num}</span>
                <h3 className="mt-2 font-semibold text-slate-900">{paso.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Solicitud online
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Solicita tu ficha técnica reducida
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Rellena el formulario con los datos de tu vehículo y te
              contactaremos con un presupuesto sin compromiso.
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

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a
        href="https://wa.me/34687465486"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-green-500/40 transition hover:bg-green-400 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.547a.75.75 0 00.921.921l5.702-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.36l-.355-.212-3.686.95.968-3.54-.232-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        WhatsApp
      </a>
    </main>
  );
}
