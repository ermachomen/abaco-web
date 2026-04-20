import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies del sitio de Abaco Ingeniería: qué cookies usamos, con qué finalidad y cómo gestionarlas.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: `${siteUrl}/politica-cookies`,
    siteName: "Abaco Ingeniería",
    title: "Política de Cookies | Abaco Ingeniería",
    description: "Qué cookies usamos y cómo gestionarlas.",
  },
};

const lastUpdate = "20 de abril de 2026";

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <nav aria-label="Migas de pan" className="mx-auto max-w-4xl px-6 pt-6 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Política de cookies</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Política de cookies</h1>
        <p className="mt-2 text-sm text-slate-500">Última actualización: {lastUpdate}</p>

        <div className="mt-10 space-y-10 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">1. ¿Qué son las cookies?</h2>
            <p className="mt-3">
              Las cookies son pequeños archivos que un sitio web guarda en tu
              dispositivo para que la navegación funcione correctamente,
              recordar preferencias u obtener estadísticas de uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">2. Cookies utilizadas en este sitio</h2>
            <p className="mt-3">
              Este sitio utiliza únicamente <strong>cookies técnicas propias</strong>
              necesarias para el correcto funcionamiento (renderizado de
              páginas, formulario de contacto y seguridad). No utilizamos
              cookies de publicidad comportamental ni cesión a terceros para
              fines de marketing.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Cookie</th>
                    <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                    <th className="px-4 py-3 text-left font-semibold">Finalidad</th>
                    <th className="px-4 py-3 text-left font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__abaco_session</td>
                    <td className="px-4 py-3">Técnica propia</td>
                    <td className="px-4 py-3">Mantener la sesión y estado de los formularios</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">__abaco_csrf</td>
                    <td className="px-4 py-3">Técnica propia</td>
                    <td className="px-4 py-3">Protección frente a ataques CSRF en formularios</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Si en el futuro se incorporan cookies analíticas o de terceros,
              se solicitará tu consentimiento previo mediante un banner y se
              actualizará esta tabla.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">3. Cómo gestionar y desactivar cookies</h2>
            <p className="mt-3">
              Puedes configurar el uso de cookies desde los ajustes de tu
              navegador. Deshabilitar cookies técnicas puede afectar al
              funcionamiento de partes del sitio (como el envío de
              formularios).
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li><a className="text-sky-700 underline hover:no-underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a className="text-sky-700 underline hover:no-underline" href="https://support.mozilla.org/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a className="text-sky-700 underline hover:no-underline" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a className="text-sky-700 underline hover:no-underline" href="https://support.microsoft.com/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. Actualizaciones</h2>
            <p className="mt-3">
              Podemos actualizar esta política para adaptarla a cambios
              legales o técnicos. La versión vigente es la publicada en esta
              página en la fecha indicada.
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-4 text-sm">
          <Link href="/aviso-legal" className="text-sky-700 underline hover:no-underline">
            ← Aviso legal
          </Link>
          <Link href="/politica-privacidad" className="text-sky-700 underline hover:no-underline">
            Política de privacidad →
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
