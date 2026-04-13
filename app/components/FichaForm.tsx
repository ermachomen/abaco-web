"use client";

import { useState, useRef, useCallback } from "react";
import { sendFichaEmail } from "../actions/sendFichaEmail";

const tiposTramite = [
  "Matriculación de vehículo",
  "Rehabilitación de vehículo",
  "Catalogación como vehículo histórico",
  "Importación de vehículo",
  "Otro",
];

const MAX_FILES = 10;
const MAX_SIZE_MB = 10;

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileIcon({ type }: { type: string }) {
  if (type.startsWith("image/"))
    return <span className="text-sky-500">🖼</span>;
  if (type === "application/pdf")
    return <span className="text-red-500">📄</span>;
  return <span className="text-slate-500">📎</span>;
}

export default function FichaForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    const valid: File[] = [];
    const errors: string[] = [];

    Array.from(newFiles).forEach((f) => {
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        errors.push(`${f.name} supera los ${MAX_SIZE_MB} MB`);
      } else {
        valid.push(f);
      }
    });

    setFiles((prev) => {
      const combined = [...prev, ...valid];
      return combined.slice(0, MAX_FILES);
    });

    if (errors.length) alert(errors.join("\n"));
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // Añadir archivos manualmente al formData
    files.forEach((f) => formData.append("archivos", f));

    const result = await sendFichaEmail(formData);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      setFiles([]);
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Error desconocido.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

      {/* Datos del solicitante */}
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Datos del solicitante
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Nombre y apellidos <span className="text-sky-600">*</span>
            </label>
            <input type="text" name="nombre" required placeholder="Tu nombre completo"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Teléfono <span className="text-sky-600">*</span>
            </label>
            <input type="tel" name="telefono" required placeholder="Tu teléfono"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Email <span className="text-sky-600">*</span>
            </label>
            <input type="email" name="email" required placeholder="tu@email.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
        </div>
      </div>

      {/* Tipo de trámite */}
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Tipo de trámite
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tiposTramite.map((tipo) => (
            <label key={tipo} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:border-sky-400 transition has-[:checked]:border-sky-500 has-[:checked]:bg-sky-50">
              <input type="radio" name="tramite" value={tipo} required className="accent-sky-600" />
              <span className="text-sm text-slate-700">{tipo}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Datos del vehículo */}
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
          Datos del vehículo
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Marca <span className="text-sky-600">*</span>
            </label>
            <input type="text" name="marca" required placeholder="Ej: BMW, Ford, Seat..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Modelo <span className="text-sky-600">*</span>
            </label>
            <input type="text" name="modelo" required placeholder="Ej: Serie 3, Focus, Ibiza..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Año de fabricación</label>
            <input type="number" name="anio" placeholder="Ej: 1987" min="1900" max="2099"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Matrícula actual</label>
            <input type="text" name="matricula" placeholder="Si dispone de ella"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">
              Número de bastidor (VIN) <span className="text-sky-600">*</span>
            </label>
            <input type="text" name="vin" required placeholder="17 caracteres alfanuméricos"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 font-mono uppercase outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Cilindrada (cc)</label>
            <input type="text" name="cilindrada" placeholder="Ej: 1600"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Potencia (CV)</label>
            <input type="text" name="potencia" placeholder="Ej: 110"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-500 mb-1">País de origen / procedencia</label>
            <input type="text" name="origen" placeholder="Ej: Alemania, Francia, EE.UU..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
          </div>
        </div>
      </div>

      {/* Observaciones */}
      <div>
        <label className="block text-xs font-medium text-slate-500 mb-1">Observaciones adicionales</label>
        <textarea name="observaciones" rows={3}
          placeholder="Cualquier información adicional que pueda ser útil para el trámite..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none" />
      </div>

      {/* Subida de archivos */}
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-1 pb-2 border-b border-slate-200">
          Fotografías y documentación
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Sube fotos del vehículo, ficha original, título de propiedad u otros documentos relevantes.
          Máx. {MAX_FILES} archivos · {MAX_SIZE_MB} MB por archivo · JPG, PNG, PDF, DOC
        </p>

        {/* Zona de drop */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`cursor-pointer rounded-2xl border-2 border-dashed px-6 py-10 text-center transition
            ${dragging
              ? "border-sky-500 bg-sky-50"
              : "border-slate-200 bg-slate-50 hover:border-sky-400 hover:bg-sky-50/50"
            }`}
        >
          <div className="text-3xl mb-2">📁</div>
          <p className="text-sm font-medium text-slate-700">
            Arrastra archivos aquí o{" "}
            <span className="text-sky-600 underline underline-offset-2">haz clic para seleccionar</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Imágenes (JPG, PNG, WEBP) y documentos (PDF, DOC, DOCX)
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>

        {/* Lista de archivos seleccionados */}
        {files.length > 0 && (
          <ul className="mt-4 space-y-2">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <FileIcon type={f.type} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{f.name}</p>
                    <p className="text-xs text-slate-400">{formatBytes(f.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-3 shrink-0 text-slate-400 hover:text-red-500 transition text-lg leading-none"
                  aria-label="Eliminar archivo"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {files.length >= MAX_FILES && (
          <p className="mt-2 text-xs text-amber-600">
            Has alcanzado el límite de {MAX_FILES} archivos.
          </p>
        )}
      </div>

      {/* Mensajes de estado */}
      {status === "success" && (
        <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
          ✓ Solicitud enviada correctamente. Nos pondremos en contacto contigo en breve.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          ✗ {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === "sending"}
        className="w-full rounded-xl bg-sky-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? "Enviando solicitud..." : "Enviar solicitud de ficha técnica"}
      </button>

      <p className="text-xs text-center text-slate-400">
        Los campos marcados con <span className="text-sky-600">*</span> son obligatorios.
        Tus datos serán tratados de forma confidencial.
      </p>
    </form>
  );
}
