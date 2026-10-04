import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/precio-licencia-actividad-granada";

export const metadata: Metadata = {
  title: "Cuánto Cuesta una Licencia de Actividad en Granada 2026",
  description: "Precio de la licencia de actividad y apertura en Granada en 2026: honorarios del proyecto técnico por tipo de local, tasas y visado. Presupuesto cerrado sin compromiso.",
  keywords: ["precio licencia actividad Granada","licencia de apertura Granada precio","cuánto cuesta licencia apertura Granada","tasas licencia apertura Granada","honorarios proyecto actividad Granada","coste licencia de actividad"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Cuánto cuesta una licencia de actividad en Granada",
    description: "Precio de la licencia de actividad y apertura en Granada en 2026: honorarios del proyecto técnico por tipo de local, tasas y visado. Presupuesto cerrado sin compromiso.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Precio licencia de actividad Granada – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Precio licencia de actividad en Granada", description: "Precio de la licencia de actividad y apertura en Granada en 2026: honorarios del proyecto técnico por tipo de local, tasas y visado. Presupuesto cerrado sin compromiso.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Presupuesto de licencia de actividad en Granada",
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
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04009", addressCountry: "ES" },
  },
  areaServed: [{ "@type": "City", name: "Granada" }, { "@type": "AdministrativeArea", name: "Provincia de Granada" }],
  url: `${siteUrl}${path}`,
  description: "Precio de la licencia de actividad y apertura en Granada en 2026: honorarios del proyecto técnico por tipo de local, tasas y visado. Presupuesto cerrado sin compromiso.",
};

const faqs = [
  {
    "q": "¿Cuánto cuesta una licencia de actividad en Granada?",
    "a": "Depende del tipo de actividad, la superficie y las instalaciones. Para un local pequeño, el proyecto técnico suele oscilar entre 600 € y 1.200 €. Para hostelería con cocina, talleres o locales con música puede superar los 2.000 €. A eso se suman las tasas del Ayuntamiento y, si procede, el visado colegial."
  },
  {
    "q": "¿Cobráis lo mismo en Granada que en Almería?",
    "a": "Sí. Los honorarios del proyecto son los mismos que aplicamos en Almería. Nos desplazamos a ver el local en Granada capital y la provincia y el resto del trámite se hace online, con firma digital FNMT."
  },
  {
    "q": "¿Qué partidas incluye el precio total?",
    "a": "Honorarios del ingeniero (proyecto técnico, certificados y dirección de obra si procede), visado colegial cuando es obligatorio, tasas municipales y, si la licencia lleva obra asociada, el impuesto de construcciones (ICIO)."
  },
  {
    "q": "¿Cuánto son las tasas municipales en Granada?",
    "a": "Las fija la ordenanza fiscal del Ayuntamiento de Granada y dependen de la actividad y del local. No damos una cifra genérica: en el estudio previo te indicamos qué tasa corresponde a tu caso según la ordenanza vigente, que puede consultarse en la sede electrónica municipal."
  },
  {
    "q": "¿Qué diferencia hay entre declaración responsable y licencia previa?",
    "a": "Con la declaración responsable se puede iniciar la actividad al presentarla junto con la documentación técnica. La licencia previa exige una resolución expresa del ayuntamiento antes de abrir y suele requerir más documentación. Qué régimen aplica depende de la actividad y lo confirmamos en el estudio previo."
  },
  {
    "q": "¿Dais presupuesto cerrado?",
    "a": "Sí. Tras el estudio previo, que es gratuito, emitimos presupuesto cerrado por escrito. Si el local no es viable para la actividad que quieres, te lo decimos antes de cobrar nada."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencia de Actividad", item: `${siteUrl}/licencia-de-actividad` },
    { "@type": "ListItem", position: 3, name: "Precio en Granada", item: `${siteUrl}${path}` },
  ],
};

const tabla = [["Local comercial inocuo (< 100 m²)","600 – 900 €"],["Oficina / clínica (< 200 m²)","800 – 1.200 €"],["Bar / cafetería sin cocina","900 – 1.400 €"],["Restaurante con cocina","1.400 – 2.200 €"],["Taller mecánico o pequeña industria","1.500 – 2.500 €"],["Pub / local con música","2.000 – 3.200 €"]];

export default function PrecioLicenciaActividadGranada() {
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
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
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
          <li aria-current="page" className="text-slate-700">Precio en Granada</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Precios 2026 · Granada"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Cuánto cuesta una licencia de actividad en Granada"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Honorarios orientativos del proyecto técnico por tipo de local, partidas que componen el coste total y presupuesto cerrado tras un estudio previo gratuito. Nos desplazamos a Granada y el área metropolitana, Motril, Almuñécar, Guadix, Baza, Loja y el resto de la provincia."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Pedir presupuesto exacto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tabla orientativa de honorarios</h2>
        <p className="mt-4 text-slate-600">Honorarios de referencia del proyecto técnico, iguales a los que aplicamos en Almería. No incluyen tasas municipales ni visado colegial.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="py-3 pr-4 font-semibold">Tipo de actividad</th>
                <th className="py-3 font-semibold">Proyecto técnico</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map(([tipo, precio]) => (
                <tr key={tipo} className="border-b border-slate-200">
                  <td className="py-3 pr-4">{tipo}</td>
                  <td className="py-3 font-medium text-sky-700">{precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-slate-700 leading-relaxed">{"En Granada lo que más mueve el precio es el edificio: los locales del Albaicín, el Realejo o el Centro histórico pueden requerir documentación adicional por la protección del patrimonio, y la hostelería en edificios antiguos complica la salida de humos y la ventilación. Un comercio u oficina en un local moderno queda en la parte baja de la tabla."}</p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué partidas componen el precio total?</h2>
          <ul className="mt-8 space-y-4 text-slate-700">
            <li><strong>Honorarios del ingeniero:</strong> redacción del proyecto, cálculos, planos y certificados.</li>
            <li><strong>Visado colegial:</strong> obligatorio solo en algunos tipos de proyecto.</li>
            <li><strong>Tasas municipales:</strong> {"según la ordenanza fiscal del Ayuntamiento de Granada; dependen de la actividad y del local."} <a href="https://sede.granada.org" className="text-sky-700 underline hover:no-underline" rel="noopener" target="_blank">Sede electrónica</a></li>
            <li><strong>Impuesto de construcciones (ICIO):</strong> solo si la licencia lleva obra asociada.</li>
            <li><strong>Estudios adicionales:</strong> acústico, de humos o plan de autoprotección, según el caso.</li>
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
        <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">
          <li>·{" "}<Link href="/licencia-actividad-granada" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad y apertura en Granada"}</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-granada" className="text-sky-700 underline hover:no-underline">{"Licencia de bar o restaurante en Granada"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad"}</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad"}</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Presupuesto exacto para tu caso</h2>
          <p className="mt-4 text-slate-300">Indica tipo de actividad, superficie y ubicación. Te enviamos presupuesto cerrado.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
