import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Proyecto para Licencia de Actividad en Almería",
  description:
    "Redactamos el proyecto técnico y tramitamos la licencia de actividad para locales, comercios, talleres e industrias en Almería. Gestión integral y ágil.",
  alternates: { canonical: "/licencia-de-actividad" },
  openGraph: {
    type: "article",
    url: `${siteUrl}/licencia-de-actividad`,
    title: "Proyecto para Licencia de Actividad en Almería",
    description:
      "Proyecto técnico y tramitación completa de licencia de actividad en Almería.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto para Licencia de Actividad",
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
      name: "¿Qué es la licencia de actividad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la autorización municipal obligatoria para abrir un local de uso comercial, industrial o de servicios. Requiere proyecto técnico firmado por ingeniero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda la tramitación en Almería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de actividad y del ayuntamiento. En actividades inocuas puede resolverse en semanas mediante declaración responsable; las calificadas requieren más plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visita técnica, redacción del proyecto, visado si procede, presentación en el ayuntamiento y seguimiento hasta la obtención de la licencia.",
      },
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

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio · Almería</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Proyecto para Licencia de Actividad en Almería
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Redactamos el proyecto técnico y tramitamos íntegramente la licencia
            de actividad de tu local, comercio, taller o industria. Gestión ágil,
            visitas incluidas y seguimiento hasta la resolución.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
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
