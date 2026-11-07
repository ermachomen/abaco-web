import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-clinica-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de clínica en Almería",
  description: "Licencia de apertura de clínica en Almería: dental, fisioterapia, consultas, psicología y podología. Proyecto, instalaciones y certificado. Estudio gratis.",
  keywords: ["licencia de apertura de clínica en Almería","licencia clínica dental Almería","licencia consulta fisioterapia Almería","abrir una clínica requisitos","licencia de actividad centro sanitario","licencia consulta médica Almería","licencia clínica de podología Almería","licencia consulta de psicología Almería","proyecto de actividad clínica Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-clinica-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de clínica en Almería",
    description: "Licencia de apertura de clínica en Almería: dental, fisioterapia, consultas, psicología y podología. Proyecto, instalaciones y certificado. Estudio gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de clínica en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de clínica en Almería", description: "Licencia de apertura de clínica en Almería: dental, fisioterapia, consultas, psicología y podología. Proyecto, instalaciones y certificado. Estudio gratis.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de clínica en Almería",
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
  url: "https://www.ingenierial.es/licencia-apertura-clinica-almeria",
  description: "Licencia de apertura de clínica en Almería: dental, fisioterapia, consultas, psicología y podología. Proyecto, instalaciones y certificado. Estudio gratis.",
};

