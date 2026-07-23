import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-vehiculos-almeria";

export const metadata: Metadata = {
  title: "Tasación y valoración de vehículos en Almería - Perito ingeniero",
  description: "Tasación de vehículos en Almería: valor venal, discrepancia con el seguro en siniestro total, herencia, flotas y vehículos clásicos. Ingeniero colegiado, presupuesto cerrado.",
  keywords: ["tasación de vehículos Almería","valoración de coches Almería","perito tasador de vehículos Almería","valor venal vehículo Almería","contraperitaje siniestro total coche","tasación vehículo herencia Almería","valoración flota vehículos Almería","tasación maquinaria agrícola Almería","tasación coche clásico Almería","informe pericial vehículo Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-vehiculos-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación y valoración de vehículos en Almería",
    description: "Tasación de vehículos en Almería: valor venal, discrepancia con el seguro en siniestro total, herencia, flotas y vehículos clásicos. Ingeniero colegiado, presupuesto cerrado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación y valoración de vehículos en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación y valoración de vehículos en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación y valoración de vehículos en Almería",
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
  url: "https://www.ingenierial.es/tasacion-vehiculos-almeria",
  description: "Tasación de vehículos en Almería: valor venal, discrepancia con el seguro en siniestro total, herencia, flotas y vehículos clásicos. Ingeniero colegiado, presupuesto cerrado.",
};

const faqs = [
  {
    "q": "¿Qué diferencia hay entre el valor venal y el valor de mercado de un vehículo?",
    "a": "El valor venal es el que usa la aseguradora, calculado a partir del precio de un vehículo equivalente nuevo con una depreciación estándar por antigüedad y kilometraje; es una referencia genérica de tabla. El valor de mercado es el precio real al que se vendería tu vehículo concreto hoy, con su estado, sus extras, su historial de mantenimiento y la demanda real en el mercado de ocasión. Cuando discrepas de una aseguradora, de Hacienda o de otro heredero, lo que necesitas defender es el valor de mercado, documentado por un ingeniero con comparables reales."
  },
  {
    "q": "¿Es una tasación hipotecaria?",
    "a": "No. La tasación hipotecaria es una figura homologada por el Banco de España, reservada a inmuebles que se ponen en garantía de un préstamo, y solo pueden emitirla sociedades de tasación inscritas. Los vehículos no se tasan así: lo que entregamos es un informe pericial firmado por un ingeniero técnico industrial colegiado, con plena validez ante aseguradoras, notarías, Hacienda y juzgados, que es la figura correcta para valorar un vehículo, una flota o maquinaria móvil."
  },
  {
    "q": "Mi seguro dice que mi coche es siniestro total y creo que me paga de menos, ¿qué hago?",
    "a": "Es la consulta más frecuente que recibimos. La aseguradora fija un valor venal antes de indemnizar y, si tu vehículo estaba bien mantenido, con pocos kilómetros o con extras, ese valor suele quedarse corto respecto al real. El artículo 38 de la Ley de Contrato de Seguro te permite nombrar tu propio perito. Elaboramos una contraperitación con el valor de mercado real y comparables homogeneizados, y si la aseguradora no rectifica, la discrepancia se resuelve entre peritos o con un tercer perito dirimente. Trabajamos en sinergia con nuestro servicio de perito de seguros en Almería."
  },
  {
    "q": "¿Sirve el informe para repartir vehículos en una herencia?",
    "a": "Sí. En una herencia los vehículos tributan por su valor de mercado, y aunque Hacienda publica cada año unas tablas fiscales orientativas, son genéricas y no reflejan el estado real de tu vehículo concreto. Si el valor de esas tablas no coincide con la realidad, o si varios herederos necesitan un reparto justo del patrimonio familiar, incluida una flota o maquinaria de empresa, el informe pericial documenta el valor real y sirve de base ante una comprobación de valores mediante tasación pericial contradictoria."
  },
  {
    "q": "¿Tasáis flotas de empresa o maquinaria agrícola autopropulsada?",
    "a": "Sí. Valoramos flotas completas de turismos y furgonetas, y maquinaria móvil matriculada como tractores, cosechadoras, carretillas elevadoras o dumpers, unidad por unidad, identificada por matrícula, modelo, horas o kilómetros y estado de conservación. Es habitual para inventario contable, compraventa de empresa, disolución de sociedad o aportación de activos. Si además necesitas valorar maquinaria fija o instalaciones no matriculadas, lo cubrimos junto a nuestro servicio de tasación de maquinaria industrial y agrícola."
  },
  {
    "q": "¿Tasáis coches clásicos o históricos? ¿Cuánto cuesta y en qué zona trabajáis?",
    "a": "Sí, incluidos los vehículos catalogados como históricos según el nuevo reglamento de 2024, con más de treinta años de antigüedad, cuyo valor depende de la rareza, el estado y la autenticidad, no de una tabla de depreciación estándar. El precio depende del tipo de vehículo y de si es una unidad o una flota completa; tras un estudio previo gratuito damos un presupuesto cerrado, sin sorpresas. Somos oficina técnica con sede en Almería, trabajamos online con firma digital FNMT en toda España y nos desplazamos a inspeccionar en Almería capital y provincia, y también en Granada, Málaga y Murcia."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasación y valoración de vehículos en Almería", item: "https://www.ingenierial.es/tasacion-vehiculos-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Valor venal, valor de mercado y por qué no es una tasación hipotecaria",
    "cuerpo": "El valor venal es la referencia genérica que usa la aseguradora, calculada a partir del precio de un vehículo equivalente nuevo con una depreciación estándar por antigüedad y kilometraje. El valor de mercado es distinto: es el precio real al que se vendería tu vehículo concreto hoy, con su estado de chapa y mecánica, sus extras, su historial de mantenimiento y la demanda real en el mercado de ocasión en Almería. Partimos de ambos valores, los contrastamos con anuncios y operaciones comparables, y documentamos la diferencia. Esto no es una tasación hipotecaria, esa figura homologada por el Banco de España y reservada a inmuebles que se ponen en garantía de un préstamo. Es un informe pericial firmado por ingeniero técnico industrial colegiado, con la misma solidez técnica y plena validez ante aseguradora, notaría, Hacienda o juzgado, que es la figura correcta para un vehículo, una flota o maquinaria móvil."
  },
  {
    "titulo": "Discrepancia con el seguro en un siniestro total: contraperitaje",
    "cuerpo": "La aseguradora declara siniestro total cuando el coste de reparación supera el valor venal del vehículo, un umbral que suele fijarse entre el 75 y el 100 por cien según la póliza, y ofrece indemnizar por ese valor venal, que en vehículos bien mantenidos, con pocos kilómetros o con extras suele quedarse corto. Si no estás de acuerdo, el artículo 38 de la Ley de Contrato de Seguro te permite nombrar tu propio perito frente al de la compañía. Elaboramos una contraperitación con el valor de mercado real, comparables homogeneizados y documentación de revisiones, extras y kilometraje, para negociar con la aseguradora o sostener la posición si se nombra un tercer perito dirimente o el asunto llega a juzgado. Este servicio trabaja en sinergia directa con nuestro contraperitaje y defensa técnica frente a la compañía."
  },
  {
    "titulo": "Tasación para herencia, donación y reparto entre herederos",
    "cuerpo": "En una herencia o donación los vehículos tributan por su valor de mercado en el Impuesto de Sucesiones y Donaciones. Hacienda publica cada año, mediante Orden Ministerial, unas tablas de valor fiscal con coeficientes de depreciación por marca, modelo y antigüedad, pero son tablas genéricas: no bajan por daños, alto kilometraje o mal estado, ni suben por buen estado, pocos kilómetros o extras. Cuando el valor real de tu vehículo no coincide con esa tabla, o cuando varios herederos necesitan repartir con justicia el patrimonio familiar, incluida una flota o maquinaria de empresa, un informe pericial de ingeniero documenta el valor real y sirve de base si Hacienda o la Junta de Andalucía abren una comprobación de valores, mediante la tasación pericial contradictoria."
  },
  {
    "titulo": "Valoración de flotas y maquinaria móvil o agrícola",
    "cuerpo": "Valoramos flotas completas de turismos y furgonetas de empresa, y maquinaria autopropulsada matriculada como tractores, cosechadoras, remolques, carretillas elevadoras y dumpers. Identificamos cada unidad por matrícula, modelo, horas o kilómetros y estado de conservación, y entregamos un listado valorado unidad por unidad, útil para inventario contable, compraventa de empresa, disolución de sociedad, aportación de activos o repaso previo a la renovación del seguro de flota. Cuando además hay que valorar maquinaria fija, líneas de producción o instalaciones no matriculadas, lo cubrimos junto a nuestro servicio de tasación de maquinaria industrial y agrícola, con el mismo criterio técnico para todo el activo productivo."
  },
  {
    "titulo": "Vehículos clásicos e históricos: valor de colección",
    "cuerpo": "Desde noviembre de 2024, el nuevo Reglamento de Vehículos Históricos aprobado por Real Decreto 892/2024 facilita catalogar como histórico un vehículo con más de treinta años desde su primera matriculación. Su valor no sigue una tabla de depreciación estándar: depende de la marca, el modelo, el estado de conservación, la autenticidad de piezas y motor, y un mercado de coleccionismo que puede revalorizarse con los años en lugar de depreciarse. Tasamos estos vehículos para contratar un seguro a valor convenido, para justificar su valor en una herencia o para una compraventa entre particulares, con un informe que documenta el estado real pieza a pieza y que sostiene el valor declarado ante cualquier revisión."
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
            <Link href="/tasaciones" className="text-sm font-medium text-slate-600 hover:text-slate-900">Tasaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Tasación y valoración de vehículos en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Tasación y valoración de vehículos en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoramos turismos, furgonetas, flotas, maquinaria agrícola autopropulsada y vehículos clásicos para fijar su valor venal y su valor de mercado real. No es una tasación hipotecaria: es un informe pericial firmado por ingeniero técnico industrial colegiado, con validez ante aseguradoras, juzgados y Hacienda. Presupuesto cerrado y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La tasación de un vehículo determina cuánto vale hoy, en su estado real, y no es un trámite genérico: hay que distinguir entre el valor venal, el que usa la aseguradora antes del siniestro para fijar el capital asegurado, y el valor de mercado real, el precio al que se vendería hoy ese turismo, furgoneta o maquinaria concreta según kilometraje, estado, mantenimiento y demanda en la provincia. No es una tasación hipotecaria, esa figura homologada por el Banco de España que se usa para dar en garantía un inmueble: es un informe pericial de ingeniero, con la misma solidez técnica, pensado para vehículos, flotas y maquinaria móvil."}</p>
          <p>{"Trabajamos cuatro situaciones habituales en Almería: la discrepancia con la aseguradora cuando declara el siniestro total y el propietario cree que el valor venal ofrecido es bajo; el reparto de vehículos en una herencia, donde Hacienda exige un valor de mercado justificado; la valoración de flotas y maquinaria agrícola o industrial autopropulsada, como tractores o carretillas; y los vehículos clásicos o históricos, con un mercado de coleccionismo propio. Firmamos con firma digital FNMT, trabajamos online en toda España y nos desplazamos a inspeccionar en Almería capital y provincia."}</p>
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
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">Perito de seguros y contraperitaje en Almería</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones técnicas en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-maquinaria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de maquinaria industrial y agrícola</Link></li>
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">Perito ingeniero industrial colegiado en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales en Almería</Link></li>
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
