import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";

const siteUrl = "https://www.abacoingenieria.es";
const path = "/licencia-bar-restaurante-almeria";

export const metadata: Metadata = {
  title: "Licencia de Apertura para Bar y Restaurante en Almería · Requisitos",
  description:
    "Guía completa de la licencia de apertura para bar, restaurante o cafetería en Almería: requisitos, normativa, plazos, declaración responsable, salida de humos y proyecto técnico. Presupuesto sin compromiso.",
  keywords: [
    "licencia apertura bar Almería",
    "licencia apertura restaurante Almería",
    "licencia hostelería Almería",
    "proyecto bar restaurante Almería",
    "salida de humos bar Almería",
    "declaración responsable hostelería Almería",
    "ingeniero hostelería Almería",
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
    title: "Licencia de Apertura para Bar y Restaurante en Almería",
    description:
      "Requisitos, normativa y plazos para abrir un bar o restaurante en Almería.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Licencia de apertura bar y restaurante Almería – Abaco Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencia de Apertura Bar y Restaurante en Almería",
    description: "Guía y tramitación con ingeniero colegiado.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de Apertura para Bar y Restaurante",
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
  areaServed: [
    { "@type": "AdministrativeArea", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Murcia" },
  ],
  url: `${siteUrl}${path}`,
  description:
    "Proyecto técnico y tramitación de licencia de apertura para bares, restaurantes, cafeterías y locales de hostelería en Almería.",
};

const faqs = [
  {
    q: "¿Qué licencia necesita un bar o restaurante en Almería?",
    a: "Los locales de hostelería son actividades calificadas: requieren proyecto técnico de actividad firmado por ingeniero colegiado y, según el régimen aplicable, declaración responsable o licencia previa del Ayuntamiento de Almería. Si hay cocina, se exige también justificación de salida de humos y ventilación.",
  },
  {
    q: "¿Es obligatoria la salida de humos en un bar con cocina?",
    a: "Sí. Cualquier local de hostelería con elaboración de alimentos calientes debe disponer de extracción independiente que vierta por encima de la cubierta del edificio (Ordenanza Municipal y CTE DB-HS). Es uno de los requisitos que más rechazos provoca; revisa la viabilidad antes de firmar el alquiler.",
  },
  {
    q: "¿Puedo poner terraza en mi bar?",
    a: "La terraza requiere autorización municipal independiente (ocupación de vía pública). Se tramita en paralelo a la licencia de actividad. En Almería capital la gestiona el Área de Urbanismo; en municipios menores depende del ayuntamiento.",
  },
  {
    q: "¿Cuánto tarda la licencia de un restaurante en Almería?",
    a: "Con declaración responsable, el local puede abrir en pocos días desde la presentación del proyecto. La revisión municipal puede prolongarse 2-4 meses. Para licencias previas (locales de mayor aforo, espectáculos) el plazo puede llegar a 6 meses.",
  },
  {
    q: "¿Qué normativa aplica a un local de hostelería?",
    a: "Código Técnico de la Edificación (CTE), Reglamento de Instalaciones Térmicas (RITE), Reglamento Electrotécnico de Baja Tensión (REBT), Ordenanza Municipal de Ruidos, normativa autonómica de espectáculos públicos (Ley 13/1999 de Andalucía) y normativa sanitaria.",
  },
  {
    q: "¿Cuánto cuesta el proyecto técnico de un bar?",
    a: "Depende de superficie, aforo, instalaciones y si hay cocina, terraza o música. Tras la visita gratuita al local te damos presupuesto cerrado, sin variaciones posteriores.",
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
      name: "Bar y Restaurante en Almería",
      item: `${siteUrl}${path}`,
    },
  ],
};

export default function LicenciaBarRestauranteAlmeria() {
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
          <li aria-current="page" className="text-slate-700">Bar y restaurante en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Hostelería · Almería</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Licencia de Apertura para Bar y Restaurante en Almería
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Proyecto técnico y tramitación completa para abrir tu bar,
            restaurante, cafetería o local de hostelería en Almería. Visita
            gratuita al local, presupuesto cerrado y gestión ante el
            Ayuntamiento hasta la apertura.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Requisitos para abrir un bar o restaurante en Almería</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            La hostelería es una de las actividades más reguladas. Antes de
            firmar el contrato del local conviene comprobar que el inmueble es
            compatible con el uso previsto y reúne las condiciones técnicas
            mínimas. Estos son los puntos críticos en Almería:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Compatibilidad urbanística:</strong> el PGOU debe permitir uso comercial/hostelero en la planta del local.</li>
            <li><strong>Salida de humos:</strong> imprescindible si hay cocina. Debe llegar por encima de la cubierta y separarse de huecos de viviendas.</li>
            <li><strong>Aforo y accesibilidad:</strong> aseo adaptado, anchos mínimos de paso y salida directa a vía pública.</li>
            <li><strong>Aislamiento acústico:</strong> según la Ordenanza Municipal de Ruidos. Si hay música amplificada los requisitos se endurecen.</li>
            <li><strong>Instalaciones:</strong> electricidad (REBT), gas, climatización (RITE), protección contra incendios y sanitaria.</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tipos de establecimiento</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Bares y cafeterías", "Sin cocina o con elaboración limitada. Tramitación generalmente por declaración responsable."],
              ["Restaurantes", "Con cocina completa. Salida de humos obligatoria, mayor exigencia de ventilación e instalaciones."],
              ["Pubs y locales con música", "Categoría calificada. Aislamiento acústico reforzado y limitador-registrador de sonido."],
              ["Food trucks y kioscos", "Permisos específicos de ocupación de vía pública y cumplimiento sanitario."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proceso de tramitación</h2>
        <ol className="mt-8 space-y-4 text-slate-700">
          <li><strong>1. Visita previa al local</strong> — comprobamos viabilidad, salida de humos y compatibilidad urbanística.</li>
          <li><strong>2. Presupuesto cerrado</strong> — sin sorpresas. Si el local no es viable, te lo decimos antes de cobrar nada.</li>
          <li><strong>3. Redacción del proyecto técnico</strong> — memoria, planos, cálculos y anexos.</li>
          <li><strong>4. Visado colegial</strong> cuando lo exija la actividad.</li>
          <li><strong>5. Presentación telemática</strong> en el Ayuntamiento de Almería (o municipio correspondiente).</li>
          <li><strong>6. Seguimiento</strong> hasta la apertura efectiva y respuesta a cualquier requerimiento municipal.</li>
        </ol>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold">Servicios relacionados</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad y apertura en Almería</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Cuánto cuesta una licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solicita presupuesto para tu bar o restaurante</h2>
          <p className="mt-4 text-slate-300">Cuéntanos el local, ubicación y tipo de actividad. Respondemos en menos de 24 h.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
