import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-camper-granada";

export const metadata: Metadata = {
  title: "Homologar camper en Granada | Proyecto técnico e ITV",
  description: "Homologar camper en Granada: proyecto técnico, certificados e inspección de la reforma. Techo elevable, calefacción y mobiliario. Estudio previo gratis.",
  keywords: ["homologar camper en Granada","homologación camper Granada","homologar furgoneta camper Granada","camperizar furgoneta Granada","homologar techo elevable","autocaravana homologación Granada","legalizar camper ya montada","furgón vivienda homologación Granada","proyecto técnico camper","certificado del taller anexo III"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-camper-granada",
    siteName: "Abaco Ingeniería",
    title: "Homologar camper en Granada: proyecto e ITV de reforma",
    description: "Homologar camper en Granada: proyecto técnico, certificados e inspección de la reforma. Techo elevable, calefacción y mobiliario. Estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologar camper en Granada: proyecto, certificados e ITV – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologar camper en Granada: proyecto e ITV de reforma", description: "Homologar camper en Granada: proyecto técnico, certificados e inspección de la reforma. Techo elevable, calefacción y mobiliario. Estudio previo gratis.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologar camper en Granada: proyecto, certificados e ITV",
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
    { "@type": "City", name: "Granada" },
    { "@type": "AdministrativeArea", name: "Provincia de Granada" },
  ],
  url: "https://www.ingenierial.es/homologacion-camper-granada",
  description: "Homologar camper en Granada: proyecto técnico, certificados e inspección de la reforma. Techo elevable, calefacción y mobiliario. Estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Qué necesito para homologar una camper en Granada?",
    "a": "Depende de lo montado, pero el punto de partida son la ficha técnica y fotos del interior, del techo y de las instalaciones. Con eso valoramos la reforma, que como camperización corresponde al código 8.31 (furgón vivienda) o al 8.70 (autocaravana) del Manual de Reformas, y determinamos la documentación: proyecto técnico, certificado de dirección final de obra y certificado del taller, entre otros. El estudio previo es gratuito y te dice qué falta antes de pasar la inspección."
  },
  {
    "q": "¿Hay que homologar el techo elevable y las ventanas?",
    "a": "Sí, cuando se ha cortado la carrocería para montarlos. El Manual de Reformas de Vehículos recoge como código 8.51 las modificaciones que afecten a la carrocería, y el corte de techo para un techo elevable o la apertura de ventanas son ejemplos. No basta con atornillar un kit: hay que documentar la intervención con lo que el Manual pida para tu caso, incluido el informe de conformidad del kit si lo tiene."
  },
  {
    "q": "¿De cuánto tiempo dispongo para pasar la inspección tras la reforma?",
    "a": "El artículo 8.1 del RD 866/2010 obliga al titular del vehículo reformado a presentarlo a inspección técnica en un plazo máximo de quince días, aportando la documentación que determine el Manual de Reformas. Por eso lo prudente es cerrar proyecto y certificados antes de terminar la obra. Si tu camper ya está hecha, no esperes más: pide el estudio previo y vemos cómo regularizarla cuanto antes."
  },
  {
    "q": "¿Puedo legalizar una camper que ya monté yo?",
    "a": "En muchos casos sí, aunque depende de lo montado. Legalizar una camperización ya hecha consiste en reconstruir el expediente: fotos, ficha técnica, datos de cada equipo y, si procede, cálculos y comprobaciones sobre lo instalado. Algunas partes pueden ser legalizables tal cual y otras necesitar ajustes, y el certificado del taller exige una empresa que asuma la ejecución. En el estudio previo te decimos qué está bien y qué hay que corregir."
  },
  {
    "q": "¿La calefacción estacionaria y el aislamiento también se documentan?",
    "a": "Conviene documentarlos: son instalaciones habituales en campers que se usan en invierno y forman parte de la reforma. Los describimos en el proyecto con el modelo y la ubicación del calefactor, la toma de aire, la salida de gases, los anclajes, el material aislante y el peso añadido. En el estudio previo revisamos tu instalación concreta y te indicamos qué datos necesitamos de cada equipo."
  },
  {
    "q": "¿Cómo trabajáis desde Almería y cómo se fija el presupuesto?",
    "a": "Tenemos sede en Almería y nos desplazamos a Granada para ver la furgoneta; el resto del trámite es online, con firma digital FNMT. No damos cifras sin conocer el vehículo: tras el estudio previo gratuito te entregamos un presupuesto cerrado, que depende de las reformas montadas y de la documentación que haya que preparar. Respondemos en menos de 24 horas en el 670 607 830."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Vehículos", item: "https://www.ingenierial.es/fichas-tecnicas" },
    { "@type": "ListItem", position: 3, name: "Homologar camper en Granada: proyecto, certificados e ITV", item: "https://www.ingenierial.es/homologacion-camper-granada" },
  ],
};

