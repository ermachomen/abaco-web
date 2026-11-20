import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-peluqueria-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de peluquería en Almería",
  description: "Licencia de apertura de peluquería o centro de estética en Almería: declaración responsable, electricidad, ventilación y accesibilidad. Visitamos el local.",
  keywords: ["licencia de apertura de peluquería en Almería","licencia de apertura de centro de estética en Almería","abrir una peluquería en Almería","declaración responsable peluquería Almería","licencia de actividad peluquería Almería","proyecto de actividad peluquería Almería","licencia barbería Almería","licencia salón de belleza Almería","instalación eléctrica peluquería Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-peluqueria-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de peluquería en Almería",
    description: "Licencia de apertura de peluquería o centro de estética en Almería: declaración responsable, electricidad, ventilación y accesibilidad. Visitamos el local.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de peluquería o centro de estética en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de peluquería en Almería", description: "Licencia de apertura de peluquería o centro de estética en Almería: declaración responsable, electricidad, ventilación y accesibilidad. Visitamos el local.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de peluquería o centro de estética en Almería",
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
  url: "https://www.ingenierial.es/licencia-apertura-peluqueria-almeria",
  description: "Licencia de apertura de peluquería o centro de estética en Almería: declaración responsable, electricidad, ventilación y accesibilidad. Visitamos el local.",
};

