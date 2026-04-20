import Link from "next/link";
import Logo from "./Logo";

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
              Oficina técnica de ingeniería industrial y civil en Almería.
              Ingeniero colegiado desde 1983.
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
              <li><Link href="/licencia-de-actividad" className="hover:text-sky-700">Licencia de actividad</Link></li>
              <li><Link href="/licencia-bar-restaurante-almeria" className="hover:text-sky-700">Licencia bar y restaurante</Link></li>
              <li><Link href="/fichas-tecnicas" className="hover:text-sky-700">Fichas técnicas reducidas</Link></li>
              <li><Link href="/peritaciones-judiciales" className="hover:text-sky-700">Peritaciones judiciales</Link></li>
              <li><Link href="/guia-licencia-actividad" className="hover:text-sky-700">Guía gratuita de licencia</Link></li>
            </ul>
          </nav>

          {/* Zonas */}
          <nav aria-label="Zonas de actuación">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Zonas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/precio-licencia-actividad-almeria" className="hover:text-sky-700">Precio licencia Almería</Link></li>
              <li><Link href="/licencia-actividad-roquetas-de-mar" className="hover:text-sky-700">Roquetas de Mar</Link></li>
              <li><Link href="/licencia-actividad-el-ejido" className="hover:text-sky-700">El Ejido</Link></li>
              <li><Link href="/licencia-actividad-vicar" className="hover:text-sky-700">Vícar</Link></li>
              <li className="text-slate-500">Almería · Málaga · Murcia</li>
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+34670607830" className="hover:text-sky-700">
                  670 607 830
                </a>
              </li>
              <li>
                <a href="mailto:info@abacoingenieria.es" className="break-all hover:text-sky-700">
                  info@abacoingenieria.es
                </a>
              </li>
              <li className="text-slate-600">
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
