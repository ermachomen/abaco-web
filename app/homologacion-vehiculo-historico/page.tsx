import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-vehiculo-historico";

export const metadata: Metadata = {
  title: "Clasificación y Matriculación de Vehículo Histórico · Toda España",
  description:
    "Tramitación completa para clasificar tu coche o moto como vehículo histórico: informe técnico, inspección, matriculación con placa histórica. Ámbito nacional, ingeniero colegiado, presupuesto cerrado.",
  keywords: [
    "homologación vehículo histórico",
    "clasificación vehículo histórico",
    "matricular coche clásico España",
    "ficha técnica vehículo histórico",
    "placa histórica coche",
    "ingeniero coche clásico",
    "RD 892/2024 vehículo histórico",
    "rematriculación clásico",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Clasificación de Vehículo Histórico en España",
    description:
      "Clasificamos tu coche o moto como vehículo histórico ante el laboratorio oficial. Tramitación nacional, online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Vehículo histórico – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Vehículo Histórico", description: "Clasificación y matriculación con placa histórica.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clasificación de Vehículo Histórico",
  serviceType: "Tramitación de clasificación y matriculación de vehículos clásicos",
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
    "Tramitación completa para clasificar coches y motos como vehículos históricos en España conforme al RD 892/2024: informe técnico, presentación ante laboratorio oficial y matriculación con placa histórica.",
};

const faqs = [
  {
    q: "¿Qué requisitos debe cumplir mi coche para ser histórico?",
    a: "Tener al menos 30 años desde su fabricación, mantener las características esenciales originales (no haber sido modificado de forma sustancial), no estar destinado a uso comercial, y conservar la documentación original o reconstruible. También se admiten vehículos de menos de 30 años si tienen interés histórico declarado.",
  },
  {
    q: "¿Qué ventajas tiene matricular un coche como histórico?",
    a: "Exención del impuesto de circulación en muchos municipios, exención de la ITV de pago en algunos casos, posibilidad de circular en zonas de bajas emisiones (ZBE) sin restricciones, y una matriculación con placa histórica que aumenta el valor de coleccionismo del vehículo.",
  },
  {
    q: "¿Cuál es el proceso completo para clasificarlo como histórico?",
    a: "Desde el RD 892/2024 (en vigor el 1 de octubre de 2024) la clasificación la resuelve directamente la Jefatura Provincial de Tráfico de la DGT, ya no la comunidad autónoma. El proceso: 1) Informe técnico previo (lo redactamos nosotros). 2) Inspección por laboratorio oficial, salvo el grupo A de vehículos ya matriculados en España, que puede clasificarse sin inspección previa. 3) Resolución de la DGT. 4) Inspección ITV específica de vehículo histórico. 5) Matriculación con placa histórica.",
  },
  {
    q: "¿Cuánto tarda y cuánto cuesta?",
    a: "El proceso completo suele tardar 2-4 meses por la inspección del laboratorio oficial. El informe técnico parte de 250 € + IVA. Las tasas del laboratorio rondan 200-400 €. Tasas DGT y placa histórica: 100-150 €. Damos presupuesto cerrado tras revisar el caso.",
  },
  {
    q: "¿Puedo clasificar también motos clásicas?",
    a: "Sí. El procedimiento es el mismo para motocicletas, ciclomotores y vehículos de tres ruedas. Los criterios de antigüedad (30 años) y conservación se aplican igual.",
  },
  {
    q: "¿Y si el coche importado de USA es clásico?",
    a: "Es uno de los casos más interesantes. Un Mustang del 67, Chevrolet del 57 o Cadillac de los 80 puede clasificarse como histórico, lo que reduce las exigencias de adaptación de luces y velocímetro a la circulación actual y simplifica la matriculación.",
  },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación y Fichas Técnicas", item: `${siteUrl}/fichas-tecnicas` },
    { "@type": "ListItem", position: 3, name: "Vehículo histórico", item: `${siteUrl}${path}` },
  ],
};

export default function HomologacionVehiculoHistoricoPage() {
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
          <li aria-current="page" className="text-slate-700">Vehículo histórico</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Coches y motos clásicos</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Clasificación de Vehículo Histórico</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tramitamos la documentación técnica para clasificar tu coche o moto
            con más de 30 años como vehículo histórico ante el laboratorio
            oficial autorizado. Matriculación con placa histórica, exenciones
            fiscales y libre circulación en ZBE.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#formulario" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué es un vehículo histórico ante la DGT?</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            La clasificación como <strong>vehículo histórico</strong> está
            regulada por el <strong>RD 892/2024</strong> y se concede a
            vehículos que cumplen tres condiciones:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Tener al menos <strong>30 años de antigüedad</strong> desde su fabricación o primera matriculación.</li>
            <li>Mantener las <strong>características esenciales originales</strong>: motor, carrocería, transmisión, etc.</li>
            <li>No estar dedicado al <strong>uso comercial</strong> ni utilizarse de forma habitual como vehículo principal.</li>
          </ul>
          <p>
            También se admiten algunos vehículos de menos de 30 años con
            <strong> interés histórico declarado</strong> (modelos limitados,
            vehículos militares, prototipos, vehículos vinculados a hechos relevantes).
          </p>
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ventajas de la clasificación</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Impuesto de circulación", "Exención total o reducción importante en muchos municipios."],
              ["ZBE y restricciones", "Libre circulación en zonas de bajas emisiones por su carácter histórico."],
              ["ITV menos exigente", "Periodicidad reducida y criterios técnicos adaptados a la antigüedad del vehículo."],
              ["Placa histórica", "Matrícula específica que identifica el vehículo y aumenta su valor de coleccionismo."],
              ["Valor de mercado", "El estatus de histórico revaloriza el coche o moto frente a una matriculación ordinaria."],
              ["Seguros específicos", "Aseguradoras especializadas con primas reducidas para vehículos clásicos."],
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
          <li>· <Link href="/homologacion-coche-importado" className="text-brand-navy underline hover:no-underline">Homologación de coche importado clásico</Link></li>
          <li>· <Link href="/homologacion-coche-usa" className="text-brand-navy underline hover:no-underline">Coches USA clásicos (Mustang, Camaro, Cadillac…)</Link></li>
          <li>· <Link href="/pasar-itv-coche-extranjero" className="text-brand-navy underline hover:no-underline">Pasar ITV con coche extranjero</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Todos los servicios de homologación</Link></li>
        </ul>
      </section>

      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita la clasificación de tu clásico</h2>
            <p className="mt-3 text-base text-slate-600">Indícanos marca, modelo y año del vehículo y te respondemos con presupuesto cerrado.</p>
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
