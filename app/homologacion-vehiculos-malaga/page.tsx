import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-vehiculos-malaga";

export const metadata: Metadata = {
  title: "Homologación de vehículos en Málaga · Ingeniero colegiado",
  description: "Homologación de vehículos en Málaga: reformas, camper, enganche, 4x4, motos y coches importados. Vemos tu vehículo en la provincia y el resto es online.",
  keywords: ["homologación de vehículos en Málaga","homologar coche Málaga","homologar moto Málaga","ingeniero homologaciones Málaga","reformas de vehículos Málaga","legalizar reforma ITV Málaga","homologación coche importado Málaga","reformas 4x4 Málaga","homologación de vehículos Costa del Sol","proyecto técnico reforma vehículo Málaga"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-vehiculos-malaga",
    siteName: "Abaco Ingeniería",
    title: "Homologación de vehículos en Málaga y provincia",
    description: "Homologación de vehículos en Málaga: reformas, camper, enganche, 4x4, motos y coches importados. Vemos tu vehículo en la provincia y el resto es online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación de vehículos en Málaga – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de vehículos en Málaga y provincia", description: "Homologación de vehículos en Málaga: reformas, camper, enganche, 4x4, motos y coches importados. Vemos tu vehículo en la provincia y el resto es online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de vehículos en Málaga",
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
    { "@type": "City", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Provincia de Málaga" },
  ],
  url: "https://www.ingenierial.es/homologacion-vehiculos-malaga",
  description: "Homologación de vehículos en Málaga: reformas, camper, enganche, 4x4, motos y coches importados. Vemos tu vehículo en la provincia y el resto es online.",
};

const faqs = [
  {
    "q": "¿Tengo que llevar el vehículo a vuestra oficina o venís vosotros a verlo?",
    "a": "Nuestra oficina técnica está en Almería y no hace falta que vengas: nos desplazamos a ver el vehículo en cualquier punto de la provincia, sea Marbella, Fuengirola, Vélez-Málaga, Antequera o Ronda. Lo demás, desde el estudio previo hasta la firma del expediente con certificado digital FNMT, se hace online, por correo y teléfono. Así no tienes que perder una mañana en desplazamientos."
  },
  {
    "q": "¿Cuánto tiempo tengo para pasar la ITV después de una reforma?",
    "a": "El artículo 8.1 del Real Decreto 866/2010 fija un plazo máximo de quince días para presentar el vehículo reformado a inspección técnica, aportando la documentación que determina el Manual de Reformas. Es un plazo corto, así que preparamos el expediente antes de que acabe la obra: el proyecto técnico si el código lo exige, la coordinación del informe de conformidad con el servicio técnico de reformas y, si procede, el certificado del taller. Llegas a la cita con la documentación completa."
  },
  {
    "q": "¿Puedo legalizar una reforma ya montada para pasar la ITV en Málaga?",
    "a": "Depende de la reforma y de cómo esté ejecutada. En el estudio previo, que es gratuito, revisamos qué se ha cambiado, localizamos su código en el Manual de Reformas, vemos qué documentación falta (proyecto técnico, informe de conformidad o certificado del taller) y si hay que adaptar algo en el vehículo. Antes de empezar te damos un presupuesto cerrado. No prometemos un resultado sin haber visto el vehículo: primero se comprueba, después se tramita."
  },
  {
    "q": "¿Qué necesito para homologar un coche importado que ya tengo en la Costa del Sol?",
    "a": "Lo primero es saber si tiene homologación europea. Si la tiene, lo habitual es la ficha técnica reducida y el certificado de conformidad COC para la inspección previa a la matriculación. Si no la tiene, por ejemplo un coche de EE. UU., se necesita la homologación individual conforme al Real Decreto 750/2010. Envíanos fotos del vehículo y de sus papeles y lo comprobamos en el estudio previo, antes de que gastes nada en adaptaciones."
  },
  {
    "q": "¿Homologáis también motos, 4x4 y furgonetas de trabajo?",
    "a": "Sí. Si quieres homologar una moto en Málaga o legalizar las modificaciones de un 4x4 o de una furgoneta de trabajo (motor, neumáticos y llantas, enganche, plazas), estudiamos cada cambio, lo situamos en su código del Manual de Reformas y te decimos qué documentación pide. Cada vehículo es distinto: cuando una modificación supone varias reformas a la vez, hay que cumplir los requisitos de cada una, y eso se calcula caso por caso."
  },
  {
    "q": "¿Cómo es el estudio previo y cuándo me dais el presupuesto?",
    "a": "Nos cuentas qué vehículo es y qué se ha cambiado o qué quieres hacer, con fotos y documentación si las tienes. Respondemos en menos de 24 horas. A partir de ahí hacemos el estudio previo, que es gratuito: qué trámite te corresponde y qué documentos hacen falta. Después te damos un presupuesto cerrado, antes de empezar. Si sigues adelante, nos desplazamos a ver el vehículo y el resto se hace online con firma digital FNMT."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Vehículos", item: "https://www.ingenierial.es/fichas-tecnicas" },
    { "@type": "ListItem", position: 3, name: "Homologación de vehículos en Málaga", item: "https://www.ingenierial.es/homologacion-vehiculos-malaga" },
  ],
};

const bloques = [
  {
    "titulo": "Reforma de vehículo: qué documentos pide cada código",
    "cuerpo": "En la homologación de vehículos en Málaga, el Real Decreto 866/2010, de 2 de julio, llama reforma a toda modificación, sustitución, incorporación o supresión hecha en un vehículo ya matriculado que cambia alguna de sus características o puede alterar los requisitos reglamentarios aplicables. Cada reforma tiene un código en el Manual de Reformas de Vehículos, y el Manual fija la documentación de cada una, que puede incluir todos o solo algunos de estos documentos: proyecto técnico con certificación final de obra, informe de conformidad y certificado del taller. El proyecto lo redacta y firma un técnico competente; el informe de conformidad lo emite un servicio técnico de reformas o el fabricante. Si el vehículo reformado corresponde a un tipo homologado, la reforma puede hacerse sin aportar proyecto técnico. Cuál te toca lo fijamos en el estudio previo."
  },
  {
    "titulo": "Enganche, camper y plazas: reformas de vehículos en Málaga",
    "cuerpo": "Entre las reformas de vehículos en Málaga más habituales hay tres. El enganche de remolque es la reforma 10.1, instalación o modificación de dispositivos de acoplamiento en vehículos de categorías M y N, por ejemplo para arrastrar una embarcación o un remolque de carga. La conversión de una furgoneta en camper se tramita como furgón vivienda, código 8.31, o como autocaravana, código 8.70; si lleva techo elevable o ventanas nuevas, puede sumarse además el 8.51 de carrocería. Y el cambio de plazas, con el 8.1 para reducir asientos y el 8.2 para aumentarlos, es frecuente en furgonetas de trabajo. Cuando una misma modificación supone varias reformas, hay que cumplir los requisitos de cada una."
  },
  {
    "titulo": "4x4 y motos: motor, llantas, neumáticos y elementos exteriores",
    "cuerpo": "En un 4x4 es frecuente acumular modificaciones. El cambio de motor es la reforma 2.3, modificación o sustitución de la unidad motriz por otra de distintas características. Los neumáticos de otra dimensión o de distinto índice de carga o velocidad se estudian con el 4.9, y las llantas, ruedas o separadores con el 4.10. Los elementos que se incorporan o se quitan en el exterior del vehículo se analizan con el 8.52, y la transformación a eléctrico o híbrido es el 2.11. Con las motos hacemos lo mismo: si quieres homologar una moto en Málaga tras cambiarle llantas, neumáticos o piezas exteriores, revisamos primero si es reforma y qué documentación exige el Manual, sin dar nada por hecho."
  },
  {
    "titulo": "Coches importados y residentes extranjeros en la Costa del Sol",
    "cuerpo": "Si te has instalado en la Costa del Sol con un coche de otro país, o has comprado uno importado, la homologación de vehículos en Málaga sigue una de dos vías. Si el vehículo tiene homologación europea, lo habitual es la ficha técnica reducida junto con el certificado de conformidad COC para la inspección previa a la matriculación. Si no la tiene, por ejemplo un coche procedente de EE. UU., hace falta la homologación individual del Real Decreto 750/2010. Un detalle importante: las modificaciones hechas antes de la matriculación definitiva en España no se tramitan como reforma, sino que deben estar incluidas en la homologación de tipo o tramitarse por homologación individual. Revisamos tu documentación y te decimos cuál es tu vía antes de empezar."
  },
  {
    "titulo": "El plazo de quince días y cómo trabajamos contigo",
    "cuerpo": "El artículo 8.1 del Real Decreto 866/2010 obliga al titular del vehículo, o a la persona que autorice, a presentar el vehículo reformado a inspección técnica en un plazo máximo de quince días, con la documentación que determina el Manual de Reformas. Por eso preparamos el expediente antes de que el taller termine la obra. El proceso es este: estudio previo gratuito y presupuesto cerrado; visita para ver el vehículo en cualquier punto de la provincia; redacción y tramitación del expediente online con firma digital FNMT; y entrega de la documentación completa para que pidas cita en la ITV. Tanto en la homologación de vehículos en Málaga como al legalizar una reforma para la ITV, este orden evita sorpresas."
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
            <Link href="/fichas-tecnicas" className="text-sm font-medium text-slate-600 hover:text-slate-900">Vehículos</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/fichas-tecnicas" className="hover:text-slate-900">Vehículos</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Homologación de vehículos en Málaga"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Málaga · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Homologación de vehículos en Málaga"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Reformas, camper, enganche, 4x4, motos y coches importados. Nos desplazamos a ver tu vehículo en cualquier punto de la provincia y tramitamos el resto online, con la firma digital FNMT de un ingeniero técnico colegiado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si necesitas homologación de vehículos en Málaga, lo primero es saber qué trámite te corresponde. En la Costa del Sol, la Axarquía, Antequera o la Serranía de Ronda los casos son muy distintos: un 4x4 con neumáticos más grandes, una moto con llantas nuevas, una furgoneta de trabajo a la que se añaden asientos o un coche que llegó de otro país con un propietario extranjero. Cada uno exige una cosa diferente. Antes de pasar por la inspección hay que determinar si lo que se ha hecho es una reforma, qué código del Manual de Reformas de Vehículos le corresponde y qué documentación pide ese código. Ese análisis es lo primero que hacemos, antes de que el taller empiece a trabajar."}</p>
          <p>{"Nuestra oficina técnica está en Almería, y por eso nos organizamos para ir a ver el vehículo allí donde esté: Marbella, Fuengirola, Vélez-Málaga, Nerja, Antequera o el Valle del Guadalhorce. El resto del trámite es online, con firma digital con certificado FNMT. Lo firma un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de ejercicio: el ingeniero de homologaciones que necesitas en Málaga sin tener que moverte tú. Si quieres homologar un coche o una moto en Málaga, empezamos con un estudio previo gratuito y te damos un presupuesto cerrado antes de comenzar. Respondemos en menos de 24 horas, también si solo quieres saber si tu modificación necesita algún trámite."}</p>
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
          <li>·{" "}<Link href="/homologacion-camper-malaga" className="text-sky-700 underline hover:no-underline">{"Homologar camper en Málaga"}</Link></li>
          <li>·{" "}<Link href="/ficha-tecnica-reducida-malaga" className="text-sky-700 underline hover:no-underline">{"Ficha técnica reducida en Málaga"}</Link></li>
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">{"Reformas de vehículos y códigos de reforma"}</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-importado" className="text-sky-700 underline hover:no-underline">{"Homologar un coche importado"}</Link></li>
          <li>·{" "}<Link href="/pasar-itv-coche-extranjero" className="text-sky-700 underline hover:no-underline">{"Pasar la ITV con un coche extranjero"}</Link></li>
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">{"Fichas técnicas y homologaciones"}</Link></li>
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
