export default function AbacoIngenieriaDemo() {
  const services = [
    {
      title: "Proyectos técnicos",
      description:
        "Desarrollo de proyectos industriales y civiles con enfoque práctico, claro y orientado a resultados.",
    },
    {
      title: "Licencias y legalizaciones",
      description:
        "Acompañamiento técnico para licencias, trámites y puesta en marcha con seguridad y agilidad.",
    },
    {
      title: "Homologaciones de vehículos",
      description:
        "Gestión técnica para reformas, fichas reducidas y documentación vinculada a vehículos.",
    },
    {
      title: "Informes y consultoría",
      description:
        "Asesoramiento técnico, informes periciales y apoyo especializado para empresas y particulares.",
    },
  ];

  const strengths = [
    "Experiencia técnica contrastada",
    "Atención cercana y directa",
    "Soluciones claras y realistas",
    "Enfoque en plazos y normativa",
  ];

  const steps = [
    "Cuéntanos tu caso",
    "Analizamos la solución técnica",
    "Preparamos la documentación",
    "Te acompañamos hasta resolverlo",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-2xl font-semibold tracking-tight">abacoingenieria</p>
            <p className="text-sm text-slate-400">Ingeniería técnica en Almería</p>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#servicios" className="text-slate-300 transition hover:text-white">Servicios</a>
            <a href="#porque" className="text-slate-300 transition hover:text-white">Por qué elegirnos</a>
            <a href="#proceso" className="text-slate-300 transition hover:text-white">Proceso</a>
            <a href="#contacto" className="text-slate-300 transition hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                Soluciones técnicas claras y fiables
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Ingeniería para proyectos, licencias y homologaciones.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Ayudamos a empresas, particulares y administraciones a resolver necesidades técnicas con rigor,
                cercanía y rapidez.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Solicitar asesoramiento
                </a>
                <a
                  href="#servicios"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Área principal</p>
                  <p className="mt-2 text-xl font-semibold">Ingeniería industrial y civil</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Especialidad</p>
                  <p className="mt-2 text-xl font-semibold">Homologaciones y vehículos</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 sm:col-span-2">
                  <p className="text-sm text-slate-400">Enfoque</p>
                  <p className="mt-2 text-lg leading-7 text-slate-200">
                    Proyectos bien planteados, documentación sólida y acompañamiento técnico durante todo el proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">Servicios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Qué puede resolver Abacoingenieria
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Una estructura clara para presentar la actividad de la empresa sin saturar de texto al visitante.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.05]"
              >
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="porque" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">Por qué elegirnos</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Una web más clara y más útil para captar clientes.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Este bloque demuestra cómo presentar confianza, cercanía y solidez técnica con una estética moderna y
                profesional.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                  <p className="text-base font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">Proceso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Cómo trabajamos contigo
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-semibold text-sky-300">0{index + 1}</p>
                <p className="mt-4 text-lg font-medium leading-7">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="border-t border-white/10 bg-sky-500/10">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-[2rem] border border-sky-400/20 bg-slate-900/80 p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">Contacto</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    ¿Quieres probar este ejemplo en Vercel?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                    Puedes usar esta demo como base inicial y después ir adaptándola con Claude para convertirla en la
                    nueva web de Abacoingenieria.
                  </p>
                </div>
                <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm text-slate-400">Teléfono</p>
                  <p className="text-xl font-semibold">+34 600 000 000</p>
                  <p className="pt-3 text-sm text-slate-400">Email</p>
                  <p className="text-xl font-semibold">info@abacoingenieria.es</p>
                  <a
                    href="mailto:info@abacoingenieria.es"
                    className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Escribir ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Abacoingenieria · Demo de prueba para Vercel</p>
          <p>Almería · Ingeniería industrial y civil</p>
        </div>
      </footer>
    </div>
  );
}
