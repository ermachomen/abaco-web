import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-actividad-velez-malaga";

export const metadata: Metadata = {
  title: "Licencia de apertura en Vélez-Málaga | Ingeniero colegiado",
  description: "Licencia de apertura en Vélez-Málaga, Torre del Mar y la Axarquía: proyecto de actividad, trámite en el Ayuntamiento y certificado final. Visitamos el local.",
  keywords: ["licencia de apertura en Vélez-Málaga","licencia de actividad Vélez-Málaga","licencia de apertura Torre del Mar","proyecto de actividad Vélez-Málaga","declaración responsable Vélez-Málaga","licencia de apertura Axarquía","ingeniero licencias Vélez-Málaga","licencia de bar Torre del Mar","cambio de titularidad local Vélez-Málaga"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-actividad-velez-malaga",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura en Vélez-Málaga y Torre del Mar",
    description: "Licencia de apertura en Vélez-Málaga, Torre del Mar y la Axarquía: proyecto de actividad, trámite en el Ayuntamiento y certificado final. Visitamos el local.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura en Vélez-Málaga y Torre del Mar – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura en Vélez-Málaga y Torre del Mar", description: "Licencia de apertura en Vélez-Málaga, Torre del Mar y la Axarquía: proyecto de actividad, trámite en el Ayuntamiento y certificado final. Visitamos el local.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura en Vélez-Málaga y Torre del Mar",
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
    { "@type": "City", name: "Vélez-Málaga" },
    { "@type": "AdministrativeArea", name: "Axarquía" },
    { "@type": "AdministrativeArea", name: "Provincia de Málaga" },
  ],
  url: "https://www.ingenierial.es/licencia-actividad-velez-malaga",
  description: "Licencia de apertura en Vélez-Málaga, Torre del Mar y la Axarquía: proyecto de actividad, trámite en el Ayuntamiento y certificado final. Visitamos el local.",
};

const faqs = [
  {
    "q": "¿Dónde se tramita la licencia de apertura en Vélez-Málaga?",
    "a": "Ante el Ayuntamiento de Vélez-Málaga, por su sede electrónica. Según la actividad se presenta una declaración responsable o se solicita licencia, y no podemos decirte cuál sin conocer el local y lo que vas a hacer en él: lo decidimos en el estudio previo. Nosotros preparamos la documentación técnica, la firmamos con certificado digital FNMT, la presentamos y seguimos el expediente por ti."
  },
  {
    "q": "¿Necesito proyecto de actividad para mi local en Vélez-Málaga?",
    "a": "Depende de la actividad, de la superficie y de las instalaciones del local, y lo concretamos en el estudio previo gratuito. Para empezar nos basta con la dirección, la actividad prevista, la superficie aproximada y, si existe, la licencia anterior del local. Cuando hay proyecto, lo firma un ingeniero técnico industrial colegiado y justifica el CTE (DB-SI, DB-SUA y DB-HS), el REBT, el RITE y el ruido."
  },
  {
    "q": "¿Atendéis en Torre del Mar y en el resto de la Axarquía?",
    "a": "Sí. Dentro de Vélez-Málaga nos desplazamos al casco, a Torre del Mar, Caleta de Vélez, Almayate y Benajarafe, y también atendemos Nerja, Torrox, Rincón de la Victoria y Algarrobo. Vemos el local en persona y el resto del trámite lo hacemos online. Cada municipio tiene su propio Ayuntamiento, así que preparamos la documentación para el del municipio donde está tu local."
  },
  {
    "q": "¿Qué debo comprobar del local antes de alquilarlo o comprarlo?",
    "a": "Que el uso urbanístico admita tu actividad y que no haya sorpresas con una licencia anterior: qué actividad amparaba y qué instalaciones tenía. Lo revisamos con la documentación del local y, si hay dudas, consultando al Ayuntamiento. Conviene hacerlo antes de firmar el contrato, porque si el uso no es compatible, el resto del trámite no sirve de nada. Escríbenos con la dirección del local y lo miramos."
  },
  {
    "q": "¿Gestionáis el cambio de titularidad de un negocio ya abierto?",
    "a": "Sí, tramitamos el cambio de titularidad ante el Ayuntamiento de Vélez-Málaga. Primero comprobamos la licencia o declaración existente y el estado real del local. Si todo sigue igual, el trámite se centra en el cambio de titular; si vas a reformar el local o a cambiar de actividad, valoramos si hace falta un proyecto nuevo. Esa valoración la hacemos en el estudio previo, con visita al local."
  },
  {
    "q": "¿Qué es el certificado final y quién lo firma?",
    "a": "Es el documento con el que el técnico director acredita que el local terminado coincide con el proyecto y que las instalaciones cumplen lo proyectado. Lo firma el ingeniero técnico industrial colegiado tras visitar el local cuando las obras han acabado, y lo incorporamos al expediente ante el Ayuntamiento. Si en la visita final vemos algo que no coincide, te lo indicamos para corregirlo antes de presentarlo."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura en Vélez-Málaga y Torre del Mar", item: "https://www.ingenierial.es/licencia-actividad-velez-malaga" },
  ],
};

