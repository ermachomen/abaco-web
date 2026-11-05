import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-negocios-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura por tipo de negocio en Almería",
  description: "Licencia de apertura en Almería según tu negocio: peluquería, centro de estética, tienda, gimnasio, academia u oficina. Qué piden y qué revisar antes de alquilar.",
  keywords: ["licencia de apertura Almería","licencia apertura peluquería Almería","licencia apertura centro de estética","licencia para abrir una tienda Almería","licencia apertura gimnasio Almería","licencia apertura academia Almería","licencia apertura oficina Almería","requisitos abrir un negocio Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: { type: "article", locale: "es_ES", url: `${siteUrl}${path}`, siteName: "Abaco Ingeniería", title: "Licencia de apertura según tu negocio en Almería", description: "Licencia de apertura en Almería según tu negocio: peluquería, centro de estética, tienda, gimnasio, academia u oficina. Qué piden y qué revisar antes de alquilar.", images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura según tu negocio en Almería – Abaco Ingeniería" }] },
  twitter: { card: "summary_large_image", title: "Licencia de apertura según tu negocio en Almería", description: "Licencia de apertura en Almería según tu negocio: peluquería, centro de estética, tienda, gimnasio, academia u oficina. Qué piden y qué revisar antes de alquilar.", images: ["/images/og-abaco.jpg"] },
};

const comunes = [
  {
    "titulo": "Qué trámite necesita tu negocio",
    "cuerpo": "Según la actividad, el Ayuntamiento puede exigir una declaración responsable o una licencia. No es lo mismo una tienda de ropa que un supermercado pequeño con cámaras frigoríficas, ni una ferretería con almacén trasero que un comercio de barrio sin obras. Influyen lo que se vende, la superficie dedicada a almacén, las instalaciones que lleve el local y si hay que reformar. No te vamos a dar una respuesta de memoria: lo determinamos en el estudio previo, con el local delante y la actividad definida. Ese estudio es gratuito y te dice qué trámite toca, qué documentación hay que firmar y qué obras, si las hay, conviene presupuestar."
  },
  {
    "titulo": "Qué revisar antes de alquilar o comprar el local",
    "cuerpo": "Antes de firmar conviene comprobar que el uso urbanístico del local admite comercio, si hubo una actividad anterior y con qué licencia funcionaba, y si esa licencia sigue vigente o hay que cambiarla de titular. Revisamos también la salida de ventilación y de humos si vas a vender alimentación preparada, la existencia de aseos para el personal, la accesibilidad desde la calle, el acceso al almacén trasero y el estado de la instalación eléctrica. Visitamos el local contigo antes de que lo firmes y te decimos qué obras vendrían detrás. Un alquiler firmado sobre un local no apto sale caro."
  },
  {
    "titulo": "Incendios, accesibilidad y evacuación",
    "cuerpo": "Aplicamos el Código Técnico de la Edificación (Real Decreto 314/2006). En seguridad en caso de incendio (DB-SI) se definen recorridos y salidas de evacuación, extintores, señalización y alumbrado de emergencia, y el tratamiento del almacén si su carga combustible lo pide: cartón, textil y envases arden. En seguridad de utilización y accesibilidad (DB-SUA) se revisa el acceso desde la calle, los desniveles en la entrada, el ancho de paso entre estanterías, el mostrador y, si el caso lo exige, los aseos. En salubridad (DB-HS) se comprueba la ventilación. Todo se dibuja en planos para que el Ayuntamiento lo vea claro."
  },
  {
    "titulo": "Cómo trabajamos, paso a paso",
    "cuerpo": "Primero, visita al local y estudio previo gratuito: viabilidad, trámite aplicable y obras previsibles. Segundo, presupuesto cerrado, sin sorpresas. Tercero, proyecto o documentación técnica firmada por ingeniero colegiado, con planos, memoria e instalaciones. Cuarto, si el local necesita adecuación, dirigimos la obra con el contratista que elijas o te proponemos uno. Quinto, certificado final de obra e instalaciones. Sexto, presentamos el expediente en la sede electrónica del Ayuntamiento con firma FNMT y atendemos cualquier requerimiento. Tú sigues con el género, la decoración, la contratación y los proveedores; nosotros llevamos el expediente técnico y administrativo de principio a fin, y te avisamos de cada novedad."
  }
];

