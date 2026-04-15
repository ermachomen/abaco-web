"use client";

interface VideoHeroProps {
  /** Reemplaza esta URL con tu propio video (.mp4 recomendado) o uno de Pexels/stock */
  videoSrc?: string;
}

export default function VideoHero({
  videoSrc = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
}: VideoHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden text-white">
      {/* ── VIDEO DE FONDO ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* ── OVERLAY OSCURO ── */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* ── GRADIENTE INFERIOR ── */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* ── CONTENIDO ── */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                Ingeniería de confianza en España
              </span>
            </div>

            {/* Título */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">Consultoría de </span>
              <span className="text-sky-400">Ingeniería</span>
              <span className="text-white"> en Almería</span>
            </h1>

            {/* Descripción */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              En abacoingeniería® resolvemos de forma ágil y eficaz cualquier
              necesidad técnica, desde proyectos industriales hasta informes
              periciales y legalización de vehículos. Más de 40 años de
              experiencia nos avalan.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
              >
                Solicitar información
              </a>
              <a
                href="#servicios"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
              >
                Ver servicios →
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-x-6 border-t border-white/10 pt-10">
              {[
                ["Rapidez", "Respuesta ágil a cada necesidad"],
                ["Eficacia", "Soluciones técnicas precisas"],
                ["Calidad", "Experiencia profesional avalada"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="text-base font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-xs tracking-widest text-slate-400 uppercase">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
