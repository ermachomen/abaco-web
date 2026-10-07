import { sendMail, CONTACT_EMAIL } from "../../lib/email";

const TIPOS = { telefono: "llamar", whatsapp: "WhatsApp" } as const;
type Tipo = keyof typeof TIPOS;

// Evita avisos repetidos por dobles clics o recargas (por instancia del servidor).
const recientes = new Map<string, number>();
const VENTANA_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  const ua = request.headers.get("user-agent") ?? "";
  if (/bot|crawl|spider|preview|headless/i.test(ua)) return new Response(null, { status: 204 });

  let datos: { tipo?: string; pagina?: string; origen?: string };
  try {
    datos = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const tipo = datos.tipo as Tipo;
  const pagina = typeof datos.pagina === "string" ? datos.pagina : "";
  const origen = typeof datos.origen === "string" ? datos.origen : "";
  if (!(tipo in TIPOS) || !/^\/[a-z0-9\-/]{0,120}$/.test(pagina) || !/^[a-z0-9.\-]{0,80}$/.test(origen)) {
    return new Response(null, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "";
  const clave = `${ip}|${tipo}|${pagina}`;
  const ahora = Date.now();
  if ((recientes.get(clave) ?? 0) > ahora - VENTANA_MS) return new Response(null, { status: 204 });
  recientes.set(clave, ahora);

  const procedencia = origen ? origen : "directo o desconocido";
  console.log(JSON.stringify({ evento: "clic_contacto", tipo, pagina, origen: procedencia }));

  await sendMail({
    to: CONTACT_EMAIL,
    subject: `Clic en ${TIPOS[tipo]} desde ${pagina}`,
    html: `<div style="font-family:sans-serif">
      <p>Un visitante ha pulsado <strong>${TIPOS[tipo]}</strong> en la web.</p>
      <p>Página: <a href="https://www.ingenierial.es${pagina}">https://www.ingenierial.es${pagina}</a><br>
      Llegó desde: ${procedencia}</p>
      <p style="color:#64748b;font-size:12px">Aviso automático de ingenierial.es. Un clic no garantiza que la llamada o el mensaje se completaran.</p>
    </div>`,
  });

  return new Response(null, { status: 204 });
}
