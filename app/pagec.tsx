import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── HEADER ── */}
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
            <a href="#quienes" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Quiénes somos
            </a>
            <a href="#servicios" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Servicios
            </a>
            <a href="#proyectos" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Proyectos
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
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-600/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                  Ingeniería de confianza en España
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-white">Consultoría de </span>
                <span className="text-sky-400">Ingeniería</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Ofrecemos proyectos técnicos, informes periciales, tasaciones y
                fichas reducidas de vehículos, siempre con soluciones prácticas
                y adaptadas a cada cliente.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Conocer más
                </a>
                <a
                  href="#servicios"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  Ver servicios →
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-x-6 border-t border-white/10 pt-10">
                {[
                  ["Rapidez", "Respuesta ágil a cada necesidad"],
                  ["Eficacia", "Soluciones técnicas precisas"],
                  ["Calidad", "Décadas de experiencia avalada"],
                ].map(([title, desc]) => (
                  <div key={title}>
                    <p className="text-base font-bold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-500/10 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/images/logo-abaco.jpeg"
                    alt="Logo Abaco Ingeniería"
                    width={420}
                    height={260}
                    className="h-auto w-full max-w-sm"
                    priority
                  />
                  <span className="absolute right-5 top-5 block h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-sky-400/40" />
                  <span className="absolute bottom-5 left-5 block h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-sky-400/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section id="quienes" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Quiénes somos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Oficina Técnica de Ingeniería Industrial y Civil
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                En abacoingeniería® somos una Oficina Técnica de Ingeniería
                Industrial y Civil dedicada a simplificar y resolver las
                necesidades técnicas de nuestros clientes. Ofrecemos soluciones
                integrales que incluyen proyectos técnicos, informes periciales,
                tasaciones, fichas reducidas de vehículos y mucho más.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Desde nuestros inicios, hemos consolidado un equipo humano
                altamente cualificado. Nuestra misión es clara: brindar un
                servicio de excelencia con total disponibilidad, implicándonos
                al máximo en cada proyecto.
              </p>
              <a
                href="#servicios"
                className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Qué servicios ofrecemos
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-lg font-bold text-slate-900">Manuel Marín Vicente</p>
                <p className="text-sm font-medium text-sky-700">Ingeniero Técnico Industrial</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Al frente de abacoingeniería® desde 1983. Con décadas de
                  experiencia avalan nuestra labor como una de las oficinas
                  técnicas de referencia en España, contando además con un
                  equipo de técnicos especializados en diversas áreas.
                </p>
              </div>
              {[
                "Atención personalizada",
                "Enfoque práctico",
                "Comunicación clara",
                "Cita previa disponible",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-base font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Nuestros servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Servicios técnicos con rapidez, eficacia y calidad
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            En abacoingeniería® ofrecemos un amplio abanico de servicios
            técnicos para resolver tus necesidades con la máxima profesionalidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Ingeniería Industrial y Civil",
              items: [
                ["Diseño y proyectos", "Construcción de naves industriales, talleres, bares, discotecas y grandes áreas comerciales."],
                ["Instalaciones técnicas", "Proyectos de electricidad, calefacción, aire acondicionado, fontanería y gas."],
                ["Dirección y certificación", "Supervisión y certificados de obras e instalaciones."],
                ["Mediciones", "Ejecución y comprobación precisa de mediciones para tus proyectos."],
              ],
            },
            {
              title: "Homologaciones y Vehículos",
              items: [
                ["Fichas técnicas reducidas", "Para matriculación, rehabilitación o catalogación de vehículos como históricos."],
                ["Reformas y homologaciones", "Adaptación y legalización de modificaciones en vehículos."],
                ["Asesoramiento especializado", "Estudios previos para la importación y documentación necesaria."],
              ],
            },
            {
              title: "Consultoría Técnica",
              items: [
                ["Asesoramiento personalizado", "Orientación técnica profesional para tu proyecto o negocio."],
                ["Cumplimiento normativo", "Garantizamos que tus instalaciones cumplen con las normativas industrial, de seguridad y sanitaria."],
                ["Control de contratistas", "Supervisión para evitar desviaciones y asegurar que la ejecución respete el proyecto aprobado."],
              ],
            },
            {
              title: "Otros Servicios",
              items: [
                ["Informes periciales", "Reconstrucción de accidentes de tráfico y análisis técnicos para particulares o juzgados."],
                ["Tasaciones y valoraciones", "De industrias, viviendas y otros bienes."],
                ["Certificación energética", "Evaluación y certificación de la eficiencia energética de inmuebles."],
                ["Gestión de suelo", "Gestión y asesoramiento en suelo industrial y comercial."],
                ["Topografía y reportajes", "Reconocimientos técnicos, fotografía y documentación gráfica de proyectos."],
              ],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              <ul className="mt-4 space-y-3">
                {category.items.map(([label, desc]) => (
                  <li key={label}>
                    <p className="text-sm font-semibold text-sky-700">{label}</p>
                    <p className="text-sm leading-6 text-slate-600">{desc}</p>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-block text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-sky-700"
              >
                Contáctanos →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Proyectos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tu asunto, en manos expertas
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Cada proyecto refleja nuestro compromiso con la precisión, la
              seguridad y la eficiencia en todas las áreas en las que operamos.
              Nuestra misión es ofrecer un servicio de excelencia, con total
              disponibilidad y máxima implicación en cada caso.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Ver proyectos destacados
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Te atendemos con cita previa
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Localización y contacto
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Contacta con nosotros y descubre cómo podemos ayudarte a llevar
                tu proyecto a buen puerto.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 p-5">
                  <p className="text-sm text-slate-400">Teléfono</p>
                  <a href="tel:+34670607830" className="mt-2 block font-semibold hover:text-sky-400">
                    670 607 830
                  </a>
                </div>
                <div className="rounded-2xl border border-slate-700 p-5">
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:info@abacoingenieria.es" className="mt-2 block font-semibold hover:text-sky-400">
                    info@abacoingenieria.es
                  </a>
                </div>
                <div className="rounded-2xl border border-slate-700 p-5">
                  <p className="text-sm text-slate-400">Oficina Principal Almería</p>
                  <p className="mt-2 text-sm font-semibold leading-6">
                    Carretera de Ronda, 293<br />
                    Entresuelo 2 · 04009 Almería<br />
                    <span className="text-xs text-slate-400">(junto a la Residencia Sanitaria Bola Azul)</span>
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 p-5">
                  <p className="text-sm text-slate-400">Despacho en Aguadulce</p>
                  <p className="mt-2 text-sm font-semibold leading-6">
                    Calle Islas Azores, 18<br />
                    04720 Aguadulce · Almería
                  </p>
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

            {/* Formulario */}
            <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8">
              <h3 className="text-xl font-semibold text-white">Formulario de contacto</h3>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-400">Nombre</label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-400">Empresa</label>
                    <input
                      type="text"
                      placeholder="Empresa"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-400">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-400">E-mail</label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-400">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Mensaje"
                    className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">©abacoingeniería® 2026</p>
            <div className="flex gap-6 text-sm">
              <a href="https://abacoingenieria.es/aviso-legal/" className="hover:text-white">Aviso Legal</a>
              <a href="https://abacoingenieria.es/politica-de-privacidad/" className="hover:text-white">Privacidad</a>
              <a href="https://abacoingenieria.es/declaracion-de-accesibilidad/" className="hover:text-white">Accesibilidad</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}