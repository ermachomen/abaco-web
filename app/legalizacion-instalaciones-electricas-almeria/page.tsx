import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-instalaciones-electricas-almeria";

export const metadata: Metadata = {
  title: "Legalización Instalaciones Eléctricas Almería · Baja Tensión",
  description: "Legalizamos tu instalación eléctrica de baja tensión en Almería: boletín CIE, memoria o proyecto REBT y puesta en servicio. Pide presupuesto gratis.",
  keywords: ["legalización instalaciones eléctricas Almería","legalización eléctrica baja tensión Almería","boletín eléctrico Almería","certificado instalación eléctrica CIE Almería","memoria técnica de diseño REBT","proyecto instalación eléctrica baja tensión Almería","alta de suministro eléctrico Almería","ampliación de potencia Almería","adecuación de local eléctrico Almería","puesta en servicio Industria Almería","ingeniero instalación eléctrica Almería","REBT RD 842/2002 Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-instalaciones-electricas-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de instalaciones eléctricas de baja tensión en Almería",
    description: "Legalizamos tu instalación eléctrica de baja tensión en Almería: boletín CIE, memoria o proyecto REBT y puesta en servicio. Pide presupuesto gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de instalaciones eléctricas de baja tensión en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de instalaciones eléctricas de baja tensión en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de instalaciones eléctricas de baja tensión en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-instalaciones-electricas-almeria",
  description: "Legalizamos tu instalación eléctrica de baja tensión en Almería: boletín CIE, memoria o proyecto REBT y puesta en servicio. Pide presupuesto gratis.",
};

const faqs = [
  {
    "q": "¿Cuándo basta una memoria técnica de diseño y cuándo hace falta proyecto?",
    "a": "Lo decide la ITC-BT-04 del REBT. La memoria técnica de diseño (MTD) cubre las instalaciones que no entran en los grupos que exigen proyecto: por ejemplo, la mayoría de viviendas, o comercios y oficinas de potencia moderada sin riesgos especiales. Se exige proyecto firmado por ingeniero en industrias de más de 20 kW, locales húmedos o polvorientos de más de 10 kW, edificios de más de 100 kW por caja general, viviendas unifamiliares de más de 50 kW y en cualquier local de pública concurrencia. En el estudio previo gratuito lo determinamos con tu caso concreto."
  },
  {
    "q": "¿Qué es el boletín eléctrico (CIE) y quién lo firma?",
    "a": "El boletín, oficialmente certificado de instalación eléctrica (CIE), es el documento que acredita que la instalación cumple el REBT. Lo emite y firma un instalador habilitado inscrito en el Registro Integrado Industrial en categoría de baja tensión, no un ingeniero. Cuando la instalación requiere proyecto o memoria, esos documentos sí los firma el técnico titulado, y el CIE se emite junto a ellos. Nosotros redactamos la parte de ingeniería y coordinamos con tu instalador o con uno de confianza para que el boletín salga sin retrasos."
  },
  {
    "q": "¿Necesito legalizar para ampliar la potencia contratada?",
    "a": "Sí. La potencia que puedes contratar está limitada por la que autoriza tu boletín. Si quieres más kW de los que figuran, hay que emitir un nuevo CIE y, según el salto de potencia y el tipo de local, actualizar la memoria técnica o redactar un proyecto. Es lo que ocurre al instalar maquinaria, cámaras frigoríficas o climatización potente. Revisamos la previsión de cargas y la sección de las líneas y dejamos la ampliación legalizada antes de que la comercializadora suba la potencia."
  },
  {
    "q": "Tengo un bar o una tienda, ¿siempre necesito proyecto?",
    "a": "En los locales de pública concurrencia (hostelería, comercio, gimnasios, academias, clínicas, salas de espectáculos) el REBT exige proyecto de instalación eléctrica de baja tensión con independencia de la potencia, además del alumbrado de emergencia y las protecciones de la ITC-BT-28. Por eso la parte eléctrica se integra en el proyecto de licencia de actividad del local. Redactamos ambos de forma coordinada para que no haya duplicidades ni contradicciones ante el Ayuntamiento y ante Industria."
  },
  {
    "q": "¿Cómo es el trámite en Almería con la Junta de Andalucía y con Endesa?",
    "a": "Si no hay proyecto, el instalador registra el CIE y la memoria por TECI ante la Junta de Andalucía; si hay proyecto y dirección de obra, se tramita la puesta en servicio (PUES) ante la Delegación Territorial de Industria. Para el suministro, con el boletín en regla la comercializadora contrata y e-distribución (grupo Endesa), la distribuidora en Almería, asigna el CUPS y da la luz. Nosotros llevamos el expediente completo, firmado con FNMT, de principio a fin."
  },
  {
    "q": "¿Cuánto cuesta legalizar la instalación eléctrica y trabajáis solo en Almería?",
    "a": "El precio depende de si basta boletín y memoria o hace falta proyecto, de la potencia y del tipo de local. Como orientación, un boletín de local suele moverse entre 150 y 600 euros y un proyecto parte de cifras superiores según la instalación. Somos oficina técnica con sede en Almería e ingeniero colegiado desde 1983; tramitamos el 100% online con firma FNMT en toda España y nos desplazamos a Almería capital y provincia, y también a Granada, Málaga y Murcia. Estudio previo gratuito y presupuesto cerrado."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de instalaciones eléctricas de baja tensión en Almería", item: "https://www.ingenierial.es/legalizacion-instalaciones-electricas-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Boletín (CIE), memoria técnica o proyecto: cómo saber qué necesitas",
    "cuerpo": "La ITC-BT-04 del REBT marca la frontera. Para lo sencillo basta el boletín o certificado de instalación (CIE) del instalador habilitado, a menudo con una memoria técnica de diseño (MTD). Se exige proyecto de ingeniero en industrias de más de 20 kW, locales húmedos o polvorientos de más de 10 kW, edificios de viviendas, comercios y oficinas por encima de 100 kW por caja general, viviendas unifamiliares de más de 50 kW y en todo local de pública concurrencia. En el estudio previo te decimos qué grupo te aplica."
  },
  {
    "titulo": "Alta de suministro y contratación con la distribuidora",
    "cuerpo": "Para dar de alta la luz de un local o vivienda nueva necesitas el CIE que acredita que la instalación cumple el REBT. Con él, la comercializadora tramita el contrato y e-distribución (grupo Endesa), la distribuidora en Almería, asigna el CUPS y da el suministro. Si no existe punto de conexión hay que solicitarlo a la distribuidora y valorar derechos de acometida y extensión. Preparamos la documentación técnica y coordinamos con instalador y distribuidora para que el alta no se atasque."
  },
  {
    "titulo": "Ampliación de potencia en local, nave o vivienda",
    "cuerpo": "Subir la potencia contratada exige que la instalación admita esos kW. Si superas la potencia máxima que autoriza tu boletín, hay que emitir un nuevo CIE y, según el aumento y el tipo de local, actualizar la memoria o redactar proyecto. Es lo habitual al meter maquinaria en un taller, cámaras frigoríficas en un almacén de manipulado o equipos de climatización en un comercio. Revisamos tu instalación, calculamos la previsión de cargas y dejamos la ampliación legalizada ante Industria."
  },
  {
    "titulo": "Adecuación de local y locales de pública concurrencia",
    "cuerpo": "Cambiar de actividad o reformar un local casi siempre obliga a adecuar la instalación eléctrica y volver a legalizarla. En locales de pública concurrencia (bares, restaurantes, tiendas, gimnasios, academias, clínicas) el REBT exige proyecto de ingeniero sea cual sea la potencia, con alumbrado de emergencia y las medidas de la ITC-BT-28. Esta legalización se integra con el proyecto de la licencia de actividad. Redactamos el proyecto y el certificado de dirección de obra y lo coordinamos con el resto del expediente."
  },
  {
    "titulo": "Trámite ante Industria en Andalucía: TECI y PUES",
    "cuerpo": "En Andalucía las instalaciones sin proyecto ni dirección de obra se legalizan por TECI, el sistema con el que el instalador registra el CIE y la memoria de diseño ante la Junta. Las que llevan proyecto y dirección de obra se tramitan por PUES, con la puesta en servicio ante la Delegación Territorial de Industria. Nosotros preparamos el expediente completo, firmamos digitalmente con FNMT y seguimos la tramitación hasta obtener el registro y el número de expediente."
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
          <li aria-current="page" className="text-slate-700">Legalización de instalaciones eléctricas de baja tensión en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de instalaciones eléctricas de baja tensión en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Alta de suministro, ampliación de potencia y adecuación de local o nave conforme al REBT (RD 842/2002). Gestionamos el boletín eléctrico (CIE), la memoria técnica de diseño o el proyecto y la puesta en servicio ante Industria y la distribuidora, con firma de ingeniero colegiado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La legalización de instalaciones eléctricas de baja tensión es el trámite que deja tu instalación en regla ante Industria conforme al Reglamento Electrotécnico para Baja Tensión (REBT, RD 842/2002). Es obligatoria para dar de alta el suministro de un local o vivienda, ampliar la potencia contratada o adecuar una nave del polígono a una nueva actividad. En Almería la necesitan comercios, bares, talleres, almacenes de manipulado hortofrutícola, oficinas y particulares que contratan luz o cambian de titular. Sin el certificado de instalación eléctrica (CIE) y, cuando procede, la memoria técnica de diseño o el proyecto, la distribuidora no da suministro ni el Ayuntamiento concede la licencia de actividad."}</p>
          <p>{"Somos oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años en legalizaciones eléctricas. Redactamos y firmamos la memoria de diseño o el proyecto, coordinamos con el instalador habilitado el boletín y presentamos el expediente por TECI o PUES ante la Delegación Territorial de Industria de la Junta de Andalucía. Firmamos con certificado digital FNMT, así que tramitamos el 100% online en toda España y nos desplazamos a tu local o nave en Almería capital y provincia. Estudio previo gratuito y presupuesto cerrado."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones y registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">Boletín eléctrico (CIE) en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">Legalización de alta tensión y centros de transformación en Almería</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
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
