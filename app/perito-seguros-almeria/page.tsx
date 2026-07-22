import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-seguros-almeria";

export const metadata: Metadata = {
  title: "Perito de Seguros y Contraperitaje en Almería | Art. 38 LCS",
  description: "Perito de seguros de parte en Almería para contraperitaje y reclamación de siniestros: incendio, agua, maquinaria y vehículos. Segundo y tercer perito, art. 38 LCS. 687 46 54 86.",
  keywords: ["perito de seguros almería","contraperitaje almería","perito de parte seguros","artículo 38 ley contrato de seguro","tasación pericial contradictoria","reclamación siniestro almería","perito incendios almería","perito daños por agua almería","siniestro total valor venal","perito seguros vehículo almería","segundo y tercer perito seguro","reclamar indemnización aseguradora"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-seguros-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de seguros y contraperitaje en Almería",
    description: "Perito de seguros de parte en Almería para contraperitaje y reclamación de siniestros: incendio, agua, maquinaria y vehículos. Segundo y tercer perito, art. 38 LCS. 687 46 54 86.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de seguros y contraperitaje en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de seguros y contraperitaje en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de seguros y contraperitaje en Almería",
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
  url: "https://www.ingenierial.es/perito-seguros-almeria",
  description: "Perito de seguros de parte en Almería para contraperitaje y reclamación de siniestros: incendio, agua, maquinaria y vehículos. Segundo y tercer perito, art. 38 LCS. 687 46 54 86.",
};

const faqs = [
  {
    "q": "¿Qué es un contraperitaje y cuándo debo pedirlo?",
    "a": "Es la valoración que encarga el asegurado cuando no está de acuerdo con la propuesta de su compañía. Te conviene si la indemnización ofrecida es inferior al daño real, si te niegan una cobertura que entiendes contratada o si discrepas de la causa del siniestro. Un perito de parte revisa póliza, informe de la aseguradora y daños, y emite un dictamen con el que reclamar. Cuanto antes se documente el siniestro, mejor: algunas pruebas desaparecen al reparar o retirar los restos."
  },
  {
    "q": "¿Qué es el artículo 38 de la Ley de Contrato de Seguro?",
    "a": "Es el procedimiento de tasación pericial contradictoria para los seguros de daños. Se aplica cuando la discrepancia es solo sobre la cuantía: cada parte nombra un perito y, si no hay acuerdo, un tercer perito emite un dictamen vinculante, impugnable ante los tribunales (treinta días el asegurado, seis meses la aseguradora). Cada parte paga su perito y el del tercero se reparte a medias. Si lo que se discute es la cobertura o la causa, y no solo el importe, la vía no es el artículo 38, sino la reclamación con informe de parte y, en su caso, judicial."
  },
  {
    "q": "¿Trabajáis de forma online o presencial en Almería?",
    "a": "Las dos. Redactamos y firmamos el informe 100% online con firma digital FNMT, válida en toda España, y nos desplazamos a Almería capital y provincia para inspeccionar el siniestro cuando hace falta ver los daños in situ. También cubrimos Granada, Málaga y Murcia. La inspección presencial es especialmente importante en incendios y en maquinaria, donde el estado de las instalaciones aporta prueba."
  },
  {
    "q": "Mi coche es siniestro total y me ofrecen el valor venal, ¿puedo reclamar más?",
    "a": "Sí. El valor venal suele quedar por debajo de lo que cuesta reponer un vehículo equivalente. Puedes aportar una tasación independiente que confronte valor venal, valor de mercado y valor de afección, y negociar sobre esa base o instar la tasación pericial contradictoria. Conseguir más no es automático, pero un informe técnico sólido cambia la posición de partida frente a la aseguradora."
  },
  {
    "q": "¿Un ingeniero industrial puede peritar cualquier siniestro?",
    "a": "No cualquiera, pero sí la mayoría de los que generan discrepancia. El ingeniero técnico industrial es competente en instalaciones eléctricas, maquinaria, procesos e industria y en la causa-origen de los incendios, que es donde más se juega una reclamación. No asumimos las competencias reservadas a otras profesiones para la estructura de la edificación; cuando el siniestro las implica, lo decimos con claridad y coordinamos con el técnico que corresponda."
  },
  {
    "q": "¿Cuánto cuesta y cómo empezamos?",
    "a": "Primero estudiamos tu caso sin coste: nos cuentas el siniestro, nos pasas la póliza y la propuesta de la aseguradora, y valoramos si hay recorrido para reclamar. Con eso te damos un presupuesto cerrado del informe pericial, sin sorpresas. Llámanos al 687 46 54 86 o escríbenos desde la web. Cuanto antes actúes, más margen tienes: los plazos del artículo 38 y de la reclamación corren."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Perito de seguros y contraperitaje en Almería", item: "https://www.ingenierial.es/perito-seguros-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Contraperitaje: tu perito frente al de la aseguradora",
    "cuerpo": "Cuando recibes la propuesta de indemnización y no la compartes, el contraperitaje reequilibra la balanza. La compañía tiene su gabinete técnico; tú, con un perito de parte, presentas una valoración con el mismo peso jurídico. Analizamos el informe de la aseguradora, revisamos las coberturas de tu póliza, inspeccionamos los daños y emitimos un dictamen que documenta el alcance real del siniestro. Con ese informe muchas reclamaciones se resuelven en la fase extrajudicial, sin llegar a juicio, porque la aseguradora prefiere negociar antes que exponerse a una pericial contradictoria bien fundamentada."
  },
  {
    "titulo": "Segundo y tercer perito: el procedimiento del artículo 38 LCS",
    "cuerpo": "Si la discrepancia se refiere solo a la cuantía del daño, la Ley de Contrato de Seguro prevé la tasación pericial contradictoria. Cada parte nombra su perito y, si no llegan a acuerdo, se designa un tercer perito cuyo dictamen es vinculante, salvo impugnación ante los tribunales (treinta días el asegurado, seis meses la aseguradora). Los plazos aprietan: ocho días para designar perito desde el requerimiento. Actuamos como tu perito en ese procedimiento y te asesoramos sobre cuándo conviene el artículo 38 y cuándo es mejor un informe de parte y la vía judicial, que es la ruta cuando se discute la cobertura o la causa, no solo el importe."
  },
  {
    "titulo": "Reclamación de siniestros de hogar, comercio e industria",
    "cuerpo": "Peritamos y reclamamos incendios, con análisis de causa-origen y datos de AEMET cuando interviene un rayo; daños por agua y filtraciones; daños por viento, granizo, lluvia e inundación; y averías en maquinaria, cuadros eléctricos e instalaciones industriales y agroindustriales. En el tejido almeriense esto abarca almacenes de manipulado, cámaras frigoríficas, invernaderos y naves del Poniente y el Levante. Como ingenieros técnicos industriales, la instalación eléctrica, la maquinaria, la industria y la causa de un incendio entran de lleno en nuestra competencia; para la estructura de la edificación coordinamos con el técnico que corresponda."
  },
  {
    "titulo": "Siniestro total de vehículo y valor venal",
    "cuerpo": "Si tu coche, furgoneta o maquinaria ha sido declarado siniestro total, la aseguradora suele indemnizar por el valor venal, casi siempre inferior a lo que costaría reponer un vehículo equivalente. Puedes discrepar. Emitimos una tasación independiente que contrapone valor venal, valor de mercado y, cuando procede, valor de afección, y que sirve para negociar o para instar la tasación pericial contradictoria del artículo 38. También valoramos daños en vehículos industriales y agrícolas cuando la reparación propuesta no se ajusta al daño real."
  },
  {
    "titulo": "Un informe de parte que firma un ingeniero colegiado",
    "cuerpo": "El informe lo firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de ejercicio, lo que le da solvencia frente a la aseguradora y, si el caso llega a juicio, ante el juzgado, donde puede ratificarse. Conviene distinguir dos figuras: como perito de parte trabajamos para ti y defendemos tu valoración; como perito de designación judicial actuaríamos con imparcialidad por encargo del juzgado. Para reclamar a tu compañía, lo que necesitas es un perito de parte. Estudio previo gratuito y presupuesto cerrado: cuéntanos el siniestro y te decimos cómo enfocarlo."
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
          <li aria-current="page" className="text-slate-700">Perito de seguros y contraperitaje en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Perito de seguros y contraperitaje en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"¿Discrepas de tu aseguradora tras un siniestro? Informe pericial de parte que firma un ingeniero técnico industrial colegiado desde 1983, para reclamar la indemnización justa por la vía del artículo 38 LCS o judicial. Online en toda España y presencial en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Has tenido un siniestro y la indemnización que te ofrece tu compañía no cubre ni de lejos el daño real. Es la situación más frecuente en un seguro de daños: el perito de la aseguradora trabaja para la aseguradora, y tú te quedas sin una valoración técnica que defienda tus intereses. Abaco Ingeniería, oficina técnica con sede en Almería, actúa como perito de seguros de parte: un ingeniero técnico industrial colegiado desde 1983 estudia tu siniestro, cuantifica el daño con criterio y emite un informe pericial con el que negociar de igual a igual o reclamar por la vía del artículo 38 de la Ley de Contrato de Seguro."}</p>
          <p>{"Cubrimos incendios, daños por agua, fenómenos atmosféricos y averías en maquinaria e instalaciones industriales, además del sub-nicho de vehículos: siniestro total, valor venal frente a valor de mercado y discrepancias de tasación. Trabajamos 100% online con firma digital FNMT en toda España y nos desplazamos a Almería capital y provincia para inspeccionar el siniestro. El estudio previo es gratuito y el presupuesto, cerrado. Importante: como ingenieros somos competentes en instalaciones, industria y causa-origen de incendios, no en las competencias reservadas de la edificación."}</p>
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
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaje judicial en toda España</Link></li>
          <li>·{" "}<Link href="/perito-humedades-vicios-ocultos-almeria" className="text-sky-700 underline hover:no-underline">Perito de humedades y vicios ocultos</Link></li>
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">Perito ingeniero industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Protección contra incendios en Almería</Link></li>
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
