import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-reforma-vehiculo";

export const metadata: Metadata = {
  title: "Homologación de Reformas de Vehículos · Llantas, 4x4, Camper, Motor",
  description:
    "Legalización y homologación de reformas en vehículos: cambio de llantas, suspensión, motor, transformación a camper, snorkel, defensas en 4x4. Conforme RD 866/2010 y Orden ICT 1212/2018. Toda España.",
  keywords: [
    "homologación reforma vehículo",
    "homologación reforma coche",
    "homologación llantas",
    "homologación suspensión",
    "homologación cambio motor",
    "homologación camper",
    "homologación 4x4 snorkel",
    "homologación defensa coche",
    "RD 866/2010 reforma vehículo",
    "Orden ICT 1212/2018",
    "ITV reforma vehículo",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Homologación de Reformas de Vehículos en España",
    description:
      "Llantas, suspensión, motor, camper y reformas 4x4. Tramitación con ingeniero colegiado, ámbito nacional.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación reforma vehículo – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de Reformas", description: "Llantas, motor, camper y 4x4.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de Reforma de Vehículo",
  serviceType: "Legalización de modificaciones técnicas en vehículos",
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
    "Proyecto técnico y certificado de reforma para legalizar modificaciones en vehículos: llantas, suspensión, motor, camper, snorkel, defensas, transformación N1/M1. Conforme RD 866/2010 y Orden ICT 1212/2018.",
};

const faqs = [
  {
    q: "¿Qué reformas requieren homologación obligatoria?",
    a: "Cualquier modificación que separe el vehículo de su tipo homologado: cambio de motor, llantas/neumáticos no originales, suspensión, paragolpes, snorkel, defensas, transformación a camper, instalación de equipos auxiliares, modificación de carrocería o categoría. La Orden ICT 1212/2018 lista 56 tipos de reforma con su procedimiento.",
  },
  {
    q: "¿Qué pasa si la ITV detecta una reforma sin homologar?",
    a: "Resulta desfavorable y no podrás circular hasta legalizarla. La sanción puede llegar a 500 € + retirada de tarjeta ITV. Lo prudente es homologar antes de la ITV o, si ya hay reforma, regularizar con un certificado ad hoc retroactivo.",
  },
  {
    q: "¿Tramitáis transformación de furgoneta a camper?",
    a: "Sí. La conversión de una furgoneta en autocaravana / camper / vivienda exige proyecto técnico específico (cocina, agua, electricidad 12 V, fijaciones, ventilación, plazas) y cambio de categoría a vivienda en la tarjeta ITV. Plazo habitual: 3-4 semanas.",
  },
  {
    q: "¿Cuánto cuesta homologar una reforma?",
    a: "Reformas simples (llantas, suspensión, snorkel): 180-350 €. Cambios estructurales (motor, carrocería): 400-800 €. Camper completa: 600-900 €. Tasas ITV de reforma: 50-100 €. Damos presupuesto cerrado tras revisar fotos y datos del vehículo.",
  },
  {
    q: "¿Qué documentación tengo que aportar?",
    a: "Permiso de circulación, ficha técnica actual, fotografías detalladas de la reforma realizada o a realizar (varios ángulos, número de bastidor visible), facturas de las piezas instaladas y datos del taller que ha hecho la instalación. Para algunos casos también el certificado de la pieza homologada (e-mark).",
  },
  {
    q: "¿Vale para cualquier tipo de vehículo?",
    a: "Sí. Tramitamos reformas en turismos, todoterrenos, motocicletas, ciclomotores, quads, autocaravanas, furgonetas, vehículos industriales y remolques. Cada categoría tiene su procedimiento concreto.",
  },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación y Fichas Técnicas", item: `${siteUrl}/fichas-tecnicas` },
    { "@type": "ListItem", position: 3, name: "Reformas de vehículos", item: `${siteUrl}${path}` },
  ],
};

export default function HomologacionReformaVehiculoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/"><Logo className="h-11 w-auto" /></Link>
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
          <li><Link href="/fichas-tecnicas" className="hover:text-slate-900">Homologación y fichas técnicas</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Reformas de vehículos</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Modificaciones técnicas</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de Reformas de Vehículos</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Legalizamos cualquier modificación técnica en tu vehículo: llantas,
            suspensión, motor, paragolpes, snorkel, defensas, transformación a
            camper. Proyecto y certificado conforme RD 866/2010 y Orden ICT
            1212/2018. Entrega lista para tu ITV de reforma.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#formulario" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tipos de reforma que tramitamos</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Llantas y neumáticos", "Cambio de medida o ET fuera de la ficha. Listado de equivalencias y ajustes."],
            ["Suspensión", "Muelles deportivos, kit elevación 4x4, suspensión neumática."],
            ["Cambio de motor", "Sustitución por otro modelo o nueva versión. Reforma estructural."],
            ["Paragolpes y defensas", "Defensas frontales y traseras, parachoques after-market homologables."],
            ["Snorkel y elevación 4x4", "Para todoterrenos: snorkel, kit elevación, neumáticos AT/MT."],
            ["Transformación a camper", "Conversión de furgoneta en autocaravana / vivienda con cambio de categoría."],
            ["Cabrestante y winch", "Instalación en frontal con refuerzo estructural homologado."],
            ["Iluminación auxiliar", "LEDs, faros adicionales, barras LED 4x4."],
            ["Cambio de categoría", "N1 a M1, pickup a turismo, vehículo taller."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">{t}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cómo es el proceso</h2>
          <ol className="mt-8 space-y-4 text-slate-700">
            <li><strong>1. Estudio previo</strong> — nos envías fotos de la reforma y los datos del vehículo. Confirmamos que es legalizable y qué documentación pide la ITV.</li>
            <li><strong>2. Proyecto técnico</strong> — redactamos memoria, planos y cálculos según la Orden ICT 1212/2018.</li>
            <li><strong>3. Certificado del taller</strong> — el taller que hizo la instalación firma la ejecución conforme al proyecto.</li>
            <li><strong>4. ITV de reforma</strong> — acudes a la estación con todo. Sello en la tarjeta ITV.</li>
            <li><strong>5. Trámite DGT</strong> — actualización del permiso de circulación si la reforma cambia datos clave (categoría, peso, plazas).</li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Servicios relacionados</h2>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>· <Link href="/homologacion-coche-importado" className="text-brand-navy underline hover:no-underline">Homologación de coche importado</Link></li>
          <li>· <Link href="/homologacion-coche-usa" className="text-brand-navy underline hover:no-underline">Reformas en coche americano (USA)</Link></li>
          <li>· <Link href="/pasar-itv-coche-extranjero" className="text-brand-navy underline hover:no-underline">Pasar ITV con coche extranjero</Link></li>
          <li>· <Link href="/homologacion-vehiculo-historico" className="text-brand-navy underline hover:no-underline">Vehículo histórico (modificaciones específicas)</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Todos los servicios de vehículos</Link></li>
        </ul>
      </section>

      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu presupuesto</h2>
            <p className="mt-3 text-base text-slate-600">Cuéntanos qué reforma quieres legalizar y te respondemos en menos de 24 h.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><FichaForm /></div>
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

      <SiteFooter />
    </main>
  );
}
