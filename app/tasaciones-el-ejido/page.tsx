import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasaciones-el-ejido";

export const metadata: Metadata = {
  title: "Tasaciones en El Ejido | Invernaderos, fincas y viviendas",
  description: "Tasaciones en El Ejido por ingeniero colegiado: invernaderos, fincas, viviendas, locales y naves para herencias, Hacienda y daños. Presupuesto cerrado.",
  keywords: ["tasaciones en El Ejido","tasador El Ejido","tasación de invernadero El Ejido","tasación vivienda El Ejido herencia","perito tasador El Ejido","valoración de finca El Ejido","tasación de naves El Ejido","perito de daños invernadero El Ejido","tasación pericial contradictoria El Ejido"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasaciones-el-ejido",
    siteName: "Abaco Ingeniería",
    title: "Tasaciones en El Ejido: invernaderos, fincas y viviendas",
    description: "Tasaciones en El Ejido por ingeniero colegiado: invernaderos, fincas, viviendas, locales y naves para herencias, Hacienda y daños. Presupuesto cerrado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasaciones en El Ejido: invernaderos, fincas, viviendas y naves – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasaciones en El Ejido: invernaderos, fincas y viviendas", description: "Tasaciones en El Ejido por ingeniero colegiado: invernaderos, fincas, viviendas, locales y naves para herencias, Hacienda y daños. Presupuesto cerrado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasaciones en El Ejido: invernaderos, fincas, viviendas y naves",
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
    { "@type": "City", name: "El Ejido" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/tasaciones-el-ejido",
  description: "Tasaciones en El Ejido por ingeniero colegiado: invernaderos, fincas, viviendas, locales y naves para herencias, Hacienda y daños. Presupuesto cerrado.",
};

const faqs = [
  {
    "q": "¿Cuánto tarda una tasación en El Ejido?",
    "a": "Depende del tipo de bien y de la documentación disponible. Respondemos en menos de 24 horas con el estudio previo gratuito y, una vez aceptado el presupuesto cerrado, coordinamos la visita contigo. Un invernadero o una finca con varias construcciones requiere más medición que una vivienda. Al empezar te indicamos el plazo estimado para tu caso concreto, sin comprometer fechas que dependan de terceros."
  },
  {
    "q": "¿Cómo se hace la tasación de un invernadero en El Ejido?",
    "a": "Se valora por partes: estructura y cubierta por su coste de reposición menos la depreciación por antigüedad y estado, las instalaciones de riego, cabezal, balsa y ventilación de la misma forma, y el suelo enarenado y la tierra por comparación o por rentas. Hace falta una visita con medición, porque la corrosión, la edad de la cubierta y el estado de cada elemento condicionan el valor final."
  },
  {
    "q": "¿Hacéis la tasación de una vivienda en El Ejido por herencia?",
    "a": "Sí. Valoramos la vivienda, el local o la parcela que forman parte del caudal hereditario y, si hay fincas o invernaderos, los incluimos en el mismo encargo para que el reparto tenga un criterio común. El informe lo firma un ingeniero colegiado y sirve para formar lotes, calcular compensaciones entre herederos y acompañar la documentación que se presente ante notario."
  },
  {
    "q": "¿Qué documentación necesito para valorar una finca en El Ejido?",
    "a": "Ayuda tener la referencia catastral, la escritura o la nota simple y, si existen, datos del pozo, la balsa o el contrato de arrendamiento. No hace falta aportarlo todo desde el principio: con lo que tengas hacemos el estudio previo gratuito y te decimos qué falta antes de cerrar el presupuesto. La inspección presencial completa lo que no conste en papeles."
  },
  {
    "q": "¿Qué hago si Hacienda ha comprobado el valor de mi inmueble?",
    "a": "Puedes aportar un informe técnico motivado que sostenga el valor que declaraste y, si procede, promover la tasación pericial contradictoria prevista en la Ley General Tributaria. Cada notificación indica los plazos que corren para ti, así que envíanos cuanto antes la comunicación recibida. La estudiamos y te explicamos si hay base técnica para discrepar antes de que decidas nada."
  },
  {
    "q": "¿Os desplazáis a Santa María del Águila, Almerimar o Balerma?",
    "a": "Sí. Nuestra oficina está en Almería capital y nos desplazamos a todo el término de El Ejido: el casco urbano, Santa María del Águila, Las Norias de Daza, San Agustín, Balerma, Almerimar, Matagorda, Guardias Viejas, Pampanico y Tarambana. La visita se coordina contigo y el informe se entrega con firma digital FNMT, sin que tengas que desplazarte."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasaciones", item: "https://www.ingenierial.es/tasaciones" },
    { "@type": "ListItem", position: 3, name: "Tasaciones en El Ejido: invernaderos, fincas, viviendas y naves", item: "https://www.ingenierial.es/tasaciones-el-ejido" },
  ],
};

const bloques = [
  {
    "titulo": "Tasación de invernaderos y fincas en El Ejido",
    "cuerpo": "Es lo más característico del municipio y lo que más tasamos. La tasación de un invernadero en El Ejido separa estructura, cubierta, instalaciones y suelo enarenado. Revisamos el tipo de estructura (parral con raspa y amagado o multitúnel), la corrosión, la antigüedad y el estado de la cubierta, la ventilación, las mallas, el riego por goteo, el cabezal de fertirrigación y la balsa o el depósito. En la valoración de una finca en El Ejido pesa también la disponibilidad de agua, las construcciones auxiliares y, si la hay, la plantación leñosa. Medimos sobre el terreno y adaptamos el método a cada explotación, sin aplicar una cifra única por hectárea."
  },
  {
    "titulo": "Viviendas y locales en El Ejido y sus núcleos",
    "cuerpo": "Valoramos viviendas, adosados, chalés, locales comerciales y oficinas, tanto en el casco urbano de El Ejido como en núcleos costeros como Almerimar y Guardias Viejas o en entidades del interior como Santa María del Águila. La tasación de una vivienda en El Ejido por herencia exige comprobar superficie construida y útil, estado de conservación, antigüedad, calidades, elementos comunes y situación registral y catastral cuando nos aportas la documentación. Comparamos con operaciones de la zona cuando hay datos suficientes y justificamos en el informe qué referencias se usan y por qué se descartan otras. Si el inmueble está arrendado, valoramos también por capitalización de rentas."
  },
  {
    "titulo": "Naves, almacenes de manipulado y solares",
    "cuerpo": "En El Ejido abundan las naves de almacenaje, los almacenes de manipulado y las construcciones auxiliares de las explotaciones. Los tasamos teniendo en cuenta la estructura, la cubierta, los cerramientos, la altura libre, los muelles de carga, la urbanización de la parcela y las instalaciones fijas: eléctrica, cámaras frigoríficas, líneas de manipulado y ventilación. La maquinaria y los equipos pueden valorarse aparte o junto con el inmueble, según el encargo. También valoramos solares y parcelas, revisando su situación con la documentación que aportes. Distinguimos siempre lo que forma parte del inmueble de lo que es equipo desmontable, para que cada partida del informe quede clara."
  },
  {
    "titulo": "Herencias, divorcios y Hacienda",
    "cuerpo": "Cuando hay que repartir una herencia con vivienda, finca e invernadero, o liquidar bienes en un divorcio, un valor técnico y motivado evita discusiones entre las partes. Valoramos cada bien por separado para que se puedan formar lotes y calcular compensaciones. Si Hacienda te notifica una comprobación de valor que consideras excesiva, elaboramos el informe que sustenta tu valor y, si procede, la tasación pericial contradictoria que regula la Ley General Tributaria. Conviene enviarnos la comunicación recibida cuanto antes para estudiar el caso. Te decimos con claridad qué se puede defender y qué no, sin prometer resultados que dependen de terceros."
  },
  {
    "titulo": "Daños por temporal y contraperitaje",
    "cuerpo": "Granizo, viento fuerte o un temporal pueden dejar un invernadero con la cubierta rota, la estructura deformada o las instalaciones inservibles, y una nave o una vivienda con daños en cubierta y cerramientos. Inspeccionamos lo ocurrido, separamos el daño del siniestro del desgaste previo y valoramos la reposición en un informe pericial para reclamar a la aseguradora o a un tercero. Si la compañía ya te ha presentado la valoración de su perito, actuamos como perito de parte conforme a la Ley de Contrato de Seguro y revisamos partida por partida qué falta, qué se ha depreciado en exceso y qué daños no se han recogido."
  },
  {
    "titulo": "Cómo trabajamos y qué incluye el informe",
    "cuerpo": "Empezamos con un estudio previo gratuito y un presupuesto cerrado. Después coordinamos contigo la visita, inspeccionamos, medimos y fotografiamos. Si nos aportas la documentación, comprobamos catastro y registro. Valoramos por coste de reposición depreciado en construcciones e instalaciones, por comparación con operaciones de la zona cuando hay datos y por capitalización de rentas cuando el bien está arrendado o en producción. El método concreto depende del encargo y se justifica en el informe. Lo entregamos con firma digital FNMT, redactado en lenguaje claro y con las mediciones y fotografías que lo respaldan, para que sirva ante notario, Hacienda o juzgado."
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
          <li aria-current="page" className="text-slate-700">{"Tasaciones en El Ejido: invernaderos, fincas, viviendas y naves"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Tasador en El Ejido"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Tasaciones en El Ejido: invernaderos, fincas, viviendas y naves"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Informe pericial firmado por ingeniero técnico industrial colegiado desde 1983. Valoramos invernaderos, fincas, viviendas, locales, naves y maquinaria en El Ejido y su término. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Las tasaciones en El Ejido tienen una particularidad: el municipio es el centro del Poniente agrícola y buena parte del patrimonio de las familias está en invernaderos, fincas y almacenes, además de la vivienda. Un buen tasador en El Ejido tiene que saber valorar una estructura de parral o multitúnel con la misma soltura que un piso, un local o una nave de manipulado. En Abaco Ingeniería lo hacemos con un criterio común: visita presencial, medición, comprobación documental y un informe que explica de dónde sale cada cifra, firmado por un técnico con más de cuarenta años de trayectoria."}</p>
          <p>{"El encargo suele llegar por una herencia que hay que repartir, un divorcio con bienes que liquidar, una comprobación de valor de Hacienda con la que no estás de acuerdo, un procedimiento judicial o un siniestro que la aseguradora valora a la baja. Somos perito tasador en El Ejido con oficina en Almería capital y nos desplazamos a El Ejido, Santa María del Águila, Las Norias de Daza, San Agustín, Balerma, Almerimar, Matagorda, Guardias Viejas, Pampanico y Tarambana. La firma es digital FNMT y respondemos en menos de 24 horas."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-el-ejido" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en El Ejido"}</Link></li>
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
