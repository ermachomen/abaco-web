import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-pericial-contradictoria-almeria";

export const metadata: Metadata = {
  title: "Tasación pericial contradictoria en Almería | Hacienda",
  description: "Recurre la comprobación de valores o el valor de referencia en ITP e ISD con una tasación pericial contradictoria de ingeniero colegiado en Almería. Estudio gratis.",
  keywords: ["tasación pericial contradictoria Almería","comprobación de valores Hacienda Almería","impugnar valor de referencia catastro","valor de referencia ITP Andalucía","recurrir liquidación paralela ITP","perito tercero tasación pericial contradictoria","tasación herencia sucesiones Almería","rectificación autoliquidación ITP devolución","informe pericial valoración Hacienda Almería","perito ingeniero colegiado valoración Almería","TEAR Andalucía valor de referencia","valoración no hipotecaria Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-pericial-contradictoria-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación pericial contradictoria en Almería frente a Hacienda",
    description: "Recurre la comprobación de valores o el valor de referencia en ITP e ISD con una tasación pericial contradictoria de ingeniero colegiado en Almería. Estudio gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación pericial contradictoria en Almería frente a Hacienda – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación pericial contradictoria en Almería frente a Hacienda", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación pericial contradictoria en Almería frente a Hacienda",
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
  url: "https://www.ingenierial.es/tasacion-pericial-contradictoria-almeria",
  description: "Recurre la comprobación de valores o el valor de referencia en ITP e ISD con una tasación pericial contradictoria de ingeniero colegiado en Almería. Estudio gratis.",
};

const faqs = [
  {
    "q": "Me ha llegado una comprobación de valores o una paralela de Hacienda, ¿qué hago?",
    "a": "No la dejes pasar. Tienes, por lo general, un mes desde la notificación para recurrir o para promover la tasación pericial contradictoria. Lo más eficaz suele ser reservar el derecho a la TPC en ese primer recurso: se suspende la ejecución de la liquidación y el plazo, y ganas tiempo para preparar una tasación de parte que rebaje el valor comprobado. Antes de nada revisamos gratis si la valoración de Hacienda está bien motivada, porque muchas se anulan por falta de motivación sin necesidad de discutir cifras."
  },
  {
    "q": "¿Puedo hacer una tasación pericial contradictoria contra el valor de referencia del Catastro?",
    "a": "No directamente. Cuando la base imponible es el valor de referencia, Hacienda no comprueba valores, lo aplica por ley, y la TPC clásica no procede. La vía correcta es solicitar la rectificación de la autoliquidación y la devolución de ingresos indebidos, o autoliquidar por el valor real y recurrir la liquidación. En ambos casos necesitas un informe pericial que demuestre que el valor de referencia supera el de mercado. Tienes hasta cuatro años desde que presentaste la autoliquidación para pedir la rectificación."
  },
  {
    "q": "¿Cuánto cuesta y quién paga el perito tercero?",
    "a": "Nuestra tasación de parte tiene precio cerrado, orientativamente desde 250 EUR en vivienda, 350 en locales y 450 en naves, según el bien y su complejidad. El perito tercero solo interviene si la diferencia entre las dos tasaciones supera 120.000 EUR y el 10%. Sus honorarios los pagas tú únicamente si su valoración supera en más de un 20% el valor que declaraste; si no, los asume la Administración. Antes de empezar calculamos si el ahorro fiscal compensa el coste, para que no gastes en balde."
  },
  {
    "q": "¿Vuestro informe vale ante Hacienda aunque no seáis tasadora del Banco de España?",
    "a": "Sí. La homologación del Banco de España solo es obligatoria para la tasación hipotecaria, que nosotros no hacemos. Para la comprobación de valores, el valor de referencia, una herencia, un divorcio o un pleito, la ley admite el informe de un perito competente y colegiado. El nuestro lo firma un ingeniero técnico industrial colegiado desde 1983 y se presenta con plena validez ante la Agencia Tributaria de Andalucía, el TEAR y los juzgados. Es una valoración no hipotecaria, que es justo la que necesitas en estos casos."
  },
  {
    "q": "¿Qué plazo tengo para reclamar o promover la TPC?",
    "a": "Depende de la vía. Para promover la tasación pericial contradictoria frente a una comprobación de valores, el plazo es el del primer recurso contra la liquidación, normalmente un mes desde la notificación. Para impugnar el valor de referencia mediante la rectificación de la autoliquidación y la devolución de ingresos indebidos, dispones de hasta cuatro años desde que la presentaste. Son plazos que conviene no apurar: cuanto antes nos escribas, más margen tenemos para reunir comparables y documentar el estado real del inmueble."
  },
  {
    "q": "¿Trabajáis en Almería y de forma online?",
    "a": "Somos oficina técnica con sede en Almería, con ingeniero técnico industrial colegiado desde 1983 y más de cuarenta años de experiencia. Firmamos con certificado digital FNMT, así que tramitamos el 100% online en toda España y nos desplazamos a inspeccionar el inmueble en Almería capital y provincia, como El Ejido, Roquetas de Mar, Níjar o Huércal-Overa, y también a Granada, Málaga y Murcia. Estudio previo gratuito y respuesta en menos de 24 horas en el 687 46 54 86."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasación pericial contradictoria en Almería frente a Hacienda", item: "https://www.ingenierial.es/tasacion-pericial-contradictoria-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Cuándo procede la TPC: comprobación de valores",
    "cuerpo": "La tasación pericial contradictoria es el mecanismo que regulan los artículos 57.2 y 135 de la Ley General Tributaria para corregir una comprobación de valores. Procede cuando Hacienda revisa el valor que declaraste, normalmente mediante una liquidación paralela o una propuesta de valoración, y te reclama más ITP o más Sucesiones. Debes promoverla dentro del plazo del primer recurso o reclamación contra esa liquidación, habitualmente un mes desde la notificación. Reservar el derecho a la TPC suspende la ejecución de la liquidación y el plazo para recurrir, de modo que ganas tiempo para preparar una tasación de parte sólida sin que la deuda siga su curso ni se generen recargos."
  },
  {
    "titulo": "Valor de referencia del Catastro: cómo se impugna",
    "cuerpo": "Desde 2022 el valor de referencia del Catastro es la base imponible mínima del ITP y del ISD. Como Hacienda lo aplica por imperativo legal y sin comprobar valores, aquí no cabe la TPC clásica: la vía es solicitar la rectificación de la autoliquidación y la devolución de ingresos indebidos (art. 120.3 LGT), o autoliquidar por el valor real y recurrir la liquidación que llegue. La carga de la prueba recae en ti: hay que demostrar que el valor de referencia supera el de mercado. En Andalucía el ITP de vivienda usada es del 7%, así que cada 10.000 EUR de exceso de valoración son 700 EUR de más; por eso conviene una pericial bien fundada."
  },
  {
    "titulo": "Qué contiene nuestro informe y por qué convence",
    "cuerpo": "Un informe que solo aporte otro número no convence a Hacienda. El nuestro habla el idioma del Catastro: revisa los parámetros, la superficie y la antigüedad con que se calculó el valor de referencia, detecta errores de descripción, documenta el estado real de conservación del inmueble y aporta testigos y comparables de mercado en la zona. Incluye reportaje fotográfico, referencia catastral, metodología de valoración y conclusión motivada. Sirve como tasación de parte en la TPC, como prueba en la rectificación o el recurso, y como base si finalmente interviene un perito tercero. Todo firmado por ingeniero colegiado y con plena validez ante la Administración."
  },
  {
    "titulo": "El procedimiento paso a paso y el perito tercero",
    "cuerpo": "En la TPC, si Hacienda comprobó sin dictamen de perito, primero valora su propio técnico; después se te notifica y dispones de 10 días para nombrar perito y un mes para aportar nuestra tasación. Si la diferencia entre ambas valoraciones supera los 120.000 EUR y, además, el 10% de la tasación de parte, se designa un perito tercero cuyo dictamen decide. Sus honorarios los pagas tú solo si su valoración supera en más de un 20% el valor que declaraste; en caso contrario, los asume la Administración, y puede exigirse un depósito previo. Te explicamos cada paso y calculamos si te compensa antes de iniciarlo."
  },
  {
    "titulo": "Dónde vale, honestidad y precios orientativos",
    "cuerpo": "Nuestros informes se presentan ante la Agencia Tributaria de Andalucía (Junta de Andalucía), que gestiona el ITP y el Impuesto de Sucesiones y Donaciones, y sirven en vía económico-administrativa ante el TEAR y, si hace falta, ante los tribunales. Con honestidad: no somos tasadora del Banco de España y no hacemos tasación hipotecaria, pero para comprobación de valores, herencia, divorcio o litigio el informe de un perito colegiado es prueba admisible y suficiente. Precios orientativos de valoración desde unos 250 EUR en vivienda, 350 en locales y 450 en naves; presupuesto cerrado tras el estudio previo gratuito."
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
          <li aria-current="page" className="text-slate-700">Tasación pericial contradictoria en Almería frente a Hacienda</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Tasación pericial contradictoria en Almería frente a Hacienda</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Informe pericial de ingeniero colegiado para recurrir la comprobación de valores y el valor de referencia del Catastro en ITP e ISD ante la Agencia Tributaria de Andalucía y el TEAR."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Has recibido una liquidación paralela o una propuesta de comprobación de valores de Hacienda en el ITP o en el Impuesto de Sucesiones y Donaciones, o bien pagaste aplicando el valor de referencia del Catastro y crees que supera el valor real del inmueble. En ambos casos puedes defenderte, pero necesitas prueba técnica. En Abaco Ingeniería emitimos el informe pericial de valoración que sirve como tasación de parte en la tasación pericial contradictoria (TPC) y como prueba en la impugnación ante la Agencia Tributaria de Andalucía y el TEAR. Lo firma un ingeniero técnico industrial colegiado desde 1983, con sede en Almería y trabajo 100% online."}</p>
          <p>{"Seamos claros: Abaco no es sociedad de tasación homologada por el Banco de España, así que no emitimos tasación hipotecaria. Y no la necesitas: para fines fiscales, de herencia o judiciales, la ley admite el informe de un perito competente y colegiado, y ese es nuestro terreno. Analizamos tu caso, revisamos la motivación de Hacienda y del Catastro y te decimos con honestidad si merece la pena recurrir antes de gastar. Estudio previo gratuito, presupuesto cerrado y valoración firmada con certificado digital FNMT."}</p>
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
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">Tasación para herencia, divorcio y extinción de condominio</Link></li>
          <li>·{" "}<Link href="/tasacion-maquinaria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de maquinaria industrial en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de naves industriales en Almería</Link></li>
          <li>·{" "}<Link href="/precio-tasacion-almeria" className="text-sky-700 underline hover:no-underline">Precio de una tasación en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones e informes periciales en Almería</Link></li>
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
