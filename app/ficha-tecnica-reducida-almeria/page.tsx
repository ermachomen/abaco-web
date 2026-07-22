import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/ficha-tecnica-reducida-almeria";

export const metadata: Metadata = {
  title: "Ficha Técnica Reducida en Almería · Ingeniero Colegiado",
  description: "Ficha técnica reducida en Almería para matricular tu coche importado, rehabilitado o catalogado. Ingeniero colegiado, tramitación online con firma FNMT. Desde 45 €, estudio previo gratis.",
  keywords: ["ficha técnica reducida Almería","ficha reducida coche importado","ficha técnica reducida El Ejido","ficha técnica reducida Roquetas de Mar","matricular coche importado Almería","certificado de conformidad COC","ficha reducida ITV Almería","homologación individual Almería","ingeniero ficha reducida Almería","precio ficha técnica reducida","rehabilitación vehículo baja Almería","ficha reducida matriculación"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/ficha-tecnica-reducida-almeria",
    siteName: "Abaco Ingeniería",
    title: "Ficha técnica reducida en Almería",
    description: "Ficha técnica reducida en Almería para matricular tu coche importado, rehabilitado o catalogado. Ingeniero colegiado, tramitación online con firma FNMT. Desde 45 €, estudio previo gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Ficha técnica reducida en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Ficha técnica reducida en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ficha técnica reducida en Almería",
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
  url: "https://www.ingenierial.es/ficha-tecnica-reducida-almeria",
  description: "Ficha técnica reducida en Almería para matricular tu coche importado, rehabilitado o catalogado. Ingeniero colegiado, tramitación online con firma FNMT. Desde 45 €, estudio previo gratis.",
};

const faqs = [
  {
    "q": "¿Me vale el COC o necesito una ficha técnica reducida para matricular en Almería?",
    "a": "Si tu coche viene de la UE y tienes el certificado de conformidad COC del fabricante, en la práctica la mayoría de estaciones de ITV de Almería lo aceptan igual que una ficha reducida. La ficha reducida resulta útil cuando no dispones del COC, este está incompleto o el vehículo no tiene homologación europea. Revisamos tu caso concreto y te decimos cuál necesitas antes de tramitar nada."
  },
  {
    "q": "¿Cuándo no basta la ficha reducida y hace falta homologación individual?",
    "a": "No basta cuando el vehículo carece de contraseña de homologación europea: coches importados de Estados Unidos, Japón o Reino Unido tras el Brexit, y modelos anteriores a la homologación CE. Tampoco basta si el coche lleva reformas respecto a su tipo homologado. En esos supuestos se aplica la homologación individual del RD 750/2010 o un proyecto de reforma según el Manual de Reformas (Orden ICT 1212/2018)."
  },
  {
    "q": "¿Cuánto cuesta una ficha técnica reducida en Almería?",
    "a": "Desde 45 € más IVA para un coche del Espacio Económico Europeo con homologación europea. Lo habitual es un rango de 70 € a 250 € según el tipo de vehículo y su procedencia. Si el caso requiere homologación individual, el importe es superior y parte de unos 600 €. Te damos presupuesto cerrado tras revisar tu documentación, con estudio previo gratuito y sin compromiso."
  },
  {
    "q": "Quiero rehabilitar un coche dado de baja definitiva, ¿me sirve la ficha reducida?",
    "a": "La rehabilitación de un vehículo en baja definitiva permite volver a matricularlo y ponerlo en circulación. Según el estado y el origen del coche, puede necesitar una ficha técnica reducida, una inspección específica en ITV o un informe técnico previo. Analizamos la situación registral del vehículo en la DGT y preparamos la documentación técnica que exija tu caso."
  },
  {
    "q": "¿Tengo que llevar el coche a una ITV concreta de El Ejido o Roquetas?",
    "a": "Puedes acudir a cualquier estación de ITV de la provincia gestionada por VEIASA: Almería capital, Huércal de Almería, El Ejido, Roquetas de Mar, Vera, Huércal-Overa y el resto de centros. La ficha reducida que firmamos es válida en todas ellas. Te recomendamos pedir cita previa en la estación más cercana a tu domicilio."
  },
  {
    "q": "¿Podéis hacerla online o tengo que ir a vuestra oficina de Almería?",
    "a": "La hacemos 100% online en toda España: nos envías la documentación y las fotos, y te devolvemos la ficha firmada digitalmente con FNMT, sin desplazamientos. Si prefieres trato presencial, tenemos sede en Almería y nos movemos por la capital y la provincia, además de Granada, Málaga y Murcia."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Ficha técnica reducida en Almería", item: "https://www.ingenierial.es/ficha-tecnica-reducida-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Cuándo basta la ficha reducida y cuándo necesitas homologación",
    "cuerpo": "La ficha técnica reducida basta cuando el vehículo tiene contraseña de homologación europea válida y no ha sufrido reformas: es el caso de la mayoría de coches comprados en Alemania, Francia, Italia u Holanda. En ese supuesto, la ficha reducida o el certificado de conformidad COC sirven para la inspección previa a matriculación en la ITV. No basta, y hay que acudir a la homologación individual del RD 750/2010, cuando el coche carece de homologación CE: importados de USA, Japón o Reino Unido tras el Brexit, o modelos anteriores a su implantación en Europa. Y si el vehículo lleva cambios respecto a su tipo homologado, entramos en el terreno de las reformas del Manual de Reformas (Orden ICT 1212/2018), con su código de reforma y su proyecto o certificado. Analizamos tu ficha de origen y te confirmamos la vía correcta desde el primer contacto."
  },
  {
    "titulo": "Qué recoge la ficha y para qué trámites la usarás",
    "cuerpo": "El documento reúne los datos técnicos verificados del vehículo: marca, modelo, número de bastidor, dimensiones, masa máxima autorizada, plazas, tipo de combustible, emisiones y la contraseña de homologación. Con ella podrás afrontar la matriculación de un coche importado, la rehabilitación de un vehículo en situación de baja definitiva para volver a circular, la catalogación de un clásico o la simple regularización de la tarjeta de ITV cuando se ha perdido o no coincide con el vehículo. Es un documento técnico con plena validez legal ante la DGT y las estaciones de ITV de toda España."
  },
  {
    "titulo": "Precio orientativo de la ficha reducida en Almería",
    "cuerpo": "Para un coche procedente del Espacio Económico Europeo y con contraseña de homologación europea, la ficha técnica reducida arranca desde 45 € más IVA. El precio se mueve habitualmente entre 70 € y 250 € en función del tipo de vehículo, su procedencia y de si conserva o no el certificado de conformidad. Cuando el caso exige homologación individual el coste es mayor y parte de unos 600 €, porque el trabajo técnico es más amplio. Frente a los agregadores nacionales que solo compiten en precio, aquí tienes a un ingeniero colegiado desde 1983 que revisa tu documentación, te da presupuesto cerrado sin sorpresas y responde personalmente por el trabajo firmado."
  },
  {
    "titulo": "Tramitación online e ITV en la provincia (El Ejido, Roquetas)",
    "cuerpo": "Trabajamos el 100% del trámite online: nos envías la documentación y las fotografías por correo, redactamos la ficha y la firmamos digitalmente con certificado FNMT. Recibes el documento listo para presentarlo en la estación de ITV que te corresponda. En la provincia, VEIASA gestiona las estaciones de Almería capital, Huércal de Almería, El Ejido, Roquetas de Mar, Adra, Níjar, Vera, Albox, Carboneras, Cuevas del Almanzora y Huércal-Overa. Si prefieres el trato presencial, nos desplazamos por Almería capital y provincia, y también atendemos Granada, Málaga y Murcia."
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
            <Link href="C:/Program Files/Git/fichas-tecnicas" className="text-sm font-medium text-slate-600 hover:text-slate-900">Vehículos</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Ficha técnica reducida en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Ficha técnica reducida en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Matriculación de coches importados, rehabilitados y catalogados. Ingeniero técnico industrial colegiado desde 1983, tramitación online con firma FNMT y desplazamiento a toda la provincia."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La ficha técnica reducida es el documento que un ingeniero técnico industrial colegiado firma para reflejar, de forma resumida, las características de tu vehículo: dimensiones, masas, número de plazas, combustible, potencia y la contraseña de homologación. En Almería es el paso técnico habitual para matricular un coche importado, rehabilitar uno dado de baja o regularizar su tarjeta de ITV. En abacoingeniería® la preparamos con más de 40 años de experiencia y firma digital FNMT, válida ante cualquier estación de ITV de la provincia y ante la Jefatura Provincial de Tráfico de Almería. Estudio previo gratuito y presupuesto cerrado antes de empezar, sin sorpresas."}</p>
          <p>{"La clave está en distinguir cuándo basta una ficha reducida y cuándo hace falta ir más allá. Si tu coche procede de la Unión Europea, conserva su homologación CE y no lleva reformas, la ficha reducida (o el propio certificado de conformidad COC) es suficiente para matricularlo. Si viene de Estados Unidos, Japón o Reino Unido, es anterior a la homologación europea o incorpora modificaciones, necesitarás una homologación individual o un proyecto de reforma. Te decimos qué caso es el tuyo antes de cobrarte nada, sin desplazamientos innecesarios."}</p>
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
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Hub de homologaciones y fichas técnicas</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-importado" className="text-sky-700 underline hover:no-underline">Homologar un coche importado de la UE</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-usa" className="text-sky-700 underline hover:no-underline">Coches de USA: homologación individual</Link></li>
          <li>·{" "}<Link href="/pasar-itv-coche-extranjero" className="text-sky-700 underline hover:no-underline">Pasar la ITV con un coche extranjero</Link></li>
          <li>·{" "}<Link href="/homologacion-vehiculos-almeria" className="text-sky-700 underline hover:no-underline">Homologación de vehículos en Almería</Link></li>
          <li>·{" "}<Link href="/homologacion-reforma-vehiculo" className="text-sky-700 underline hover:no-underline">Reformas de vehículo y códigos de reforma</Link></li>
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
