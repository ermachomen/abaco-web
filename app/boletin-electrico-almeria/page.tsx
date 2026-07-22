import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/boletin-electrico-almeria";

export const metadata: Metadata = {
  title: "Boletín eléctrico y CIE en Almería | Alta y ampliación de luz",
  description: "Boletín eléctrico o CIE en Almería para dar de alta o ampliar tu suministro. Te decimos cuándo basta el boletín y cuándo necesitas proyecto. Estudio gratis.",
  keywords: ["boletín eléctrico Almería","CIE Almería","certificado de instalación eléctrica Almería","boletín eléctrico para dar de alta la luz","ampliación de potencia Almería","boletín eléctrico vivienda","alta de suministro eléctrico Almería","memoria técnica de diseño eléctrica","proyecto eléctrico Almería","instalador autorizado boletín Andalucía"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/boletin-electrico-almeria",
    siteName: "Abaco Ingeniería",
    title: "Boletín eléctrico y CIE en Almería",
    description: "Boletín eléctrico o CIE en Almería para dar de alta o ampliar tu suministro. Te decimos cuándo basta el boletín y cuándo necesitas proyecto. Estudio gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Boletín eléctrico y CIE en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Boletín eléctrico y CIE en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boletín eléctrico y CIE en Almería",
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
  url: "https://www.ingenierial.es/boletin-electrico-almeria",
  description: "Boletín eléctrico o CIE en Almería para dar de alta o ampliar tu suministro. Te decimos cuándo basta el boletín y cuándo necesitas proyecto. Estudio gratis.",
};

const faqs = [
  {
    "q": "El boletín eléctrico lo firma un ingeniero?",
    "a": "No. El CIE lo emite y firma una empresa instaladora autorizada inscrita en la Junta de Andalucía. El ingeniero interviene cuando la normativa exige un proyecto o memoria que acompañe al certificado, algo que ocurre en instalaciones de cierta potencia, uso o riesgo."
  },
  {
    "q": "Cuánto tarda en emitirse y registrarse el CIE?",
    "a": "Con la instalación ejecutada y correcta, el instalador puede firmarlo y registrarlo telemáticamente por TECI o PUES en pocos días. El alta con la distribuidora depende luego de sus plazos. Si hace falta proyecto de ingeniero, se suma el tiempo de redacción y visado."
  },
  {
    "q": "Cada cuánto caduca el boletín?",
    "a": "La vigencia legal del CIE es de veinte años. Pasado ese plazo, o si la instalación se ha modificado o lleva mucho tiempo sin suministro, la distribuidora puede pedir uno nuevo antes de dar de alta o ampliar la potencia."
  },
  {
    "q": "Necesito boletín para ampliar la potencia al poner aerotermia o un cargador de coche?",
    "a": "Casi siempre sí. Al subir la potencia contratada hay que verificar que la instalación soporta la nueva carga y actualizar el certificado. Si la potencia supera los umbrales de la ITC-BT-04, además tendrás que aportar proyecto firmado por ingeniero."
  },
  {
    "q": "Por qué unos anuncian el boletín a 70 euros y vosotros no?",
    "a": "Esos precios suelen cubrir solo la firma, sin visita ni comprobación real de la instalación, y generan problemas cuando la distribuidora revisa. Somos oficina de ingeniería y nos centramos en los casos que exigen proyecto o legalización, con presupuesto cerrado y responsabilidad técnica, no en el boletín más barato."
  },
  {
    "q": "Trabajáis solo en Almería capital?",
    "a": "Damos servicio en Almería capital y en toda la provincia, con desplazamiento presencial cuando el caso lo requiere. El resto de la tramitación la hacemos online con firma digital FNMT, así que también atendemos Granada, Málaga, Murcia y el resto de España."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Boletín eléctrico y CIE en Almería", item: "https://www.ingenierial.es/boletin-electrico-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué certifica el CIE y quién puede firmarlo",
    "cuerpo": "El boletín o CIE certifica que la instalación de tu vivienda, local o nave es segura y cumple el REBT. Un dato clave y honesto: solo puede emitirlo una empresa instaladora autorizada e inscrita en el registro de la Junta de Andalucía, con firma electrónica avanzada, no un ingeniero por su cuenta. Tras firmarlo, se registra en Industria por TECI (viviendas y ciertos locales) o por PUES, se abona la tasa autonómica (en torno a cuarenta y ocho euros) y se presenta a e-distribución para completar el alta."
  },
  {
    "titulo": "Cuándo basta el boletín y cuándo hace falta proyecto",
    "cuerpo": "La ITC-BT-04 marca la frontera. Basta con boletín y memoria técnica de diseño, firmada por el instalador, en viviendas por debajo de 50 kW y en locales de menos de 20 kW sin pública concurrencia ni riesgos especiales. Exigen proyecto firmado por ingeniero los locales de pública concurrencia sin límite de potencia, las industrias de más de 20 kW, las viviendas de más de 50 kW, los locales húmedos por encima de 25 kW y la generación superior a 10 kW. En esos casos entra la ingeniería y la legalización eléctrica completa."
  },
  {
    "titulo": "Alta nueva, ampliación de potencia y cambio de titularidad",
    "cuerpo": "No todos los trámites son iguales. Un alta nueva exige el CIE de la instalación ya ejecutada. Ampliar potencia (aerotermia, inducción, punto de recarga) obliga a comprobar si la instalación admite la nueva carga y, a menudo, a actualizar el boletín. El cambio de titularidad solo pide boletín cuando el contrato lleva tiempo de baja o la instalación supera los veinte años. Te ayudamos a saber qué documento pide realmente tu distribuidora antes de gastar de más."
  },
  {
    "titulo": "Precio orientativo del boletín en Almería",
    "cuerpo": "Como referencia de mercado, un boletín simple para una vivienda ronda los 150 a 200 euros, a los que se suma la tasa de Industria. Verás anuncios desde 70 euros: suelen cubrir solo la firma, sin visita real ni comprobación, y a menudo dan problemas cuando la distribuidora revisa. Nosotros no jugamos a ese precio. Cuando el caso exige proyecto de ingeniero el presupuesto es distinto y siempre cerrado, sin sorpresas, con el estudio previo gratuito para que sepas de antemano qué necesitas."
  },
  {
    "titulo": "Casos que resolvemos como oficina de ingeniería",
    "cuerpo": "Cuando el boletín se queda corto, asumimos el proyecto eléctrico completo: locales de pública concurrencia, naves industriales por encima de 20 kW, legalizaciones de instalaciones antiguas sin documentación, autoconsumo y placas solares sobre 10 kW, y saltos de baja a alta tensión. Redactamos memoria y proyecto, coordinamos con tu instalador autorizado para el CIE, tramitamos ante Industria con firma FNMT y dejamos la instalación legalizada y lista para el alta. Un único interlocutor para la ingeniería y el papeleo."
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
            <Link href="/legalizacion-instalaciones-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Legalización</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/legalizacion-instalaciones-almeria" className="hover:text-slate-900">Legalización</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Boletín eléctrico y CIE en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Boletín eléctrico y CIE en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Certificado de Instalación Eléctrica (CIE) para el alta o la ampliación de potencia de tu vivienda, local o nave. Te orientamos sin coste y, si tu caso exige proyecto, lo firma un ingeniero técnico industrial colegiado desde 1983."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El boletín eléctrico, cuyo nombre oficial es Certificado de Instalación Eléctrica de Baja Tensión (CIE), es el documento que acredita que una instalación cumple el Reglamento Electrotécnico de Baja Tensión (RD 842/2002) y que permite a la distribuidora dar de alta o ampliar el suministro. Lo emite y firma una empresa instaladora autorizada, no un ingeniero, y en Andalucía se registra de forma telemática en Industria de la Junta mediante los aplicativos TECI o PUES. Es obligatorio para altas de suministro nuevas, ampliaciones de potencia contratada, cambios de titularidad, instalaciones con más de veinte años o tras un corte por impago. Su vigencia legal es de veinte años."}</p>
          <p>{"En Abaco Ingeniería (abacoingeniería) somos oficina técnica con sede en Almería: un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia. No competimos por el boletín más barato; te orientamos con claridad sobre si tu caso se resuelve con boletín del instalador o exige proyecto de ingeniero, y en ese segundo supuesto lo redactamos y visamos. Trabajamos en toda España de forma online con firma digital FNMT y nos desplazamos a Almería capital y provincia. Presupuesto cerrado y estudio previo gratuito."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Cuando el boletín no basta: legalización eléctrica</Link></li>
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">Autoconsumo y placas solares</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">Legalización de alta tensión</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Oficina de ingeniería industrial en Almería</Link></li>
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
