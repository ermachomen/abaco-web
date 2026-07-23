import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-incendios-almeria";

export const metadata: Metadata = {
  title: "Perito de Causa y Origen de Incendios en Almería",
  description: "Perito de causa y origen de incendios en Almería. Peritaje forense de siniestros eléctricos industriales, informe para la aseguradora (art. 38 LCS) y designación judicial. Ingeniero colegiado desde 1983.",
  keywords: ["perito incendios Almería","perito causa y origen incendio","perito incendios eléctricos Almería","informe pericial incendio industrial","perito judicial incendios Almería","artículo 38 LCS incendio","peritaje cortocircuito nave industrial","perito incendio invernadero Almería","perito accidentes eléctricos Almería","ingeniero técnico industrial perito incendios"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-incendios-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de causa y origen de incendios en Almería",
    description: "Perito de causa y origen de incendios en Almería. Peritaje forense de siniestros eléctricos industriales, informe para la aseguradora (art. 38 LCS) y designación judicial. Ingeniero colegiado desde 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de causa y origen de incendios en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de causa y origen de incendios en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de causa y origen de incendios en Almería",
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
  url: "https://www.ingenierial.es/perito-incendios-almeria",
  description: "Perito de causa y origen de incendios en Almería. Peritaje forense de siniestros eléctricos industriales, informe para la aseguradora (art. 38 LCS) y designación judicial. Ingeniero colegiado desde 1983.",
};

const faqs = [
  {
    "q": "Cuánto tarda un peritaje de causa y origen de un incendio en Almería?",
    "a": "La inspección se realiza en 24-48 horas desde el aviso, antes de que se limpie o desescombre la zona siniestrada. El informe completo, con fotografía técnica y análisis de restos, suele entregarse en 1-2 semanas; en casos complejos con laboratorio o varias hipótesis a descartar, el plazo puede ampliarse."
  },
  {
    "q": "Quién paga el peritaje, yo o la aseguradora?",
    "a": "El asegurado o la empresa contratan y pagan a su propio perito de parte. Si se acude al procedimiento del artículo 38 de la LCS y hay que nombrar un tercer perito por discrepancia, sus honorarios se reparten según lo previsto en la ley, salvo mala fe de alguna de las partes."
  },
  {
    "q": "El informe sirve si ya se ha limpiado o desescombrado el local?",
    "a": "Es mucho mejor inspeccionar antes de mover nada, pero también trabajamos sobre fotografías del siniestro, el atestado de bomberos, restos conservados de cuadros y conductores, y la documentación de la instalación (boletín, memoria, esquema unifilar), aunque el local ya se haya recogido."
  },
  {
    "q": "Qué diferencia hay entre el perito de la aseguradora y el mío?",
    "a": "El perito de la compañía trabaja para minimizar el pago del siniestro; el perito de parte defiende los intereses técnicos del asegurado o de quien lo contrata. Ambos deben aplicar la misma metodología forense, pero solo un perito independiente revisa a fondo las conclusiones que perjudican al asegurado."
  },
  {
    "q": "El informe puede usarse en un juicio?",
    "a": "Sí. Se redacta conforme a los requisitos de la prueba pericial de la Ley de Enjuiciamiento Civil, con firma digital FNMT, y el ingeniero acude a ratificarlo y responder al interrogatorio de las partes si el juzgado lo cita, tanto en procedimientos civiles como en causas penales o laborales."
  },
  {
    "q": "Trabajan fuera de Almería capital?",
    "a": "Sí. Cubrimos toda la provincia de Almería con desplazamiento presencial, además de Granada, Málaga y Murcia. Para el resto de España el peritaje y la firma del informe se gestionan de forma 100 por cien online con certificado digital FNMT."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Perito de causa y origen de incendios en Almería", item: "https://www.ingenierial.es/perito-incendios-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Investigación del foco: origen eléctrico y patrón de propagación",
    "cuerpo": "La mayoría de los incendios industriales y de nave que peritamos tienen origen eléctrico: un cuadro de distribución, una línea de fuerza, un motor o una máquina concreta. El trabajo de campo empieza localizando el punto de mayor calcinación y el sentido de propagación de las llamas, y sigue con el análisis de los restos: conductores fundidos o con perlas de cobre, magnetotérmicos y diferenciales disparados o soldados, bornes, prensaestopas y elementos de protección. Cruzamos esos hallazgos con la potencia instalada, la sección de cable y el esquema unifilar para reconstruir con precisión qué falló primero y por qué."
  },
  {
    "titulo": "Sobrecarga, cortocircuito, defecto de aislamiento o mala ejecución",
    "cuerpo": "No es lo mismo un incendio por sobrecarga de una línea mal dimensionada, que uno por cortocircuito entre fases, por defecto de aislamiento de un cable envejecido o por una mala ejecución de la instalación (empalmes sin caja, secciones insuficientes, protecciones mal calibradas). Cada causa apunta a un responsable distinto: el proyectista, el instalador, el mantenedor o incluso el fabricante del equipo. El informe pericial establece, con criterios técnicos y no con conjeturas, cuál de estas causas explica el siniestro y descarta expresamente las demás."
  },
  {
    "titulo": "Reclamación a la aseguradora: informe pericial y artículo 38 de la LCS",
    "cuerpo": "Cuando la aseguradora rechaza el siniestro o su perito atribuye el incendio a una causa excluida de la póliza (falta de mantenimiento, negligencia, instalación no boletinada), el asegurado tiene derecho a nombrar su propio perito conforme al artículo 38 de la Ley de Contrato de Seguro. Elaboramos el informe de contraparte con la misma metodología forense: si hay discrepancia con el perito de la compañía, participamos en la designación de un tercer perito y defendemos el informe hasta el acuerdo o, si es necesario, en vía judicial."
  },
  {
    "titulo": "Accidentes de instalación y siniestros industriales: electrocución, explosión, fallo en nave o invernadero",
    "cuerpo": "Además del incendio, peritamos otros accidentes de origen eléctrico o de instalación en el entorno industrial y agrícola: electrocuciones por defecto de puesta a tierra, explosiones por acumulación de gas o polvo combustible, y fallos de instalación en naves, almacenes o invernaderos de la provincia de Almería. El informe determina si el accidente se debió a un defecto de diseño, a un incumplimiento del REBT o del RIPCI (RD 513/2017), o a una negligencia en el mantenimiento, y cuantifica los daños materiales."
  },
  {
    "titulo": "Perito de parte y perito judicial, con ratificación en sala",
    "cuerpo": "Actuamos como perito de parte, contratado directamente por el asegurado, la empresa o su abogado, y también como perito de designación judicial cuando el procedimiento lo requiere. El informe se entrega firmado digitalmente con certificado FNMT, cumple los requisitos de la Ley de Enjuiciamiento Civil sobre prueba pericial, y el ingeniero acude a ratificarlo y someterse a interrogatorio en la vista cuando el juzgado lo cita, en Almería o en cualquier otro partido judicial."
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
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Perito de causa y origen de incendios en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Perito de causa y origen de incendios en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Investigación forense de incendios eléctricos e industriales: informe pericial técnico para reclamar a la aseguradora o depurar responsabilidades del instalador, mantenedor o fabricante."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un incendio de origen eléctrico en un cuadro, una línea o una máquina no se explica solo, se demuestra. Abaco Ingeniería es un perito de causa y origen de incendios en Almería especializado en peritaje forense industrial de siniestros eléctricos: reconstruimos el foco de ignición, seguimos el patrón de propagación de las llamas y analizamos los restos de conductores, protecciones y cuadros para determinar si el origen fue una sobrecarga, un cortocircuito, un defecto de aislamiento o una mala ejecución de la instalación. Con más de 40 años de colegiación como ingeniero técnico industrial, el informe se redacta con el rigor técnico que exigen aseguradoras y juzgados, útil tanto para reclamar la indemnización como para depurar responsabilidades del instalador, mantenedor o fabricante."}</p>
          <p>{"El peritaje se apoya en inspección ocular del siniestro, fotografía técnica del patrón de calcinación, toma de restos de cableado y elementos de protección, y contraste con la instalación eléctrica original (REBT, boletines, mantenimientos). Trabajamos como perito de parte para el asegurado o la aseguradora y también con designación judicial, con ratificación en sala si el procedimiento lo requiere. Firmamos el informe con certificado digital FNMT, lo que permite gestionar todo el proceso online desde cualquier punto de España, con desplazamiento presencial a Almería capital y provincia, Granada, Málaga y Murcia. Estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
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
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones contra incendios</Link></li>
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">Perito de seguros en Almería</Link></li>
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
