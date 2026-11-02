import Link from "next/link";

export default function AperturaMunicipio({ municipio }: { municipio: string }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cómo se tramita la licencia de apertura en {municipio}</h2>
      <p className="mt-6 text-slate-700 leading-relaxed">
        Licencia de apertura y licencia de actividad son la misma autorización
        municipal: los ayuntamientos usan ambos nombres indistintamente. Estos
        son los pasos que seguimos contigo:
      </p>
      <ol className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <li>
          <strong>1. Visita al local.</strong> Nos desplazamos sin coste para
          comprobar la viabilidad y la compatibilidad urbanística de la actividad.
        </li>
        <li>
          <strong>2. Documentación técnica.</strong> Redactamos el{" "}
          <Link href="/proyecto-de-actividad" className="text-sky-700 underline hover:no-underline">proyecto técnico para la licencia de apertura</Link>{" "}
          o la memoria técnica, según sea una actividad inocua o calificada.
        </li>
        <li>
          <strong>3. Presentación y seguimiento.</strong> Presentamos el
          expediente en la sede electrónica del Ayuntamiento de {municipio} con
          firma digital FNMT y hacemos el seguimiento hasta la resolución.
        </li>
      </ol>
    </section>
  );
}
