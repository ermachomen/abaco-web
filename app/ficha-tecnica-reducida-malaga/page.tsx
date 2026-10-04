import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import Logo from "../components/Logo";

const siteUrl = "https://www.ingenierial.es";
const path = "/ficha-tecnica-reducida-malaga";

export const metadata: Metadata = {
  title: "Ficha técnica reducida en Málaga para coches importados",
  description: "Ficha técnica reducida en Málaga para coche o moto importados: ingeniero colegiado, estudio previo gratuito, visita al vehículo si hace falta y resto online.",
  keywords: ["ficha técnica reducida en Málaga","ficha reducida Málaga","ficha reducida coche Málaga","ficha reducida moto Málaga","matricular coche importado Málaga","COC o ficha reducida","ficha técnica reducida Costa del Sol","matricular coche británico en España","certificado de conformidad COC Málaga","ingeniero ficha reducida Málaga"],
  alternates: { canonical: path, languages: { "es-ES": path } },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://www.ingenierial.es/ficha-tecnica-reducida-malaga",
    siteName: "Abaco Ingeniería",
    title: "Ficha técnica reducida en Málaga: coche y moto importados",
    description: "Ficha técnica reducida en Málaga para coche o moto importados: ingeniero colegiado, estudio previo gratuito, visita al vehículo si hace falta y resto online.",
    images: [{ url: "/images/og-abaco.jpg", width: 1200, height: 630, alt: "Ficha técnica reducida en Málaga para coches y motos importados – Abaco Ingeniería" }],
  },
  twitter: { card: "summary_large_image", title: "Ficha técnica reducida en Málaga: coche y moto importados", description: "Ficha técnica reducida en Málaga para coche o moto importados: ingeniero colegiado, estudio previo gratuito, visita al vehículo si hace falta y resto online.", images: ["/images/og-abaco.jpg"] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ficha técnica reducida en Málaga para coches y motos importados",
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
    { "@type": "City", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Provincia de Málaga" },
  ],
  url: "https://www.ingenierial.es/ficha-tecnica-reducida-malaga",
  description: "Ficha técnica reducida en Málaga para coche o moto importados: ingeniero colegiado, estudio previo gratuito, visita al vehículo si hace falta y resto online.",
};

const faqs = [
  {
    "q": "¿Me vale el COC o necesito la ficha reducida para matricular mi coche en Málaga?",
    "a": "Depende de lo que tengas y de si el vehículo cuenta con homologación europea. Si dispones de un COC completo y sus datos coinciden con la placa del fabricante, ya tienes una buena base. Si falta, está incompleto o no coincide con el coche, la ficha reducida permite preparar la documentación técnica para la inspección previa. Y si el vehículo no tiene homologación europea, ninguno de los dos documentos resuelve el caso. Mándanos tus papeles y te lo decimos en el estudio previo."
  },
  {
    "q": "¿Se puede matricular en España un coche de Reino Unido tras el Brexit?",
    "a": "No hay una respuesta única. Si el coche conserva una homologación europea válida y su COC, la vía puede ser la ficha reducida. Si solo tiene homologación británica, puede hacer falta la homologación individual del Real Decreto 750/2010. Además, los vehículos británicos suelen llevar el volante a la derecha, algo que conviene revisar antes de comprar. Sin ver la documentación no afirmamos nada: en el estudio previo, sin compromiso, te decimos qué camino corresponde."
  },
  {
    "q": "¿Sirve la ficha reducida para una moto importada a Málaga?",
    "a": "La lógica es la misma que en un coche: primero se comprueba si la moto tiene homologación europea. Con ella, trabajamos con su COC o con la ficha reducida para la inspección previa a matriculación. Sin ella, habría que plantear la homologación individual del Real Decreto 750/2010. Para empezar necesitamos la documentación de origen y fotos de la placa del fabricante y del número de bastidor; con eso te indicamos la vía que corresponde."
  },
  {
    "q": "¿Tenéis que ver el vehículo en persona o se hace todo online?",
    "a": "El grueso del trámite es online: envías documentación y fotos, y la firma se hace con certificado digital FNMT. Nos desplazamos a ver el vehículo cuando hace falta, por ejemplo si el bastidor o la placa no se leen bien en las fotos o si lleva modificaciones que hay que comprobar. Nuestra oficina está en Almería y nos desplazamos: concretamos la visita contigo según dónde se encuentre el vehículo."
  },
  {
    "q": "¿Qué pasa si mi coche importado lleva enganche, llantas distintas u otros cambios?",
    "a": "Si el vehículo difiere de su tipo homologado, la ficha reducida no basta por sí sola: hay que tratarlo como reforma según el Real Decreto 866/2010 y el Manual de Reformas de Vehículos, que clasifica cada cambio con su código. Un enganche es el 10.1 y las modificaciones en llantas, el 4.10. Según el caso se exige proyecto técnico, certificado del taller o informe de conformidad. Lo concretamos al ver el vehículo y sus papeles."
  },
  {
    "q": "¿Qué errores conviene evitar al traer un coche de otro país?",
    "a": "El más serio es comprar sin comprobar si el vehículo tiene homologación europea: el país de origen no lo garantiza. Otros son dar por bueno un COC de otra variante, no conservar el documento de matriculación de origen, hacer fotos del bastidor o de la placa del fabricante que no se leen y pedir cita de ITV sin la documentación completa. Si aún no has comprado, mándanos los datos del vehículo y lo vemos en el estudio previo antes de que pagues."
  }
];

