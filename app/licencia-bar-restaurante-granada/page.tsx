import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-bar-restaurante-granada";

export const metadata: Metadata = {
  title: "Licencia de apertura de bar en Granada · Proyecto técnico",
  description: "Licencia de apertura de bar en Granada: proyecto de actividad, salida de humos y trámite en sede electrónica. Medimos el local y el resto es online.",
  keywords: ["licencia de apertura de bar en Granada","licencia de apertura restaurante Granada","licencia de actividad bar Granada","abrir un bar en Granada","proyecto de actividad hostelería Granada","licencia de apertura Albaicín","licencia de hostelería Granada","salida de humos bar Granada","traspaso de bar Granada licencia","cambio de titularidad bar Granada"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-bar-restaurante-granada",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de bar en Granada: ingeniero colegiado",
    description: "Licencia de apertura de bar en Granada: proyecto de actividad, salida de humos y trámite en sede electrónica. Medimos el local y el resto es online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de bar en Granada: proyecto de actividad y tramitación – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de bar en Granada: ingeniero colegiado", description: "Licencia de apertura de bar en Granada: proyecto de actividad, salida de humos y trámite en sede electrónica. Medimos el local y el resto es online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de bar en Granada: proyecto de actividad y tramitación",
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
    { "@type": "City", name: "Granada" },
    { "@type": "AdministrativeArea", name: "Provincia de Granada" },
  ],
  url: "https://www.ingenierial.es/licencia-bar-restaurante-granada",
  description: "Licencia de apertura de bar en Granada: proyecto de actividad, salida de humos y trámite en sede electrónica. Medimos el local y el resto es online.",
};

const faqs = [
  {
    "q": "¿Qué necesito para tramitar la licencia de apertura de un bar en Granada?",
    "a": "El expediente parte de un proyecto de actividad redactado por técnico competente y se presenta en la sede electrónica del Ayuntamiento de Granada, como declaración responsable o como licencia según el caso. Al terminar las obras se aporta el certificado final. Empezamos con una visita al local y un estudio previo gratuito para decirte qué hace falta antes de que te comprometas con el alquiler o el traspaso."
  },
  {
    "q": "¿Hace falta licencia o basta con una declaración responsable para abrir un bar?",
    "a": "Depende de la actividad concreta y de cómo se clasifique en el Catálogo andaluz (Decreto 155/2018), y no vamos a darte una respuesta general que luego no sea la de tu local. El trámite se hace en la sede electrónica del Ayuntamiento de Granada. En el estudio previo, con el local delante, te indicamos cuál corresponde y qué documentación lleva."
  },
  {
    "q": "¿Se puede abrir un bar en un local del Albaicín?",
    "a": "No hay una respuesta única y no vamos a prometerte ninguna. El Albaicín es Patrimonio de la Humanidad y tiene condicionantes de protección; en entornos protegidos el Ayuntamiento puede exigir autorizaciones adicionales a las de la actividad. Lo sensato es comprobarlo antes de firmar el alquiler: visitamos el local, valoramos si sus condiciones técnicas permiten el uso y te decimos qué conviene consultar al Ayuntamiento."
  },
  {
    "q": "¿Qué debo revisar si voy a coger un bar en traspaso en Granada?",
    "a": "Comprueba, antes de pagar el traspaso, que la actividad que se ejerce tiene su título de apertura y que el local encaja con lo que tú quieres hacer: añadir cocina, terraza o música cambia las exigencias. Nosotros revisamos la documentación y las instalaciones en una visita, te decimos si hay que adaptar algo y tramitamos el cambio de titularidad ante el Ayuntamiento de Granada."
  },
  {
    "q": "¿Es posible instalar salida de humos en un edificio de viviendas del Centro?",
    "a": "Depende del edificio, y por eso hay que verlo en el local. Estudiamos el recorrido posible del conducto, su salida respecto a los huecos de viviendas cercanas y si hace falta el acuerdo de la comunidad de propietarios. No prometemos un resultado antes de la visita: si el edificio no admite una solución razonable, te lo decimos en el estudio previo, antes de que firmes el contrato del local."
  },
  {
    "q": "¿Trabajáis en Granada si vuestra oficina está en Almería?",
    "a": "Sí. Nuestra oficina técnica está en Almería; nos desplazamos a Granada para ver y medir el local y hacemos online el resto: firma con certificado digital FNMT, presentación en la sede electrónica y seguimiento del expediente. Atendemos la ciudad, el área metropolitana, Motril y Almuñécar. El estudio previo es gratuito y respondemos en menos de 24 h. Llámanos al 670 607 830."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de bar en Granada: proyecto de actividad y tramitación", item: "https://www.ingenierial.es/licencia-bar-restaurante-granada" },
  ],
};

