import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import ContactForm from "./components/ContactForm";
import VideoHero from "./components/VideoHero";
import SiteFooter from "./components/SiteFooter";

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
            <a href="#metodo" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Cómo trabajamos
            </a>
            <a href="#proyectos" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Proyectos
            </a>
            <a href="#contacto" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO CON VIDEO ── */}
      <VideoHero />

      {/* ── BANDA DE CONFIANZA ── */}
      <section aria-label="Datos de Abaco Ingeniería" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 lg:px-8">
          {[
            ["+40", "años de experiencia"],
            ["+1.000", "proyectos tramitados"],
            ["3", "provincias de actuación"],
            ["100%", "ingeniero colegiado"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">{num}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section id="quienes" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          {/* Bloque principal: foto + texto Manuel */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-sky-100/60 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  <Image
                    src="/images/manuel.png"
                    alt="Manuel Marín Vicente, Ingeniero Técnico Industrial"
                    width={560}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:block">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Desde 1983</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Colegiado · Ingeniero Técnico Industrial</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Quiénes somos
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Oficina técnica con más de 40 años de trayectoria
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  Al frente de <strong>abacoingeniería®</strong> está{" "}
                  <strong>Manuel Marín Vicente</strong>, Ingeniero Técnico
                  Industrial colegiado <strong>desde 1983</strong>. Décadas
                  avalando proyectos técnicos, peritaciones y homologaciones
                  para particulares, empresas y administraciones en toda
                  España.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Él mismo estudia cada caso, asume la responsabilidad directa
                  del proyecto y garantiza una solución adaptada. Trato
                  cercano, rigor técnico y actualización constante ante la
                  normativa vigente.
                </p>

                {/* Valores */}
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Rigor técnico", "Cada proyecto se estudia al detalle."],
                    ["Trato cercano", "Acompañamos en cada fase del trámite."],
                    ["Disponibilidad", "Respuesta ágil, presupuesto cerrado."],
                    ["Actualización", "Al día con la normativa vigente."],
                  ].map(([t, d]) => (
                    <li key={t} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-sm font-semibold text-slate-900">{t}</p>
                      <p className="mt-0.5 text-xs text-slate-600">{d}</p>
                    </li>
                  ))}
                </ul>

                {/* Firma */}
                <div className="mt-8 border-l-2 border-sky-500 pl-4">
                  <p className="font-bold text-slate-900">Manuel Marín Vicente</p>
                  <p className="text-sm text-sky-700">Ingeniero Técnico Industrial · Colegiado desde 1983</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#servicios" className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Qué servicios ofrecemos
                  </a>
                  <a href="tel:+34670607830" className="inline-block rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-700">
                    Llamar 670 607 830
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bloque equipo */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mt-16 rounded-3xl bg-sky-50 px-8 py-10 text-center">
              <p className="text-lg text-slate-700">
                Además, contamos con{" "}
                <strong className="text-slate-900">un equipo de técnicos especializados</strong>{" "}
                en diversas áreas, lo que nos permite abordar cualquier reto de
                ingeniería con solvencia y profesionalidad.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <ScrollReveal direction="up">
        <div className="max-w-3xl">
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
          <p className="mt-4 text-lg text-slate-600">
            Cubrimos todo el proceso técnico, desde la idea inicial hasta la
            legalización final, acompañándote en cada fase del proyecto para
            garantizar seguridad, viabilidad y cumplimiento normativo.
          </p>
        </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Tarjeta 1 con imagen */}
          <ScrollReveal direction="up" delay={0}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-52 w-full">
              <Image
                src="/images/1.avif"
                alt="Ingeniería Industrial y Civil"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-semibold text-slate-900">Ingeniería Industrial y Civil</h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Diseño y proyectos", "Construcción de naves industriales, talleres, bares, discotecas y grandes áreas comerciales."],
                  ["Instalaciones técnicas", "Proyectos de electricidad, calefacción, aire acondicionado, fontanería y gas."],
                  ["Dirección y certificación", "Supervisión y certificados de obras e instalaciones."],
                  ["Mediciones", "Ejecución y comprobación precisa de mediciones para tus proyectos."],
                ].map(([label, desc]) => (
                  <li key={label}>
                    <p className="text-sm font-semibold text-sky-700">{label}</p>
                    <p className="text-sm leading-6 text-slate-600">{desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Trabajamos en la apertura de negocios, ampliaciones de instalaciones, cambios de uso y adecuación de espacios a normativa vigente.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/licencia-de-actividad" className="inline-block rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500">
                  Licencia de actividad →
                </a>
                <a href="#contacto" className="inline-block text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-sky-700 self-center">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Tarjeta 2 con imagen */}
          <ScrollReveal direction="up" delay={100}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md relative">
            <div className="relative h-52 w-full">
              <Image
                src="/images/2.avif"
                alt="Homologaciones y Vehículos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-semibold text-slate-900">Homologaciones y Vehículos</h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Fichas técnicas reducidas", "Para matriculación, rehabilitación o catalogación de vehículos como históricos."],
                  ["Reformas y homologaciones", "Adaptación y legalización de modificaciones en vehículos."],
                  ["Asesoramiento especializado", "Estudios previos para la importación y documentación necesaria."],
                ].map(([label, desc]) => (
                  <li key={label}>
                    <p className="text-sm font-semibold text-sky-700">{label}</p>
                    <p className="text-sm leading-6 text-slate-600">{desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Gestionamos procesos completos de matriculación, importación y legalización, evitando errores y reduciendo tiempos en ITV y trámites administrativos.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/fichas-tecnicas" className="inline-block rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500">
                  Solicitar ficha técnica →
                </a>
                <a href="#contacto" className="inline-block text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-sky-700 self-center">
                  Contacto
                </a>
              </div>
            </div>
          </div>

          </ScrollReveal>

          {/* Tarjeta 3 con imagen */}
          <ScrollReveal direction="up" delay={200}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-52 w-full">
              <Image
                src="/images/3.avif"
                alt="Consultoría Técnica"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-semibold text-slate-900">Consultoría Técnica</h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Asesoramiento personalizado", "Orientación técnica profesional para tu proyecto, actividad o inversión."],
                  ["Cumplimiento normativo", "Garantizamos que tus instalaciones cumplen con las normativas industrial, de seguridad y sanitaria."],
                  ["Control de contratistas", "Supervisión para evitar desviaciones y asegurar que la ejecución respete el proyecto aprobado."],
                ].map(([label, desc]) => (
                  <li key={label}>
                    <p className="text-sm font-semibold text-sky-700">{label}</p>
                    <p className="text-sm leading-6 text-slate-600">{desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Te ayudamos a tomar decisiones técnicas con seguridad, minimizando riesgos y asegurando la viabilidad de tu inversión.
              </p>
              <a href="#contacto" className="mt-6 inline-block text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-sky-700">
                Contáctanos →
              </a>
            </div>
          </div>

          </ScrollReveal>

          {/* Tarjeta 4 sin imagen */}
          <ScrollReveal direction="up" delay={300}>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Otros Servicios</h3>
            <ul className="mt-4 space-y-3">
              {[
                ["Informes periciales", "Reconstrucción de accidentes de tráfico y análisis técnicos para particulares, compañías o juzgados."],
                ["Tasaciones y valoraciones", "De industrias, viviendas y otros bienes."],
                ["Certificación energética", "Evaluación y certificación de la eficiencia energética de inmuebles."],
                ["Gestión de suelo", "Gestión y asesoramiento en suelo industrial y comercial."],
                ["Topografía y reportajes", "Reconocimientos técnicos, fotografía y documentación gráfica de proyectos."],
              ].map(([label, desc]) => (
                <li key={label}>
                  <p className="text-sm font-semibold text-sky-700">{label}</p>
                  <p className="text-sm leading-6 text-slate-600">{desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Actuamos como soporte técnico en procesos judiciales, compraventas, auditorías y evaluaciones técnicas especializadas.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/peritaciones-judiciales" className="inline-block rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500">
                Peritaciones judiciales →
              </a>
              <a href="#contacto" className="inline-block text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-sky-700 self-center">
                Contáctanos
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section id="metodo" className="relative overflow-hidden bg-sky-950 text-white">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-600/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Un proceso claro, rápido y eficaz
            </h2>
            <p className="mt-4 text-lg text-sky-100/80">
              Analizamos cada caso con rigor técnico y visión práctica para que
              el cliente tenga claridad desde el primer momento.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["1. Análisis", "Estudiamos tu caso y tus necesidades técnicas.", 0],
              ["2. Propuesta", "Definimos la mejor solución adaptada.", 100],
              ["3. Desarrollo", "Redactamos, coordinamos y gestionamos el proyecto.", 200],
              ["4. Legalización", "Tramitamos y garantizamos cumplimiento normativo.", 300],
            ].map(([title, desc, delay]) => (
              <ScrollReveal key={title as string} direction="up" delay={delay as number}>
                <div className="rounded-2xl border border-sky-500/20 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-sky-100/70">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS / CASOS ── */}
      <section id="proyectos" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Casos y proyectos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Tu asunto, en manos expertas
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Cada proyecto refleja nuestro compromiso con la precisión, la
                seguridad y la eficiencia. Estos son algunos de los ámbitos en
                los que intervenimos de forma habitual.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                sector: "Hostelería",
                title: "Licencias de bar, restaurante y cafetería",
                desc: "Proyecto técnico, salida de humos, aislamiento acústico y tramitación telemática ante el ayuntamiento.",
                metric: "+200 licencias",
                delay: 0,
              },
              {
                sector: "Industria",
                title: "Legalización de naves e instalaciones",
                desc: "Memorias, cálculos eléctricos (REBT), contra incendios y climatización (RITE) para puesta en marcha.",
                metric: "Andalucía y Murcia",
                delay: 100,
              },
              {
                sector: "Comercio",
                title: "Apertura de locales y cambios de titularidad",
                desc: "Declaración responsable, adecuación a normativa y acompañamiento hasta la apertura efectiva.",
                metric: "Entrega 7–15 días",
                delay: 200,
              },
              {
                sector: "Judicial",
                title: "Peritaciones e informes periciales",
                desc: "Reconstrucción de siniestros, patologías constructivas, valoraciones y ratificación en sala.",
                metric: "Juzgados y aseguradoras",
                delay: 0,
              },
              {
                sector: "Automoción",
                title: "Fichas técnicas y homologaciones",
                desc: "Matriculación, rehabilitación, catalogación de históricos y reformas. Ámbito nacional.",
                metric: "Trámite online",
                delay: 100,
              },
              {
                sector: "Valoraciones",
                title: "Tasaciones de inmuebles e industrias",
                desc: "Valoraciones técnicas para compraventa, herencias, procedimientos y operaciones financieras.",
                metric: "Informes firmados",
                delay: 200,
              },
            ].map(({ sector, title, desc, metric, delay }) => (
              <ScrollReveal key={title} direction="up" delay={delay}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">{sector}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {metric}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contacto" className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Solicitar estudio de tu caso
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section aria-label="Testimonios de clientes" className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Clientes satisfechos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Lo que dicen de nuestro trabajo
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "Resolvieron la licencia de mi restaurante en tiempo récord. Explicaciones claras desde el primer día y presupuesto cerrado sin sorpresas.",
                author: "Laura G.",
                role: "Hostelería · Almería",
                delay: 0,
              },
              {
                quote: "Informe pericial impecable y defensa técnica en sala. Profesionalidad absoluta y rigor en cada detalle del análisis.",
                author: "Javier M.",
                role: "Abogado · Murcia",
                delay: 100,
              },
              {
                quote: "Legalizaron la nave y las instalaciones eléctricas en nuestra ampliación. Trato cercano y todo dentro del plazo acordado.",
                author: "María S.",
                role: "Industria · Málaga",
                delay: 200,
              },
            ].map(({ quote, author, role, delay }) => (
              <ScrollReveal key={author} direction="up" delay={delay}>
                <figure className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div aria-hidden className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10 15.27l-5.18 3.04 1.4-5.98L1.46 7.97l6.09-.52L10 1.82l2.45 5.63 6.09.52-4.76 4.36 1.4 5.98z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-7 text-slate-700">
                    “{quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-slate-900">{author}</p>
                    <p className="text-xs text-slate-500">{role}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
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
              <p className="mt-4 text-sm text-slate-400">
                Respuesta rápida. Estudiaremos tu caso sin compromiso.
              </p>

              <a
                href="https://wa.me/34687465486"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.547a.75.75 0 00.921.921l5.702-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.36l-.355-.212-3.686.95.968-3.54-.232-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="tel:+34670607830" className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400/50 hover:bg-sky-500/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Llámanos</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">670 607 830</p>
                </a>
                <a href="mailto:info@abacoingenieria.es" className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400/50 hover:bg-sky-500/10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">E-mail</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300 break-all">info@abacoingenieria.es</p>
                </a>
                <a
                  href="https://maps.google.com/?q=Carretera+de+Ronda+293+Almer%C3%ADa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 transition hover:border-sky-400/50 hover:bg-sky-500/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Dirección postal</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300 whitespace-pre-line">
                    {"Carretera de Ronda, 293\nEntresuelo 2\n04009 Almería"}
                  </p>
                </a>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Horario</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Lun–Vie 9:00–14:00 · Lun–Jue 16:00–19:00
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">Envíanos tu consulta</h3>
              <p className="mt-2 text-sm text-slate-400">Te responderemos lo antes posible.</p>
              <ContactForm />
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a
        href="https://wa.me/34687465486"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-green-500/40 transition hover:bg-green-400 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.547a.75.75 0 00.921.921l5.702-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.36l-.355-.212-3.686.95.968-3.54-.232-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        WhatsApp
      </a>

      {/* ── FOOTER ── */}
      <SiteFooter />
    </main>
  );
}
