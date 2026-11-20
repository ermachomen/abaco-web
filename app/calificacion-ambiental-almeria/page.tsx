import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/calificacion-ambiental-almeria";

export const metadata: Metadata = {
  title: "Calificación ambiental en Almería: qué es y cuándo hace falta",
  description: "Calificación ambiental en Almería: qué actividades la necesitan (CA y CA-DR), análisis ambiental, plazo y relación con la licencia de obras y la utilización.",
  keywords: ["calificación ambiental en Almería","calificación ambiental Almería ayuntamiento","CA-DR calificación ambiental declaración responsable","análisis ambiental actividad Almería","actividades sometidas a calificación ambiental","Anexo I Ley 7/2007 GICA","calificación ambiental bar Almería","calificación ambiental gimnasio taller","licencia de actividad calificación ambiental"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/calificacion-ambiental-almeria",
    siteName: "Abaco Ingeniería",
    title: "Calificación ambiental en Almería: CA y CA-DR",
    description: "Calificación ambiental en Almería: qué actividades la necesitan (CA y CA-DR), análisis ambiental, plazo y relación con la licencia de obras y la utilización.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Calificación ambiental en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Calificación ambiental en Almería: CA y CA-DR", description: "Calificación ambiental en Almería: qué actividades la necesitan (CA y CA-DR), análisis ambiental, plazo y relación con la licencia de obras y la utilización.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calificación ambiental en Almería",
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
  url: "https://www.ingenierial.es/calificacion-ambiental-almeria",
  description: "Calificación ambiental en Almería: qué actividades la necesitan (CA y CA-DR), análisis ambiental, plazo y relación con la licencia de obras y la utilización.",
};

const faqs = [
  {
    "q": "¿Qué actividades necesitan calificación ambiental en Almería?",
    "a": "Las del Anexo I de la Ley 7/2007. Con calificación ambiental ordinaria (CA) están, entre otras, bares, restaurantes, cafeterías, pubs, discotecas, academias de baile, freidurías, gimnasios grandes y talleres o lavaderos de más de cierta superficie. Con calificación por declaración responsable (CA-DR) están gimnasios pequeños, talleres menores, carnicerías, pescaderías, lavanderías y droguerías, entre otras. Te decimos cuál es tu caso con la superficie construida real."
  },
  {
    "q": "¿Qué diferencia hay entre CA y CA-DR?",
    "a": "La CA es la calificación ambiental ordinaria, que resuelve el Ayuntamiento tras revisar la documentación. La CA-DR es la calificación ambiental mediante declaración responsable de los efectos ambientales. Para la calificación ambiental se presenta un análisis ambiental con el proyecto técnico, y la ley remite al reglamento los detalles de la CA-DR. Cuál se aplica depende de la actividad y de su superficie construida total o su capacidad, según el Anexo I."
  },
  {
    "q": "¿Cuánto tarda la calificación ambiental?",
    "a": "Con carácter general, el plazo máximo es de tres meses desde que la documentación está completa. Si el Ayuntamiento no resuelve en ese tiempo, la calificación no se entiende favorable. Por eso es importante presentar el expediente completo la primera vez y contar con ese plazo en el calendario de apertura, sobre todo si el alquiler ya corre. No podemos asegurar cuándo resolverá cada Ayuntamiento."
  },
  {
    "q": "¿Mi peluquería o mi oficina necesitan calificación ambiental?",
    "a": "No figuran en el Anexo I las peluquerías, los centros de estética, las oficinas, las academias de enseñanza salvo baile y danza, las clínicas dentales ni las tiendas de ropa. Esas actividades no pasan por calificación ambiental, pero siguen sujetas al trámite municipal que corresponda y a las normas de seguridad, accesibilidad e instalaciones. Lo confirmamos en la visita al local."
  },
  {
    "q": "¿Qué es el análisis ambiental y quién lo redacta?",
    "a": "Es la documentación complementaria del proyecto técnico que exige la ley para valorar los efectos ambientales de la actividad. Nosotros lo preparamos junto al proyecto de actividad, incluido el estudio acústico previo que pide la ordenanza de Almería, de forma que el expediente llegue completo a la sede electrónica del Ayuntamiento."
  },
  {
    "q": "¿La calificación ambiental sustituye a la licencia de obras?",
    "a": "No. En Almería capital la ordenanza integra la calificación ambiental en la licencia de obras, y después se necesitan la licencia de utilización y la declaración responsable de inicio. Son pasos distintos que se encadenan. Si hay obras, también el certificado final. Te ordenamos los pasos según tu local y tu actividad, y los presentamos con firma digital FNMT."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Calificación ambiental en Almería", item: "https://www.ingenierial.es/calificacion-ambiental-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué es y quién la resuelve",
    "cuerpo": "La calificación ambiental es el pronunciamiento del Ayuntamiento sobre los efectos ambientales de una actividad. La Ley 7/2007 distingue dos vías: la CA, que es la calificación ambiental ordinaria, y la CA-DR, calificación ambiental mediante declaración responsable de los efectos ambientales, para otras actividades del Anexo I. Para la calificación ambiental hay que presentar un análisis ambiental como documentación complementaria del proyecto técnico; los supuestos y la forma concreta de la CA-DR los remite la ley al reglamento. Una calificación favorable es requisito para la licencia municipal, y cuando la actividad se inicia con declaración responsable, la calificación se resuelve antes. No la confundas con la licencia de obras ni con la licencia de utilización: son trámites distintos que se encadenan."
  },
  {
    "titulo": "Actividades que necesitan CA",
    "cuerpo": "Están sometidos a calificación ambiental ordinaria (CA), entre otros, los restaurantes, cafeterías, pubs y bares; las discotecas y salas de fiesta; las academias de baile y danza; los gimnasios con capacidad de 150 personas o más o de más de 500 m² construidos; las freidurías, asadores, hamburgueserías y comidas preparadas; los talleres de reparación de vehículos de más de 250 m²; los talleres de carpintería metálica o de madera de más de 300 m²; y el lavado de vehículos de más de 300 m². Las superficies del Anexo I son construidas totales, no útiles. Es un detalle que cambia el resultado en locales justos, y por eso conviene medir bien."
  },
  {
    "titulo": "Actividades que van por CA-DR",
    "cuerpo": "Se tramitan como CA-DR, calificación ambiental mediante declaración responsable, los gimnasios con capacidad inferior a 150 personas o de 500 m² o menos; los talleres de reparación de vehículos de 250 m² o menos; las carnicerías, pescaderías, fruterías, tiendas de congelados y tiendas de pan y pastelería al por menor de menos de 750 m²; las tintorerías y lavanderías de menos de 750 m²; las droguerías y perfumerías al por menor de menos de 750 m²; y los establecimientos de venta de animales. De nuevo cuenta la superficie construida total. Y no todo comercio de alimentación entra aquí: una tienda de ropa, por ejemplo, no figura en el Anexo I."
  },
  {
    "titulo": "Qué no necesita calificación ambiental",
    "cuerpo": "No figuran en el Anexo I las peluquerías, los centros de estética, las oficinas, las academias de enseñanza (salvo baile y danza), las clínicas dentales ni las tiendas de ropa. Eso no significa que no tengan que cumplir nada: siguen sujetas a la declaración responsable u otro trámite del Ayuntamiento, a la normativa de seguridad, accesibilidad e instalaciones, y a las demás autorizaciones que apliquen. Solo quedan fuera de la calificación ambiental. Si tu actividad no aparece en estas listas y tienes dudas, la comprobamos contra el texto de la ley antes de decirte nada, porque un error aquí retrasa la apertura."
  },
  {
    "titulo": "Plazo y análisis ambiental",
    "cuerpo": "Con carácter general, la calificación ambiental se resuelve en un plazo máximo de tres meses desde que la documentación está completa. Y si no se resuelve en ese plazo, no se entiende favorable: no puedes dar por buena la calificación por silencio. Por eso conviene presentar completo desde el primer día. El análisis ambiental forma parte de la documentación y lo redactamos junto al proyecto de actividad, que justifica urbanismo, accesibilidad, incendios (aforo, evacuación y alumbrado de emergencia, según el Código Técnico de la Edificación), ruido y vibraciones con estudio acústico previo, climatización conforme al RITE e instalaciones. No prometemos resultado: es el Ayuntamiento quien resuelve."
  },
  {
    "titulo": "Cómo encaja con la licencia de obras",
    "cuerpo": "En Almería capital, la ordenanza de apertura integra la calificación ambiental en la licencia de obras. Después vienen la licencia de utilización y la declaración responsable de inicio de la actividad. Si no hay obras y la actividad está calificada, la declaración responsable se acompaña de la calificación ambiental, que se obtiene previa licencia de utilización, y del certificado de puesta en marcha del técnico director. Con obras, se presentan la licencia urbanística y el certificado final de obra. En el resto de municipios de la provincia manda la ordenanza de cada ayuntamiento, y la consultamos antes de decirte el orden de los pasos."
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
          <li aria-current="page" className="text-slate-700">{"Calificación ambiental en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Calificación ambiental de actividades"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Calificación ambiental en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Si tu actividad figura en el Anexo I de la ley ambiental andaluza, necesitas calificación ambiental antes de abrir. Te explicamos cuándo, con qué documentación y cómo se encaja con la licencia de obras en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La calificación ambiental es el control municipal de los efectos ambientales que una actividad puede causar en su entorno. En Andalucía la regula la Ley 7/2007 de Gestión Integrada de la Calidad Ambiental (GICA), y se aplica a las actividades del Anexo I. No es un trámite que afecte a todos los negocios: una oficina, una peluquería o una tienda de ropa no figuran en ese anexo. Pero a quien monta un bar, un gimnasio, un taller o una carnicería le condiciona el calendario entero de la apertura, porque debe estar resuelta antes de poder abrir. Esta página explica cuándo se exige y cómo se prepara."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Redactamos el proyecto de actividad y el análisis ambiental que exige la ley, dirigimos la adecuación del local, firmamos el certificado final y presentamos el expediente en la sede electrónica del Ayuntamiento con firma digital FNMT. Visitamos el local antes de que firmes el alquiler, para que sepas si la actividad que quieres montar necesita calificación y qué obras te harán falta. Presupuesto cerrado antes de empezar y respuesta en 24 horas. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al local."}</p>
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
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Declaración responsable de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de bar y restaurante en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
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
