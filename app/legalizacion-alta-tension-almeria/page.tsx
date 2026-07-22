import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-alta-tension-almeria";

export const metadata: Metadata = {
  title: "Legalización de Alta Tensión y Centros de Transformación Almería",
  description: "Legalizamos centros de transformación y líneas de alta tensión en Almería: proyecto de ingeniero y puesta en servicio ante la Junta. Pide presupuesto gratis.",
  keywords: ["legalización alta tensión Almería","centro de transformación Almería","proyecto centro de transformación Almería","legalizar línea de alta tensión Almería","ficha técnica alta tensión un solo usuario Andalucía","puesta en servicio PUES Almería","ingeniero alta tensión Almería","inspección OCA centro de transformación Almería","CT abonado Almería","proyecto RAT RD 337/2014"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-alta-tension-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de alta tensión y centros de transformación en Almería",
    description: "Legalizamos centros de transformación y líneas de alta tensión en Almería: proyecto de ingeniero y puesta en servicio ante la Junta. Pide presupuesto gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de alta tensión y centros de transformación en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de alta tensión y centros de transformación en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de alta tensión y centros de transformación en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-alta-tension-almeria",
  description: "Legalizamos centros de transformación y líneas de alta tensión en Almería: proyecto de ingeniero y puesta en servicio ante la Junta. Pide presupuesto gratis.",
};

const faqs = [
  {
    "q": "¿Qué se considera alta tensión y por qué necesito un proyecto de ingeniero?",
    "a": "Es alta tensión cualquier instalación que trabaja por encima de 1 kV; los consumos industriales y agrícolas de Almería suelen conectarse en media tensión a 15 o 20 kV. El RD 337/2014 (RAT) obliga a redactar un proyecto firmado por técnico competente para construir o modificar un centro de transformación o una línea de alta tensión. A diferencia de la baja tensión, aquí no basta el boletín del instalador: hacen falta proyecto, dirección de obra y puesta en servicio ante Industria."
  },
  {
    "q": "¿Qué diferencia hay entre la ficha técnica de un solo usuario y un proyecto completo?",
    "a": "La ficha técnica descriptiva de alta tensión es un procedimiento simplificado que Andalucía admite cuando la instalación sirve a un único usuario y no requiere autorización administrativa previa. Es más rápida y económica que el proyecto ordinario e incluye una declaración responsable del promotor; recientemente se ha ampliado a acometidas y líneas de hasta 30 kV. Si tu centro de transformación alimenta a varios usuarios o supera esos supuestos, necesitarás proyecto completo. Lo determinamos en el estudio previo gratuito."
  },
  {
    "q": "¿Mi centro de transformación necesita autorización administrativa previa?",
    "a": "Depende del tipo de instalación. Muchos CT de abonado y líneas de un solo usuario no requieren autorización previa y se legalizan directamente mediante su puesta en servicio (PUES) con proyecto o ficha técnica. Otras instalaciones de mayor entidad sí pasan por autorización administrativa. Analizamos tu caso, clasificamos correctamente el expediente y elegimos la vía adecuada para que no se paralice ni el trámite ni el suministro."
  },
  {
    "q": "¿Cómo se coordina la legalización con la distribuidora, E-Redes o Endesa?",
    "a": "Todo consumo en alta tensión depende de un punto de conexión con la red de distribución. Gestionamos con la distribuidora de la zona (E-Redes o e-distribución de Endesa) la potencia y la tensión de servicio, los condicionantes técnicos de la acometida y, cuando la línea o el CT se ceden a la red, la documentación que la compañía exige para aceptarlos. Esa coordinación evita rechazos y retrasos en la puesta en marcha."
  },
  {
    "q": "¿Cada cuánto hay que inspeccionar un centro de transformación?",
    "a": "Las instalaciones de alta tensión llevan una inspección inicial por Organismo de Control Autorizado (OCA) antes de la puesta en servicio y, después, inspecciones periódicas cada tres años con carácter general (ITC-RAT 23). El CT debe mantenerse además conforme a la reglamentación. Preparamos la instalación y la documentación para superar la inspección y te orientamos sobre el mantenimiento obligatorio para conservar el suministro sin incidencias."
  },
  {
    "q": "¿Trabajáis en toda la provincia de Almería y cuánto cuesta legalizar la alta tensión?",
    "a": "Somos oficina técnica con sede en Almería e ingeniero colegiado desde 1983. Tramitamos online con firma FNMT en toda España y nos desplazamos a Almería capital y provincia (y a Granada, Málaga y Murcia) para el reconocimiento del CT o de la línea. El coste depende de la potencia del transformador, de la tensión y de si va por ficha técnica o por proyecto; tras un estudio previo gratuito damos un presupuesto cerrado, sin variaciones posteriores."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de alta tensión y centros de transformación en Almería", item: "https://www.ingenierial.es/legalizacion-alta-tension-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Alta tensión: cuándo la normativa obliga a proyecto",
    "cuerpo": "Se considera alta tensión toda instalación por encima de 1 kV; en Almería el consumo industrial y agrícola se conecta habitualmente en media tensión a 15 o 20 kV. El RD 337/2014 (RAT) y sus ITC-RAT exigen proyecto firmado por técnico competente para construir, ampliar o modificar un centro de transformación o una línea de alta tensión. No basta un boletín de instalador, como en baja tensión: el expediente incluye proyecto, certificado de dirección de obra y las verificaciones del instalador autorizado en AT."
  },
  {
    "titulo": "Centros de transformación de abonado (CT)",
    "cuerpo": "El centro de transformación es el conjunto de aparamenta de alta tensión, transformador y cuadro de baja tensión que reduce la tensión de la red al nivel de tu instalación. Proyectamos y legalizamos CT de abonado en cabina prefabricada, de obra o compacta, aplicando la ITC-RAT 07 y siguientes: cálculo de intensidades y cortocircuito, red de tierras, protecciones, enclavamientos y aparellaje. Redactamos el proyecto, dirigimos la obra y tramitamos su puesta en servicio, tanto en CT nuevos como en la legalización de centros existentes sin documentar."
  },
  {
    "titulo": "Ficha técnica de alta tensión para un solo usuario",
    "cuerpo": "Cuando la instalación da servicio a un único usuario, Andalucía permite tramitarla mediante la ficha técnica descriptiva de alta tensión (Orden de 5 de marzo de 2013), un procedimiento más ágil que el proyecto completo y sin autorización administrativa previa. Su ámbito se ha ampliado a acometidas y líneas de hasta 30 kV que pueden cederse a la distribuidora, con declaración responsable del promotor. Valoramos en el estudio previo si tu caso encaja en la ficha técnica o exige proyecto ordinario, para elegir la vía más rápida y económica."
  },
  {
    "titulo": "Puesta en servicio (PUES) y coordinación con la distribuidora",
    "cuerpo": "La instalación se registra ante la Delegación de Industria de la Junta de Andalucía a través del tramitador telemático PUES, presentando proyecto o ficha, certificados y, cuando procede, el acta de inspección. En paralelo gestionamos el punto de conexión y los condicionantes técnicos con la empresa distribuidora de la zona (E-Redes o e-distribución de Endesa): potencia, tensión de servicio y, si la acometida se cede a la red, la documentación que la distribuidora exige para su aceptación."
  },
  {
    "titulo": "Inspección OCA y mantenimiento periódico",
    "cuerpo": "Los centros de transformación y las líneas de alta tensión están sujetos a inspecciones periódicas por un Organismo de Control Autorizado (OCA), con carácter general cada tres años según la ITC-RAT 23, además de la inspección inicial previa a la puesta en servicio. Preparamos la instalación y la documentación para superar esas inspecciones y te orientamos sobre el contrato de mantenimiento que la reglamentación exige para mantener el CT en servicio y evitar expedientes o cortes de suministro."
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
          <li aria-current="page" className="text-slate-700">Legalización de alta tensión y centros de transformación en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de alta tensión y centros de transformación en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto de ingeniero, ficha técnica de un solo usuario y puesta en servicio (PUES) para tu centro de transformación o línea de alta tensión en Almería, con coordinación con la distribuidora y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La legalización de alta tensión es el conjunto de trámites que dejan en regla una instalación eléctrica que trabaja por encima de 1 kV: un centro de transformación (CT), una línea aérea o subterránea de alta tensión o la acometida propia de una industria o explotación agrícola. La normativa de referencia es el Reglamento sobre condiciones técnicas y garantías de seguridad en instalaciones de alta tensión (RD 337/2014, RAT) y sus instrucciones ITC-RAT, que exigen un proyecto firmado por ingeniero para ejecutar y poner en marcha este tipo de instalaciones. Afecta a naves y polígonos de Almería, invernaderos, bombeos de riego, plantas de manipulado y a cualquier consumo que se conecta en media tensión a la red de distribución."}</p>
          <p>{"En Abaco Ingeniería somos oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años en instalaciones industriales. Redactamos el proyecto o la ficha técnica de un solo usuario, asumimos la dirección de obra, coordinamos el punto de conexión con la distribuidora y presentamos la puesta en servicio ante Industria de la Junta de Andalucía. Firmamos con certificado FNMT y tramitamos online en toda España, con desplazamiento presencial a Almería capital y provincia. Estudio previo gratuito y presupuesto cerrado, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas en Almería</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">Boletín eléctrico en Almería</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">Legalización de placas solares en Almería</Link></li>
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
