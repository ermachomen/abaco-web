"use client";

import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";
import { origenVisita } from "./ContactTracker";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.set("pagina", window.location.pathname);
    formData.set("origen", origenVisita());
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Error desconocido.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">
            Nombre <span className="text-sky-400">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            placeholder="Tu teléfono"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">
          Email <span className="text-sky-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">
          Mensaje <span className="text-sky-400">*</span>
        </label>
        <textarea
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
        />
      </div>

      {status === "success" && (
        <div className="rounded-xl bg-green-100 border border-green-300 px-4 py-3 text-sm text-green-800">
          ✓ Mensaje enviado correctamente. Te responderemos pronto.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl bg-red-100 border border-red-300 px-4 py-3 text-sm text-red-800">
          ✗ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
