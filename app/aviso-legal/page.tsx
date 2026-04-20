import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const siteUrl = "https://www.abacoingenieria.es";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal y condiciones de uso del sitio web de Abaco Ingeniería. Información del titular, responsabilidad y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: `${siteUrl}/aviso-legal`,
    siteName: "Abaco Ingeniería",
    title: "Aviso Legal | Abaco Ingeniería",
    description: "Aviso legal y condiciones de uso.",
  },
};

const lastUpdate = "20 de abril de 2026";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <nav aria-label="Migas de pan" className="mx-auto max-w-4xl px-6 pt-6 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Aviso legal</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Aviso legal</h1>
        <p className="mt-2 text-sm text-slate-500">Última actualización: {lastUpdate}</p>

        <div className="mt-10 space-y-10 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">1. Datos identificativos</h2>
            <p className="mt-3">
              En cumplimiento del deber de información recogido en el artículo 10
              de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
              la Información y Comercio Electrónico (LSSI-CE), se informa:
            </p>
            <ul className="mt-4 space-y-1">
              <li><strong>Titular:</strong> Manuel Marín Vicente (abacoingeniería®)</li>
              <li><strong>Actividad:</strong> Oficina técnica de ingeniería industrial y civil</li>
              <li><strong>Domicilio:</strong> Carretera de Ronda, 293, Entresuelo 2 · 04009 Almería</li>
              <li><strong>Teléfono:</strong> <a href="tel:+34670607830" className="text-sky-700 underline hover:no-underline">670 607 830</a></li>
              <li><strong>E-mail:</strong> <a href="mailto:info@abacoingenieria.es" className="text-sky-700 underline hover:no-underline">info@abacoingenieria.es</a></li>
              <li><strong>Dominio:</strong> www.abacoingenieria.es</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">
              Si necesitas solicitar el NIF o el número de colegiado concreto,
              contacta por las vías indicadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">2. Objeto</h2>
            <p className="mt-3">
              El presente aviso legal regula el uso del sitio web titularidad de
              Abaco Ingeniería. La navegación por el sitio atribuye la condición
              de usuario e implica la aceptación plena y sin reservas de estas
              condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">3. Condiciones de uso</h2>
            <p className="mt-3">
              El usuario se compromete a hacer un uso adecuado del sitio,
              absteniéndose de cualquier actividad ilícita, lesiva de derechos
              o intereses de terceros, o que pueda dañar, inutilizar o
              sobrecargar el sitio. Abaco Ingeniería podrá suspender o retirar
              el acceso a quienes incumplan estas condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. Propiedad intelectual e industrial</h2>
            <p className="mt-3">
              Todos los contenidos del sitio (textos, imágenes, marcas,
              logotipos, código) son propiedad de Abaco Ingeniería o de
              terceros que han autorizado su uso. Queda prohibida su
              reproducción, distribución o transformación total o parcial sin
              autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">5. Exclusión de garantías y responsabilidad</h2>
            <p className="mt-3">
              Abaco Ingeniería no se hace responsable de los daños derivados
              del uso del sitio web, de errores en los contenidos, de la
              interrupción del servicio ni del mal funcionamiento ocasionado
              por causas ajenas. La información técnica publicada tiene
              carácter orientativo; cualquier decisión requiere estudio
              específico por un técnico cualificado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">6. Enlaces a terceros</h2>
            <p className="mt-3">
              El sitio puede contener enlaces a sitios de terceros. Abaco
              Ingeniería no asume responsabilidad por los contenidos,
              políticas o prácticas de esos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">7. Legislación aplicable</h2>
            <p className="mt-3">
              Las presentes condiciones se rigen por la legislación española.
              Para cualquier controversia, las partes se someten a los juzgados
              y tribunales de Almería, salvo que la normativa aplicable
              establezca otra cosa para consumidores y usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">8. Contacto</h2>
            <p className="mt-3">
              Para cualquier consulta relativa al presente aviso legal, puedes
              escribir a{" "}
              <a href="mailto:info@abacoingenieria.es" className="text-sky-700 underline hover:no-underline">
                info@abacoingenieria.es
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-4 text-sm">
          <Link href="/politica-privacidad" className="text-sky-700 underline hover:no-underline">
            Política de privacidad →
          </Link>
          <Link href="/politica-cookies" className="text-sky-700 underline hover:no-underline">
            Política de cookies →
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
