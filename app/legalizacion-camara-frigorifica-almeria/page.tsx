import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-camara-frigorifica-almeria";

export const metadata: Metadata = {
  title: "Legalización de Cámaras Frigoríficas en Almería · RSIF",
  description: "Legalización de cámaras frigoríficas e instalaciones de frío en Almería conforme al RSIF (RD 552/2019): proyecto, inspección y registro. Ingeniero colegiado 1983.",
  keywords: ["legalización cámara frigorífica Almería","RSIF RD 552/2019","legalizar instalación frigorífica","proyecto cámara frigorífica Almería","registro industrial instalación frigorífica","inspección organismo control frigorífica","gases fluorados Almería","túnel preenfriado legalización","cámara conservación hortofrutícola","ingeniero instalaciones frigoríficas Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-camara-frigorifica-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de cámaras frigoríficas en Almería",
    description: "Legalización de cámaras frigoríficas e instalaciones de frío en Almería conforme al RSIF (RD 552/2019): proyecto, inspección y registro. Ingeniero colegiado 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de cámaras frigoríficas en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de cámaras frigoríficas en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de cámaras frigoríficas en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-camara-frigorifica-almeria",
  description: "Legalización de cámaras frigoríficas e instalaciones de frío en Almería conforme al RSIF (RD 552/2019): proyecto, inspección y registro. Ingeniero colegiado 1983.",
};

const faqs = [
  {
    "q": "Qué norma regula la legalización de una cámara frigorífica?",
    "a": "El Reglamento de seguridad para instalaciones frigoríficas y sus instrucciones técnicas complementarias, aprobado por el Real Decreto 552/2019, de 27 de septiembre. Se aplica a instalaciones de nueva construcción y a ampliaciones, modificaciones y mantenimiento de las existentes. A esto se suma la normativa sobre gases fluorados en lo relativo al refrigerante."
  },
  {
    "q": "Necesito proyecto o basta con una memoria técnica?",
    "a": "Depende de la clasificación de la instalación, que viene determinada por el refrigerante empleado y la carga del sistema. Unas instalaciones se resuelven con memoria técnica y otras exigen proyecto firmado e intervención de organismo de control. La clasificación correcta es el primer paso del encargo, y la hacemos antes de presupuestar el resto."
  },
  {
    "q": "Tengo cámaras funcionando desde hace años sin papeles, se pueden legalizar?",
    "a": "En la mayoría de casos sí, documentando lo realmente instalado y completando lo que falte para que cumpla los requisitos exigibles. Lo que no hacemos es presentar un expediente que sabemos que va a ser rechazado: si la instalación necesita una intervención previa para poder legalizarse, te lo decimos en el estudio previo."
  },
  {
    "q": "Hace falta inspección de un organismo de control?",
    "a": "Para determinadas instalaciones sí se exige un certificado de inspección emitido por una entidad acreditada como organismo de control en el campo de instalaciones frigoríficas, que verifica las condiciones de seguridad. Coordinamos nosotros esa inspección dentro del encargo para que no tengas que buscarla por tu cuenta."
  },
  {
    "q": "Esto vale también para hostelería o solo para almacenes agrícolas?",
    "a": "Vale para cualquier instalación frigorífica. En Almería el grueso son almacenes hortofrutícolas y túneles de preenfriado, pero tramitamos igualmente cámaras de restaurantes, obradores, carnicerías y supermercados. Cambia el tamaño del expediente, no el procedimiento."
  },
  {
    "q": "Trabajáis solo en Almería?",
    "a": "Tenemos la sede en Almería y nos desplazamos por toda la provincia, además de Granada, Málaga y Murcia. Para el resto de España la documentación se redacta y se firma digitalmente con certificado FNMT, coordinándonos con tu instalador frigorista local."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de cámaras frigoríficas en Almería", item: "https://www.ingenierial.es/legalizacion-camara-frigorifica-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Clasificación de la instalación y documentación exigible",
    "cuerpo": "No todas las instalaciones frigoríficas requieren lo mismo. El reglamento las clasifica atendiendo al refrigerante empleado y a la carga del sistema, y de esa clasificación depende si el expediente se resuelve con memoria técnica o exige proyecto firmado, y si es necesaria la intervención de un organismo de control. Clasificar mal la instalación es el error más caro: obliga a rehacer el expediente cuando ya se ha presentado. Empezamos siempre por ahí."
  },
  {
    "titulo": "Legalización de instalación nueva",
    "cuerpo": "Para una cámara o un conjunto frigorífico nuevo preparamos la documentación técnica completa: descripción de la instalación, refrigerante y carga, cálculo de cargas térmicas, sala de máquinas y ventilación, elementos de seguridad, detección de fugas y señalización. Se acompaña del certificado de la empresa frigorista habilitada que ejecuta la instalación y, cuando corresponde, del certificado de inspección del organismo de control. Con todo ello se inscribe en el registro de industria."
  },
  {
    "titulo": "Ampliaciones, modificaciones y cámaras sin legalizar",
    "cuerpo": "Añadir una cámara, cambiar el equipo o sustituir el refrigerante no es una operación neutra: el reglamento alcanza también a las ampliaciones y modificaciones de instalaciones existentes. Y es muy común encontrar almacenes con cámaras en servicio que nunca llegaron a inscribirse. Documentamos lo realmente instalado, identificamos qué falta para poder legalizarlo y ordenamos el expediente. Si algo no es legalizable tal y como está, te lo decimos antes de cobrarte un proyecto."
  },
  {
    "titulo": "Gases fluorados y mantenimiento obligatorio",
    "cuerpo": "A la seguridad industrial se suma la normativa sobre gases fluorados de efecto invernadero, que afecta al control de fugas, al registro de las operaciones y a la habilitación de quien manipula el refrigerante. Además, las instalaciones frigoríficas quedan sujetas a revisiones e inspecciones periódicas en función de su clasificación. Te dejamos por escrito el calendario de obligaciones que te corresponde, para que el almacén no llegue a la campaña con una instalación caducada documentalmente."
  },
  {
    "titulo": "Normativa aplicable",
    "cuerpo": "La norma de cabecera es el Real Decreto 552/2019, de 27 de septiembre, por el que se aprueban el Reglamento de seguridad para instalaciones frigoríficas y sus instrucciones técnicas complementarias, publicado en el Boletín Oficial del Estado. Conviven con ella la normativa sobre gases fluorados de efecto invernadero, en lo relativo al refrigerante y a la habilitación del personal, y el Reglamento Electrotécnico para Baja Tensión en la parte eléctrica de la instalación. Si la cámara se integra en una nave industrial, entran además los reglamentos de incendios aplicables a establecimientos industriales. Verificamos el encaje concreto de tu instalación antes de definir el alcance del expediente."
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
          <li aria-current="page" className="text-slate-700">Legalización de cámaras frigoríficas en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de cámaras frigoríficas en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Instalaciones frigoríficas conforme al Reglamento de seguridad aprobado por el RD 552/2019: proyecto o memoria según la clasificación, certificados, inspección por organismo de control y registro en industria."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Las instalaciones frigoríficas tienen reglamento propio en España: el Reglamento de seguridad para instalaciones frigoríficas, aprobado por el Real Decreto 552/2019, de 27 de septiembre, junto con sus instrucciones técnicas complementarias. Se aplica a las instalaciones de nueva construcción y también a las ampliaciones, modificaciones y mantenimiento de estas y de las existentes, que es lo que muchos almacenes de Almería hacen cada campaña sin reparar en que ese cambio abre un expediente. Redactamos la documentación técnica, coordinamos la inspección cuando procede y dejamos la instalación inscrita."}</p>
          <p>{"En la provincia esto afecta sobre todo a almacenes de manipulado hortofrutícola, túneles de preenfriado, cámaras de conservación y salas de despiece, pero también a hostelería, obradores y supermercados. La clasificación de la instalación, y con ella el nivel de exigencia documental, depende del refrigerante utilizado y de la carga del sistema. Por eso lo primero que hacemos es clasificar correctamente tu instalación: de ahí sale si necesitas proyecto o memoria, y si hay que pasar inspección por organismo de control acreditado."}</p>
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
          <li>·{" "}<Link href="/proyecto-almacen-hortofruticola-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de almacén hortofrutícola</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-climatizacion-almeria" className="text-sky-700 underline hover:no-underline">Legalización de climatización (RITE)</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial en Almería</Link></li>
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
