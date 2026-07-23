import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/licencia-discoteca-pub-almeria";

export const metadata: Metadata = {
  title: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería · Requisitos",
  description: "Licencia para discotecas, pubs y salas de fiesta en Almería: aforo, insonorización, limitador acústico, protección contra incendios y horarios. Proyecto con ingeniero colegiado y presupuesto cerrado.",
  keywords: ["licencia discoteca Almería","licencia pub Almería","licencia sala de fiestas Almería","proyecto discoteca Almería","insonorización discoteca Almería","limitador acústico discoteca Almería","licencia ocio nocturno Almería","aislamiento acústico pub Almería","ingeniero discotecas Almería","declaración responsable efectos ambientales discoteca","protección contra incendios discoteca Almería","licencia ambiental discoteca Andalucía"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/licencia-discoteca-pub-almeria",
    siteName: "Abaco Ingeniería",
    title: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería",
    description: "Licencia para discotecas, pubs y salas de fiesta en Almería: aforo, insonorización, limitador acústico, protección contra incendios y horarios. Proyecto con ingeniero colegiado y presupuesto cerrado.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería", description: "Ingeniero técnico industrial colegiado en Almería.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería",
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
  url: "https://www.ingenierial.es/licencia-discoteca-pub-almeria",
  description: "Licencia para discotecas, pubs y salas de fiesta en Almería: aforo, insonorización, limitador acústico, protección contra incendios y horarios. Proyecto con ingeniero colegiado y presupuesto cerrado.",
};

const faqs = [
  {
    "q": "Qué diferencia hay entre la licencia de un bar y la de una discoteca o pub en Almería",
    "a": "Un bar sin música se tramita como actividad de hostelería estándar. En cuanto el local incorpora música amplificada, DJ, pista de baile o actuaciones en directo, pasa a clasificarse como espectáculo público o actividad recreativa dentro del Catálogo andaluz (Decreto 155/2018), con exigencias muy superiores en insonorización, limitador acústico, evacuación y aforo. Si tienes dudas sobre en qué categoría encaja tu local, consulta también nuestra página de licencia de bar y restaurante en Almería para comparar ambos regímenes."
  },
  {
    "q": "Es obligatorio el limitador-registrador acústico en un pub o discoteca",
    "a": "Sí, siempre que el local disponga de equipos de sonido capaces de superar los niveles de emisión permitidos o cuando haya actuaciones en directo amplificadas, según el Decreto 50/2025 de calidad acústica de Andalucía. El limitador-registrador debe controlar toda la cadena de sonido, quedar precintado por técnico competente y disponer de registro de las mediciones para su inspección."
  },
  {
    "q": "Qué aislamiento acústico necesita un local de ocio nocturno en Almería",
    "a": "El aislamiento se calcula en un estudio acústico previo en función del nivel sonoro previsto, la zona de sensibilidad acústica del emplazamiento y la existencia de viviendas o locales colindantes. Habitualmente se exige vestíbulo acústico con doble puerta en accesos, refuerzo de aislamiento a ruido aéreo en techos y paredes medianeras, y una comprobación posterior mediante ensayo in situ que certifique que el aislamiento ejecutado cumple lo proyectado."
  },
  {
    "q": "Qué exige protección contra incendios en una discoteca",
    "a": "El proyecto debe justificar salidas de emergencia y recorridos de evacuación dimensionados al aforo real, alumbrado de emergencia autónomo, señalización fotoluminiscente, extintores y, según superficie y aforo, bocas de incendio equipadas, además de materiales de decoración y techos con la reacción al fuego exigida por el CTE DB-SI. Es una de las partes que más se revisa en la inspección municipal previa a la apertura."
  },
  {
    "q": "Cuánto tarda la licencia de una discoteca o pub en Almería",
    "a": "Más que la de un bar convencional, porque intervienen más informes sectoriales (medio ambiente, incendios, sanidad) y el proyecto es más complejo. Con Declaración Responsable de Efectos Ambientales el plazo puede ser de pocos meses; si corresponde Licencia Ambiental por aforo o riesgo, el trámite puede prolongarse más, dependiendo de la carga de trabajo del Ayuntamiento y de si el local cumple a la primera con insonorización e incendios."
  },
  {
    "q": "Qué horarios puede tener una discoteca o pub en Almería",
    "a": "El horario máximo de cierre lo fija la Junta de Andalucía cada año según el tipo de establecimiento (discoteca, sala de fiestas, pub, bar con música), dentro del Catálogo del Decreto 155/2018. El Ayuntamiento puede aplicar restricciones adicionales en zonas acústicamente saturadas o próximas a viviendas. Conviene verificar el horario aplicable a tu categoría antes de definir el modelo de negocio."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Licencia de Discoteca, Pub y Ocio Nocturno en Almería", item: "https://www.ingenierial.es/licencia-discoteca-pub-almeria" },
  ],
};

const bloques = [
  {
    "titulo": "Tipos de local: discoteca, sala de fiestas, pub y bar con música",
    "cuerpo": "El Catálogo de Espectáculos Públicos, Actividades Recreativas y Establecimientos Públicos de Andalucía (Decreto 155/2018) distingue varias modalidades dentro del ocio nocturno, y cada una arrastra exigencias distintas de proyecto, aforo y horario. La discoteca y la sala de fiestas son las categorías de mayor exigencia: música amplificada, pista de baile, aforos elevados y horario de cierre ampliado. El pub y el café-bar especial permiten ambientación musical y copas sin pista de baile obligatoria, con aforo menor. El bar con música en directo ocasional se sitúa en un régimen intermedio. Ninguna de estas categorías admite el proyecto simplificado de un bar de hostelería sin música; si tu local va a tener DJ, equipo de sonido amplificado, actuaciones en directo o pista de baile, la actividad se califica como recreativa y el proyecto técnico y la tramitación cambian por completo. Antes de firmar el contrato de alquiler conviene identificar correctamente en qué epígrafe del Catálogo encaja el negocio."
  },
  {
    "titulo": "Aislamiento acústico y limitador-registrador obligatorio",
    "cuerpo": "El Decreto 50/2025, que aprueba el Reglamento para la preservación de la calidad acústica en Andalucía, obliga a instalar un limitador-registrador acústico en todo local con equipo de reproducción o amplificación de sonido capaz de superar los niveles límite, y siempre que haya actuaciones en directo amplificadas. El dispositivo debe intervenir sobre toda la cadena de sonido, sin que ningún elemento amplificado quede fuera de su control, y queda precintado y calibrado periódicamente por técnico competente. Además, el local necesita aislamiento acústico reforzado frente a viviendas y locales colindantes: doble puerta con vestíbulo acústico en accesos, techos y paredes con aislamiento a ruido aéreo dimensionado en el estudio acústico previo, y en muchos casos una comprobación posterior mediante ensayo in situ que certifique que el aislamiento real coincide con el proyectado. Es el punto donde más proyectos de ocio nocturno fallan si no se calcula bien desde el principio."
  },
  {
    "titulo": "Protección contra incendios, evacuación y alumbrado de emergencia",
    "cuerpo": "La normativa de protección contra incendios (CTE DB-SI) es más estricta en un local de pública concurrencia con música que en un bar convencional, porque el riesgo de evacuación es mayor. El proyecto debe justificar salidas de emergencia dimensionadas al aforo real, recorridos de evacuación con anchura suficiente, puertas con apertura antipánico, señalización fotoluminiscente y alumbrado de emergencia autónomo en todo el recorrido. También se exige extintores y, según superficie y aforo, bocas de incendio equipadas, sectorización de zonas técnicas como cabinas o almacenes, y materiales de decoración, techos y suelos con la reacción al fuego exigida para no propagar el incendio. Todo se refleja en el proyecto de actividad y se verifica en la visita municipal previa a la apertura, junto con el resto de instalaciones del local."
  },
  {
    "titulo": "Ventilación, climatización y aforo máximo",
    "cuerpo": "La ventilación y climatización deben dimensionarse para el aforo máximo autorizado, no para el aforo habitual: más personas en un espacio cerrado con música y baile exigen mayor renovación de aire por el Reglamento de Instalaciones Térmicas (RITE) para mantener condiciones de salubridad y confort. Si el local dispone de cocina o barra con elaboración de alimentos, se suma la exigencia de salida de humos independiente. El aforo máximo calculado en el proyecto debe quedar expuesto de forma visible en el local y coincide con el que se usa para dimensionar salidas de emergencia, aseos y, en muchos casos, con el nivel de exigencia del limitador acústico instalado."
  },
  {
    "titulo": "Licencia Ambiental, Declaración Responsable y tramitación",
    "cuerpo": "Desde la entrada en vigor de la Ley 2/2026 de Gestión Ambiental de Andalucía (LEGAM), la antigua calificación ambiental se ha sustituido por dos instrumentos de competencia municipal: la Licencia Ambiental (LA) y la Declaración Responsable de Efectos Ambientales (DR-EA). Cuál corresponde a tu discoteca, sala de fiestas o pub depende del aforo, la potencia sonora instalada y el riesgo ambiental de la actividad; en Almería lo tramita el Ayuntamiento junto con la licencia de apertura. A esto se añaden los horarios de cierre, que fija anualmente la Junta de Andalucía por tipo de establecimiento y que el ayuntamiento puede matizar en zonas acústicamente saturadas. Redactamos el proyecto de actividad completo, identificamos qué instrumento ambiental corresponde a tu caso y gestionamos el expediente hasta la apertura, con visita previa gratuita y presupuesto cerrado."
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
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Licencia de Discoteca, Pub y Ocio Nocturno en Almería</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">Almería · Oficina técnica · 100% online</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Licencia de Discoteca, Pub y Ocio Nocturno en Almería</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Proyecto técnico y tramitación completa para discotecas, salas de fiesta, pubs y locales con música en Almería: insonorización, limitador acústico, protección contra incendios y licencia ambiental, con ingeniero colegiado desde 1983."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34687465486" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 687 465 486</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"Una discoteca, sala de fiestas o pub no se tramita como un bar. Es una actividad calificada de espectáculos públicos y actividades recreativas, sometida a un régimen mucho más exigente en aforo, insonorización, evacuación y horarios. En Abaco Ingeniería, con sede en Almería e ingeniero técnico industrial colegiado desde 1983, redactamos el proyecto de actividad completo y gestionamos la Licencia Ambiental o la Declaración Responsable de Efectos Ambientales ante el Ayuntamiento. Trabajamos en toda la provincia de Almería, con desplazamiento presencial, y de forma cien por cien online con firma digital FNMT para el resto de España. Estudio previo gratuito y presupuesto cerrado."}</p>
          <p>{"La normativa aplicable combina varias capas: la Ley 13/1999 de Espectáculos Públicos y Actividades Recreativas de Andalucía, el Decreto 155/2018 con el Catálogo que clasifica discoteca, sala de fiestas, pub y bar con música, el Decreto 10/2003 sobre admisión de personas y aforo, y el Decreto 50/2025 de calidad acústica, que exige limitador-registrador y aislamiento reforzado. A esto se suma el Código Técnico de la Edificación en materia de incendios y evacuación, y desde 2026 la Ley LEGAM en materia ambiental. Analizamos tu local frente a todas estas exigencias antes de que firmes el contrato de alquiler."}</p>
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
          <li>·{" "}<Link href="/licencia-bar-restaurante-almeria" className="text-sky-700 underline hover:no-underline">Licencia de bar y restaurante sin música en Almería (diferencias)</Link></li>
          <li>·{" "}<Link href="/licencia-actividad-almeria" className="text-sky-700 underline hover:no-underline">Licencia de actividad en Almería</Link></li>
          <li>·{" "}<Link href="/legalizacion-contra-incendios-almeria" className="text-sky-700 underline hover:no-underline">Legalización contra incendios en Almería</Link></li>
          <li>·{" "}<Link href="/licencia-de-actividad" className="text-sky-700 underline hover:no-underline">Licencia de actividad y apertura</Link></li>
          <li>·{" "}<Link href="/perito-incendios-almeria" className="text-sky-700 underline hover:no-underline">Peritaje de incendios en Almería</Link></li>
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
