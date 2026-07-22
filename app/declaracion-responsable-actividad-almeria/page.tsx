import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/declaracion-responsable-actividad-almeria";

export const metadata: Metadata = {
  title: "Declaración Responsable Actividad Almería | Abre Hoy",
  description: "Abre tu negocio en Almería con declaración responsable: inmediata, pero con proyecto o memoria firmada por técnico. Ingeniero colegiado, estudio previo gratis.",
  keywords: ["declaración responsable actividad Almería","declaración responsable apertura Almería","actividad inocua Almería","licencia ambiental municipal Almería","comunicación previa actividad Almería","abrir negocio Almería declaración responsable","proyecto actividad técnico competente Almería","ingeniero técnico industrial Almería","Ley 2/2026 gestión ambiental Andalucía","tramitación licencia actividad Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/declaracion-responsable-actividad-almeria",
    siteName: "Abaco Ingeniería",
    title: "Declaración responsable de actividad en Almería",
    description: "Abre tu negocio en Almería con declaración responsable: inmediata, pero con proyecto o memoria firmada por técnico. Ingeniero colegiado, estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Declaración responsable de actividad en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Declaración responsable de actividad en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Declaración responsable de actividad en Almería",
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
  url: "https://www.ingenierial.es/declaracion-responsable-actividad-almeria",
  description: "Abre tu negocio en Almería con declaración responsable: inmediata, pero con proyecto o memoria firmada por técnico. Ingeniero colegiado, estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Puedo abrir mi negocio en Almería el mismo día que presento la declaración responsable?",
    "a": "Sí. En las actividades inocuas, la declaración responsable habilita para iniciar la actividad desde el momento de su presentación, siempre que adjuntes la documentación técnica completa y veraz. El control del ayuntamiento es posterior. Si tu actividad es calificada, en cambio, necesitarás licencia ambiental municipal antes de abrir."
  },
  {
    "q": "¿La declaración responsable me evita tener que hacer un proyecto técnico?",
    "a": "No, y es el malentendido más frecuente. La declaración responsable cambia el momento del control, no la exigencia técnica: sigues necesitando proyecto o memoria firmada por técnico competente y los certificados de las instalaciones. Sin ellos, la inspección posterior puede acabar en el cierre de la actividad."
  },
  {
    "q": "¿Qué diferencia hay entre declaración responsable y comunicación previa?",
    "a": "Ambas permiten abrir de inmediato, pero la declaración responsable implica que manifiestas y respondes del cumplimiento de todos los requisitos, mientras que la comunicación previa se limita a poner en conocimiento del ayuntamiento un hecho o un cambio. La apertura de una actividad suele articularse por declaración responsable."
  },
  {
    "q": "¿Cómo sé si mi actividad es inocua o calificada?",
    "a": "Depende de su incidencia ambiental: ruido, emisiones, vertidos, residuos o riesgo. Las inocuas van por declaración responsable; las calificadas, por licencia ambiental municipal según la Ley 2/2026 de Andalucía. Determinarlo requiere análisis técnico, y es lo primero que hacemos en el estudio previo gratuito."
  },
  {
    "q": "¿Qué pasa si el ayuntamiento inspecciona y algo no cumple?",
    "a": "La comprobación posterior puede terminar en un requerimiento de subsanación o, si las deficiencias son sustanciales, en el cese de la actividad, con posibles responsabilidades para el titular. Por eso preparamos el expediente para que resista la inspección desde el primer día."
  },
  {
    "q": "¿Podéis tramitar la declaración responsable si no estoy en Almería capital?",
    "a": "Sí. Trabajamos en toda la provincia de Almería de forma presencial y en cualquier municipio 100% online con firma digital FNMT. Redactamos la documentación, la presentamos ante el ayuntamiento correspondiente y atendemos los requerimientos que surjan."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Declaración responsable de actividad en Almería", item: "https://www.ingenierial.es/declaracion-responsable-actividad-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Declaración responsable o licencia previa: no es lo mismo",
    "cuerpo": "La diferencia clave está en el momento del control. Con la licencia previa tradicional presentas el proyecto y esperas la autorización expresa del ayuntamiento antes de abrir. Con la declaración responsable el orden se invierte: presentas la documentación técnica, manifiestas bajo tu responsabilidad que todo cumple y empiezas a operar desde ese mismo instante; la Administración comprueba después. Junto a ella conviven la comunicación previa, para cambios que no alteran la actividad, y, en supuestos de mayor incidencia, la licencia ambiental municipal, que sí exige resolución. Acertar con el instrumento correcto evita cierres, requerimientos y sanciones."
  },
  {
    "titulo": "Qué actividades pueden abrir por declaración responsable en Almería",
    "cuerpo": "En Almería la vía depende de la incidencia ambiental de tu actividad. Las actividades inocuas (pequeño comercio, oficinas, despachos, buena parte de los servicios) pueden abrir por declaración responsable. Las actividades calificadas, con ruido, emisiones, vertidos, residuos o riesgo, quedan sujetas a licencia ambiental municipal, la figura que la Ley 2/2026 de Gestión Ambiental de Andalucía ha puesto en lugar de la antigua calificación ambiental. Esa misma ley amplía además los casos que se gestionan por declaración responsable de efectos ambientales. Determinar en qué grupo encaja tu local es el primer paso, y es donde un técnico competente marca la diferencia."
  },
  {
    "titulo": "Qué documentación técnica se adjunta a la declaración",
    "cuerpo": "Presentar la declaración no es rellenar un impreso. Se acompaña la documentación técnica que acredita el cumplimiento: proyecto o memoria de la actividad firmada por técnico competente, planos del local, justificación de seguridad contra incendios, accesibilidad, ruido y demás normativa aplicable, y los certificados de las instalaciones (eléctrica, climatización, protección contra incendios). En actividades con maquinaria o procesos industriales el contenido técnico es más exigente, y aquí la competencia del ingeniero técnico industrial resulta determinante frente a otras titulaciones. Sin esa base, la declaración se sostiene sobre el papel, pero no ante una inspección."
  },
  {
    "titulo": "Tu responsabilidad como titular y la comprobación posterior",
    "cuerpo": "Al firmar la declaración responsable asumes que el local y la actividad cumplen la normativa desde el primer día y te comprometes a mantener ese cumplimiento. El ayuntamiento no desaparece: realiza una comprobación posterior y, si detecta deficiencias sustanciales, puede requerir su subsanación o acordar el cese de la actividad, con las responsabilidades que correspondan. Por eso la documentación que firmas no es un trámite: es tu respaldo. Preparar bien el expediente antes de presentarlo es la mejor forma de que esa comprobación llegue y no encuentre nada que reprochar."
  },
  {
    "titulo": "Cómo lo tramitamos, del estudio previo a la apertura",
    "cuerpo": "Empezamos con un estudio previo gratuito: revisamos la actividad, el local y su situación urbanística para confirmar si procede declaración responsable, comunicación previa o licencia ambiental. Después redactamos el proyecto o la memoria, reunimos los certificados y presentamos la declaración ante el Ayuntamiento de Almería o el municipio que corresponda, con firma digital FNMT. Te entregamos copia sellada para que puedas abrir y, si el ayuntamiento requiere algo, respondemos nosotros. Presupuesto cerrado, sin sorpresas, y acompañamiento hasta que tu negocio queda en regla."
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
            <Link href="C:/Program Files/Git/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Declaración responsable de actividad en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Declaración responsable de actividad en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Abre de forma inmediata en actividades inocuas, con la documentación técnica que exige la inspección posterior. Ingeniero técnico industrial colegiado en Almería."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Abrir tu negocio en Almería mediante declaración responsable de actividad significa poder empezar a operar el mismo día que presentas la documentación, sin esperar a que el ayuntamiento resuelva. Es el gran cambio del modelo actual: en las actividades inocuas y de baja incidencia, el control previo se sustituye por una comprobación posterior. Ahora bien, inmediato no quiere decir sin requisitos. Sigues necesitando un proyecto o una memoria técnica firmada por técnico competente, y eres tú, como titular, quien declara y asume que el local cumple. En Abaco Ingeniería redactamos esa documentación y tramitamos la declaración con firma digital, para que abras rápido y con respaldo técnico real."}</p>
          <p>{"Muchos empresarios buscan la declaración responsable pensando que les evita el proyecto técnico, y no es así. Esa es la parte que más problemas genera cuando llega la inspección municipal. Como ingeniero técnico industrial colegiado desde 1983, valoro primero si tu actividad es realmente inocua o si necesita licencia ambiental municipal, redacto la documentación que corresponde y te explico qué firmas y de qué respondes. Trabajamos en Almería capital y provincia, de forma presencial o 100% online con firma digital FNMT, con estudio previo gratuito y presupuesto cerrado."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia para bar o restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Precio de la licencia de actividad</Link></li>
          <li>·{" "}<Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Cambio de titularidad de la licencia</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería</Link></li>
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
