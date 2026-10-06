import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/perito-danos-invernadero-almeria";

export const metadata: Metadata = {
  title: "Perito de daños en invernadero en Almería",
  description: "Perito de daños en invernadero en Almería: peritación tras temporal, granizo o viento y contraperitaje del seguro. Ingeniero colegiado. Estudio previo gratis.",
  keywords: ["perito de daños en invernadero en Almería","peritación daños invernadero","daños temporal invernadero seguro","granizo invernadero perito","contraperitaje seguro agrario","perito de parte invernadero El Ejido","valoración daños viento invernadero","perito invernaderos Almería","reclamar aseguradora invernadero","informe pericial invernadero"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/perito-danos-invernadero-almeria",
    siteName: "Abaco Ingeniería",
    title: "Perito de daños en invernadero en Almería",
    description: "Perito de daños en invernadero en Almería: peritación tras temporal, granizo o viento y contraperitaje del seguro. Ingeniero colegiado. Estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Perito de daños en invernadero en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Perito de daños en invernadero en Almería", description: "Perito de daños en invernadero en Almería: peritación tras temporal, granizo o viento y contraperitaje del seguro. Ingeniero colegiado. Estudio previo gratis.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Perito de daños en invernadero en Almería",
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
  ],
  url: "https://www.ingenierial.es/perito-danos-invernadero-almeria",
  description: "Perito de daños en invernadero en Almería: peritación tras temporal, granizo o viento y contraperitaje del seguro. Ingeniero colegiado. Estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Qué debo hacer en las primeras horas tras un temporal en mi invernadero?",
    "a": "Prioriza la seguridad y no entres en estructuras inestables. Haz fotos y vídeo de todo con fecha visible, sin retirar restos hasta tenerlos documentados. Avisa a la aseguradora dentro del plazo que marque tu póliza y llámanos para que un perito acuda antes de reparar. Si has tenido que asegurar algo para evitar más daños, fotografía también esa actuación."
  },
  {
    "q": "¿Qué daños se incluyen en la peritación de un invernadero?",
    "a": "La cubierta, la estructura, las mallas, la ventilación, el riego y el cabezal, además de otros elementos afectados. El cultivo perdido y el lucro cesante se valoran solo si tu póliza los cubre y puedes acreditarlos. El informe detalla cada partida con su medición y su fotografía, para que se pueda contrastar con la propuesta de la aseguradora."
  },
  {
    "q": "¿Cómo se distingue el daño del temporal del desgaste previo?",
    "a": "Se analiza dónde y cómo se ha roto cada elemento, si el patrón es compatible con el viento o el granizo y qué antigüedad y mantenimiento tenía. La depreciación se aplica solo a lo que ya estaba desgastado, no a lo que falló por el siniestro. Las fotografías de antes, si las tienes, ayudan mucho."
  },
  {
    "q": "¿La aseguradora me ofrece poco, qué puedo hacer?",
    "a": "Puedes encargar un contraperitaje a un perito de parte, que revisa la valoración de la compañía partida por partida y emite un dictamen propio. Se apoya en la Ley de Contrato de Seguro y en lo que diga tu póliza. Si crees que hay plazos corriendo, no esperes: envíanos la propuesta recibida y la póliza para estudiarlas sin coste."
  },
  {
    "q": "¿Puedo reclamar si el daño lo ha causado un vecino o una obra?",
    "a": "Sí, puede haber responsabilidad de un tercero cuando su obra, su estructura o su actividad hayan dañado tu invernadero. Hace falta prueba: por eso conviene inspeccionar antes de reparar. El informe identifica el origen probable y cuantifica la reposición. La viabilidad concreta de la reclamación depende de los hechos y no podemos prometer un resultado."
  },
  {
    "q": "¿Cuánto tardáis en acudir y a qué zonas vais?",
    "a": "Respondemos en menos de 24 horas y coordinamos la visita contigo lo antes posible, porque la prueba desaparece al reparar. Nos desplazamos al Poniente (El Ejido, Roquetas de Mar, Vícar, La Mojonera, Adra y Berja), al Campo de Níjar, al Bajo Andarax y al resto de la provincia. El estudio previo es gratuito y el presupuesto, cerrado."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Peritaciones", item: "https://www.ingenierial.es/peritaciones-judiciales" },
    { "@type": "ListItem", position: 3, name: "Perito de daños en invernadero en Almería", item: "https://www.ingenierial.es/perito-danos-invernadero-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué hacer justo después del siniestro",
    "cuerpo": "Antes de nada, tu seguridad: no entres en una estructura inestable. Cuando sea posible, fotografía y graba el conjunto y los detalles, con la fecha visible, desde varios ángulos y con algo que dé escala. No retires restos de plástico, mallas ni elementos doblados hasta que estén documentados, porque son la prueba de cómo se produjo el daño. Si necesitas asegurar la finca para evitar males mayores, hazlo y guarda también fotos de lo que has movido. Avisa a tu aseguradora dentro del plazo que fije tu póliza; revísala o envíanosla y te decimos qué conviene reunir. Cuanto antes llames, antes podemos acudir con la prueba todavía en su sitio."
  },
  {
    "titulo": "Qué daños se peritan en un invernadero",
    "cuerpo": "Valoramos cada partida por separado para que ninguna se quede sin recoger. En la cubierta, el plástico o la malla rotos o arrancados. En la estructura, postes, cables, anclajes y arcos deformados o caídos. Las mallas antiinsectos y de sombreo, la ventilación cenital y lateral, y la instalación de riego por goteo, con su cabezal de fertirrigación, balsa o depósito cuando hayan resultado afectados. Si la póliza lo cubre, también se puede valorar el cultivo perdido y el lucro cesante, siempre sobre la base de lo que diga el contrato y de documentación que lo acredite. Cada elemento se mide, se fotografía y se cuantifica en el informe."
  },
  {
    "titulo": "Daño del siniestro o desgaste previo",
    "cuerpo": "Es la discusión más frecuente con el perito de la compañía, y se resuelve con método. Un invernadero con años de uso tiene corrosión, plástico envejecido y holguras que no son consecuencia del temporal. Para separarlo, inspeccionamos las roturas y los puntos de fallo, comprobamos si el daño sigue un patrón compatible con el viento o el granizo, revisamos la antigüedad y el mantenimiento de cada elemento, y aplicamos la depreciación que corresponde solo a lo que ya estaba desgastado. Así se evita tanto que la aseguradora atribuya al desgaste lo que fue siniestro como que se reclame lo que no lo fue, y el informe gana credibilidad ante cualquiera que lo revise."
  },
  {
    "titulo": "Contraperitaje cuando la aseguradora ofrece poco",
    "cuerpo": "Si la valoración de la compañía no recoge todo el daño, un perito de parte la revisa partida por partida. Comprobamos las superficies medidas, las unidades de cada elemento, el precio de reposición aplicado, la depreciación y las coberturas que ofrece la póliza. A menudo faltan partidas completas, como el cabezal, las mallas o la ventilación, o se aplica un desgaste excesivo. Actuamos como perito de parte conforme a la Ley de Contrato de Seguro y emitimos un dictamen con el que negociar o reclamar. No prometemos un resultado, porque depende de la póliza y de los hechos, pero sí un análisis técnico que defienda tu valoración con datos medibles y verificables."
  },
  {
    "titulo": "Reclamación a un tercero responsable",
    "cuerpo": "No todos los daños vienen del cielo. A veces los causa una obra cercana, la caída de la estructura o la cubierta de un vecino, una máquina o un vertido. En esos casos la peritación sirve para reclamar directamente a quien corresponda, o para completar la reclamación del seguro cuando este no cubre todo. El informe identifica el origen probable del daño, describe cómo llegó a tu invernadero y cuantifica la reposición. Para que sea útil, la prueba debe estar intacta: por eso insistimos en no reparar antes de la inspección. Si el asunto acaba en un procedimiento, el ingeniero que firma el informe puede ratificarlo ante el juzgado."
  },
  {
    "titulo": "El informe pericial y dónde trabajamos",
    "cuerpo": "El informe incluye la descripción del invernadero, el relato del siniestro, mediciones, fotografías, el análisis de causa, la separación entre daño y desgaste previo y la valoración partida por partida. Se entrega con firma digital FNMT, redactado con claridad para que lo entienda quien lo lea, sea la aseguradora, un tercero o el juzgado. Tenemos la oficina en Almería capital y nos desplazamos al Poniente (El Ejido, Roquetas de Mar, Vícar, La Mojonera, Adra y Berja), al Campo de Níjar y al Bajo Andarax. Salimos pronto porque, una vez reparado el invernadero, ya no hay forma de comprobar cómo estaba."
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
          <li aria-current="page" className="text-slate-700">{"Perito de daños en invernadero en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Peritación de invernaderos siniestrados"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Perito de daños en invernadero en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Peritación de daños en invernaderos tras temporal, granizo o viento, firmada por ingeniero técnico industrial colegiado desde 1983. Inspección rápida en toda la provincia, contraperitaje del seguro y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Cuando un temporal, una granizada o un golpe de viento dañan un invernadero, el tiempo juega en tu contra: la prueba desaparece en cuanto se repara la cubierta o se retiran los restos. Un perito de daños en invernadero en Almería documenta el estado real de la estructura, la cubierta y las instalaciones antes de que eso ocurra, y separa lo que ha causado el siniestro de lo que ya estaba gastado. En Abaco Ingeniería lo hace un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de trayectoria, que se desplaza a tu explotación para inspeccionar, medir y fotografiar. El resultado es un informe pericial firmado con el que puedes reclamar a tu aseguradora o a un tercero."}</p>
          <p>{"La peritación de daños en invernadero sirve en tres situaciones. La primera, cuando todavía no has avisado y quieres hacerlo con la documentación bien hecha. La segunda, cuando la aseguradora ya te ha enviado a su perito y la cantidad que ofrece te parece corta: entonces hacemos el contraperitaje como perito de parte, al amparo de la Ley de Contrato de Seguro. La tercera, cuando el daño lo ha causado otra persona, por ejemplo una obra o la estructura de un vecino. En los tres casos nos desplazamos con rapidez, el estudio previo es gratuito y el presupuesto es cerrado antes de empezar. Respondemos en menos de 24 horas."}</p>
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
          <li>·{" "}<Link href="/perito-seguros-almeria" className="text-sky-700 underline hover:no-underline">{"Perito de seguros y contraperitaje"}</Link></li>
          <li>·{" "}<Link href="/tasaciones-el-ejido" className="text-sky-700 underline hover:no-underline">{"Tasaciones en El Ejido"}</Link></li>
          <li>·{" "}<Link href="/tasaciones-nijar" className="text-sky-700 underline hover:no-underline">{"Tasaciones en Níjar"}</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">{"Peritaciones técnicas en Almería"}</Link></li>
          <li>·{" "}<Link href="/perito-ingeniero-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Perito ingeniero industrial en Almería"}</Link></li>
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
