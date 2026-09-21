import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/fotovoltaica-riego-agricola-almeria";

export const metadata: Metadata = {
  title: "Fotovoltaica para Riego Agrícola en Almería · Bombeo Solar",
  description: "Proyecto y legalización de fotovoltaica para riego en Almería: bombeo solar aislado y autoconsumo conectado. Ahorro en pozo, balsa y cabezal. Colegiado desde 1983.",
  keywords: ["fotovoltaica riego agrícola Almería","bombeo solar Almería","placas solares pozo riego","autoconsumo fotovoltaico agrícola","legalización fotovoltaica riego","proyecto bombeo solar balsa","RD 244/2019 autoconsumo","instalación aislada bombeo solar","fotovoltaica invernadero Almería","ingeniero fotovoltaica agrícola Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/fotovoltaica-riego-agricola-almeria",
    siteName: "Abaco Ingeniería",
    title: "Fotovoltaica para riego agrícola en Almería",
    description: "Proyecto y legalización de fotovoltaica para riego en Almería: bombeo solar aislado y autoconsumo conectado. Ahorro en pozo, balsa y cabezal. Colegiado desde 1983.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Fotovoltaica para riego agrícola en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Fotovoltaica para riego agrícola en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotovoltaica para riego agrícola en Almería",
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
  url: "https://www.ingenierial.es/fotovoltaica-riego-agricola-almeria",
  description: "Proyecto y legalización de fotovoltaica para riego en Almería: bombeo solar aislado y autoconsumo conectado. Ahorro en pozo, balsa y cabezal. Colegiado desde 1983.",
};

const faqs = [
  {
    "q": "Qué diferencia hay entre bombeo solar aislado y autoconsumo conectado?",
    "a": "En el aislado no existe conexión con la red: los paneles alimentan la bomba y la balsa almacena el agua. En el conectado la instalación convive con el suministro eléctrico y puede verter excedentes. La diferencia es técnica y también administrativa: el Real Decreto 244/2019 de autoconsumo excluye de su ámbito de aplicación las instalaciones aisladas, mientras que las conectadas sí siguen su procedimiento."
  },
  {
    "q": "Necesito legalizar una instalación de bombeo solar aislada?",
    "a": "Sí, aunque no le apliquen las obligaciones de registro de autoconsumo. Sigue siendo una instalación eléctrica y debe documentarse conforme a la reglamentación de baja tensión, con su memoria o proyecto según la potencia, el certificado del instalador autorizado y su inscripción. Sin eso puedes tener problemas con el seguro o al justificar una ayuda."
  },
  {
    "q": "Cuánto puedo ahorrar en el riego?",
    "a": "Depende de tu consumo actual, de si vienes de gasóleo o de red, de la tarifa que tengas contratada y del perfil de riego. No damos porcentajes de escaparate: hacemos el cálculo con tus facturas y tus horas de riego reales y te entregamos una estimación con la base de cálculo a la vista, para que puedas contrastarla."
  },
  {
    "q": "Vendéis e instaláis las placas?",
    "a": "No. Somos oficina técnica de ingeniería: proyectamos, dimensionamos, legalizamos y, si quieres, revisamos las ofertas de instaladores con criterio técnico. Esa independencia es justamente lo que nos permite decirte si una propuesta está sobredimensionada o si el variador que te ofrecen no encaja con tu bomba."
  },
  {
    "q": "Sirve para la cámara o el almacén además de para el riego?",
    "a": "Sí, y suele ser la combinación más rentable: el consumo de frío y manipulado es más estable a lo largo del año que el de riego, lo que mejora el aprovechamiento de la instalación. Lo estudiamos como un conjunto, no como dos instalaciones separadas."
  },
  {
    "q": "Vale para una ayuda o subvención?",
    "a": "La documentación técnica que entregamos es la que habitualmente se exige en las convocatorias de ayudas a la eficiencia y a las renovables en el sector agrario. Las convocatorias y sus requisitos cambian con frecuencia, así que no te prometemos encajar en ninguna concreta: preparamos el expediente técnico correctamente y te indicamos qué documentación tienes disponible."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Fotovoltaica para riego agrícola en Almería", item: "https://www.ingenierial.es/fotovoltaica-riego-agricola-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Bombeo solar aislado: sin conexión a la red",
    "cuerpo": "Es la solución típica de la finca sin acometida o con una conexión débil: los paneles alimentan directamente el variador y la bomba, y el agua se almacena en la balsa, que hace de batería natural. Tiene además una consecuencia administrativa relevante: el Real Decreto 244/2019, que regula el autoconsumo, deja fuera de su ámbito de aplicación las instalaciones aisladas, entendidas como aquellas sin capacidad física de conexión con la red. Eso no exime de cumplir la reglamentación eléctrica y de documentar la instalación correctamente."
  },
  {
    "titulo": "Autoconsumo conectado a red",
    "cuerpo": "Si la explotación ya tiene suministro, la fotovoltaica se plantea como autoconsumo conectado, con o sin excedentes. En la modalidad con excedentes y compensación, la energía que no consumes se compensa en factura. El Real Decreto 244/2019 define las modalidades, los permisos necesarios y cómo se mide y factura la energía; según la potencia y la modalidad elegida, la tramitación puede ser notablemente más ágil. Te explicamos con números qué modalidad te conviene antes de decidir la potencia a instalar."
  },
  {
    "titulo": "Dimensionado según tu riego real, no según catálogo",
    "cuerpo": "El error más común es dimensionar por la potencia de la bomba y no por la demanda real de agua. Partimos de tus horas de riego, el caudal, la altura manométrica del pozo y el volumen de la balsa, y de ahí sale el campo fotovoltaico y el variador. Un dimensionado correcto se nota en dos sitios: en que la bomba arranca antes por la mañana y aguanta hasta más tarde, y en que no has pagado por paneles que no vas a aprovechar."
  },
  {
    "titulo": "Legalización eléctrica y documentación",
    "cuerpo": "Toda instalación necesita su documentación conforme a la reglamentación de baja tensión: memoria o proyecto según potencia, esquema unifilar, protecciones, puesta a tierra y certificado del instalador autorizado, con su inscripción en industria. En instalaciones sobre estructura en cubierta de nave o almacén revisamos además que la estructura admite la sobrecarga. Dejamos el expediente cerrado y te entregamos la documentación que después te pedirá la aseguradora o una convocatoria de ayudas."
  },
  {
    "titulo": "Normativa aplicable",
    "cuerpo": "La norma central es el Real Decreto 244/2019, de 5 de abril, por el que se regulan las condiciones administrativas, técnicas y económicas del autoconsumo de energía eléctrica, publicado en el Boletín Oficial del Estado. Su artículo 2 delimita el ámbito de aplicación y deja fuera las instalaciones aisladas, que por tanto no arrastran las obligaciones de registro de autoconsumo. En paralelo, y con independencia de la modalidad, resulta de aplicación el Reglamento Electrotécnico para Baja Tensión en cuanto a ejecución, protecciones y certificación de la instalación. Si la instalación se monta sobre cubierta, entran también las condiciones estructurales del edificio soporte."
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
            <Link href="C:/Program Files/Git/ingenieria-industrial-almeria" className="text-sm font-medium text-slate-600 hover:text-slate-900">Ingeniería industrial</Link>
            <a href="tel:+34687465486" className="text-sm font-medium text-slate-600 hover:text-brand-navy">687 465 486</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Fotovoltaica para riego agrícola en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Fotovoltaica para riego agrícola en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Bombeo solar y autoconsumo fotovoltaico para explotaciones agrícolas: proyecto, dimensionado y legalización. Sustituye el gasóleo o reduce la factura del pozo, la balsa y el cabezal de riego."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El riego es la partida eléctrica más pesada de una explotación almeriense, y es justo la que mejor encaja con la fotovoltaica: se consume de día, en los meses de más sol. Proyectamos y legalizamos instalaciones para bombeo de pozo, impulsión a balsa y cabezal de riego, tanto en modo aislado, sin conexión a la red, como en autoconsumo conectado. La diferencia entre una y otra no es menor: determina qué trámites te corresponden y qué puedes hacer con la energía sobrante."}</p>
          <p>{"Como ingeniería industrial no vendemos placas: dimensionamos la instalación según tu curva real de riego, calculamos la potencia que necesita el grupo de bombeo y redactamos la documentación para que quede legalizada y no te dé un disgusto en una inspección o con el seguro. Trabajamos con tu instalador o te ayudamos a comparar ofertas con criterio técnico. Sede en Almería, desplazamiento a toda la provincia y firma digital FNMT."}</p>
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
          <li>·{" "}<Link href="/legalizacion-placas-solares-almeria" className="text-sky-700 underline hover:no-underline">Legalización de placas solares en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-instalaciones-electricas-almeria" className="text-sky-700 underline hover:no-underline">Legalización de instalaciones eléctricas</Link></li>
          <li>·{" "}<Link href="/boletin-electrico-almeria" className="text-sky-700 underline hover:no-underline">Boletín eléctrico</Link></li>
          <li>·{" "}<Link href="/ingenieria-industrial-almeria" className="text-sky-700 underline hover:no-underline">Oficina técnica en Almería</Link></li>
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
