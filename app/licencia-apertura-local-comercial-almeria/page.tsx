import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-local-comercial-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de local comercial en Almería",
  description: "Licencia de apertura de local comercial o tienda en Almería: declaración responsable, accesibilidad y obras. Visitamos el local antes de que alquiles.",
  keywords: ["licencia de apertura de local comercial en Almería","licencia de apertura de tienda en Almería","abrir una tienda en Almería","declaración responsable local comercial Almería","licencia de actividad comercio minorista Almería","proyecto de actividad tienda Almería","licencia apertura carnicería pescadería Almería","traspaso de local comercial Almería","certificado final de obra local Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-local-comercial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de tienda en Almería",
    description: "Licencia de apertura de local comercial o tienda en Almería: declaración responsable, accesibilidad y obras. Visitamos el local antes de que alquiles.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de local comercial o tienda en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de tienda en Almería", description: "Licencia de apertura de local comercial o tienda en Almería: declaración responsable, accesibilidad y obras. Visitamos el local antes de que alquiles.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de local comercial o tienda en Almería",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.ingenierial.es/#organization",
    name: "Abaco Ingeniería",
    url: siteUrl,
    telephone: "+34670607830",
    email: "info@abacoingenieria.es",
    priceRange: "€€",
    image: "https://www.ingenierial.es/images/og-abaco.jpg",
    logo: "https://www.ingenierial.es/images/logo-abaco1.jpeg",
  },
  areaServed: [
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/licencia-apertura-local-comercial-almeria",
  description: "Licencia de apertura de local comercial o tienda en Almería: declaración responsable, accesibilidad y obras. Visitamos el local antes de que alquiles.",
};

