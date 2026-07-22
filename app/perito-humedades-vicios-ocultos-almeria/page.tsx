import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-humedades-vicios-ocultos-almeria";

export const metadata: Metadata = {
  title: "Perito de Humedades y Vicios Ocultos en Almería | Abaco Ingeniería",
  description: "Perito de humedades, filtraciones y vicios ocultos en Almería. Ingeniero industrial colegiado: diagnóstico de origen, valoración del daño y reclamación. Estudio previo gratuito.",
  keywords: ["perito humedades Almería","perito vicios ocultos Almería","perito filtraciones Almería","informe pericial humedades","reclamar vicios ocultos vivienda Almería","perito judicial humedades Almería","peritaje daños por agua Almería","perito obra mal ejecutada Almería","dictamen causa origen humedades","perito ingeniero industrial instalaciones"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-humedades-vicios-ocultos-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de humedades, filtraciones y vicios ocultos en Almería",
    description: "Perito de humedades, filtraciones y vicios ocultos en Almería. Ingeniero industrial colegiado: diagnóstico de origen, valoración del daño y reclamación. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de humedades, filtraciones y vicios ocultos en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de humedades, filtraciones y vicios ocultos en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de humedades, filtraciones y vicios ocultos en Almería",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34687465486",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04001", addressCountry: "ES" },
  },
  areaServed: [
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
    { "@type": "Country", name: "España" },
  ],
  url: "https://www.ingenierial.es/perito-humedades-vicios-ocultos-almeria",
  description: "Perito de humedades, filtraciones y vicios ocultos en Almería. Ingeniero industrial colegiado: diagnóstico de origen, valoración del daño y reclamación. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Puede un ingeniero industrial peritar humedades y vicios ocultos?",
    "a": "Sí, dentro de su ámbito. El ingeniero técnico industrial es plenamente competente en instalaciones de fontanería, saneamiento, climatización y ventilación y en el análisis de causa-origen del agua. Para daños puramente estructurales o constructivos me coordino con un arquitecto o arquitecto técnico, de forma que el informe cubra todos los frentes sin invadir competencias reservadas."
  },
  {
    "q": "¿Qué diferencia hay entre perito de parte y perito judicial?",
    "a": "El perito de parte lo contratas tú para fundamentar tu reclamación o defenderte de otra; su informe es de parte, pero debe ser técnicamente imparcial. El perito judicial lo designa el juzgado, normalmente desde las listas de los colegios profesionales, para auxiliar al tribunal con independencia. Realizo ambas funciones en Almería capital y provincia."
  },
  {
    "q": "¿Cuánto tiempo tengo para reclamar humedades o vicios ocultos?",
    "a": "Depende de la vía. En compraventa de vivienda, la acción por vicios ocultos del Código Civil tiene un plazo corto desde la entrega, por lo que conviene actuar rápido. En vivienda nueva o reformada, la Ley de Ordenación de la Edificación fija garantías de uno, tres y diez años según el tipo de defecto, más un plazo para ejercer la acción desde que aparece el daño. Un diagnóstico temprano evita que caduque tu derecho."
  },
  {
    "q": "¿El informe me sirve para reclamar al seguro del hogar?",
    "a": "Sí. Cuando el seguro cubre el daño por agua pero discrepáis en el importe, mi valoración da soporte a la tasación pericial contradictoria del artículo 38 de la Ley de Contrato de Seguro. Ese procedimiento tiene plazos muy estrictos para nombrar a los peritos, así que es importante encargar el informe cuanto antes."
  },
  {
    "q": "¿Tienes que venir a mi vivienda en Almería?",
    "a": "El diagnóstico de humedades exige inspección presencial, que realizo en Almería capital y en toda la provincia, además de Granada, Málaga y Murcia. La redacción, las aclaraciones y la entrega del informe se gestionan online, con firma digital FNMT de plena validez ante juzgados, aseguradoras y administraciones."
  },
  {
    "q": "¿Cuánto cuesta y en cuánto tiempo tengo el informe?",
    "a": "Primero hago un estudio previo gratuito de tu caso para ver si tiene recorrido técnico. A partir de ahí trabajo con presupuesto cerrado, sin sorpresas, y acuerdo contigo un plazo de entrega según la complejidad y las pruebas necesarias. Cuéntame los síntomas y desde cuándo aparecen y te oriento sin compromiso."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Perito de humedades, filtraciones y vicios ocultos en Almería", item: "https://www.ingenierial.es/perito-humedades-vicios-ocultos-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Humedades y filtraciones por instalación: mi especialidad",
    "cuerpo": "No todas las humedades son iguales ni competen al mismo técnico. Como ingeniero industrial soy competente en las que nacen de una instalación: fugas en tuberías de fontanería empotradas, roturas o atascos de la red de saneamiento, rebosaderos y bajantes defectuosos, condensaciones provocadas por una ventilación o una climatización mal dimensionada y sistemas de evacuación de agua en cubierta mal ejecutados. Localizo el punto exacto de entrada del agua sin demoler a ciegas y explico por qué se produce, un dato decisivo para dirigir la reparación correcta y para señalar al responsable del daño."
  },
  {
    "titulo": "Diagnóstico de causa-origen, no una foto de la mancha",
    "cuerpo": "Un informe que solo describe el daño no gana un procedimiento. Realizo inspección técnica con medición de humedad, revisión de la instalación implicada y, cuando procede, pruebas de estanqueidad y termografía para descartar hipótesis y confirmar el foco. El resultado es un dictamen de causa-origen que distingue con rigor si el agua procede de una fuga de instalación, de una filtración de cubierta o fachada, de una condensación o de capilaridad ascendente. Acertar con el origen es lo que decide a quién se reclama: al vendedor, al constructor, a la aseguradora o al vecino."
  },
  {
    "titulo": "Vicios ocultos, obra mal ejecutada y plazos legales",
    "cuerpo": "En una compraventa, el defecto que no era visible y ya existía antes de la entrega puede reclamarse como vicio oculto por la vía del artículo 1484 y siguientes del Código Civil, con plazos breves que conviene no dejar pasar. En vivienda de obra o reforma reciente aplica la Ley de Ordenación de la Edificación, con garantías de un año en acabados, tres años en elementos que afectan a la habitabilidad, donde suelen encuadrarse humedades y filtraciones, y diez años en lo estructural. El informe fija qué defecto existe, desde cuándo y bajo qué régimen y plazo encaja tu reclamación."
  },
  {
    "titulo": "Valoración del daño y vía de reclamación",
    "cuerpo": "Cuantifico el coste de reparación conforme a precios reales y los daños derivados en mobiliario, acabados o uso del inmueble. Si el siniestro va por el seguro del hogar y no hay acuerdo en la cifra, mi valoración sostiene la tasación pericial contradictoria del artículo 38 de la Ley de Contrato de Seguro, un procedimiento de plazos muy estrictos. También elaboro informes para comunidades de propietarios cuando la filtración procede de zonas o instalaciones comunes, y para el vecino afectado por una fuga del piso superior. Trabajo como perito de parte o por designación judicial."
  },
  {
    "titulo": "Alcance honesto: cuándo interviene el arquitecto",
    "cuerpo": "Ser riguroso incluye reconocer el límite de cada competencia. Las patologías puramente estructurales o constructivas, como grietas en elementos portantes, forjados o cimentación, corresponden al arquitecto o al arquitecto técnico. En esos casos no invado su competencia: coordino el trabajo con el técnico adecuado para que el informe conjunto sea completo y admisible. Mi aportación se concentra en instalaciones, causa-origen del agua y cuantificación del perjuicio, que es exactamente donde el ingeniero técnico industrial suma valor real a tu reclamación por humedades."
  }
];

