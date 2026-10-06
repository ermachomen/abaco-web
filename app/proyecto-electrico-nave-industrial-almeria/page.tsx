import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/proyecto-electrico-nave-industrial-almeria";

export const metadata: Metadata = {
  title: "Proyecto eléctrico de nave industrial en Almería",
  description: "Proyecto eléctrico de nave industrial en Almería: baja tensión, centro de transformación y fotovoltaica, con legalización en la Junta. Estudio previo gratis.",
  keywords: ["proyecto eléctrico de nave industrial en Almería","proyecto electricidad nave Almería","instalación eléctrica nave industrial Almería","proyecto baja tensión nave","centro de transformación nave Almería","ingeniero proyecto eléctrico Almería","legalizar instalación eléctrica nave","fotovoltaica autoconsumo nave Almería","previsión de cargas nave industrial"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/proyecto-electrico-nave-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Proyecto eléctrico de nave industrial en Almería",
    description: "Proyecto eléctrico de nave industrial en Almería: baja tensión, centro de transformación y fotovoltaica, con legalización en la Junta. Estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Proyecto eléctrico de nave industrial en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Proyecto eléctrico de nave industrial en Almería", description: "Proyecto eléctrico de nave industrial en Almería: baja tensión, centro de transformación y fotovoltaica, con legalización en la Junta. Estudio previo gratis.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Proyecto eléctrico de nave industrial en Almería",
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
    { "@type": "City", name: "Almería" },
    { "@type": "AdministrativeArea", name: "Provincia de Almería" },
  ],
  url: "https://www.ingenierial.es/proyecto-electrico-nave-industrial-almeria",
  description: "Proyecto eléctrico de nave industrial en Almería: baja tensión, centro de transformación y fotovoltaica, con legalización en la Junta. Estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Cuándo necesita proyecto eléctrico una nave industrial?",
    "a": "Depende de la potencia instalada y del uso de la actividad: según esos datos, el REBT exige proyecto firmado por técnico titulado competente o basta una memoria técnica de diseño. Una nave nueva, una ampliación con más maquinaria o un cambio de actividad suelen obligar a revisarlo. No damos la respuesta a ojo, porque un error cuesta tiempo y dinero: lo determinamos en el estudio previo gratuito, con los datos de tu nave, y te decimos qué documento hace falta antes de presupuestar."
  },
  {
    "q": "¿Qué incluye el proyecto eléctrico de una nave?",
    "a": "Incluye memoria descriptiva y de cálculo, previsión de cargas, esquemas unifilares, planos de planta, pliego de condiciones y presupuesto por capítulos. Cubre acometida, cuadro general y secundarios, líneas, protecciones, puesta a tierra y alumbrado interior, exterior y de emergencia. Si la nave lo requiere, añade el centro de transformación o la fotovoltaica de autoconsumo. Es el documento con el que tu instalador ejecuta la obra y con el que se tramita la legalización ante la Junta de Andalucía."
  },
  {
    "q": "¿Cómo se calcula la potencia que necesita mi nave?",
    "a": "Se parte de un inventario de todos los receptores: maquinaria, cámaras frigoríficas, climatización, compresores, alumbrado y recarga de vehículos eléctricos. A cada grupo se le aplican factores de utilización y simultaneidad, porque no todo funciona a la vez, y se obtiene la potencia de cálculo. De ahí sale la potencia a contratar. Es una estimación técnica sobre tus datos, no una cifra de tabla, y conviene dejar margen razonable por si la actividad crece."
  },
  {
    "q": "¿Cuándo hace falta un centro de transformación en la nave?",
    "a": "Cuando la potencia demandada es tal que la compañía distribuidora no puede suministrar en baja tensión y la nave debe tener su propio centro de transformación, con el que recibe en media tensión. Es una instalación de alta tensión sujeta al Real Decreto 337/2014 y con proyecto propio. Lo valoramos en el estudio previo a partir de tu previsión de cargas y lo proyectamos junto a la baja tensión para que todo el expediente sea coherente."
  },
  {
    "q": "¿Podéis legalizar una nave que ya funciona con la instalación antigua?",
    "a": "Sí. Es habitual en naves con instalaciones antiguas, ampliadas por fases o modificadas sin documentación. Visitamos la nave, levantamos el estado real de cuadros, líneas y protecciones, comprobamos qué cumple el REBT y qué hay que corregir, y redactamos el proyecto o la memoria de legalización que corresponda. Si hay que adecuar algo antes de legalizar, te lo detallamos con su presupuesto. Después se tramita el expediente ante la Junta de Andalucía y se actualiza el alta con la distribuidora."
  },
  {
    "q": "¿Trabajáis en toda la provincia y de forma online?",
    "a": "Sí. Nuestra oficina está en Almería capital y nos desplazamos a toda la provincia: polígonos de la capital, Huércal de Almería, Viator, El Ejido, Roquetas, Vícar, Níjar, Huércal-Overa o Albox. Firmamos con certificado digital FNMT, así que la tramitación es online y no pierdes tiempo en gestiones presenciales. El estudio previo es gratuito, el presupuesto cerrado y respondemos en un plazo de 24 horas desde que nos cuentas el caso, por teléfono al 670 607 830 o por formulario."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ingeniería industrial", item: "https://www.ingenierial.es/ingenieria-industrial-almeria" },
    { "@type": "ListItem", position: 3, name: "Proyecto eléctrico de nave industrial en Almería", item: "https://www.ingenierial.es/proyecto-electrico-nave-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Proyecto o memoria técnica: lo que exige tu nave",
    "cuerpo": "No todas las naves necesitan lo mismo. Según la potencia y el uso de la actividad, el REBT exige un proyecto firmado por técnico titulado o basta una memoria técnica de diseño, y no conviene decidirlo a ojo: un error obliga a rehacer documentación y retrasa la licencia. En el estudio previo gratuito revisamos la actividad, la maquinaria prevista y las características del local, y te decimos qué documento corresponde, qué incluirá y cuánto costará, con presupuesto cerrado antes de empezar. Si la nave ya existe, comprobamos también qué consta ya legalizado. Así sabes desde el primer día qué vas a firmar, quién lo tramita y qué falta para abrir."
  },
  {
    "titulo": "Previsión de cargas y potencia a contratar",
    "cuerpo": "Todo proyecto eléctrico arranca con el cálculo de la potencia que la nave va a demandar de verdad. Inventariamos maquinaria, líneas de manipulado, cámaras frigoríficas, climatización, compresores, alumbrado y puntos de recarga de vehículos eléctricos, aplicamos los coeficientes de simultaneidad y obtenemos la potencia de cálculo. Esa cifra fija la potencia a contratar, la sección de las líneas y el tamaño del cuadro. Dimensionar con ajuste evita pagar potencia que no usas, y dejar margen para crecer evita legalizar de nuevo a los dos años. Lo documentamos en el proyecto para que puedas justificarlo ante la compañía distribuidora. También revisamos que el contrato final coincida con lo proyectado."
  },
  {
    "titulo": "Instalación de baja tensión: de la acometida a las protecciones",
    "cuerpo": "Proyectamos la instalación completa: acometida y caja general de protección, cuadro general y cuadros secundarios por zonas, líneas de distribución, protecciones contra sobrecargas, cortocircuitos y contactos, y red de puesta a tierra. Incluimos el alumbrado interior y exterior y el de emergencia, y elegimos canalizaciones y envolventes según el ambiente de la nave: polvo, humedad, frío o lavados frecuentes. Todo queda en memoria, cálculos, planos de planta y esquemas unifilares, con un presupuesto por capítulos que tu instalador puede ejecutar sin interpretaciones. Los materiales se especifican con criterios de calidad y de mantenimiento sencillo. Cada línea queda identificada para facilitar el mantenimiento y las inspecciones posteriores."
  },
  {
    "titulo": "Centro de transformación y línea de media tensión",
    "cuerpo": "Cuando la potencia de la nave lo requiere, el suministro no llega en baja tensión y hace falta un centro de transformación propio, a veces con una línea de media tensión que lo conecte a la red. Es una instalación de alta tensión con su propio proyecto, regulada por el Real Decreto 337/2014. La proyectamos junto a la parte de baja para que ambas encajen en potencia, ubicación y trámites, y coordinamos con la compañía distribuidora el punto de conexión. Así el cliente trata con un solo técnico, no con dos expedientes separados. Si la potencia aún es incierta, te explicamos las alternativas antes de decidir. Aclaramos además qué parte corre por cuenta del promotor y cuál depende de la compañía."
  },
  {
    "titulo": "Fotovoltaica de autoconsumo en la cubierta",
    "cuerpo": "La cubierta de una nave es un buen sitio para generar parte de la energía que consume, sobre todo con cámaras de frío y producción diurna. Integramos la instalación fotovoltaica de autoconsumo en el mismo proyecto eléctrico, conforme al Real Decreto 244/2019: dimensionamos la potencia según tu consumo, resolvemos la conexión al cuadro general y la protección, y comprobamos que la estructura admite la carga. Valoramos si conviene prever baterías o gestión de excedentes. Hacerlo en el proyecto original evita modificaciones posteriores y simplifica la legalización, porque la nave nace con la instalación prevista. Estudiamos también la posible ampliación futura de la planta fotovoltaica."
  },
  {
    "titulo": "Coordinación, dirección de obra y legalización",
    "cuerpo": "La electricidad no va sola: se coordina con el proyecto de la nave, con la licencia de actividad y con el proyecto contra incendios, porque el alumbrado de emergencia y la sectorización deben ajustarse también al Real Decreto 164/2025. Una vez ejecutada la obra, dirigimos la instalación cuando procede, el instalador autorizado emite su certificado, presentamos el expediente de legalización ante la Junta de Andalucía y te acompañamos hasta el alta con la distribuidora. También legalizamos naves existentes con instalaciones antiguas o ampliadas sin papeles. Nos adaptamos al calendario de la obra para no retrasar la apertura. Todo el expediente queda archivado y a tu disposición para futuras inspecciones."
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
            <Link href="/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/ingenieria-industrial-almeria" className="hover:text-slate-900">Ingeniería industrial</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Proyecto eléctrico de nave industrial en Almería"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Almería · Ingeniería eléctrica de naves"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Proyecto eléctrico de nave industrial en Almería"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Redactamos y firmamos el proyecto eléctrico de tu nave en Almería: previsión de cargas, baja tensión, centro de transformación y fotovoltaica de autoconsumo, con dirección de obra y legalización ante la Junta de Andalucía."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El proyecto eléctrico de una nave industrial es el documento técnico que define cuánta potencia necesita la nave, cómo se distribuye y con qué protecciones, y que firma un ingeniero para poder ejecutar la instalación y legalizarla. Se redacta conforme al Reglamento electrotécnico para baja tensión (Real Decreto 842/2002) y sus instrucciones técnicas complementarias. Lo necesitas al construir una nave nueva, al ampliarla, al cambiar de actividad o al meter maquinaria y cámaras frigoríficas que superan lo que la instalación existente admite. Sin él, ni la licencia de actividad ni el alta del suministro con la compañía distribuidora llegan a buen puerto."}</p>
          <p>{"Somos Abaco Ingeniería, oficina técnica en Almería capital dirigida por un ingeniero técnico industrial colegiado desde 1983. Trabajamos en los polígonos de La Juaida, Sector 20 y San Silvestre, y en Huércal de Almería, Viator, El Ejido, Roquetas, Vícar, Níjar, Huércal-Overa y Albox. Redactamos el proyecto, dirigimos la obra cuando procede, emitimos los certificados y tramitamos la legalización con firma FNMT. Estudio previo gratuito, presupuesto cerrado y respuesta en 24 horas. Si tu nave es de nueva construcción, podemos coordinar este proyecto con el de obra y el de actividad para que todos los documentos coincidan en potencias, usos y plazos."}</p>
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
          <li>·{" "}<Link href="/proyecto-nave-industrial-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto de nave industrial en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de baja tensión en Almería"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de alta tensión"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">{"Proyecto contra incendios"}</Link></li>
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">{"Legalización de placas solares"}</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">{"Boletín eléctrico"}</Link></li>
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
