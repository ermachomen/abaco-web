import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import GuideForm from "../components/GuideForm";

const siteUrl = "https://www.ingenierial.es";
const path = "/guia-licencia-actividad";

export const metadata: Metadata = {
  title: "Guía Gratuita: Checklist de Licencia de Actividad",
  description:
    "Descarga gratis la guía técnica con el checklist que usamos para comprobar la viabilidad de cualquier local antes de firmar el alquiler: humos, ruido, urbanismo, aforo y plazos.",
  keywords: [
    "guía licencia de actividad",
    "checklist licencia apertura",
    "requisitos local comercial",
    "licencia actividad PDF",
    "viabilidad local Almería",
  ],
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Guía Gratuita: Checklist de Licencia de Actividad",
    description:
      "Los 12 puntos que revisamos antes de firmar cualquier proyecto de licencia de actividad.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Guía gratuita licencia de actividad – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checklist gratis: Licencia de Actividad",
    description: "Los 12 puntos que revisamos en cada local.",
    images: ["/images/og-abaco.jpg"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guía Licencia de Actividad",
      item: `${siteUrl}${path}`,
    },
  ],
};

const checklist = [
  "Compatibilidad urbanística del local con el uso previsto (PGOU).",
  "Régimen aplicable: declaración responsable o licencia previa.",
  "Viabilidad de la salida de humos (si hay cocina o elaboración).",
  "Aislamiento acústico y Ordenanza Municipal de Ruidos.",
  "Aforo máximo, vías de evacuación y DB-SI del CTE.",
  "Accesibilidad: aseo adaptado, anchos mínimos, sin barreras.",
  "Instalación eléctrica y REBT: potencia, tomas, CGP.",
  "Climatización y ventilación (RITE): caudales mínimos.",
  "Protección contra incendios: extintores, BIE, detección.",
  "Salubridad y normativa sanitaria si hay manipulación.",
  "Cumplimiento fiscal: epígrafe IAE, alta censal y Seguridad Social.",
  "Plazos realistas de tramitación: qué puedes abrir y cuándo.",
];

export default function GuiaLicenciaActividadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <SiteHeader />

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Guía de licencia de actividad</li>
        </ol>
      </nav>

      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
              Guía gratuita · PDF
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Checklist para abrir un local{" "}
              <span className="text-sky-600">sin sorpresas</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Los <strong>12 puntos críticos</strong> que revisamos en cada
              visita antes de firmar un proyecto de licencia. Si fallan uno
              solo de ellos, el local puede no ser viable. Te los enviamos
              gratis por e-mail.
            </p>

            <ul className="mt-8 space-y-2.5">
              {[
                "Ahorra tiempo: evita locales inviables antes de firmar el alquiler.",
                "Evita sobrecostes: anticipa salida de humos, aislamiento y obras.",
                "Redactado por ingeniero colegiado desde 1983.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600">
                    <path fillRule="evenodd" d="M16.704 5.293a1 1 0 010 1.414l-7.425 7.425a1 1 0 01-1.414 0L3.296 9.563a1 1 0 011.414-1.414l3.862 3.862 6.718-6.718a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-sky-500/10 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Recibe la guía gratis</h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Te la enviamos al e-mail en menos de 1 minuto.
            </p>
            <div className="mt-6">
              <GuideForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué incluye la guía</h2>
          <p className="mt-3 text-slate-600">
            Un checklist práctico y directo: cada punto con su normativa de
            referencia y el criterio que aplicamos en nuestras visitas.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {checklist.map((item, i) => (
              <li key={item} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tienes un local concreto en mente?
          </h2>
          <p className="mt-4 text-slate-300">
            Hacemos una visita gratuita y te damos presupuesto cerrado para la
            licencia, sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+34670607830" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">
              Llamar 670 607 830
            </a>
            <Link href="/#contacto" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Escribir por formulario
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