const faqs = [
  {
    "q": "¿Necesito licencia para abrir una tienda de ropa en Almería?",
    "a": "Para una tienda de ropa de hasta 750 m² útiles de exposición y venta, la ley estatal impide exigir licencia previa de actividad y la sustituye por declaración responsable o comunicación previa. Eso no elimina las obligaciones: el local tiene que cumplir seguridad, accesibilidad e instalaciones, y la documentación técnica debe estar firmada por técnico competente cuando corresponda. Revisamos tu local y te decimos qué se presenta y qué obras podría necesitar."
  },
  {
    "q": "¿Qué diferencia hay entre declaración responsable y comunicación previa?",
    "a": "En la declaración responsable manifiestas que cumples la normativa, que tienes la documentación y, cuando corresponde, el proyecto firmado por técnico, y puedes empezar desde que la presentas. La comunicación previa es más sencilla y la ordenanza de Almería la reserva para actividades artesanales o artísticas en locales sin maquinaria ni proceso industrial. Una tienda normal tramita declaración responsable. Lo confirmamos al estudiar tu actividad concreta."
  },
  {
    "q": "¿Qué pasa si mi tienda vende carne, pescado, fruta o pan?",
    "a": "Esas actividades figuran en el anexo de la ley andaluza de calidad ambiental. Cuando tienen menos de 750 m² construidos, se tramitan por calificación ambiental mediante declaración responsable de los efectos ambientales, con la documentación ambiental que corresponda junto al proyecto técnico. No lo des por hecho en tu caso: depende de la actividad exacta y de la superficie construida, y lo comprobamos en la visita al local."
  },
  {
    "q": "¿Mi local necesita obras de accesibilidad?",
    "a": "Depende de cómo sea la entrada, el recorrido interior y el aseo. La memoria del proyecto de actividad justifica la accesibilidad y, si hay obras, se dirigen y se certifican al acabar. Un desnivel en la puerta, un pasillo estrecho o un aseo pequeño son las causas más habituales. Por eso conviene que veamos el local antes de firmar el alquiler y no después de pagar la fianza."
  },
  {
    "q": "¿Puedo abrir el mismo día que presento la declaración?",
    "a": "Sí, siempre que presentes la declaración con las obras e instalaciones terminadas y la documentación completa. Puedes empezar desde ese día o desde la fecha que indiques, con un máximo de tres meses. Debes tener a la vista en el local la copia sellada o el recibo del registro electrónico. Después, el Ayuntamiento puede verificar la documentación y visitar el local, y exigir correcciones si detecta defectos."
  },
  {
    "q": "¿Qué hago si compro o alquilo una tienda que ya funcionaba?",
    "a": "Antes de cerrar el traspaso, comprobamos que la actividad anterior estaba legalizada y que lo construido coincide con lo declarado. Después, el antiguo y el nuevo titular comunican el cambio de titularidad al Ayuntamiento. Si lo omiten, ambos responden. Y si la actividad estuvo suspendida más de un año, la declaración anterior ha caducado, así que habría que presentar una nueva. Te lo revisamos antes de que pagues el traspaso."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de local comercial o tienda en Almería", item: "https://www.ingenierial.es/licencia-apertura-local-comercial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Declaración responsable en lugar de licencia",
    "cuerpo": "En Almería capital, la ordenanza de apertura de establecimientos fija como regla general la declaración responsable para las actividades que se implantan o se reforman. La licencia de apertura previa queda para casos muy concretos, como las atracciones de feria, las estructuras desmontables o las actividades en el dominio público, y una tienda de barrio no suele estar entre ellos. En el resto de municipios de la provincia, cada ayuntamiento tiene su propia ordenanza, así que lo comprobamos en el que te interesa. La ley estatal añade que, hasta 750 m² útiles de exposición y venta, no puede exigirse licencia previa de instalación, funcionamiento o actividad al comercio minorista. Se sustituye por declaración responsable o comunicación previa."
  },
  {
    "titulo": "Cuando la tienda no es un caso sencillo",
    "cuerpo": "Una tienda de ropa, de regalos o de decoración no figura en el anexo de actividades sometidas a calificación ambiental de la ley andaluza. Otras sí. Las carnicerías, pescaderías, fruterías, tiendas de congelados, tiendas de pan y pastelería, droguerías y perfumerías de menos de 750 m² construidos entran en la calificación ambiental por declaración responsable de los efectos ambientales. Ojo con la diferencia de superficies: la ley estatal habla de superficie útil de exposición y venta, y la andaluza de superficie construida total. Si vendes alimentación fresca o productos de limpieza y perfumería, revisamos tu caso concreto antes de decirte qué papeles hacen falta, y preparamos el análisis ambiental cuando corresponde."
  },
  {
    "titulo": "Qué mirar en el local antes de alquilar",
    "cuerpo": "Casi todos los problemas de una tienda se ven antes de firmar. Comprueba que el uso del local admite comercio, si tuvo una actividad anterior y con qué papeles funcionaba. Fíjate en la entrada: un escalón, una puerta estrecha o un acceso con desnivel pueden obligar a obra de accesibilidad. Mira el escaparate y la fachada, y pregunta si el local ya tiene el aspecto que quieres o si habrá que cambiarlo. Revisa la potencia eléctrica contratada, el aseo, la salida de emergencia y la ventilación. Si el local viene de un uso distinto del comercial, la adecuación puede ser mayor. Lo visitamos contigo y te decimos qué obras necesita antes de que el alquiler te comprometa."
  },
  {
    "titulo": "Qué se presenta con la declaración responsable",
    "cuerpo": "La declaración se presenta con las obras e instalaciones terminadas y con las licencias urbanísticas que procedan, incluida en su caso la de utilización. La ordenanza de Almería pide, como mínimo, el modelo normalizado, el NIF o CIF con la representación, el justificante de la tasa, la referencia catastral con el recibo del IBI, el alta en el epígrafe del IAE y el nombre y la titulación del técnico. Si hay obras, además la licencia urbanística y el certificado final de obra. Si es una actividad inocua sin obras, el proyecto técnico de actividad, el certificado de ajuste al proyecto y fotografías. Nos encargamos de la parte técnica y de presentarlo."
  },
  {
    "titulo": "Obras e instalaciones de una tienda",
    "cuerpo": "El proyecto de actividad se apoya en una memoria que justifica urbanismo, accesibilidad, incendios, ruido, climatización e instalaciones. En una tienda eso significa, por ejemplo, calcular el aforo y las vías de evacuación con el Código Técnico de la Edificación, colocar alumbrado de emergencia, comprobar que la instalación eléctrica cumple el REBT y que el aire acondicionado se ajusta al RITE. El ruido de los equipos de climatización hacia los vecinos suele ser lo que más sorprende. Si hay obras, el proyecto incluye además pliego de condiciones, mediciones, presupuesto, estudio de seguridad y salud y estudio de gestión de residuos. Lo dejamos todo resuelto en planos y memoria, y lo comprobamos al acabar."
  },
  {
    "titulo": "Cuándo puedes abrir y qué viene después",
    "cuerpo": "La declaración responsable permite empezar desde el día de presentación o desde la fecha que indiques, que no puede ir más allá de tres meses. La copia sellada o el recibo del registro electrónico debe estar expuesta en el local. Eso no cierra el asunto: el Ayuntamiento puede pedir la documentación declarada y visitar la tienda. Si falta algo, da diez días para subsanar, y ante defectos esenciales que no se corrijan puede ordenar el cese. Si la actividad se suspende o cesa más de un año, la declaración caduca. Si traspasas o compras un negocio ya abierto, el antiguo y el nuevo titular comunican el cambio de titularidad, y si no lo hacen, ambos responden."
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
            <Link href="/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/licencia-de-actividad" className="hover:text-slate-900">Licencias</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de local comercial o tienda en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Tiendas y comercio minorista"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de local comercial o tienda en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Abrir una tienda en Almería suele resolverse con declaración responsable, pero el local tiene que estar bien adecuado. Visitamos el local antes del alquiler, preparamos la documentación técnica y presentamos todo en la sede electrónica."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Abrir una tienda en Almería no suele exigir una licencia previa, pero tampoco basta con colgar el cartel. Para el comercio minorista de ropa, regalos, alimentación sin obrador o ferretería, la ley estatal sustituye la licencia previa por una declaración responsable o una comunicación previa cuando el establecimiento es permanente y tiene hasta 750 m² útiles de exposición y venta. Esa declaración afirma que cumples la normativa, que tienes la documentación y, cuando corresponda, un proyecto firmado por técnico competente. Lo que cambia de un local a otro es lo que hay detrás: obras, accesibilidad, escaparate, instalación eléctrica, climatización y salidas. Aquí te explicamos qué mirar antes de alquilar, qué se presenta y cuándo puedes abrir."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Visitamos el local antes de que firmes el alquiler y te decimos si encaja con tu comercio, qué obras necesita y qué documentación hay que preparar. Después redactamos el proyecto o la documentación técnica, dirigimos la adecuación, firmamos el certificado final y presentamos todo en la sede electrónica del Ayuntamiento con firma digital FNMT. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al local. Te damos un presupuesto cerrado antes de empezar y respondemos en 24 horas. Cuéntanos qué vas a vender y cómo es el local, y te decimos por dónde empezar."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura y actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Declaración responsable de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/calificacion-ambiental-almeria" className="text-sky-700 underline hover:no-underline">{"Calificación ambiental en Almería"}</Link></li>
          <li>·{" "}<Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Cambio de titularidad de la licencia"}</Link></li>
          <li>·{" "}<Link href="/licencia-apertura-negocios-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura por tipo de negocio"}</Link></li>
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
