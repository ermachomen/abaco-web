import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-camper-almeria";

export const metadata: Metadata = {
  title: "Homologar furgoneta camper en Almería | Techo elevable",
  description: "Homologación de furgoneta camper en Almería: cambio de clasificación a vivienda o autocaravana, techo elevable con proyecto técnico, instalación eléctrica, gas y agua e ITV de reforma. Ingeniero colegiado, estudio previo gratis.",
  keywords: ["homologar camper Almería","homologación furgoneta camper Almería","techo elevable homologación Almería","cambio clasificación vivienda ficha técnica","furgón vivienda autocaravana homologación","proyecto técnico camper ingeniero","ITV reforma camper Almería","camperización legal Almería","homologar autocaravana Almería","certificado eléctrico gas camper"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-camper-almeria",
    siteName: "Abaco Ingeniería",
    title: "Homologación de furgoneta camper en Almería",
    description: "Homologación de furgoneta camper en Almería: cambio de clasificación a vivienda o autocaravana, techo elevable con proyecto técnico, instalación eléctrica, gas y agua e ITV de reforma. Ingeniero colegiado, estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación de furgoneta camper en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de furgoneta camper en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de furgoneta camper en Almería",
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
  url: "https://www.ingenierial.es/homologacion-camper-almeria",
  description: "Homologación de furgoneta camper en Almería: cambio de clasificación a vivienda o autocaravana, techo elevable con proyecto técnico, instalación eléctrica, gas y agua e ITV de reforma. Ingeniero colegiado, estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Es obligatorio homologar mi furgoneta camper?",
    "a": "Sí. Toda modificación que separe el vehículo de su tipo homologado (mobiliario fijo, eléctrica, gas, ventanas, techo elevable, plazas) debe reflejarse en la ficha técnica. Si la ITV detecta una camperización sin legalizar, el resultado es desfavorable, no puedes circular hasta regularizarla y te expones a sanción. Además, un siniestro con reformas sin homologar puede dejarte sin cobertura del seguro."
  },
  {
    "q": "¿Por qué el techo elevable necesita proyecto de ingeniero?",
    "a": "Porque para instalarlo se cortan nervios y refuerzos transversales de la carrocería, que son elementos estructurales. El Manual de Reformas lo trata como modificación de carrocería (CR 8.51) y exige un proyecto técnico que justifique, con cálculo, que el marco de refuerzo restituye la resistencia original. Es la reforma que más sube el nivel técnico del expediente y por eso no basta con un simple certificado de taller."
  },
  {
    "q": "¿Me conviene homologar como furgón vivienda o como autocaravana?",
    "a": "Depende de tu furgoneta y del mobiliario instalado. Desde noviembre de 2025, un vehículo con mobiliario fijo de vivienda puede clasificarse como autocaravana (categoría M), lo que permite 120 km/h en autovía e ITV con periodicidad de turismo, frente al furgón vivienda (categoría N), limitado a 90 km/h. En el estudio previo te decimos a qué clasificación puedes optar y qué te falta para lograrla."
  },
  {
    "q": "¿Qué instalaciones hay que certificar en una camper?",
    "a": "La instalación eléctrica de 12 V (baterías, placa solar, cargador y protecciones) según la norma UNE aplicable; la instalación de gas, que requiere certificado de instalador autorizado; y el circuito de agua. Cada una aporta su boletín o certificado, que integramos en el proyecto junto con los anclajes del mobiliario y la comprobación de pesos y plazas."
  },
  {
    "q": "¿Cuánto cuesta y cuánto tarda homologar una camper en Almería?",
    "a": "El coste varía según las reformas: una camperización básica es más económica que una completa con techo elevable, gas y cambio de clasificación, que implica proyecto estructural y más certificados. A ello se suma la tasa de la ITV de reforma. Damos siempre presupuesto cerrado tras el estudio previo gratuito. El plazo habitual es de 3 a 4 semanas desde que reunimos la documentación."
  },
  {
    "q": "¿Puedo homologar aunque ya haya hecho yo la camperización?",
    "a": "Sí. Legalizamos tanto proyectos previos, para que montes conforme a norma, como camperizaciones ya ejecutadas de forma retroactiva. Envíanos fotos del interior, del techo y de las instalaciones junto con la ficha técnica; en el estudio previo te confirmamos qué es homologable tal cual, qué habría que ajustar y con qué certificados de las piezas ya instaladas contamos."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación de furgoneta camper en Almería", item: "https://www.ingenierial.es/homologacion-camper-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "El techo elevable: la reforma que exige proyecto técnico",
    "cuerpo": "Instalar un techo elevable es la modificación que más eleva el nivel técnico de una camperización. Para colocarlo hay que abrir el techo de chapa y, casi siempre, cortar los nervios y refuerzos transversales que dan rigidez a la carrocería. Esa apertura afecta a un elemento estructural, de modo que el Manual de Reformas la clasifica como modificación de carrocería (CR 8.51) y obliga a un proyecto técnico firmado por ingeniero. En el proyecto justificamos con cálculo que el marco perimetral de refuerzo restituye la resistencia original, dimensionamos los anclajes del kit y aportamos el informe de conformidad del fabricante del techo. Sin ese proyecto la ITV no sella la reforma y el seguro puede negarse a cubrir un siniestro."
  },
  {
    "titulo": "Todo lo que legalizamos en tu camperización",
    "cuerpo": "Una camper completa suma varias reformas que hay que documentar en conjunto: mobiliario fijo (cama, muebles de cocina, armarios) con sus anclajes; instalación eléctrica de 12 V con baterías auxiliares, placa solar, cargador y protecciones según la norma UNE aplicable; instalación de gas para cocina o calefacción, que exige certificado de un instalador autorizado; circuito de agua con depósitos de limpia y aguas grises; ventanas, claraboyas y aireadores; aislamiento; y las plazas de asiento con anclajes homologados que quieras mantener o añadir. Reunimos cada boletín y certificado, comprobamos que no se supera la MMA ni el reparto de ejes y lo integramos todo en un único expediente para la ITV de reforma."
  },
  {
    "titulo": "Furgón vivienda o autocaravana: te interesa saber la diferencia",
    "cuerpo": "El objetivo de la homologación es cambiar la clasificación del vehículo en la ficha técnica. Hasta ahora la mayoría de campers pasaban a furgón vivienda (categoría N), con límite de 90 km/h en autovía y calendario de ITV de vehículo de mercancías. Desde noviembre de 2025, una furgoneta con mobiliario fijo destinado a vivienda puede clasificarse directamente como autocaravana (categoría M, código 3200): 120 km/h en autovía, periodicidad de ITV como un turismo y mejor encaje en la póliza de seguro. En el estudio previo analizamos tu furgoneta y te decimos a qué clasificación puedes optar y qué reformas te faltan para conseguirla."
  },
  {
    "titulo": "Homologación de campers en Almería, paso a paso",
    "cuerpo": "1. Estudio previo gratuito: nos envías fotos del interior, del techo y la ficha técnica; confirmamos qué es legalizable y cerramos presupuesto. 2. Proyecto técnico: redactamos memoria, cálculos y planos según el Manual de Reformas. 3. Certificados: coordinamos boletín eléctrico, certificado de gas y certificado de taller de la instalación del techo. 4. ITV de reforma: acudes a una estación de la provincia (capital, El Ejido, Roquetas o Huércal de Almería) para la inspección de importancia y se sella la tarjeta con la nueva clasificación. 5. Trámite final: actualización del permiso de circulación si cambian categoría, plazas o pesos. Firmamos con certificado digital FNMT, así que puedes tener el proyecto sin salir de casa."
  },
  {
    "titulo": "Presupuesto cerrado y adaptado a tu furgoneta",
    "cuerpo": "El precio depende de cuántas reformas sumes. Una camperización sencilla, solo mobiliario y eléctrica básica, tiene un ticket contenido; añadir techo elevable, gas y cambio de clasificación sube el importe porque implica proyecto estructural y más certificados. A eso se añade la tasa de la ITV de reforma. Frente a los kits genéricos que no contemplan tu vehículo, dimensionamos el proyecto a tu furgoneta concreta y te damos un precio cerrado antes de empezar. Estudio previo gratis y respuesta en 24 horas en el 687 46 54 86."
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
            <Link href="C:/Program Files/Git/fichas-tecnicas" className="text-sm font-medium text-slate-600 hover:text-slate-900">Vehículos</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Homologación de furgoneta camper en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de furgoneta camper en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Cambio de clasificación a vivienda o autocaravana, techo elevable con proyecto técnico e ITV de reforma. Ingeniero técnico industrial colegiado con sede en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Convertir una furgoneta en camper sin regularizarla en la ficha técnica es circular al margen de la ley: en la próxima ITV la reforma sale a la luz y el vehículo queda desfavorable. En Abaco Ingeniería, oficina técnica con sede en Almería, homologamos tu camperización de principio a fin conforme al Manual de Reformas de Vehículos, el RD 866/2010 y la Orden ICT/1212/2018. Redactamos el proyecto técnico, coordinamos los certificados de instalación y preparamos la ITV de reforma para que tu furgoneta pase a clasificarse como vivienda o autocaravana. Ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años tramitando reformas en Almería capital y provincia."}</p>
          <p>{"Trabajamos de dos formas: 100% online con firma digital FNMT, válida en toda España, o con desplazamiento presencial a tu localidad para ver la furgoneta cuando el caso lo requiere. Cada trabajo arranca con un estudio previo gratuito en el que revisamos fotos y datos del vehículo, te decimos qué es homologable y qué no, y cerramos un presupuesto cerrado sin sorpresas. Nada de tarifas por horas ni sobrecostes de última hora. Cuéntanos qué has montado o qué quieres montar y te respondemos en menos de 24 horas."}</p>
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
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">Homologación de reformas de vehículos (ámbito nacional)</Link></li>
          <li>·{" "}<Link href="/homologacion-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">Homologación de vehículos en Almería</Link></li>
          <li>·{" "}<Link href="/ficha-tecnica-reducida-almeria" className="text-sky-700 underline hover:no-underline">Ficha técnica reducida en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-enganche-remolque-almeria" className="text-sky-700 underline hover:no-underline">Homologar enganche o remolque en Almería</Link></li>
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Todos los servicios de homologación y fichas técnicas</Link></li>
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
