import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-accidentes-almeria";

export const metadata: Metadata = {
  title: "Perito de Accidentes en Almería · Ingeniero Industrial",
  description: "Perito de accidentes en Almería: laborales, con maquinaria, en instalaciones y de tráfico. Informe pericial para juzgado, mutua o aseguradora. Colegiado desde 1983.",
  keywords: ["perito accidentes Almería","perito accidente laboral Almería","peritaje accidente maquinaria","informe pericial accidente trabajo","perito judicial accidentes Almería","perito accidente eléctrico","reconstrucción accidente laboral","perito ingeniero accidentes","informe pericial mutua accidente","perito accidente tractor maquinaria agrícola"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-accidentes-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de accidentes en Almería",
    description: "Perito de accidentes en Almería: laborales, con maquinaria, en instalaciones y de tráfico. Informe pericial para juzgado, mutua o aseguradora. Colegiado desde 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de accidentes en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de accidentes en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de accidentes en Almería",
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
    { "@type": "Country", name: "España" },
  ],
  url: "https://www.ingenierial.es/perito-accidentes-almeria",
  description: "Perito de accidentes en Almería: laborales, con maquinaria, en instalaciones y de tráfico. Informe pericial para juzgado, mutua o aseguradora. Colegiado desde 1983.",
};