const bloques = [
  {
    "titulo": "Actividades que más tramitamos por zonas",
    "cuerpo": "Un proyecto de actividad en Vélez-Málaga cambia mucho según el núcleo. En el casco de Vélez y en Torre del Mar abundan los comercios, las oficinas y la hostelería. En la zona industrial se concentran talleres, naves y almacenes. Y en el entorno agrícola, donde el cultivo subtropical tiene peso, se piden almacenes y espacios de manipulado. También nos desplazamos a Caleta de Vélez, Almayate y Benajarafe. Para cada caso definimos qué documentación técnica hace falta: planos, memoria, justificación de instalaciones y, cuando procede, proyecto completo firmado por ingeniero colegiado. No damos por hecho qué exige el Ayuntamiento: lo concretamos en el estudio previo con tu actividad, la superficie y el estado del local."
  },
  {
    "titulo": "Declaración responsable o licencia ante el Ayuntamiento",
    "cuerpo": "La licencia de apertura en Vélez-Málaga se tramita ante el Ayuntamiento por su sede electrónica, como declaración responsable o como licencia de actividad, según el caso. No afirmamos de antemano cuál te corresponde: depende de lo que vayas a hacer en el local y de sus instalaciones, y se decide en el estudio previo. Una vez elegida la vía, preparamos el expediente completo con la documentación técnica, la firmamos con certificado digital FNMT y la presentamos por vía electrónica. Después seguimos el expediente y contestamos los requerimientos del Ayuntamiento, si los hay. Tú no tienes que desplazarte para firmar: solo necesitamos que nos facilites los datos y la documentación que tengas del local."
  },
  {
    "titulo": "Qué justifica el proyecto técnico",
    "cuerpo": "El proyecto demuestra que el local es seguro y apto para la actividad. Justificamos el Código Técnico de la Edificación (Real Decreto 314/2006) en tres frentes: seguridad en caso de incendio (DB-SI), accesibilidad (DB-SUA) y salubridad (DB-HS). Añadimos la instalación eléctrica conforme al Reglamento electrotécnico para baja tensión, REBT (Real Decreto 842/2002), y, si hay climatización o ventilación, el Reglamento de Instalaciones Térmicas en los Edificios, RITE (Real Decreto 1027/2007). El ruido se estudia con la normativa autonómica de calidad acústica y la ordenanza municipal de ruido, un punto especialmente relevante en hostelería. Por eso tomamos medidas, fotografiamos y revisamos las instalaciones existentes antes de redactar, para detectar qué hay que corregir antes de presentar."
  },
  {
    "titulo": "Hostelería en Torre del Mar y catálogo andaluz",
    "cuerpo": "La licencia de apertura en Torre del Mar la piden sobre todo bares, cafeterías y restaurantes, también los de playa. En Andalucía rige la Ley 13/1999, de 15 de diciembre, de Espectáculos Públicos y Actividades Recreativas de Andalucía, que encarga a la Junta aprobar por decreto el catálogo de espectáculos, actividades recreativas y tipos de establecimientos públicos, con sus denominaciones, modalidades y procedimientos de intervención administrativa. Es el Catálogo aprobado por el Decreto 155/2018, de 31 de julio, que clasifica la hostelería en establecimientos sin música, con música y especiales de hostelería con música. Lo primero es encajar tu local en la categoría correcta, porque de ahí depende lo que debe contener el proyecto. Después revisamos cocina, extracción, aseos, aforo y aislamiento acústico. No fijamos horarios aquí: dependen de la categoría de tu establecimiento y se comprueban en el estudio previo."
  },
  {
    "titulo": "Local, cambio de titularidad y certificado final",
    "cuerpo": "Antes de alquilar o comprar, y antes de pedir la licencia de apertura en Vélez-Málaga, comprobamos que el uso urbanístico del local es compatible con tu actividad y si existe una licencia antigua: qué actividad amparaba y qué instalaciones tenía. Es la comprobación que evita sorpresas después de firmar el contrato. Si te quedas con un negocio ya abierto, tramitamos el cambio de titularidad ante el Ayuntamiento; si vas a reformarlo o a cambiar de actividad, valoramos si hace falta un proyecto nuevo. Cuando el local está listo, volvemos a visitarlo y emitimos el certificado final, que acredita que lo ejecutado coincide con el proyecto y que las instalaciones cumplen lo proyectado, y lo incorporamos al expediente. Si algo no coincide, te lo indicamos para corregirlo antes de presentarlo."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura en Vélez-Málaga y Torre del Mar"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Vélez-Málaga · Desplazamiento y online"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura en Vélez-Málaga y Torre del Mar"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto de actividad y tramitación ante el Ayuntamiento de Vélez-Málaga para comercios, hostelería, oficinas, talleres y naves. Ingeniero técnico industrial colegiado: visitamos el local y llevamos el resto del trámite online."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Si vas a abrir un negocio, la licencia de apertura en Vélez-Málaga empieza por una pregunta técnica: qué se va a hacer en el local y qué instalaciones necesita. Vélez-Málaga es la capital de la Axarquía y su término reúne núcleos muy distintos: el casco de Vélez, Torre del Mar en la costa, Caleta de Vélez, Almayate y Benajarafe. Cada zona trae su tipo de local, desde el comercio de barrio hasta el bar junto a la playa, la nave o el almacén agrícola. En Abaco Ingeniería redactamos el proyecto de actividad, lo presentamos ante el Ayuntamiento y seguimos el expediente. Somos una oficina técnica con sede en Almería: nos desplazamos a ver tu local y el resto del trámite lo hacemos online."}</p>
          <p>{"Detrás de cada expediente hay un ingeniero técnico industrial colegiado desde 1983, con más de 40 años de trayectoria. Empezamos con un estudio previo gratuito en el que revisamos el local, la actividad y la documentación disponible, y te damos un presupuesto cerrado antes de empezar. Respondemos en menos de 24 horas. Firmamos los documentos con certificado digital FNMT, así que no tienes que acudir a ninguna oficina para firmar. Además de Vélez-Málaga, damos servicio en el resto de la Axarquía: Nerja, Torrox, Rincón de la Victoria y Algarrobo. Si tu local está en otro municipio de la comarca, cuéntanos el caso y te decimos qué documentación hace falta."}</p>
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
          <li>·{" "}<Link href="/licencia-actividad-malaga" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad y apertura en Málaga"}</Link></li>
          <li>·{" "}<Link href="/licencia-bar-restaurante-malaga" className="text-sky-700 underline hover:no-underline">{"Licencia de bar o restaurante en Málaga"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad"}</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">{"Licencia de actividad"}</Link></li>
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
