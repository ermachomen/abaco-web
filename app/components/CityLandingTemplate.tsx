import Link from "next/link";
import ContactForm from "./ContactForm";
import SiteFooter from "./SiteFooter";
import Logo from "./Logo";
import {
  CITIES,
  CITY_CONTEXT,
  CITY_FAQS,
  SERVICIOS,
  type Servicio,
  type CityData,
  getCityBySlug,
} from "../_data/cities";

interface CityLandingProps {
  servicio: Servicio;
  citySlug: string;
}

const siteUrl = "https://www.ingenierial.es";

/**
 * Plantilla compartida para landings de servicio + capital de provincia.
 * Se usa en /licencia-actividad-{ciudad}, /peritaciones-{ciudad}, /tasaciones-{ciudad}.
 * Cada uso pasa el slug de la ciudad y el servicio; el componente carga el
 * contexto local y las FAQs únicas desde app/_data/cities.ts.
 */
export default function CityLandingTemplate({ servicio, citySlug }: CityLandingProps) {
  const city = getCityBySlug(citySlug);
  if (!city) {
    throw new Error(`Ciudad no encontrada en app/_data/cities.ts: ${citySlug}`);
  }
  const config = SERVICIOS[servicio];
  const path = `${config.pathPrefix}${citySlug}`;
  const contextoLocal = CITY_CONTEXT[servicio][citySlug];
  const faqs = CITY_FAQS[servicio][citySlug];

  // Ciudades hermanas para linkado interno (todas menos la actual)
  const otrasCiudades = CITIES.filter((c) => c.slug !== citySlug);

  // ── JSON-LD ──
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${config.nombre} en ${city.nombre}`,
    serviceType: config.descripcionCorta,
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
      name: city.nombre,
      containedInPlace: { "@type": "AdministrativeArea", name: city.comunidad },
    },
    url: `${siteUrl}${path}`,
    description: `${config.descripcionCorta} Servicio en ${city.nombre} y ${city.provincia}.`,
  };

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
      { "@type": "ListItem", position: 2, name: config.nombre, item: `${siteUrl}${config.hubPath}` },
      { "@type": "ListItem", position: 3, name: city.nombre, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Abaco Ingeniería - inicio">
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

      {/* ── BREADCRUMBS ── */}
      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href={config.hubPath} className="hover:text-slate-900">{config.nombre}</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{city.nombre}</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            {config.nombre} · {city.nombre}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {config.nombre} {city.preposicion} {city.nombre}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            {config.descripcionCorta} Servicio en {city.nombre} y resto de la
            provincia de {city.provincia}, con ingeniero técnico colegiado y
            firma digital FNMT.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">
              Solicitar presupuesto
            </a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Llamar 687 465 486
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO LOCAL ── */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {config.nombre} {city.preposicion} {city.nombre}: lo que necesitas saber
        </h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>{contextoLocal}</p>
        </div>
      </section>

      {/* ── SERVICIO 100% ONLINE ── */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">
                Servicio nacional · 100% online
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Tramitación sin desplazamientos desde nuestra oficina en Almería
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Abaco Ingeniería trabaja en toda España. La documentación se
                envía por correo electrónico y se firma digitalmente con FNMT,
                con plena validez ante cualquier ayuntamiento, juzgado, ITV o
                Jefatura Provincial de Tráfico. No necesitas desplazarte; si lo
                prefieres, también atendemos en nuestra oficina de Almería con
                cita previa.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["+40 años", "de experiencia ininterrumpida desde 1983."],
                ["Ingeniero colegiado", "Manuel Marín Vicente · ITI."],
                ["Firma FNMT", "Documentación firmada digitalmente."],
                ["Presupuesto cerrado", "Sin sorpresas tras la consulta."],
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

      {/* ── FAQ ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTRAS CIUDADES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">{config.nombre} en otras ciudades</h2>
          <p className="mt-3 text-slate-600">
            Tenemos landings dedicadas para los principales mercados. ¿Eres de
            otra provincia? Igualmente trabajamos contigo: el servicio es 100%
            online.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otrasCiudades.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`${config.pathPrefix}${c.slug}`}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-navy hover:text-brand-navy"
                >
                  {config.nombreCorto} en {c.nombre} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-600">
            ¿Buscas otros servicios? <Link href={SERVICIOS["licencia-actividad"].hubPath} className="text-brand-navy underline hover:no-underline">Licencias</Link>
            {" · "}<Link href={SERVICIOS.peritaciones.hubPath} className="text-brand-navy underline hover:no-underline">Peritaciones</Link>
            {" · "}<Link href={SERVICIOS.tasaciones.hubPath} className="text-brand-navy underline hover:no-underline">Tasaciones</Link>
            {" · "}<Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Vehículos</Link>
          </p>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Solicita {config.nombreCorto.toLowerCase()} {city.preposicion} {city.nombre}
          </h2>
          <p className="mt-4 text-slate-300">
            Cuéntanos tu caso y te respondemos en menos de 24 h con presupuesto cerrado.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/**
 * Helper para generar la metadata de Next.js de cada landing.
 * Cada page.tsx hijo lo invoca para no duplicar el boilerplate.
 */
export function buildCityLandingMetadata(servicio: Servicio, citySlug: string) {
  const city = getCityBySlug(citySlug);
  if (!city) throw new Error(`Ciudad no encontrada: ${citySlug}`);
  const config = SERVICIOS[servicio];
  const path = `${config.pathPrefix}${citySlug}`;

  return {
    title: `${config.nombre} ${city.preposicion} ${city.nombre} · Ingeniero Colegiado`,
    description: `${config.descripcionCorta} Servicio en ${city.nombre} y ${city.provincia}. Ingeniero técnico colegiado, firma digital FNMT, presupuesto cerrado.`,
    keywords: buildKeywords(servicio, city),
    alternates: { canonical: path, languages: { "es-ES": path } },
    openGraph: {
      type: "article" as const,
      locale: "es_ES",
      url: `${siteUrl}${path}`,
      siteName: "Abaco Ingeniería",
      title: `${config.nombre} ${city.preposicion} ${city.nombre}`,
      description: config.descripcionCorta,
      images: [
        {
          url: "/images/og-abaco.jpg",
          width: 1200,
          height: 630,
          alt: `${config.nombre} ${city.preposicion} ${city.nombre} – Abaco Ingeniería`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${config.nombre} ${city.preposicion} ${city.nombre}`,
      description: `${config.nombreCorto} con ingeniero colegiado, ámbito nacional.`,
      images: ["/images/og-abaco.jpg"],
    },
  };
}

