import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-nave-industrial-vicar";

export const metadata: Metadata = {
  title: "Legalizar nave industrial en Vícar · Polígono La Gangosa",
  description: "Legalizamos naves y almacenes en La Gangosa y Agruenco, en Vícar: licencia de actividad, cámaras, incendios y electricidad. Estudio previo gratuito.",
  keywords: ["legalizar nave industrial Vícar","legalización de naves Vícar","licencia de actividad nave Vícar","polígono industrial La Gangosa","polígono industrial Agruenco","legalizar almacén de manipulado Vícar","legalizar cámara frigorífica Vícar","proyecto contra incendios nave Vícar","ingeniero industrial Vícar","legalizar nave agrícola Vícar"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-nave-industrial-vicar",
    siteName: "Abaco Ingeniería",
    title: "Legalizar nave industrial en Vícar",
    description: "Legalizamos naves y almacenes en La Gangosa y Agruenco, en Vícar: licencia de actividad, cámaras, incendios y electricidad. Estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de naves e instalaciones en Vícar – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalizar nave industrial en Vícar", description: "Legalizamos naves y almacenes en La Gangosa y Agruenco, en Vícar: licencia de actividad, cámaras, incendios y electricidad. Estudio previo gratuito.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de naves e instalaciones en Vícar",
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
    { "@type": "City", name: "Vícar" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/legalizacion-nave-industrial-vicar",
  description: "Legalizamos naves y almacenes en La Gangosa y Agruenco, en Vícar: licencia de actividad, cámaras, incendios y electricidad. Estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto se tarda en legalizar un almacén de manipulado en La Gangosa o Agruenco?",
    "a": "Depende de lo que haya que resolver: la licencia de actividad, el registro de las instalaciones, la situación urbanística o varias cosas a la vez. También influye cuánta documentación exista y cuánto tarde cada administración. Por eso no damos plazos a ciegas. Tras la visita y el estudio previo gratuito te explicamos cada paso, de quién depende y cómo ordenarlos para que la nave pueda seguir funcionando mientras tanto."
  },
  {
    "q": "¿Puedo alquilar una nave en Vícar para montar un taller agrícola?",
    "a": "Sí, pero revisa antes la licencia: debe amparar una actividad de taller, no solo de almacén. Comprueba también la instalación eléctrica, el riesgo de incendio por combustibles y lubricantes y la situación urbanística de la nave. Un contrato firmado sin esa revisión puede obligarte a asumir obras y trámites que no esperabas. Nos mandas los datos o vamos a verla y te decimos qué falta."
  },
  {
    "q": "¿Hay que legalizar una cámara añadida a un almacén que ya funcionaba?",
    "a": "Lo normal es que sí, porque una cámara añade instalación frigorífica, carga eléctrica y, a menudo, cambios en la protección contra incendios y en la actividad. Qué documentación corresponde depende de las características de la cámara y de cómo encaje en la nave. La revisamos en la visita y te decimos si basta una memoria técnica o hace falta un proyecto."
  },
  {
    "q": "¿Trabajáis también con naves de Vícar que no están en un polígono, sino en zona agrícola?",
    "a": "Sí. Atendemos naves y almacenes de todo el término de Vícar, estén o no en un polígono. En suelo agrícola pesa mucho la situación urbanística de la nave, porque no siempre se construyó para el uso que tiene ahora. Lo estudiamos en la visita y con la documentación que tengas, y te explicamos qué vías hay antes de plantear ningún proyecto."
  },
  {
    "q": "¿Qué instalaciones tengo que registrar además de la licencia de actividad?",
    "a": "Las que tenga tu nave: la eléctrica en baja tensión, la protección contra incendios y, si las hay, alta tensión o centro de transformación, climatización y ventilación, cámaras frigoríficas o autoconsumo solar. Cada una tiene su normativa, su documentación técnica y su registro ante Industria, en la Junta. En la visita las identificamos todas y te damos un listado de lo que falta."
  },
  {
    "q": "¿Cómo gestionáis la legalización si estoy en plena campaña y no puedo parar?",
    "a": "Concentramos la parte presencial en una sola visita a la nave, que se programa cuando menos moleste. A partir de ahí, proyectos, certificados y tramitación se hacen online con firma digital FNMT, sin que tengas que ir a ninguna ventanilla. Te vamos informando de cada paso y respondemos en 24 h, de modo que la gestión se adapta al ritmo de tu trabajo."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Legalización de naves e instalaciones en Vícar", item: "https://www.ingenierial.es/legalizacion-nave-industrial-vicar" },
  ],
};

const bloques = [
  {
    "titulo": "Qué hay que legalizar en una nave de Vícar",
    "cuerpo": "Una nave de Vícar con todo en regla tiene resueltas tres cuestiones. Primero, la licencia de actividad concedida por el Ayuntamiento, que debe corresponderse con lo que de verdad se hace dentro: no es lo mismo guardar material que manipular producto o reparar maquinaria. Segundo, las instalaciones inscritas ante Industria, en la Junta de Andalucía, cada una con su proyecto o memoria y su certificado. Tercero, la situación urbanística de la nave, que la Ley 7/2021, LISTA, aborda en Andalucía y que importa sobre todo en construcciones antiguas, ampliadas o levantadas para un uso distinto del actual. Empezamos por averiguar en cuál de las tres está el problema, porque de eso depende todo lo demás."
  },
  {
    "titulo": "La Gangosa, Agruenco y el entorno agrícola",
    "cuerpo": "El Polígono Industrial La Gangosa y el Polígono Industrial Agruenco concentran naves con usos muy variados. En un entorno de agricultura intensiva como el de Vícar es habitual encontrar almacenes de manipulado, cámaras de conservación, talleres de maquinaria agrícola, naves de almacenaje y distribución de suministros, además de otras actividades industriales y de servicio. Lo decimos en términos generales, porque cada nave tiene su historia y no damos nada por supuesto: lo que importa es lo que hay en la tuya, qué actividad ampara el expediente y qué instalaciones la sostienen. También atendemos naves y almacenes fuera de los polígonos, repartidos por el término."
  },
  {
    "titulo": "Incendios en almacenes y talleres",
    "cuerpo": "El Real Decreto 164/2025 manda clasificar cada establecimiento industrial por su tipo, de A a E, y por su nivel de riesgo intrínseco. En un almacén de manipulado el riesgo depende de lo que se guarda y de cómo: envases, palés, material de embalaje. En un taller depende de los combustibles, los lubricantes y los trabajos que se hagan. Lo que suele faltar es la propia clasificación, la sectorización respecto de la cámara o de la zona de oficinas, la señalización actualizada y el mantenimiento documentado de los equipos, regulado por el Real Decreto 513/2017, RIPCI. Con la visita determinamos el caso y redactamos el proyecto o la memoria y el certificado que correspondan."
  },
  {
    "titulo": "Electricidad, cámaras y energía solar",
    "cuerpo": "Las naves agrícolas e industriales de la zona acumulan carga eléctrica con los años: cámaras, líneas de manipulado, compresores, bombas, iluminación y, cada vez más, placas solares. El Real Decreto 842/2002, REBT, exige que la instalación de baja tensión esté documentada y registrada, y según el caso bastará una memoria técnica o hará falta un proyecto. Si la nave dispone de alta tensión o de un centro de transformación, se aplica el Real Decreto 337/2014. La climatización y la ventilación de zonas de trabajo y oficinas dependen del Real Decreto 1027/2007, RITE, y el autoconsumo solar del Real Decreto 244/2019. Cada uno requiere su documentación y su registro."
  },
  {
    "titulo": "Situaciones que se repiten en Vícar",
    "cuerpo": "Una nave comprada o alquilada ya en uso, cuyo comprador descubre al pedir la financiación o el suministro que falta un certificado. Un almacén que cambió de actividad sin tocar la licencia. Una cámara o un muelle añadidos años después de la obra original, sin proyecto. Una nave antigua, de la que no hay papeles ni plano, cuya situación urbanística hay que estudiar antes de nada. Y el requerimiento de una inspección que pide documentación concreta. La parte no industrial, como oficinas o aseos, se rige por el Código Técnico, Real Decreto 314/2006, en lo que aplique. Cada caso se aborda con el mismo orden: ver la nave, diagnosticar y proponer."
  },
  {
    "titulo": "Cómo trabajamos con tu nave",
    "cuerpo": "Primero te visitamos: tomamos medidas, vemos la actividad real y repasamos las instalaciones, sin que tengas que desplazarte a ningún sitio. Después redactamos el diagnóstico y el estudio previo, que es gratuito, con las vías posibles y el orden en que conviene recorrerlas. Si te encaja, fijamos un presupuesto cerrado. A continuación elaboramos los proyectos, memorias y certificados, los firmamos con firma digital FNMT y los tramitamos ante el Ayuntamiento y la Delegación de Industria de la Junta. En campaña, cuando el tiempo escasea, ese trabajo en remoto es lo que más se agradece. Respondemos en 24 h y evitamos prometer resultados que decide la administración."
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
            <Link href="/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/ingenieria-industrial-almeria" className="hover:text-slate-900">Ingeniería industrial</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Legalización de naves e instalaciones en Vícar"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Naves y almacenes en Vícar"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Legalización de naves e instalaciones en Vícar"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Trabajamos en La Gangosa, Agruenco y el resto del término de Vícar: almacenes de manipulado, cámaras y talleres agrícolas con papeles pendientes. Visitamos la nave, redactamos los proyectos y tramitamos online."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"En Vícar, buena parte de la actividad industrial gira alrededor de la agricultura intensiva, y eso se nota en las naves. Es habitual encontrar almacenes de manipulado, cámaras, naves de suministros y talleres que atienden a las explotaciones de alrededor, muchos de ellos levantados por fases según crecía el negocio. Una cámara añadida después, un muelle nuevo o un cambio de titular suelen dejar el expediente por detrás de la realidad. Legalizamos naves en el Polígono Industrial La Gangosa y en el Polígono Industrial Agruenco, y nos desplazamos a la nave para medir, ver cómo se trabaja dentro y decirte qué hay que ordenar primero."}</p>
          <p>{"Detrás de cada expediente hay un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de oficio. Firmamos los proyectos, memorias técnicas y certificados de baja tensión, alta tensión y centros de transformación, protección contra incendios, climatización y ventilación, autoconsumo solar y licencia de actividad, y los presentamos ante el Ayuntamiento y la Delegación de Industria de la Junta. La visita a la nave es lo único presencial: el resto se resuelve online con firma digital FNMT, algo que agradece quien no puede parar la campaña. Estudio previo gratuito, presupuesto cerrado y respuesta en 24 h."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-vicar" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad en Vícar"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar una nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-almacen-hortofruticola-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de almacén hortofrutícola"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-camara-frigorifica-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar una cámara frigorífica"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-electrico-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto eléctrico de nave industrial"}</Link></li>
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
