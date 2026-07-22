import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-nave-industrial-almeria";

export const metadata: Metadata = {
  title: "Tasación de nave industrial, local y terreno en Almería",
  description: "Tasación de naves, locales, invernaderos, suelo y fincas de regadío en Almería. Informe de ingeniero colegiado para herencia, reparto o Hacienda. No hipotecaria.",
  keywords: ["tasación nave industrial Almería","valoración local comercial Almería","tasación terreno Almería","tasación finca rústica regadío Almería","tasación invernadero Almería","tasación no hipotecaria Almería","valoración almacén manipulado Almería","tasación nave herencia Almería","ingeniero tasador Almería","valor de referencia nave industrial","tasación suelo urbano Almería","comprobación de valores Hacienda Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-nave-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación de nave industrial, local y terreno en Almería",
    description: "Tasación de naves, locales, invernaderos, suelo y fincas de regadío en Almería. Informe de ingeniero colegiado para herencia, reparto o Hacienda. No hipotecaria.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación de nave industrial, local y terreno en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación de nave industrial, local y terreno en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación de nave industrial, local y terreno en Almería",
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
  url: "https://www.ingenierial.es/tasacion-nave-industrial-almeria",
  description: "Tasación de naves, locales, invernaderos, suelo y fincas de regadío en Almería. Informe de ingeniero colegiado para herencia, reparto o Hacienda. No hipotecaria.",
};

const faqs = [
  {
    "q": "¿Esta tasación sirve para pedir una hipoteca?",
    "a": "No. Para hipoteca la ley exige una sociedad de tasación homologada por el Banco de España, y Abaco no lo es. Lo que entregamos es una tasación no hipotecaria firmada por ingeniero colegiado, con plena validez para herencia, reparto, Hacienda, seguros o juicio, pero no para financiación bancaria."
  },
  {
    "q": "¿Cómo se valora una nave industrial o un almacén?",
    "a": "Sobre todo por el método de coste o reposición: se suma el valor del suelo y el coste de reconstruir la edificación y las instalaciones fijas, y se resta la depreciación por antigüedad, uso y estado. En polígonos con muchas operaciones también se contrasta con ventas comparables de naves similares de la misma zona."
  },
  {
    "q": "¿Y un invernadero o una finca de regadío en el Campo de Dalías o Níjar?",
    "a": "Se valoran la estructura y las instalaciones (invernadero, pozo, balsa, riego, cerramiento) por su coste, y la tierra por comparación y por capitalización de las rentas del cultivo, teniendo muy en cuenta la disponibilidad de agua, el acceso y la calidad del suelo, factores que en Almería marcan grandes diferencias de precio por hectárea."
  },
  {
    "q": "Hacienda me da un valor de referencia alto de un terreno, ¿estoy obligado a aceptarlo?",
    "a": "No siempre. Muchos suelos rústicos sin construcción y suelos en desarrollo ni siquiera tienen valor de referencia, y ese valor admite prueba en contra. Con un informe técnico motivado puede recurrir la comprobación de valores y acudir a la tasación pericial contradictoria para fijar el valor real."
  },
  {
    "q": "¿Vale para repartir una herencia o una empresa familiar con varias naves y fincas?",
    "a": "Sí, es uno de los usos más frecuentes en Almería: valorar cada activo de forma independiente y justificada para adjudicar bienes, calcular compensaciones, resolver una extinción de condominio o repartir el patrimonio de la empresa familiar sin discusiones sobre el precio."
  },
  {
    "q": "¿Cuánto cuesta y en cuánto tiempo tengo el informe?",
    "a": "El precio depende del tipo y tamaño del activo; a título orientativo, la tasación de nave parte de unos 450 euros, siempre con presupuesto cerrado y estudio previo gratuito. Los plazos habituales van de pocos días a algo más según la visita y la documentación. Puede ver los precios por tipo de inmueble en la página de precios."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasación de nave industrial, local y terreno en Almería", item: "https://www.ingenierial.es/tasacion-nave-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué activos no residenciales valoramos",
    "cuerpo": "Naves y mininaves en polígonos como San Rafael, La Redonda, El Ejido, Viator o La Cañada. Almacenes y centrales de manipulado hortofrutícola con cámaras y líneas de confección. Invernaderos y explotaciones bajo plástico en el Campo de Dalías y en Níjar. Locales comerciales y de servicios. Suelo urbano, solares y parcelas industriales. Fincas rústicas de secano y de regadío, con sus pozos, balsas, cerramientos e instalaciones. Cuando el inmueble mezcla suelo, construcción e instalaciones fijas, lo valoramos por partes y de forma justificada, nunca con una cifra a ojo."
  },
  {
    "titulo": "Métodos de valoración y por qué importan",
    "cuerpo": "Cada activo pide su método. En una nave o un almacén aplicamos el método de coste o de reposición: valor del suelo más el coste de reconstruir la edificación y las instalaciones, menos la depreciación por antigüedad y estado de conservación. En suelo, solares y locales pesa el método de comparación con operaciones reales de la zona. En invernaderos y explotaciones agrícolas se combina el coste de la estructura con la capitalización de las rentas del cultivo y el valor del agua. Explicar el método no es un formalismo: es lo que hace que el informe aguante una revisión de Hacienda, del contrario o del juzgado."
  },
  {
    "titulo": "Valor de referencia y comprobación de valores en lo no residencial",
    "cuerpo": "Desde 2022 el valor de referencia del Catastro marca la base mínima de ITP, sucesiones y donaciones en muchos inmuebles urbanos y rústicos con construcción. Pero aquí hay un matiz decisivo: buena parte del suelo rústico sin construcción y de los suelos en desarrollo no tiene valor de referencia publicado, y en naves antiguas o singulares ese valor administrativo suele alejarse del real. Cuando la comprobación de valores de Hacienda infla el activo, un dictamen técnico independiente es la vía para sostener el valor correcto y, si hace falta, plantear la tasación pericial contradictoria."
  },
  {
    "titulo": "Para qué sirve el informe",
    "cuerpo": "Herencia y adjudicación de bienes, divorcio y liquidación de gananciales, extinción de condominio de una nave o un local, reparto de una empresa familiar, aportación de inmuebles a una sociedad, compraventa entre particulares o empresas, comprobación de valores y recurso ante Hacienda, y procedimientos judiciales. En todos estos supuestos vale una tasación no hipotecaria firmada por ingeniero colegiado. Lo que no cubrimos es la tasación para pedir hipoteca: eso exige una sociedad homologada por el Banco de España y no es nuestro caso, y preferimos decirlo antes que hacerle perder el tiempo."
  },
  {
    "titulo": "Cómo trabajamos en Almería",
    "cuerpo": "Estudio previo gratuito para orientar valor y plazo, y presupuesto cerrado antes de empezar, sin sorpresas. El trabajo es cien por cien online con firma digital FNMT válida en toda España, con desplazamiento presencial a la capital y la provincia cuando la nave, el invernadero o la finca requieren visita e inspección. Más de cuarenta años de ejercicio colegiado y trato directo con el ingeniero que firma, no con un centro de llamadas. Puede consultar los precios orientativos por tipo de inmueble antes de decidir."
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
            <Link href="C:/Program Files/Git/tasaciones" className="text-sm font-medium text-slate-600 hover:text-slate-900">Tasaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Tasación de nave industrial, local y terreno en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Tasación de nave industrial, local y terreno en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoración no hipotecaria de activos no residenciales firmada por ingeniero técnico industrial colegiado desde 1983. Naves de polígono, almacenes de manipulado, invernaderos, locales, suelo urbano y fincas de regadío. Presupuesto cerrado y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"En Almería el activo que más cambia de manos no siempre es la vivienda: naves de polígono, almacenes de manipulado hortofrutícola, invernaderos del Campo de Dalías y de Níjar, locales, solares urbanos y fincas de regadío se heredan, se reparten y se compran entre empresas y agricultores cada semana. Esta página se centra en la tasación de esos activos no residenciales, firmada por ingeniero técnico industrial colegiado desde 1983. Es una valoración con plena validez legal y fiscal, pero conviene decirlo claro desde el principio: no es una tasación hipotecaria homologada por el Banco de España, sino un informe técnico independiente para herencia, reparto, Hacienda o procedimiento judicial."}</p>
          <p>{"El origen del encargo suele repetirse: una herencia con una o varias naves, la extinción de condominio de un local entre socios, el reparto de una empresa familiar con activos industriales, una compraventa entre agricultores o una comprobación de valores de Hacienda que no cuadra. En todos esos casos entregamos un informe motivado, con el método de valoración explicado y defendible ante la Administración o un juez. Trabajamos toda la provincia con firma digital FNMT y visita presencial al polígono o al campo cuando el activo lo exige."}</p>
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
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de nave industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones en Almería</Link></li>
          <li>·{" "}<Link href="/precio-tasacion-almeria" className="text-sky-700 underline hover:no-underline">Precios de tasación en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">Tasación para herencia y divorcio</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">Tasación pericial contradictoria en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial en Almería</Link></li>
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
