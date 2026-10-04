import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-bar-restaurante-malaga";

export const metadata: Metadata = {
  title: "Licencia de apertura de bar en Málaga: proyecto y trámite",
  description: "Licencia de apertura de bar en Málaga: proyecto de actividad, salida de humos, ruido y trámite en sede electrónica. Medimos el local y el resto es online.",
  keywords: ["licencia de apertura de bar en Málaga","licencia de apertura restaurante Málaga","licencia actividad bar Málaga","proyecto de actividad hostelería Málaga","abrir un bar en Málaga","licencia cafetería Málaga","salida de humos bar Málaga","traspaso de bar licencia Málaga","declaración responsable bar Málaga","ingeniero hostelería Málaga"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-bar-restaurante-malaga",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de bar en Málaga | Proyecto y trámite",
    description: "Licencia de apertura de bar en Málaga: proyecto de actividad, salida de humos, ruido y trámite en sede electrónica. Medimos el local y el resto es online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de bar en Málaga: proyecto de actividad y trámite – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de bar en Málaga | Proyecto y trámite", description: "Licencia de apertura de bar en Málaga: proyecto de actividad, salida de humos, ruido y trámite en sede electrónica. Medimos el local y el resto es online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de bar en Málaga: proyecto de actividad y trámite",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
    address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04009", addressCountry: "ES" },
  },
  areaServed: [
    { "@type": "City", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Provincia de Málaga" },
  ],
  url: "https://www.ingenierial.es/licencia-bar-restaurante-malaga",
  description: "Licencia de apertura de bar en Málaga: proyecto de actividad, salida de humos, ruido y trámite en sede electrónica. Medimos el local y el resto es online.",
};

const faqs = [
  {
    "q": "¿Qué licencia necesita un bar en Málaga?",
    "a": "Un bar o una cafetería es una actividad de hostelería que se clasifica según el Catálogo andaluz (Decreto 155/2018) y se tramita ante el Ayuntamiento, en su sede electrónica, mediante declaración responsable o licencia. Cuál de las dos corresponde depende de la actividad y de cómo se vaya a explotar el local, y no lo afirmamos a ciegas: lo decidimos en el estudio previo gratuito, con el local visto. Nosotros preparamos el proyecto de actividad que lo justifica."
  },
  {
    "q": "¿Qué diferencia hay entre la licencia de un bar y la de un restaurante?",
    "a": "En la práctica, la diferencia no está en el nombre sino en lo que se hace en el local. El Catálogo andaluz (Decreto 155/2018) clasifica la hostelería en establecimientos sin música, con música y especiales con música, y de esa clasificación depende el trámite. Técnicamente, la cocina exige resolver extracción de humos y ventilación, y la música obliga a cuidar mucho más el estudio de ruido. El encaje exacto lo confirmamos en el estudio previo, con el Catálogo delante y no de memoria."
  },
  {
    "q": "¿Puedo abrir un bar en un local sin salida de humos?",
    "a": "Depende de qué vayas a hacer. Un bar que no cocina tiene menos que resolver en humos, pero no se libra de la ventilación (CTE DB-HS) ni del estudio de ruido. Si quieres cocina, el proyecto debe justificar un conducto de extracción con recorrido viable por el edificio, y en bajos de viviendas es uno de los puntos que más condicionan la viabilidad. Antes de firmar alquiler o traspaso, medimos el local y te decimos si esa salida es posible."
  },
  {
    "q": "¿Qué debo comprobar antes de traspasar un bar en Málaga?",
    "a": "Pide la documentación de la actividad con la que funciona el local y compárala con lo que ves y con lo que tú quieres hacer: tipo de establecimiento, si tiene cocina, si hay música y si las instalaciones cuentan con sus certificados. Una cosa es el negocio que te traspasan y otra la actividad autorizada. Nosotros revisamos esa documentación y medimos el local, y te decimos si basta con el cambio de titularidad o si hay que tramitar la actividad de nuevo."
  },
  {
    "q": "¿Trabajáis en Marbella, Fuengirola o fuera de la capital?",
    "a": "Sí. Somos una oficina técnica con sede en Almería: nos desplazamos al local, en la capital, la Costa del Sol, la Axarquía, Antequera o la Serranía, y el resto del trámite es online, con firma digital con certificado FNMT. Cada municipio tiene su ayuntamiento y su sede electrónica, así que presentamos ante el que corresponda al local. Para Vélez-Málaga y la Axarquía tienes una página propia con su enlace en esta misma guía."
  },
  {
    "q": "¿Cuánto cuesta y cuánto tarda la licencia de un bar en Málaga?",
    "a": "Ni el coste ni el plazo se pueden dar a ciegas: dependen del local, de si hay cocina o música, de las obras necesarias y del régimen que corresponda. Por eso hacemos un estudio previo gratuito y, tras ver el local, te damos presupuesto cerrado antes de empezar; respondemos en menos de 24 h. Los tiempos del Ayuntamiento no dependen de nosotros y no los prometemos. Sí cuidamos que el expediente vaya completo desde el primer día."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de bar en Málaga: proyecto de actividad y trámite", item: "https://www.ingenierial.es/licencia-bar-restaurante-malaga" },
  ],
};

const bloques = [
  {
    "titulo": "Qué tipo de establecimiento es tu local según el Catálogo andaluz",
    "cuerpo": "La Ley 13/1999, de 15 de diciembre, de Espectáculos Públicos y Actividades Recreativas de Andalucía, encarga a la Junta aprobar por decreto un catálogo con las denominaciones y modalidades de los establecimientos públicos y el procedimiento de intervención administrativa que corresponde a cada uno. Es el Catálogo aprobado por el Decreto 155/2018, de 31 de julio, que clasifica la hostelería en establecimientos sin música, con música y especiales de hostelería con música. Importa porque el encaje condiciona cómo se abre el local. En la práctica, dos datos pesan más que el resto: si habrá cocina y si habrá música. La cocina arrastra la salida de humos y la ventilación; la música arrastra el estudio acústico. Tanto para la licencia de apertura de un restaurante en Málaga como para una cafetería, concretamos contigo cómo vas a explotar el local y confirmamos su encaje con el texto del Catálogo delante."
  },
  {
    "titulo": "Proyecto de actividad de hostelería en Málaga: qué justifica",
    "cuerpo": "El proyecto de actividad de hostelería en Málaga es el documento técnico que demuestra que el local, tal como lo vas a explotar, cumple la normativa. Lo redactamos después de medir el local y justifica, dentro del Código Técnico de la Edificación (Real Decreto 314/2006), la seguridad en caso de incendio (DB-SI), la accesibilidad (DB-SUA) y la salubridad y ventilación (DB-HS). Añade la instalación eléctrica conforme al REBT (Real Decreto 842/2002), la climatización y ventilación mecánica conforme al RITE (Real Decreto 1027/2007) y el estudio de ruido, con la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. Cada apartado se decide sobre los planos del local real y no sobre una plantilla, lo que reduce el riesgo de requerimientos del Ayuntamiento."
  },
  {
    "titulo": "Salida de humos y ruido en bajos de edificios de viviendas",
    "cuerpo": "Cuando el local está en los bajos de un edificio de viviendas, algo habitual en zonas de hostelería como el Centro, el Soho o Pedregalejo, los dos puntos críticos son siempre los mismos. Primero, la salida de humos: una cocina con plancha o freidora necesita un conducto de extracción, y el proyecto debe justificar su recorrido y por dónde sale; antes de que te comprometas, comprobamos en el propio edificio si ese recorrido es posible. Segundo, el ruido: aislamiento y equipos (extractores, compresores, climatización) se justifican con la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. Un bar sin cocina tiene menos que resolver en humos, pero no se libra del estudio acústico ni de la ventilación."
  },
  {
    "titulo": "Traspaso de un bar o cafetería en Málaga: comprobar antes de firmar",
    "cuerpo": "Lo que se traspasa es un negocio, pero la licencia o la declaración con la que funciona corresponde a una actividad concreta, y no siempre coincide con lo que realmente se hace en el local. Un bar que presume de cocina puede estar autorizado como cafetería sin ella, o tener instalaciones sin sus certificados. Antes de firmar, pide la documentación de la actividad y que te la revisemos junto con el local: para tu licencia de cafetería en Málaga, o para un bar con cocina, te decimos si basta con el cambio de titularidad o si lo que quieres hacer exige tramitar la actividad de nuevo. El cambio de titularidad es un trámite distinto al de una apertura nueva, y qué documentos pide el Ayuntamiento lo confirmamos en el estudio previo."
  },
  {
    "titulo": "Declaración responsable o licencia, y certificado final",
    "cuerpo": "Con el proyecto firmado digitalmente presentamos el trámite en la sede electrónica del Ayuntamiento de Málaga (sede.malaga.eu). Si en tu caso procede declaración responsable o licencia depende de la actividad y de cómo la vayas a explotar: no lo damos por hecho, lo decidimos en el estudio previo, con el local visto. Cuando las instalaciones están ejecutadas, emitimos el certificado técnico final de que lo ejecutado se ajusta al proyecto y reunimos los certificados de las instalaciones. Después seguimos el expediente y contestamos los requerimientos que lleguen. Para abrir un bar en Málaga conviene ir en este orden: estudio del local, proyecto, obras y certificado final; encargar las obras antes de saber qué exige el local es arriesgado."
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
            <Link href="/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/licencia-de-actividad" className="hover:text-slate-900">Licencias</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de bar en Málaga: proyecto de actividad y trámite"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Hostelería Málaga · Visita y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de bar en Málaga: proyecto de actividad y trámite"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto de actividad y tramitación para tu licencia de apertura de bar en Málaga. Nos desplazamos a medir el local y resolvemos el resto online, con estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La licencia de apertura de bar en Málaga no empieza en el Ayuntamiento, sino en el local. Un bajo del Centro histórico, un local del Soho, una cafetería junto al paseo marítimo de Pedregalejo o El Palo: cada uno tiene su propia ventilación, su propia salida de humos posible y sus propios vecinos encima. Por eso el primer paso es ver el local y comprobar qué actividad admite, antes de firmar el alquiler o el traspaso. Lo hacemos con ingeniero técnico industrial colegiado desde 1983: medimos el local, redactamos el proyecto de actividad, lo firmamos digitalmente con certificado FNMT y lo presentamos en la sede electrónica del Ayuntamiento."}</p>
          <p>{"Somos una oficina técnica con sede en Almería. En Málaga nos desplazamos a medir el local y atendemos online el resto: planos, memoria, certificados y presentación. Lo mismo vale para la Costa del Sol (Marbella, Fuengirola, Torremolinos, Benalmádena, Estepona, Mijas), la Axarquía, Antequera o Ronda, aunque cada municipio tiene su propio ayuntamiento y es ante él donde se presenta el trámite. Con más de 40 años de trayectoria, preferimos decirte con franqueza si un local es viable: el estudio previo es gratuito, el presupuesto es cerrado antes de empezar y respondemos en menos de 24 h. Si el local no sale por humos, ventilación o ruido, mejor saberlo antes de firmar que después."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-malaga" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad y apertura en Málaga"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-velez-malaga" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura en Vélez-Málaga"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad"}</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad"}</Link></li>
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
