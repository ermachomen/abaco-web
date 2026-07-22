import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/proyecto-nave-industrial-almeria";

export const metadata: Metadata = {
  title: "Proyecto de nave industrial y agrícola en Almería | Precio",
  description: "Proyecto de nave industrial y agrícola en Almería: obra, estructura, instalaciones y licencia. Precio orientativo y presupuesto cerrado, estudio previo gratis.",
  keywords: ["proyecto nave industrial Almería","proyecto nave agrícola Almería","precio proyecto nave industrial","proyecto almacén hortofrutícola Almería","legalización nave industrial Almería","proyecto nave agrícola El Ejido","cámara frigorífica proyecto Almería","regularización nave existente Almería","RSCIEI nave industrial RD 164/2025","ingeniero proyecto nave Almería","proyecto nave logística Poniente almeriense","cálculo estructura nave industrial"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/proyecto-nave-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Proyecto de nave industrial y agrícola en Almería",
    description: "Proyecto de nave industrial y agrícola en Almería: obra, estructura, instalaciones y licencia. Precio orientativo y presupuesto cerrado, estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Proyecto de nave industrial y agrícola en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Proyecto de nave industrial y agrícola en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto de nave industrial y agrícola en Almería",
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
  url: "https://www.ingenierial.es/proyecto-nave-industrial-almeria",
  description: "Proyecto de nave industrial y agrícola en Almería: obra, estructura, instalaciones y licencia. Precio orientativo y presupuesto cerrado, estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Cuánto cuesta el proyecto de una nave industrial o agrícola en Almería?",
    "a": "Depende sobre todo de la superficie, del uso y de las instalaciones. De forma orientativa, el proyecto de una nave suele moverse entre 6.000 y 25.000 EUR, importe que se calcula como un porcentaje del presupuesto de ejecución material (aproximadamente entre el 4% y el 8% si se suman proyecto y dirección de obra). Aparte quedan las tasas municipales, el ICIO y la propia construcción. Regularizar una nave ya construida suele salir más barato cuando basta un proyecto de legalización. En el estudio previo gratuito te damos un presupuesto cerrado."
  },
  {
    "q": "¿Qué diferencia hay entre proyecto de nave nueva y regularización de una existente?",
    "a": "En una nave nueva redactamos el proyecto completo de obra, calculamos la estructura, proyectamos las instalaciones y dirigimos la ejecución hasta el certificado final. En una nave ya construida sin legalizar, levantamos el estado real, comprobamos si es compatible con el planeamiento y redactamos un proyecto o informe de legalización que justifique estructura e instalaciones conforme a la normativa vigente para obtener la licencia de actividad y la puesta en servicio. Si la construcción no es legalizable te lo decimos antes de empezar, sin coste."
  },
  {
    "q": "¿Puedo construir una nave agrícola en suelo rústico o no urbanizable?",
    "a": "En muchos casos sí, siempre que la nave esté vinculada a la explotación agraria y se ajuste a la ley del suelo de Andalucía (LISTA) y al planeamiento municipal. Según el uso y la superficie puede exigirse una declaración responsable, una autorización o un proyecto de actuación, además de la licencia de obra. Analizamos la parcela, su clasificación y las limitaciones antes de proyectar, para evitar sorpresas y que la nave se pueda legalizar y poner en servicio con garantías."
  },
  {
    "q": "¿Qué normativa se aplica a las instalaciones de la nave?",
    "a": "La estructura y la habitabilidad siguen el Código Técnico (DB-SE, DB-SI, DB-HS, DB-HE). La instalación eléctrica se rige por el REBT; la protección contra incendios, por el nuevo RSCIEI aprobado por el RD 164/2025, que sustituye al reglamento de 2004 y unifica en cinco años la periodicidad de las inspecciones. Los equipos contra incendios se ejecutan según el RIPCI. En naves con frío aplica el reglamento de seguridad de instalaciones frigoríficas, y la climatización de oficinas, el RITE. Coordinamos todos en un único expediente."
  },
  {
    "q": "¿Necesito licencia de obra y también licencia de actividad?",
    "a": "Sí, son dos trámites distintos y complementarios. La licencia de obra autoriza a construir o reformar la nave y se apoya en el proyecto de obra. La licencia de actividad, o la declaración responsable según el municipio, autoriza a ejercer la actividad dentro de ella y se apoya en el proyecto de actividad, que justifica instalaciones, protección contra incendios, accesibilidad y medio ambiente. En Abaco redactamos ambos proyectos y los tramitamos de forma coordinada para que no haya incoherencias entre expedientes."
  },
  {
    "q": "¿Trabajáis en toda la provincia de Almería y de forma online?",
    "a": "Sí. Somos oficina técnica con sede en Almería e ingeniero técnico industrial colegiado desde 1983. Firmamos con certificado digital FNMT, así que tramitamos el 100% online en toda España y nos desplazamos a medir e inspeccionar a Almería capital y a los municipios del Poniente y el Levante como El Ejido, Roquetas de Mar, Níjar, Vícar o Huércal-Overa, y también a Granada, Málaga y Murcia. Estudio previo gratuito y respuesta en menos de 24 horas."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Proyecto de nave industrial y agrícola en Almería", item: "https://www.ingenierial.es/proyecto-nave-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto de obra: estructura, cimentación y cubierta",
    "cuerpo": "El proyecto parte de la implantación de la nave en la parcela y del cálculo de su estructura conforme al Código Técnico de la Edificación (DB-SE), en pórticos de acero o de hormigón según la luz, la altura libre y las cargas de nieve, viento y uso. Definimos la cimentación, la solera, los cerramientos, la cubierta con sus lucernarios y la evacuación de aguas, y la envolvente térmica cuando el uso lo exige. Todo queda dimensionado y justificado en memoria, planos y presupuesto de ejecución material, la base sobre la que se calculan honorarios, tasas e impuestos de la obra."
  },
  {
    "titulo": "Instalaciones: eléctrica, contra incendios y saneamiento",
    "cuerpo": "Una nave no se legaliza solo con la obra: hay que proyectar sus instalaciones. La instalación eléctrica se resuelve conforme al Reglamento Electrotécnico de Baja Tensión (REBT), con su cuadro, alumbrado y, si procede, centro de transformación. La protección contra incendios se justifica con el nuevo RSCIEI (RD 164/2025), calculando la carga de fuego y el nivel de riesgo intrínseco para fijar sectorización y sistemas. El saneamiento y la evacuación de pluviales y residuales siguen el DB-HS. En naves de frío añadimos la instalación frigorífica según su reglamento de seguridad, y la climatización cuando existe zona de oficinas."
  },
  {
    "titulo": "Naves agroindustriales del Poniente y Levante almeriense",
    "cuerpo": "El tejido de Almería pide naves muy concretas: centros de manipulado y confección hortofrutícola con líneas de calibrado, cámaras de pre-frío y frigoríficas, muelles de carga con abrigos, zonas de acopio de envases y naves logísticas. Cada una tiene exigencias propias de higiene alimentaria, aislamiento, ventilación, potencia eléctrica y protección contra incendios por su carga de fuego. Conocemos la operativa de El Ejido, Roquetas de Mar, Níjar, Vícar y Huércal-Overa, y proyectamos la nave para que encaje con la campaña, con la cooperativa o comercializadora y con los requisitos de la Junta de Andalucía."
  },
  {
    "titulo": "Licencia de obra, licencia de actividad y puesta en servicio",
    "cuerpo": "Construir la nave exige licencia de obra municipal; abrirla, la licencia o declaración responsable de actividad con su proyecto de actividad. Si la nave agrícola se ubica en suelo rústico o no urbanizable, tramitamos la habilitación urbanística que exige la ley del suelo de Andalucía (LISTA). Terminada la obra emitimos el certificado final y presentamos de forma telemática la legalización de instalaciones y la puesta en servicio ante la Delegación de Industria, incluido el registro industrial cuando procede. El resultado es una nave con toda la documentación en regla, lista para funcionar y para pasar inspecciones."
  },
  {
    "titulo": "Precio orientativo y presupuesto cerrado",
    "cuerpo": "Con honestidad: el mercado sitúa el proyecto de una nave entre unos 6.000 y 25.000 EUR según la superficie, el uso y las instalaciones, cifra que suele calcularse como un porcentaje del presupuesto de ejecución material (del orden del 4% al 8% sumando proyecto y dirección de obra). A ello se añaden las tasas municipales y el ICIO. Una regularización de nave existente puede resultar bastante más económica cuando basta un informe o proyecto de legalización sin obra nueva. Tras un estudio previo gratuito te damos un presupuesto cerrado, sin variaciones posteriores, ajustado a tu nave y a tu actividad."
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
            <Link href="/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Proyecto de nave industrial y agrícola en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Proyecto de nave industrial y agrícola en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Redactamos el proyecto completo de tu nave en Almería: obra, estructura e instalaciones eléctrica, contra incendios y saneamiento, con licencia de obra y de actividad y su legalización ante Industria. Nave nueva o regularización de nave existente. Ingeniero técnico industrial colegiado desde 1983, presupuesto cerrado y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un proyecto de nave industrial o agrícola es el documento técnico que define la obra, la estructura y las instalaciones del edificio y que firma un ingeniero competente para poder construir, abrir y legalizar la nave. En Almería la demanda es marcadamente agroindustrial: almacenes de manipulado hortofrutícola, cámaras frigoríficas y de pre-frío, naves logísticas y de acopio en el Poniente (El Ejido, Roquetas de Mar, Níjar y Vícar) y en el Levante (Huércal-Overa). Cada nave necesita justificar el cálculo estructural, la instalación eléctrica, la protección contra incendios y el saneamiento, además de la licencia de obra y la de actividad antes de entrar en funcionamiento."}</p>
          <p>{"En Abaco Ingeniería, marca abacoingeniería, lo resolvemos como oficina técnica con sede en Almería, dirigida por un ingeniero técnico industrial colegiado desde 1983 y con más de cuarenta años de experiencia. Redactamos el proyecto completo, calculamos la estructura, coordinamos las instalaciones y tramitamos licencias, legalización y puesta en servicio ante la Junta de Andalucía. Firmamos con certificado digital FNMT, así que trabajamos el 100% online en toda España y nos desplazamos a Almería capital y provincia, y también a Granada, Málaga y Murcia. Estudio previo gratuito y presupuesto cerrado, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones y registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Proyecto y legalización contra incendios (RSCIEI) en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas (REBT) en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-el-ejido" className="text-sky-700 underline hover:no-underline">Licencia de actividad en El Ejido</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
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
