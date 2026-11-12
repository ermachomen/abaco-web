import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-judicial-almeria";

export const metadata: Metadata = {
  title: "Perito judicial en Almería · Perito de parte y designación",
  description: "Perito judicial en Almería: dictamen como perito de parte o por designación del tribunal, inspección en persona y ratificación en el juicio. Ingeniero colegiado",
  keywords: ["perito judicial Almería","peritos judiciales Almería","perito de parte Almería","informe pericial para juicio Almería","dictamen pericial Almería","perito ingeniero Almería","perito por designación judicial","ratificación del informe pericial","perito ingeniero técnico industrial"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-judicial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito judicial en Almería · Perito de parte",
    description: "Perito judicial en Almería: dictamen como perito de parte o por designación del tribunal, inspección en persona y ratificación en el juicio. Ingeniero colegiado",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito judicial en Almería: perito de parte y designación del tribunal – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito judicial en Almería · Perito de parte", description: "Perito judicial en Almería: dictamen como perito de parte o por designación del tribunal, inspección en persona y ratificación en el juicio. Ingeniero colegiado", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito judicial en Almería: perito de parte y designación del tribunal",
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
  url: "https://www.ingenierial.es/perito-judicial-almeria",
  description: "Perito judicial en Almería: dictamen como perito de parte o por designación del tribunal, inspección en persona y ratificación en el juicio. Ingeniero colegiado",
};

const faqs = [
  {
    "q": "¿Qué diferencia hay entre un perito de parte y un perito judicial en Almería?",
    "a": "El perito de parte lo elige y lo contrata quien lo necesita, y su dictamen se aporta con la demanda o con la contestación. El perito judicial lo designa el tribunal a petición de una parte, a partir de las listas que envían los colegios profesionales. Los dos deben tener la titulación adecuada a la materia, prometen objetividad y pueden explicar su informe en el juicio. La diferencia está en quién lo elige y en cómo se pide."
  },
  {
    "q": "¿Cuándo hay que presentar el informe pericial para un juicio?",
    "a": "El dictamen del perito de parte se aporta con la demanda o con la contestación. Si no es posible tenerlo a tiempo, se anuncia en ese escrito y se aporta en cuanto se disponga de él, dentro del plazo que marca la ley según el tipo de juicio. La designación judicial de perito, en cambio, se pide en los escritos iniciales. Por eso conviene encargar el informe cuanto antes, en cuanto se plantea la reclamación."
  },
  {
    "q": "¿Cómo se pide un perito designado por el tribunal y quién lo paga?",
    "a": "Se pide en los escritos iniciales, en la demanda o en la contestación. El dictamen es a costa de quien lo pide, sin perjuicio de lo que se decida sobre las costas. El perito designado manifiesta si acepta el cargo y puede reclamar una provisión de fondos con un presupuesto. Si la parte no la deposita en el plazo fijado, el perito queda eximido de emitir el dictamen."
  },
  {
    "q": "¿Puede la otra parte recusar al perito o cuestionar su informe?",
    "a": "Los peritos designados judicialmente pueden ser recusados. Los peritos de parte no son recusables, pero pueden ser objeto de tacha por parentesco, interés en el asunto, dependencia, amistad o enemistad con una parte, entre otras causas. Además, en el juicio el perito contrario puede criticar tu dictamen y se pueden hacer preguntas sobre el método, las premisas y las conclusiones, y el tribunal lo valora con sana crítica."
  },
  {
    "q": "¿Tiene que ser ingeniero el perito de mi caso?",
    "a": "Depende de la materia. El perito debe tener el título oficial que corresponda a lo que se dictamina y ser experto acreditado en ello. Si el asunto trata de instalaciones, máquinas, incendios, naves, industrias o el valor de maquinaria y vehículos, es materia de ingeniería. Si dudas, cuéntanos el caso: si no es de nuestra especialidad, te lo decimos y no aceptamos el encargo."
  },
  {
    "q": "¿El perito acude al juicio a explicar el informe?",
    "a": "Sí, nos encargamos de ratificar y explicar el dictamen en el juicio o la vista. El perito puede exponerlo, responder a las preguntas de las partes y del tribunal sobre método, premisas y conclusiones, y criticar el dictamen de la parte contraria. Antes preparamos la comparecencia con tu abogado para que el informe se explique con claridad y sin tecnicismos innecesarios."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Peritaciones", item: "https://www.ingenierial.es/peritaciones-judiciales" },
    { "@type": "ListItem", position: 3, name: "Perito judicial en Almería: perito de parte y designación del tribunal", item: "https://www.ingenierial.es/perito-judicial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué es un perito judicial y cuándo hace falta que sea ingeniero",
    "cuerpo": "Un perito judicial es el técnico cuyo dictamen sirve al tribunal para valorar hechos que exigen conocimientos que no son jurídicos. Cuando la discusión gira en torno a una instalación eléctrica, una máquina, un incendio, una nave o un vehículo, el dictamen debe emitirlo alguien con el título oficial que corresponda a esa materia y con experiencia acreditada en ella. Ahí entra el ingeniero técnico industrial: la causa de un cortocircuito, el fallo de un resguardo, el rendimiento de una instalación frigorífica o el valor de una maquinaria son cuestiones de ingeniería, y un informe sin la titulación adecuada se debilita en cuanto la otra parte lo cuestiona. Si dudas de si tu asunto requiere un ingeniero, cuéntanoslo y te lo decimos con claridad."
  },
  {
    "titulo": "Perito de parte frente a perito designado por el juzgado",
    "cuerpo": "Cuando hacen falta conocimientos técnicos para valorar los hechos, las partes pueden aportar el dictamen de un perito elegido por ellas o pedir que lo emita un perito designado por el tribunal. El perito de parte trabaja para quien lo contrata: elaboras el informe con tiempo, lo conoces antes de presentarlo y puedes decidir si lo aportas. El perito designado lo nombra el tribunal y su dictamen se pide en los escritos iniciales. No son figuras enfrentadas: en muchos asuntos se usan las dos, y el perito de parte sirve además para contrastar el dictamen del designado. Te ayudamos a valorar cuál te conviene según el asunto, las pruebas disponibles y el momento del procedimiento."
  },
  {
    "titulo": "Cómo se designa un perito judicial y qué pasa después",
    "cuerpo": "La designación judicial de perito se pide en los escritos iniciales, es decir, en la demanda o en la contestación, y el dictamen es a costa de quien lo pide, sin perjuicio de lo que se decida después sobre las costas. Cada año los colegios profesionales envían al tribunal una lista de colegiados dispuestos a actuar como peritos: la primera designación de cada lista se hace por sorteo y las siguientes por orden correlativo. El perito designado manifiesta si acepta el cargo y puede pedir una provisión de fondos presentando un presupuesto. Si la parte no la deposita en el plazo fijado, el perito queda eximido de emitir el dictamen. Conviene conocer este recorrido antes de pedir la designación."
  },
  {
    "titulo": "Qué contiene un buen informe pericial y cómo se hace la inspección",
    "cuerpo": "Un buen informe pericial se entiende sin ser ingeniero y se puede comprobar. Recoge el encargo y los documentos examinados, describe el estado del bien con fotografías y mediciones, explica el método, separa los hechos observados de las deducciones y termina en conclusiones que responden a lo que se pregunta. Por eso la inspección es presencial: vamos al lugar, en Almería y su provincia, y vemos la instalación, la máquina, la nave o el vehículo tal como están. Si el dictamen exige reconocer lugares u objetos, las partes pueden pedir estar presentes y el tribunal decide. Todo perito, al emitirlo, manifiesta bajo juramento o promesa que actúa con la mayor objetividad posible, teniendo en cuenta lo que favorece y lo que perjudica a cualquiera de las partes."
  },
  {
    "titulo": "La ratificación en el juicio: explicar, responder y contrastar",
    "cuerpo": "El informe no termina al entregarlo: en el juicio o la vista el perito puede exponer y explicar el dictamen, responder a preguntas y objeciones sobre el método, las premisas y las conclusiones, y criticar el dictamen del perito de la parte contraria. Preparamos esa comparecencia contigo y con tu abogado, y la hacemos nosotros mismos. Conviene recordar que los peritos designados judicialmente pueden ser recusados, mientras que los de parte no, aunque pueden ser objeto de tacha por parentesco, interés en el asunto, dependencia, amistad o enemistad con una parte, entre otras causas. Al final, el tribunal valora los dictámenes periciales según las reglas de la sana crítica, de modo que importa más lo bien fundado que lo extenso."
  },
  {
    "titulo": "Asuntos en los que actuamos en Almería y cómo encargarnos el informe",
    "cuerpo": "Actuamos como perito de parte y por designación judicial en incendios, accidentes con máquinas y equipos de trabajo, instalaciones eléctricas, térmicas y frigoríficas, naves e industrias, daños por temporal, vehículos y tasaciones de bienes. Trabajamos en Almería y su provincia y nos desplazamos a inspeccionar. Para encargarnos un informe basta una llamada o un mensaje con el asunto y los documentos que tengas; estudiamos el caso, te damos un presupuesto cerrado antes de empezar y entregamos el PDF con firma digital. Cuanto antes nos avises, mejor: el dictamen de parte se aporta con la demanda o con la contestación, y la prueba física, como una máquina o una instalación dañada, puede desaparecer si se repara o se retira."
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
          <li aria-current="page" className="text-slate-700">{"Perito judicial en Almería: perito de parte y designación del tribunal"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Perito judicial en Almería"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Perito judicial en Almería: perito de parte y designación del tribunal"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Informes y dictámenes periciales de un ingeniero técnico industrial colegiado desde 1983, como perito de parte o por designación judicial, con ratificación en el juicio o la vista. Inspeccionamos el bien en persona en Almería y su provincia."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si buscas un perito judicial en Almería, lo primero es aclarar qué papel necesitas. Un perito aporta al procedimiento los conocimientos técnicos que hacen falta para valorar los hechos: por qué se incendió una nave, qué falló en una máquina, si una instalación estaba bien ejecutada o cuánto vale un bien. Somos una oficina técnica de ingeniería con un ingeniero técnico industrial colegiado desde 1983. Redactamos informes y dictámenes periciales como perito de parte, por encargo tuyo o de tu abogado, y también como perito de designación judicial cuando el tribunal nos nombra. En los dos casos el trabajo es el mismo: inspección del bien, análisis técnico, informe firmado y, si hace falta, comparecencia para explicarlo."}</p>
          <p>{"Los peritos judiciales de Almería que trabajan en ingeniería se reparten por materias, y conviene elegir el que domina la tuya. Nosotros actuamos en incendios, accidentes con máquinas y equipos de trabajo, instalaciones eléctricas, térmicas y frigoríficas, naves e industrias, daños por temporal, vehículos y tasaciones de bienes. Lo que ofrecemos al cliente y al tribunal es un dictamen claro, razonado y comprobable: qué hemos visto, qué método hemos seguido, en qué premisas nos apoyamos y a qué conclusiones llegamos. Entregamos el informe en PDF con firma digital, damos un presupuesto cerrado antes de empezar y respondemos en 24 horas a cada consulta."}</p>
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
          <li>·{" "}<Link href="/perito-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de vehículos en Almería"}</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">{"Perito en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Perito ingeniero industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-accidentes-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de accidentes en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de seguros en Almería"}</Link></li>
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
