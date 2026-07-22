import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-vehiculos-almeria";

export const metadata: Metadata = {
  title: "Homologación de Vehículos en Almería · Ingeniero Colegiado",
  description: "Homologación de vehículos y fichas técnicas en Almería: coche importado, americano, reformas, camper, enganche e histórico. Ingeniero colegiado desde 1983. 687 46 54 86.",
  keywords: ["homologación de vehículos almería","homologar coche importado almería","ficha técnica reducida almería","homologación camper almería","homologación enganche remolque almería","ingeniero homologación vehículos almería","reformas de vehículos almería","homologación coche americano almería","ITV coche extranjero almería","homologación vehículo histórico almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-vehiculos-almeria",
    siteName: "Abaco Ingeniería",
    title: "Homologación de vehículos en Almería",
    description: "Homologación de vehículos y fichas técnicas en Almería: coche importado, americano, reformas, camper, enganche e histórico. Ingeniero colegiado desde 1983. 687 46 54 86.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación de vehículos en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de vehículos en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de vehículos en Almería",
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
  url: "https://www.ingenierial.es/homologacion-vehiculos-almeria",
  description: "Homologación de vehículos y fichas técnicas en Almería: coche importado, americano, reformas, camper, enganche e histórico. Ingeniero colegiado desde 1983. 687 46 54 86.",
};

const faqs = [
  {
    "q": "¿Tengo que ir a vuestra oficina de Almería para homologar el vehículo?",
    "a": "No es obligatorio. Trabajamos 100% online con firma digital FNMT, válida ante cualquier ITV y ante la Jefatura Provincial de Tráfico de Almería, así que casi todo se resuelve por correo y teléfono. Si prefieres el trato presencial o hay que ver el vehículo, nos desplazamos por Almería capital y provincia. Tú eliges la vía."
  },
  {
    "q": "¿En qué estaciones ITV de Almería puedo presentar la documentación?",
    "a": "En cualquiera de la provincia. Las inspecciones las gestiona VEIASA en Almería capital, El Ejido y Huércal de Almería (estaciones de La Cepa y Zamarula), además de Huércal-Overa y Vera. Nosotros te entregamos el proyecto o la ficha reducida firmados y tú pides cita en la estación que mejor te venga; la documentación es válida en todas."
  },
  {
    "q": "¿Cuánto cuesta homologar un vehículo en Almería?",
    "a": "Depende del trámite. Una ficha técnica reducida de un coche con homologación europea suele moverse entre 60 y 150 euros; una homologación individual completa parte de unos 600 euros; y una reforma varía según el código del Manual de Reformas (enganche, camper, motor, suspensión). Por eso hacemos un estudio previo gratuito y damos un presupuesto cerrado antes de empezar, sin sorpresas."
  },
  {
    "q": "Compré un coche en Alemania o en Estados Unidos, ¿qué necesito para circular en Almería?",
    "a": "Depende del origen. Si viene de la Unión Europea con certificado de conformidad, basta con la homologación y la inspección previa a la matriculación. Si viene de fuera de la UE (USA, Japón, Reino Unido), necesita homologación individual y, casi siempre, adaptar el alumbrado, el velocímetro a km/h y comprobar emisiones. Te decimos qué le falta antes de que pases por la ITV; tenemos páginas específicas para coche importado y coche americano."
  },
  {
    "q": "¿Homologáis reformas como el enganche de remolque o la transformación en camper?",
    "a": "Sí, son dos de los trámites más habituales. El enganche se legaliza como dispositivo de acoplamiento (código 8.50 del Manual de Reformas), recalculando las masas remolcables; la conversión en camper se homologa como vehículo vivienda, con su instalación eléctrica y su mobiliario fijo. Redactamos el proyecto y el informe de conformidad que corresponda y lo firma el ingeniero colegiado."
  },
  {
    "q": "¿Qué diferencia a Ábaco de otras ingenierías de homologación de Almería?",
    "a": "La trayectoria y la responsabilidad directa. El expediente lo lleva un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años tramitando homologaciones, no un intermediario. Sumamos estudio previo gratuito, presupuesto cerrado y la posibilidad de resolverlo todo online con FNMT en toda España, además del desplazamiento presencial por la provincia cuando hace falta."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación de vehículos en Almería", item: "https://www.ingenierial.es/homologacion-vehiculos-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Todos los trámites de homologación de vehículos, desde Almería",
    "cuerpo": "Homologar no es un único trámite, sino una familia de procedimientos que dependen del origen y del estado del vehículo. Desde nuestra oficina en Almería los resolvemos todos: la homologación individual de un coche importado con certificado de conformidad europeo (COC), la de un coche americano o de fuera de la UE que exige adaptar luces, velocímetro a km/h y emisiones, y la inspección previa para pasar la ITV con matrícula extranjera antes de matricular en España. Cada caso tiene su vía; te decimos cuál es la tuya antes de empezar y cuánto cuesta, sin letra pequeña."
  },
  {
    "titulo": "Reformas de vehículo: qué dice el Manual de Reformas",
    "cuerpo": "Toda modificación que se aparta del tipo homologado necesita legalizarse conforme al RD 866/2010 y al Manual de Reformas de Vehículos del Ministerio de Industria, que agrupa las reformas por códigos. Las más habituales en la provincia son las del grupo 8 de carrocería (transformación a vivienda o camper, cambio del número de plazas, defensas y paragolpes), el dispositivo de acoplamiento del código 8.50 para el enganche de remolque, las del grupo 2 de unidad motriz por cambio de motor, y las de suspensión, llantas o neumáticos. Redactamos el proyecto o el informe de conformidad que exija cada código, y lo firma el ingeniero colegiado."
  },
  {
    "titulo": "Camper, enganche y ficha técnica reducida en Almería",
    "cuerpo": "Tres trámites concentran buena parte de las consultas almerienses. La transformación de una furgoneta en camper o vehículo vivienda, muy demandada por el clima y el turismo de costa, obliga a homologar la instalación eléctrica, el mobiliario fijo, la ventana y la claraboya. El enganche o gancho de remolque exige homologar el dispositivo de acoplamiento y recalcular las masas remolcables. Y la ficha técnica reducida sustituye a la tarjeta ITV cuando el vehículo procede del extranjero, ha sido reformado o la ha perdido. Tenemos una página específica de Almería para cada uno de estos servicios, con su precio orientativo."
  },
  {
    "titulo": "Vehículo histórico y coches importados de fuera de la UE",
    "cuerpo": "Para los coches con más de treinta años, la clasificación como vehículo histórico (antes llamada catalogación, ahora regulada por el RD 892/2024 y resuelta por la DGT) permite matricular con placa histórica y acogerse a un régimen de inspección y circulación más flexible; nosotros redactamos el informe técnico previo que exige el laboratorio oficial. Para los vehículos importados sin homologación europea (Estados Unidos, Japón, Reino Unido o Suiza) tramitamos la homologación individual del RD 750/2010, indicándote antes qué adaptaciones físicas necesita el coche para superar la inspección. En ambos casos coordinamos la documentación hasta la matriculación en la Jefatura Provincial de Tráfico de Almería."
  },
  {
    "titulo": "Dónde se tramita en la provincia y por qué elegirnos",
    "cuerpo": "La inspección se realiza en las estaciones ITV de la provincia gestionadas por VEIASA: Almería capital, El Ejido y Huércal de Almería (estaciones de La Cepa y Zamarula), entre otras. En Almería operan también estudios locales de homologación como Maro Ingenieros, Novantis Ingeniería o Lirola, en El Ejido; es un mercado con oferta. Nuestra diferencia es la experiencia y el trato directo: un ingeniero técnico industrial colegiado desde 1983 que se responsabiliza personalmente de tu expediente, con estudio previo gratuito, presupuesto cerrado y la comodidad de tramitar online con firma FNMT sin desplazarte, o en persona si lo prefieres."
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
            <Link href="C:/Program Files/Git/fichas-tecnicas" className="text-sm font-medium text-slate-600 hover:text-slate-900">Vehículos</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Homologación de vehículos en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de vehículos en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Coche importado, americano, reformas, camper, enganche, ficha técnica reducida y vehículo histórico: un único ingeniero técnico colegiado para toda la provincia, online con firma FNMT o presencial en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si necesitas homologar un vehículo en Almería, esta es tu página de referencia. Reunimos en un solo sitio todos los trámites de homologación e ingeniería de vehículos que un particular, un carrocero o una empresa de la provincia puede necesitar: coche importado de la Unión Europea, coche americano o de fuera de la UE, reformas y modificaciones, transformación a camper, instalación de enganche, ficha técnica reducida y catalogación de vehículo histórico. Lo firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de ejercicio. Trabajamos 100% online con firma digital FNMT en toda España y nos desplazamos a Almería capital y provincia cuando el caso lo requiere."}</p>
          <p>{"En abacoingeniería® no te damos una tarifa genérica: estudiamos tu vehículo, comprobamos qué documentación tiene y qué reforma o procedimiento le corresponde según el Manual de Reformas del Ministerio de Industria, y te pasamos un presupuesto cerrado tras un estudio previo gratuito. Preparamos el proyecto técnico o el informe de conformidad, lo firmamos digitalmente y te lo entregamos listo para la inspección en cualquier estación ITV de la provincia: Almería capital, El Ejido o Huércal de Almería. Tú solo tienes que pedir cita y presentarlo."}</p>
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
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Hub nacional de homologación y fichas técnicas</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-importado" className="text-sky-700 underline hover:no-underline">Homologar un coche importado de la UE</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-usa" className="text-sky-700 underline hover:no-underline">Homologar un coche americano o de USA</Link></li>
          <li>·{" "}<Link href="/ficha-tecnica-reducida-almeria" className="text-sky-700 underline hover:no-underline">Ficha técnica reducida en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-camper-almeria" className="text-sky-700 underline hover:no-underline">Homologación de camper en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-enganche-remolque-almeria" className="text-sky-700 underline hover:no-underline">Homologación de enganche y remolque en Almería</Link></li>
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
