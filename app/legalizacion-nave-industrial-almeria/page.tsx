import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-almeria";

export const metadata: Metadata = {
  title: "Legalizar Nave Industrial en Almería · Ingeniero Colegiado",
  description: "Legalizar nave industrial en Almería: obra sin licencia, asimilado a fuera de ordenación, licencia de actividad e instalaciones. Ingeniero colegiado.",
  keywords: ["legalizar nave industrial en Almería","legalización de nave industrial Almería","legalizar nave sin licencia Almería","asimilado a fuera de ordenación nave","regularizar nave industrial","legalización de almacén Almería","legalizar taller Almería","art. 173 LISTA asimilado fuera de ordenación","licencia de actividad nave Almería","ingeniero legalización nave Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Almería",
    description: "Legalizar nave industrial en Almería: obra sin licencia, asimilado a fuera de ordenación, licencia de actividad e instalaciones. Ingeniero colegiado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalizar nave industrial en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Almería", description: "Legalizar nave industrial en Almería: obra sin licencia, asimilado a fuera de ordenación, licencia de actividad e instalaciones. Ingeniero colegiado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalizar nave industrial en Almería",
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
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-almeria",
  description: "Legalizar nave industrial en Almería: obra sin licencia, asimilado a fuera de ordenación, licencia de actividad e instalaciones. Ingeniero colegiado.",
};

const faqs = [
  {
    "q": "¿Se puede legalizar una nave industrial construida sin licencia en Almería?",
    "a": "Depende de su situación urbanística y de si ya ha transcurrido el plazo que fija la legislación urbanística para actuar contra la obra. Si encaja en el planeamiento, la vía es un proyecto de legalización con licencia. Si no encaja y ese plazo ha pasado, cabe solicitar el reconocimiento de asimilado a fuera de ordenación. Lo valoramos en un estudio previo gratuito, sin prometer resultados que no dependen de nosotros."
  },
  {
    "q": "¿Qué significa que una nave está asimilada a fuera de ordenación?",
    "a": "Según el artículo 173 de la LISTA, es la situación de las edificaciones irregulares terminadas respecto de las cuales ya no es posible adoptar medidas de protección de la legalidad urbanística por haber transcurrido el plazo para ello. El Ayuntamiento debe reconocerla mediante un procedimiento propio. Hasta que se resuelva, la edificación no puede acceder a servicios básicos ni hacer obras, salvo las que el Ayuntamiento ordene por seguridad."
  },
  {
    "q": "¿Cuánto tarda el reconocimiento de asimilado a fuera de ordenación?",
    "a": "La LISTA fija en seis meses el plazo máximo para que el Ayuntamiento resuelva, y si no hay resolución expresa la solicitud se entiende desestimada por silencio administrativo. Eso es el máximo legal, no una previsión: el tiempo real depende del Ayuntamiento y de los informes sectoriales que se exijan. Por eso presentamos el expediente completo desde el inicio, para evitar requerimientos que lo alarguen."
  },
  {
    "q": "¿Tengo que tramitar la licencia de actividad aunque la nave tenga obra legal?",
    "a": "Son cosas distintas. La licencia o autorización de la obra ampara la edificación, mientras que la actividad necesita su propio título, licencia o declaración responsable según el caso, para el uso concreto que se haga de la nave. Por eso revisamos en el diagnóstico si lo que consta en el Ayuntamiento corresponde a la actividad actual, y lo tramitamos si no es así."
  },
  {
    "q": "¿Cuánto cuesta legalizar una nave industrial?",
    "a": "No hay una cifra única: depende de la superficie, de si hay que levantar el estado real, de las actividades e instalaciones que existan y de la vía administrativa que corresponda. Tras el estudio previo gratuito te damos un presupuesto cerrado, desglosado por proyecto y tramitación. Las tasas municipales y los costes de posibles obras de adaptación no los fijamos nosotros y se suman aparte."
  },
  {
    "q": "¿Os desplazáis a polígonos y municipios de toda la provincia?",
    "a": "Sí. Trabajamos en Almería capital y sus polígonos, Huércal de Almería, Viator, Pechina, Benahadux, Níjar, El Ejido, Roquetas de Mar, Vícar, Huércal-Overa y Albox, entre otros. Nos desplazamos a medir la nave y recoger los datos, y el resto del expediente lo gestionamos con firma digital FNMT, de modo que la tramitación no exige que te desplaces."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalizar nave industrial en Almería", item: "https://www.ingenierial.es/legalizacion-nave-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Diagnóstico previo: qué consta y qué no",
    "cuerpo": "Antes de elegir vía hay que saber qué consta y qué no. Revisamos por separado la obra (si existe licencia y si lo construido coincide con ella), la actividad (si hay licencia o declaración responsable para el uso actual de la nave) y las instalaciones (si la eléctrica, la de protección contra incendios y las demás están proyectadas, certificadas y registradas). Pedimos la documentación que conserves, contrastamos catastro y realidad y medimos la nave en visita técnica. A menudo la obra está en regla y lo que falta es la actividad o el registro de instalaciones; otras veces ocurre al revés. El resultado es un diagnóstico escrito con lo que falta, la vía para cada capa y un presupuesto cerrado. Si algo no tiene salida, te lo decimos antes de que gastes en proyectos."
  },
  {
    "titulo": "Nave construida sin licencia o distinta de lo autorizado",
    "cuerpo": "Cuando la nave se levantó sin licencia, o se amplió, se cerró o se le añadió una entreplanta respecto a lo autorizado, la primera vía es legalizarla con licencia, siempre que el planeamiento del municipio lo permita. Para ello levantamos el estado real de la nave, redactamos el proyecto de legalización, comprobamos la seguridad estructural de lo ejecutado y justificamos el cumplimiento del planeamiento en ocupación, altura y retranqueos. Después se presenta la solicitud al Ayuntamiento y se atienden sus requerimientos. Si lo construido no encaja y ya ha transcurrido el plazo que fija la legislación urbanística para actuar contra la obra, la alternativa es el reconocimiento de asimilado a fuera de ordenación, que explicamos a continuación."
  },
  {
    "titulo": "Asimilado a fuera de ordenación (art. 173 LISTA)",
    "cuerpo": "El artículo 173 de la Ley 7/2021 (LISTA) dispone que las edificaciones irregulares terminadas, en cualquier clase de suelo y cualquiera que sea su uso, respecto de las cuales no resulte posible adoptar medidas de protección de la legalidad urbanística por haber transcurrido el plazo para su ejercicio, se encuentran en situación de asimilado a fuera de ordenación. Corresponde al Ayuntamiento tramitar y resolver el reconocimiento, con los informes sectoriales preceptivos. El plazo máximo para resolver es de seis meses y, sin resolución expresa, la solicitud se entiende desestimada por silencio. Hasta ese reconocimiento, la edificación no puede acceder a los servicios básicos ni realizar obra alguna, salvo las que ordene el Ayuntamiento por seguridad. Preparamos la documentación técnica de la solicitud."
  },
  {
    "titulo": "Licencia o declaración responsable de la actividad",
    "cuerpo": "Que la obra esté resuelta no basta: la actividad que se ejerce en la nave necesita su propio título ante el Ayuntamiento, ya sea licencia o declaración responsable. Cuál corresponde depende de la actividad concreta y del municipio, y lo determinamos en el estudio previo, sin darlo por supuesto. Redactamos el proyecto de actividad, que describe el uso, la maquinaria, las instalaciones, la protección contra incendios, la accesibilidad y las condiciones ambientales, y lo tramitamos por vía electrónica. Es el expediente habitual de talleres, almacenes, naves de logística, pequeña industria y centros de manipulado. Si ya tienes una licencia a nombre de un titular anterior o para otra actividad, revisamos si cubre lo que haces hoy."
  },
  {
    "titulo": "Instalaciones y registro industrial",
    "cuerpo": "La tercera capa es la seguridad industrial. La instalación eléctrica se proyecta y certifica conforme al Reglamento Electrotécnico de Baja Tensión (Real Decreto 842/2002). En protección contra incendios, el artículo 11 del Real Decreto 164/2025, que aprueba el reglamento de seguridad contra incendios en los establecimientos industriales, establece que para la puesta en servicio se comunica al órgano competente en industria de la comunidad autónoma, para su registro, el proyecto o memoria técnica y un certificado de técnico titulado competente que acredite que las instalaciones se ajustan al proyecto y cumplen las prescripciones reglamentarias. Si la nave tiene además frío industrial, climatización o alta tensión, se suman sus expedientes. Los coordinamos para que no se contradigan entre sí."
  },
  {
    "titulo": "Compraventa, alquiler y financiación con papeles pendientes",
    "cuerpo": "Una nave con la obra, la actividad o las instalaciones sin regularizar complica cualquier operación sobre ella. Quien compra, quien alquila o quien concede una financiación suele querer saber qué está autorizado y qué no, y las dudas sobre la documentación pueden alargar la negociación o condicionar las condiciones. Regularizar antes de vender o alquilar evita llegar a la firma con el problema abierto y te permite presentar un expediente ordenado. Si ya estás en una operación, hacemos un informe técnico del estado documental de la nave que sirva de base para decidir qué conviene resolver primero y qué puede pactarse con la otra parte. No prometemos plazos que dependen del Ayuntamiento, pero sí un calendario realista de nuestra parte."
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
            <Link href="/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/ingenieria-industrial-almeria" className="hover:text-slate-900">Ingeniería industrial</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Legalizar nave industrial en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Almería · Naves, almacenes y talleres"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalizar nave industrial en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Regularizamos tu nave industrial, almacén o taller en tres frentes: la obra, la actividad y las instalaciones. Estudio previo gratuito, presupuesto cerrado y tramitación ante Ayuntamiento y Junta de Andalucía."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Legalizar una nave industrial rara vez es un solo trámite. Una nave puede tener la obra en regla y no la actividad, o contar con licencia de actividad y no tener registradas sus instalaciones. Por eso la tratamos en tres capas: la edificación, la actividad que se ejerce dentro y las instalaciones de seguridad industrial. Cada una tiene su procedimiento, su administración y su documentación, y conviene resolverlas en orden y de forma coordinada para que los expedientes no se contradigan entre sí. Esta página se dirige a propietarios y arrendatarios de almacenes, talleres, naves logísticas y establecimientos industriales con papeles pendientes."}</p>
          <p>{"Somos Abaco Ingeniería, oficina técnica en Almería capital dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de ejercicio. Redactamos y firmamos los proyectos y certificados, dirigimos la obra cuando procede y tramitamos ante el Ayuntamiento y la Junta de Andalucía. Firmamos con certificado digital FNMT, nos desplazamos a medir la nave en toda la provincia y respondemos en menos de 24 horas. Si tu nave es agrícola, o necesitas proyectar una nueva, tenemos páginas específicas, enlazadas más abajo."}</p>
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
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-agricola-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de nave agrícola"}</Link></li>
          <li>·{" "}<Link href="/proyecto-electrico-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto eléctrico de nave industrial"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios"}</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Registro industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Almería"}</Link></li>
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
