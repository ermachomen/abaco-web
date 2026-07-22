import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/tasacion-herencia-divorcio-almeria";

export const metadata: Metadata = {
  title: "Tasación para herencia y divorcio en Almería | Ábaco",
  description: "Tasación para herencia, divorcio y extinción de condominio en Almería. Informe de ingeniero colegiado válido ante notaría, Hacienda y juzgado. No hipotecaria.",
  keywords: ["tasación herencia Almería","tasación divorcio Almería","extinción de condominio Almería","valoración de vivienda para herencia","liquidación de gananciales tasación","tasación proindiviso Almería","valor de referencia herencia","valoración de bienes partición","perito ingeniero colegiado Almería","tasación bienes divorcio"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/tasacion-herencia-divorcio-almeria",
    siteName: "Abaco Ingeniería",
    title: "Tasación para herencia, divorcio y extinción de condominio en Almería",
    description: "Tasación para herencia, divorcio y extinción de condominio en Almería. Informe de ingeniero colegiado válido ante notaría, Hacienda y juzgado. No hipotecaria.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Tasación para herencia, divorcio y extinción de condominio en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Tasación para herencia, divorcio y extinción de condominio en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tasación para herencia, divorcio y extinción de condominio en Almería",
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
  url: "https://www.ingenierial.es/tasacion-herencia-divorcio-almeria",
  description: "Tasación para herencia, divorcio y extinción de condominio en Almería. Informe de ingeniero colegiado válido ante notaría, Hacienda y juzgado. No hipotecaria.",
};

const faqs = [
  {
    "q": "¿Sirve esta tasación para pedir una hipoteca?",
    "a": "No. Para hipoteca se exige una sociedad de tasación homologada por el Banco de España, y Ábaco no lo es. Nuestros informes están pensados para herencia, divorcio, extinción de condominio, Hacienda o juzgado, donde esa homologación no es necesaria y basta la firma de un ingeniero colegiado."
  },
  {
    "q": "¿Puedo declarar la herencia por debajo del valor de referencia de Catastro?",
    "a": "Para inmuebles urbanos con valor de referencia, ese suele ser el mínimo que admite Hacienda en el Impuesto sobre Sucesiones. Ahora bien, muchos bienes (fincas rústicas, invernaderos, maquinaria o un negocio) no tienen valor de referencia y se declaran por su valor de mercado, que es donde nuestro informe evita que pagues de más."
  },
  {
    "q": "En un divorcio, ¿vale más una tasación acordada por los dos o una por cada parte?",
    "a": "Si hay acuerdo, una única valoración imparcial ahorra costes y agiliza el convenio regulador. Si el divorcio es contencioso, cada parte puede aportar la suya y decide el juez; un informe técnico bien motivado y firmado por ingeniero colegiado defiende mejor tu posición ante el juzgado."
  },
  {
    "q": "¿Qué impuesto se paga en una extinción de condominio y cómo influye la tasación?",
    "a": "La disolución tributa por Actos Jurídicos Documentados sobre el valor de la parte que se adjudica, no por Transmisiones, y no está sujeta a plusvalía municipal; en un divorcio puede quedar exenta. La tasación fija ese valor, de modo que un informe realista determina a la vez la compensación y el impuesto."
  },
  {
    "q": "¿Trabajáis solo en Almería capital?",
    "a": "Cubrimos Almería capital y toda la provincia (Poniente, Levante, Valle del Almanzora, Los Filabres y la Alpujarra almeriense), además de Granada, Málaga y Murcia. Gran parte del trabajo es online con firma digital FNMT, y nos desplazamos para la visita cuando el bien lo requiere."
  },
  {
    "q": "¿Cuánto tarda y cuánto cuesta el informe?",
    "a": "Tras un estudio previo gratuito damos un presupuesto cerrado; orientativamente desde unos 250 euros una vivienda, 350 un local y 450 una nave. El plazo se ajusta a tu cita en notaría o a la fecha del juzgado, normalmente pocos días laborables una vez recibida la documentación."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Tasación para herencia, divorcio y extinción de condominio en Almería", item: "https://www.ingenierial.es/tasacion-herencia-divorcio-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Tasación para herencia: partición y Sucesiones",
    "cuerpo": "En una herencia el informe cumple dos funciones. Para el reparto, fija un valor objetivo de cada bien y permite formar lotes equilibrados entre coherederos, base del cuaderno particional que autoriza el notario; con una cifra técnica se cierran discusiones que de otro modo paralizan la aceptación. Para el Impuesto sobre Sucesiones, desde 2022 la base de los inmuebles urbanos es el valor de referencia de Catastro, pero fincas rústicas, invernaderos de la provincia, locales singulares, maquinaria o participaciones en un negocio no tienen ese valor y deben declararse por su valor de mercado. Valoramos ese patrimonio de forma realista para que no pagues de más ni provoques una futura comprobación de valores."
  },
  {
    "titulo": "Tasación para divorcio y liquidación de gananciales",
    "cuerpo": "Al separar un matrimonio en gananciales hay que poner precio a la vivienda familiar y al resto de bienes comunes para liquidar la sociedad. Si el divorcio es de mutuo acuerdo, la valoración da soporte al convenio regulador y a la compensación que recibe quien renuncia a su mitad; si es contencioso, aporta al juzgado una cifra defendible frente a la valoración de la parte contraria. Al tratarse de un ingeniero ajeno a la pareja, el informe se percibe como neutral, algo que agiliza el acuerdo. Valoramos vivienda habitual, garajes, segunda residencia en la costa almeriense y, cuando procede, el negocio o la maquinaria comunes."
  },
  {
    "titulo": "Extinción de condominio y proindiviso",
    "cuerpo": "Cuando dos o más personas comparten un inmueble tras una herencia o una compra conjunta y uno se queda con todo compensando a los demás, se produce una extinción de condominio. La valoración fija la compensación justa a la parte que sale y sirve de base al impuesto: la disolución tributa por Actos Jurídicos Documentados sobre el valor de la porción que se adjudica, no por Transmisiones Patrimoniales, y no está sujeta a la plusvalía municipal; en el marco de un divorcio puede incluso quedar exenta. Un valor bien motivado evita que Hacienda lo corrija y que el copropietario que se marcha se sienta perjudicado."
  },
  {
    "titulo": "Qué valoramos y por qué el informe tiene validez",
    "cuerpo": "Valoramos viviendas, pisos y chalets, locales y naves, solares, fincas rústicas e invernaderos, maquinaria y el fondo de comercio de un negocio: el patrimonio típico de una herencia o un divorcio en Almería. Cada informe aplica metodología reconocida (comparación de mercado, coste o capitalización según el bien), se motiva con testigos y visita cuando hace falta, y lo firma un ingeniero técnico industrial colegiado con más de cuarenta años de ejercicio. Trabajamos con firma digital FNMT para toda España y nos desplazamos a Almería capital y provincia. Recuerda: no es tasación hipotecaria homologada por el Banco de España, pero sí un documento pericial válido ante notaría, Hacienda y tribunales."
  },
  {
    "titulo": "Cómo trabajamos y precios en Almería",
    "cuerpo": "El proceso es sencillo: cuéntanos en qué punto está el asunto (cita en notaría, convenio en redacción o demanda presentada), envíanos la referencia catastral y la escritura o nota simple, y recibirás un presupuesto cerrado tras un estudio previo gratuito, sin sorpresas. Los honorarios orientativos parten de unos 250 euros para una vivienda, 350 para locales y 450 para naves, según superficie y complejidad. Ajustamos el plazo de entrega a la fecha del notario o del juzgado. Y si Hacienda ya te ha girado una comprobación de valores, valoramos también para preparar la defensa por vía de tasación pericial contradictoria."
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
            <Link href="C:/Program Files/Git/tasaciones" className="text-sm font-medium text-slate-600 hover:text-slate-900">Tasaciones</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Tasación para herencia, divorcio y extinción de condominio en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Tasación para herencia, divorcio y extinción de condominio en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Valoramos vivienda, fincas, locales y bienes en proceso de herencia, separación de gananciales o disolución de proindiviso. Firma de ingeniero colegiado, presupuesto cerrado y estudio previo gratuito."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Cuando una herencia, un divorcio o la disolución de un proindiviso está en marcha, casi todo depende de una cifra: cuánto vale realmente el inmueble o el patrimonio que hay que repartir. Sin una valoración independiente, el reparto se bloquea, la escritura no avanza y el impuesto se calcula a ciegas. Ábaco Ingeniería emite en Almería informes de valoración firmados por ingeniero técnico industrial colegiado desde 1983, pensados para procesos legales y familiares: aceptación y partición de herencia, liquidación de la sociedad de gananciales y extinción de condominio entre copropietarios. Un documento claro, motivado y con plena validez ante notaría, Hacienda y juzgado, listo para el punto exacto en el que se encuentra tu asunto."}</p>
          <p>{"Conviene ser honesto desde el principio: Ábaco no es sociedad de tasación homologada por el Banco de España, por lo que no realiza tasación hipotecaria para pedir un préstamo. Para herencia, divorcio o proindiviso esa homologación no es necesaria: lo que piden notario, abogado o juzgado es una valoración técnica, imparcial y bien argumentada, y eso es exactamente lo que firma un ingeniero colegiado. Además, ajustamos el informe a cada finalidad, distinguiendo el valor de mercado del valor de referencia de Catastro que Hacienda usa para liquidar el impuesto."}</p>
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
          <li>·{" "}<Link href="/tasaciones-almeria" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-pericial-contradictoria-almeria" className="text-sky-700 underline hover:no-underline">Impugnar la comprobación de valores de Hacienda</Link></li>
          <li>·{" "}<Link href="/precio-tasacion-almeria" className="text-sky-700 underline hover:no-underline">Precios de tasación en Almería</Link></li>
          <li>·{" "}<Link href="/peritaciones-almeria" className="text-sky-700 underline hover:no-underline">Peritaciones y periciales en Almería</Link></li>
          <li>·{" "}<Link href="/tasacion-maquinaria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Tasación de maquinaria y negocio en herencia</Link></li>
          <li>·{" "}<Link href="/tasaciones" className="text-sky-700 underline hover:no-underline">Tasaciones y valoraciones en toda España</Link></li>
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
