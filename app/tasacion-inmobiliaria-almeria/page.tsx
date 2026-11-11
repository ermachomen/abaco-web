import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-inmobiliaria-almeria";

export const metadata: Metadata = {
  title: "Tasación inmobiliaria en Almería · Viviendas, pisos y locales",
  description: "Tasación de viviendas, pisos, locales y solares en Almería para herencias, divorcios, compraventas, Hacienda y juzgado. Presupuesto cerrado y respuesta en 24 h.",
  keywords: ["tasación inmobiliaria Almería","tasación de viviendas Almería","tasar piso Almería","tasador de viviendas Almería","valoración de inmuebles Almería","tasación de local comercial Almería","tasación pericial vivienda Almería","tasación de casa para herencia Almería","perito tasador inmobiliario Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-inmobiliaria-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación inmobiliaria en Almería · Viviendas y locales",
    description: "Tasación de viviendas, pisos, locales y solares en Almería para herencias, divorcios, compraventas, Hacienda y juzgado. Presupuesto cerrado y respuesta en 24 h.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación inmobiliaria en Almería: viviendas, pisos y locales – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación inmobiliaria en Almería · Viviendas y locales", description: "Tasación de viviendas, pisos, locales y solares en Almería para herencias, divorcios, compraventas, Hacienda y juzgado. Presupuesto cerrado y respuesta en 24 h.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación inmobiliaria en Almería: viviendas, pisos y locales",
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
  url: "https://www.ingenierial.es/tasacion-inmobiliaria-almeria",
  description: "Tasación de viviendas, pisos, locales y solares en Almería para herencias, divorcios, compraventas, Hacienda y juzgado. Presupuesto cerrado y respuesta en 24 h.",
};

const faqs = [
  {
    "q": "¿Vuestra tasación me sirve para pedir un préstamo al banco?",
    "a": "No. Para un préstamo con garantía del inmueble, el banco exige una tasación emitida por una sociedad de tasación homologada por el Banco de España, y Abaco Ingeniería no lo es. Nuestras tasaciones son periciales: sirven para herencias, divorcios, compraventas entre particulares, procedimientos con Hacienda y juicios. Si lo que necesitas es financiar la compra, pregunta en tu banco con qué sociedades de tasación trabaja."
  },
  {
    "q": "¿Cuánto cuesta tasar una vivienda en Almería?",
    "a": "Depende del tipo de inmueble, de su tamaño, de dónde esté y de para qué quieras el informe: no lleva el mismo trabajo una valoración para un reparto amistoso que un dictamen que haya que defender en el juzgado. Por eso no publicamos una tarifa única. Cuéntanos tu caso y te damos un presupuesto cerrado antes de empezar, sin compromiso y con respuesta en 24 horas."
  },
  {
    "q": "¿Cuánto se tarda en tener el informe de tasación?",
    "a": "El plazo depende de lo pronto que se pueda visitar el inmueble, de que la documentación esté completa y de lo fácil que sea encontrar comparables en la zona. Un piso en un barrio con muchas operaciones se valora antes que una casa singular o un solar. Al darte el presupuesto te indicamos también un plazo de entrega para tu caso concreto, y si tienes una fecha límite, dínoslo desde el principio."
  },
  {
    "q": "¿Tenéis que entrar en la vivienda para tasarla?",
    "a": "Siempre que sea posible, entramos. La visita interior permite medir, comprobar el estado real y fotografiar el inmueble, y da mucha más solidez al informe. Hay casos en los que no se puede entrar, por ejemplo cuando la vivienda la ocupa la otra parte en un divorcio o en una herencia en conflicto. Entonces se hace una valoración con inspección exterior y se deja constancia de esa limitación en el informe."
  },
  {
    "q": "¿Puedo usar la tasación si Hacienda me reclama por el valor de una compraventa o una herencia?",
    "a": "Un informe técnico propio es la base para discutir el valor que fija la Administración, ya sea en las alegaciones o en una tasación pericial contradictoria. Lo importante es encargarlo pronto, porque el plazo para contestar empieza a contar desde que recibes la notificación. Envíanos la notificación y te decimos qué se puede hacer y qué documentación hace falta."
  },
  {
    "q": "¿Tasáis inmuebles fuera de Almería capital?",
    "a": "Tasamos viviendas, locales y solares en toda la provincia: Roquetas de Mar, El Ejido, Níjar, Vícar, Huércal de Almería, Adra, Vera, Mojácar, Huércal-Overa y el resto de municipios. Nos desplazamos al inmueble para la visita y el resto del trabajo lo hacemos online, con entrega del informe en PDF con firma digital. Para fincas rústicas, invernaderos y naves tenemos servicios específicos."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasaciones", item: "https://www.ingenierial.es/tasaciones" },
    { "@type": "ListItem", position: 3, name: "Tasación inmobiliaria en Almería: viviendas, pisos y locales", item: "https://www.ingenierial.es/tasacion-inmobiliaria-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué inmuebles tasamos en Almería",
    "cuerpo": "Tasamos pisos y apartamentos en la capital y en los municipios de la costa, casas y chalés, viviendas en el casco histórico, cortijos y casas de campo, locales comerciales en planta baja, oficinas, plazas de garaje, trasteros y solares urbanos. Cada tipo de inmueble se valora de forma distinta. En un piso pesa la comparación con otros pisos de la misma zona. En un local importan la calle, la fachada y los usos que admite. En un solar manda lo que se puede construir en él. Antes de darte presupuesto te preguntamos qué inmueble es, dónde está y para qué quieres la tasación, porque de eso depende el método y el alcance del informe."
  },
  {
    "titulo": "Para qué sirve una tasación pericial",
    "cuerpo": "Los encargos más habituales son cinco. El primero, repartir una herencia entre varios herederos sin discutir sobre el valor de la casa. El segundo, liquidar los bienes en un divorcio o disolver un proindiviso cuando uno de los dueños quiere quedarse con el inmueble. El tercero, comprar o vender con un precio razonado, sobre todo entre familiares o socios. El cuarto, responder a Hacienda cuando comprueba el valor que declaraste en una compraventa, una herencia o una donación. El quinto, aportar una prueba de valor en un procedimiento judicial. En todos ellos necesitas un informe firmado que explique el valor, no una cifra orientativa sacada de un portal de anuncios."
  },
  {
    "titulo": "Cómo se calcula el valor del inmueble",
    "cuerpo": "El método principal para una vivienda es el de comparación: buscamos inmuebles parecidos al tuyo en la misma zona, anotamos su precio y corregimos las diferencias de superficie, altura, estado, antigüedad, orientación y dotaciones como el ascensor, el garaje o la terraza. Cuando no hay suficientes comparables, o el inmueble es singular, usamos además el método del coste, que parte del valor del suelo y de lo que costaría construir de nuevo, descontando el desgaste. En los inmuebles que se alquilan se puede valorar también por las rentas que producen. El informe indica qué método se ha usado, con qué datos y por qué, de modo que cualquiera pueda seguir el razonamiento."
  },
  {
    "titulo": "La visita y los documentos que necesitamos",
    "cuerpo": "La tasación empieza con una visita. Recorremos el inmueble, tomamos medidas y fotografías y anotamos el estado de la estructura, las instalaciones, las carpinterías y los acabados. También miramos el edificio y el entorno: portal, ascensor, fachada, calle y servicios cercanos. Para preparar el informe te pedimos la nota simple del Registro de la Propiedad, la referencia catastral y, si los tienes, las escrituras, los planos y el último recibo del impuesto de bienes inmuebles. Si falta algún documento, te indicamos cómo conseguirlo. Cuando la superficie real no coincide con la que figura en el Catastro o en el Registro, lo hacemos constar y explicamos con cuál se ha valorado y por qué."
  },
  {
    "titulo": "Tasación frente a Hacienda y en el juzgado",
    "cuerpo": "Si Hacienda considera que el inmueble vale más de lo que declaraste, puedes responder con un informe técnico propio. Existe además la tasación pericial contradictoria, un procedimiento en el que tu perito y el de la Administración confrontan sus valoraciones. Preparamos el informe pensando en ese uso: con el inmueble visitado, los comparables identificados y las correcciones justificadas una a una. En un juicio, el informe se aporta como dictamen pericial y el ingeniero que lo firma comparece para explicarlo y contestar a las preguntas de las partes. No podemos asegurar cuál será el resultado de un procedimiento, pero sí que el valor quedará razonado y documentado."
  },
  {
    "titulo": "Cómo trabajamos y qué recibes",
    "cuerpo": "Primero hablamos contigo, por teléfono o por WhatsApp, para saber qué inmueble es y para qué necesitas el valor. Con eso te damos un presupuesto cerrado y un plazo de entrega. Después concertamos la visita, reunimos la documentación y estudiamos el mercado de la zona. Recibes un informe en PDF con firma digital que incluye la descripción del inmueble, las fotografías, la documentación consultada, los comparables, el método aplicado y el valor final. Si lo necesitas en papel para la notaría o el juzgado, te lo entregamos también impreso y firmado. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al inmueble sin que tú tengas que moverte."
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
          <li aria-current="page" className="text-slate-700">{"Tasación inmobiliaria en Almería: viviendas, pisos y locales"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Tasación pericial de inmuebles"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Tasación inmobiliaria en Almería: viviendas, pisos y locales"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoramos tu vivienda, piso, local o solar en Almería con visita al inmueble, comparables documentados y un informe firmado por ingeniero colegiado, que puedes aportar ante notaría, Hacienda o el juzgado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Una tasación inmobiliaria responde a una pregunta sencilla: cuánto vale hoy este inmueble y por qué. La respuesta importa cuando hay que repartir una herencia, liquidar un divorcio, comprar o vender con un precio razonado, contestar a una comprobación de valores o aportar una prueba en un pleito. En Almería tasamos viviendas, pisos, casas, locales comerciales, garajes, oficinas y solares. Visitamos el inmueble, lo medimos, comprobamos su estado y su situación registral y catastral, y lo comparamos con operaciones y ofertas reales de la misma zona. El resultado es un informe que explica paso a paso cómo se ha llegado al valor."}</p>
          <p>{"Conviene saber desde el principio qué tipo de tasación necesitas. Las nuestras son tasaciones periciales: sirven para repartos, compraventas entre particulares, reclamaciones, procedimientos con Hacienda y juicios. No sirven para pedir un préstamo al banco con garantía del inmueble, porque esa tasación la tiene que emitir una sociedad de tasación homologada por el Banco de España, y Abaco Ingeniería no lo es. Si tu caso es un préstamo, te lo decimos en la primera llamada para que no pierdas tiempo ni dinero. Si es cualquiera de los demás, te damos presupuesto cerrado antes de empezar y firma un ingeniero técnico colegiado desde 1983."}</p>
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
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">{"Tasador en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-herencia-divorcio-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación para herencias y divorcios"}</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación pericial contradictoria"}</Link></li>
          <li>·{" "}<Link href="/precio-tasacion-almeria" className="text-sky-700 underline hover:no-underline">{"Cuánto cuesta una tasación en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación de naves, locales y terrenos"}</Link></li>
          <li>·{" "}<Link href="/tasacion-agricola-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación de fincas e invernaderos"}</Link></li>
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
