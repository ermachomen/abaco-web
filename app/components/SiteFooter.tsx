import Link from "next/link";
import Logo from "./Logo";
import { CITIES } from "../_data/cities";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Empresa */}
          <div>
            <Link href="/" aria-label="Abaco Ingeniería - inicio">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Oficina técnica de ingeniería con cobertura nacional.
              Ingeniero colegiado desde 1983. Sede en Almería.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              abacoingeniería® · Marca registrada
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/licencia-de-actividad" className="hover:text-sky-700">Licencias de actividad</Link></li>
              <li><Link href="/peritaciones-judiciales" className="hover:text-sky-700">Peritaciones judiciales</Link></li>
              <li><Link href="/tasaciones" className="hover:text-sky-700">Tasaciones técnicas</Link></li>
              <li><Link href="/fichas-tecnicas" className="hover:text-sky-700">Homologación de vehículos</Link></li>
              <li><Link href="/homologacion-coche-importado" className="hover:text-sky-700">· Coche importado</Link></li>
              <li><Link href="/homologacion-coche-usa" className="hover:text-sky-700">· Coche americano (USA)</Link></li>
              <li><Link href="/pasar-itv-coche-extranjero" className="hover:text-sky-700">· Pasar ITV coche extranjero</Link></li>
              <li><Link href="/homologacion-vehiculo-historico" className="hover:text-sky-700">· Vehículo histórico</Link></li>
              <li><Link href="/homologacion-reforma-vehiculo" className="hover:text-sky-700">· Reformas de vehículos</Link></li>
            </ul>
          </nav>

          {/* Por capitales */}
          <nav aria-label="Servicios por capital de provincia">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Por capitales
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <span className="text-slate-700">{c.nombre}: </span>
                  <Link href={`/licencia-actividad-${c.slug}`} className="text-xs hover:text-sky-700">Licencias</Link>
                  <span className="text-slate-300"> · </span>
                  <Link href={`/peritaciones-${c.slug}`} className="text-xs hover:text-sky-700">Peritos</Link>
                  <span className="text-slate-300"> · </span>
                  <Link href={`/tasaciones-${c.slug}`} className="text-xs hover:text-sky-700">Tasaciones</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+34687465486" className="hover:text-sky-700">
                  687 465 486
                </a>
              </li>
              <li>
                <a href="mailto:info@abacoingenieria.es" className="break-all hover:text-sky-700">
                  info@abacoingenieria.es
                </a>
              </li>
              <li className="text-slate-600">
                Sede principal
                <br />
                Ctra. de Ronda, 293 · Entresuelo 2
                <br />
                04009 Almería
              </li>
              <li className="text-slate-500">
                Lun–Vie 9:00–14:00
                <br />
                Lun–Jue 16:00–19:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} abacoingeniería®. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><Link href="/aviso-legal" className="hover:text-sky-700">Aviso legal</Link></li>
              <li><Link href="/politica-privacidad" className="hover:text-sky-700">Política de privacidad</Link></li>
              <li><Link href="/politica-cookies" className="hover:text-sky-700">Política de cookies</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