const faqs = [
  {
    "q": "¿Necesito licencia municipal para abrir una clínica?",
    "a": "Sí, la actividad de una clínica se controla ante el Ayuntamiento, bien con declaración responsable o bien con licencia, según la actividad concreta y el local. No afirmamos de antemano cuál te corresponde: lo determinamos en el estudio previo, después de ver el local y de conocer qué equipos y servicios vas a ofrecer. Además de la licencia municipal, necesitas la autorización sanitaria de la Junta de Andalucía, que es un trámite distinto."
  },
  {
    "q": "¿Es lo mismo la licencia de apertura que la autorización sanitaria?",
    "a": "No. La licencia de actividad la gestiona el Ayuntamiento y comprueba que el local es adecuado: instalaciones, accesibilidad, incendios y ruido. La autorización sanitaria es de la Junta de Andalucía y la tramita el titular o un gestor especializado. Nosotros hacemos la parte técnica del local, es decir, proyecto, instalaciones, accesibilidad y certificado, y la coordinamos con ese otro trámite para que no se pisen."
  },
  {
    "q": "¿Qué instalaciones especiales lleva una clínica dental?",
    "a": "Además de la electricidad de los equipos, una clínica dental necesita prever el compresor y la aspiración, con su ubicación, su ruido y su evacuación, y la toma de agua y los desagües de cada gabinete. También cuenta la ventilación y la climatización de las salas. Todo se proyecta según el local, conforme al REBT y al RITE, y se refleja en el proyecto y en el certificado final que presentamos."
  },
  {
    "q": "¿Puedo abrir una consulta de fisioterapia en cualquier local?",
    "a": "No siempre. Hay que comprobar que el uso urbanístico lo permite, que existe un itinerario accesible hasta las salas, que cabe un aseo adaptado y que las instalaciones soportan tus equipos. Por eso conviene que visitemos el local antes de que firmes el alquiler. En la visita te decimos si es viable y qué obras necesitaría, sin compromiso y sin coste."
  },
  {
    "q": "¿Qué pasa si el local tiene escalones o los aseos no son adaptados?",
    "a": "Se estudia cada caso, porque depende del local y de la actividad. Según el Código Técnico de la Edificación, los pacientes deben poder llegar a las salas y usar un aseo adecuado. A veces se resuelve con una rampa o una reforma del aseo, y otras veces el local no es viable. Por eso la visita previa es tan útil: te evita pagar un alquiler por un local que no podrías abrir."
  },
  {
    "q": "¿Cuánto tardáis y cómo empezamos?",
    "a": "Escríbenos o llámanos al 670 607 830 y respondemos en 24 horas. Concertamos una visita al local, hacemos el estudio previo gratuito y, si decides seguir, te damos un presupuesto cerrado. No prometemos plazos de resolución, porque dependen del Ayuntamiento y de cada expediente. Sí podemos decirte qué documentación y obras necesitas, y en qué orden, para no perder tiempo."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de clínica en Almería", item: "https://www.ingenierial.es/licencia-apertura-clinica-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué trámite necesita tu clínica",
    "cuerpo": "Toda clínica necesita el control municipal de su actividad, y también la autorización sanitaria de la Junta de Andalucía. Son trámites distintos, con organismos distintos y con papeles distintos. El de la Junta lo tramita el titular o un gestor especializado. Lo nuestro es la licencia de actividad ante el Ayuntamiento y toda la documentación técnica del local, que además suele ser la base que se aporta a la autorización sanitaria. Si hace falta declaración responsable o licencia depende de la actividad concreta y del local, y lo decidimos en el estudio previo, no antes. Coordinamos ambos caminos para que el proyecto, las instalaciones y el certificado encajen en los dos sin repetir trabajo."
  },
  {
    "titulo": "Qué mirar antes de alquilar o comprar el local",
    "cuerpo": "Antes de firmar nada comprueba que el uso urbanístico del local admite una clínica y si hubo una actividad anterior, con qué licencia funcionaba y si está en regla. Mira también el acceso desde la calle, porque los pacientes han de poder entrar y moverse con autonomía: escalones, rampas, anchura de puertas y ascensor pesan mucho en el coste. Fíjate en si hay sitio para un aseo adaptado, en si el local admite una salida de ventilación hacia la fachada o la cubierta y en si la potencia eléctrica contratada alcanza para tus equipos. Una visita técnica antes del contrato te evita descubrir estos problemas con la fianza ya pagada. Esa visita es gratuita."
  },
  {
    "titulo": "Exigencias técnicas típicas de una clínica",
    "cuerpo": "Cada tipo de clínica tiene sus puntos propios. En una clínica dental hay que prever el compresor y la aspiración, su ubicación, su ruido y su evacuación, además de la toma de agua y los desagües de cada gabinete. En fisioterapia pesan los espacios de tratamiento, los vestuarios y los aseos. En consultas médicas, de psicología y de podología importan la privacidad, la insonorización entre salas y la climatización. En todas ellas hay que proyectar la instalación eléctrica de los equipos conforme al REBT (Real Decreto 842/2002), con circuitos y protecciones adecuados, así como la ventilación y la climatización conforme al RITE (Real Decreto 1027/2007). La normativa autonómica de calidad acústica y la ordenanza municipal de ruido también se estudian, sobre todo por las máquinas."
  },
  {
    "titulo": "Incendios, accesibilidad y evacuación",
    "cuerpo": "Una clínica recibe a personas que no siempre se mueven con soltura: mayores, pacientes con muletas o en silla de ruedas y niños. Por eso el proyecto cuida el itinerario accesible desde la calle hasta cada sala y los aseos adaptados, conforme al Código Técnico de la Edificación (Real Decreto 314/2006), en su documento de seguridad de utilización y accesibilidad. En seguridad en caso de incendio se analizan los recorridos y las salidas de evacuación, la señalización, la iluminación de emergencia y los medios de protección que corresponda. La salubridad del DB-HS se aplica a la ventilación de gabinetes y aseos. Todo se dimensiona según el local real y su actividad concreta, no con soluciones tipo copiadas de otro proyecto."
  },
  {
    "titulo": "Cómo trabajamos",
    "cuerpo": "Empezamos con una visita al local, antes de que firmes, y con un estudio previo gratuito donde te decimos si es viable, qué trámite le corresponde y qué obras harán falta. Después redactamos y firmamos el proyecto con las instalaciones, la accesibilidad y la evacuación, y te damos un presupuesto cerrado. Si el local necesita obras, dirigimos la adecuación y coordinamos a los instaladores. Al terminar emitimos el certificado final, preparamos el expediente y lo presentamos por la sede electrónica del Ayuntamiento con firma FNMT. Mientras tanto avisamos de los documentos que tu trámite sanitario necesita de la parte técnica, para que lleguen a tiempo. Respondemos en 24 horas y damos la cara ante el Ayuntamiento si hay requerimientos."
  },
  {
    "titulo": "Traspaso o cambio de titularidad de una clínica",
    "cuerpo": "Si compras o te traspasan una clínica que ya funcionaba, no des por buena la licencia sin revisarla. Hay que comprobar que la actividad que figura es la que se ejerce de verdad, que las instalaciones están al día y que el local cumple lo que se exige hoy en accesibilidad, ventilación y electricidad. Con esa revisión sabrás antes de pagar el traspaso si bastará con comunicar el cambio de titular o si habrá que adaptar el local. Tampoco conviene olvidar que la autorización sanitaria de la Junta es un trámite aparte, que también debe actualizarse en la parte que corresponda al nuevo titular. Nosotros revisamos lo técnico y municipal, y coordinamos con quien lleve el trámite sanitario."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de clínica en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Clínicas y consultas sanitarias"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de clínica en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Abrimos tu clínica dental, de fisioterapia, consulta médica, de psicología o de podología con la parte técnica resuelta: visita al local, proyecto, obra, certificado final y presentación en el Ayuntamiento de Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Abrir una clínica en Almería exige dos caminos distintos que conviene llevar a la vez: la licencia de actividad del Ayuntamiento y la autorización sanitaria de la Junta de Andalucía. No son el mismo trámite ni lo resuelve el mismo técnico, y confundirlos es la causa más habitual de retrasos y de alquileres firmados demasiado pronto. Nosotros nos ocupamos del primero y de toda la parte técnica del local, y la coordinamos con el segundo para que ninguno bloquee al otro."}</p>
          <p>{"Somos una oficina técnica de ingeniería con un ingeniero técnico industrial colegiado desde 1983. Visitamos el local antes de que firmes, te decimos si es viable para tu tipo de clínica y, si lo es, redactamos y firmamos el proyecto, dirigimos la obra de adecuación cuando procede, emitimos el certificado final y lo presentamos por la sede electrónica con firma FNMT. El estudio previo es gratuito, el presupuesto es cerrado y respondemos en 24 horas. Trabajamos en la capital y en toda la provincia."}</p>
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
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Cuánto cuesta una licencia de actividad en Almería"}</Link></li>
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