const secciones = [
  {
    "id": "peluqueria",
    "titulo": "Licencia de apertura de peluquería y barbería",
    "subtitulo": "Exigencias técnicas propias de una peluquería",
    "cuerpo": "Una peluquería concentra consumos que un local comercial corriente no tiene. Los lavacabezas exigen tomas de agua fría y caliente y desagües bien dispuestos, con producción de agua caliente dimensionada para el servicio. Secadores, planchas, tenacillas y casco de color suman potencia eléctrica en horas punta, y la instalación debe cumplir el Real Decreto 842/2002 (REBT), con protecciones y cuadro adecuados. Los tintes, decolorantes y alisados desprenden vapores, así que hace falta una ventilación suficiente. Si hay climatización, se rige por el Real Decreto 1027/2007 (RITE). Los equipos que puedan generar ruido se revisan conforme a la normativa autonómica de calidad acústica y la ordenanza municipal de ruido.",
    "faqs": [
      {
        "q": "¿Una barbería necesita licencia como una peluquería?",
        "a": "Sí, una barbería es también una actividad que debe comunicarse o autorizarse en el Ayuntamiento antes de abrir. Suele tener menos lavacabezas y menos productos químicos que una peluquería, y eso simplifica algunas instalaciones, pero no elimina el trámite. Si pasa por declaración responsable o por licencia lo fijamos en el estudio previo, a partir de tu local y de tu proyecto de negocio."
      },
      {
        "q": "¿Qué instalaciones se revisan en una peluquería?",
        "a": "Se revisa la instalación eléctrica, por la potencia de secadores, planchas y otros equipos, según el REBT; las tomas de agua y desagües de los lavacabezas; la ventilación por los vapores de tintes y alisados; la climatización, según el RITE si existe; y las medidas de incendio, accesibilidad y salubridad del Código Técnico de la Edificación. Todo se recoge en el proyecto de actividad."
      }
    ]
  },
  {
    "id": "centro-estetica",
    "titulo": "Licencia de apertura de centro de estética y uñas",
    "subtitulo": "Exigencias técnicas de cabinas y zonas de trabajo",
    "cuerpo": "Un centro de estética tiene necesidades muy concretas. Las cabinas de tratamiento necesitan una distribución que permita trabajar con comodidad y salir con seguridad, con ventilación suficiente, sobre todo donde se usan productos como esmaltes, disolventes o ceras. Hay que prever tomas de agua y desagües en cabinas, zona de uñas y lavabos, además de aseos para clientes y personal. La instalación eléctrica debe responder a la potencia de camillas, lámparas, vaporizadores y equipos, conforme al REBT. La climatización y la renovación de aire se proyectan según el RITE. En los centros de uñas cuidamos especialmente la extracción de vapores, y en todos revisamos el ruido de los equipos.",
    "faqs": [
      {
        "q": "¿Es lo mismo la licencia de un centro de uñas que la de un centro de estética?",
        "a": "Las exigencias son parecidas en lo básico, pero cada actividad tiene sus particularidades. En un centro de uñas pesa mucho la ventilación y la extracción de vapores. En estética con cabinas, la distribución, el agua y la potencia de los equipos. Lo revisamos según tu proyecto concreto, y si ofreces varios servicios, los valoramos todos juntos en el mismo estudio."
      },
      {
        "q": "¿Y si quiero hacer tratamientos con aparatología o de carácter sanitario?",
        "a": "Algunos tratamientos pueden requerir, además de la licencia de actividad, una autorización de la Junta de Andalucía. Lo revisamos en el estudio previo para que sepas desde el principio qué necesitas. Esa autorización la tramita el titular o un gestor especializado, y nosotros coordinamos la parte técnica del local para que todo encaje con lo que se pide."
      }
    ]
  },
  {
    "id": "tienda",
    "titulo": "Licencia de apertura de tienda y comercio",
    "subtitulo": "Exigencias técnicas de un comercio minorista",
    "cuerpo": "Lo habitual es revisar la instalación eléctrica conforme al Reglamento Electrotécnico para Baja Tensión (Real Decreto 842/2002), con la potencia que pidan la iluminación, los rótulos y los equipos. En alimentación hay que contar con cámaras o vitrinas frigoríficas, su carga eléctrica y la evacuación de condensados. La climatización y la ventilación se calculan con el RITE (Real Decreto 1027/2007). Se estudia el almacén trasero y su separación de la sala de venta, el rótulo y su instalación, y el ruido de equipos y compresores, que se valora según la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. Con todo ello se dimensiona la obra y se evita sobredimensionar lo que no hace falta.",
    "faqs": [
      {
        "q": "¿Se necesita licencia para una tienda de ropa?",
        "a": "Es una de las actividades más sencillas, pero no queda exenta de revisión técnica. Hay que valorar evacuación, extintores, alumbrado de emergencia, accesibilidad y la instalación eléctrica y de climatización. Si el local viene de otra actividad o no tiene licencia previa, el trámite puede cambiar. Lo confirmamos en el estudio previo."
      },
      {
        "q": "¿Qué diferencia hay con abrir un supermercado pequeño?",
        "a": "En alimentación suelen sumarse cámaras o vitrinas frigoríficas, más carga eléctrica, evacuación de condensados, un almacén mayor y una ventilación más cuidada. Todo eso condiciona el proyecto y la obra. Además, según el producto que vendas, puede haber requisitos sectoriales que se gestionan aparte; coordinamos la parte técnica con quien tramite esa autorización."
      }
    ]
  },
  {
    "id": "gimnasio",
    "titulo": "Licencia de apertura de gimnasio, box y estudio de pilates o yoga",
    "subtitulo": "Ruido, ventilación, vestuarios e instalación eléctrica",
    "cuerpo": "El primer problema de un gimnasio suele ser el ruido, tanto el aéreo de la música como el de impactos y vibraciones de pesas, barras que caen y saltos. Si hay vecinos encima o contiguos, hay que estudiar aislamiento acústico y suelos que absorban el golpe, con arreglo a la normativa autonómica de calidad acústica y a la ordenanza municipal de ruido. Con mucha gente haciendo esfuerzo, la ventilación y la climatización deben dimensionarse para esa ocupación, según el RITE. Los vestuarios y duchas requieren agua caliente y desagües bien resueltos. La instalación eléctrica se proyecta conforme al REBT, atendiendo a las máquinas y a la iluminación.",
    "faqs": [
      {
        "q": "¿Un box de crossfit o un estudio de pilates se tramita igual que un gimnasio?",
        "a": "Los pasos son los mismos, pero los problemas cambian. En un box pesan el ruido de impactos, la altura del local y las vibraciones. En un estudio de pilates o yoga suele haber menos ruido, pero importan la climatización, los vestuarios y la evacuación según el número de alumnos. Estudiamos cada caso por separado y te decimos qué exigirá tu local concreto."
      },
      {
        "q": "¿Qué hago si tengo vecinos encima del local?",
        "a": "Es la situación más delicada. Antes de alquilar conviene ver qué hay encima y qué aislamiento tiene el techo. Después se estudia el aislamiento acústico y el suelo, para que pesas y saltos no se transmitan a la estructura. Se hace conforme a la normativa autonómica de calidad acústica y a la ordenanza municipal de ruido. A veces la mejor respuesta técnica es decir que el local no sirve."
      }
    ]
  },
  {
    "id": "academia",
    "titulo": "Licencia de apertura de academia y centro de formación",
    "subtitulo": "Exigencias técnicas de una academia",
    "cuerpo": "Cada aula debe tener una ocupación razonable respecto a su superficie y una ventilación suficiente, natural o mecánica, con una climatización que no la comprometa; esto se justifica con el RITE (Real Decreto 1027/2007) y con el documento de salubridad del Código Técnico. Los aseos deben ser adecuados para el público y accesibles. La instalación eléctrica se ajusta al REBT (Real Decreto 842/2002), con alumbrado normal y de emergencia. En música y baile entra el aislamiento acústico: se estudia según la normativa autonómica de calidad acústica y la ordenanza municipal de ruido, y suele exigir tratar paredes, techo y suelo. En centros de formación con equipos o talleres se añaden cargas eléctricas y, a veces, extracción específica.",
    "faqs": [
      {
        "q": "¿Puedo abrir una academia en un bajo de un edificio de viviendas?",
        "a": "En muchos casos sí, pero depende del uso urbanístico permitido en esa zona y de las condiciones del local. En un edificio de viviendas pesan la evacuación, la compartimentación respecto a los vecinos y, si hay música o baile, el aislamiento acústico. Por eso conviene que visitemos el local antes de firmar el alquiler."
      },
      {
        "q": "¿Qué exige el Ayuntamiento a una escuela de música o de baile?",
        "a": "Además de lo común a cualquier academia, hay que justificar el aislamiento acústico, porque la música y el movimiento generan ruido y vibraciones que llegan a los vecinos. Se estudia con la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. También se revisan la ventilación, la climatización y los vestuarios o aseos."
      }
    ]
  },
  {
    "id": "oficina",
    "titulo": "Licencia de apertura de oficina y despacho profesional",
    "subtitulo": "Exigencias técnicas típicas de una oficina",
    "cuerpo": "Una oficina tiene pocas instalaciones, pero se revisan todas. La instalación eléctrica debe cumplir el Reglamento Electrotécnico para Baja Tensión (Real Decreto 842/2002): cuadro, protecciones y circuitos adecuados a los puestos de trabajo, equipos de impresión o servidores, con el cableado de datos ordenado y seguro. La climatización y la ventilación se ajustan al RITE (Real Decreto 1027/2007), y conviene resolver bien la unidad exterior del aire acondicionado, también por ruido y vibraciones frente a los vecinos, según la normativa autonómica de calidad acústica y la ordenanza municipal de ruido. Los aseos deben ser suficientes y accesibles para el personal y, si atiendes público, para tus clientes. A ello se suman la iluminación, la señalización y el archivo.",
    "faqs": [
      {
        "q": "¿Puedo poner mi oficina en una vivienda o en un piso?",
        "a": "Es posible que se pueda, pero no se da por hecho. Hay que revisar el uso permitido para ese inmueble y los estatutos de la comunidad de propietarios, y valorar si supone un cambio de uso. Si piensas comprar o alquilar un piso para montar un despacho, visitamos el inmueble antes de que firmes y te decimos si es viable."
      },
      {
        "q": "¿Una inmobiliaria o una gestoría necesita algo distinto de un despacho?",
        "a": "Técnicamente se parecen, pero cambia la forma de usar el local: atención al público, escaparate, número de puestos, archivo o zona de espera. Eso influye en la accesibilidad, los aseos, la evacuación y la climatización. En la visita analizamos cómo vas a trabajar realmente y adaptamos el proyecto a ese uso, sin sobredimensionar nada."
      }
    ]
  }
];

