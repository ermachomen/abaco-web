import Link from "next/link";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import Logo from "./Logo";
import {
  MUNICIPIOS_ALMERIA,
  type MunicipioAlmeria,
} from "../_data/almeria-municipios";

const siteUrl = "https://www.ingenierial.es";

// Enlaces internos: municipios ya existentes como páginas independientes
const MUNICIPIOS_EXISTENTES = [
  { slug: "el-ejido", nombre: "El Ejido" },
  { slug: "roquetas-de-mar", nombre: "Roquetas de Mar" },
  { slug: "vicar", nombre: "Vícar" },
];

function relacionados(actual: MunicipioAlmeria) {
  const otros = MUNICIPIOS_ALMERIA.filter((m) => m.slug !== actual.slug);
  // Prioriza los de la misma comarca, luego completa con el resto
  const mismaComarca = otros.filter((m) => m.comarca === actual.comarca);
  const resto = otros.filter((m) => m.comarca !== actual.comarca);
  const ordenados = [...mismaComarca, ...resto].map((m) => ({
    slug: m.slug,
    nombre: m.nombre,
  }));
  return [...ordenados, ...MUNICIPIOS_EXISTENTES].slice(0, 6);
}

export default function AlmeriaMunicipioLanding({
  m,
}: {
  m: MunicipioAlmeria;
}) {
  const path = `/licencia-actividad-${m.slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Licencia de Actividad en ${m.nombre}`,
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
    areaServed: {
      "@type": "City",
      name: m.nombre,
      containedInPlace: { "@type": "AdministrativeArea", name: "Almería" },
    },
    url: `${siteUrl}${path}`,
    description: `Proyecto técnico y tramitación de licencia de actividad para locales e industrias en ${m.nombre}, Almería.`,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: m.faqs.map((f) => ({
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
        name: "Licencia de Actividad",
        item: `${siteUrl}/licencia-de-actividad`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: m.nombre,
        item: `${siteUrl}${path}`,
      },
    ],
  };

  const otros = relacionados(m);

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
          <li aria-current="page" className="text-slate-700">{m.nombre}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio local · {m.nombre}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Licencia de Actividad en {m.nombre}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{m.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abrir un negocio en {m.nombre}</h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-wider text-sky-600">{m.comarca}</p>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>{m.intro1}</p>
          <p>{m.intro2}</p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Zonas y actividades frecuentes</h2>
          <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
            {m.zonas.map((z) => (
              <li key={z.zona}>· <strong>{z.zona}</strong> — {z.desc}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ingeniero colegiado, presupuesto cerrado</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Oficina técnica con más de 40 años de experiencia e ingeniero
            técnico industrial colegiado desde 1983. Redactamos el proyecto,
            lo presentamos telemáticamente en la sede electrónica del
            Ayuntamiento de {m.nombre} con firma digital FNMT y hacemos el
            seguimiento hasta la resolución. Nos desplazamos al local sin coste
            y damos presupuesto cerrado desde el primer momento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6">
          {m.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <h2 className="text-2xl font-bold">Otros municipios y servicios</h2>
        <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">
          {otros.map((o) => (
            <li key={o.slug}>
              ·{" "}
              <Link href={`/licencia-actividad-${o.slug}`} className="text-sky-700 underline hover:no-underline">
                Licencia de actividad en {o.nombre}
              </Link>
            </li>
          ))}
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería capital</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Precio de la licencia de actividad</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad (general)</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abre tu local en {m.nombre}</h2>
          <p className="mt-4 text-slate-300">Envíanos la dirección y la actividad. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
