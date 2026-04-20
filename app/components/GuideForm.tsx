"use client";

import Link from "next/link";
import { useState } from "react";
import { sendGuideEmail } from "../actions/sendGuideEmail";

export default function GuideForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const result = await sendGuideEmail(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Error desconocido.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="guia-nombre">
          Nombre <span className="text-sky-600">*</span>
        </label>
        <input
          id="guia-nombre"
          type="text"
          name="nombre"
          required
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="guia-email">
          E-mail <span className="text-sky-600">*</span>
        </label>
        <input
          id="guia-email"
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />
        <span>
          He leído y acepto la{" "}
          <Link href="/politica-privacidad" className="text-sky-700 underline hover:no-underline">
            política de privacidad
          </Link>{" "}
          y el tratamiento de mis datos para recibir la guía solicitada.
        </span>
      </label>

      {status === "success" && (
        <div className="rounded-xl border border-green-500/30 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ ¡Listo! Revisa tu bandeja: te hemos enviado la guía por e-mail.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700">
          ✗ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Descargar guía gratis"}
      </button>

      <p className="text-[11px] leading-4 text-slate-500">
        Sin spam. Solo te escribimos para enviarte la guía y, si nos lo
        pides, para resolver tu consulta.
      </p>
    </form>
  );
}
