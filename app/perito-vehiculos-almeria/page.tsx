import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-vehiculos-almeria";

export const metadata: Metadata = {
  title: "Perito de vehículos en Almería · Coches, motos y flotas",
  description: "Perito de vehículos en Almería: siniestro total, valor venal, daños tras un accidente y tasación de coches, motos, furgonetas y flotas. Ingeniero colegiado.",
  keywords: ["perito de vehículos Almería","perito automóviles Almería","perito de coches Almería","perito tasador de vehículos Almería","tasación de coches Almería","valor venal vehículo Almería","siniestro total coche Almería","informe pericial vehículo Almería","tasación flota vehículos Almería","perito coche clásico Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-vehiculos-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de vehículos en Almería · Coches y flotas",
    description: "Perito de vehículos en Almería: siniestro total, valor venal, daños tras un accidente y tasación de coches, motos, furgonetas y flotas. Ingeniero colegiado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de vehículos en Almería: tasación y valoración de coches – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de vehículos en Almería · Coches y flotas", description: "Perito de vehículos en Almería: siniestro total, valor venal, daños tras un accidente y tasación de coches, motos, furgonetas y flotas. Ingeniero colegiado.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de vehículos en Almería: tasación y valoración de coches",
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
  url: "https://www.ingenierial.es/perito-vehiculos-almeria",
  description: "Perito de vehículos en Almería: siniestro total, valor venal, daños tras un accidente y tasación de coches, motos, furgonetas y flotas. Ingeniero colegiado.",
};

const faqs = [
  {
    "q": "¿Qué hace un perito de vehículos y cuándo conviene contratarlo?",
    "a": "Examina el vehículo y emite un informe técnico sobre su valor, sus daños o su estado. Conviene contratarlo cuando discrepas de la oferta de la aseguradora, tras un accidente para valorar los daños, para repartir vehículos en una herencia, antes de una compraventa importante o cuando el asunto puede acabar en juicio. Cuanto antes se inspecciona el vehículo, más fiable es el resultado."
  },
  {
    "q": "¿Qué es el valor venal y en qué se diferencia del valor de mercado?",
    "a": "El valor venal es la referencia genérica que suele usar la aseguradora para indemnizar un siniestro total. El valor de mercado es lo que costaría hoy adquirir un vehículo igual al tuyo, con su kilometraje, estado, extras y mantenimiento. Pueden diferir, sobre todo en coches bien cuidados. El informe pericial compara ambos y explica por qué se llega a cada cifra."
  },
  {
    "q": "¿Mi aseguradora declara siniestro total y creo que me ofrece poco, qué puedo hacer?",
    "a": "Puedes encargar una valoración independiente antes de aceptar la oferta. Estudiamos la póliza, la propuesta de la compañía y el vehículo, y calculamos su valor de mercado con comparables reales. Con ese informe tienes una base técnica para negociar o plantear la discrepancia. No podemos asegurar que la aseguradora cambie su propuesta, pero llegarás a la conversación con datos, no solo con una opinión."
  },
  {
    "q": "¿Hacéis tasación de coches para una herencia o un reparto?",
    "a": "Sí. Valoramos cada vehículo con su matrícula, modelo, kilometraje y estado, e indicamos el valor de mercado con su base de cálculo, de modo que sirva a los herederos, al notario o a quien deba revisarlo. También tasamos motos, furgonetas, camiones y flotas completas. Hacemos la inspección en persona, en Almería y su provincia."
  },
  {
    "q": "¿Tasáis vehículos clásicos, reformados y flotas de empresa?",
    "a": "Sí. En un clásico valoramos rareza, estado, autenticidad y mercado; en un vehículo reformado, además, la reforma y su documentación; y en una flota, cada unidad por separado en un listado único. Son trabajos que exigen ver el vehículo, así que nos desplazamos por toda la provincia de Almería. Dinos qué tienes y te damos presupuesto cerrado."
  },
  {
    "q": "¿Entregáis informe para presentar en un juicio y acudís a ratificarlo?",
    "a": "Sí. El informe se entrega en PDF con firma digital y, si el asunto llega al juzgado, acudimos a ratificarlo y a responder a las preguntas, tanto si nos contratas como perito de parte como si el tribunal nos designa. Si ya sabes que hay un procedimiento en camino, avísanos desde el principio para preparar el informe pensando en la vista."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Peritaciones", item: "https://www.ingenierial.es/peritaciones-judiciales" },
    { "@type": "ListItem", position: 3, name: "Perito de vehículos en Almería: tasación y valoración de coches", item: "https://www.ingenierial.es/perito-vehiculos-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué hace un perito de vehículos y cuándo lo necesitas",
    "cuerpo": "El perito de vehículos examina el coche, la moto, la furgoneta o el camión y emite un informe técnico sobre su valor, sus daños o su estado. Lo necesitas en situaciones muy concretas: cuando la aseguradora te ofrece una indemnización con la que no estás de acuerdo, cuando has sufrido un accidente y quieres saber qué daños son reales, cuando hay que valorar vehículos en una herencia o en un reparto entre socios, cuando vas a comprar o vender una unidad de importancia o cuando existe un conflicto que puede acabar ante un juez. El informe pericial no es una estimación de taller ni una consulta de precios en un portal: es un documento razonado, firmado por un ingeniero colegiado, que explica cómo se ha llegado a cada cifra."
  },
  {
    "titulo": "Siniestro total y valor venal: cuando no estás de acuerdo con la aseguradora",
    "cuerpo": "Cuando la reparación cuesta más de lo que la póliza considera que vale el coche, la aseguradora declara el siniestro total y suele ofrecer el valor venal, una referencia calculada de forma genérica. El valor de mercado es otra cosa: lo que costaría comprar hoy un vehículo igual al tuyo, con su kilometraje, su estado, sus extras y su mantenimiento. Si tu coche estaba bien cuidado, la diferencia puede ser importante. Estudiamos la póliza, la propuesta de la compañía y el vehículo, y emitimos una valoración independiente que sirve para negociar o para plantear la discrepancia. No prometemos que cambie el resultado, pero sí una base técnica sólida. Más información en nuestra página de perito de seguros."
  },
  {
    "titulo": "Valoración de daños tras un accidente",
    "cuerpo": "Después de un accidente conviene saber qué daños tiene realmente el vehículo, cuáles se deben al siniestro y cuánto cuesta repararlos o sustituirlos. Inspeccionamos el coche, documentamos los desperfectos con fotografías y mediciones, revisamos el presupuesto del taller y la valoración de la aseguradora, y valoramos si la reparación es razonable o si el vehículo debería considerarse perdido. También analizamos la parte técnica del accidente cuando un fallo mecánico, una reforma mal ejecutada, un enganche o una carga mal sujeta pueden haber influido. Para esos casos trabajamos junto con nuestra actividad de perito de accidentes, que explica cómo reconstruimos técnicamente lo ocurrido y qué documentación nos ayuda a hacerlo."
  },
  {
    "titulo": "Tasación de coches, motos, furgonetas, camiones y flotas",
    "cuerpo": "Tasamos turismos, motos, furgonetas y camiones, uno a uno o en flota, para herencias, repartos entre herederos o socios, compraventas, inventarios de empresa y procedimientos judiciales. Cada unidad se identifica por su matrícula, modelo, kilometraje y estado de conservación, y el informe indica el valor de mercado y la base de cálculo, para que cualquier destinatario pueda entenderla: un notario, un juzgado, Hacienda o la otra parte. En flotas entregamos un listado valorado unidad por unidad, útil para contabilidad o para una operación entre empresas. Hacemos la inspección en persona, en Almería y su provincia, porque el estado real de un vehículo no se aprecia bien en fotografías enviadas por correo."
  },
  {
    "titulo": "Vehículos clásicos y vehículos reformados",
    "cuerpo": "Un vehículo clásico o poco común no se valora con una tabla de depreciación: su precio depende de la marca, el modelo, la rareza, el estado de conservación y la autenticidad de piezas y mecánica, además de un mercado de coleccionistas que se mueve por sus propios criterios. Lo tasamos con inspección directa y comparables de ventas reales. Los vehículos reformados tienen otra dificultad: una reforma puede cambiar tanto el valor como el tratamiento del vehículo ante una aseguradora o en una reclamación. Revisamos la reforma, su documentación y su efecto en el valor y en la seguridad. Si el trabajo incluye homologar el vehículo, consulta nuestra página de homologación de vehículos."
  },
  {
    "titulo": "Cómo trabajamos: inspección, documentación, informe y defensa en juicio",
    "cuerpo": "Empezamos por escucharte: qué ha pasado, qué necesitas demostrar y para quién es el informe. Después examinamos el vehículo en persona y reunimos la documentación: ficha técnica, permiso de circulación, historial, facturas, póliza y propuesta de la aseguradora. Con ello redactamos un informe razonado, con fotografías, método y conclusiones, que entregamos en PDF con firma digital. Antes de empezar te damos un presupuesto cerrado y respondemos en 24 horas. Si el asunto llega a juicio, acudimos a ratificar el informe, explicarlo y responder a las preguntas, tanto si actuamos como perito de parte como si el tribunal nos designa. Para el procedimiento, te remitimos a nuestra página de perito judicial."
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
            <Link href="/peritaciones-judiciales" className="text-sm font-medium text-slate-600 hover:text-slate-900">Peritaciones</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/peritaciones-judiciales" className="hover:text-slate-900">Peritaciones</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Perito de vehículos en Almería: tasación y valoración de coches"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Perito de vehículos en Almería"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Perito de vehículos en Almería: tasación y valoración de coches"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valor venal, valor de mercado, siniestro total, daños tras un accidente y tasación de coches, motos, furgonetas, camiones y flotas. Informe de un ingeniero técnico industrial colegiado, con inspección del vehículo en persona."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un perito de vehículos en Almería es el técnico que determina cuánto vale un coche, qué daños tiene y cuánto cuesta repararlo, con un informe que se pueda defender ante una aseguradora, un notario o un juez. Lo necesitas cuando tu aseguradora declara el siniestro total y la oferta te parece baja, cuando hay que repartir vehículos en una herencia, cuando compras o vendes una unidad de cierto valor o cuando el asunto acaba en un juicio. Somos una oficina técnica de ingeniería, con un ingeniero técnico industrial colegiado desde 1983, y redactamos el informe como perito de parte o por designación judicial. Un ingeniero entiende el vehículo como máquina: mecánica, reformas, estado real y mercado."}</p>
          <p>{"Como perito de automóviles, trabajamos con turismos, motos, furgonetas, camiones y flotas de empresa, además de vehículos clásicos y reformados. Cada informe parte de la inspección del vehículo en persona, en Almería y su provincia, y de la documentación que lo acompaña: ficha técnica, permiso de circulación, historial de mantenimiento, facturas y la propuesta de la aseguradora si la hay. Entregamos el informe en PDF con firma digital, tras un presupuesto cerrado que te damos antes de empezar, y respondemos en 24 horas. Si el asunto llega a juicio, acudimos a ratificar y explicar el informe."}</p>
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
          <li>·{" "}<Link href="/perito-judicial-almeria" className="text-sky-700 underline hover:no-underline">{"Perito judicial en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de seguros en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación de vehículos en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-accidentes-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de accidentes en Almería"}</Link></li>
          <li>·{" "}<Link href="/homologacion-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">{"Homologación de vehículos en Almería"}</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">{"Tasación pericial contradictoria"}</Link></li>
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
