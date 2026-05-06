import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/pasar-itv-coche-extranjero";

export const metadata: Metadata = {
  title: "Pasar la ITV con un Coche Extranjero · Guía y Tramitación",
  description:
    "Cómo pasar la ITV en España con un coche extranjero: documentación, ficha reducida, certificado COC, adaptaciones y plazos. Tramitación completa con ingeniero colegiado, ámbito nacional online.",
  keywords: [
    "pasar ITV coche extranjero",
    "ITV coche importado España",
    "inspección previa matriculación",
    "ITV vehículo UE matriculado",
    "ITV coche americano",
    "documentación ITV coche extranjero",
    "ficha reducida para ITV",
    "ITV coche Alemania importado",
    "ITV coche USA",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Pasar la ITV con un Coche Extranjero en España",
    description:
      "Guía y tramitación completa para superar la inspección previa a matriculación de un coche importado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Pasar ITV coche extranjero – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Pasar ITV Coche Extranjero", description: "Documentación, adaptaciones y plazos.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tramitación ITV para Coche Extranjero",
  serviceType: "Inspección previa a matriculación de vehículo importado",
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
    "Documentación técnica para superar la ITV previa a matriculación con un coche extranjero. Ficha reducida u homologación individual según el origen del vehículo.",
};

const faqs = [
  {
    q: "¿Qué necesito llevar a la ITV con un coche extranjero?",
    a: "Documento original del país de origen (ficha técnica), permiso de circulación, ficha técnica reducida o certificado de conformidad CE, justificantes de propiedad, justificante de aduana si procede de fuera de la UE, DNI/NIE del titular y, en algunos casos, justificante de residencia.",
  },
  {
    q: "¿Vale el certificado de conformidad (COC) o necesito ficha reducida?",
    a: "Si el coche tiene COC del fabricante (vehículos UE recientes), es suficiente. Si no lo tiene o está incompleto, hace falta una ficha técnica reducida firmada por ingeniero colegiado. Si el coche no tiene homologación CE en absoluto (USA, Japón, UK post-Brexit, anteriores a 2002), hace falta homologación individual.",
  },
  {
    q: "¿Qué adaptaciones suele exigir la ITV en coches no UE?",
    a: "Las más habituales son: faros con haz europeo (no basta pegatina, suele ser sustitución), intermitentes traseros ámbar (en USA son rojos), velocímetro con escala km/h, comprobación de emisiones EURO y, en algunos modelos, ajustes de cinturones, espejos o sistemas auxiliares.",
  },
  {
    q: "¿Puedo pasar la ITV en cualquier provincia de España?",
    a: "Sí. La inspección previa a matriculación se hace en cualquier estación ITV homologada de España, independientemente de tu domicilio. Lo habitual es elegir la más cercana al lugar donde se completen los trámites posteriores en Tráfico.",
  },
  {
    q: "¿Qué pasa si el coche no pasa la ITV a la primera?",
    a: "Te darán un informe de no conformidades con las correcciones necesarias. Lo habitual son ajustes menores (faros, luces, velocímetro). Como ingenieros redactamos certificados complementarios o adendas si la ITV los pide, sin necesidad de redactar un proyecto nuevo.",
  },
  {
    q: "¿Cuánto cuesta el proceso completo de ITV + matriculación?",
    a: "Tasa ITV: 50-150 €. Ficha reducida: 60-150 €. Homologación individual: desde 600 €. Impuesto de matriculación: depende de emisiones y precio del coche (0% a 14,75%). Damos presupuesto cerrado para nuestra parte tras revisar tu caso.",
  },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación y Fichas Técnicas", item: `${siteUrl}/fichas-tecnicas` },
    { "@type": "ListItem", position: 3, name: "Pasar ITV coche extranjero", item: `${siteUrl}${path}` },
  ],
};

export default function PasarItvCocheExtranjeroPage() {
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
          <li aria-current="page" className="text-slate-700">Pasar ITV coche extranjero</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">ITV previa a matriculación</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Pasar la ITV con un Coche Extranjero</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Te entregamos toda la documentación técnica para que tu coche
            importado supere la inspección previa a matriculación en cualquier
            estación ITV de España. Ficha reducida, homologación individual o
            certificado complementario según el caso.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#formulario" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">El proceso paso a paso</h2>
        <ol className="mt-8 space-y-4 text-slate-700">
          <li><strong>1. Estudio del vehículo</strong> — nos envías VIN, ficha técnica de origen y fotos. Te confirmamos qué documentación necesitas y qué adaptaciones físicas (si las hay).</li>
          <li><strong>2. Documentación técnica</strong> — redactamos la ficha reducida o homologación individual. Firma digital FNMT.</li>
          <li><strong>3. Adaptaciones físicas</strong> — faros, luces, velocímetro… si tu coche viene de USA, Japón o UK. Te indicamos talleres especializados si lo necesitas.</li>
          <li><strong>4. Inspección ITV</strong> — acudes a la estación más cercana con la documentación que te entregamos.</li>
          <li><strong>5. Resolución</strong> — la ITV emite la tarjeta española. Si hay no conformidades, redactamos los certificados complementarios necesarios.</li>
        </ol>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Documentación obligatoria</h2>
          <p className="mt-3 text-slate-600">Esto es lo mínimo que la ITV te va a pedir el día de la inspección:</p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">DNI o NIE del titular del vehículo</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Permiso de circulación del país de origen</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Ficha técnica original (titular y datos del vehículo)</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Certificado COC o ficha técnica reducida</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Factura, contrato compraventa o título de propiedad</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Justificante de aduana (solo coches no UE)</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Justificante de pago de tasas DGT</li>
            <li className="rounded-xl border border-sky-100 bg-white px-4 py-3">Seguro obligatorio (mínimo de circulación)</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Servicios relacionados</h2>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>· <Link href="/homologacion-coche-importado" className="text-brand-navy underline hover:no-underline">Homologación de coche importado (UE y fuera UE)</Link></li>
          <li>· <Link href="/homologacion-coche-usa" className="text-brand-navy underline hover:no-underline">Homologación específica de coche americano (USA)</Link></li>
          <li>· <Link href="/homologacion-vehiculo-historico" className="text-brand-navy underline hover:no-underline">Vehículo histórico / clásico</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Todos los servicios de homologación</Link></li>
        </ul>
      </section>

      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu presupuesto</h2>
            <p className="mt-3 text-base text-slate-600">Cuéntanos los datos del vehículo y te orientamos sobre qué documentación necesitas para la ITV.</p>
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