const bloques = [
  {
    "titulo": "Qué tipo de establecimiento es el tuyo según el Catálogo andaluz",
    "cuerpo": "El primer paso de cualquier licencia de apertura de bar en Granada es encuadrar la actividad. En Andalucía lo hace el catálogo de espectáculos, actividades recreativas y tipos de establecimientos públicos que la Ley 13/1999 encarga aprobar por decreto, con sus denominaciones, modalidades y procedimientos de intervención administrativa. Es el Catálogo aprobado por el Decreto 155/2018, de 31 de julio, que clasifica la hostelería en establecimientos sin música, con música y especiales de hostelería con música. Todo ello se enmarca en la Ley 13/1999, de 15 de diciembre, de Espectáculos Públicos y Actividades Recreativas de Andalucía. No damos horarios en esta página porque dependen de la clasificación; los confirmamos en el estudio previo. Cuéntanos desde el principio si habrá cocina, terraza o música, porque cada elemento condiciona lo que debe justificar el proyecto."
  },
  {
    "titulo": "Proyecto de actividad de hostelería: qué justifica",
    "cuerpo": "El proyecto de actividad de hostelería en Granada que redactamos reúne memoria, planos y cálculos firmados por ingeniero colegiado. Justifica la seguridad en caso de incendio (DB-SI), la accesibilidad y la seguridad de utilización (DB-SUA) y la salubridad (DB-HS), todos ellos del Código Técnico de la Edificación (Real Decreto 314/2006). Añade la instalación eléctrica conforme al REBT (Real Decreto 842/2002), la climatización y ventilación conforme al RITE (Real Decreto 1027/2007) y el estudio de ruido, que se apoya en la normativa autonómica de calidad acústica y en la ordenanza municipal de ruido. Un proyecto bien hecho evita requerimientos del Ayuntamiento y obras repetidas, porque detecta en la visita lo que el local no cumple y cómo corregirlo."
  },
  {
    "titulo": "Locales antiguos del Centro, el Realejo y el Albaicín",
    "cuerpo": "Gran parte de la hostelería de tapeo de Granada está en edificios antiguos, con estructuras, escaleras, patios y accesos que no se pensaron para un bar. En la visita levantamos el estado actual y comprobamos salidas, desniveles en la entrada, aseos y ventilación. Si buscas una licencia de apertura en el Albaicín, ten en cuenta que es Patrimonio de la Humanidad y tiene condicionantes de protección: en entornos protegidos el Ayuntamiento puede exigir autorizaciones adicionales a las de la actividad. No damos por hecho cuáles aplican a cada local. Se averiguan antes de firmar el contrato, y en el estudio previo te indicamos qué conviene consultar al Ayuntamiento antes de comprometerte con la licencia de apertura de bar en Granada que tienes en mente."
  },
  {
    "titulo": "Salida de humos en edificios residenciales y terrazas",
    "cuerpo": "En edificios residenciales, como muchos del Centro y del Realejo, la salida de humos decide la viabilidad de un bar con cocina. Antes de que firmes, estudiamos por dónde puede subir el conducto, hasta dónde llega, qué huecos de vecinos quedan cerca y si hace falta el acuerdo de la comunidad de propietarios para usar un patio o una fachada. El proyecto justifica la ventilación y la evacuación de humos conforme a la normativa aplicable, incluido el CTE DB-HS. Si el local no admite una solución razonable, te lo decimos en el estudio previo y no después. La terraza en la vía pública es otro asunto: no va incluida automáticamente en la autorización del local y depende de lo que decida el Ayuntamiento, así que no la des por segura al alquilar."
  },
  {
    "titulo": "Declaración responsable o licencia, certificado final y traspasos",
    "cuerpo": "Si la licencia de actividad de un bar en Granada se tramita por declaración responsable o por licencia depende de la actividad concreta, y lo decidimos en el estudio previo. En ambos casos la gestión se hace en la sede electrónica del Ayuntamiento de Granada (sede.granada.org), con firma digital FNMT. Al terminar las obras emitimos el certificado final, que acredita que el local ejecutado coincide con el proyecto y con sus instalaciones. Si coges un bar en traspaso, comprobamos antes de que firmes si la actividad existente tiene su título y si encaja con lo que quieres hacer, y gestionamos el cambio de titularidad ante el Ayuntamiento. Un traspaso sin esa revisión puede dejarte con un local que no puedes abrir como esperabas."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de bar en Granada: proyecto de actividad y tramitación"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Granada · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de bar en Granada: proyecto de actividad y tramitación"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Ingeniero técnico industrial colegiado desde 1983. Nos desplazamos a medir tu local en Granada y llevamos el resto online: proyecto de actividad, salida de humos, trámite en sede electrónica y certificado final. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La licencia de apertura de bar en Granada empieza mucho antes de presentar ningún papel: empieza al elegir el local. Un bar de tapeo en el Centro, un restaurante en el Realejo o una cafetería junto a la zona universitaria de Pedro Antonio de Alarcón comparten trámite, pero no los mismos problemas. Cambian el edificio, los vecinos de las plantas superiores, la posibilidad de sacar humos y, a veces, la protección del entorno. Somos una oficina técnica de ingeniería con más de 40 años de trayectoria y redactamos el proyecto de actividad que acredita que tu local cumple, antes de que pagues un traspaso o firmes un alquiler."}</p>
          <p>{"Nuestro trabajo en Granada es práctico. Nos desplazamos a ver y medir el local, comprobamos qué se puede hacer con la salida de humos, los accesos y las instalaciones existentes, y te decimos con franqueza si abrir un bar en Granada ahí es viable. Si lo es, el resto del expediente va online: firmamos con certificado digital FNMT, presentamos en la sede electrónica del Ayuntamiento de Granada y atendemos los requerimientos que lleguen. Atendemos la ciudad, el área metropolitana, Motril y Almuñécar. El estudio previo es gratuito, el presupuesto es cerrado antes de empezar y respondemos en menos de 24 h."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-granada" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad y apertura en Granada"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad"}</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad"}</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-malaga" className="text-sky-700 underline hover:no-underline">{"Licencia de bar o restaurante en Málaga"}</Link></li>
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
