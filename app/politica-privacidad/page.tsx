import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const siteUrl = "https://www.abacoingenieria.es";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos de Abaco Ingeniería. Información sobre el tratamiento de datos conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: `${siteUrl}/politica-privacidad`,
    siteName: "Abaco Ingeniería",
    title: "Política de Privacidad | Abaco Ingeniería",
    description: "Tratamiento de datos conforme al RGPD y la LOPDGDD.",
  },
};

const lastUpdate = "20 de abril de 2026";

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <nav aria-label="Migas de pan" className="mx-auto max-w-4xl px-6 pt-6 text-sm text-slate-500 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-slate-900">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">Política de privacidad</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Política de privacidad</h1>
        <p className="mt-2 text-sm text-slate-500">Última actualización: {lastUpdate}</p>

        <div className="mt-10 space-y-10 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">1. Responsable del tratamiento</h2>
            <ul className="mt-3 space-y-1">
              <li><strong>Responsable:</strong> Manuel Marín Vicente (abacoingeniería®)</li>
              <li><strong>Domicilio:</strong> Carretera de Ronda, 293, Entresuelo 2 · 04009 Almería</li>
              <li><strong>E-mail:</strong> <a href="mailto:info@abacoingenieria.es" className="text-sky-700 underline hover:no-underline">info@abacoingenieria.es</a></li>
              <li><strong>Teléfono:</strong> <a href="tel:+34670607830" className="text-sky-700 underline hover:no-underline">670 607 830</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">2. Datos que recogemos</h2>
            <p className="mt-3">
              Tratamos únicamente los datos que nos facilitas voluntariamente
              a través de los formularios del sitio o por las vías de contacto:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li>Datos de identificación y contacto: nombre, teléfono, e-mail.</li>
              <li>Contenido de tu consulta y documentación técnica que nos envíes.</li>
              <li>Datos técnicos del vehículo, local o proyecto según el servicio solicitado.</li>
              <li>Datos de navegación imprescindibles para el funcionamiento del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">3. Finalidades y base legal</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Atender tu consulta o presupuesto</strong> — base:
                consentimiento y relación precontractual.
              </li>
              <li>
                <strong>Prestar el servicio contratado</strong> — base:
                ejecución del contrato.
              </li>
              <li>
                <strong>Cumplir obligaciones legales</strong> (fiscales,
                profesionales, técnicas) — base: obligación legal.
              </li>
              <li>
                <strong>Envío del material descargable solicitado</strong>
                (guías, checklists) — base: consentimiento.
              </li>
            </ul>
            <p className="mt-3">
              No se realiza elaboración de perfiles ni decisiones
              automatizadas con efectos jurídicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. Plazos de conservación</h2>
            <p className="mt-3">
              Conservamos los datos mientras exista la relación profesional y,
              posteriormente, durante los plazos de prescripción legales
              aplicables (fiscal, mercantil y responsabilidad profesional).
              Los datos de consultas no materializadas se eliminan
              transcurridos 12 meses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">5. Destinatarios</h2>
            <p className="mt-3">
              Los datos no se ceden a terceros salvo obligación legal. Podrán
              acceder proveedores tecnológicos que nos prestan servicio
              (hosting, correo, gestoría), con los contratos de encargo del
              tratamiento pertinentes. No realizamos transferencias
              internacionales de datos fuera del EEE sin garantías adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">6. Derechos del interesado</h2>
            <p className="mt-3">
              Puedes ejercer los derechos de acceso, rectificación, supresión,
              oposición, limitación y portabilidad, así como retirar el
              consentimiento en cualquier momento, escribiendo a{" "}
              <a href="mailto:info@abacoingenieria.es" className="text-sky-700 underline hover:no-underline">
                info@abacoingenieria.es
              </a>{" "}
              con copia de tu DNI o documento equivalente. Tienes derecho a
              reclamar ante la Agencia Española de Protección de Datos
              (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline hover:no-underline">www.aepd.es</a>)
              si consideras vulnerados tus derechos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">7. Seguridad</h2>
            <p className="mt-3">
              Aplicamos medidas técnicas y organizativas apropiadas para
              garantizar la confidencialidad, integridad y disponibilidad de
              los datos conforme al art. 32 del RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">8. Normativa aplicable</h2>
            <p className="mt-3">
              Reglamento (UE) 2016/679 (RGPD), Ley Orgánica 3/2018 de
              Protección de Datos Personales y garantía de los derechos
              digitales (LOPDGDD) y Ley 34/2002 (LSSI-CE).
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-4 text-sm">
          <Link href="/aviso-legal" className="text-sky-700 underline hover:no-underline">
            ← Aviso legal
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
