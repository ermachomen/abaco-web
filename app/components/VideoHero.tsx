"use client";

import { useEffect, useRef, useState } from "react";

interface VideoHeroProps {
  /** Reemplaza esta URL con tu propio video (.mp4 recomendado) o uno de Pexels/stock */
  videoSrc?: string;
}

const FADE_MS = 1400;

export default function VideoHero({
  videoSrc = "https://videos.pexels.com/video-files/33191935/14145793_2560_1440_30fps.mp4",
}: VideoHeroProps) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const transitioningRef = useRef(false);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const handleTimeUpdate = (e: Event) => {
      const video = e.currentTarget as HTMLVideoElement;
      if (!video.duration || isNaN(video.duration)) return;

      const isActive =
        (video === a && activeVideo === "A") ||
        (video === b && activeVideo === "B");
      if (!isActive || transitioningRef.current) return;

      const fadeSeconds = FADE_MS / 1000;
      if (video.duration - video.currentTime > fadeSeconds) return;

      transitioningRef.current = true;
      const next = activeVideo === "A" ? b : a;
      next.currentTime = 0;
      void next.play().catch(() => undefined);
      setActiveVideo(activeVideo === "A" ? "B" : "A");

      // Tras la transición, rearma el video saliente para el siguiente ciclo.
      window.setTimeout(() => {
        try {
          video.pause();
          video.currentTime = 0;
        } catch {
          // ignore — algunos navegadores pueden rechazar el seek
        }
        transitioningRef.current = false;
      }, FADE_MS);
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [activeVideo]);

  const videoClass = "absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out";
  const videoStyle = { transitionDuration: `${FADE_MS}ms` };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-slate-900 text-white">
      {/* ── FALLBACK (se ve siempre mientras carga o si el video falla) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/1.avif')" }}
      />

      {/* ── VIDEO A ── */}
      <video
        ref={videoARef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/1.avif"
        className={`${videoClass} ${activeVideo === "A" ? "opacity-100" : "opacity-0"}`}
        style={videoStyle}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* ── VIDEO B (crossfade para loop sin corte) ── */}
      <video
        ref={videoBRef}
        muted
        playsInline
        preload="auto"
        className={`${videoClass} ${activeVideo === "B" ? "opacity-100" : "opacity-0"}`}
        style={videoStyle}
        aria-hidden
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
