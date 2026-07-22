import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/registro-industrial-almeria";

export const metadata: Metadata = {
  title: "Registro industrial en Almería (alta de establecimiento)",
  description: "Inscribimos tu establecimiento en el Registro Integrado Industrial de Andalucía (RIIA) con la puesta en servicio ante Industria. Pide presupuesto gratis.",
  keywords: ["registro industrial Almería","alta establecimiento industrial Almería","Registro Integrado Industrial de Andalucía","RIIA Andalucía","inscripción registro industrial Almería","número de registro industrial","registro establecimientos industriales Almería","dar de alta industria Almería","puesta en servicio Industria Almería","registro industrial Andalucía"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/registro-industrial-almeria",
    siteName: "Abaco Ingeniería",
    title: "Registro industrial en Almería (alta de establecimiento industrial)",
    description: "Inscribimos tu establecimiento en el Registro Integrado Industrial de Andalucía (RIIA) con la puesta en servicio ante Industria. Pide presupuesto gratis.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Registro industrial en Almería (alta de establecimiento industrial) – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Registro industrial en Almería (alta de establecimiento industrial)", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Registro industrial en Almería (alta de establecimiento industrial)",
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
  url: "https://www.ingenierial.es/registro-industrial-almeria",
  description: "Inscribimos tu establecimiento en el Registro Integrado Industrial de Andalucía (RIIA) con la puesta en servicio ante Industria. Pide presupuesto gratis.",
};

const faqs = [
  {
    "q": "¿Qué diferencia hay entre el registro industrial y el registro de la propiedad industrial?",
    "a": "Son cosas distintas. El registro industrial (RIIA en Andalucía) es un censo de establecimientos e instalaciones industriales que se lleva ante la Consejería de Industria; sirve para acreditar que tu actividad consta y funciona en regla. El registro de la propiedad industrial lo gestiona la OEPM y protege marcas, nombres comerciales, patentes y diseños. Si quieres registrar tu establecimiento y sus instalaciones, es el primero; si quieres proteger una marca o una patente, es el segundo."
  },
  {
    "q": "¿Cómo doy de alta mi establecimiento en el registro industrial de Almería?",
    "a": "Desde 2016 el alta se realiza de oficio: no se rellena un formulario de inscripción por separado. El número de registro se obtiene al presentar la puesta en servicio de la instalación o la declaración responsable ante la Delegación Territorial de Industria de Almería, con la documentación técnica que exija cada reglamento. Nosotros redactamos esa documentación, firmamos el proyecto o la memoria y tramitamos la comunicación hasta que tu establecimiento queda inscrito."
  },
  {
    "q": "¿Necesito un número de registro industrial para abrir mi actividad?",
    "a": "Para abrir un local o una nave necesitas la licencia de actividad del ayuntamiento y la legalización de las instalaciones ante Industria. El número de registro industrial se genera precisamente al legalizar esas instalaciones, de modo que es una consecuencia del proceso, no un trámite suelto. Acreditar que tu establecimiento está inscrito te ayuda ante inspecciones, compañías suministradoras, aseguradoras o al solicitar subvenciones industriales."
  },
  {
    "q": "¿Qué es el RIIA y en qué se diferencia del antiguo REIA?",
    "a": "El RIIA (Registro Integrado Industrial de Andalucía) es el registro vigente desde el Decreto 83/2016. Sustituyó al REIA, el anterior Registro de Establecimientos Industriales. El cambio principal es que ahora la inscripción se practica de oficio a partir de las autorizaciones y comunicaciones presentadas, y se integra con el Registro Integrado Industrial estatal (RD 559/2010). Los establecimientos que ya constaban en el REIA se traspasaron de forma automática al RIIA."
  },
  {
    "q": "Compré una nave con actividad, ¿tengo que actualizar el registro?",
    "a": "Sí. El cambio de titularidad por compraventa, arrendamiento o herencia debe comunicarse para que el establecimiento conste a tu nombre. Es habitual encontrar naves con instalaciones antiguas o con datos desactualizados en el registro. Revisamos la situación de la instalación, comprobamos qué está legalizado y qué falta, y tramitamos la actualización de titularidad y de datos para que tu industria quede correctamente inscrita antes de operar."
  },
  {
    "q": "¿Trabajáis solo en Almería y cuánto cuesta el trámite?",
    "a": "Somos una oficina técnica de Almería dirigida por un ingeniero colegiado desde 1983. Gracias a la firma digital FNMT tramitamos la inscripción y la puesta en servicio 100% online en toda España, y nos desplazamos a la capital y la provincia (también a Granada, Málaga y Murcia) cuando hay que revisar la instalación in situ. El precio depende del establecimiento y de sus instalaciones; lo cerramos por adelantado tras un estudio previo sin coste."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Registro industrial en Almería (alta de establecimiento industrial)", item: "https://www.ingenierial.es/registro-industrial-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Qué es el RIIA y a qué registro sustituye",
    "cuerpo": "El RIIA es el Registro Integrado Industrial de Andalucía, el censo donde consta cada establecimiento e instalación industrial de la comunidad. Se creó por el Decreto 83/2016, de 19 de abril, que derogó el anterior REIA (Registro de Establecimientos Industriales), y se integra con el registro estatal del RD 559/2010 y la Ley 21/1992 de Industria. Tiene carácter informativo y ámbito nacional: permite a las administraciones conocer la actividad industrial, pero no confiere por sí mismo derechos ni autorizaciones."
  },
  {
    "titulo": "No es el registro de la propiedad industrial (marcas y patentes)",
    "cuerpo": "Conviene no confundirlo con el registro de la propiedad industrial. Este último, gestionado por la Oficina Española de Patentes y Marcas (OEPM), protege marcas, nombres comerciales, patentes y diseños, es decir, derechos de propiedad sobre signos e invenciones. El registro industrial del que hablamos aquí es un censo de establecimientos y actividades productivas ante Industria, sin relación con marcas ni patentes. Si buscas proteger el nombre o la patente de tu producto, ese trámite es distinto y no lo cubre esta página."
  },
  {
    "titulo": "El alta se produce con la puesta en servicio",
    "cuerpo": "Desde el Decreto 83/2016 la inscripción se practica de oficio: ya no presentas un formulario de alta independiente. El número de registro se genera cuando comunicas la puesta en servicio de la instalación o presentas la declaración responsable ante la Delegación Territorial de Industria, conforme al Decreto 59/2005 y la Orden de 5 de marzo de 2013. Por eso el alta va siempre ligada a la legalización: primero se legaliza la instalación eléctrica, térmica o de incendios y, con ese trámite, tu establecimiento queda inscrito."
  },
  {
    "titulo": "Qué establecimientos deben inscribirse",
    "cuerpo": "El Decreto 59/2005 clasifica los establecimientos en dos grupos según el riesgo de la actividad, con documentación distinta para cada uno. Deben constar en el registro talleres, industrias agroalimentarias, almacenes de manipulado hortofrutícola, carpinterías, naves logísticas y, en general, cualquier actividad con instalaciones sujetas a reglamento (baja tensión, RITE, incendios, aparatos a presión, gas o almacenamiento de productos químicos). Analizamos tu caso y determinamos qué grupo y qué reglamentos te aplican antes de tramitar."
  },
  {
    "titulo": "Modificación, ampliación, traslado y baja",
    "cuerpo": "El registro no solo recoge el alta inicial. También hay que comunicar la ampliación de la actividad, el traslado del establecimiento, el cambio de titularidad por compraventa o herencia y el cese o baja de la industria. Mantener los datos actualizados evita problemas en inspecciones, subvenciones o al contratar con la Administración. Nos ocupamos de cualquier variación posterior sobre tu inscripción y de recuperar tu número de registro si tu establecimiento es antiguo y no lo localizas."
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
            <Link href="/legalizacion-instalaciones-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Legalización</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/legalizacion-instalaciones-almeria" className="hover:text-slate-900">Legalización</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Registro industrial en Almería (alta de establecimiento industrial)</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Registro industrial en Almería (alta de establecimiento industrial)</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Inscribimos tu establecimiento en el Registro Integrado Industrial de Andalucía (RIIA, antes REIA) y presentamos la puesta en servicio ante la Delegación de Industria. Oficina técnica en Almería, ingeniero colegiado, presupuesto cerrado y tramitación 100% online."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El registro industrial es la inscripción de tu establecimiento o instalación en el Registro Integrado Industrial de Andalucía (RIIA), el censo administrativo que la Junta de Andalucía mantiene de la actividad industrial de la comunidad. Lo regula el Decreto 83/2016, que sustituyó al antiguo Registro de Establecimientos Industriales (REIA), dentro del marco de la Ley 21/1992 de Industria y del Reglamento estatal del Registro Integrado Industrial (RD 559/2010). Afecta a talleres, almacenes de manipulado, naves del polígono, industrias agroalimentarias, carpinterías metálicas y a cualquier establecimiento que ejerza una actividad industrial en Almería capital y provincia. Su carácter es informativo: no otorga derechos, pero acredita que tu industria consta y opera dentro de la legalidad."}</p>
          <p>{"En Abaco Ingeniería lo tramitamos como oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia ante Industria. Firmamos con certificado digital FNMT, así que gestionamos el 100% online en toda España y nos desplazamos de forma presencial a Almería capital y provincia (y a Granada, Málaga y Murcia) cuando hay que medir o inspeccionar la instalación. Empezamos con un estudio previo gratuito y te damos un presupuesto cerrado, sin variaciones posteriores, hasta obtener tu número de registro."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones y registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">Fichas técnicas de instalaciones</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización de protección contra incendios en Almería</Link></li>
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
