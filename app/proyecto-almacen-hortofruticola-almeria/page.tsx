import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/proyecto-almacen-hortofruticola-almeria";

export const metadata: Metadata = {
  title: "Proyecto de Almacén Hortofrutícola en Almería · Manipulado",
  description: "Proyecto y legalización de almacenes hortofrutícolas y naves de manipulado en Almería: licencia de actividad, incendios, frío y registro industrial. Colegiado 1983.",
  keywords: ["proyecto almacén hortofrutícola Almería","nave de manipulado Almería","legalización almacén agrícola","licencia actividad almacén hortofrutícola","proyecto nave industrial agrícola Almería","registro industrial almacén","protección contra incendios nave manipulado","ingeniero cooperativa hortofrutícola","almacén confección Almería","centro de transformación nave Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/proyecto-almacen-hortofruticola-almeria",
    siteName: "Abaco Ingeniería",
    title: "Proyecto de almacén hortofrutícola en Almería",
    description: "Proyecto y legalización de almacenes hortofrutícolas y naves de manipulado en Almería: licencia de actividad, incendios, frío y registro industrial. Colegiado 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Proyecto de almacén hortofrutícola en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Proyecto de almacén hortofrutícola en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto de almacén hortofrutícola en Almería",
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
  url: "https://www.ingenierial.es/proyecto-almacen-hortofruticola-almeria",
  description: "Proyecto y legalización de almacenes hortofrutícolas y naves de manipulado en Almería: licencia de actividad, incendios, frío y registro industrial. Colegiado 1983.",
};

const faqs = [
  {
    "q": "Qué diferencia hay entre la licencia de obras y la licencia de actividad del almacén?",
    "a": "La licencia de obras autoriza a construir la nave; la de actividad autoriza a ejercer dentro de ella el manipulado hortofrutícola. Son expedientes distintos, con documentación distinta, y tener uno no implica tener el otro. Lo habitual es tramitarlos de forma coordinada para no construir algo que después no se pueda autorizar como actividad."
  },
  {
    "q": "Tengo el almacén funcionando pero la documentación está incompleta, qué hago?",
    "a": "Es la situación más frecuente. Hacemos primero un levantamiento de lo que realmente hay instalado y lo contrastamos con lo que consta documentado. Con esa foto te damos un plan por prioridades: primero lo que te bloquea la actividad o te expone en una inspección, después lo que conviene ordenar con más calma. No te pedimos regularizarlo todo de golpe."
  },
  {
    "q": "Las cámaras frigoríficas van dentro del mismo proyecto?",
    "a": "La instalación frigorífica tiene su propia vía de legalización conforme al Reglamento de seguridad para instalaciones frigoríficas, con requisitos específicos de documentación, empresa frigorista y control del refrigerante. La redactamos y tramitamos nosotros también, pero como expediente diferenciado. Lo explicamos en detalle en nuestra página de legalización de cámaras frigoríficas."
  },
  {
    "q": "Necesito centro de transformación?",
    "a": "Depende de la potencia que demanden las líneas de confección, el frío y el bombeo. Cuando la potencia supera lo que la compañía puede suministrar en baja tensión, hace falta centro de transformación propio y tramitación de media tensión. Lo evaluamos en el estudio previo, porque condiciona mucho el presupuesto y el plazo."
  },
  {
    "q": "Trabajáis con cooperativas y alhóndigas?",
    "a": "Sí. Buena parte de nuestros encargos industriales en la provincia son almacenes de manipulado de cooperativas, alhóndigas y comercializadoras. También atendemos a productores que montan su propio almacén de confección a menor escala. El enfoque técnico es el mismo, cambia la dimensión del expediente."
  },
  {
    "q": "Cómo se cobra este tipo de proyecto?",
    "a": "Con presupuesto cerrado tras un estudio previo gratuito. Visitamos la nave o la parcela, vemos el alcance real y te pasamos un precio por escrito, desglosado por expedientes, para que sepas qué estás contratando. No trabajamos con tarifas genéricas por metro cuadrado porque cada almacén tiene una carga de instalaciones distinta."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Proyecto de almacén hortofrutícola en Almería", item: "https://www.ingenierial.es/proyecto-almacen-hortofruticola-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto de obra y de actividad",
    "cuerpo": "Redactamos el proyecto de la nave y el proyecto de actividad que exige el ayuntamiento para autorizar el manipulado. Incluye distribución y flujo de producto, superficies y aforo, accesibilidad, muelles y zona de maniobra de camiones, y justificación ambiental de la actividad. En los municipios del poniente el instrumento ambiental que corresponda es el paso que más condiciona el calendario, así que lo enfocamos desde el primer día."
  },
  {
    "titulo": "Protección contra incendios y evacuación",
    "cuerpo": "Una nave de manipulado combina cargas de fuego altas con presencia continua de personal, así que la protección contra incendios es uno de los capítulos críticos: sectorización, cálculo del nivel de riesgo intrínseco, salidas y recorridos de evacuación, alumbrado de emergencia, extintores, bocas de incendio y, según el caso, detección o rociadores. Redactamos el proyecto específico y lo legalizamos ante industria, no solo lo dibujamos en el plano."
  },
  {
    "titulo": "Cámaras de frío, preenfriado y potencia eléctrica",
    "cuerpo": "Las cámaras de conservación y los túneles de preenfriado se legalizan por su propia vía reglamentaria, con la documentación del refrigerante empleado y la intervención de empresa frigorista habilitada. En paralelo dimensionamos y legalizamos la instalación eléctrica: si la potencia exigida lo requiere, el almacén necesita centro de transformación propio y tramitación de media tensión. Vemos el conjunto para que no te quedes corto de potencia en plena campaña."
  },
  {
    "titulo": "Registro industrial y puesta en marcha",
    "cuerpo": "Cerrado lo anterior, tramitamos la inscripción en el registro de establecimientos industriales y la puesta en marcha de las instalaciones ante la delegación correspondiente. Es el paso que acredita ante clientes, cadenas de distribución y auditorías que el almacén está legalmente establecido. Si además necesitas coordinar el registro sanitario de alimentos, te indicamos qué documentación técnica de la nuestra te sirve para ese expediente."
  },
  {
    "titulo": "Normativa aplicable",
    "cuerpo": "Confluyen varios reglamentos de seguridad industrial sobre el mismo edificio. En incendios, el Reglamento de seguridad contra incendios en los establecimientos industriales (Real Decreto 2267/2004), del que sale el cálculo del nivel de riesgo intrínseco, junto con el Reglamento de instalaciones de protección contra incendios (Real Decreto 513/2017) para los equipos. En instalaciones térmicas, el Reglamento de Instalaciones Térmicas en los Edificios. En frío industrial, el Reglamento de seguridad para instalaciones frigoríficas (Real Decreto 552/2019). Y en electricidad, el Reglamento Electrotécnico para Baja Tensión o la reglamentación de alta tensión si hay centro de transformación. A ello se suma el planeamiento municipal y el instrumento ambiental que corresponda a la actividad."
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
            <Link href="C:/Program Files/Git/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34687465486" className="text-sm font-medium text-slate-600 hover:text-brand-navy">687 465 486</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Proyecto de almacén hortofrutícola en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Proyecto de almacén hortofrutícola en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Naves de manipulado y confección: proyecto de obra e instalaciones, licencia de actividad, protección contra incendios, cámaras de frío y registro industrial. Para cooperativas, alhóndigas y comercializadoras."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Un almacén de manipulado hortofrutícola es, a efectos técnicos, una nave industrial con una carga de instalaciones muy alta: líneas de confección, cámaras de conservación y preenfriado, muelles de carga, tratamiento de aguas y una potencia eléctrica considerable. Eso significa que el expediente no se agota con la licencia de obras: hay licencia de actividad, protección contra incendios, instalación frigorífica, baja o media tensión y, en muchos casos, inscripción en el registro industrial. Coordinamos todo el paquete desde una sola oficina técnica."}</p>
          <p>{"Trabajamos tanto la nave nueva como la ampliación o la regularización de la que ya está funcionando, que es el caso más habitual en el poniente almeriense: almacenes que han ido creciendo por fases y cuya documentación no refleja lo que hoy hay dentro. Levantamos la situación real, detectamos qué falta y ordenamos el expediente por prioridades, empezando por lo que te bloquea la actividad o te expone a una inspección. Ingeniero técnico industrial colegiado desde 1983, con firma digital FNMT."}</p>
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
          <li>·{" "}<Link href="/legalizacion-camara-frigorifica-almeria" className="text-sky-700 underline hover:no-underline">Legalización de cámaras frigoríficas</Link></li>
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de nave industrial en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización de protección contra incendios</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">Alta tensión y centro de transformación</Link></li>
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