const faqs = [
  {
    "q": "¿Necesita licencia una peluquería en Almería?",
    "a": "Para una peluquería de hasta 750 m² de superficie útil de exposición y venta, la ley estatal impide exigir licencia previa de actividad y la sustituye por declaración responsable o comunicación previa. En Almería capital, la ordenanza establece la declaración responsable como regla general. Eso no te exime de cumplir la normativa ni de tener el proyecto o la documentación técnica cuando corresponda. Lo revisamos con tu local."
  },
  {
    "q": "¿Una peluquería necesita calificación ambiental?",
    "a": "Las peluquerías y los centros de estética no figuran en el anexo de actividades de la ley andaluza de calidad ambiental, por lo que no entran en la calificación ambiental. Esto es un dato favorable frente a otros negocios, porque el expediente es más ligero. Aun así, el local debe cumplir seguridad, accesibilidad, ruido e instalaciones, y la declaración responsable tiene que ir respaldada por documentación técnica."
  },
  {
    "q": "¿Cuánta potencia eléctrica necesita una peluquería?",
    "a": "Depende de los puestos, de los secadores, de los calentadores y del aire acondicionado, por lo que no damos una cifra sin ver tu caso. Lo que sí podemos hacer es calcularla en la visita, comparar con la potencia que tiene el local y decirte si hará falta ampliarla o renovar el cuadro. Todo ello conforme al REBT. Conviene saberlo antes de alquilar."
  },
  {
    "q": "¿Qué cambia si es un centro de estética en lugar de una peluquería?",
    "a": "Los centros de estética tampoco figuran en el anexo de la ley andaluza de calidad ambiental, y el trámite urbanístico es parecido. Lo que cambia es la instalación: cabinas con camillas, aparatos eléctricos específicos, más climatización y a veces más agua y desagües. Si piensas ofrecer servicios que vayan más allá de la estética, cuéntanoslo desde el principio para revisar si cambia el encaje de la actividad."
  },
  {
    "q": "¿Puedo abrir mi peluquería en un local que era una vivienda?",
    "a": "Depende de que el uso del local admita la actividad y de que se pueda adecuar. Un local que fue vivienda suele necesitar más obra: potencia eléctrica, ventilación, aseo y accesibilidad. Lo estudiamos en la visita antes de que firmes. Si el uso no lo permite, mejor saberlo antes del alquiler que después de reformar, y te lo decimos con claridad."
  },
  {
    "q": "¿Cuánto tiempo puede estar cerrada mi peluquería antes de perder la declaración?",
    "a": "Según la ordenanza de apertura de Almería, la declaración responsable caduca si la actividad se suspende o cesa durante más de un año. Si vas a cerrar temporalmente, conviene tenerlo en cuenta, y si has comprado un local que lleva tiempo parado, comprobar si la declaración anterior sigue vigente. Lo revisamos al estudiar el traspaso, antes de que pagues."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de peluquería o centro de estética en Almería", item: "https://www.ingenierial.es/licencia-apertura-peluqueria-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Declaración responsable, sin calificación ambiental",
    "cuerpo": "En la ley andaluza de gestión integrada de la calidad ambiental, el anexo de actividades sometidas a calificación ambiental no incluye peluquerías ni centros de estética. En la ley estatal de comercio y servicios, sí figuran las peluquerías y salones de belleza, en el grupo 972 del IAE. En Almería capital, la ordenanza de apertura establece la declaración responsable como regla general. El resultado práctico es un trámite más ligero que el de un gimnasio o un restaurante. Pero ligero no significa sin documentación: la declaración manifiesta que cumples la normativa y que tienes la documentación y, cuando corresponda, el proyecto firmado por técnico competente. En otros municipios, cada ayuntamiento tiene su ordenanza y la consultamos."
  },
  {
    "titulo": "Potencia eléctrica y cuadro",
    "cuerpo": "Una peluquería suma muchos aparatos de consumo alto: secadores, planchas, calentadores de agua, lavacabezas, esterilizadores, aire acondicionado y, en estética, aparatos específicos. Si la potencia contratada se queda corta, saltan los plomos en plena jornada, y si el cuadro no está bien calculado hay riesgo real. La instalación debe cumplir el REBT (Real Decreto 842/2002), con protecciones adecuadas, tomas bien repartidas y puesta a tierra. Antes de alquilar comprobamos la potencia disponible y el estado del cuadro del local, y te decimos si habrá que ampliar o rehacer la instalación. Es lo que más se subestima en un local que antes fue otra cosa."
  },
  {
    "titulo": "Agua caliente, desagües y aseo",
    "cuerpo": "Una peluquería gasta agua caliente de forma continua y vierte agua con productos de tinte y champú. Necesitas una producción de agua caliente dimensionada para los lavacabezas, desagües con la pendiente y el diámetro adecuados y, normalmente, un aseo para clientes y trabajadores. En un local sin instalación previa de fontanería, llevar las tuberías y los desagües puede suponer obra y levantar suelo. Por eso, antes de firmar, miramos dónde están la acometida y la bajante, a qué distancia quedan los puestos de lavado y si el aseo cumple. La memoria del proyecto justifica la normativa higiénico-sanitaria y las instalaciones, y la dejamos resuelta en planos."
  },
  {
    "titulo": "Ventilación, climatización y olores",
    "cuerpo": "Los tintes, los decolorantes, las lacas y los productos de uñas desprenden vapores y olores, y con varias personas dentro durante horas el aire se carga. La memoria justifica la ventilación y la climatización conforme al RITE (Real Decreto 1027/2007), con renovación de aire adecuada al número de puestos. Si el local no tiene ventanas, la extracción forzada es imprescindible, y su salida al exterior debe estar bien resuelta para no molestar a los vecinos. Las máquinas de aire acondicionado, además, generan ruido: el proyecto incluye ruido y vibraciones con estudio acústico previo, y colocamos los equipos donde menos molesten. Lo comprobamos en la visita."
  },
  {
    "titulo": "Accesibilidad, seguridad y evacuación",
    "cuerpo": "La memoria justifica la accesibilidad, la seguridad en caso de incendio y la evacuación con el Código Técnico de la Edificación (Real Decreto 314/2006): aforo, salidas, alumbrado de emergencia y señalización. En una peluquería pequeña suele ser sencillo, pero un escalón en la puerta, un pasillo estrecho o un aseo diminuto pueden obligar a obra. Y si el local es un sótano o una planta alta, la evacuación se complica. Conviene mirar todo esto antes de alquilar y no después de pagar la fianza. Te decimos en la visita qué cumple el local, qué no cumple y cuánto esfuerzo supone corregirlo, con el trámite y las obras claros desde el principio."
  },
  {
    "titulo": "Documentación, apertura y traspaso",
    "cuerpo": "La declaración responsable se presenta con las obras e instalaciones terminadas. La ordenanza de Almería pide, como mínimo, el modelo normalizado, el NIF o CIF con la representación, el justificante de la tasa, la referencia catastral, el alta en el epígrafe del IAE y el nombre y la titulación del técnico, además del proyecto de actividad si no hay obras o del certificado final si las hay. Permite empezar desde el día de presentación o desde la fecha indicada, con un máximo de tres meses, y la copia sellada debe estar expuesta en el local. Si compras o traspasas una peluquería, el antiguo y el nuevo titular comunican el cambio de titularidad. Si no lo hacen, ambos responden."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de peluquería o centro de estética en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Peluquerías, barberías y estética"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de peluquería o centro de estética en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Una peluquería o un centro de estética en Almería suele tramitarse con declaración responsable, pero el local necesita potencia eléctrica, agua caliente y ventilación suficientes. Visitamos el local antes de que firmes el alquiler."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Las peluquerías, las barberías, los centros de estética y los salones de belleza no figuran en el anexo de actividades de la ley andaluza de calidad ambiental, de modo que no necesitan calificación ambiental. Además están en el anexo de la ley estatal de comercio y servicios, que impide exigir licencia previa de actividad a los establecimientos permanentes de hasta 750 m² de superficie útil de exposición y venta y la sustituye por declaración responsable o comunicación previa. Eso simplifica el trámite, pero no el local: secadores, calentadores, lavacabezas, tintes y aparatos de estética piden potencia eléctrica, agua caliente, desagües y renovación de aire. Aquí te contamos qué se presenta y qué mirar antes de alquilar."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Visitamos el local antes de que firmes el alquiler y te decimos si la potencia, los desagües y la ventilación son suficientes o si hará falta obra. Después redactamos el proyecto o la documentación técnica, dirigimos la adecuación, firmamos el certificado final y presentamos todo en la sede electrónica del Ayuntamiento con firma digital FNMT. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al local. Damos presupuesto cerrado antes de empezar y respondemos en 24 horas. Cuéntanos qué servicios vas a ofrecer y cuántos puestos de trabajo tendrá el salón."}</p>
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
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-climatizacion-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar la climatización"}</Link></li>
          <li>·{" "}<Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Cambio de titularidad de la licencia"}</Link></li>
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
