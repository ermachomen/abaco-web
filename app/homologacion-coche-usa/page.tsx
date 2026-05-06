import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-coche-usa";

export const metadata: Metadata = {
  title: "Homologación de Coche Americano (USA) en España · Ingeniero",
  description:
    "Homologación individual de coches importados de Estados Unidos: Mustang, Camaro, Dodge, pickup F-150, Cadillac. Adaptación de luces, velocímetro y emisiones. ITV previa y matriculación en toda España.",
  keywords: [
    "homologación coche USA",
    "homologación coche americano España",
    "matricular coche americano España",
    "homologación Ford Mustang importado",
    "matricular Dodge USA España",
    "homologación pickup importada",
    "ITV coche americano",
    "RD 750/2010 vehículo USA",
    "homologación individual USA",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Homologación de Coche Americano (USA) en España",
    description:
      "Homologación individual y matriculación de vehículos USA en España. Ámbito nacional, online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación coche USA – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de Coche Americano (USA)", description: "Toda España, online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de Coche Americano (USA)",
  serviceType: "Homologación individual de vehículos importados de Estados Unidos",
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
    "Homologación individual (RD 750/2010) y matriculación en España de coches importados de Estados Unidos. Adaptación de luces, velocímetro km/h, emisiones EURO y certificación técnica.",
};

const faqs = [
  {
    q: "¿Qué adaptaciones necesita un coche americano para circular en España?",
    a: "Las adaptaciones físicas obligatorias suelen ser: faros con haz europeo (no es válida la simple pegatina, debe sustituirse o reprogramarse el módulo), luces traseras con intermitente ámbar, velocímetro con escala en km/h, espejo retrovisor con desempañador (en algunos modelos) y, en motores que no cumplan EURO 4/5/6, gestión motor o catalizadores adicionales.",
  },
  {
    q: "¿Es obligatoria la homologación individual para cualquier coche USA?",
    a: "Sí, en la práctica todos los coches procedentes de USA requieren homologación individual (RD 750/2010) porque los fabricantes no emiten certificado de conformidad CE para esos modelos. Como ingenieros redactamos la homologación demostrando equivalencia con la normativa europea.",
  },
  {
    q: "¿Cuánto cuesta homologar un coche americano en total?",
    a: "El proyecto técnico de homologación individual parte de 800 €. A esto se añaden: las adaptaciones físicas (faros, luces, velocímetro: 400-1.500 € según modelo), tasas DGT, ITV, e impuesto de matriculación (depende de emisiones y precio del vehículo). Damos presupuesto cerrado tras revisar tu caso.",
  },
  {
    q: "¿Tarda más que un coche europeo?",
    a: "Sí. El plazo total para un coche americano es de 4-8 semanas: 2-3 semanas para redactar y aprobar la homologación individual, 1-2 semanas para hacer las adaptaciones físicas, y 1-2 semanas para inspección ITV y trámites DGT.",
  },
  {
    q: "¿Tramitáis vehículos militares, clásicos o de colección?",
    a: "Sí. Coches americanos clásicos (Mustang, Camaro, Bel Air, Cadillac…) suelen catalogarse como vehículos históricos si tienen más de 30 años, lo que reduce las exigencias de adaptación. Vehículos militares (Hummer, Jeep) tienen procedimiento similar al civil con documentación adicional de origen.",
  },
  {
    q: "¿Puedo gestionar todo desde fuera de Almería?",
    a: "Sí. Trabajamos en toda España de forma 100% online. Recibimos la documentación por email, firmamos digitalmente con FNMT y te entregamos los archivos listos para presentar en la ITV de tu provincia.",
  },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación y Fichas Técnicas", item: `${siteUrl}/fichas-tecnicas` },
    { "@type": "ListItem", position: 3, name: "Coche americano (USA)", item: `${siteUrl}${path}` },
  ],
};

export default function HomologacionCocheUsaPage() {
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
          <li aria-current="page" className="text-slate-700">Coche americano (USA)</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Importación · Estados Unidos</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de Coche Americano (USA)</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tramitación completa para matricular en España coches importados
            de Estados Unidos: Ford Mustang, Chevrolet Camaro, Dodge Charger,
            pickups F-150 y Silverado, Cadillac, Tesla y muchos más. Homologación
            individual con firma digital FNMT, válida en cualquier provincia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#formulario" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cómo se homologa un coche USA paso a paso</h2>
        <ol className="mt-8 space-y-4 text-slate-700">
          <li><strong>1. Estudio previo de viabilidad</strong> — revisamos VIN, fotografías y documentos de origen para confirmar qué adaptaciones son necesarias antes de comprar adaptaciones físicas.</li>
          <li><strong>2. Adaptaciones obligatorias</strong> — faros europeos, intermitentes ámbar, velocímetro km/h, ajuste de emisiones y, en algunos modelos, recorrido de cinturones o espejos.</li>
          <li><strong>3. Proyecto de homologación individual</strong> — redactamos la memoria técnica conforme a RD 750/2010 demostrando equivalencia con la normativa CE.</li>
          <li><strong>4. Inspección previa en ITV</strong> — la estación verifica las adaptaciones y emite la tarjeta ITV española.</li>
          <li><strong>5. Trámites DGT</strong> — impuesto de matriculación, permiso de circulación y placa española.</li>
        </ol>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Modelos USA que tramitamos con frecuencia</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Ford Mustang", "GT, EcoBoost y Shelby. Adaptación habitual de luces y velocímetro."],
              ["Chevrolet Camaro", "Z28, SS y ZL1. Comprobación de emisiones y catalización."],
              ["Dodge Charger / Challenger", "Hellcat, R/T, SRT. Especial atención a emisiones EURO."],
              ["Pickup Ford F-150 / Chevy Silverado", "Vehículos pesados, requieren ajustes en luces y categoría N1/M1."],
              ["Cadillac Escalade, CTS", "Modelos premium con sistemas eléctricos específicos."],
              ["Tesla Model S/X (USA)", "Si la importación es directa de USA hay que validar el COC europeo equivalente."],
              ["Hummer H1/H2/H3", "Vehículos militares civiles. Tramitación con documentación adicional."],
              ["Jeep Wrangler USA", "Diferencias con el modelo europeo en faros y velocímetro."],
              ["Coches clásicos (>30 años)", "Mejor catalogarlos como históricos."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{t}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Servicios relacionados</h2>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>· <Link href="/homologacion-coche-importado" className="text-brand-navy underline hover:no-underline">Homologación de coche importado (general UE / no UE)</Link></li>
          <li>· <Link href="/pasar-itv-coche-extranjero" className="text-brand-navy underline hover:no-underline">Pasar la ITV con un coche extranjero</Link></li>
          <li>· <Link href="/homologacion-vehiculo-historico" className="text-brand-navy underline hover:no-underline">Coches USA clásicos: catalogación como histórico</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Ficha técnica reducida</Link></li>
        </ul>
      </section>

      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu presupuesto</h2>
            <p className="mt-3 text-base text-slate-600">Indícanos el modelo, año y país de origen y te respondemos en menos de 24 h.</p>
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
