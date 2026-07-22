import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/cambio-titularidad-licencia-actividad-almeria";

export const metadata: Metadata = {
  title: "Cambio de Titularidad de Licencia de Actividad en Almería",
  description: "Tramitamos el cambio de titularidad de tu licencia de actividad en Almería por comunicación previa: traspaso de bar, local u oficina sin cerrar. Ingeniero colegiado, presupuesto cerrado.",
  keywords: ["cambio de titularidad licencia actividad Almería","comunicación previa cambio titularidad Almería","traspaso licencia actividad Almería","traspaso bar Almería titularidad","cambio titular licencia apertura Almería","transmisión licencia actividad Andalucía","subrogación licencia local Almería","cambio nombre licencia actividad Almería"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/cambio-titularidad-licencia-actividad-almeria",
    siteName: "Abaco Ingeniería",
    title: "Cambio de titularidad de licencia de actividad en Almería",
    description: "Tramitamos el cambio de titularidad de tu licencia de actividad en Almería por comunicación previa: traspaso de bar, local u oficina sin cerrar. Ingeniero colegiado, presupuesto cerrado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Cambio de titularidad de licencia de actividad en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Cambio de titularidad de licencia de actividad en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cambio de titularidad de licencia de actividad en Almería",
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
  url: "https://www.ingenierial.es/cambio-titularidad-licencia-actividad-almeria",
  description: "Tramitamos el cambio de titularidad de tu licencia de actividad en Almería por comunicación previa: traspaso de bar, local u oficina sin cerrar. Ingeniero colegiado, presupuesto cerrado.",
};

const faqs = [
  {
    "q": "¿Qué es el cambio de titularidad de una licencia de actividad?",
    "a": "Es el trámite por el que un nuevo titular se subroga en la licencia o declaración responsable de un local ya legalizado cuando cambia el propietario del negocio. En Andalucía se hace por comunicación previa al Ayuntamiento y no requiere una nueva licencia si la actividad sigue siendo la misma y no hay obras."
  },
  {
    "q": "¿Cuándo basta la comunicación previa y cuándo necesito nueva licencia?",
    "a": "Basta la comunicación previa si mantienes la misma actividad, el mismo local y no ejecutas obras. Si cambias de actividad, amplías el local o haces reforma, necesitarás una declaración responsable o una nueva licencia de actividad con proyecto técnico firmado por ingeniero."
  },
  {
    "q": "¿Qué documentación necesito para cambiar la titularidad?",
    "a": "Identificación del antiguo y del nuevo titular (DNI, NIE o CIF y escritura), la licencia o declaración responsable anterior en vigor y el acuerdo que sustenta la transmisión: contrato de traspaso, compraventa o herencia. Si el anterior titular no firma, se aporta el documento que acredite el negocio jurídico y la posesión del local."
  },
  {
    "q": "¿Puedo seguir abierto durante el cambio de titularidad?",
    "a": "Sí. La comunicación previa surte efecto desde su presentación, por lo que el negocio puede seguir funcionando sin interrupción mientras el Ayuntamiento realiza el control posterior, siempre que la documentación presentada sea correcta y completa."
  },
  {
    "q": "¿Qué pasa si traspaso un bar pero la licencia no cubre lo que hay?",
    "a": "Si el local no se ajusta a su licencia (por ejemplo, falta salida de humos o el aforo no coincide) o quieres reformar, el cambio de titularidad no es suficiente. Habría que regularizar la situación con proyecto y, en su caso, una nueva licencia. Por eso conviene revisar la licencia antes de firmar el traspaso."
  },
  {
    "q": "¿Quién responde si no se comunica el cambio de titularidad?",
    "a": "Mientras la transmisión no se comunica al Ayuntamiento, el antiguo y el nuevo titular responden de forma solidaria de las obligaciones derivadas de la actividad, según el artículo 138 de la LISTA. Por eso interesa a ambas partes formalizar el cambio cuanto antes."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Cambio de titularidad de licencia de actividad en Almería", item: "https://www.ingenierial.es/cambio-titularidad-licencia-actividad-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Cuándo basta con la comunicación previa de cambio de titularidad",
    "cuerpo": "La comunicación previa es suficiente cuando el nuevo titular se subroga en una licencia o declaración responsable ya vigente sin alterar nada: misma actividad, mismo local, mismas instalaciones y sin obras. Es el supuesto más habitual en los traspasos. El trámite no exige un proyecto técnico nuevo, únicamente acreditar la transmisión y que la licencia anterior está en vigor. Surte efecto desde que se presenta en el Ayuntamiento, de modo que el negocio puede seguir abierto sin interrupción mientras la Administración realiza el control posterior."
  },
  {
    "titulo": "Cuándo hace falta una nueva licencia o proyecto",
    "cuerpo": "El cambio de titularidad no sirve si se modifica lo que amparaba la licencia original. Si el nuevo titular cambia la actividad (por ejemplo, pasar de tienda a bar con cocina), amplía la superficie, redistribuye el local o ejecuta obras, deja de ser una simple transmisión. En esos casos se necesita una declaración responsable o una licencia de actividad nueva, con proyecto técnico firmado por ingeniero. Conviene revisarlo antes de firmar el contrato de traspaso: asumir una licencia que no se ajusta a lo que vas a hacer puede acabar en un expediente de disciplina."
  },
  {
    "titulo": "Documentación para el cambio de titularidad",
    "cuerpo": "Con carácter general se necesita: identificación del antiguo y del nuevo titular (DNI o NIE de personas físicas, o CIF y escritura en personas jurídicas), copia o referencia de la licencia o declaración responsable anterior en vigor, y el acuerdo entre las partes que sustenta la transmisión, como el contrato de traspaso, la escritura de compraventa o el documento de herencia. Si el antiguo titular no quiere o no puede firmar, basta con aportar el documento que acredite el negocio jurídico y la posesión del local. Revisamos que todo encaje antes de presentar en la sede electrónica."
  },
  {
    "titulo": "El caso típico: traspaso de bar o restaurante",
    "cuerpo": "La hostelería concentra la mayoría de los cambios de titularidad. Al traspasar un bar, cafetería o restaurante en Almería, lo habitual es subrogarse en la licencia existente por comunicación previa. Pero conviene comprobar que esa licencia cubre realmente lo que hay: salida de humos, aforo, aseos adaptados o música. Si el local funcionaba sin ajustarse a su licencia, o el nuevo titular quiere reformar la cocina o poner terraza, ya no basta el cambio de titular. Antes de aceptar un traspaso hacemos una revisión rápida para que no heredes problemas ajenos."
  },
  {
    "titulo": "Cómo tramitamos tu cambio de titularidad",
    "cuerpo": "1. Estudio previo gratuito: revisamos la licencia anterior y confirmamos si basta la comunicación previa o hace falta algo más. 2. Presupuesto cerrado por escrito, sin variaciones posteriores. 3. Recopilación y comprobación de la documentación de ambos titulares. 4. Presentación telemática en el Ayuntamiento de Almería con firma digital FNMT, sin que tengas que desplazarte. 5. Seguimiento hasta la confirmación y respuesta a cualquier requerimiento municipal. Trabajamos en Almería capital y provincia, de forma presencial u online en toda España."
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
            <Link href="C:/Program Files/Git/licencia-de-actividad" className="text-sm font-medium text-slate-600 hover:text-slate-900">Licencias</Link>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Cambio de titularidad de licencia de actividad en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Cambio de titularidad de licencia de actividad en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Comunicación previa de traspaso de local, bar o negocio. Cambiamos el titular de tu licencia sin parar la actividad, con firma digital y gestión ante el Ayuntamiento."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"El cambio de titularidad de una licencia de actividad es el trámite que permite que un nuevo titular continúe explotando un local ya legalizado cuando cambia el propietario del negocio. En Andalucía se resuelve mediante una comunicación previa al Ayuntamiento, regulada en el artículo 138 de la LISTA (Ley 7/2021). No es una nueva autorización: surte efecto desde su presentación, siempre que la actividad siga siendo la misma y no se realicen obras. La transmisión debe comunicarla el nuevo titular, y conviene que la firmen tanto el antiguo como el nuevo, porque hasta que se comunica ambos responden de forma solidaria de la actividad frente a la Administración."}</p>
          <p>{"En un traspaso de local, oficina o bar en Almería basta la comunicación previa si se mantiene la actividad y no hay reforma. Si el nuevo titular cambia de actividad o ejecuta obras, ya no vale el cambio de titularidad: hará falta declaración responsable o una nueva licencia con proyecto técnico. Como ingeniero técnico industrial colegiado desde 1983, competente en actividades industriales y calificadas, valoramos tu caso concreto, evitamos que el Ayuntamiento paralice el traspaso y te damos presupuesto cerrado tras un estudio previo gratuito."}</p>
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
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Traspaso de bar o restaurante en Almería</Link></li>
          <li>·{" "}<Link href="/declaracion-responsable-actividad-almeria" className="text-sky-700 underline hover:no-underline">Declaración responsable de actividad</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/proyecto-de-actividad-almeria" className="text-sky-700 underline hover:no-underline">Proyecto de actividad para nueva licencia</Link></li>
          <li>·{" "}<Link href="/precio-licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Precio de la licencia de actividad en Almería</Link></li>
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
