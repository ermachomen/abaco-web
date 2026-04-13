"use server";

import nodemailer from "nodemailer";

export async function sendFichaEmail(formData: FormData) {
  const nombre      = formData.get("nombre") as string;
  const telefono    = formData.get("telefono") as string;
  const email       = formData.get("email") as string;
  const tramite     = formData.get("tramite") as string;
  const marca       = formData.get("marca") as string;
  const modelo      = formData.get("modelo") as string;
  const anio        = formData.get("anio") as string;
  const matricula   = formData.get("matricula") as string;
  const vin         = formData.get("vin") as string;
  const cilindrada  = formData.get("cilindrada") as string;
  const potencia    = formData.get("potencia") as string;
  const origen      = formData.get("origen") as string;
  const observaciones = formData.get("observaciones") as string;

  if (!nombre || !telefono || !email || !tramite || !marca || !modelo || !vin) {
    return { success: false, error: "Por favor rellena todos los campos obligatorios." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const row = (label: string, value: string) =>
    value ? `<tr>
      <td style="padding:6px 0;color:#64748b;font-size:13px;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#0f172a;font-weight:500;">${value}</td>
    </tr>` : "";

  // Procesar archivos adjuntos
  const archivos = formData.getAll("archivos") as File[];
  const attachments = await Promise.all(
    archivos
      .filter((f) => f && f.size > 0)
      .map(async (f) => {
        const buffer = Buffer.from(await f.arrayBuffer());
        return {
          filename: f.name,
          content: buffer,
          contentType: f.type || "application/octet-stream",
        };
      })
  );

  try {
    await transporter.sendMail({
      from: `"Web abacoingeniería" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nueva solicitud de ficha técnica – ${marca} ${modelo} (${nombre})`,
      attachments,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;">
          <h2 style="color:#0f172a;border-bottom:2px solid #0ea5e9;padding-bottom:8px;margin-bottom:20px;">
            Solicitud de Ficha Técnica Reducida
          </h2>

          <h3 style="color:#0ea5e9;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Solicitante</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            ${row("Nombre", nombre)}
            ${row("Teléfono", telefono)}
            ${row("Email", `<a href="mailto:${email}" style="color:#0ea5e9;">${email}</a>`)}
          </table>

          <h3 style="color:#0ea5e9;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Trámite solicitado</h3>
          <p style="background:#eff6ff;border-left:3px solid #0ea5e9;padding:10px 14px;border-radius:4px;color:#1e40af;font-weight:600;margin-bottom:20px;">
            ${tramite}
          </p>

          <h3 style="color:#0ea5e9;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Datos del vehículo</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            ${row("Marca", marca)}
            ${row("Modelo", modelo)}
            ${row("Año de fabricación", anio)}
            ${row("Matrícula", matricula)}
            ${row("VIN / Bastidor", `<span style="font-family:monospace;letter-spacing:1px;">${vin}</span>`)}
            ${row("Cilindrada", cilindrada ? `${cilindrada} cc` : "")}
            ${row("Potencia", potencia ? `${potencia} CV` : "")}
            ${row("País de origen", origen)}
          </table>

          ${observaciones ? `
          <h3 style="color:#0ea5e9;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Observaciones</h3>
          <div style="background:#f8fafc;border-left:3px solid #cbd5e1;padding:12px 16px;border-radius:4px;color:#334155;white-space:pre-wrap;margin-bottom:20px;">
            ${observaciones}
          </div>` : ""}

          ${attachments.length > 0 ? `
          <h3 style="color:#0ea5e9;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Archivos adjuntos (${attachments.length})</h3>
          <ul style="margin:0 0 20px;padding-left:18px;color:#334155;">
            ${attachments.map((a) => `<li style="font-size:13px;padding:2px 0;">${a.filename}</li>`).join("")}
          </ul>` : ""}

          <p style="font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:12px;margin-top:8px;">
            Enviado desde el formulario de fichas técnicas de abacoingeniería.es
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando email ficha:", error);
    return { success: false, error: "Error al enviar la solicitud. Inténtalo de nuevo." };
  }
}