function buildKeywords(servicio: Servicio, city: CityData): string[] {
  const c = city.nombre;
  switch (servicio) {
    case "licencia-actividad":
      return [
        `licencia de actividad ${c}`,
        `licencia de apertura ${c}`,
        `proyecto de actividad ${c}`,
        `proyecto técnico licencia ${c}`,
        `ingeniero licencia apertura ${c}`,
        `declaración responsable apertura ${c}`,
        `cambio titularidad licencia ${c}`,
        `licencia hostelería ${c}`,
        `licencia bar restaurante ${c}`,
      ];
    case "peritaciones":
      return [
        `peritaciones judiciales ${c}`,
        `perito judicial ${c}`,
        `perito ingeniero ${c}`,
        `informes periciales ${c}`,
        `dictamen pericial ${c}`,
        `perito seguros ${c}`,
        `perito humedades ${c}`,
        `perito incendios ${c}`,
        `perito accidentes ${c}`,
      ];
    case "tasaciones":
      return [
        `tasaciones ${c}`,
        `tasación inmueble ${c}`,
        `tasación vivienda ${c}`,
        `tasación local comercial ${c}`,
        `tasación nave industrial ${c}`,
        `tasación judicial ${c}`,
        `tasación herencia ${c}`,
        `tasación divorcio ${c}`,
        `perito tasador ${c}`,
      ];
  }
}
