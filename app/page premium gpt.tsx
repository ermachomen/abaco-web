import Image from "next/image";

const serviceCategories = [
  {
    title: "Ingeniería Industrial y Civil",
    subtitle: "Proyectos, instalaciones y legalizaciones",
    items: [
      [
        "Diseño y proyectos",
        "Desarrollo de proyectos para naves industriales, talleres, establecimientos comerciales, espacios de ocio y otras actividades.",
      ],
      [
        "Instalaciones técnicas",
        "Electricidad, climatización, calefacción, fontanería, gas y soluciones complementarias adaptadas a normativa.",
      ],
      [
        "Dirección y certificación",
        "Supervisión técnica, certificados de obra e instalaciones y seguimiento de ejecución.",
      ],
      [
        "Mediciones y comprobaciones",
        "Control preciso de magnitudes, superficies, instalaciones y parámetros técnicos del proyecto.",
      ],
    ],
    extra:
      "Intervenimos en aperturas, ampliaciones, adecuación de espacios, cambios de uso y puesta en conformidad técnica de actividades e inmuebles.",
  },
  {
    title: "Homologaciones y Vehículos",
    subtitle: "Documentación técnica y regularización",
    items: [
      [
        "Fichas técnicas reducidas",
        "Documentación para matriculación, rehabilitación, importación o catalogación de vehículos.",
      ],
      [
        "Reformas y homologaciones",
        "Legalización de modificaciones y adaptación documental conforme a los requisitos exigidos.",
      ],
      [
        "Asesoramiento especializado",
        "Estudio previo de viabilidad, revisión documental y apoyo técnico en trámites con ITV y administración.",
      ],
    ],
    extra:
      "Gestionamos procesos completos para reducir incidencias, ahorrar tiempo y facilitar una legalización segura y ordenada.",
  },
  {
    title: "Consultoría Técnica",
    subtitle: "Decisiones mejor fundamentadas",
    items: [
      [
        "Asesoramiento técnico",
        "Análisis profesional para orientar decisiones con seguridad en proyectos, inversiones e implantación de actividades.",
      ],
      [
        "Cumplimiento normativo",
        "Revisión de exigencias reglamentarias, industriales, sanitarias y de seguridad aplicables a cada caso.",
      ],
      [
        "Control de ejecución",
        "Seguimiento técnico y control de contratistas para asegurar coherencia con el proyecto aprobado.",
      ],
    ],
    extra:
      "Aportamos claridad, criterio y respaldo técnico para minimizar riesgos y mejorar la viabilidad de cada actuación.",
  },
  {
    title: "Informes, Tasaciones y Otros Servicios",
    subtitle: "Valoración, análisis y soporte pericial",
    items: [
      [
        "Informes periciales",
        "Análisis técnicos, reconstrucción de accidentes e informes destinados a procedimientos judiciales o extrajudiciales.",
      ],
      [
        "Tasaciones y valoraciones",
        "Valoración de inmuebles, industrias y otros bienes con enfoque técnico y documental.",
      ],
      [
        "Certificación energética",
        "Evaluación de eficiencia energética y emisión de certificados para inmuebles.",
      ],
      [
        "Gestión de suelo",
        "Asesoramiento técnico sobre suelo industrial, comercial y sus posibilidades de implantación.",
      ],
      [
        "Topografía y documentación gráfica",
        "Reconocimientos técnicos, levantamientos y soporte visual/documental para proyectos e informes.",
      ],
    ],
    extra:
      "Prestamos apoyo técnico en compraventas, litigios, auditorías, trámites administrativos y evaluaciones especializadas.",
  },
];

const premiumStats = [
  ["+40 años", "de experiencia acumulada en consultoría técnica"],
  ["Soluciones integrales", "desde el análisis inicial hasta la legalización"],
  ["Atención directa", "trato cercano, claro y personalizado"],
];

const pillars = [
  {
    title: "Rigor técnico",
    text: "Cada proyecto se aborda con criterio profesional, precisión documental y máxima atención al detalle.",
  },
  {
    title: "Visión práctica",
    text: "No solo proyectamos: resolvemos problemas reales con soluciones viables, claras y ejecutables.",
  },
  {
    title: "Cercanía",
    text: "Explicamos cada paso con transparencia para que el cliente comprenda, decida y avance con seguridad.",
  },
  {
    title: "Agilidad",
    text: "Priorizamos tiempos de respuesta razonables y una tramitación ordenada para evitar bloqueos innecesarios.",
  },
];

