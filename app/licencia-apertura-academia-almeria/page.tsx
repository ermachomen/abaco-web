import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-academia-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de academia en Almería",
  description: "Licencia de apertura de academia en Almería: idiomas, refuerzo, oposiciones y formación. Visitamos el local, redactamos la documentación y la presentamos.",
  keywords: ["licencia de apertura de academia en Almería","abrir una academia en Almería","licencia academia de idiomas Almería","licencia academia de oposiciones","licencia academia de refuerzo escolar","licencia academia de baile Almería","declaración responsable academia Almería","proyecto de actividad academia","legalizar academia Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-academia-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de academia en Almería",
    description: "Licencia de apertura de academia en Almería: idiomas, refuerzo, oposiciones y formación. Visitamos el local, redactamos la documentación y la presentamos.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de academia en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de academia en Almería", description: "Licencia de apertura de academia en Almería: idiomas, refuerzo, oposiciones y formación. Visitamos el local, redactamos la documentación y la presentamos.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de academia en Almería",
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
  url: "https://www.ingenierial.es/licencia-apertura-academia-almeria",
  description: "Licencia de apertura de academia en Almería: idiomas, refuerzo, oposiciones y formación. Visitamos el local, redactamos la documentación y la presentamos.",
};

const faqs = [
  {
    "q": "¿Necesita licencia una academia de idiomas en Almería?",
    "a": "En Almería capital la regla general es la declaración responsable, no la licencia previa. La licencia se reserva a casos concretos, como modificar una actividad que ya tenía licencia de apertura. Además, la Ley 12/2012 sustituye la licencia por declaración responsable o comunicación previa en la enseñanza de idiomas dentro de sus límites de superficie. Lo confirmamos con el local y la actividad delante."
  },
  {
    "q": "¿Una academia de baile necesita calificación ambiental?",
    "a": "Sí. Las academias de baile y danza figuran en el Anexo I de la Ley 7/2007 y requieren calificación ambiental (CA). Hay que presentar un análisis ambiental con el proyecto técnico, y el plazo máximo de resolución es de tres meses desde que la documentación está completa. Si no se resuelve en ese plazo, no se entiende favorable. Preparamos el análisis y el proyecto juntos para no perder tiempo."
  },
  {
    "q": "¿Cuántos alumnos caben en mi academia?",
    "a": "Depende de la superficie de cada aula, del número de salidas y del recorrido de evacuación, que se calculan con el Código Técnico de la Edificación. No damos una cifra sin ver los planos del local. En la visita medimos, calculamos el aforo real y te decimos cuántas aulas puedes montar y qué obra necesitarías para ganar capacidad si el local se queda corto."
  },
  {
    "q": "¿Qué documentos piden para presentar la declaración responsable?",
    "a": "Piden el modelo normalizado, el NIF o CIF, el justificante de la tasa, la referencia catastral, el alta en el IAE y los datos del técnico. Con obras, la licencia urbanística y el certificado final. Sin obras, el proyecto técnico de actividad, el certificado de ajuste al proyecto y fotografías. Nosotros reunimos la parte técnica y la presentamos en la sede electrónica."
  },
  {
    "q": "¿Puedo dar clases desde el día en que presento la declaración?",
    "a": "Puedes empezar desde el día de presentación o desde la fecha que indiques en ella, siempre que no pase de tres meses. Eso sí, la declaración se presenta con las obras e instalaciones terminadas y con las licencias urbanísticas que procedan. Y debes tener expuesta en el local la copia sellada o el recibo del registro electrónico."
  },
  {
    "q": "¿Qué ocurre si el Ayuntamiento revisa mi academia después de abrir?",
    "a": "El Ayuntamiento puede pedirte la documentación declarada y visitar el local. Si encuentra que falta algo, te da diez días para subsanarlo. Si hay defectos esenciales que no se corrigen, puede ordenar el cese de la actividad. Por eso conviene presentar el expediente completo y con el certificado final firmado, y tener el proyecto a mano en el local."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de academia en Almería", item: "https://www.ingenierial.es/licencia-apertura-academia-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué trámite necesita una academia",
    "cuerpo": "En Almería capital, la ordenanza de apertura de establecimientos fija como regla general la declaración responsable para las actividades que se implantan o se reforman. La licencia previa queda para casos concretos, entre ellos las modificaciones de actividades que ya tenían licencia de apertura. A esto se suma la Ley 12/2012, que impide exigir licencia previa de actividad a los servicios de su anexo en establecimientos permanentes de hasta 750 m² de superficie útil de exposición y venta, y en ese anexo figuran la enseñanza de formación y otras actividades de enseñanza, como los idiomas. Quedan fuera las actividades con impacto en el patrimonio histórico-artístico o en el dominio público. Revisamos tu caso concreto antes de decidir cómo se presenta."
  },
  {
    "titulo": "Calificación ambiental: cuándo afecta a una academia",
    "cuerpo": "Las academias de enseñanza no figuran en el Anexo I de la Ley 7/2007, de Gestión Integrada de la Calidad Ambiental de Andalucía, así que una academia de idiomas, de refuerzo escolar o de oposiciones no pasa por calificación ambiental. La excepción son las academias de baile y danza, que sí están en el Anexo I y necesitan calificación ambiental (CA). En ese caso hay que presentar un análisis ambiental junto al proyecto técnico, y la calificación se resuelve en un plazo máximo de tres meses desde que la documentación está completa. Si no se resuelve en ese plazo, no se entiende favorable. Si tu academia mezcla clases teóricas y baile, lo vemos desde el principio."
  },
  {
    "titulo": "Aulas, aforo y evacuación",
    "cuerpo": "Es el punto central del proyecto de una academia. El aforo se calcula con el Código Técnico de la Edificación (Real Decreto 314/2006) y de él dependen el número de salidas, el ancho de puertas y pasillos, el sentido de apertura de las puertas y el alumbrado de emergencia. Un local con aulas pequeñas y un solo recorrido hacia la calle puede quedarse corto aunque a la vista parezca amplio. Por eso estudiamos los planos y medimos el local antes de que firmes, y te decimos cuántas aulas caben de verdad y con qué obra. La memoria del proyecto justifica la evacuación y los medios de protección contra incendios que corresponden a la actividad."
  },
  {
    "titulo": "Accesibilidad, aseos y ruido entre aulas",
    "cuerpo": "La memoria del proyecto justifica la accesibilidad del local: acceso desde la calle, recorridos, aseos adaptados y puertas. En un bajo comercial suele resolverse bien; en una primera planta o un local con escalón, puede exigir obra. Aparte está el ruido. Dos aulas contiguas con clases a la vez, una sala de conversación en idiomas o un local pegado a una vivienda necesitan aislamiento, y la ordenanza pide un estudio acústico previo dentro del proyecto. Completan el trabajo la ventilación y la climatización, con el RITE (Real Decreto 1027/2007), y la instalación eléctrica, conforme al REBT (Real Decreto 842/2002), pensada para ordenadores, proyectores y aire acondicionado."
  },
  {
    "titulo": "Qué documentación se presenta",
    "cuerpo": "La declaración responsable lleva el modelo normalizado, el NIF o CIF y la representación, el justificante de pago de la tasa, la referencia catastral (con el recibo del IBI), el alta en el epígrafe del IAE y el nombre y la titulación del técnico. Si hay obras, se añaden la licencia urbanística y el certificado final de obra. Si no hay obras, se aporta el proyecto técnico de actividad, el certificado de ajuste al proyecto y fotografías del local. La declaración se presenta con las obras e instalaciones terminadas y no te exime de otras licencias o autorizaciones que apliquen. Nos ocupamos de reunir y presentar todo con firma digital FNMT."
  },
  {
    "titulo": "Abrir, revisiones posteriores y traspasos",
    "cuerpo": "Presentada la declaración responsable puedes empezar a dar clases desde ese día o desde la fecha que indiques, que no puede ir más allá de tres meses. La copia sellada o el recibo del registro electrónico debe estar expuesta en el local. Después, el Ayuntamiento puede pedir la documentación declarada y visitar el local; si falta algo, concede diez días para subsanar, y ante defectos esenciales no corregidos puede ordenar el cese. La licencia caduca si la actividad se suspende o cesa más de un año. Si coges una academia en traspaso, el cambio de titularidad lo comunican el antiguo y el nuevo titular; si no, responden ambos. En otros municipios de la provincia rige la ordenanza de cada ayuntamiento."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de academia en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Academias y centros de formación"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de academia en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Si vas a abrir una academia de idiomas, refuerzo, oposiciones o formación en Almería, visitamos el local antes de que firmes el alquiler, redactamos la documentación técnica y la presentamos en la sede electrónica del Ayuntamiento."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Una academia parece una actividad sencilla, pero el local tiene que acoger a mucha gente a la vez en espacios pequeños. Las aulas, el aforo, las puertas de salida, el alumbrado de emergencia, los aseos y el acceso para personas con movilidad reducida son los puntos donde suelen aparecer los problemas, sobre todo cuando el local fue antes una tienda, una oficina o una vivienda. Esta página te explica qué trámite suele corresponder a una academia en Almería, qué conviene mirar antes de alquilar y cómo ordenamos el proceso para que abras con la documentación en regla y sin sorpresas con el Ayuntamiento."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Redactamos el proyecto de actividad o la documentación técnica, dirigimos la adecuación del local si hace falta obra, firmamos el certificado final y presentamos el expediente en la sede electrónica del Ayuntamiento con firma digital FNMT. Antes de que firmes el alquiler visitamos el local y te contamos qué tiene y qué le falta. Te damos un presupuesto cerrado antes de empezar y respondemos en 24 horas. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al local para verlo con la actividad que tienes en mente."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura y actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-apertura-negocios-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura por tipo de negocio"}</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Declaración responsable de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/calificacion-ambiental-almeria" className="text-sky-700 underline hover:no-underline">{"Calificación ambiental en Almería"}</Link></li>
          <li>·{" "}<Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Cambio de titularidad de la licencia"}</Link></li>
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
