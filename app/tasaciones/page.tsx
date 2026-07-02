import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";
import { CITIES } from "../_data/cities";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Tasaciones Técnicas · Inmuebles, Maquinaria e Industria · Toda España",
  description:
    "Tasaciones técnicas de inmuebles, maquinaria, vehículos e industria para herencias, divorcios, Hacienda, ITP, ISD y procedimientos judiciales. Ingeniero técnico colegiado, ámbito nacional, presupuesto cerrado.",
  keywords: [
    "tasaciones técnicas",
    "tasación inmueble",
    "tasación vivienda",
    "tasación local comercial",
    "tasación nave industrial",
    "tasación judicial",
    "tasación herencia",
    "tasación divorcio",
    "tasación Hacienda ITP ISD",
    "perito tasador",
    "valoración técnica",
    "valoración inmuebles España",
  ],
  alternates: { canonical: "/tasaciones", languages: { "es-ES": "/tasaciones" } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}/tasaciones`,
    siteName: "Abaco Ingeniería",
    title: "Tasaciones Técnicas · Toda España",
    description:
      "Tasaciones técnicas para herencias, divorcios, Hacienda y procedimientos judiciales.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasaciones técnicas – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasaciones Técnicas", description: "Toda España, ingeniero colegiado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasaciones Técnicas",
  serviceType: "Tasación y valoración técnica de inmuebles, maquinaria y vehículos",
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
  url: `${siteUrl}/tasaciones`,
  description:
    "Tasaciones técnicas firmadas por ingeniero técnico colegiado para herencias, divorcios, Hacienda (ITP, ISD), procedimientos judiciales y operaciones financieras. Ámbito nacional.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tasaciones por ciudad",
    itemListElement: CITIES.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `Tasaciones en ${c.nombre}`,
        url: `${siteUrl}/tasaciones-${c.slug}`,
      },
    })),
  },
};

const faqs = [
  {
    q: "¿Para qué casos se necesita una tasación técnica?",
    a: "Las tasaciones se utilizan en herencias y donaciones (Impuesto sobre Sucesiones y Donaciones), divorcios y separaciones (reparto de bienes), procedimientos judiciales, ventas entre particulares, operaciones financieras (préstamos, garantías), Impuesto de Transmisiones Patrimoniales (ITP) y declaraciones de Hacienda. También son habituales en empresas para fiscalidad, fusiones y balances.",
  },
  {
    q: "¿Qué diferencia hay con una tasación oficial homologada?",
    a: "Una tasación oficial homologada (por sociedad de tasación inscrita en el Banco de España) se exige sólo para hipotecas. Para el resto de casos (herencias, divorcios, Hacienda, juzgados, ventas), una tasación técnica firmada por ingeniero técnico colegiado tiene plena validez legal y suele ser más económica.",
  },
  {
    q: "¿Qué tipo de bienes tasáis?",
    a: "Inmuebles urbanos (viviendas, locales, oficinas, garajes, trasteros), inmuebles industriales (naves, almacenes, complejos), suelo urbano y rural, fincas agrícolas (olivar, regadío, secano), maquinaria industrial (líneas de producción, frío industrial, almazaras), vehículos clásicos y de colección, e instalaciones complejas.",
  },
  {
    q: "¿Las tasaciones valen para Hacienda y juzgados?",
    a: "Sí. Las tasaciones técnicas firmadas por ingeniero técnico colegiado son aceptadas por la AEAT, Hacienda autonómica (Junta de Andalucía, CARM, Comunidad de Madrid), notarios y juzgados de cualquier provincia.",
  },
  {
    q: "¿Cuánto tarda una tasación?",
    a: "Habitualmente 7-15 días desde la visita de inspección. En casos urgentes con plazo procesal o fiscal ajustado podemos entregar en 3-5 días.",
  },
  {
    q: "¿Cuánto cuesta una tasación técnica?",
    a: "Tasación de vivienda urbana: desde 250 €. Locales y oficinas: desde 350 €. Naves industriales: desde 450 €. Maquinaria, fincas y casos especiales: presupuesto a medida según complejidad. Damos presupuesto cerrado tras consulta previa sin coste.",
  },
  {
    q: "¿Trabajáis a toda España?",
    a: "Sí. Nuestra sede está en Almería pero atendemos en toda España. Para tasaciones de inmuebles concretos solemos hacer visita de inspección presencial; en algunos casos (catastro, estudios documentales) el trabajo es íntegramente remoto.",
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
    { "@type": "ListItem", position: 2, name: "Tasaciones Técnicas", item: `${siteUrl}/tasaciones` },
  ],
};

export default function TasacionesPage() {
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
          <li aria-current="page" className="text-slate-700">Tasaciones técnicas</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio nacional</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Tasaciones Técnicas y Valoraciones
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tasaciones firmadas por ingeniero técnico colegiado para herencias,
            divorcios, Hacienda (ITP, ISD), procedimientos judiciales y operaciones
            financieras. Inmuebles, maquinaria, vehículos e industria. Ámbito nacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Desde 250 € · Entrega habitual en 7-15 días · Presupuesto cerrado sin compromiso</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy">Tasaciones por ciudad</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">¿En qué ciudad necesitas la tasación?</h2>
            <p className="mt-3 text-slate-600">
              Tenemos páginas dedicadas para las principales capitales. Si tu
              caso es de otra provincia, igualmente trabajamos contigo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/tasaciones-${c.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">Tasaciones en {c.nombre}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.comunidad}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-navy group-hover:underline">Ver detalles →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué tipo de tasaciones hacemos</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Vivienda urbana", "Pisos, chalets, dúplex, áticos. Para herencias, ventas, Hacienda, divorcios."],
              ["Local comercial / Oficina", "Locales en planta baja, oficinas, módulos comerciales en centros."],
              ["Nave industrial / Almacén", "Naves de polígono, almacenes hortofrutícolas, plantas de manipulado."],
              ["Suelo urbano y rural", "Solares urbanizados, suelo agrícola, fincas en suelo no urbanizable."],
              ["Maquinaria industrial", "Líneas de producción, frío industrial, almazaras, conserveras, envasadoras."],
              ["Vehículos clásicos", "Coches de colección, motos clásicas, vehículos históricos."],
              ["Fincas agrícolas", "Olivar, almendro, viña, regadío, secano, invernaderos."],
              ["Activos industriales complejos", "Plantas completas: industriales, energéticas, agroalimentarias."],
              ["Bienes singulares", "Estructuras, depósitos, instalaciones especiales."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{t}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Para qué casos sirve</h2>
          <ul className="mt-8 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Herencias (ISD):</strong> tasación del bien para liquidar el Impuesto de Sucesiones.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Divorcios:</strong> valoración del bien para reparto entre cónyuges.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Hacienda (ITP):</strong> justificación de precio en compraventa entre particulares.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Procedimientos judiciales:</strong> peritaje pericial para juicios civiles y mercantiles.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Operaciones financieras:</strong> garantía para préstamos, valoración de activos.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Empresas:</strong> aportaciones no dinerarias, fusiones, balances, fiscalidad.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Expedientes administrativos:</strong> expropiaciones, ayudas, subvenciones.</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><strong>Compraventas:</strong> referencia de precio entre particulares o con empresas.</li>
          </ul>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu tasación</h2>
            <p className="mt-3 text-base text-slate-600">Cuéntanos qué necesitas tasar y te respondemos en menos de 24 h con presupuesto cerrado.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