const faqs = [
  {
    "q": "Qué tipos de accidente peritáis?",
    "a": "Accidentes laborales y con maquinaria o equipos de trabajo, accidentes por fallo de instalación (eléctrica, gas, frío, aire comprimido), incendios y explosiones, y accidentes de tráfico en su componente técnica: fallo mecánico, defecto de una reforma, enganches y remolques o carga mal estibada. Nuestra especialidad es la ingeniería industrial aplicada a la causa del accidente."
  },
  {
    "q": "Trabajáis para el accidentado o para la empresa?",
    "a": "Para ambos. Actuamos como perito de parte para el trabajador accidentado o su abogado, y también para la empresa o su aseguradora cuando se defienden de una reclamación. El criterio técnico no cambia según quién pague: si el informe no favorece a quien nos contrata, se lo decimos antes de redactarlo."
  },
  {
    "q": "Cuánto tarda el informe pericial de un accidente?",
    "a": "La inspección se organiza en las primeras 24 a 48 horas siempre que sea posible, porque la prueba física desaparece rápido. El informe completo suele entregarse en una o dos semanas; si hay que analizar documentación extensa de mantenimiento o esperar a un ensayo, el plazo puede ampliarse. Te damos una previsión por escrito antes de empezar."
  },
  {
    "q": "Sirve el informe ante la Inspección de Trabajo o la mutua?",
    "a": "Sí. El mismo informe técnico es válido ante el juzgado de lo social, ante la Inspección de Trabajo y ante la mutua en la determinación de contingencia, además de ante la aseguradora. Lo que cambia según el destinatario es el énfasis, no la metodología ni las conclusiones."
  },
  {
    "q": "Y si la máquina ya se ha reparado o retirado?",
    "a": "Se puede trabajar igualmente, aunque con más limitaciones. Nos apoyamos en el atestado o parte de accidente, las fotografías del momento, la documentación de la máquina (marcado, manual, declaración de conformidad), los registros de mantenimiento y las declaraciones. Lo que no haremos es afirmar como cierto algo que ya no se puede comprobar."
  },
  {
    "q": "Os desplazáis fuera de Almería capital?",
    "a": "Sí. Cubrimos toda la provincia de Almería con desplazamiento presencial, incluido el poniente y el levante almeriense, y también Granada, Málaga y Murcia. Para el resto de España valoramos cada caso, porque en accidentes la inspección presencial suele ser determinante."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Perito de accidentes en Almería", item: "https://www.ingenierial.es/perito-accidentes-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Accidentes laborales y de maquinaria",
    "cuerpo": "Es el grueso de nuestros encargos: atrapamientos, golpes y cortes con maquinaria, caídas por fallo de un medio auxiliar, contactos eléctricos, proyecciones y accidentes en líneas de manipulado. Analizamos el equipo de trabajo y sus protecciones, si los resguardos y enclavamientos estaban operativos, el marcado y la documentación de la máquina, el manual y el mantenimiento realizado, y la formación e información recibidas. De ahí sale si el accidente se explica por un defecto del equipo, por una alteración de sus protecciones, por un fallo de mantenimiento o por la organización del trabajo."
  },
  {
    "titulo": "Accidentes por fallo de instalación",
    "cuerpo": "Electrocuciones por defecto de puesta a tierra o protección inadecuada, incendios de origen eléctrico, explosiones, fugas y golpes de ariete, o accidentes por fallo de una instalación de gas, frío o aire comprimido. Aquí aportamos lo que distingue a un ingeniero industrial de un perito generalista: contrastamos lo instalado con la reglamentación de seguridad industrial que le era aplicable y con su documentación de legalización y mantenimiento. Si la instalación no estaba legalizada o el mantenimiento no se hizo, el informe lo acredita técnicamente."
  },
  {
    "titulo": "Accidentes de tráfico con componente técnica",
    "cuerpo": "No sustituimos al perito de reconstrucción de accidentes de circulación, pero sí peritamos la parte que es ingeniería: fallo mecánico del vehículo, defecto de una reforma o de un montaje, estado de un enganche o de un remolque, carga mal estibada o desplazada, y accidentes con maquinaria agrícola o industrial autopropulsada. Es una consulta habitual en la provincia, donde tractores, carretillas y vehículos de empresa comparten uso agrícola e industrial."
  },
  {
    "titulo": "Para qué sirve el informe y ante quién",
    "cuerpo": "El informe se redacta conforme a los requisitos de la prueba pericial y se entrega firmado digitalmente con certificado FNMT. Sirve ante el juzgado de lo social o de lo civil, ante la Inspección de Trabajo, ante la mutua en la determinación de contingencia y ante la aseguradora en la reclamación de daños. El ingeniero acude a ratificarlo y a responder al interrogatorio de las partes cuando el juzgado lo cita, en Almería o en cualquier otro partido judicial."
  },
  {
    "titulo": "Cuándo conviene llamar",
    "cuerpo": "Cuanto antes, y preferiblemente antes de que se repare o se retire la máquina o la instalación implicada. La prueba física es la que más peso tiene y la que primero desaparece: una vez sustituido el equipo o rehecha la instalación, el peritaje se apoya solo en fotografías y documentación. Si el accidente ya ha ocurrido hace tiempo, seguimos pudiendo trabajar con el atestado, el parte de accidente, el informe de la mutua, las fotografías y la documentación técnica del equipo."
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
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Perito de accidentes en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Perito de accidentes en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Reconstrucción técnica de accidentes laborales, con maquinaria, en instalaciones y de tráfico. Informe pericial de ingeniero para juzgado, mutua, inspección de trabajo o aseguradora, con ratificación en sala."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Después de un accidente, lo que decide la responsabilidad no es la versión de cada parte: es la reconstrucción técnica de lo que falló. Como ingeniero técnico industrial colegiado desde 1983, peritamos accidentes laborales, accidentes con maquinaria y equipos de trabajo, accidentes por fallo de instalación y accidentes de tráfico con componente técnica. El informe establece la secuencia de los hechos, identifica la causa y determina si hubo defecto de diseño, de ejecución, de mantenimiento o de uso, que es exactamente lo que discuten el juzgado, la mutua y la aseguradora."}</p>
          <p>{"Trabajamos como perito de parte, contratados por el accidentado, la empresa o su abogado, y también por designación judicial. Actuamos igual del lado de quien reclama que de quien se defiende de una reclamación que considera injusta: el criterio técnico es el mismo. Sede en Almería, con desplazamiento a toda la provincia para la inspección, y firma digital FNMT para el resto de España. Estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
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
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">Perito ingeniero industrial en Almería</Link></li>
          <li>·{" "}<Link href="/perito-incendios-almeria" className="text-sky-700 underline hover:no-underline">Perito de causa y origen de incendios</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">Perito de seguros y contraperitaje</Link></li>
          <li>·{" "}<Link href="/peritaciones-judiciales" className="text-sky-700 underline hover:no-underline">Peritaciones judiciales</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones técnicas en Almería</Link></li>
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
