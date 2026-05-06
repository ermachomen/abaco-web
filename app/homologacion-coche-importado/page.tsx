import type { Metadata } from "next";
import Link from "next/link";
import FichaForm from "../components/FichaForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-coche-importado";

export const metadata: Metadata = {
  title: "Homologación de Coche Importado · Toda España · Ingeniero Colegiado",
  description:
    "Homologación e individualización de coches importados de UE, USA, Japón, UK y Alemania. Ficha técnica reducida, certificado COC, ITV previa. 100% online, ámbito nacional, presupuesto cerrado.",
  keywords: [
    "homologación coche importado",
    "homologación vehículo importado España",
    "homologación coche extranjero",
    "matricular coche importado España",
    "ficha reducida coche importado",
    "ingeniero homologación importados",
    "homologación coche Alemania",
    "homologación coche Francia",
    "homologación coche Italia",
    "certificado de conformidad COC",
  ],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${siteUrl}${path}`,
    siteName: "Abaco Ingeniería",
    title: "Homologación de Coche Importado en España",
    description:
      "Tramitación 100% online de la homologación de tu coche importado. Ingeniero colegiado, ámbito nacional.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación coche importado – Abaco Ingeniería" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homologación de Coche Importado",
    description: "Ámbito nacional, 100% online, ingeniero colegiado.",
    images: ["/images/og-abaco.jpg"],
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de Coche Importado",
  serviceType: "Homologación e individualización de vehículos importados",
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
    "Homologación de coches importados de la Unión Europea y terceros países: tramitación de la ficha técnica reducida, homologación individual cuando procede, y matriculación en España. Servicio nacional, online.",
};

const faqs = [
  {
    q: "¿Qué necesito para homologar un coche importado en España?",
    a: "Documentación del país de origen (ficha técnica, permiso de circulación), DNI/NIE del titular, factura o contrato de compra, certificado de conformidad (COC) si el vehículo tiene homologación CE, fotografías del vehículo (frontal, trasera, lateral, bastidor, placa fabricante) y, para coches de fuera de la UE, justificante de aduana.",
  },
  {
    q: "¿Cuál es la diferencia entre ficha reducida y homologación individual?",
    a: "La ficha técnica reducida basta cuando el coche tiene homologación CE válida (la mayoría de coches comprados en países UE). La homologación individual (RD 750/2010) es obligatoria para coches sin esa homologación: vehículos de USA, Japón, UK post-Brexit, o anteriores al año 2002.",
  },
  {
    q: "¿Puedo gestionar todo online sin ir a Almería?",
    a: "Sí. Trabajamos por correo y firmamos los documentos digitalmente con FNMT. Solo necesitas enviarnos la documentación escaneada y las fotografías. Te entregamos el proyecto técnico listo para presentar en la ITV de tu provincia.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso completo de homologación?",
    a: "Una ficha reducida estándar se entrega en 7-15 días desde recepción de la documentación. Una homologación individual requiere 2-4 semanas adicionales. La inspección ITV y los trámites en Jefatura de Tráfico añaden 1-2 semanas según la provincia.",
  },
  {
    q: "¿Qué pasa si el coche no pasa la ITV a la primera?",
    a: "Si la ITV detecta no conformidades (luces, velocímetro, emisiones), te indica las correcciones. Como ingenieros redactamos certificados complementarios o adendas si es necesario. Lo habitual es resolver en una segunda visita sin nuevo proyecto.",
  },
  {
    q: "¿Cuánto cuesta homologar un coche importado?",
    a: "Una ficha reducida de coche con COC oscila entre 60 € y 150 €. Una homologación individual completa parte de 600 €. A esto se añaden tasas DGT, ITV y, si procede, aranceles de aduana. Damos presupuesto cerrado tras revisar tu documentación.",
  },
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación y Fichas Técnicas", item: `${siteUrl}/fichas-tecnicas` },
    { "@type": "ListItem", position: 3, name: "Homologación coche importado", item: `${siteUrl}${path}` },
  ],
};

export default function HomologacionCocheImportadoPage() {
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
          <li aria-current="page" className="text-slate-700">Coche importado</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Vehículos · Toda España</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de Coche Importado</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tramitamos la documentación técnica para matricular en España tu
            coche importado de la Unión Europea, USA, Japón o Reino Unido.
            Ficha técnica reducida o homologación individual según el caso,
            firmadas por ingeniero colegiado con firma digital FNMT.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#formulario" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Qué documentación se exige?</h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Para matricular en España un coche importado hay que acreditar ante
            la <strong>ITV</strong> y la <strong>Jefatura Provincial de Tráfico</strong>{" "}
            que el vehículo cumple los requisitos técnicos españoles. Eso pasa
            por uno de estos dos caminos:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Ficha técnica reducida</strong> — si el coche tiene
              homologación CE (certificado de conformidad COC). Es lo habitual
              para coches comprados en países UE: Alemania, Francia, Italia,
              Holanda, Bélgica…
            </li>
            <li>
              <strong>Homologación individual (RD 750/2010)</strong> — si el
              coche NO tiene homologación CE: USA, Japón, Reino Unido (post-Brexit),
              Suiza, vehículos anteriores al año 2002, prototipos.
            </li>
          </ul>
          <p>
            Ambos documentos los redacta y firma un ingeniero técnico colegiado.
            Tras la inspección previa a matriculación en ITV, se completan los
            trámites en la DGT (impuesto de matriculación, permiso de circulación).
          </p>
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Países que tramitamos</h2>
          <p className="mt-3 text-slate-600">
            Tenemos casos resueltos de prácticamente cualquier origen. Estos
            son los más frecuentes y sus particularidades:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Alemania, Francia, Italia, Holanda", "Coches con homologación CE. Trámite ágil con ficha reducida y certificado de conformidad."],
              ["Estados Unidos, Canadá", "Homologación individual obligatoria. Adaptación de luces, velocímetro km/h y emisiones EURO."],
              ["Japón", "Homologación individual. Ajuste de luces, velocímetro y, si procede, dirección a la izquierda."],
              ["Reino Unido (post-Brexit)", "Desde 2021 requiere homologación individual. Ajuste de luces y comprobación de COC del fabricante."],
              ["Suiza, Noruega", "Coches de la UE/EEE pero con particularidades; revisamos COC caso por caso."],
              ["Vehículos militares / clásicos USA", "Casos especiales: requieren documentación adicional y, a menudo, catalogación como histórico."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Servicios relacionados</h2>
        <ul className="mt-6 space-y-2 text-slate-700">
          <li>· <Link href="/homologacion-coche-usa" className="text-brand-navy underline hover:no-underline">Homologación específica de coches USA / americanos</Link></li>
          <li>· <Link href="/pasar-itv-coche-extranjero" className="text-brand-navy underline hover:no-underline">Pasar la ITV con un coche extranjero</Link></li>
          <li>· <Link href="/homologacion-vehiculo-historico" className="text-brand-navy underline hover:no-underline">Homologación de vehículo histórico / clásico</Link></li>
          <li>· <Link href="/fichas-tecnicas" className="text-brand-navy underline hover:no-underline">Ficha técnica reducida (todos los servicios)</Link></li>
        </ul>
      </section>

      <section id="formulario" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Solicita tu presupuesto</h2>
            <p className="mt-3 text-base text-slate-600">Cuéntanos los datos del vehículo y te respondemos en menos de 24 h.</p>
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
