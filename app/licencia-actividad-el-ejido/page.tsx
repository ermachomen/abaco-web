import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";

const siteUrl = "https://www.abacoingenieria.es";
const path = "/licencia-actividad-el-ejido";
const municipio = "El Ejido";

export const metadata: Metadata = {
  title: `Licencia de Actividad y Apertura en ${municipio} | Ingeniero`,
  description: `Proyecto técnico y tramitación de licencia de actividad en ${municipio}: comercios, hostelería, talleres, almacenes hortofrutícolas e industrias. Visita sin coste.`,
  keywords: [
    `licencia de actividad ${municipio}`,
    `licencia de apertura ${municipio}`,
    `proyecto licencia ${municipio}`,
    `ingeniero ${municipio}`,
    "licencia almacén hortofrutícola El Ejido",
    "licencia Almerimar",
    "licencia Balerma",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: `Licencia de Actividad en ${municipio}`,
    description: `Tramitación completa de licencia de actividad en ${municipio}.`,
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: `Licencia de actividad ${municipio} – Abaco Ingeniería` }],
  },
  twitter: { card: "summary_large_image", title: `Licencia de Actividad ${municipio}`, description: "Proyecto técnico e ingeniero colegiado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Licencia de Actividad en ${municipio}`,
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
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04001", addressCountry: "ES" },
  },
  areaServed: { "@type": "City", name: municipio, containedInPlace: { "@type": "AdministrativeArea", name: "Almería" } },
  url: `${siteUrl}${path}`,
  description: `Proyecto técnico y tramitación de licencia de actividad para locales e industrias en ${municipio}, Almería.`,
};

const faqs = [
  { q: `¿Dónde se tramita la licencia en ${municipio}?`, a: `Sede electrónica del Ayuntamiento de ${municipio} (Urbanismo). Gestionamos la presentación telemática y el seguimiento completo.` },
  { q: `¿Tramitáis almacenes hortofrutícolas y manipulados?`, a: "Sí. Es una de las actividades más habituales en El Ejido. Realizamos proyecto técnico con justificación de frío industrial, cámaras, cintas de manipulado y sistemas contra incendios." },
  { q: "¿Trabajáis también en Almerimar y Balerma?", a: "Sí, ambos pertenecen al término municipal de El Ejido. Aplicamos la misma tramitación y nos desplazamos al local." },
  { q: `¿Cuánto tarda la licencia en ${municipio}?`, a: "Con declaración responsable, apertura prácticamente inmediata. Actividades calificadas: 2-6 meses según tipo y documentación aportada." },
  { q: "¿Qué pasa si compro un local con actividad previa?", a: "Gestionamos el cambio de titularidad. Si la actividad es la misma y las instalaciones no se modifican, el trámite es ágil; si cambia, se redacta un proyecto nuevo." },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencia de Actividad", item: `${siteUrl}/licencia-de-actividad` },
    { "@type": "ListItem", position: 3, name: municipio, item: `${siteUrl}${path}` },
  ],
};

export default function LicenciaElEjido() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo-abaco.jpeg" alt="Abaco Ingeniería" width={170} height={60} priority />
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
          <li><Link href="/licencia-de-actividad" className="hover:text-slate-900">Licencia de actividad</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{municipio}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio local · {municipio}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Licencia de Actividad en {municipio}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Proyecto técnico y tramitación ante el Ayuntamiento de {municipio}{" "}
            para comercios, hostelería, almacenes hortofrutícolas, talleres,
            oficinas y naves. Ingeniero colegiado, visita sin coste y
            presupuesto cerrado.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abrir un negocio en {municipio}</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>{municipio}</strong> es el motor económico del Poniente
            almeriense y uno de los núcleos industriales más potentes de
            Andalucía gracias a la agricultura intensiva. Esto se traduce en una
            demanda constante de tramitación de licencias para almacenes
            hortofrutícolas, cooperativas, industrias auxiliares y locales
            comerciales.
          </p>
          <p>
            El Ayuntamiento de {municipio} distingue entre actividades inocuas
            —tramitadas por <em>declaración responsable</em>— y actividades
            calificadas, con mayor carga documental. Redactamos el proyecto
            técnico adecuado a cada régimen y presentamos telemáticamente.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Zonas y actividades frecuentes</h2>
          <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>· <strong>Casco urbano</strong> — comercios y servicios</li>
            <li>· <strong>Almerimar</strong> — hostelería, turismo, náutica</li>
            <li>· <strong>Balerma y Guardias Viejas</strong> — comercio y alojamiento</li>
            <li>· <strong>Santa María del Águila</strong> — locales de barrio</li>
            <li>· <strong>Polígonos La Redonda / Las Palmerillas</strong> — naves, talleres, logística</li>
            <li>· <strong>Zonas agrícolas</strong> — almacenes, manipulados, cooperativas</li>
          </ul>
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
        <h2 className="text-2xl font-bold">Otros municipios y servicios</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>·{" "}<Link href="/licencia-actividad-roquetas-de-mar" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Roquetas de Mar</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-vicar" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Vícar</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia bar/restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Precio licencia de actividad</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad general</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abre tu local en {municipio}</h2>
          <p className="mt-4 text-slate-300">Envíanos la dirección y la actividad. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
