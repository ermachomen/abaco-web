import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-taller-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de taller mecánico en Almería",
  description: "Licencia de apertura de taller mecánico en Almería: mecánica, chapa y pintura, motos y lavaderos. Visitamos el local, proyecto y trámite completo.",
  keywords: ["licencia de apertura de taller mecánico en Almería","abrir un taller mecánico en Almería","licencia taller de chapa y pintura","licencia taller de motos","licencia lavadero de coches Almería","legalizar taller Almería","proyecto de taller mecánico Almería","licencia de actividad taller Almería","registro industrial taller Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-taller-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de taller mecánico en Almería",
    description: "Licencia de apertura de taller mecánico en Almería: mecánica, chapa y pintura, motos y lavaderos. Visitamos el local, proyecto y trámite completo.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de taller mecánico en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de taller mecánico en Almería", description: "Licencia de apertura de taller mecánico en Almería: mecánica, chapa y pintura, motos y lavaderos. Visitamos el local, proyecto y trámite completo.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de taller mecánico en Almería",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
  },
  areaServed: [
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/licencia-apertura-taller-almeria",
  description: "Licencia de apertura de taller mecánico en Almería: mecánica, chapa y pintura, motos y lavaderos. Visitamos el local, proyecto y trámite completo.",
};

const faqs = [
  {
    "q": "¿Qué necesito para abrir un taller mecánico en Almería?",
    "a": "Un local con uso urbanístico compatible, un proyecto técnico firmado por un ingeniero y, tras la obra, el certificado final. Todo se presenta ante el Ayuntamiento por declaración responsable o licencia, según la actividad. Además, el taller se inscribe como establecimiento industrial en la Junta de Andalucía. En el estudio previo te decimos qué trámite te corresponde y qué obras necesita tu local."
  },
  {
    "q": "¿Hace falta licencia para un taller de chapa y pintura?",
    "a": "Hace falta tramitar la apertura, y suele ser el caso más exigente. La cabina de pintura necesita extracción y filtrado, y el almacén de pinturas y disolventes pide especial cuidado frente al incendio. Además hay que tener resueltos los residuos y el ruido. Por eso conviene estudiar el local antes de alquilarlo. Lo analizamos en la visita y te decimos si es viable."
  },
  {
    "q": "¿Qué diferencia hay para un taller de motos?",
    "a": "La actividad es parecida a la de un taller de coches, pero a menor escala: elevador más ligero y menos movimiento de vehículos. Eso no te exime del proyecto. Siguen siendo necesarios la extracción de gases, la gestión de aceites y baterías, el cuadro eléctrico de fuerza y la protección contra incendios. Según el caso, el trámite puede cambiar. Lo determinamos en el estudio previo."
  },
  {
    "q": "¿Cómo se legaliza un lavadero de coches en Almería?",
    "a": "Un lavadero genera agua con detergentes, grasas e hidrocarburos que no pueden ir sin tratar a la red. Por eso el proyecto incluye la separación de grasas e hidrocarburos en los desagües, además de la instalación eléctrica en zona húmeda y el control del ruido de los equipos. Redactamos el proyecto, dirigimos la obra y tramitamos la apertura ante el Ayuntamiento."
  },
  {
    "q": "¿Quién se encarga de los aceites usados y las baterías?",
    "a": "El titular del taller contrata un gestor autorizado de residuos peligrosos que los retire. Nosotros no gestionamos residuos, pero sí diseñamos en el proyecto la zona de almacenamiento, con suelo estanco y recogida de derrames, para que el gestor pueda trabajar sin problemas. Así el taller cumple desde el primer día y la documentación queda ordenada."
  },
  {
    "q": "¿Puedo legalizar un taller que ya funciona sin licencia?",
    "a": "Se puede estudiar. Visitamos el taller, revisamos qué instalaciones tiene y qué falta, y redactamos el proyecto de legalización con las obras necesarias para adecuarlo. No prometemos un resultado antes de verlo, porque depende del local y del uso del suelo. Lo que sí hacemos es decirte con claridad si es viable y qué supondría, sin compromiso, en el estudio previo gratuito."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de taller mecánico en Almería", item: "https://www.ingenierial.es/licencia-apertura-taller-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué trámite necesita tu taller",
    "cuerpo": "Ante el Ayuntamiento de Almería, la apertura de un taller se tramita mediante declaración responsable o licencia, según la actividad concreta que vayas a desarrollar. No es lo mismo un taller de mecánica rápida que uno de chapa y pintura con cabina, o un lavadero con desagües propios. Cada caso arrastra exigencias distintas y por eso no decidimos el trámite de memoria: lo determinamos en el estudio previo, con el local y la actividad delante. Además, el taller se inscribe como establecimiento industrial en la Junta de Andalucía, en el registro correspondiente, y esa inscripción también la preparamos nosotros con la documentación técnica del proyecto. Así evitas abrir con un trámite a medias."
  },
  {
    "titulo": "Qué mirar antes de alquilar o comprar el local",
    "cuerpo": "La mayoría de los problemas se pueden detectar antes de firmar. Comprueba que el uso urbanístico del local admite un taller, porque no todas las zonas lo permiten. Averigua si hubo actividad anterior y con qué licencia funcionaba: un local que fue taller parte con ventaja, y uno que fue oficina o vivienda puede exigir más obra. Fíjate en si hay salida directa al exterior para la extracción de gases, en los desagües, en los aseos, en la accesibilidad y en la potencia eléctrica disponible. Visitamos el local contigo y te damos un informe de viabilidad antes de que el alquiler o la compra te comprometan."
  },
  {
    "titulo": "Exigencias técnicas de un taller",
    "cuerpo": "El proyecto de un taller recoge varios sistemas. Ventilación y extracción de gases de escape, con salida adecuada al exterior. Cabina de pintura con su extracción y filtrado, cuando hay chapa y pintura. Separación de aceites e hidrocarburos en los desagües, imprescindible también en lavaderos de coches. Instalación eléctrica de fuerza para elevadores, compresor y maquinaria, conforme al REBT (Real Decreto 842/2002). Protección contra incendios y control del ruido, en el marco de la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. Los residuos peligrosos, como aceites usados y baterías, los retira un gestor autorizado que contrata el titular; el proyecto prevé dónde se almacenan."
  },
  {
    "titulo": "Incendios, accesibilidad y evacuación",
    "cuerpo": "Un taller almacena y manipula productos inflamables, por lo que la seguridad en caso de incendio pesa mucho en el proyecto. Aplicamos el Código Técnico de la Edificación (Real Decreto 314/2006) en su documento de seguridad en caso de incendio: compartimentación, vías de evacuación, señalización y los medios de extinción que corresponden al local. La zona de pintura y el almacén de productos suelen ser los puntos más delicados. El documento de seguridad de utilización y accesibilidad afecta a los suelos, a los accesos y a los aseos. Y el de salubridad, a la evacuación de aguas y a la ventilación. Lo resolvemos en planos y memoria, y lo comprobamos al terminar la obra."
  },
  {
    "titulo": "Cómo trabajamos",
    "cuerpo": "Primero, la visita: vemos el local, hablamos de tu actividad y te decimos si es viable. Segundo, el estudio previo gratuito, donde fijamos el trámite que corresponde y las obras necesarias. Tercero, el proyecto técnico, con presupuesto cerrado desde el principio. Cuarto, la dirección de la obra de adecuación, si la hay: extracción, desagües, instalación eléctrica y protección contra incendios. Quinto, el certificado final de obra e instalaciones. Y sexto, la presentación de toda la documentación en la sede electrónica del Ayuntamiento con firma FNMT, además de la inscripción industrial en la Junta. Respondemos en 24 horas y trabajamos en toda la provincia, desde El Ejido o Roquetas de Mar hasta Vera."
  },
  {
    "titulo": "Traspaso o cambio de titular de un taller",
    "cuerpo": "Si te ofrecen un taller que ya funciona, no des por buena la licencia sin revisarla. Antes de pagar el traspaso, comprobamos que la actividad está legalizada, que lo construido coincide con lo autorizado y que las instalaciones tienen su documentación en regla: eléctrica, extracción, separador de hidrocarburos y protección contra incendios. Un taller con obras no declaradas o sin separador puede darte problemas en la primera inspección. Si todo está correcto, tramitamos el cambio de titularidad ante el Ayuntamiento y actualizamos la inscripción industrial. Si falta algo, te lo decimos con claridad, para que renegocies el traspaso o legalices el taller antes de abrir."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de taller mecánico en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Talleres y lavaderos en Almería"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de taller mecánico en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Si vas a abrir un taller mecánico en Almería, visitamos el local antes de que firmes, redactamos el proyecto, dirigimos la obra y presentamos la documentación en la sede electrónica del Ayuntamiento."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un taller no es un local cualquiera: trabaja con aceites, baterías, gases de escape, pintura, aire comprimido y maquinaria de fuerza. Por eso abrir un taller mecánico en Almería exige un proyecto técnico bien hecho, que demuestre que el local soporta esa actividad con seguridad y sin molestar a los vecinos. Cubrimos talleres de mecánica, electricidad del automóvil, chapa y pintura, motos y lavaderos de coches. Esta página te explica qué suele pedirse en cada caso, qué conviene mirar antes de firmar el alquiler y en qué orden se hace el trámite, para que no pierdas tiempo ni dinero con un local que luego no pueda abrir."}</p>
          <p>{"En Abaco Ingeniería somos una oficina técnica de ingeniería, con un ingeniero técnico industrial colegiado desde 1983. Redactamos y firmamos el proyecto, dirigimos la obra de adecuación cuando procede, emitimos el certificado final y lo tramitamos todo por la sede electrónica con firma FNMT. Antes de que te comprometas con el local, lo visitamos y te decimos si es viable. El estudio previo es gratuito y el presupuesto, cerrado. Llámanos al 670 607 830 o escríbenos y te respondemos en 24 horas, con una primera valoración de tu taller."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad y apertura en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Declaración responsable en Almería"}</Link></li>
          <li>·{" "}<Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Cambio de titularidad de licencia"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
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