const bloques = [
  {
    "titulo": "Camper para Sierra Nevada, la Alpujarra y la costa",
    "cuerpo": "Quien quiere homologar camper en Granada suele buscar una furgoneta que sirva de base para subir a Sierra Nevada, recorrer la Alpujarra y bajar a la costa sin cambiar de cama. Ese uso en invierno condiciona la obra: calefacción estacionaria, aislamiento de paredes y techo, y baterías auxiliares que aguanten un mayor consumo. Todo ello forma parte de la reforma y conviene documentarlo desde el principio. En el proyecto describimos el modelo de calefactor, dónde va instalado, cómo se resuelven la toma de aire y la salida de gases, el material aislante y el peso que suma, y comprobamos que el conjunto sigue dentro de la masa máxima autorizada. Si ya lo has montado, nos bastan fotos y los datos de los equipos para ver qué falta."
  },
  {
    "titulo": "Qué se homologa en una camperización",
    "cuerpo": "Una camperización no es una sola reforma, sino un conjunto que se documenta en un único expediente. Incluye el mobiliario fijo (cama, cocina, armarios) con sus anclajes; la instalación eléctrica auxiliar, con baterías, cargador, placa solar si la hay y protecciones; el circuito de agua, con depósitos, bomba y fregadero; la calefacción estacionaria y el aislamiento; el techo elevable y las ventanas, que obligan a intervenir en la carrocería; y las plazas de asiento, tanto si quitas las traseras como si añades otras. De cada elemento reunimos marca, modelo, ubicación y fijación, y lo contrastamos con la ficha técnica del vehículo para que la inspección encuentre un expediente coherente y no piezas sueltas."
  },
  {
    "titulo": "Códigos de reforma: 8.31, 8.70, 8.51, 8.52, 8.1 y 8.2",
    "cuerpo": "El Manual de Reformas de Vehículos (revisión 7.ª, corrección 2.ª) clasifica cada modificación con un código. La camperización como tal se legaliza por la 8.31 si el vehículo queda como furgón vivienda, o por la 8.70, transformación a autocaravana y sus modificaciones, si se busca esa clasificación. Si para montar un techo elevable o abrir ventanas se corta la carrocería, entra además la 8.51, modificaciones que afecten a la carrocería, y por eso homologar un techo elevable pesa tanto en el expediente. Los elementos que incorporas en el exterior pueden encajar en la 8.52. Y si quitas asientos o añades otros, hablamos de la 8.1, reducción de plazas, o de la 8.2, aumento de plazas. Una misma camper suele sumar varios códigos: en el estudio previo decidimos cuáles aplican a tu caso."
  },
  {
    "titulo": "Proyecto técnico, dirección de obra y certificado del taller",
    "cuerpo": "Para homologar una camper en Granada, el Manual de Reformas contempla, según el alcance de la reforma, estos documentos. El proyecto técnico, firmado por ingeniero, describe lo que se modifica con memoria, cálculos y planos. El certificado de dirección final de obra acredita que lo ejecutado se ajusta al proyecto. El certificado del taller, en el modelo del anexo III del RD 866/2010, es aquel en que una empresa, con su número de registro industrial, certifica que ha realizado la reforma y asume la responsabilidad de su ejecución conforme a la normativa, a las normas del fabricante y al proyecto. Si el kit del techo trae informe de conformidad, lo incorporamos. Si montaste tú la camper, en el estudio previo vemos con qué empresa se cierra ese certificado."
  },
  {
    "titulo": "Plazo de quince días y pasos del trámite",
    "cuerpo": "Al homologar camper en Granada hay un plazo que no conviene perder: el RD 866/2010 obliga al titular de un vehículo reformado a presentarlo a inspección técnica en el plazo máximo de quince días, aportando la documentación que determine el Manual de Reformas (art. 8.1). Por eso conviene tener el expediente listo antes de terminar la obra. El camino es este: estudio previo gratuito con fotos y ficha técnica; proyecto técnico; ejecución y certificados; inspección técnica de la reforma en una estación ITV; y, si el resultado es favorable, diligencia de la tarjeta ITV con la reforma reflejada. Firmamos con certificado digital FNMT, nos desplazamos a ver la furgoneta y el resto lo tramitas desde casa."
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
          <li aria-current="page" className="text-slate-700">{"Homologar camper en Granada: proyecto, certificados e ITV"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Granada · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Homologar camper en Granada: proyecto, certificados e ITV"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto técnico, certificados y trámite de reforma para legalizar tu furgoneta camper, con techo elevable, calefacción estacionaria y mobiliario fijo. Nos desplazamos a ver el vehículo en Granada y el resto lo hacemos online."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si quieres homologar camper en Granada, el punto de partida es entender que camperizar una furgoneta es una reforma de vehículo: en el Manual de Reformas, la transformación a furgón vivienda se legaliza por el código 8.31 y la transformación a autocaravana por el 8.70, y el resultado debe quedar reflejado en la ficha técnica tras pasar la inspección técnica. En Abaco Ingeniería, oficina técnica con sede en Almería, redactamos el proyecto técnico, ordenamos los certificados y preparamos el expediente para esa inspección. Tanto si vas a empezar la obra como si ya la tienes terminada, estudiamos tu furgoneta, te decimos qué se puede legalizar tal como está y qué habría que corregir, y te damos un presupuesto cerrado antes de empezar."}</p>
          <p>{"Detrás de Abaco hay un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de trayectoria. En Granada nos desplazamos a ver tu furgoneta, ya esté en la capital, en el área metropolitana, en la Costa Tropical, en la Alpujarra o en Guadix, Baza y Loja; el resto del trámite es online, con firma digital FNMT. Cuando alguien camperiza por su cuenta una furgoneta de segunda mano, algo frecuente entre estudiantes y gente joven, suele llegar con la obra hecha y dudas sobre qué es legalizable: se resuelve revisando fotos, ficha técnica y equipos. El estudio previo es gratuito y respondemos en menos de 24 horas."}</p>
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
          <li>·{" "}<Link href="/homologacion-vehiculos-granada" className="text-sky-700 underline hover:no-underline">{"Homologación de vehículos en Granada"}</Link></li>
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">{"Reformas de vehículos y códigos de reforma"}</Link></li>
          <li>·{" "}<Link href="/homologacion-camper-malaga" className="text-sky-700 underline hover:no-underline">{"Homologar camper en Málaga"}</Link></li>
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
