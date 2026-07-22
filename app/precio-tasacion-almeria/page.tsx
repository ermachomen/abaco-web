import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/precio-tasacion-almeria";

export const metadata: Metadata = {
  title: "Precio de una Tasación en Almería 2026: Cuánto Cuesta",
  description: "Cuánto cuesta una tasación en Almería: desde 250 EUR vivienda, 350 EUR locales, 450 EUR naves y maquinaria a valorar. No hipotecaria, firmada por ingeniero colegiado. Presupuesto cerrado y estudio gratis.",
  keywords: ["precio tasación Almería","cuánto cuesta una tasación en Almería","precio tasación vivienda Almería","tarifa tasación no hipotecaria Almería","coste tasación herencia Almería","precio tasación nave Almería","precio tasación maquinaria Almería","presupuesto tasación Almería","precio valoración inmueble Almería","tasador Almería precio"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/precio-tasacion-almeria",
    siteName: "Abaco Ingeniería",
    title: "Precio de una tasación en Almería: cuánto cuesta",
    description: "Cuánto cuesta una tasación en Almería: desde 250 EUR vivienda, 350 EUR locales, 450 EUR naves y maquinaria a valorar. No hipotecaria, firmada por ingeniero colegiado. Presupuesto cerrado y estudio gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Precio de una tasación en Almería: cuánto cuesta – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Precio de una tasación en Almería: cuánto cuesta", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Precio de una tasación en Almería: cuánto cuesta",
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
  url: "https://www.ingenierial.es/precio-tasacion-almeria",
  description: "Cuánto cuesta una tasación en Almería: desde 250 EUR vivienda, 350 EUR locales, 450 EUR naves y maquinaria a valorar. No hipotecaria, firmada por ingeniero colegiado. Presupuesto cerrado y estudio gratis.",
};

const faqs = [
  {
    "q": "¿Cuánto cuesta una tasación en Almería?",
    "a": "Como referencia orientativa: vivienda desde unos 250 EUR, locales y naves pequeñas alrededor de 350 EUR, naves industriales desde 450 EUR y maquinaria o industria a valorar según inventario. El precio final depende del tipo de bien, la finalidad y la complejidad, y siempre se cierra por escrito tras un estudio previo gratuito."
  },
  {
    "q": "¿Hacéis tasaciones hipotecarias?",
    "a": "No. Abaco no es sociedad de tasación homologada por el Banco de España, así que no emitimos tasación hipotecaria para solicitar un préstamo. Sí realizamos tasación no hipotecaria firmada por ingeniero técnico colegiado, con plena validez para herencias, divorcios, extinción de condominio, Hacienda y procedimientos judiciales."
  },
  {
    "q": "¿Por qué una tasación no hipotecaria es más barata?",
    "a": "Porque para finalidades que no son una hipoteca no se necesita una tasadora oficial del Banco de España. Al evitar ese requisito, el coste baja de forma notable sin perder validez: el informe lo firma un ingeniero colegiado y es admisible ante notarios, Hacienda y juzgados."
  },
  {
    "q": "¿De qué depende el precio final?",
    "a": "De tres factores: el tipo de bien (vivienda, local, nave, invernadero o maquinaria), la finalidad (a mayor exigencia probatoria, más trabajo de justificación) y la complejidad (superficie, número de inmuebles, estado, cargas y disponibilidad de comparables). Por eso damos un precio exacto tras ver el caso, no una tarifa cerrada de catálogo."
  },
  {
    "q": "¿La tasación sirve para rebajar el valor de referencia de Catastro?",
    "a": "Puede ayudar. Desde 2022 se tributa como mínimo por el valor de referencia, pero cabe impugnarlo o solicitar la tasación pericial contradictoria del artículo 135 de la Ley General Tributaria. Una valoración técnica independiente aporta la prueba para defender un valor distinto en una comprobación de valores de Hacienda."
  },
  {
    "q": "¿El precio incluye el desplazamiento y cuánto tarda?",
    "a": "El presupuesto cerrado contempla la inspección cuando es necesaria; trabajamos 100% online con firma FNMT y nos desplazamos por Almería capital y provincia para ver el inmueble o la maquinaria. El plazo habitual de entrega es de 7 a 15 días desde la visita."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Precio de una tasación en Almería: cuánto cuesta", item: "https://www.ingenierial.es/precio-tasacion-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "De qué depende el precio de una tasación",
    "cuerpo": "No existe una tarifa única porque cada valoración es distinta. El precio se mueve por tres factores. El tipo de bien: no cuesta lo mismo tasar una vivienda que una nave, un invernadero o una línea de maquinaria. La finalidad: una valoración para herencia, divorcio o Hacienda exige un informe más argumentado que una estimación meramente orientativa. Y la complejidad: superficie, número de inmuebles, estado de conservación, cargas, singularidades constructivas o la disponibilidad de comparables fiables. Por eso preferimos ver tu caso y darte un precio exacto en lugar de una tarifa genérica que luego se queda corta."
  },
  {
    "titulo": "Precios orientativos por tipo de bien en Almería",
    "cuerpo": "Como referencia, y siempre sujeto a estudio, una tasación de vivienda parte de unos 250 EUR; los locales comerciales y las naves pequeñas rondan los 350 EUR; las naves industriales de mayor superficie arrancan en torno a 450 EUR; y la maquinaria, las instalaciones agrícolas y la industria se valoran a medida según inventario y complejidad. Son importes de partida para un inmueble estándar: una vivienda de gran superficie, un cortijo, un invernadero de varias hectáreas o un conjunto de fincas se presupuestan aparte. En todos los casos el importe se cierra por escrito antes de empezar el trabajo."
  },
  {
    "titulo": "Por qué una tasación no hipotecaria cuesta menos",
    "cuerpo": "Conviene ser claro: Abaco no es sociedad de tasación homologada por el Banco de España, de modo que no emitimos tasación hipotecaria para solicitar un préstamo. Ahora bien, la mayoría de valoraciones que necesita un particular o una empresa no son para una hipoteca: son para una herencia, un divorcio, una extinción de condominio, Hacienda o un juzgado. Para esas finalidades no hace falta una tasadora oficial, y evitar ese sobrecoste puede rebajar el precio de forma notable. Lo que recibes es un informe técnico firmado por ingeniero colegiado, con plena validez legal."
  },
  {
    "titulo": "Valor de referencia de Catastro: por qué te interesa tasar",
    "cuerpo": "Desde 2022, en herencias, donaciones y compraventas se tributa como mínimo por el valor de referencia que fija el Catastro en el Impuesto sobre Sucesiones y Donaciones y en el de Transmisiones Patrimoniales. Ese valor no siempre refleja el estado real del inmueble y con frecuencia lo sobrevalora. Una tasación técnica independiente te sirve para defender un valor distinto, impugnar una comprobación de valores o instar la tasación pericial contradictoria que reconoce el artículo 135 de la Ley General Tributaria. Un informe bien argumentado puede ahorrarte mucho más de lo que cuesta."
  },
  {
    "titulo": "Estudio previo gratuito y presupuesto cerrado",
    "cuerpo": "Antes de cobrar nada estudiamos tu caso sin coste. Nos cuentas qué bien hay que tasar, para qué lo necesitas y dónde está, y te damos un presupuesto cerrado por escrito, sin variaciones posteriores. Trabajamos 100% online con firma digital FNMT, válida en toda España, y nos desplazamos a Almería capital y provincia cuando hay que inspeccionar el inmueble, la nave o la maquinaria. El plazo habitual de entrega es de 7 a 15 días desde la visita. Si el encargo no te compensa, te lo decimos antes de empezar."
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
          <li aria-current="page" className="text-slate-700">Precio de una tasación en Almería: cuánto cuesta</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Precio de una tasación en Almería: cuánto cuesta</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Precios orientativos por tipo de bien, qué factores mueven el coste y presupuesto cerrado tras estudio previo gratuito. Tasación no hipotecaria firmada por ingeniero técnico colegiado en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si buscas cuánto cuesta una tasación en Almería, la respuesta honesta es que depende de tres cosas: el tipo de bien, la finalidad y la complejidad del encargo. En Abaco Ingeniería trabajamos con presupuesto cerrado y precios orientativos ya publicados: desde unos 250 EUR para una vivienda, alrededor de 350 EUR para locales y naves pequeñas, desde 450 EUR para naves industriales y valoración a medida para maquinaria e industria. Somos una oficina técnica con sede en Almería, con un ingeniero técnico industrial colegiado desde 1983 y más de cuarenta años firmando valoraciones con plena validez ante Hacienda, notarios y juzgados."}</p>
          <p>{"Importante y honesto: Abaco no es sociedad de tasación homologada por el Banco de España, así que no realizamos tasación hipotecaria para pedir un préstamo. Nuestro terreno es la tasación no hipotecaria firmada por ingeniero colegiado, igual de válida para herencias, divorcios, extinción de condominio, Hacienda y procedimientos judiciales. Cuando la finalidad no es una hipoteca no necesitas una tasadora oficial, y evitar ese sobrecoste reduce el precio de forma notable. Antes de cobrar nada hacemos un estudio previo gratuito y te damos un presupuesto cerrado, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">Tasación para herencia, divorcio o extinción de condominio</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">Tasación pericial contradictoria frente a Hacienda</Link></li>
          <li>·{" "}<Link href="/tasacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de nave industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-maquinaria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de maquinaria e industria</Link></li>
          <li>·{" "}<Link href="/tasaciones" className="text-sky-700 underline hover:no-underline">Tasaciones técnicas en toda España</Link></li>
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
