import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-camper-malaga";

export const metadata: Metadata = {
  title: "Homologar camper en Málaga: legaliza tu furgoneta",
  description: "Homologar camper en Málaga con ingeniero colegiado: proyecto técnico, certificados y reforma de tu furgoneta. Nos desplazamos y el resto es online.",
  keywords: ["homologar camper en Málaga","homologación camper Málaga","homologar furgoneta camper Málaga","camperizar furgoneta Málaga legal","techo elevable homologación","autocaravana homologación Málaga","legalizar camper Málaga","comprar camper segunda mano Málaga","proyecto técnico camper","ingeniero homologación camper"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-camper-malaga",
    siteName: "Abaco Ingeniería",
    title: "Homologación de camper en Málaga: ingeniero colegiado",
    description: "Homologar camper en Málaga con ingeniero colegiado: proyecto técnico, certificados y reforma de tu furgoneta. Nos desplazamos y el resto es online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologar camper en Málaga: legaliza tu furgoneta camperizada – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de camper en Málaga: ingeniero colegiado", description: "Homologar camper en Málaga con ingeniero colegiado: proyecto técnico, certificados y reforma de tu furgoneta. Nos desplazamos y el resto es online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologar camper en Málaga: legaliza tu furgoneta camperizada",
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
  url: "https://www.ingenierial.es/homologacion-camper-malaga",
  description: "Homologar camper en Málaga con ingeniero colegiado: proyecto técnico, certificados y reforma de tu furgoneta. Nos desplazamos y el resto es online.",
};

const faqs = [
  {
    "q": "¿Es obligatorio homologar una camper en Málaga?",
    "a": "Si la camperización cambia lo que consta en la ficha técnica y en la tarjeta ITV (mobiliario fijo, instalaciones, techo elevable, ventanas o plazas), es una reforma y el RD 866/2010 exige tramitarla con la documentación del Manual de Reformas. No todo lo es: según el Manual, lo que se monta o desmonta sin herramientas, o con las normales del fabricante, no se considera reforma. Qué es reforma en tu furgoneta lo decidimos en el estudio previo, con fotos y la ficha técnica."
  },
  {
    "q": "¿Puedo comprar una camper sin homologar y legalizarla después?",
    "a": "A veces, pero depende de cómo esté hecha. Si hay documentación de la obra y las instalaciones están certificadas, se puede completar el expediente. Si falta casi todo, habrá que justificar cortes, anclajes y masas a posteriori o rehacer partes. Una reforma sin legalizar no desaparece con la compraventa. Por eso conviene que la vea un ingeniero antes de pagar: nos desplazamos a verla y te decimos qué falta, sin prometer resultados que dependen de la inspección."
  },
  {
    "q": "¿El techo elevable necesita proyecto técnico?",
    "a": "Es una modificación de carrocería (8.51) y el Manual contempla proyecto técnico, certificación final de obra, informe de conformidad y certificado del taller. La excepción: si la apertura no afecta a la estructura, se tramita sin proyecto técnico ni certificado de ejecución de obra, y el informe de conformidad debe indicarlo de forma expresa. Para saber en cuál de los dos casos estás hay que ver el techo y cómo se corta, antes de hacerlo."
  },
  {
    "q": "¿Qué firman el ingeniero y el taller en una camper?",
    "a": "El proyecto técnico y la certificación final de obra los suscribe un técnico titulado competente; en la certificación consta el taller y la fecha de la obra. El taller que ejecutó la reforma emite su certificado según el modelo del anexo III del RD 866/2010 y asume la responsabilidad de la ejecución. El informe de conformidad lo emite un servicio técnico de reformas o el fabricante del vehículo, y es a quien se presenta el proyecto."
  },
  {
    "q": "¿Cuánto tiempo tengo para pasar la inspección tras la reforma?",
    "a": "El art. 8.1 del RD 866/2010 obliga al titular del vehículo, o a la persona que él autorice, a presentarlo a inspección técnica en un plazo máximo de quince días, aportando la documentación que determina el Manual de Reformas. Por eso el expediente (proyecto, certificados y demás) debe estar preparado antes de terminar la obra, no después. Si aún no has empezado, es el mejor momento para consultarnos."
  },
  {
    "q": "¿Tengo que llevar la furgoneta a Almería para homologarla?",
    "a": "No. Somos una oficina técnica con sede en Almería, pero nos desplazamos a ver tu furgoneta en la provincia de Málaga, ya esté en la Costa del Sol, la Axarquía, Antequera, Ronda o el Valle del Guadalhorce, y el resto del trámite lo hacemos online, con firma digital con certificado FNMT. Empezamos con un estudio previo gratuito y te damos un presupuesto cerrado antes de arrancar."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Vehículos", item: "https://www.ingenierial.es/fichas-tecnicas" },
    { "@type": "ListItem", position: 3, name: "Homologar camper en Málaga: legaliza tu furgoneta camperizada", item: "https://www.ingenierial.es/homologacion-camper-malaga" },
  ],
};

const bloques = [
  {
    "titulo": "Qué se homologa en una camper y con qué código",
    "cuerpo": "Para homologar una camper en Málaga hay que saber qué se legaliza: mobiliario fijo con sus anclajes, instalación eléctrica auxiliar, circuito de agua, gas si lo hay, techo elevable, ventanas y plazas. El Manual de Reformas de Vehículos las clasifica por códigos: el 8.31 legaliza la transformación a furgón vivienda y el 8.70 la transformación a autocaravana y sus modificaciones; el 8.51, las modificaciones de carrocería, como el corte de techo o las ventanas; el 8.52, los elementos añadidos en el exterior, como placas solares o toldos; y el 8.1 y el 8.2, la reducción o el aumento de plazas. Si una obra reúne varias reformas, el RD 866/2010 exige cumplir los requisitos de cada una. Qué código te toca depende de la clasificación que busques y de lo montado; lo fijamos en el estudio previo."
  },
  {
    "titulo": "Techo elevable y ventanas: cuándo hace falta proyecto",
    "cuerpo": "Al homologar una furgoneta camper en Málaga con techo elevable, el corte de techo se tramita como modificación de carrocería (8.51), igual que abrir ventanas en los laterales. En la homologación del techo elevable el Manual contempla proyecto técnico, certificación final de obra, informe de conformidad y certificado del taller. Hay una excepción expresa: cuando la apertura de huecos sobre la carrocería no afecta a la estructura, se tramita sin proyecto técnico ni certificado de ejecución de obra, y el informe de conformidad debe indicar esa circunstancia. Decidir si un corte afecta a la estructura es una cuestión técnica que se resuelve con la furgoneta delante, mirando nervios y refuerzos, no con el catálogo del kit. Por eso nos desplazamos a verla antes de cortar."
  },
  {
    "titulo": "Homologación de camper en Málaga: documentos y plazo",
    "cuerpo": "El RD 866/2010 prevé que la tramitación pueda requerir todos o alguno de estos documentos: proyecto técnico con certificación final de obra (el certificado de dirección final de obra), suscritos por técnico titulado competente; informe de conformidad, que emite un servicio técnico de reformas o el fabricante; y certificado del taller según el modelo del anexo III. En la transformación a autocaravana (8.70) el Manual pide proyecto y certificación final de obra cuando el cambio afecta al acondicionamiento interior, y certificados de gas y de baja tensión (REBT, RD 842/2002) si esas instalaciones existen. Después, el art. 8.1 obliga al titular a presentar el vehículo reformado a inspección técnica en un plazo máximo de quince días, con la documentación que fija el Manual."
  },
  {
    "titulo": "Comprar una camper de segunda mano en Málaga",
    "cuerpo": "Si compras una camper a un particular o a un camperizador y quieres homologar tu camper en Málaga, lo que ves montado tiene que estar en los papeles. Antes de pagar, compara la ficha técnica y la tarjeta ITV con la furgoneta: plazas, clasificación y anotaciones de reforma. Pide el proyecto técnico, la certificación final de obra, el certificado del taller y los certificados de gas y electricidad. Pregunta quién cortó el techo y con qué documentación, y comprueba que cada plaza con cinturón tiene sus anclajes. Si el vendedor dice que está homologada pero no enseña papeles, tómalo como no acreditado. Si viene de otro país, revisa también cómo se matriculó (ficha técnica reducida, COC). Podemos ir a verla contigo antes de cerrar la compra y decirte qué falta."
  },
  {
    "titulo": "Errores habituales al camperizar y cómo evitarlos",
    "cuerpo": "El más caro es montar antes de estudiar: con el techo cortado y el mobiliario atornillado solo queda justificar lo hecho, y a veces hay que rehacerlo. El segundo son las masas: muebles, agua, baterías y equipaje suman peso, y comprobamos la masa real con todo instalado. El tercero, las plazas: una plaza nueva (8.2) necesita anclajes y documentación que ampare la nueva distribución de asientos, y quitar plazas de forma permanente (8.1) también es reforma. El cuarto, dejar pasar los quince días para presentar el vehículo. Con un estudio previo gratuito los evitas. Cuéntanos tu caso por el formulario o en el 670 607 830; respondemos en menos de 24 horas."
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
          <li aria-current="page" className="text-slate-700">{"Homologar camper en Málaga: legaliza tu furgoneta camperizada"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Málaga · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Homologar camper en Málaga: legaliza tu furgoneta camperizada"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Vemos tu furgoneta camper en la provincia de Málaga, preparamos el proyecto técnico y los certificados que pide el Manual de Reformas de Vehículos y tramitamos el resto online con firma digital. Estudio previo gratuito y presupuesto cerrado."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si quieres homologar tu camper en Málaga, empieza por comparar lo que lleva montado con lo que consta en su ficha técnica y en la tarjeta ITV. La Costa del Sol es un destino camper que se disfruta todo el año, y conviene saber, tanto si compras como si vendes o camperizas, que el mobiliario fijo, la instalación eléctrica auxiliar, el agua, el gas, el techo elevable, las ventanas o las plazas nuevas son reformas. El Real Decreto 866/2010 obliga a tramitarlas con la documentación que determina el Manual de Reformas de Vehículos. Nosotros te explicamos qué exige tu caso concreto antes de gastar en material o de cerrar una compra, y preparamos el expediente completo."}</p>
          <p>{"Somos una oficina técnica con sede en Almería, con ingeniero técnico industrial colegiado desde 1983. En Málaga nos desplazamos a ver la furgoneta, esté en la capital, en la Costa del Sol, en la Axarquía, en Antequera o en la Serranía de Ronda, y el resto del trámite lo hacemos online con firma digital con certificado FNMT. Trabajamos con el camperizador o el taller que tú elijas: si quieres camperizar una furgoneta en Málaga de forma legal, el proyecto técnico se estudia antes de cortar o atornillar, y el taller certifica después la ejecución. Estudio previo gratuito, presupuesto cerrado antes de empezar y respuesta en menos de 24 horas."}</p>
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
          <li>·{" "}<Link href="/homologacion-vehiculos-malaga" className="text-sky-700 underline hover:no-underline">{"Homologación de vehículos en Málaga"}</Link></li>
          <li>·{" "}<Link href="/ficha-tecnica-reducida-malaga" className="text-sky-700 underline hover:no-underline">{"Ficha técnica reducida en Málaga"}</Link></li>
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">{"Reformas de vehículos y códigos de reforma"}</Link></li>
          <li>·{" "}<Link href="/homologacion-camper-granada" className="text-sky-700 underline hover:no-underline">{"Homologar camper en Granada"}</Link></li>
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
