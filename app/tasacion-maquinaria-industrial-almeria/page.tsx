import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-maquinaria-industrial-almeria";

export const metadata: Metadata = {
  title: "Tasación de maquinaria industrial y agrícola en Almería",
  description: "Tasación de maquinaria industrial y agrícola usada en Almería para herencia, seguros, balance contable y compraventa. Ingeniero técnico colegiado, presupuesto cerrado.",
  keywords: ["tasación maquinaria industrial Almería","valoración maquinaria agrícola Almería","tasación maquinaria usada Almería","perito tasador maquinaria Almería","valoración cámara frigorífica Almería","tasación tractor cosechadora Almería","valoración maquinaria herencia Almería","tasación maquinaria seguro siniestro","valoración activos industriales Almería","tasación línea hortofrutícola Almería","valoración maquinaria balance contable","ingeniero tasador maquinaria Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-maquinaria-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación y valoración de maquinaria industrial y agrícola en Almería",
    description: "Tasación de maquinaria industrial y agrícola usada en Almería para herencia, seguros, balance contable y compraventa. Ingeniero técnico colegiado, presupuesto cerrado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación y valoración de maquinaria industrial y agrícola en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación y valoración de maquinaria industrial y agrícola en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación y valoración de maquinaria industrial y agrícola en Almería",
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
  url: "https://www.ingenierial.es/tasacion-maquinaria-industrial-almeria",
  description: "Tasación de maquinaria industrial y agrícola usada en Almería para herencia, seguros, balance contable y compraventa. Ingeniero técnico colegiado, presupuesto cerrado.",
};

const faqs = [
  {
    "q": "¿Quién puede tasar maquinaria industrial o agrícola?",
    "a": "La valoración de maquinaria es competencia natural del ingeniero técnico industrial, porque exige entender la máquina, su función, su vida útil y su obsolescencia. En Abaco la firma un ingeniero colegiado desde 1983. El informe tiene plena validez ante Hacienda, aseguradoras, notarías y juzgados de toda España. No es una tasación hipotecaria homologada por el Banco de España, algo que en maquinaria prácticamente no se utiliza, sino una valoración pericial técnica con plena eficacia legal para el resto de finalidades."
  },
  {
    "q": "¿Cómo se calcula el valor de una máquina usada?",
    "a": "Se parte del valor de reposición a nuevo y se le aplica la depreciación por antigüedad, horas o campañas de trabajo, estado de conservación, mantenimiento y obsolescencia tecnológica. Ese valor se contrasta con operaciones reales de equipos comparables y con la amortización según vida útil y valor residual. En una cámara de frío o una línea de calibrado pesa mucho la obsolescencia, en un tractor, las horas y el estado del motor. Por eso conviene que la máquina la valore un ingeniero y no una tabla genérica."
  },
  {
    "q": "¿Vale para Hacienda en una herencia o donación?",
    "a": "Sí. La maquinaria tributa por su valor de mercado en Sucesiones y Donaciones y en Transmisiones Patrimoniales, y como los bienes muebles no tienen valor de referencia del Catastro, ese valor se justifica con un informe pericial. Si la Administración hace una comprobación de valores, la valoración del ingeniero es la base para defenderse mediante una tasación pericial contradictoria. Redactamos el informe para que se sostenga ante la Agencia Tributaria y la Junta de Andalucía."
  },
  {
    "q": "Tengo un siniestro con maquinaria dañada, ¿me ayuda?",
    "a": "Sí. Valoramos el valor a nuevo y el valor real de tus equipos para que la suma asegurada sea correcta y evites el infraseguro y la regla proporcional, por la que la aseguradora indemniza en proporción si el capital asegurado es inferior al valor real. Y tras un siniestro cuantificamos el daño de la maquinaria afectada, tanto si necesitas contratar bien la póliza como si discrepas de la valoración del perito de la compañía."
  },
  {
    "q": "¿Qué maquinaria valoráis en Almería?",
    "a": "Toda la ligada a nuestra industria: líneas de manipulado y confección hortofrutícola, cámaras frigoríficas y de pre-frío, calibradoras, envasadoras y cintas, maquinaria agrícola como tractores, cosechadoras y atomizadores, y la maquinaria del mármol de Macael, como telares, cortabloques y pulidoras. También compresores, grupos electrógenos, centros de transformación e instalaciones asociadas. Si tienes un listado de activos, con las marcas, modelos y años preparamos un presupuesto cerrado enseguida."
  },
  {
    "q": "¿Cuánto cuesta y trabajáis en toda la provincia?",
    "a": "El precio depende del número de equipos y de su complejidad, una sola máquina es más económica que el inventario completo de una fábrica o una cooperativa. Tras un estudio previo gratuito damos un presupuesto cerrado, sin sorpresas. Somos oficina técnica con sede en Almería, con firma digital FNMT, así que trabajamos el 100 por cien online en toda España y nos desplazamos a inspeccionar a Almería capital y provincia, y también a Granada, Málaga y Murcia. Respondemos en menos de 24 horas."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasación y valoración de maquinaria industrial y agrícola en Almería", item: "https://www.ingenierial.es/tasacion-maquinaria-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué maquinaria y activos valoramos",
    "cuerpo": "Cubrimos el activo productivo completo, no solo el edificio. Maquinaria industrial: líneas de producción, cámaras frigoríficas y de pre-frío, túneles de frío, calibradoras, confeccionadoras y cintas de manipulado hortofrutícola, envasadoras, compresores, grupos electrógenos y centros de transformación. Maquinaria agrícola usada: tractores, cosechadoras, atomizadores, remolques y aperos. En el Almanzora valoramos la maquinaria del mármol de Macael, como telares, cortabloques, pulidoras y puentes grúa. También instalaciones fijas asociadas a la actividad. Identificamos cada equipo por marca, modelo y número de serie y comprobamos su estado real en la inspección."
  },
  {
    "titulo": "Cómo calculamos el valor: método de ingeniero",
    "cuerpo": "El valor no se improvisa: partimos del valor de reposición a nuevo del equipo y le aplicamos la depreciación por antigüedad, horas o campañas de uso, estado de conservación, mantenimiento y, sobre todo, obsolescencia tecnológica, que en frío industrial y en líneas hortofrutícolas es determinante. Contrastamos ese resultado con el método de comparación de mercado, homogeneizando operaciones reales de equipos similares, y con el método de amortización según vida útil y valor residual. La elección y ponderación de métodos es materia de ingeniero industrial: hay que entender la máquina, su función en la línea y su capacidad para seguir produciendo."
  },
  {
    "titulo": "Para qué sirve: seguros, contabilidad, compraventa y reparto",
    "cuerpo": "Un mismo informe resuelve situaciones muy distintas. En seguros, fija el valor a nuevo y el valor real de la maquinaria para contratar bien la póliza y evitar el infraseguro y la regla proporcional del artículo 30 de la Ley de Contrato de Seguro, y cuantifica los daños tras un siniestro. En contabilidad, actualiza el valor de los activos para el balance, las amortizaciones, una aportación no dineraria o la compraventa de la empresa. En compraventa de maquinaria de segunda mano da un precio de referencia neutral. Y en herencia o divorcio permite repartir con justicia los activos de una empresa familiar."
  },
  {
    "titulo": "Valor de mercado y Hacienda: sin valor de referencia",
    "cuerpo": "La maquinaria tributa por su valor de mercado en el Impuesto sobre Sucesiones y Donaciones y en Transmisiones Patrimoniales. A diferencia de los inmuebles, los bienes muebles como la maquinaria no tienen valor de referencia del Catastro ni, salvo los vehículos, tablas oficiales de la Junta o del Ministerio de Hacienda, por eso el valor declarado se sostiene con un informe pericial de ingeniero. Si Hacienda inicia una comprobación de valores, ese informe es la base para defender tu declaración mediante la tasación pericial contradictoria. Redactamos la valoración pensando ya en que tenga que sostenerse ante la Administración."
  },
  {
    "titulo": "Diferencial del ingeniero, precio y honestidad",
    "cuerpo": "Los tasadores inmobiliarios apenas entran en la maquinaria y los grandes gabinetes suelen quedar caros para un tractor o una cámara de frío, ahí está nuestro hueco en Almería. Con honestidad: Abaco no es sociedad de tasación homologada por el Banco de España, así que esto no es una tasación hipotecaria, que en maquinaria además casi nunca aplica. Es una valoración técnica firmada por ingeniero colegiado, con plena validez para herencia, seguros, contabilidad, compraventa y juzgados. El precio depende del número y tipo de equipos, tras un estudio previo gratuito damos un presupuesto cerrado, sin sorpresas."
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
          <li aria-current="page" className="text-slate-700">Tasación y valoración de maquinaria industrial y agrícola en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Tasación y valoración de maquinaria industrial y agrícola en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoramos maquinaria y equipos usados, industriales y agrícolas, para herencia, divorcio de empresas, siniestros de seguro, balance contable y compraventa. Informe firmado por ingeniero técnico industrial colegiado, con plena validez ante Hacienda, aseguradoras y juzgados. Presupuesto cerrado y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La tasación de maquinaria industrial y agrícola es la valoración técnica del equipo productivo de una empresa o explotación: lo que vale hoy, en su estado real y en el mercado, firmado por un ingeniero. En Almería es un activo de primer orden: líneas de confección y manipulado hortofrutícola, cámaras frigoríficas y de pre-frío, calibradoras y confeccionadoras, tractores y cosechadoras, y la maquinaria de corte y pulido del mármol de Macael. A diferencia de un inmueble, la maquinaria no tiene valor de referencia catastral ni tablas oficiales, así que su valor se justifica con un informe pericial de ingeniero que analiza modelo, antigüedad, uso, mantenimiento y obsolescencia."}</p>
          <p>{"En Abaco Ingeniería, marca abacoingeniería, la firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años valorando activos industriales. Es la especialidad natural del ingeniero y, sin embargo, la que menos cubren las sociedades de tasación y los tasadores inmobiliarios de la provincia, lo que nos permite dar un servicio muy diferenciado. Trabajamos con firma digital FNMT en toda España y nos desplazamos a inspeccionar la maquinaria en Almería capital y provincia, y también en Granada, Málaga y Murcia. Estudio previo gratuito y presupuesto cerrado."}</p>
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
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones técnicas en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de nave industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones para herencia y divorcio en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">Tasación pericial contradictoria frente a Hacienda</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/precio-tasacion-almeria" className="text-sky-700 underline hover:no-underline">Precio de una tasación en Almería</Link></li>
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
