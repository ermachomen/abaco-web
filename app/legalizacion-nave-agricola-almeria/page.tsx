import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-agricola-almeria";

export const metadata: Metadata = {
  title: "Legalización de Nave Agrícola en Almería · Almacén de Aperos",
  description: "Legalización de naves y almacenes agrícolas en Almería: proyecto técnico visado, licencia de obras y regularización en suelo rústico. Ingeniero colegiado desde 1983.",
  keywords: ["legalización nave agrícola Almería","almacén de aperos Almería","legalizar nave suelo rústico","proyecto caseta de aperos Almería","asimilado fuera de ordenación Almería","licencia obras nave agrícola","regularizar construcción suelo no urbanizable","certificado antigüedad nave Almería","LISTA Ley 7/2021 Andalucía","ingeniero nave agrícola Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-agricola-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de nave y almacén agrícola en Almería",
    description: "Legalización de naves y almacenes agrícolas en Almería: proyecto técnico visado, licencia de obras y regularización en suelo rústico. Ingeniero colegiado desde 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de nave y almacén agrícola en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de nave y almacén agrícola en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de nave y almacén agrícola en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-nave-agricola-almeria",
  description: "Legalización de naves y almacenes agrícolas en Almería: proyecto técnico visado, licencia de obras y regularización en suelo rústico. Ingeniero colegiado desde 1983.",
};

const faqs = [
  {
    "q": "Puedo construir una nave agrícola en suelo rústico?",
    "a": "En general sí, siempre que la construcción esté vinculada al uso agrícola de la parcela y se ajuste a lo que permita el planeamiento del municipio en superficie, ocupación, altura y retranqueos. Esas condiciones varían de un municipio a otro, por lo que lo primero es revisar el planeamiento aplicable y la clasificación concreta de tu parcela."
  },
  {
    "q": "Qué diferencia hay entre caseta de aperos y nave agrícola?",
    "a": "El planeamiento municipal suele distinguirlas por superficie y por condiciones de implantación, tratando la caseta de aperos como una construcción menor ligada a la guarda de herramienta y maquinaria, y la nave como una edificación de mayor entidad. Clasificar la construcción en la categoría equivocada es una de las causas más frecuentes de requerimiento municipal."
  },
  {
    "q": "Tengo la nave construida hace años sin licencia, tiene solución?",
    "a": "Normalmente sí, aunque la vía depende de la antigüedad y de la situación urbanística de la parcela. Puede ser una legalización ordinaria o el reconocimiento de asimilado a fuera de ordenación previsto en la normativa andaluza, que no legaliza en sentido estricto pero da un régimen jurídico estable al inmueble. Hacemos un estudio previo gratuito y te decimos con franqueza qué recorrido tiene tu caso."
  },
  {
    "q": "Cuánto cuesta legalizar una nave agrícola?",
    "a": "Depende de la superficie, de si hay que levantar lo ya construido y de la vía administrativa que corresponda. Damos siempre presupuesto cerrado tras el estudio previo, desglosando proyecto, visado si procede y tramitación, para que sepas el coste total antes de empezar. A ese importe hay que sumar las tasas municipales, que no dependen de nosotros."
  },
  {
    "q": "Hace falta visado del colegio profesional?",
    "a": "Depende de lo que exija el ayuntamiento y del tipo de documento. Cuando el municipio lo requiere, presentamos el proyecto visado por el colegio profesional correspondiente. Lo comprobamos al inicio del expediente para que no haya sorpresas ni retrasos en la presentación."
  },
  {
    "q": "Os desplazáis a la finca para medir?",
    "a": "Sí. Nos desplazamos por toda la provincia de Almería para la toma de datos y las mediciones, que en regularizaciones son imprescindibles porque hay que documentar lo realmente ejecutado. El resto del expediente se gestiona en remoto con firma digital FNMT."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de nave y almacén agrícola en Almería", item: "https://www.ingenierial.es/legalizacion-nave-agricola-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto para nave o almacén nuevo",
    "cuerpo": "Redactamos el proyecto técnico que exige el ayuntamiento: memoria justificativa del uso agrícola y de su vinculación a la explotación, cálculo de la estructura y la cimentación, cerramientos y cubierta, saneamiento y justificación del cumplimiento del planeamiento municipal en ocupación, altura y retranqueos. Incluimos el presupuesto y el estudio de seguridad y salud, y lo visamos cuando el municipio lo requiere."
  },
  {
    "titulo": "Regularización de lo ya construido",
    "cuerpo": "Si la nave está levantada sin licencia, el camino depende de dos cosas: la antigüedad de la construcción y la situación urbanística de la parcela. Puede resolverse mediante un proyecto de legalización ordinario o, cuando ya no procede la legalización, mediante el reconocimiento de la situación de asimilado a fuera de ordenación. Conviene entender qué es y qué no es ese reconocimiento: no legaliza la construcción en sentido estricto, pero le otorga un régimen jurídico estable. Analizamos el caso concreto y te decimos qué vía tiene recorrido antes de que gastes en un proyecto."
  },
  {
    "titulo": "Caseta de aperos, caseta de riego y balsa",
    "cuerpo": "No es lo mismo una caseta de aperos que una nave: el planeamiento suele tratarlas de forma distinta en superficie y condiciones, y clasificar mal la construcción es motivo habitual de requerimiento. Tramitamos también la caseta de riego con su cabezal y la balsa asociada a la explotación, que en muchas fincas van en el mismo expediente que la nave porque forman una unidad funcional."
  },
  {
    "titulo": "Catastro, antigüedad y valoración",
    "cuerpo": "Una vez regularizada la construcción conviene que figure correctamente en catastro, porque es lo que te va a pedir el banco para una financiación, la aseguradora para cubrir el inmueble o el notario en una compraventa o una herencia. Nos encargamos del alta o la regularización catastral, del certificado de antigüedad cuando procede y, si lo necesitas para una operación concreta, de la valoración técnica de la finca y sus construcciones."
  },
  {
    "titulo": "Normativa aplicable",
    "cuerpo": "El marco autonómico es la Ley 7/2021, de 1 de diciembre, de impulso para la sostenibilidad del territorio de Andalucía (LISTA), publicada en el Boletín Oficial del Estado, y su Reglamento General, aprobado por el Decreto 550/2022, de 29 de noviembre. Ahí se regula, entre otras cuestiones, el régimen de las edificaciones irregulares y el reconocimiento de la situación de asimilado a fuera de ordenación, que exige tramitar un procedimiento administrativo municipal. Sobre ese marco se superpone el planeamiento de cada ayuntamiento, que es el que concreta superficies, ocupación, alturas y retranqueos. Por eso revisamos siempre el planeamiento aplicable a tu parcela antes de definir el proyecto."
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
          <li aria-current="page" className="text-slate-700">Legalización de nave y almacén agrícola en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de nave y almacén agrícola en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto técnico para naves, almacenes de aperos y casetas de riego en suelo rústico: licencia de obras, regularización de lo ya construido y alta en catastro."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La nave o el almacén de aperos en suelo rústico es una de las construcciones que más expedientes irregulares genera en la provincia: se levanta por necesidad de la explotación y la documentación se deja para después. Para construir hace falta proyecto técnico firmado por técnico competente y el título habilitante que corresponda del ayuntamiento, y la construcción debe estar vinculada al uso agrícola de la parcela. Redactamos el proyecto tanto para obra nueva como para regularizar lo que ya está levantado."}</p>
          <p>{"Las condiciones concretas las fija el planeamiento de cada municipio: superficie máxima según el tamaño de la parcela, porcentaje de ocupación, altura, retranqueos y distinción entre caseta de aperos y nave. No son las mismas en Níjar que en El Ejido, en Huércal-Overa o en Vícar. Por eso el trabajo empieza revisando el planeamiento del municipio y la clasificación de tu parcela, antes de dibujar nada. Somos oficina técnica en Almería y nos desplazamos a la finca para la toma de datos."}</p>
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
          <li>·{" "}<Link href="/proyecto-almacen-hortofruticola-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de almacén hortofrutícola</Link></li>
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de nave industrial</Link></li>
          <li>·{" "}<Link href="/tasacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de nave y terreno</Link></li>
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
