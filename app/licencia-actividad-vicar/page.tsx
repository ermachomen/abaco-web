import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.abacoingenieria.es";
const path = "/licencia-actividad-vicar";
const municipio = "Vícar";

export const metadata: Metadata = {
  title: `Licencia de Actividad y Apertura en ${municipio} | Ingeniero`,
  description: `Proyecto técnico y tramitación de licencia de actividad en ${municipio}: comercios, talleres, naves industriales y almacenes hortofrutícolas. Presupuesto sin compromiso.`,
  keywords: [
    `licencia de actividad ${municipio}`,
    `licencia de apertura ${municipio}`,
    `proyecto licencia ${municipio}`,
    `ingeniero ${municipio}`,
    "licencia Puebla de Vícar",
    "licencia La Gangosa",
    "licencia nave industrial Vícar",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: `Licencia de Actividad en ${municipio}`,
    description: `Tramitación completa de licencia de actividad en ${municipio}.`,
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: `Licencia de actividad ${municipio} – Abaco Ingeniería` }],
  },
  twitter: { card: "summary_large_image", title: `Licencia de Actividad ${municipio}`, description: "Proyecto técnico e ingeniero colegiado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Licencia de Actividad en ${municipio}`,
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
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04001", addressCountry: "ES" },
  },
  areaServed: { "@type": "City", name: municipio, containedInPlace: { "@type": "AdministrativeArea", name: "Almería" } },
  url: `${siteUrl}${path}`,
  description: `Proyecto técnico y tramitación de licencia de actividad en ${municipio}, Almería.`,
};

const faqs = [
  { q: `¿Dónde se tramita la licencia en ${municipio}?`, a: `Sede electrónica del Ayuntamiento de ${municipio}. Nos encargamos de la presentación telemática y del seguimiento hasta la resolución.` },
  { q: "¿Tramitáis naves en el polígono La Redonda / La Gangosa?", a: "Sí. Son dos de las zonas con más actividad industrial del municipio. Redactamos el proyecto técnico y justificamos instalaciones, contra incendios y accesibilidad." },
  { q: "¿Trabajáis también en Puebla de Vícar y La Envía?", a: "Sí, ambos núcleos pertenecen al término municipal de Vícar y usamos el mismo procedimiento." },
  { q: `¿Cuánto tarda la licencia en ${municipio}?`, a: "Declaración responsable: apertura inmediata. Actividades calificadas: 2-6 meses según carga documental y requerimientos municipales." },
  { q: "¿Hay diferencias con otros ayuntamientos del Poniente?", a: "La normativa estatal y autonómica es común. Cada ayuntamiento tiene su ordenanza fiscal (tasas) y plazos internos. Conocemos los criterios específicos de Vícar." },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencia de Actividad", item: `${siteUrl}/licencia-de-actividad` },
    { "@type": "ListItem", position: 3, name: municipio, item: `${siteUrl}${path}` },
  ],
};

export default function LicenciaVicar() {
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
          <li aria-current="page" className="text-slate-700">{municipio}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Servicio local · {municipio}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Licencia de Actividad en {municipio}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Proyecto técnico y tramitación ante el Ayuntamiento de {municipio}{" "}
            para locales comerciales, talleres, naves industriales, almacenes
            hortofrutícolas y hostelería. Ingeniero colegiado, visita sin coste
            y presupuesto cerrado.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abrir un negocio en {municipio}</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>{municipio}</strong> combina un fuerte tejido agrícola con
            zonas industriales consolidadas (La Gangosa, La Puebla) y un núcleo
            residencial en crecimiento. Es uno de los municipios del Poniente
            con mayor volumen de aperturas de naves y almacenes relacionados con
            la agricultura intensiva.
          </p>
          <p>
            Para abrir cualquier tipo de local en {municipio} hace falta
            licencia de actividad municipal. Según el tipo de negocio, la
            tramitación puede hacerse por <em>declaración responsable</em>{" "}
            —inmediata— o por <em>licencia previa</em> —con resolución expresa
            del ayuntamiento—. En todos los casos, un ingeniero colegiado debe
            firmar el proyecto técnico.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Zonas y actividades frecuentes</h2>
          <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>· <strong>La Gangosa</strong> — comercio, hostelería, servicios</li>
            <li>· <strong>Puebla de Vícar</strong> — comercio de barrio y oficinas</li>
            <li>· <strong>La Envía</strong> — golf, hostelería, turismo</li>
            <li>· <strong>Polígono La Redonda</strong> — naves, talleres, logística</li>
            <li>· <strong>Zonas agrícolas</strong> — almacenes y manipulados hortofrutícolas</li>
            <li>· <strong>Casco urbano</strong> — servicios y clínicas</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <h2 className="text-2xl font-bold">Otros municipios y servicios</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>·{" "}<Link href="/licencia-actividad-roquetas-de-mar" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Roquetas de Mar</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-el-ejido" className="text-sky-700 underline hover:no-underline">Licencia de actividad en El Ejido</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia bar/restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Precio licencia de actividad</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad general</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Abre tu local en {municipio}</h2>
          <p className="mt-4 text-slate-300">Envíanos la dirección y la actividad. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
