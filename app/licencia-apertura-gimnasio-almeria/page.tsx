import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-gimnasio-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de gimnasio en Almería",
  description: "Licencia de apertura de gimnasio en Almería: calificación ambiental según aforo y superficie, ruido, vestuarios e incendios. Visitamos el local antes de firmar.",
  keywords: ["licencia de apertura de gimnasio en Almería","abrir un gimnasio en Almería","calificación ambiental gimnasio Almería","licencia de actividad gimnasio Almería","proyecto de actividad gimnasio Almería","licencia estudio de pilates Almería","licencia academia de baile Almería","aislamiento acústico gimnasio Almería","licencia centro de entrenamiento Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-gimnasio-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de gimnasio en Almería",
    description: "Licencia de apertura de gimnasio en Almería: calificación ambiental según aforo y superficie, ruido, vestuarios e incendios. Visitamos el local antes de firmar.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de gimnasio en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de gimnasio en Almería", description: "Licencia de apertura de gimnasio en Almería: calificación ambiental según aforo y superficie, ruido, vestuarios e incendios. Visitamos el local antes de firmar.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de gimnasio en Almería",
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
  url: "https://www.ingenierial.es/licencia-apertura-gimnasio-almeria",
  description: "Licencia de apertura de gimnasio en Almería: calificación ambiental según aforo y superficie, ruido, vestuarios e incendios. Visitamos el local antes de firmar.",
};

