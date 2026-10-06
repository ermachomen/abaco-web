import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasaciones-nijar";

export const metadata: Metadata = {
  title: "Tasaciones en Níjar | Invernaderos, fincas y viviendas",
  description: "Tasaciones en Níjar: invernaderos, fincas, cortijos, viviendas y naves del municipio. Informe de ingeniero colegiado para herencia, Hacienda y daños.",
  keywords: ["tasaciones en Níjar","tasador Níjar","tasación de invernadero Níjar","tasación finca Campo de Níjar","tasación vivienda Níjar herencia","valoración de cortijo Níjar","tasación de naves en Níjar","perito de daños invernadero Níjar","tasación pericial contradictoria Níjar","ingeniero tasador Níjar"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasaciones-nijar",
    siteName: "Abaco Ingeniería",
    title: "Tasaciones en Níjar: invernaderos, fincas y viviendas",
    description: "Tasaciones en Níjar: invernaderos, fincas, cortijos, viviendas y naves del municipio. Informe de ingeniero colegiado para herencia, Hacienda y daños.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasaciones en Níjar: invernaderos, fincas, cortijos y viviendas – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasaciones en Níjar: invernaderos, fincas y viviendas", description: "Tasaciones en Níjar: invernaderos, fincas, cortijos, viviendas y naves del municipio. Informe de ingeniero colegiado para herencia, Hacienda y daños.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasaciones en Níjar: invernaderos, fincas, cortijos y viviendas",
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
    { "@type": "City", name: "Níjar" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/tasaciones-nijar",
  description: "Tasaciones en Níjar: invernaderos, fincas, cortijos, viviendas y naves del municipio. Informe de ingeniero colegiado para herencia, Hacienda y daños.",
};

const faqs = [
  {
    "q": "¿Cómo se hace la tasación de un invernadero en Níjar?",
    "a": "Visitamos la explotación y valoramos por partes: estructura y cubierta por coste de reposición menos depreciación, instalaciones de riego, cabezal y balsa de la misma forma, y el suelo enarenado y la tierra por comparación o por rentas. La edad y el estado de cada elemento influyen, y la disponibilidad de agua pesa mucho en el valor. La medición presencial es imprescindible."
  },
  {
    "q": "¿Tasáis cortijos y fincas dentro del Parque Natural Cabo de Gata-Níjar?",
    "a": "Sí. En esas fincas la protección del entorno y el régimen urbanístico condicionan el valor, así que los comprobamos en cada caso con la documentación que aportes y con la inspección. No damos nada por supuesto: el informe indica qué se ha verificado y con qué base se ha fijado la valoración del cortijo o de la vivienda rural."
  },
  {
    "q": "¿Qué documentación necesito para tasar una vivienda o una finca en Níjar?",
    "a": "Ayuda tener la referencia catastral, la escritura o la nota simple y, en fincas, los datos del pozo, la balsa o el contrato de arrendamiento. No hace falta aportarlo todo para empezar: con lo que tengas hacemos el estudio previo gratuito y te decimos qué falta antes de cerrar el presupuesto, sin compromiso alguno por tu parte."
  },
  {
    "q": "¿Sirve la tasación para una herencia con bienes en varios núcleos de Níjar?",
    "a": "Sí, es un uso muy frecuente. El informe fija un valor técnico de cada finca, invernadero, vivienda o local, aunque estén en núcleos distintos, para que los herederos puedan formar lotes y calcular compensaciones con criterios objetivos. Lo firma un ingeniero colegiado y puede presentarse ante notario, Hacienda o juzgado."
  },
  {
    "q": "¿Qué hago si Hacienda ha comprobado el valor de mi inmueble en Níjar?",
    "a": "Puedes aportar un informe técnico motivado que sostenga el valor que declaraste y, en su caso, promover la tasación pericial contradictoria que regula la Ley General Tributaria. Hay que actuar dentro del plazo de la notificación, así que envíanos la comunicación recibida cuanto antes y te orientamos sobre el siguiente paso."
  },
  {
    "q": "¿Os desplazáis a Las Negras, Agua Amarga o Campohermoso?",
    "a": "Sí. Tenemos la oficina en Almería capital y nos desplazamos a todo el término de Níjar, desde el casco hasta San Isidro, Campohermoso, Rodalquilar, Las Negras o Agua Amarga. Coordinamos la visita contigo y entregamos el informe con firma digital FNMT, con una respuesta inicial en menos de 24 horas."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasaciones", item: "https://www.ingenierial.es/tasaciones" },
    { "@type": "ListItem", position: 3, name: "Tasaciones en Níjar: invernaderos, fincas, cortijos y viviendas", item: "https://www.ingenierial.es/tasaciones-nijar" },
  ],
};

const bloques = [
  {
    "titulo": "Invernaderos y fincas del Campo de Níjar",
    "cuerpo": "En el Campo de Níjar, con núcleos como San Isidro, Campohermoso, Atochares, Los Grillos o Fernán Pérez, el invernadero es el bien más habitual. Lo valoramos por partes: estructura (parral, raspa y amagado o multitúnel), cubierta, ventilación, mallas, instalaciones de riego y cabezal de fertirrigación, balsa o depósito y suelo enarenado. La antigüedad y el estado de conservación de cada elemento pesan mucho en el resultado, igual que la disponibilidad de agua de la finca. Si la explotación está arrendada o en producción, valoramos también por capitalización de rentas. En fincas de secano, atendemos al suelo, a las plantaciones y a las construcciones agrarias que tengan."
  },
  {
    "titulo": "Cortijos y viviendas rurales en el parque y la costa",
    "cuerpo": "Parte del término de Níjar está dentro del Parque Natural Cabo de Gata-Níjar, y en la zona de costa conviven cortijos, casas rurales y viviendas de uso turístico cerca de Las Negras, Agua Amarga o Rodalquilar. La protección del entorno y el régimen urbanístico de cada finca condicionan su valor, por lo que los comprobamos en cada caso antes de fijar una cifra, sin dar nada por supuesto. En la valoración de un cortijo revisamos superficie construida y de parcela, estado de la edificación, reformas, acceso, suministros y situación registral y catastral que nos aportes. Cada inmueble se trata de forma individual, porque no hay dos iguales."
  },
  {
    "titulo": "Viviendas, locales y naves en los núcleos",
    "cuerpo": "Además del campo, el término tiene una actividad urbana repartida entre Níjar, San José, Pueblo Blanco y otros núcleos. Tasamos viviendas, locales comerciales, naves y almacenes, así como solares, comprobando superficie, estado, antigüedad, uso y documentación. Para una vivienda o un local valoramos con frecuencia por comparación con operaciones de la zona cuando hay datos fiables, y por coste de reposición depreciado cuando se trata de naves o construcciones singulares. También valoramos la maquinaria y los equipos de manipulado o de cámara frigorífica que forman parte de un almacén. El informe deja constancia de las mediciones y de las fotografías que respaldan cada partida."
  },
  {
    "titulo": "Herencias, divorcios y Hacienda",
    "cuerpo": "Es habitual que una familia de Níjar herede fincas, un invernadero y una casa en núcleos distintos, y que haya que repartirlo con un valor técnico que nadie discuta. Valoramos cada bien por separado para formar lotes, compensar diferencias en un divorcio o resolver un proindiviso entre hermanos. Si Hacienda te notifica una comprobación de valor que consideras excesiva, preparamos el dictamen técnico que sostiene tu valor y, si procede, la tasación pericial contradictoria prevista en la Ley General Tributaria. Conviene actuar dentro del plazo de la notificación, así que envíanos cuanto antes la comunicación recibida para orientarte sobre el siguiente paso."
  },
  {
    "titulo": "Daños por temporal y contraperitaje",
    "cuerpo": "Un temporal, un episodio de viento fuerte o una granizada pueden dejar un invernadero con la cubierta rota, la estructura deformada o las instalaciones inutilizadas, y también dañar cortijos, naves o cubiertas. Peritamos los daños: separamos lo ocurrido en el siniestro del desgaste previo, medimos y valoramos la reposición, para que puedas reclamar a la aseguradora o a un tercero. Si la compañía ya te ha presentado la valoración de su perito, actuamos como perito de parte conforme a la Ley de Contrato de Seguro y revisamos partida por partida qué superficie falta, qué se ha depreciado en exceso y qué daños no se han recogido."
  },
  {
    "titulo": "Cómo trabajamos y el informe",
    "cuerpo": "Empezamos con un estudio previo gratuito y un presupuesto cerrado. Después visitamos el bien, medimos y, si aportas la documentación, comprobamos catastro y registro. El método concreto depende del encargo: coste de reposición depreciado en construcciones e instalaciones, comparación con operaciones de la zona cuando existen datos y capitalización de rentas cuando hay arrendamiento o producción. Todo se justifica en el informe, que entregamos con firma digital FNMT, con fotografías y mediciones que lo respaldan. Respondemos en menos de 24 horas, y coordinamos la visita contigo aunque el bien esté en un núcleo alejado de la carretera principal, algo habitual en un término tan extenso."
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
          <li aria-current="page" className="text-slate-700">{"Tasaciones en Níjar: invernaderos, fincas, cortijos y viviendas"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Tasador en Níjar y su término"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Tasaciones en Níjar: invernaderos, fincas, cortijos y viviendas"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoración pericial de invernaderos, fincas, cortijos, viviendas, locales y naves en todo el término de Níjar, firmada por ingeniero técnico industrial colegiado desde 1983. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Las tasaciones en Níjar tienen una dificultad que no aparece en otros municipios: el término es enorme y sus núcleos están muy separados entre sí. No se valora igual un invernadero en Campohermoso o San Isidro que un cortijo cerca de Rodalquilar, una vivienda en Las Negras o un local en el casco de Níjar. En Abaco Ingeniería hacemos de tasador en Níjar con visita presencial a cada bien: medimos, inspeccionamos y redactamos un informe pericial firmado por ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de trayectoria en la provincia de Almería."}</p>
          <p>{"El encargo suele responder a una necesidad concreta: repartir una herencia con fincas y casas en distintos núcleos, liquidar bienes en un divorcio, contestar una comprobación de valor de Hacienda, aportar un informe a un procedimiento judicial o reclamar a la aseguradora tras un temporal. Por eso el informe indica qué método se ha usado y qué datos lo sostienen, de modo que pueda defenderse ante la Administración, la otra parte o el juzgado. Nuestra oficina está en Almería capital y nos desplazamos hasta donde esté el bien."}</p>
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
          <li>·{" "}<Link href="/tasacion-agricola-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación de invernaderos y fincas rústicas"}</Link></li>
          <li>·{" "}<Link href="/perito-danos-invernadero-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de daños en invernaderos"}</Link></li>
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">{"Tasaciones periciales en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación para herencias y divorcios"}</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación pericial contradictoria"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-nijar" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Níjar"}</Link></li>
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
