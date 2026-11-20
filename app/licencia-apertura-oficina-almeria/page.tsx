import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-apertura-oficina-almeria";

export const metadata: Metadata = {
  title: "Licencia de apertura de oficina o despacho en Almería",
  description: "Licencia de apertura de oficina o despacho en Almería: cuándo la ordenanza lo excluye, qué debes cumplir igualmente y cómo te ayudamos con el local.",
  keywords: ["licencia de apertura de oficina en Almería","licencia de apertura de despacho en Almería","abrir una oficina en Almería","licencia de actividad oficina Almería","licencia inmobiliaria Almería","licencia gestoría asesoría Almería","local para oficina uso compatible","accesibilidad oficina local Almería","proyecto técnico oficina Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-apertura-oficina-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de apertura de oficina o despacho en Almería",
    description: "Licencia de apertura de oficina o despacho en Almería: cuándo la ordenanza lo excluye, qué debes cumplir igualmente y cómo te ayudamos con el local.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de apertura de oficina o despacho en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de apertura de oficina o despacho en Almería", description: "Licencia de apertura de oficina o despacho en Almería: cuándo la ordenanza lo excluye, qué debes cumplir igualmente y cómo te ayudamos con el local.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de apertura de oficina o despacho en Almería",
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
  url: "https://www.ingenierial.es/licencia-apertura-oficina-almeria",
  description: "Licencia de apertura de oficina o despacho en Almería: cuándo la ordenanza lo excluye, qué debes cumplir igualmente y cómo te ayudamos con el local.",
};

const faqs = [
  {
    "q": "¿Una oficina necesita licencia de apertura en Almería?",
    "a": "En Almería capital, la ordenanza excluye de su ámbito los despachos u oficinas de actividades profesionales que no generen residuos, vertidos, radiaciones ni contaminantes atmosféricos distintos de los de una vivienda. Queda, pues, fuera de su ámbito. Aun así, el local debe cumplir seguridad, salubridad, accesibilidad y calidad ambiental, y obtener las demás autorizaciones que apliquen. Lo comprobamos contigo."
  },
  {
    "q": "¿Qué actividades de despacho no entran en la exclusión?",
    "a": "No entran en la exclusión las actividades sanitarias o asistenciales con intervención quirúrgica, radiodiagnóstico o presencia de animales. Una consulta que haga radiografías, una clínica con quirófano o un centro que atienda animales tienen que seguir el trámite que corresponda. En esos casos revisamos el local, el proyecto técnico y la documentación que pide el Ayuntamiento antes de que te comprometas con el alquiler."
  },
  {
    "q": "¿Qué debe cumplir una oficina aunque no tenga licencia?",
    "a": "Tiene que reunir igualmente las condiciones de seguridad, salubridad, accesibilidad y calidad ambiental, y obtener las demás licencias o autorizaciones aplicables. En la práctica significa instalación eléctrica en regla, evacuación e incendios resueltos, acceso y aseo accesibles, climatización documentada y un uso del local compatible con el urbanismo. Preparamos la documentación técnica para que quede todo firmado y ordenado."
  },
  {
    "q": "¿Puedo poner mi despacho en una vivienda?",
    "a": "Depende del uso urbanístico del inmueble, así que no se puede responder sin mirar el caso. Revisamos qué uso tiene la vivienda, si admite despacho profesional y qué cambios harían falta en accesibilidad e instalaciones. Si las dudas condicionan el alquiler o la compra, la vía segura es una consulta escrita al Ayuntamiento, que te ayudamos a redactar."
  },
  {
    "q": "¿Qué pasa si mi oficina cambia de actividad más adelante?",
    "a": "Si empiezas con un despacho y luego añades una actividad que genera residuos, vertidos o emisiones distintos de los de una vivienda, o una sanitaria con las características antes citadas, dejas de estar en la exclusión y hay que tramitar la actividad. Por eso conviene definir bien el uso desde el principio. Si cambia algo, revisamos el local y te decimos qué trámite toca."
  },
  {
    "q": "¿Hacéis la visita antes de alquilar el local?",
    "a": "Sí. Visitamos el local antes de que firmes el alquiler, comprobamos el uso urbanístico, la accesibilidad, la instalación eléctrica y los recorridos de evacuación, y te decimos qué obra necesita y qué documentación conviene tener. Te damos presupuesto cerrado antes de empezar y respondemos en 24 horas. Trabajamos en Almería capital y en toda la provincia."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencias", item: "https://www.ingenierial.es/licencia-de-actividad" },
    { "@type": "ListItem", position: 3, name: "Licencia de apertura de oficina o despacho en Almería", item: "https://www.ingenierial.es/licencia-apertura-oficina-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Cuándo una oficina queda fuera de la ordenanza",
    "cuerpo": "La ordenanza de apertura de establecimientos de Almería excluye de su ámbito los despachos u oficinas de actividades profesionales que no generen residuos, vertidos, radiaciones ni contaminantes atmosféricos distintos de los de una vivienda. Una gestoría, una asesoría, una agencia o una inmobiliaria suelen encajar en esa descripción. Pero la exclusión tiene límites: no entran en ella las actividades sanitarias o asistenciales con intervención quirúrgica, radiodiagnóstico o presencia de animales. Y estar excluida no la libera de nada más: el local debe reunir igualmente las condiciones de seguridad, salubridad, accesibilidad y calidad ambiental, y debes obtener las demás autorizaciones que apliquen. Lo revisamos con tu actividad concreta."
  },
  {
    "titulo": "Uso compatible del local",
    "cuerpo": "Es la primera comprobación y la que más sorpresas da. Un local puede estar a pie de calle y tener aspecto de oficina, pero si su uso urbanístico no admite oficinas, el problema aparece después de firmar. También ocurre con viviendas que se quieren dedicar a despacho profesional o con locales de planta baja de un edificio residencial. Antes de que alquiles, consultamos qué uso tiene el local y si admite el que necesitas. Si dudas, la ordenanza permite una consulta previa con memoria descriptiva, aunque la respuesta del Ayuntamiento no le vincula, así que no sustituye a la revisión técnica del local."
  },
  {
    "titulo": "Accesibilidad y recorridos",
    "cuerpo": "Una oficina recibe clientes, y por eso la accesibilidad pesa más de lo que parece. Revisamos el acceso desde la calle, los escalones, el ancho de puertas, el recorrido hasta la zona de atención y el aseo. Un despacho en una primera planta sin ascensor, o con escalón de entrada, puede obligar a obra o a replantear la zona de atención al público. En el proyecto o la documentación técnica se justifica el cumplimiento del Código Técnico de la Edificación (Real Decreto 314/2006) en accesibilidad y también en incendios: aforo, evacuación y alumbrado de emergencia. Es mejor saberlo antes de alquilar que descubrirlo con el local ya reformado, cuando cada cambio cuesta más tiempo. En la visita medimos puertas y recorridos y te damos la lista de lo que habría que corregir."
  },
  {
    "titulo": "Instalaciones: electricidad y climatización",
    "cuerpo": "Una oficina vive de la electricidad: ordenadores, servidores, impresoras, iluminación y aire acondicionado. Comprobamos que la instalación eléctrica cumple el REBT (Real Decreto 842/2002) y que la potencia contratada y el cuadro dan para tu uso, porque un local que fue vivienda o almacén suele quedarse corto. En climatización, el RITE (Real Decreto 1027/2007) regula las instalaciones térmicas, y conviene que los equipos nuevos queden documentados. Si hay obra, la dirigimos y firmamos el certificado final de instalaciones. Así, si el Ayuntamiento o la comunidad de propietarios te piden papeles, tienes todo ordenado y firmado por técnico competente. Además, te decimos si la potencia y el cuadro actuales bastan o si conviene ampliarlos antes de la mudanza."
  },
  {
    "titulo": "Cuándo sí necesitas presentar documentación",
    "cuerpo": "Si tu actividad no encaja en la exclusión, por ejemplo una consulta con radiodiagnóstico o con animales, volvemos a la regla general de Almería capital: declaración responsable con las obras e instalaciones terminadas y las licencias urbanísticas que procedan. Aporta el modelo normalizado, el NIF o CIF, el justificante de la tasa, la referencia catastral, el alta en el IAE y los datos del técnico; con obras, la licencia urbanística y el certificado final. También puede haber actividades que, aun fuera de la ordenanza, necesiten sus propias autorizaciones sectoriales. Te decimos desde la visita en qué caso estás, sin dar por hecho nada que dependa del Ayuntamiento."
  },
  {
    "titulo": "Traspaso de oficina y otros municipios",
    "cuerpo": "Si alquilas una oficina que ya funcionaba, pide el historial del local: qué actividad tuvo, si hubo reformas y qué documentación técnica conserva el propietario. Revisamos la instalación eléctrica, la accesibilidad y los recorridos antes de que firmes, y te decimos qué falta. Si la oficina cambia de titular y la actividad estaba amparada por licencia o declaración, el cambio de titularidad lo comunican el antiguo y el nuevo titular; si no, responden ambos. Todo lo anterior se refiere a Almería capital. En el resto de la provincia, cada ayuntamiento tiene su propia ordenanza, y la consultamos antes de decirte qué trámite te corresponde."
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
          <li aria-current="page" className="text-slate-700">{"Licencia de apertura de oficina o despacho en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Oficinas y despachos profesionales"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Licencia de apertura de oficina o despacho en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Si vas a montar una oficina o un despacho profesional en Almería, comprobamos antes de que firmes el alquiler si el local admite el uso, qué debe cumplir y qué autorizaciones siguen siendo necesarias aunque no haya licencia de apertura."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Abrir una oficina es de las aperturas más sencillas, pero no está libre de requisitos. En Almería capital, la ordenanza de apertura de establecimientos excluye de su ámbito los despachos y oficinas de actividades profesionales que no generen residuos, vertidos, radiaciones ni contaminantes atmosféricos distintos de los de una vivienda. Eso no significa que valga cualquier local: el uso tiene que ser compatible con el urbanismo, y hay que cumplir seguridad, accesibilidad e instalaciones. Esta página es para inmobiliarias, gestorías, asesorías, agencias y despachos profesionales que quieren saber qué mirar antes de alquilar y qué papeles conviene tener."}</p>
          <p>{"En Abaco Ingeniería trabajamos con un ingeniero técnico industrial colegiado desde 1983. Visitamos el local antes de que firmes el alquiler y te decimos si el uso es compatible, qué obra necesita y qué documentación técnica conviene tener en regla. Cuando hace falta, redactamos el proyecto, dirigimos la adecuación, firmamos el certificado final y presentamos en la sede electrónica del Ayuntamiento con firma digital FNMT. Te damos un presupuesto cerrado antes de empezar y respondemos en 24 horas. Trabajamos en Almería capital y en toda la provincia, y nos desplazamos al local para verlo con tu actividad delante."}</p>
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
          <li>·{" "}<Link href="/licencia-apertura-negocios-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura por tipo de negocio"}</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Declaración responsable de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de actividad en Almería"}</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico en Almería"}</Link></li>
          <li>·{" "}<Link href="/licencia-apertura-clinica-almeria" className="text-sky-700 underline hover:no-underline">{"Licencia de apertura de clínica en Almería"}</Link></li>
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