const processSteps = [
  ["01", "Estudio del caso", "Analizamos la necesidad, la documentación disponible y el marco técnico-normativo aplicable."],
  ["02", "Definición de solución", "Proponemos el enfoque más adecuado para garantizar seguridad, viabilidad y cumplimiento."],
  ["03", "Desarrollo técnico", "Redactamos el proyecto, informe o documentación necesaria con el nivel de detalle requerido."],
  ["04", "Tramitación y cierre", "Acompañamos el proceso de legalización, certificación o presentación ante el organismo competente."],
];

const projectExamples = [
  "Proyectos para apertura y adecuación de locales comerciales",
  "Legalización de instalaciones industriales y actividades",
  "Homologación y documentación técnica de vehículos",
  "Informes periciales y reconstrucción de accidentes",
  "Tasaciones técnicas y valoraciones de inmuebles e industrias",
  "Certificados e informes para trámites administrativos",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
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
              href="#quienes"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Quiénes somos
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Servicios
            </a>
            <a
              href="#diferenciales"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Diferenciales
            </a>
            <a
              href="#metodo"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Método
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.14),transparent_35%,transparent_65%,rgba(59,130,246,0.10))]"
        />
        <div
          aria-hidden
          className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Oficina técnica de ingeniería
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Soluciones técnicas con
                <span className="block text-sky-400">rigor, experiencia y criterio</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                En abacoingeniería® resolvemos con agilidad y solvencia técnica
                proyectos industriales y civiles, informes periciales,
                tasaciones, legalizaciones y documentación para vehículos.
                Aportamos claridad, seguridad y acompañamiento profesional en
                cada fase del proceso.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  Solicitar estudio
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explorar servicios
                </a>
              </div>

              <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
                {premiumStats.map(([title, desc]) => (
                  <div key={title}>
                    <p className="text-xl font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 rounded-[2rem] bg-sky-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-8">
                    <Image
                      src="/images/logo-abaco.jpeg"
                      alt="Logo Abaco Ingeniería"
                      width={420}
                      height={260}
                      className="h-auto w-full"
                      priority
                    />
                  </div>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Especialidades
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                        Ingeniería industrial y civil, informes periciales,
                        homologaciones, tasaciones y consultoría técnica.
                      </p>
                    </div>
                  </div>

                  <span className="absolute right-5 top-5 block h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-sky-400/30" />
                  <span className="absolute bottom-5 left-5 block h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-sky-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section id="quienes" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Quiénes somos
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Una oficina técnica orientada a resolver con seriedad y precisión
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  En abacoingeniería® somos una Oficina Técnica de Ingeniería
                  Industrial y Civil dedicada a simplificar y resolver las
                  necesidades técnicas de nuestros clientes con un enfoque
                  práctico, claro y profesional.
                </p>
                <p>
                  Desarrollamos proyectos técnicos, informes periciales,
                  tasaciones, fichas técnicas reducidas de vehículos,
                  certificaciones y asesoramiento especializado para
                  particulares, empresas, profesionales y administraciones.
                </p>
                <p>
                  Nuestro trabajo se apoya en tres principios: rigor técnico,
                  cercanía en el trato y capacidad real para convertir problemas
                  complejos en soluciones viables.
                </p>
                <p>
                  Cada encargo se estudia de forma individual para ofrecer una
                  respuesta ajustada a su realidad normativa, económica y
                  operativa.
                </p>
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Hablar con el equipo
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Dirección técnica
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Manuel Marín Vicente
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Ingeniero Técnico Industrial
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Al frente de abacoingeniería® desde 1983, con una trayectoria
                  consolidada en consultoría, redacción de proyectos,
                  legalizaciones, valoraciones e informes técnicos.
                </p>
              </div>

              {[
                "Atención personalizada",
                "Comunicación clara",
                "Disponibilidad con cita previa",
                "Enfoque resolutivo",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-base font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Servicios
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Cobertura técnica completa para cada necesidad
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Acompañamos el proceso completo, desde el análisis inicial hasta
              la legalización o certificación final, con soluciones técnicas
              adaptadas, realistas y documentadas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <article
                key={category.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {category.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-sky-100 bg-sky-50" />
                </div>

                <ul className="space-y-4">
                  {category.items.map(([label, desc]) => (
                    <li key={label} className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-sm font-semibold text-slate-900">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">{category.extra}</p>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 inline-flex text-sm font-semibold text-slate-900 underline underline-offset-4 transition hover:text-sky-700"
                >
                  Solicitar información
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIALES ── */}
      <section id="diferenciales" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Diferenciales
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Una forma de trabajar basada en confianza técnica
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Nuestro valor no está solo en redactar documentación técnica,
              sino en aportar criterio, anticipación y acompañamiento real para
              que cada proyecto avance con seguridad.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="h-10 w-10 rounded-2xl bg-sky-500/15" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTODO ── */}
      <section id="metodo" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Método
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Un proceso ordenado para decisiones mejor tomadas
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cada actuación sigue una metodología clara para garantizar
              solvencia técnica, trazabilidad documental y una ejecución más
              segura.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {number}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Casos y actuaciones
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Experiencia aplicada a situaciones reales
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Intervenimos en proyectos, informes y actuaciones donde la
                precisión técnica y la correcta documentación son determinantes
                para avanzar con seguridad.
              </p>
            </div>

            <div className="grid gap-4">
              {projectExamples.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-5"
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Asesoramiento técnico
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Cuéntanos tu caso y te orientaremos con criterio profesional
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Si necesitas un proyecto, un informe, una legalización o apoyo
                técnico especializado, estudiaremos tu situación para ofrecerte
                una solución clara, viable y bien planteada.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
              <a
                href="#contacto"
                className="rounded-full bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Solicitar contacto
              </a>
              <a
                href="https://wa.me/34670607830?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20un%20proyecto%20t%C3%A9cnico"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section
        id="contacto"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Contacto
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Localización y vías de contacto
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Te atendemos con cita previa y respuesta ágil. Estudiaremos tu
                caso con seriedad y sin compromiso inicial.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <a
                    href="tel:+34670607830"
                    className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-700"
                  >
                    670 607 830
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href="mailto:info@abacoingenieria.es"
                    className="mt-2 block text-lg font-semibold text-slate-900 hover:text-sky-700"
                  >
                    info@abacoingenieria.es
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">
                    Oficina principal Almería
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    Carretera de Ronda, 293
                    <br />
                    Entresuelo 2 · 04009 Almería
                    <br />
                    <span className="text-xs text-slate-500">
                      junto a la Residencia Sanitaria Bola Azul
                    </span>
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Despacho en Aguadulce</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    Calle Islas Azores, 18
                    <br />
                    04720 Aguadulce · Almería
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@abacoingenieria.es"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Escribir por email
                </a>

                <a
                  href="https://wa.me/34670607830?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20un%20proyecto%20t%C3%A9cnico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M19.11 17.41c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.13-.59.13-.13.29-.35.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.15 4.99 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.96-1.37.24-.66.24-1.24.17-1.36-.07-.12-.27-.2-.56-.34Z" />
                    <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.24.58 4.42 1.67 6.34L3 29l6.86-1.8a12.76 12.76 0 0 0 6.15 1.57h.01c7.07 0 12.8-5.73 12.8-12.8S23.08 3.2 16.01 3.2Zm0 23.46h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.07 1.07 1.09-3.97-.25-.41a10.57 10.57 0 1 1 9.03 5.02Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="max-w-md">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Formulario
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  Cuéntanos qué necesitas
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Déjanos tus datos y una breve descripción del asunto. Nos pondremos
                  en contacto contigo para orientarte.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Empresa"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Cuéntanos brevemente tu consulta"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a
        href="https://wa.me/34670607830?text=Hola,%20quiero%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 transition hover:scale-105 hover:bg-emerald-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M19.11 17.41c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.13-.59.13-.13.29-.35.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.15 4.99 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.96-1.37.24-.66.24-1.24.17-1.36-.07-.12-.27-.2-.56-.34Z" />
          <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.24.58 4.42 1.67 6.34L3 29l6.86-1.8a12.76 12.76 0 0 0 6.15 1.57h.01c7.07 0 12.8-5.73 12.8-12.8S23.08 3.2 16.01 3.2Zm0 23.46h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.07 1.07 1.09-3.97-.25-.41a10.57 10.57 0 1 1 9.03 5.02Z" />
        </svg>
      </a>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">©abacoingeniería® 2026</p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a
                href="https://abacoingenieria.es/aviso-legal/"
                className="transition hover:text-slate-900"
              >
                Aviso Legal
              </a>
              <a
                href="https://abacoingenieria.es/politica-de-privacidad/"
                className="transition hover:text-slate-900"
              >
                Privacidad
              </a>
              <a
                href="https://abacoingenieria.es/declaracion-de-accesibilidad/"
                className="transition hover:text-slate-900"
              >
                Accesibilidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}