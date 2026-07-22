import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-ingeniero-industrial-almeria";

export const metadata: Metadata = {
  title: "Perito Ingeniero Industrial en Almería · Colegiado 1983",
  description: "Perito ingeniero industrial en Almería: incendios de origen eléctrico, instalaciones BT/AT, maquinaria y accidentes. Colegiado desde 1983, de parte y judicial. 687 46 54 86.",
  keywords: ["perito ingeniero industrial almería","perito ingeniero técnico industrial almería","perito incendios eléctricos almería","perito causa y origen incendio almería","perito instalaciones eléctricas almería","perito maquinaria almería","perito industrial almería","perito de parte almería","perito judicial ingeniero almería","dictamen pericial ingeniería almería","perito eléctrico almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-ingeniero-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito ingeniero industrial en Almería",
    description: "Perito ingeniero industrial en Almería: incendios de origen eléctrico, instalaciones BT/AT, maquinaria y accidentes. Colegiado desde 1983, de parte y judicial. 687 46 54 86.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito ingeniero industrial en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito ingeniero industrial en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito ingeniero industrial en Almería",
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
  url: "https://www.ingenierial.es/perito-ingeniero-industrial-almeria",
  description: "Perito ingeniero industrial en Almería: incendios de origen eléctrico, instalaciones BT/AT, maquinaria y accidentes. Colegiado desde 1983, de parte y judicial. 687 46 54 86.",
};

const faqs = [
  {
    "q": "¿Qué diferencia a un perito ingeniero industrial de un perito generalista o de un directorio?",
    "a": "El ingeniero técnico industrial es el técnico competente en instalaciones eléctricas, mecánicas y térmicas, maquinaria e incendios de origen eléctrico, materias que quedan fuera del ámbito habitual de un arquitecto o de un perito generalista. Además, en Ábaco no te derivan a un nombre de una lista: el mismo ingeniero colegiado desde 1983 inspecciona, redacta y ratifica. Tratas con el autor del informe de principio a fin."
  },
  {
    "q": "¿Podéis determinar si un incendio tuvo origen eléctrico?",
    "a": "Sí, es una de nuestras especialidades. Analizamos el punto de inicio, el patrón de propagación y el estado de conductores, cuadros y protecciones, y contrastamos las hipótesis para concluir si la causa fue eléctrica (cortocircuito, sobrecarga, defecto de aislamiento o mala ejecución) u otra distinta. El dictamen sirve tanto para la reclamación al seguro como para depurar responsabilidades del instalador, del mantenedor o del fabricante."
  },
  {
    "q": "¿Trabajáis como perito de parte o como perito de designación judicial?",
    "a": "En ambos regímenes. Como perito de parte, tu abogado aporta nuestro informe con la demanda o la contestación al amparo del artículo 335 de la Ley de Enjuiciamiento Civil. Como perito de designación judicial, aceptamos el encargo del juzgado tras la insaculación de las listas colegiales y emitimos un dictamen imparcial. Cuéntanos tu caso y te decimos qué vía te conviene."
  },
  {
    "q": "¿Comparecéis a ratificar el informe en el juicio?",
    "a": "Sí. Acudimos a la vista para ratificar y explicar el dictamen ante el tribunal, responder al interrogatorio de las partes y, si procede, contrastar nuestras conclusiones con el perito contrario. La solvencia técnica en ese momento suele ser decisiva, por eso el informe lo defiende en sala el mismo ingeniero que lo ha redactado."
  },
  {
    "q": "¿Qué asuntos industriales peritáis con más frecuencia en Almería?",
    "a": "Incendios de causa eléctrica, defectos en instalaciones de baja y alta tensión, averías y vicios de maquinaria y equipos, fallos en climatización y cámaras frigoríficas, daños por sobretensiones y calidad de suministro, y accidentes con máquina o instalación. Es habitual en pleitos entre empresas, reclamaciones de garantía, siniestros de seguro y expedientes de la Administración en Almería capital y provincia."
  },
  {
    "q": "¿Atendéis online o hace falta desplazarse a Almería?",
    "a": "Las dos cosas. La documentación se remite por correo y se firma con certificado digital FNMT, con plena validez en toda España. La inspección de la instalación, la máquina o el lugar del siniestro y la posterior ratificación en sala son presenciales: nos desplazamos por Almería capital y provincia, y también a Granada, Málaga y Murcia. Antes de empezar hacemos un estudio previo gratuito y damos presupuesto cerrado."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Perito ingeniero industrial en Almería", item: "https://www.ingenierial.es/perito-ingeniero-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Incendios de origen eléctrico: causa, origen y responsabilidad",
    "cuerpo": "La investigación de causa y origen de un incendio en cuadros, líneas, motores o maquinaria es competencia propia del ingeniero industrial. Analizamos el foco, el patrón de propagación, los restos de conductores y protecciones, y descartamos o confirmamos el fallo eléctrico frente a otras hipótesis: sobrecarga, cortocircuito, defecto de aislamiento o mala ejecución. El dictamen sirve para reclamar a la aseguradora por el artículo 38 de la Ley de Contrato de Seguro y para depurar la responsabilidad del instalador, del mantenedor o del fabricante ante el juzgado."
  },
  {
    "titulo": "Instalaciones eléctricas de baja y alta tensión",
    "cuerpo": "Peritamos incidencias en instalaciones de baja tensión (REBT) y de alta tensión: defectos de ejecución, incumplimiento reglamentario, derivaciones, daños en equipos por sobretensiones o por calidad del suministro y discrepancias sobre boletines y certificados. Comprobamos si la instalación cumplía la normativa vigente en el momento de los hechos y relacionamos el defecto concreto con el daño reclamado, con criterio técnico verificable y no con apreciaciones genéricas que no resisten un contrainforme."
  },
  {
    "titulo": "Maquinaria, equipos y líneas de producción",
    "cuerpo": "Dictaminamos sobre averías, defectos de fabricación y vicios en maquinaria industrial y agroindustrial, cámaras frigoríficas, líneas de manipulado y climatización RITE. Determinamos si el fallo procede de un defecto de origen, de un mantenimiento deficiente o de un uso inadecuado, cuantificamos el lucro cesante por parada de producción y valoramos el coste de reparación o reposición. Es un peritaje habitual en pleitos entre empresas, con proveedores y en reclamaciones de garantía."
  },
  {
    "titulo": "Accidentes de instalación y siniestros industriales",
    "cuerpo": "Reconstruimos accidentes eléctricos y mecánicos y siniestros de instalaciones: electrocuciones, atrapamientos con máquina, explosiones, fugas y daños en naves e invernaderos. Establecemos la secuencia técnica de los hechos, el nexo causal y el cumplimiento o incumplimiento de la reglamentación de seguridad industrial aplicable. El informe da soporte técnico a procedimientos civiles, laborales y penales, y a la defensa frente a expedientes sancionadores de la Administración."
  },
  {
    "titulo": "Perito de parte, designación judicial y ratificación en sala",
    "cuerpo": "Como perito de parte reforzamos la posición de tu abogado con un dictamen sólido aportado al procedimiento. Como perito por designación judicial actuamos con la imparcialidad que exige la insaculación de las listas de los colegios profesionales. En ambos casos defendemos el informe en la ratificación en sala, ante el juez y en el careo con el perito contrario. Un ingeniero colegiado desde 1983 aporta a esa vista una autoridad técnica que un directorio de peritos no puede garantizar."
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
            <Link href="C:/Program Files/Git/peritaciones-judiciales" className="text-sm font-medium text-slate-600 hover:text-slate-900">Peritaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Perito ingeniero industrial en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Perito ingeniero industrial en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Dictámenes técnicos sobre instalaciones eléctricas, incendios de origen eléctrico, maquinaria y accidentes industriales. Perito de parte y de designación judicial, ingeniero técnico industrial colegiado desde 1983, con ratificación en sala en Almería capital y provincia."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Cuando el objeto del litigio es una instalación eléctrica, una máquina, una línea de producción o el origen de un incendio, quien debe dictaminar es un ingeniero, no un generalista de directorio. En Ábaco Ingeniería (marca abacoingeniería®) el informe lo firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años analizando instalaciones y equipos en Almería y en toda España. No somos un marketplace que te asigna un nombre sacado de una lista: tratas directamente con el perito que inspecciona, redacta el dictamen y lo defiende ante el juzgado. Estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
          <p>{"Actuamos en dos escenarios. Como perito de parte, elaboramos el informe que aporta tu abogado con la demanda o la contestación, conforme al artículo 335 de la Ley de Enjuiciamiento Civil. Como perito de designación judicial, aceptamos el nombramiento del juzgado y emitimos un dictamen imparcial por insaculación de las listas colegiales. En ambos casos comparecemos a ratificar el informe en sala, respondiendo al interrogatorio de las partes y del tribunal. La firma digital FNMT permite tramitar en remoto; la inspección y la vista son presenciales en Almería."}</p>
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
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales (ámbito nacional)</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">Perito de seguros en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización de protección contra incendios en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Oficina técnica de ingeniería industrial en Almería</Link></li>
          <li>·{" "}<Link href="/perito-humedades-vicios-ocultos-almeria" className="text-sky-700 underline hover:no-underline">Perito de humedades y vicios ocultos en Almería</Link></li>
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
