import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-agricola-almeria";

export const metadata: Metadata = {
  title: "Tasación de invernaderos en Almería | Fincas y maquinaria",
  description: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola. Informe de ingeniero colegiado para herencia, Hacienda y daños. Presupuesto fijo.",
  keywords: ["tasación de invernaderos en Almería","tasación de fincas rústicas Almería","tasador agrícola Almería","tasación agrícola El Ejido","valoración de invernadero","peritación de daños en invernadero","tasación de maquinaria agrícola","contraperitaje invernadero granizo","tasación finca herencia Almería","ingeniero tasador Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-agricola-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación de invernaderos, fincas y maquinaria en Almería",
    description: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola. Informe de ingeniero colegiado para herencia, Hacienda y daños. Presupuesto fijo.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación de invernaderos, fincas y maquinaria en Almería", description: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola. Informe de ingeniero colegiado para herencia, Hacienda y daños. Presupuesto fijo.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola",
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
  url: "https://www.ingenierial.es/tasacion-agricola-almeria",
  description: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola. Informe de ingeniero colegiado para herencia, Hacienda y daños. Presupuesto fijo.",
};

const faqs = [
  {
    "q": "¿Cómo se tasa un invernadero en Almería?",
    "a": "Se valora por partes: la estructura y la cubierta por su coste de reposición menos la depreciación por antigüedad y estado, las instalaciones (riego, cabezal, balsa, ventilación) de la misma forma, y el suelo enarenado y la tierra por comparación o por rentas. Una visita presencial con medición es imprescindible para que el informe sea fiable."
  },
  {
    "q": "¿Podéis valorar los daños de mi invernadero tras un temporal o granizo?",
    "a": "Sí. Inspeccionamos el invernadero, separamos los daños del siniestro del desgaste previo y valoramos la reposición en un informe pericial. Con él puedes reclamar a la aseguradora o a un tercero. Si la compañía ya te ha ofrecido una cantidad, hacemos el contraperitaje para contrastar su valoración y detectar partidas omitidas."
  },
  {
    "q": "¿Qué documentación necesito para la tasación de una finca rústica?",
    "a": "Ayuda mucho tener la referencia catastral, la escritura o nota simple y, si existen, datos del pozo, la balsa o el contrato de arrendamiento. No es imprescindible aportarlo todo: con lo que tengas hacemos el estudio previo gratuito y te decimos qué falta antes de cerrar el presupuesto. Si no tienes la documentación a mano, no te preocupes."
  },
  {
    "q": "¿Sirve la tasación para una herencia o un divorcio con fincas e invernaderos?",
    "a": "Sí, es uno de los usos más habituales. El informe fija un valor técnico de cada finca, invernadero o máquina, de modo que los herederos o los cónyuges puedan formar lotes, calcular compensaciones y evitar discusiones sobre el precio. Lo firma un ingeniero colegiado y puede presentarse ante notario o juzgado."
  },
  {
    "q": "Hacienda ha comprobado el valor de mi finca y creo que es excesivo, ¿qué hago?",
    "a": "Puedes aportar un informe técnico motivado que sostenga el valor que declaraste y, en su caso, promover la tasación pericial contradictoria que regula la Ley General Tributaria. Conviene actuar dentro de los plazos de la notificación, así que no esperes y envíanos la comunicación recibida. Te orientamos sobre el siguiente paso sin compromiso."
  },
  {
    "q": "¿Os desplazáis a El Ejido, Níjar o el Almanzora?",
    "a": "Sí. Tenemos la oficina en Almería capital y nos desplazamos a toda la provincia: Poniente (El Ejido, Roquetas de Mar, Vícar, La Mojonera, Adra y Berja), Níjar, el valle del Almanzora y el resto de comarcas. La visita se coordina contigo y el informe se entrega con firma digital FNMT."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasaciones", item: "https://www.ingenierial.es/tasaciones" },
    { "@type": "ListItem", position: 3, name: "Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola", item: "https://www.ingenierial.es/tasacion-agricola-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Daños por temporal o granizo en invernaderos",
    "cuerpo": "Tras un temporal, una granizada o un episodio de viento fuerte, el invernadero puede quedar con la cubierta rota, la estructura deformada, mallas arrancadas o instalaciones inutilizadas. Realizamos la peritación de daños en invernadero: inspeccionamos lo ocurrido, distinguimos el daño nuevo del desgaste previo, medimos y valoramos la reposición. Con ese informe puedes reclamar a la aseguradora o a un tercero responsable. Si la compañía ya te ha presentado la valoración de su perito, hacemos el contraperitaje como perito de parte conforme a la Ley de Contrato de Seguro, revisando partida por partida dónde falta superficie, qué se ha depreciado en exceso y qué daños no se han recogido."
  },
  {
    "titulo": "Herencias, divorcios y Hacienda con bienes agrícolas",
    "cuerpo": "Las fincas, los invernaderos y la maquinaria forman buena parte del patrimonio de muchas familias almerienses, y cuando hay que repartirlo conviene tener un valor técnico y no discutido. Valoramos cada bien por separado para formar lotes en una herencia, liquidar bienes en un divorcio o resolver un proindiviso entre hermanos. Si Hacienda te comunica una comprobación de valor que consideras excesiva, elaboramos el dictamen técnico que sustenta tu valor y, si procede, la tasación pericial contradictoria prevista en la Ley General Tributaria. El informe distingue estructura, instalaciones, suelo y cultivo para que cada partida quede justificada. Si el reparto es entre hermanos, el informe permite adjudicar y compensar con criterios objetivos."
  },
  {
    "titulo": "Qué inspeccionamos en un invernadero",
    "cuerpo": "En la visita revisamos la estructura, sea tipo parral (raspa y amagado) o multitúnel: cimentación, postes, cables, anclajes y estado de la corrosión. Comprobamos la cubierta de plástico o malla y su antigüedad, la ventilación cenital y lateral, los sistemas de sombreo y la calefacción cuando existe. Valoramos las instalaciones de riego por goteo, el cabezal de fertirrigación, la balsa o el depósito y las mallas antiinsectos. Examinamos también el suelo enarenado y su estado. Toda la inspección queda reflejada con medición y fotografías, porque la edad y la conservación de cada elemento pesan en el cálculo del valor. Si algún elemento no es accesible o falta documentación, lo hacemos constar en el informe."
  },
  {
    "titulo": "Tasación de fincas rústicas en Almería",
    "cuerpo": "En la tasación de fincas rústicas en Almería valoramos el suelo, los cultivos y las plantaciones leñosas, y las construcciones agrarias: almacenes, casetas de riego y naves. La disponibilidad de agua influye mucho en el valor de una finca, por lo que la analizamos con especial atención en la inspección. La situación cambia según la zona: no es lo mismo una finca de regadío del Poniente que una de secano, olivar o almendro en el Almanzora. Por eso comprobamos la documentación catastral y registral que nos aportes, medimos sobre el terreno y adaptamos el método a cada finca en lugar de aplicar una fórmula única."
  },
  {
    "titulo": "Tasación de maquinaria agrícola y equipos",
    "cuerpo": "La tasación de maquinaria agrícola incluye tractores, atomizadores, cabezales de riego, cámaras frigoríficas y líneas de manipulado, tanto cuando se valoran de forma independiente como cuando forman parte de una explotación o de un negocio familiar. Revisamos marca, modelo, año, horas de uso, estado mecánico y conservación, y valoramos según su coste de reposición depreciado y, cuando existan datos fiables, por comparación con operaciones similares. Es un informe útil para una herencia, un reparto entre socios, una venta, una aportación a sociedad o la reclamación de un siniestro que haya afectado a equipos. Si buscas una valoración de otros bienes industriales, disponemos de un servicio específico."
  },
  {
    "titulo": "Método e informe pericial",
    "cuerpo": "Empezamos con un estudio previo gratuito y un presupuesto cerrado. Después hacemos la visita e inspección, medimos y, cuando aportas la documentación, comprobamos catastro y registro. Valoramos por coste de reposición depreciado en construcciones e instalaciones, por comparación con operaciones de la zona cuando hay datos y por capitalización de rentas cuando la finca está arrendada o en producción. El método concreto depende del encargo y se justifica en el informe. Lo entregamos con firma digital FNMT, redactado con claridad y con las fotografías y mediciones que lo respaldan. Nos desplazamos al Poniente (El Ejido, Roquetas, Vícar, La Mojonera, Adra, Berja), a Níjar y al Almanzora."
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
            <Link href="/tasaciones" className="text-sm font-medium text-slate-600 hover:text-slate-900">Tasaciones</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/tasaciones" className="hover:text-slate-900">Tasaciones</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Tasador agrícola en Almería"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Tasación de invernaderos en Almería, fincas rústicas y maquinaria agrícola"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoración pericial de invernaderos, fincas rústicas y maquinaria agrícola firmada por ingeniero técnico industrial colegiado desde 1983. Herencias, divorcios, Hacienda y daños por temporal. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La tasación de invernaderos en Almería es un trabajo técnico que no se resuelve con una cifra por hectárea. Un invernadero es a la vez estructura, cubierta, instalaciones y suelo enarenado, y su valor cambia mucho según la antigüedad, el estado de conservación y la disponibilidad de agua. En Abaco Ingeniería hacemos de tasador agrícola en toda la provincia: visitamos la explotación, medimos, inspeccionamos cada elemento y emitimos un informe pericial firmado por ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de trayectoria."}</p>
          <p>{"El encargo llega por motivos muy distintos: una herencia con fincas e invernaderos que repartir, un divorcio con bienes agrícolas que liquidar, una compraventa entre particulares, una aportación a una sociedad, una comprobación de valor de Hacienda con la que no estás de acuerdo o un siniestro por temporal o granizo que la aseguradora valora a la baja. En todos los casos el informe explica el método y los datos que lo sostienen, para que resista la revisión de la Administración, de la otra parte o del juzgado."}</p>
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
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">{"Tasaciones periciales en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación para herencias y divorcios"}</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación pericial contradictoria"}</Link></li>
          <li>·{" "}<Link href="/tasacion-maquinaria-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación de maquinaria"}</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de seguros y contraperitaje"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-agricola-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de nave agrícola"}</Link></li>
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
