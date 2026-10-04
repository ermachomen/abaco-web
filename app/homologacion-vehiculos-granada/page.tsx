import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/homologacion-vehiculos-granada";

export const metadata: Metadata = {
  title: "Homologación de vehículos en Granada · Ingeniero colegiado",
  description: "Homologación de vehículos en Granada: reformas, 4x4, enganche, camper e importados. Ingeniero colegiado desde 1983. Vemos tu vehículo y el resto es online.",
  keywords: ["homologación de vehículos en Granada","homologar coche Granada","homologar moto Granada","ingeniero homologaciones Granada","reformas de vehículos Granada","legalizar reforma ITV Granada","homologar 4x4 Granada","enganche remolque Granada","homologar coche extranjero Granada","proyecto técnico reforma vehículo Granada"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/homologacion-vehiculos-granada",
    siteName: "Abaco Ingeniería",
    title: "Homologación de vehículos en Granada · Reformas e importados",
    description: "Homologación de vehículos en Granada: reformas, 4x4, enganche, camper e importados. Ingeniero colegiado desde 1983. Vemos tu vehículo y el resto es online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Homologación de vehículos en Granada: reformas, 4x4 e importados – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Homologación de vehículos en Granada · Reformas e importados", description: "Homologación de vehículos en Granada: reformas, 4x4, enganche, camper e importados. Ingeniero colegiado desde 1983. Vemos tu vehículo y el resto es online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homologación de vehículos en Granada: reformas, 4x4 e importados",
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
  url: "https://www.ingenierial.es/homologacion-vehiculos-granada",
  description: "Homologación de vehículos en Granada: reformas, 4x4, enganche, camper e importados. Ingeniero colegiado desde 1983. Vemos tu vehículo y el resto es online.",
};

const faqs = [
  {
    "q": "¿Tenéis que ver el vehículo en persona o puedo hacerlo todo online?",
    "a": "Nuestra oficina técnica está en Almería, pero nos desplazamos a ver el vehículo en Granada capital, el área metropolitana, Motril, Guadix, Baza o Loja. El resto, desde la recogida de documentación hasta la firma con certificado FNMT, se hace online. Si estás en otro punto de la provincia, cuéntanos dónde y vemos cómo organizarlo en el estudio previo."
  },
  {
    "q": "¿Puedo legalizar una reforma que ya llevo montada en el coche?",
    "a": "Hay que estudiar cada caso. Revisamos qué se montó, con qué piezas y qué documentación exige el código del Manual de Reformas. Según el resultado te decimos si se puede legalizar tal cual, si hay que ajustar algo o si conviene deshacerla. No damos garantías antes de ver el vehículo, pero sí una respuesta clara y un presupuesto cerrado antes de empezar."
  },
  {
    "q": "¿Qué documentos llevo a la ITV después de reformar el vehículo?",
    "a": "Depende del código de la reforma: el Manual de Reformas indica para cada una la documentación exigible, que puede incluir proyecto técnico con certificado final de obra, informe de conformidad y certificado del taller. Te entregamos el expediente firmado y te avisamos del plazo de quince días del Real Decreto 866/2010 para presentar el vehículo reformado a inspección."
  },
  {
    "q": "¿Qué necesito si soy estudiante en Granada y mi coche tiene matrícula de otro país?",
    "a": "Depende de dónde se homologó. Con homologación europea se trabaja con la ficha técnica reducida y el certificado de conformidad COC para la inspección previa a la matriculación. Sin una homologación válida, como un coche de EE. UU., se tramita una homologación individual según el Real Decreto 750/2010. Con tus documentos te decimos en el estudio previo qué vía es la tuya."
  },
  {
    "q": "¿Homologáis también motos en Granada?",
    "a": "Sí, estudiamos motos igual que el resto de vehículos, ya sean importadas o con reformas. El procedimiento depende del origen y de lo que se haya modificado, y no podemos adelantarlo sin ver la documentación. En el estudio previo gratuito te decimos qué trámite corresponde, qué documentos hacen falta y si el caso es viable, sin compromiso."
  },
  {
    "q": "¿Qué incluye el estudio previo gratuito y cuándo sé lo que me va a costar?",
    "a": "Revisamos la documentación y el estado del vehículo, identificamos el procedimiento o el código de reforma que corresponde y te explicamos qué documentos harán falta. Con eso te damos un presupuesto cerrado antes de empezar, de modo que sabes el coste total antes de comprometerte a nada. Respondemos en menos de 24 horas desde que nos cuentas tu caso."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Vehículos", item: "https://www.ingenierial.es/fichas-tecnicas" },
    { "@type": "ListItem", position: 3, name: "Homologación de vehículos en Granada: reformas, 4x4 e importados", item: "https://www.ingenierial.es/homologacion-vehiculos-granada" },
  ],
};

const bloques = [
  {
    "titulo": "Qué es una reforma y cuándo hace falta proyecto técnico",
    "cuerpo": "Es reforma toda modificación, sustitución, incorporación o supresión hecha en un vehículo ya matriculado que cambia alguna de sus características o puede alterar los requisitos aplicables, incluida cualquier actuación que modifique su ficha técnica. Para legalizar una reforma y pasar la ITV en Granada, el Manual de Reformas de Vehículos fija, código por código, la documentación exigible. Puede incluir el proyecto técnico con su certificado final de obra, firmados por un técnico titulado competente; el informe de conformidad, que emite un servicio técnico de reformas designado o el fabricante del vehículo; y el certificado del taller que ejecutó la reforma. No todas las reformas exigen los tres documentos: por ejemplo, si el vehículo reformado se corresponde con un tipo homologado, la norma permite hacerla sin proyecto técnico ni certificado final de obra. Lo comprobamos en el estudio previo."
  },
  {
    "titulo": "4x4 y furgonetas: suspensión, neumáticos y elementos exteriores",
    "cuerpo": "Cuando preparas un 4x4 o una furgoneta para Sierra Nevada, la Alpujarra o los caminos rurales, entran en juego cambios de neumáticos, llantas y suspensión, y accesorios como defensas, barras o snorkel. En la homologación de vehículos en Granada, todo eso es reforma. El Manual recoge el cambio de dimensiones o del índice de carga y velocidad de los neumáticos (código 4.9) y las modificaciones o sustituciones en llantas, ruedas o separadores (4.10). La incorporación o desinstalación de elementos en el exterior del vehículo se tramita, en general, como 8.52, y la suspensión se valora junto con el resto. El código exacto lo confirma el ingeniero según la pieza y el vehículo. Conviene consultarnos antes de comprar: comprobamos que la combinación de medidas y piezas se pueda documentar y evitamos montar algo que luego no se pueda legalizar."
  },
  {
    "titulo": "Enganche, camper y cambio de motor: códigos 10.1, 8.31, 8.70 y 2.3",
    "cuerpo": "La instalación o modificación de un dispositivo de acoplamiento en vehículos de las categorías M y N es la reforma 10.1, del grupo 10 del Manual, que trata las uniones entre vehículos tractores y remolques. Se aplica tanto al enganche para arrastrar un remolque como al que solo sirve de soporte a un portabicis o un portaesquís sobre la bola, y también a la pick-up o la furgoneta de trabajo en la finca, en la Vega o en la Costa Tropical. Convertir una furgoneta en camper se legaliza como furgón vivienda, reforma 8.31, o como autocaravana, reforma 8.70, según la clasificación que se busque; y el cambio de motor por otro de distintas características es la 2.3. Si una misma modificación entraña varias reformas, hay que cumplir los requisitos de cada una; por eso las estudiamos juntas y te decimos qué documentación pide cada código."
  },
  {
    "titulo": "Coches de otros países: estudiantes, residentes y compras fuera",
    "cuerpo": "Si estudias o resides en Granada con un coche matriculado en otro país, o lo has comprado fuera, la homologación de vehículos en Granada sigue una vía u otra según su origen. Si el vehículo tiene homologación europea, para la inspección previa a la matriculación se trabaja con la ficha técnica reducida y el certificado de conformidad COC. Si no tiene una homologación válida, como un coche importado de EE. UU., hace falta una homologación individual conforme al Real Decreto 750/2010. En el estudio previo te decimos qué vía te corresponde, qué documentos te faltan y qué debe revisarse en el coche antes de la inspección, para que no des pasos innecesarios. Tenemos páginas específicas para homologar un coche importado y para pasar la ITV con un coche extranjero."
  },
  {
    "titulo": "El plazo de quince días y cómo trabajamos contigo",
    "cuerpo": "El artículo 8.1 del Real Decreto 866/2010 obliga al titular del vehículo, o a la persona que él autorice, a presentar el vehículo reformado a inspección técnica en un plazo máximo de quince días, aportando la documentación que determina el Manual de Reformas. Por eso conviene preparar el expediente antes de ejecutar la reforma, no después. Así trabajamos la homologación de vehículos en Granada: nos cuentas el caso, hacemos el estudio previo gratuito y te damos un presupuesto cerrado. Vemos el vehículo en Granada capital, el área metropolitana, Motril, Guadix, Baza o Loja, y el resto del trámite es online. Firmamos la documentación con certificado digital FNMT y tú pides cita y llevas el vehículo a la inspección dentro del plazo."
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
          <li aria-current="page" className="text-slate-700">{"Homologación de vehículos en Granada: reformas, 4x4 e importados"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Granada · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Homologación de vehículos en Granada: reformas, 4x4 e importados"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Legalizamos reformas, enganches, neumáticos y elementos de 4x4 y furgonetas, y tramitamos coches de otros países. Un ingeniero técnico colegiado ve tu vehículo en Granada y gestiona el resto online con firma FNMT."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si buscas homologación de vehículos en Granada, lo primero es saber qué necesita exactamente el tuyo. No es lo mismo montar un enganche en una furgoneta para subir a Sierra Nevada, cambiar los neumáticos de un 4x4 que se mueve por la Alpujarra y los caminos rurales, o traer un coche matriculado en otro país. En todos los casos partimos de lo mismo: comparar lo que figura en la ficha técnica con lo que lleva realmente el vehículo y con lo que exige el Manual de Reformas de Vehículos. A partir de ahí decidimos si basta con una ficha técnica reducida, si hace falta una homologación individual o si hay que legalizar una reforma con proyecto técnico, para que llegues a la ITV con la documentación correcta."}</p>
          <p>{"Somos Abaco Ingeniería, con un ingeniero técnico industrial colegiado desde 1983 y más de cuarenta años de trayectoria. Desde nuestra oficina técnica de Almería nos desplazamos a ver el vehículo en Granada capital, el área metropolitana, Motril, Guadix, Baza o Loja, y el resto del trámite, desde la documentación hasta la firma digital con certificado FNMT, lo resolvemos online. Antes de empezar hacemos un estudio previo gratuito y te damos un presupuesto cerrado, con respuesta en menos de 24 horas. Tanto si quieres homologar un coche o una moto en Granada como legalizar una reforma, el expediente lo lleva y lo firma el ingeniero."}</p>
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
          <li>·{" "}<Link href="/homologacion-camper-granada" className="text-sky-700 underline hover:no-underline">{"Homologar camper en Granada"}</Link></li>
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