export default function Page() {
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
            <Link href="C:/Program Files/Git/peritaciones-judiciales" className="text-sm font-medium text-slate-600 hover:text-slate-900">Peritaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Perito de humedades, filtraciones y vicios ocultos en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Perito de humedades, filtraciones y vicios ocultos en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Determino de dónde sale realmente el agua y cuantifico el perjuicio para que reclames con un informe pericial sólido. Ingeniero técnico industrial colegiado en Almería desde 1983."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Manchas que reaparecen, pintura que se abomba, olor a humedad, goteos desde el piso de arriba, tabiques que se ennegrecen o una vivienda recién comprada que empieza a mostrar defectos: detrás de cada síntoma hay una causa técnica concreta. Como ingeniero técnico industrial colegiado en Almería desde 1983, mi trabajo no es describir la mancha, sino determinar el origen del agua. Me centro en las humedades y filtraciones de origen instalación: fugas de fontanería empotrada, roturas de saneamiento, condensaciones por una ventilación o climatización mal ejecutada e impermeabilizaciones deficientes. Ese diagnóstico de causa-origen es la base de cualquier reclamación seria y de una reparación que no se limite a tapar la mancha."}</p>
          <p>{"Con el origen identificado, valoro y cuantifico el perjuicio: coste real de reparación y daños asociados en mobiliario, acabados o pérdida de uso del inmueble. Con ese informe reclamas al vendedor por vicios ocultos, al promotor o constructor dentro de los plazos de la Ley de Ordenación de la Edificación, a tu seguro del hogar o a la comunidad de propietarios. Actúo como perito de parte cuando me contratas tú y como perito judicial por designación del juzgado, siempre con imparcialidad técnica. Cubro Almería capital y provincia con inspección presencial y firma digital FNMT. El estudio previo es gratuito y el presupuesto, cerrado."}</p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Qué incluye el servicio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {bloques.map((b) => (
              <article key={b.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{b.titulo}</h3>
                <p className="mt-3 text-slate-600">{b.cuerpo}</p>
              </article>
            ))}
          </div>
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
        <h2 className="text-2xl font-bold">Servicios relacionados</h2>
        <ul className="mt-4 grid gap-2 text-slate-700 md:grid-cols-2">
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales en Almería</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">Perito de seguros y daños por agua en Almería</Link></li>
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">Perito ingeniero industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones inmobiliarias en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales de ámbito nacional</Link></li>
        </ul>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pide presupuesto sin compromiso</h2>
          <p className="mt-4 text-slate-300">Cuéntanos tu caso. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
