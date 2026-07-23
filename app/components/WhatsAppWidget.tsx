"use client";

import { useEffect, useRef, useState } from "react";

const WA_NUMBER = "34687465486"; // WhatsApp: prefijo país + móvil, sin +
const TEL = "+34687465486";
const TEL_DISPLAY = "687 465 486";

const DEFAULT_MSG =
  "Hola, me gustaría información sobre sus servicios de ingeniería.";

const TOPICS: { label: string; msg: string }[] = [
  {
    label: "Licencia de actividad",
    msg: "Hola, necesito información sobre una licencia de actividad.",
  },
  {
    label: "Peritaje / informe",
    msg: "Hola, necesito un perito para un informe pericial.",
  },
  {
    label: "Tasación",
    msg: "Hola, quería información sobre una tasación.",
  },
  {
    label: "Homologar vehículo",
    msg: "Hola, necesito homologar un vehículo o una ficha técnica.",
  },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.547a.75.75 0 00.921.921l5.702-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.36l-.355-.212-3.686.95.968-3.54-.232-.368A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(DEFAULT_MSG);
  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Cerrar con Escape y con clic fuera del panel
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        fabRef.current &&
        !fabRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  // Foco al abrir
  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    msg.trim() || DEFAULT_MSG,
  )}`;

  return (
    <>
      {/* ── Panel de conversación ── */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="wa-widget-title"
          className="fixed bottom-24 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6"
        >
          {/* Cabecera */}
          <div className="flex items-center gap-3 bg-green-500 px-4 py-3 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <WhatsAppGlyph className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p id="wa-widget-title" className="text-sm font-semibold leading-tight">
                Abaco Ingeniería
              </p>
              <p className="text-xs text-white/90">
                Te respondemos lo antes posible
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat de WhatsApp"
              className="rounded-full p-1 text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Cuerpo */}
          <div className="flex flex-col gap-3 px-4 py-4">
            <p className="rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-sm text-slate-700">
              👋 Hola, ¿en qué podemos ayudarte? Escríbenos y te contestamos por
              WhatsApp.
            </p>

            {/* Temas rápidos */}
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => {
                    setMsg(t.msg);
                    textareaRef.current?.focus();
                  }}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-brand-navy hover:text-brand-navy"
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Mensaje */}
            <label htmlFor="wa-widget-msg" className="sr-only">
              Tu mensaje
            </label>
            <textarea
              id="wa-widget-msg"
              ref={textareaRef}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={3}
              placeholder="Escribe tu consulta…"
              className="w-full resize-none rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20"
            />

            {/* Enviar por WhatsApp */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600"
            >
              <WhatsAppGlyph className="h-5 w-5 shrink-0" />
              Abrir WhatsApp
            </a>

            {/* Alternativa: llamar */}
            <a
              href={`tel:${TEL}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-navy/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Llamar al {TEL_DISPLAY}
            </a>
          </div>
        </div>
      )}

      {/* ── Botón flotante (FAB) ── */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
        className="fixed bottom-6 right-4 z-[60] flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-green-500/40 transition hover:scale-105 hover:bg-green-600 sm:right-6"
      >
        {open ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
            Cerrar
          </>
        ) : (
          <>
            <WhatsAppGlyph className="h-5 w-5 shrink-0" />
            WhatsApp
          </>
        )}
      </button>
    </>
  );
}
