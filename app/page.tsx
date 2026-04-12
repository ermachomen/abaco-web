export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              AbacoIngenieria · Almería
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Soluciones de ingeniería y consultoría técnica con enfoque
              práctico, riguroso y cercano
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Ayudamos a empresas, explotaciones, entidades y particulares a
              convertir necesidades técnicas en proyectos viables, claros y bien
              ejecutados.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Solicitar asesoramiento
              </a>
              <a
                href="#servicios"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">Rigor</p>
                <p className="mt-2 text-sm text-slate-600">
                  Soluciones técnicas claras, realistas y bien fundamentadas.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">Cercanía</p>
                <p className="mt-2 text-sm text-slate-600">
                  Trato directo, seguimiento y comunicación sencilla.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">Confianza</p>
                <p className="mt-2 text-sm text-slate-600">
                  Compromiso con la calidad, el detalle y los plazos.
                </p>
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

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ingeniería con visión técnica y trato cercano
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              En AbacoIngenieria trabajamos con una idea sencilla: ofrecer
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
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