const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Vehículos", item: "https://www.ingenierial.es/fichas-tecnicas" },
    { "@type": "ListItem", position: 3, name: "Ficha técnica reducida en Málaga para coches y motos importados", item: "https://www.ingenierial.es/ficha-tecnica-reducida-malaga" },
  ],
};

const bloques = [
  {
    "titulo": "Qué es la ficha reducida y para qué sirve",
    "cuerpo": "La ficha técnica reducida reúne las características que hay que comprobar antes de matricular un vehículo que viene de fuera: número de bastidor, marca, tipo y variante, masas, dimensiones, plazas, combustible, potencia y datos de homologación. Se utiliza en la inspección previa a la matriculación de vehículos con homologación europea, y su función es que lo que figura en el papel coincida con lo que hay físicamente en el coche o en la moto. Por eso la preparamos con la documentación y las fotos del propio vehículo, no con una plantilla genérica. Si necesitas una ficha reducida en Málaga para un vehículo concreto, empezamos por comprobar que sus datos de origen son coherentes entre sí."
  },
  {
    "titulo": "COC o ficha reducida: cuál te hace falta",
    "cuerpo": "El COC es el certificado de conformidad que expide el fabricante y declara que el vehículo responde a un tipo homologado en la Unión Europea. La ficha reducida es el documento técnico que resume los datos del vehículo. Ambos están pensados para la inspección previa a matriculación de vehículos con homologación europea. Si conservas un COC completo y legible, ya tienes buena parte del trabajo hecho; si se perdió, nunca llegó con el coche o sus datos no coinciden con la placa del fabricante, hay que reconstruir la documentación técnica y ahí entra la ficha reducida. Cuál encaja con tu vehículo lo decidimos en el estudio previo, mirando tus papeles. Si el coche no tiene homologación europea, ninguno de los dos está pensado para ese caso."
  },
  {
    "titulo": "Importados en la Costa del Sol: UE, Reino Unido y EE. UU.",
    "cuerpo": "Muchos residentes europeos de la Costa del Sol traen su coche de Alemania, los Países Bajos, Escandinavia o Reino Unido, y además hay compraventa de vehículos importados. Lo que decide el camino no es el país de origen, sino que el vehículo tenga una homologación europea válida: con ella, la ficha técnica reducida en Málaga o el COC son la vía habitual. Un coche británico puede no cumplir esa condición tras el Brexit, y uno de Estados Unidos suele carecer de ella; en ambos casos puede hacer falta la homologación individual del Real Decreto 750/2010. Los de volante a la derecha, frecuentes entre los británicos, conviene estudiarlos antes de comprar, no después."
  },
  {
    "titulo": "Documentación que te pedimos y cómo trabajamos",
    "cuerpo": "Para preparar la ficha técnica reducida en Málaga te pedimos el documento de matriculación del vehículo en su país de origen, el COC si existe, la factura o el contrato de compra si los tienes y fotografías claras de la placa del fabricante, del número de bastidor y del vehículo completo. Con eso confirmamos si hay homologación europea y qué vía corresponde. Si algún dato no se lee bien o hay dudas, nos desplazamos a ver el vehículo allí donde esté, de la Costa del Sol a la Axarquía, Antequera o Ronda. El resto lo llevamos online, con firma digital FNMT, y no tienes que acercarte a nuestra oficina de Almería."
  },
  {
    "titulo": "ITV, Tráfico y los errores que más se repiten",
    "cuerpo": "Con la ficha reducida firmada, y el COC si lo tienes, pasas la inspección previa en la estación de ITV; la inspección técnica de vehículos se regula en el Real Decreto 920/2017. Después, el expediente de matriculación sigue en Tráfico con la parte técnica ya resuelta. Plazos no te damos de antemano, porque dependen de cada expediente. Los errores más habituales son comprar sin comprobar la homologación, enviar fotos ilegibles del bastidor, pedir cita en la ITV antes de tener los papeles completos y olvidar que unos neumáticos distintos, unas llantas (códigos 4.9 y 4.10 del Manual de Reformas) o un enganche (código 10.1) pueden contar como reforma respecto al tipo original."
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
            <Link href="/fichas-tecnicas" className="text-sm font-medium text-slate-600 hover:text-slate-900">Vehículos</Link>
            <a href="tel:+34670607830" className="text-sm font-medium text-slate-600 hover:text-brand-navy">670 607 830</a>
            <a href="#contacto" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Contactar</a>
          </nav>
        </div>
      </header>

      <nav aria-label="Migas de pan" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/fichas-tecnicas" className="hover:text-slate-900">Vehículos</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">{"Ficha técnica reducida en Málaga para coches y motos importados"}</li>
        </ol>
      </nav>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">{"Málaga · Vehículos importados"}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{"Ficha técnica reducida en Málaga para coches y motos importados"}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{"Traes un coche o una moto de otro país y necesitas matricularlo. Revisamos tu documentación, nos desplazamos a ver el vehículo cuando hace falta y llevamos el resto online, con firma digital FNMT."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">Solicitar presupuesto</a>
            <a href="tel:+34670607830" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Llamar 670 607 830</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>{"La ficha técnica reducida en Málaga es el documento técnico que se prepara para que un vehículo importado pueda pasar la inspección previa a su matriculación en España. Lo firma un ingeniero técnico industrial colegiado y recoge los datos del vehículo, como bastidor, masas, dimensiones, plazas y motor, junto con su homologación. En la provincia es un trámite muy frecuente: residentes europeos de la Costa del Sol que se instalan con su coche, compradores que traen un coche de segunda mano desde Alemania o los Países Bajos y profesionales de la compraventa que importan para vender. En abacoingeniería® llevamos más de 40 años en la oficina técnica, y desde Almería atendemos Málaga y su provincia con estudio previo gratuito y presupuesto cerrado antes de empezar."}</p>
          <p>{"Antes de comprar o de traer el coche conviene saber en qué grupo está, porque no todos los importados siguen el mismo camino. Si tiene homologación europea vigente, lo normal es trabajar con la ficha reducida o con el certificado de conformidad COC. Si carece de ella, como puede ocurrir con un vehículo de Estados Unidos o con alguno procedente de Reino Unido, hay que plantear la homologación individual del Real Decreto 750/2010. Y si el vehículo lleva cambios respecto a su tipo homologado, se trata además como reforma según el Manual de Reformas de Vehículos. En el estudio previo te decimos cuál es tu caso, con tus documentos delante y sin que tengas que pagar nada por ese primer análisis."}</p>
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
          <li>·{" "}<Link href="/homologacion-vehiculos-malaga" className="text-sky-700 underline hover:no-underline">{"Homologación de vehículos en Málaga"}</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-importado" className="text-sky-700 underline hover:no-underline">{"Homologar un coche importado"}</Link></li>
          <li>·{" "}<Link href="/homologacion-coche-usa" className="text-sky-700 underline hover:no-underline">{"Homologar un coche de Estados Unidos"}</Link></li>
          <li>·{" "}<Link href="/pasar-itv-coche-extranjero" className="text-sky-700 underline hover:no-underline">{"Pasar la ITV con un coche extranjero"}</Link></li>
          <li>·{" "}<Link href="/fichas-tecnicas" className="text-sky-700 underline hover:no-underline">{"Fichas técnicas y homologaciones"}</Link></li>
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