const faqs = secciones.flatMap((s) => s.faqs);

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura según tu negocio en Almería",
  provider: { "@type": "LocalBusiness", "@id": "https://www.ingenierial.es/#organization", name: "Abaco Ingeniería", url: siteUrl, telephone: "+34670607830", address: { "@type": "PostalAddress", streetAddress: "Carretera de Ronda, 293", addressLocality: "Almería", postalCode: "04009", addressCountry: "ES" } },
  areaServed: [{ "@type": "City", name: "Almería" }, { "@type": "AdministrativeArea", name: "Provincia de Almería" }],
  url: `${siteUrl}${path}`,
  description: "Licencia de apertura en Almería según tu negocio: peluquería, centro de estética, tienda, gimnasio, academia u oficina. Qué piden y qué revisar antes de alquilar.",
};
const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: `${siteUrl}/licencia-de-actividad` },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura según tu negocio en Almería", item: `${siteUrl}${path}` },
  ],
};

const otros = [
  ["/licencia-apertura-clinica-almeria", "Clínica, consulta o centro sanitario", "Licencia municipal y coordinación con la autorización sanitaria de la Junta."],
  ["/licencia-apertura-taller-almeria", "Taller mecánico, chapa y pintura o lavadero", "Licencia, separador de hidrocarburos, residuos y registro industrial."],
  ["/licencia-bar-restaurante-almeria", "Bar, cafetería o restaurante", "Salida de humos, ruido y clasificación en el catálogo andaluz."],
  ["/licencia-discoteca-pub-almeria", "Pub, discoteca o local con música", "Aislamiento acústico, aforo y evacuación."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3"><Logo className="h-11 w-auto" /></Link>
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura según tu negocio en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Guía por tipo de negocio</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura según tu negocio en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Cada negocio tiene sus propias exigencias técnicas. Te contamos qué piden en Almería para una peluquería, un centro de estética, una tienda, un gimnasio, una academia o una oficina, y qué revisar antes de firmar el alquiler."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Pedir estudio previo gratuito</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <p className="text-slate-700 leading-relaxed">{"Somos una oficina técnica de Almería con ingeniero técnico industrial colegiado desde 1983. Redactamos el proyecto o la documentación técnica de tu actividad, dirigimos la adecuación del local cuando hace falta, firmamos el certificado final y lo presentamos en la sede electrónica del Ayuntamiento. Antes de que firmes nada, visitamos el local y te decimos si sirve para tu negocio. Trabajamos en toda la provincia."}</p>
        <h2 className="mt-10 text-2xl font-bold">Elige tu negocio</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {secciones.map((s) => (
            <li key={s.id}><a href={`#${s.id}`} className="block rounded-xl border border-slate-200 px-4 py-3 text-sky-700 hover:border-sky-400 hover:bg-sky-50">{s.titulo}</a></li>
          ))}
          {otros.slice(0, 2).map(([href, t]) => (
            <li key={href}><Link href={href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sky-700 hover:border-sky-400 hover:bg-sky-50">{t}</Link></li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Lo que tienen en común todos los negocios</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {comunes.map((b) => (
              <article key={b.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{b.titulo}</h3>
                <p className="mt-3 text-slate-600">{b.cuerpo}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {secciones.map((s) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-5xl scroll-mt-24 border-b border-slate-100 px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">{s.titulo} en Almería</h2>
          <h3 className="mt-6 text-xl font-semibold">{s.subtitulo}</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">{s.cuerpo}</p>
          <div className="mt-6 space-y-5">
            {s.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold">Otros negocios con trámites propios</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {otros.map(([href, t, d]) => (
            <li key={href} className="rounded-2xl border border-slate-200 p-5">
              <Link href={href} className="font-semibold text-sky-700 underline hover:no-underline">{t}</Link>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate-700">Más información: <Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">licencia de actividad en Almería</Link> · <Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">cuánto cuesta</Link> · <Link href="/cambio-titularidad-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">cambio de titularidad</Link></p>
      </section>

      <section id="contacto" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cuéntanos qué negocio vas a abrir</h2>
          <p className="mt-4 text-slate-300">Dinos el tipo de negocio y dónde está el local. Respondemos en menos de 24 h.</p>
          <div className="mt-8"><ContactForm /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