const faqs = [
  {
    "q": "¿Qué trámite necesita un gimnasio en Almería?",
    "a": "Un gimnasio está en el anexo de actividades de la ley andaluza de calidad ambiental. Con 150 personas de capacidad o más, o con más de 500 m² construidos, requiere calificación ambiental. Con menos de 150 personas o 500 m² o menos, requiere calificación ambiental mediante declaración responsable de los efectos ambientales. Para la calificación ambiental hay que presentar un análisis ambiental junto al proyecto técnico. Lo concretamos con tu local."
  },
  {
    "q": "¿Cuánto tarda la calificación ambiental?",
    "a": "Con carácter general, el plazo máximo para resolver es de tres meses desde que la documentación está completa. Si el Ayuntamiento no resuelve en ese plazo, no se entiende favorable. Por eso conviene presentar el expediente bien preparado y no dar por hecha la apertura en una fecha concreta. No podemos prometerte el resultado, pero sí cuidar que la documentación esté completa y bien justificada."
  },
  {
    "q": "¿Puedo abrir un gimnasio en un local que fue otra cosa?",
    "a": "Se puede estudiar, pero depende del uso permitido en el local, del aforo, del ruido y de las salidas. Un local que fue tienda o taller puede necesitar más obra de aislamiento acústico, vestuarios o evacuación que uno que ya fue gimnasio. Por eso lo visitamos antes del alquiler y te damos nuestra valoración técnica, para que decidas con datos y no con sorpresas posteriores."
  },
  {
    "q": "¿Qué ocurre con un estudio de pilates o yoga?",
    "a": "Su trámite depende de cómo se clasifique la actividad y de su aforo y superficie. Suele haber menos ruido y menos aforo que en un gimnasio de máquinas, pero no damos el trámite por cerrado sin ver tu local y el literal aplicable. Si la duda condiciona el expediente, lo correcto es una consulta escrita al Ayuntamiento, y te ayudamos a plantearla con la memoria descriptiva."
  },
  {
    "q": "¿Cómo evito problemas de ruido con los vecinos?",
    "a": "Se resuelve en el proyecto con un estudio acústico previo, que define el aislamiento de techos y paredes y el tratamiento del suelo frente al impacto. También conviene limitar la zona de peso libre y controlar la música. Lo ideal es hacerlo antes de alquilar, mirando qué actividades hay encima, debajo y al lado. Después de abrir, corregir el ruido resulta mucho más difícil que prevenirlo."
  },
  {
    "q": "¿Qué pasa si quiero reformar o ampliar un gimnasio que ya tiene licencia?",
    "a": "La ordenanza de Almería exige licencia de apertura previa para las modificaciones de actividades que ya cuentan con ella. Antes de decidir la reforma, revisamos qué se amplía, cuánto aumenta la superficie construida o el aforo y si eso cambia el procedimiento ambiental. Por ejemplo, superar los 500 m² o las 150 personas cambia la categoría. Te lo comprobamos antes de empezar la obra."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de gimnasio en Almería", item: "https://www.ingenierial.es/licencia-apertura-gimnasio-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Calificación ambiental: aforo y superficie",
    "cuerpo": "La ley andaluza distingue dos casos para los gimnasios, y las superficies que usa son construidas totales. Requieren calificación ambiental los gimnasios con capacidad de 150 personas o más, o de más de 500 m² construidos. Requieren calificación ambiental mediante declaración responsable de los efectos ambientales los de capacidad inferior a 150 personas, o de 500 m² o menos. Los dos criterios se solapan en algunos casos, por ejemplo un local grande con poco aforo, y ahí no elegimos una lectura por ti: contrastamos el literal con tu proyecto y, si la duda condiciona el trámite, la consulta se hace por escrito al Ayuntamiento. Las academias de baile y danza van siempre por calificación ambiental, sin umbral."
  },
  {
    "titulo": "Qué se tramita en Almería capital",
    "cuerpo": "La ordenanza de apertura de establecimientos fija la declaración responsable como regla general para las actividades que se implantan o reforman. En una actividad sometida a calificación ambiental, la ordenanza la integra en la licencia de obras; después viene la licencia de utilización y, por último, la declaración responsable de inicio de la actividad. La calificación ambiental favorable es requisito para la licencia municipal, y si no se resuelve en el plazo máximo de tres meses desde que la documentación está completa, no se entiende favorable. Por eso planificamos el calendario antes de que empiece el alquiler. En otros municipios de la provincia cada ayuntamiento tiene su ordenanza y lo consultamos."
  },
  {
    "titulo": "Ruido de impacto y vecinos",
    "cuerpo": "El ruido es el problema más habitual de un gimnasio. Las pesas que caen, las máquinas de cardio y la música se transmiten por la estructura del edificio, no solo por el aire, y afectan a los vecinos de arriba y de abajo. La memoria del proyecto debe incluir un estudio acústico previo, y de él sale el tratamiento necesario: suelos flotantes o amortiguadores, aislamiento de techos y paredes y control del volumen de la música. Es mucho más sencillo prever ese tratamiento antes de alquilar que corregirlo tras la primera queja. Por eso visitamos el local y miramos qué hay encima, debajo y al lado antes de que decidas nada."
  },
  {
    "titulo": "Vestuarios, aseos y ventilación",
    "cuerpo": "Un gimnasio concentra a mucha gente respirando, sudando y duchándose en poco espacio. La memoria justifica la normativa higiénico-sanitaria y el diseño de vestuarios y aseos: ventilación, desagües, agua caliente y accesibilidad. La ventilación del local y de los vestuarios se calcula conforme al RITE (Real Decreto 1027/2007), y la climatización debe ser adecuada al aforo previsto. Si el gimnasio tiene sala de pilates, yoga o ciclo indoor, cada sala puede pedir condiciones distintas de ruido y de aire. Lo dejamos resuelto en planos y memoria, con las instalaciones coordinadas con la instalación eléctrica, que debe cumplir el REBT (Real Decreto 842/2002)."
  },
  {
    "titulo": "Aforo, evacuación e incendios",
    "cuerpo": "La memoria justifica el cumplimiento del Código Técnico de la Edificación (Real Decreto 314/2006) en seguridad en caso de incendio: aforo, vías de evacuación, puertas, señalización y alumbrado de emergencia. En un gimnasio se juntan muchas personas con movimiento y equipos eléctricos, y el aforo que puedas declarar depende del tamaño de las salidas. Ese dato condiciona, a su vez, el trámite ambiental, porque el umbral de 150 personas se mide por capacidad. Calculamos el aforo real del local y te decimos qué salidas y qué medios de protección hacen falta, para que no descubras después que tu local solo admite menos clientes de los que preveías."
  },
  {
    "titulo": "Pilates, yoga, entrenamiento y baile",
    "cuerpo": "No todas las actividades de ejercicio se tramitan igual. Un gimnasio con sala de máquinas y peso libre es el caso de la ley andaluza. Un estudio de pilates o yoga, con grupos pequeños y menos ruido, lo valoramos caso a caso para ver cómo se clasifica la actividad en tu local, sin dar por hecho el trámite hasta mirar el literal aplicable. Un centro de entrenamiento con cargas y saltos tiene más problema de ruido de impacto. Y las academias de baile y danza van siempre por calificación ambiental. Te decimos en la visita qué categoría encaja y qué documentación llevará, antes de que firmes el contrato de alquiler."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de gimnasio en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Gimnasios, pilates y yoga"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de gimnasio en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Un gimnasio exige calificación ambiental, y el trámite depende del aforo y de la superficie construida. Visitamos el local antes de que firmes, redactamos el proyecto y el análisis ambiental y presentamos todo en la sede electrónica."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Abrir un gimnasio en Almería es más complejo que abrir una tienda. La ley andaluza de gestión integrada de la calidad ambiental incluye a los gimnasios en su anexo de actividades, y lo que cambia es el procedimiento: calificación ambiental completa si el gimnasio admite 150 personas o más, o supera los 500 m² construidos, y calificación ambiental mediante declaración responsable de los efectos ambientales si tiene menos de 150 personas o 500 m² construidos o menos. Además hay problemas propios de la actividad: ruido de impacto, vestuarios, ventilación y evacuación. Esta página recoge qué se pide, qué conviene mirar en el local antes de alquilarlo y cómo se ordena el trámite."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Visitamos el local antes de que firmes el alquiler y te decimos si el gimnasio es viable, qué aforo admite y qué obras necesita. Después redactamos el proyecto de actividad y el análisis ambiental, dirigimos la adecuación, firmamos el certificado final y presentamos la documentación en la sede electrónica del Ayuntamiento con firma digital FNMT. Atendemos gimnasios, centros de entrenamiento, estudios de pilates y yoga y academias de baile. Trabajamos en Almería capital y en toda la provincia, nos desplazamos al local, damos presupuesto cerrado antes de empezar y respondemos en 24 horas."}</p>
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
          <li>·{" "}<Link href="/calificacion-ambiental-almeria" className="text-sky-700 underline hover:no-underline">{"Calificación ambiental en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura y actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-climatizacion-almeria" className="text-sky-700 underline hover:no-underline">{"Legalizar la climatización"}</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico en Almería"}</Link></li>
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
