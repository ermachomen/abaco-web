import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.abacoingenieria.es";
const path = "/precio-licencia-actividad-almeria";

export const metadata: Metadata = {
  title: "Cuánto Cuesta una Licencia de Actividad en Almería 2026",
  description:
    "Precio orientativo de la licencia de actividad y apertura en Almería en 2026: proyecto técnico, tasas municipales, visado y gestión. Presupuesto cerrado sin compromiso.",
  keywords: [
    "precio licencia actividad Almería",
    "cuánto cuesta licencia apertura Almería",
    "tasas licencia apertura Almería",
    "honorarios proyecto actividad Almería",
    "coste licencia de actividad",
  ],
  alternates: {
    canonical: path,
    languages: { "es-ES": path },
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Cuánto Cuesta una Licencia de Actividad en Almería",
    description:
      "Precio orientativo y desglose de la licencia de actividad en Almería.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Precio licencia de actividad Almería – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precio Licencia de Actividad en Almería",
    description: "Desglose orientativo y presupuesto cerrado.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Presupuesto Licencia de Actividad",
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
  areaServed: { "@type": "AdministrativeArea", name: "Almería" },
  url: `${siteUrl}${path}`,
  description:
    "Presupuesto orientativo de la licencia de actividad en Almería y gestión completa del trámite.",
};

const faqs = [
  {
    q: "¿Cuánto cuesta una licencia de actividad en Almería?",
    a: "El precio varía según tipo de actividad, superficie e instalaciones. Para un local pequeño por declaración responsable, el presupuesto de proyecto técnico suele oscilar entre 600 € y 1.200 €. Para actividades calificadas complejas (hostelería con cocina, industrias) puede superar los 2.000 €. A esto hay que sumar tasas municipales y, si procede, visado colegial.",
  },
  {
    q: "¿Qué partidas incluye el precio total?",
    a: "Honorarios del ingeniero (proyecto técnico, certificados, dirección de obra si procede), visado colegial cuando es obligatorio, tasas municipales del ayuntamiento y, en su caso, impuesto de construcciones si la licencia lleva obra asociada.",
  },
  {
    q: "¿Cuánto son las tasas municipales en Almería?",
    a: "El Ayuntamiento de Almería calcula la tasa en función de la superficie del local, la categoría de la calle y la actividad. Orientativamente, se sitúa entre 200 € y 800 € para locales pequeños y medianos. Puede consultarse la ordenanza fiscal vigente en la sede electrónica municipal.",
  },
  {
    q: "¿Cuánto cobra un ingeniero por el proyecto?",
    a: "En Andalucía los honorarios están liberalizados; cada despacho aplica sus tarifas. Los factores que más influyen son la superficie, las instalaciones (electricidad, climatización, gas, contra incendios) y si se requiere estudio acústico o plan de emergencia.",
  },
  {
    q: "¿Qué diferencia hay entre declaración responsable y licencia previa?",
    a: "La declaración responsable permite abrir de forma inmediata tras presentar proyecto y documentos. La licencia previa exige resolución expresa del ayuntamiento antes de operar. La segunda suele conllevar mayor coste por su mayor complejidad documental.",
  },
  {
    q: "¿Dais presupuesto cerrado?",
    a: "Sí. Después de una visita gratuita al local emitimos presupuesto cerrado por escrito, sin variaciones posteriores. Si el local no es viable, te lo decimos antes de cobrar nada.",
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
      name: "Licencia de Actividad",
      item: `${siteUrl}/licencia-de-actividad`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Precio en Almería",
      item: `${siteUrl}${path}`,
    },
  ],
};

const tabla = [
  ["Local comercial inocuo (< 100 m²)", "600 – 900 €", "2 – 4 semanas"],
  ["Oficina / clínica (< 200 m²)", "800 – 1.200 €", "3 – 6 semanas"],
  ["Bar / cafetería sin cocina", "900 – 1.400 €", "4 – 8 semanas"],
  ["Restaurante con cocina", "1.400 – 2.200 €", "2 – 4 meses"],
  ["Taller mecánico o pequeña industria", "1.500 – 2.500 €", "2 – 5 meses"],
  ["Pub / local con música", "2.000 – 3.200 €", "3 – 6 meses"],
];

export default function PrecioLicenciaActividadAlmeria() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

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
          <li aria-current="page" className="text-slate-700">Precio en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Precios 2026 · Almería</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Cuánto cuesta una licencia de actividad en Almería
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Desglose orientativo por tipo de actividad, partidas que componen
            el coste total y presupuesto cerrado tras visita gratuita al local.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Pedir presupuesto exacto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tabla orientativa de precios</h2>
        <p className="mt-4 text-slate-600">
          Cifras de referencia del proyecto técnico en Almería. No incluyen
          tasas municipales ni visado.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-3 pr-4 font-semibold">Tipo de actividad</th>
                <th className="py-3 pr-4 font-semibold">Proyecto técnico</th>
                <th className="py-3 font-semibold">Plazo estimado</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map(([tipo, precio, plazo]) => (
                <tr key={tipo} className="border-b border-slate-200">
                  <td className="py-3 pr-4">{tipo}</td>
                  <td className="py-3 pr-4 font-medium text-sky-700">{precio}</td>
                  <td className="py-3 text-slate-600">{plazo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué partidas componen el precio total?</h2>
          <ul className="mt-8 space-y-4 text-slate-700">
            <li><strong>Honorarios del ingeniero:</strong> redacción del proyecto, cálculos, planos y certificados.</li>
            <li><strong>Visado colegial:</strong> obligatorio en algunos tipos de proyecto. Suele rondar el 5-8% del honorario.</li>
            <li><strong>Tasas municipales:</strong> según ordenanza fiscal del Ayuntamiento de Almería. Dependen de superficie y actividad.</li>
            <li><strong>Impuesto de construcciones (ICIO):</strong> solo si la licencia lleva obra asociada.</li>
            <li><strong>Estudios adicionales:</strong> acústico, de humos, plan de autoprotección (según el caso).</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <h2 className="text-2xl font-bold">Servicios relacionados</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad y apertura en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia bar/restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Presupuesto exacto para tu caso</h2>
          <p className="mt-4 text-slate-300">Indica tipo de actividad, superficie y ubicación. Te enviamos presupuesto cerrado.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
