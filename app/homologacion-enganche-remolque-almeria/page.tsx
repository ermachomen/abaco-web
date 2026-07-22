import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-enganche-remolque-almeria";

export const metadata: Metadata = {
  title: "Homologar Enganche o Bola de Remolque en Almería · ITV",
  description: "Homologamos tu enganche o bola de remolque en la ITV de Almería: certificado de taller, informe de conformidad y acta de reforma según el Manual de Reformas. Ingeniero colegiado, presupuesto cerrado y estudio previo gratuito.",
  keywords: ["homologar enganche remolque Almería","homologación bola remolque Almería","legalizar gancho remolque ITV Almería","enganche remolque ITV Almería","reforma enganche Manual de Reformas","certificado enganche remolque","informe de conformidad bola remolque","masa máxima remolcable ficha técnica","homologar enganche desmontable Almería","proyecto enganche remolque Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-enganche-remolque-almeria",
    siteName: "Abaco Ingeniería",
    title: "Homologación de enganche o bola de remolque en Almería",
    description: "Homologamos tu enganche o bola de remolque en la ITV de Almería: certificado de taller, informe de conformidad y acta de reforma según el Manual de Reformas. Ingeniero colegiado, presupuesto cerrado y estudio previo gratuito.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación de enganche o bola de remolque en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de enganche o bola de remolque en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de enganche o bola de remolque en Almería",
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
  url: "https://www.ingenierial.es/homologacion-enganche-remolque-almeria",
  description: "Homologamos tu enganche o bola de remolque en la ITV de Almería: certificado de taller, informe de conformidad y acta de reforma según el Manual de Reformas. Ingeniero colegiado, presupuesto cerrado y estudio previo gratuito.",
};

const faqs = [
  {
    "q": "¿Cuánto cuesta homologar un enganche de remolque en Almería?",
    "a": "La tramitación técnica parte desde unos 120 € más IVA cuando el caso no necesita proyecto (turismo moderno con enganche homologado). Si el vehículo exige proyecto (antiguos, especiales o autocaravanas) damos presupuesto cerrado según el modelo. A eso hay que añadir la pieza, su montaje en taller autorizado y las tasas de la ITV de reforma en Almería, habitualmente entre 40 y 90 €. El estudio previo es gratuito."
  },
  {
    "q": "¿Cuánto tiempo tengo para pasar la ITV tras instalar la bola?",
    "a": "El Manual de Reformas fija un plazo máximo de 15 días desde la instalación para presentar el vehículo en la ITV y legalizar el enganche. Conviene tener la documentación preparada antes del montaje para no apurar el plazo; nosotros te la dejamos lista para que solo tengas que pedir cita en tu estación ITV de Almería."
  },
  {
    "q": "¿Necesito proyecto de ingeniero o basta con el certificado del taller?",
    "a": "Depende del vehículo. En muchos turismos M1 recientes, con enganche que lleva su contraseña de homologación y masas remolcables en la ficha, es suficiente el certificado del taller más el informe de conformidad que firmamos nosotros. Requieren proyecto técnico completo los vehículos más antiguos, los especiales (autocaravanas, industriales) o los enganches sin marca de homologación. Lo confirmamos gratis revisando tu ficha técnica."
  },
  {
    "q": "¿Puedo poner el enganche yo mismo o en cualquier taller?",
    "a": "La instalación debe realizarla un taller inscrito en el registro industrial, que emite el certificado de montaje (anexo III) imprescindible para la ITV. Un montaje por cuenta propia no es admisible para legalizar la reforma. Si aún no lo has instalado, te orientamos sobre qué enganche comprar para que sea compatible con tu vehículo y con el remolque que quieres arrastrar."
  },
  {
    "q": "¿Qué pasa si circulo con la bola sin homologar?",
    "a": "La ITV resultará desfavorable y no podrás remolcar legalmente. Circular con un enganche no inscrito puede acarrear sanción y la obligación de regularizar o desmontar el dispositivo. Además, en caso de accidente arrastrando un remolque no declarado, el seguro puede rechazar la cobertura. Homologarlo es rápido y evita todos estos riesgos."
  },
  {
    "q": "¿Cuánto peso podré remolcar una vez homologado?",
    "a": "Lo determinan los campos O.1 (masa remolcable con freno) y O.2 (sin freno) de tu ficha técnica, junto con el valor D del enganche instalado y la masa máxima del conjunto. La reforma refleja el límite legal real de tu vehículo. Antes de comprar remolque o caravana comprobamos que el gancho elegido cubre el peso que necesitas arrastrar."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Homologación de enganche o bola de remolque en Almería", item: "https://www.ingenierial.es/homologacion-enganche-remolque-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "¿Cuándo viene el enganche de fábrica y cuándo hay que homologarlo?",
    "cuerpo": "Muchos turismos y furgonetas salen predispuestos de fábrica: el fabricante ya declaró el dispositivo de acoplamiento en la homologación y la tarjeta ITV trae rellenos los campos de masas remolcables (O.1 con freno y O.2 sin freno) más la placa con la contraseña de homologación. En ese supuesto basta montar el kit original correspondiente y no hace falta reforma. En cambio, si el enganche se instala despues de matricular el vehiculo, o el modelo no venia preparado, la ITV lo trata como reforma de importancia y exige legalizarlo antes de poder remolcar. Revisamos tu ficha tecnica y te confirmamos en que caso estas antes de tramitar nada."
  },
  {
    "titulo": "Código de reforma y documentación exigida en la ITV",
    "cuerpo": "La instalación de un dispositivo de acoplamiento se clasifica en el grupo 8 del Manual de Reformas, dispositivos de unión de vehículos, reforma tipo 8.50. Para inscribirla necesitarás el certificado del taller instalador (anexo III, que desde la 6ª revisión del manual se emite en dos modelos, con o sin proyecto), el informe de conformidad del enganche y la acreditación de que la pieza cumple el Reglamento CEPE/ONU R55 o la antigua Directiva 94/20/CE (marca e-mark en la placa). Nosotros redactamos y firmamos el informe de conformidad y, si tu vehículo lo requiere, el proyecto técnico completo, dejándote la carpeta lista para la inspección de reforma."
  },
  {
    "titulo": "Con proyecto o sin proyecto: de qué depende tu caso",
    "cuerpo": "No todos los enganches necesitan lo mismo. Un turismo M1 moderno, con un enganche que lleva su propia contraseña de homologación y masas remolcables en ficha, suele resolverse con certificado de taller e informe de conformidad, sin proyecto. Requieren proyecto técnico firmado por ingeniero los vehículos matriculados antes de determinadas fechas, los que no tienen declarada masa remolcable, los enganches sin contraseña o fabricados a medida, y los vehículos especiales como autocaravanas, ambulancias o industriales. En el estudio previo gratuito analizamos matrícula, categoría y placa del enganche para decirte con certeza qué documento aplica y cuánto cuesta."
  },
  {
    "titulo": "Masa máxima remolcable: cuánto podrás arrastrar",
    "cuerpo": "La homologación no es un simple sello: define legalmente cuánto puedes remolcar. Los campos O.1 y O.2 de la ficha técnica recogen la masa máxima remolcable con freno y sin freno, y deben ser compatibles con el valor D del enganche instalado (la fuerza que resiste el acoplamiento) y con la masa máxima autorizada del conjunto. Comprobamos que el gancho elegido cubre el peso del remolque, caravana o portacoches que quieres arrastrar; si los campos aparecen a cero, el vehículo no puede remolcar hasta que la reforma los actualice. Así evitas comprar un remolque que después no podrás matricular a tu vehículo."
  },
  {
    "titulo": "Tipos de enganche y precio orientativo en Almería",
    "cuerpo": "Tramitamos los tres formatos habituales: bola fija (la más económica), enganche desmontable o de cuello de cisne (se retira para no molestar en el paragolpes) y enganche retráctil eléctrico (se oculta con un botón, el más caro). El coste se reparte entre la pieza y su montaje en taller autorizado, la tramitación técnica y las tasas de ITV. Como orientación, nuestra documentación parte desde 120 € más IVA en los casos sin proyecto; con proyecto damos presupuesto cerrado según vehículo. Súmale las tasas de la inspección de reforma en Almería, en torno a 40-90 €. Recuerda: tienes un máximo de 15 días desde la instalación para presentarte en la ITV."
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
          <li aria-current="page" className="text-slate-700">Homologación de enganche o bola de remolque en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Homologación de enganche o bola de remolque en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos la instalación de tu gancho de remolque en la ITV de Almería con certificado, informe de conformidad y, cuando procede, proyecto técnico firmado por ingeniero colegiado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Has instalado una bola o enganche de remolque en tu coche, furgoneta o autocaravana y necesitas legalizarlo para pasar la ITV en Almería. Toda incorporación posterior a la matriculación es una reforma de importancia según el Manual de Reformas de Vehículos (RD 866/2010 y Orden ICT 1212/2018) y debe quedar reflejada en la tarjeta ITV. En Abaco Ingeniería, oficina técnica con sede en Almería e ingeniero técnico industrial colegiado desde 1983, preparamos toda la documentación (certificado de taller, informe de conformidad y, cuando el caso lo exige, proyecto técnico) para que tu gancho quede inscrito sin sobresaltos. Estudio previo gratuito y presupuesto cerrado, sin sorpresas de última hora."}</p>
          <p>{"Circular con el enganche sin homologar no solo expone a sanción: sin la reforma inscrita la ITV resulta desfavorable y no podrás vincular legalmente un remolque, un portabicis matriculado o una caravana a tu vehículo. Trabajamos el 100% online con firma digital FNMT para toda España y nos desplazamos a las estaciones ITV de Almería capital, El Ejido, Huércal de Almería, Roquetas de Mar y Vícar. Desde el primer contacto te decimos si tu caso necesita proyecto o basta con certificado, y qué masa máxima podrás remolcar según los campos de tu ficha técnica."}</p>
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
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Homologación y fichas técnicas de vehículos</Link></li>
          <li>·{" "}<Link href="/homologacion-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">Homologación de vehículos en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">Homologación de reformas de vehículos (nacional)</Link></li>
          <li>·{" "}<Link href="/ficha-tecnica-reducida-almeria" className="text-sky-700 underline hover:no-underline">Ficha técnica reducida en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-camper-almeria" className="text-sky-700 underline hover:no-underline">Homologación de camper y autocaravana en Almería</Link></li>
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
