import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-invernadero-almeria";

export const metadata: Metadata = {
  title: "Legalización de Invernaderos en Almería · Proyecto Técnico",
  description: "Legalización de invernaderos en Almería: proyecto técnico visado, licencia de obras, instalación eléctrica y cabezal de riego. Ingeniero colegiado desde 1983.",
  keywords: ["legalización invernadero Almería","proyecto invernadero Almería","licencia obras invernadero","legalizar invernadero El Ejido","ingeniero invernaderos Almería","proyecto técnico invernadero visado","legalización invernadero Níjar","instalación eléctrica invernadero","asimilado fuera de ordenación invernadero","proyecto balsa de riego Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-invernadero-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de invernaderos en Almería",
    description: "Legalización de invernaderos en Almería: proyecto técnico visado, licencia de obras, instalación eléctrica y cabezal de riego. Ingeniero colegiado desde 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de invernaderos en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de invernaderos en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de invernaderos en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-invernadero-almeria",
  description: "Legalización de invernaderos en Almería: proyecto técnico visado, licencia de obras, instalación eléctrica y cabezal de riego. Ingeniero colegiado desde 1983.",
};

const faqs = [
  {
    "q": "Necesito proyecto técnico para poner un invernadero?",
    "a": "Sí. La construcción de un invernadero requiere presentar ante el ayuntamiento un proyecto técnico redactado y firmado por técnico competente, y visado por el colegio profesional cuando el municipio lo exige. La caseta de riego, la balsa y el almacén anexo suelen ir en el mismo expediente o en uno paralelo."
  },
  {
    "q": "Puedo legalizar un invernadero que ya está construido?",
    "a": "En muchos casos sí. Se redacta un proyecto de legalización que refleja lo realmente ejecutado. El recorrido depende de la antigüedad de la construcción y de la clasificación urbanística de la parcela: puede resolverse como legalización ordinaria o encauzarse como reconocimiento de asimilado a fuera de ordenación conforme a la normativa andaluza. Lo primero que hacemos es un estudio previo gratuito para decirte qué opciones reales tienes."
  },
  {
    "q": "Cambia mucho la tramitación según el municipio?",
    "a": "Bastante. El Ejido, Níjar, La Mojonera, Vícar, Roquetas de Mar o Adra aplican condiciones distintas de ocupación, retranqueos, altura y gestión de restos vegetales. Por eso revisamos la ordenanza del municipio concreto antes de dimensionar el proyecto, en lugar de aplicar un criterio genérico que luego genera requerimientos."
  },
  {
    "q": "La instalación eléctrica del invernadero hay que legalizarla aparte?",
    "a": "Sí, es un trámite propio. La instalación de baja tensión se documenta conforme al Reglamento Electrotécnico para Baja Tensión, con memoria o proyecto según la potencia, el certificado del instalador autorizado y la inscripción en el registro de industria. Nosotros lo hacemos junto con la obra para que el expediente quede cerrado por completo."
  },
  {
    "q": "Cuánto tarda la legalización de un invernadero?",
    "a": "La redacción del proyecto suele llevar de dos a cuatro semanas desde la toma de datos, según la superficie y de si hay que levantar lo ya construido. El plazo de resolución municipal depende del ayuntamiento y del tipo de expediente. Te damos una previsión realista por escrito antes de empezar, no un plazo de escaparate."
  },
  {
    "q": "Os desplazáis a la finca?",
    "a": "Sí. Tenemos la oficina en Almería capital y nos desplazamos a toda la provincia para la toma de datos y mediciones, especialmente al poniente y al Campo de Níjar. El resto del expediente se gestiona en remoto con firma digital FNMT, así que no tienes que venir a la oficina."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de invernaderos en Almería", item: "https://www.ingenierial.es/legalizacion-invernadero-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto de invernadero nuevo",
    "cuerpo": "Redactamos el proyecto completo para solicitar la licencia de obras: memoria, cálculo estructural de la tipología que elijas (raspa y amagado, multitúnel o gótico), cimentación, cerramiento y cubierta, y justificación del cumplimiento de la ordenanza municipal en ocupación, alturas y retranqueos. Incluimos la evacuación de aguas pluviales y la gestión de restos vegetales, que son dos de los puntos que más requerimientos generan en los ayuntamientos del poniente almeriense."
  },
  {
    "titulo": "Legalización de invernadero ya construido",
    "cuerpo": "Si el invernadero se levantó sin licencia o se amplió sin documentación, el camino es un proyecto de legalización que describe lo realmente ejecutado y acredita que cumple las condiciones técnicas exigibles. Según la antigüedad de la construcción y la situación urbanística de la parcela, el expediente puede encauzarse como legalización ordinaria o requerir el reconocimiento de la situación de asimilado a fuera de ordenación. Analizamos tu caso antes de presentar nada y te decimos con franqueza qué recorrido tiene."
  },
  {
    "titulo": "Instalación eléctrica, bombeo y cabezal de riego",
    "cuerpo": "Es la parte que nos distingue como ingenieros industriales. Legalizamos la instalación eléctrica de baja tensión del invernadero conforme al Reglamento Electrotécnico para Baja Tensión, con su certificado de instalación e inscripción en industria: acometida, cuadro general, protecciones, alumbrado y tomas de fuerza. Y documentamos el conjunto de bombeo y el cabezal de riego, incluidos automatismos, fertirrigación y, si procede, el grupo electrógeno de apoyo. Un invernadero con la obra legalizada pero la instalación sin certificar sigue teniendo el expediente incompleto."
  },
  {
    "titulo": "Balsas, almacenes anexos y catastro",
    "cuerpo": "El invernadero raramente va solo. Tramitamos también la balsa de riego, el almacén o caseta anexa y la regularización catastral de lo construido, que es lo que después permite acreditar la superficie real ante el banco, la aseguradora o la administración agraria. Si necesitas la georreferenciación de la parcela o un certificado de antigüedad de la construcción, lo incorporamos al mismo encargo para que no tengas que contratar por separado."
  },
  {
    "titulo": "Normativa aplicable",
    "cuerpo": "El marco de referencia combina tres planos. El urbanístico y de suelo, con la Ley 7/2021, de 1 de diciembre, de impulso para la sostenibilidad del territorio de Andalucía (LISTA) y su Reglamento General, aprobado por el Decreto 550/2022, que regulan entre otras cosas el reconocimiento de la situación de asimilado a fuera de ordenación. El municipal, con el planeamiento y las ordenanzas de cada ayuntamiento, que fijan ocupación, alturas y retranqueos. Y el de seguridad industrial, con el Reglamento Electrotécnico para Baja Tensión para la instalación eléctrica. Las condiciones concretas dependen de tu municipio y de la clasificación de tu parcela, así que las verificamos caso por caso antes de redactar."
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
            <Link href="C:/Program Files/Git/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34687465486" className="text-sm font-medium text-slate-600 hover:text-brand-navy">687 465 486</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Legalización de invernaderos en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de invernaderos en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto técnico visado para legalizar tu invernadero: estructura, cerramiento, instalación eléctrica, balsa y cabezal de riego. Tramitación ante el ayuntamiento, con ingeniero técnico industrial colegiado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un invernadero no es una obra menor: para levantarlo o para regularizar uno ya construido hace falta un proyecto técnico firmado por técnico competente y presentado ante el ayuntamiento. En la provincia de Almería, con más de treinta mil hectáreas bajo plástico, cada municipio aplica sus propias condiciones de ocupación, retranqueos, evacuación de pluviales y tratamiento de restos vegetales. El Ejido, por ejemplo, cuenta con ordenanza específica de invernaderos y su entorno. Redactamos el proyecto, lo visamos cuando procede y lo tramitamos, tanto para invernadero nuevo como para legalización de lo ya ejecutado."}</p>
          <p>{"Trabajamos las dos caras del expediente: la constructiva, con el cálculo de la estructura frente a viento, nieve y cargas de cultivo colgado, y la de instalaciones, que es donde más expedientes se atascan: acometida y cuadro eléctrico, grupo de bombeo, cabezal de riego y automatismos. Somos oficina técnica con sede en Almería, nos desplazamos a toda la provincia para la toma de datos y firmamos con certificado digital FNMT. Estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
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
          <li>·{" "}<Link href="/legalizacion-nave-agricola-almeria" className="text-sky-700 underline hover:no-underline">Legalización de nave y almacén agrícola</Link></li>
          <li>·{" "}<Link href="/fotovoltaica-riego-agricola-almeria" className="text-sky-700 underline hover:no-underline">Fotovoltaica y bombeo solar para riego</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Oficina técnica de ingeniería industrial en Almería</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">Boletín eléctrico en Almería</Link></li>
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
