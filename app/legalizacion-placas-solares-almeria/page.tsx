import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/legalizacion-placas-solares-almeria";

export const metadata: Metadata = {
  title: "Legalización de Placas Solares y Autoconsumo en Almería",
  description: "Legalizamos tu autoconsumo fotovoltaico en Almería: memoria, proyecto y puesta en servicio ante Industria, RD 244/2019. Solo legalización. Pide presupuesto.",
  keywords: ["legalizar placas solares Almería","legalización autoconsumo fotovoltaico Almería","puesta en servicio fotovoltaica Almería","RD 244/2019 autoconsumo","proyecto legalización fotovoltaica Almería","memoria técnica autoconsumo solar","legalizar autoconsumo sin excedentes","compensación de excedentes Almería","legalización fotovoltaica industrial Almería","registro de autoconsumo Andalucía","ingeniero autoconsumo solar Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/legalizacion-placas-solares-almeria",
    siteName: "Abaco Ingeniería",
    title: "Legalización de placas solares y autoconsumo fotovoltaico en Almería",
    description: "Legalizamos tu autoconsumo fotovoltaico en Almería: memoria, proyecto y puesta en servicio ante Industria, RD 244/2019. Solo legalización. Pide presupuesto.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Legalización de placas solares y autoconsumo fotovoltaico en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Legalización de placas solares y autoconsumo fotovoltaico en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legalización de placas solares y autoconsumo fotovoltaico en Almería",
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
  url: "https://www.ingenierial.es/legalizacion-placas-solares-almeria",
  description: "Legalizamos tu autoconsumo fotovoltaico en Almería: memoria, proyecto y puesta en servicio ante Industria, RD 244/2019. Solo legalización. Pide presupuesto.",
};

const faqs = [
  {
    "q": "Tengo placas montadas pero sin papeles, ¿podéis legalizarlas?",
    "a": "Sí, es nuestro caso más habitual. No necesitamos haber instalado nosotros las placas: revisamos la instalación existente, recopilamos el certificado de instalación eléctrica del instalador o lo gestionamos si falta, redactamos la memoria o el proyecto según la potencia y presentamos la puesta en servicio ante Industria. Así dejamos tu autoconsumo inscrito conforme al RD 244/2019, listo para compensar excedentes y para pasar cualquier inspección."
  },
  {
    "q": "¿Necesito memoria o proyecto para legalizar mi fotovoltaica?",
    "a": "Depende de la potencia de la instalación. Hasta 10 kW se resuelve con una memoria técnica de diseño; entre 10 y 100 kW la ley exige un proyecto firmado por técnico competente; por encima de 100 kW hace falta además autorización administrativa. A partir de 25 kW se suma la inspección de un organismo de control autorizado. En el estudio previo te decimos exactamente qué documento necesitas y qué cuesta."
  },
  {
    "q": "¿Puedo descontar de la factura la energía que vierto a la red?",
    "a": "Sí, si te acoges a la compensación de excedentes del RD 244/2019. Para instalaciones de hasta 100 kW puedes optar a la compensación simplificada, que descuenta en tu factura la energía sobrante vertida a la red, sin llegar a cobrarla como productor. Tramitamos el código de autoconsumo (CAU) con la distribuidora y dejamos preparado el contrato de compensación para que tu comercializadora lo aplique."
  },
  {
    "q": "¿Cuánto tarda y cuánto cuesta legalizar el autoconsumo?",
    "a": "El plazo depende de la carga de la Delegación de Industria y de si hay que solicitar punto de conexión, pero una instalación doméstica o de pequeño comercio suele cerrarse en pocas semanas una vez tenemos la documentación del instalador. El coste varía con la potencia y con que sea memoria o proyecto; te damos un presupuesto cerrado tras el estudio previo gratuito, sin añadidos posteriores."
  },
  {
    "q": "¿Hay que legalizar aunque sea autoconsumo sin excedentes?",
    "a": "Sí. El RD 244/2019 obliga a documentar y poner en servicio la instalación aunque uses un sistema antivertido y no inyectes nada a la red. El autoconsumo sin excedentes ahorra algunos trámites frente a la distribuidora, pero sigue necesitando su certificado eléctrico, su memoria o proyecto y su puesta en servicio ante Industria para ser legal."
  },
  {
    "q": "¿Legalizáis autoconsumo industrial o agrícola en la provincia?",
    "a": "Sí. Además de fotovoltaica doméstica, legalizamos autoconsumo de naves industriales, cubiertas de almacenes de manipulado, invernaderos y bombeo solar para riego en toda la provincia de Almería. Somos oficina técnica con sede en Almería y colegiado desde 1983; tramitamos online con firma FNMT y nos desplazamos a la parcela o nave cuando hay que revisar la instalación antes de firmar el proyecto."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Legalización de placas solares y autoconsumo fotovoltaico en Almería", item: "https://www.ingenierial.es/legalizacion-placas-solares-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Modalidades de autoconsumo del RD 244/2019",
    "cuerpo": "El RD 244/2019 distingue autoconsumo sin excedentes, con sistema antivertido, y con excedentes, que a su vez puede acogerse a compensación simplificada o no acogerse. Cualquiera de las modalidades obliga a documentar y poner en servicio la instalación antes de funcionar, aunque no inyectes nada a la red. Analizamos tu caso, definimos la modalidad que te conviene y dejamos preparado el contrato de compensación de excedentes previsto en el artículo 14 cuando procede."
  },
  {
    "titulo": "Umbrales de potencia: memoria, proyecto y OCA",
    "cuerpo": "La documentación depende de la potencia. Hasta 10 kW basta una memoria técnica de diseño; entre 10 y 100 kW se exige proyecto firmado por técnico competente; a partir de 100 kW hace falta autorización administrativa previa. Además, las instalaciones de más de 25 kW pasan inspección inicial de un organismo de control autorizado (OCA) y las de más de 15 kW con excedentes tramitan punto de conexión. Legalizamos autoconsumo hasta 500 kW en baja tensión."
  },
  {
    "titulo": "El trámite en Andalucía: PUES, CAU y registro",
    "cuerpo": "En Andalucía el expediente se cierra por el aplicativo PUES de la Delegación de Industria, Energía y Minas. Reunimos el certificado de instalación eléctrica (boletín) del instalador y el certificado de fin de obra, redactamos la memoria o el proyecto, gestionamos el código de autoconsumo (CAU) con la distribuidora y presentamos la puesta en servicio y, cuando la potencia lo exige, la inscripción en el registro administrativo de autoconsumo. Coordinamos con E-Redes el punto de conexión si hay excedentes."
  },
  {
    "titulo": "Autoconsumo industrial, agrícola y de nave",
    "cuerpo": "Almería es una de las provincias con más horas de sol de España, y eso multiplica el autoconsumo en invernaderos, almacenes de manipulado, naves del polígono, comercios y comunidades de regantes. Legalizamos cubiertas de nave, bombeo solar para riego agrícola, autoconsumo colectivo entre varios consumidores e instalaciones industriales de mediana potencia, justificando la parte eléctrica de baja tensión y su integración con la instalación existente del establecimiento."
  },
  {
    "titulo": "Solo legalización: ni vendemos ni instalamos placas",
    "cuerpo": "No somos una empresa instaladora ni comercializamos módulos: somos ingeniería independiente. Eso nos hace útiles cuando tienes placas sin legalizar montadas por tu cuenta, cuando tu instalador dejó el papeleo a medias, cuando compraste una nave o vivienda con fotovoltaica sin registrar o cuando una subvención o una inspección te exige la instalación en regla. Nos ocupamos solo del proyecto, la tramitación y la puesta en servicio de tu autoconsumo."
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
          <li aria-current="page" className="text-slate-700">Legalización de placas solares y autoconsumo fotovoltaico en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Legalización de placas solares y autoconsumo fotovoltaico en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Ponemos en regla tu instalación solar ya montada: redactamos la memoria o el proyecto, tramitamos la puesta en servicio (PUES) ante Industria y el registro de autoconsumo conforme al RD 244/2019. Somos ingeniería: no vendemos ni instalamos placas."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La legalización de placas solares es el trámite que convierte una instalación fotovoltaica de autoconsumo ya ejecutada en una instalación legal, inscrita ante Industria y apta para conectarse a la red o compensar excedentes. El RD 244/2019 obliga a documentar y poner en servicio toda instalación de autoconsumo, tenga o no vertido a la red, antes de su funcionamiento. En Abaco Ingeniería nos ocupamos solo de esa parte: la ingeniería y la tramitación. Es el servicio que necesita quien montó las placas por su cuenta, cambió de instalador, compró una nave o vivienda con fotovoltaica sin registrar, o tiene un autoconsumo industrial pendiente de cerrar el expediente en Almería."}</p>
          <p>{"Trabajamos como oficina técnica dirigida por un ingeniero técnico industrial colegiado desde 1983, con más de cuarenta años de experiencia. Firmamos con certificado digital FNMT, así que tramitamos el 100% online en toda España y nos desplazamos a tu cubierta, nave o parcela en Almería capital y provincia cuando hace falta revisar la instalación. Primero comprobamos qué documentación falta y si basta memoria o hace falta proyecto, y te damos un presupuesto cerrado tras un estudio previo gratuito, sin sorpresas."}</p>
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
          <li>·{" "}<Link href="/legalizacion-instalaciones-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones en Almería (guía general)</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas en Almería</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">Boletín eléctrico (certificado de instalación) en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-alta-tension-almeria" className="text-sky-700 underline hover:no-underline">Legalización de alta tensión y centros de transformación</Link></li>
          <li>·{" "}<Link href="/registro-industrial-almeria" className="text-sky-700 underline hover:no-underline">Registro industrial en Almería</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Ingeniería industrial y oficina técnica en Almería</Link></li>
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
