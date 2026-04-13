import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo-abaco.jpeg"
              alt="Abaco Ingeniería"
              width={170}
              height={60}
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servicios"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Servicios
            </a>
            <a
              href="#empresa"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Empresa
            </a>
            <a
              href="#proceso"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Cómo trabajamos
            </a>
            <a
              href="#contacto"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        {/* Dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Radial glow top-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-600/20 blur-3xl"
        />
        {/* Radial glow bottom-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* ── Left column ── */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                  Abaco Ingeniería · Almería
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-white">Soluciones de </span>
                <span className="text-sky-400">ingeniería</span>
                <span className="text-white">
                  {" "}
                  para proyectos que avanzan
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Ayudamos a empresas, explotaciones, entidades y particulares a
                convertir necesidades técnicas en proyectos viables, claros y
                bien ejecutados.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 hover:shadow-sky-400/30"
                >
                  Solicitar asesoramiento
                </a>
                <a
                  href="#servicios"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  Ver servicios →
                </a>
              </div>

              {/* Value pillars */}
              <div className="mt-12 grid grid-cols-3 gap-x-6 border-t border-white/10 pt-10">
                {[
                  ["Rigor", "Soluciones bien fundamentadas"],
                  ["Cercanía", "Trato directo y seguimiento"],
                  ["Confianza", "Calidad, detalle y plazos"],
                ].map(([title, desc]) => (
                  <div key={title}>
                    <p className="text-base font-bold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-500/10 blur-2xl" />
                {/* Glass card */}
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/images/logo-abaco.jpeg"
                    alt="Logo Abaco Ingeniería"
                    width={420}
                    height={260}
                    className="h-auto w-full max-w-sm"
                    priority
                  />
                  {/* Decorative corner accents */}
                  <span className="absolute right-5 top-5 block h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-sky-400/40" />
                  <span className="absolute bottom-5 left-5 block h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-sky-400/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Servicios pensados para resolver, no para complicar
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Adaptamos cada proyecto a la realidad técnica, económica y operativa
            de cada cliente.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Proyectos técnicos",
              text: "Redacción y desarrollo de proyectos con enfoque práctico y cumplimiento normativo.",
            },
            {
              title: "Consultoría e informes",
              text: "Análisis técnico, apoyo en toma de decisiones e informes claros para clientes y administración.",
            },
            {
              title: "Tramitación y gestión",
              text: "Acompañamiento en documentación, expedientes y coordinación con organismos competentes.",
            },
            {
              title: "Asesoramiento personalizado",
              text: "Soluciones adaptadas a cada caso, sector y necesidad real del cliente.",
            },
            {
              title: "Optimización de instalaciones",
              text: "Mejora de procesos, eficiencia y viabilidad técnica de instalaciones y actuaciones.",
            },
            {
              title: "Apoyo integral",
              text: "Desde la idea inicial hasta la ejecución y seguimiento del proyecto.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="empresa" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ingeniería con visión técnica y trato cercano
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              En Abaco Ingeniería trabajamos con una idea sencilla: ofrecer
              soluciones técnicas rigurosas, comprensibles y útiles para cada
              cliente. Apostamos por la claridad, la responsabilidad y el
              acompañamiento durante todo el proceso.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Nuestro objetivo es que cada proyecto avance con seguridad, con
              criterios técnicos sólidos y con una comunicación directa desde el
              primer momento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Atención personalizada",
              "Enfoque práctico y realista",
              "Comunicación clara",
              "Compromiso con el detalle",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un proceso claro de principio a fin
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Escuchamos", "Analizamos tu necesidad y el contexto real del proyecto."],
            ["02", "Estudiamos", "Evaluamos opciones, condicionantes y viabilidad."],
            ["03", "Proponemos", "Planteamos una solución técnica clara y bien definida."],
            ["04", "Acompañamos", "Seguimos el proceso para que avances con seguridad."],
          ].map(([num, title, text]) => (
            <div
              key={num}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-sky-700">{num}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="border-t border-slate-200 bg-slate-900 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor
              solución técnica.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 p-5">
                <p className="text-sm text-slate-400">Teléfono</p>
                <p className="mt-2 font-semibold">+34 XXX XX XX XX</p>
              </div>
              <div className="rounded-2xl border border-slate-700 p-5">
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 font-semibold">info@abacoingenieria.es</p>
              </div>
              <div className="rounded-2xl border border-slate-700 p-5">
                <p className="text-sm text-slate-400">Ubicación</p>
                <p className="mt-2 font-semibold">Almería</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="mailto:info@abacoingenieria.es"
                className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Escribir ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}