"use server";

import nodemailer from "nodemailer";

const siteUrl = "https://www.ingenierial.es";

export async function sendGuideEmail(formData: FormData) {
  const nombre = (formData.get("nombre") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const consent = formData.get("consent");

  if (!nombre || !email) {
    return { success: false, error: "Rellena nombre y e-mail para recibir la guía." };
  }
  if (!consent) {
    return { success: false, error: "Debes aceptar la política de privacidad." };
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    return { success: false, error: "El e-mail no tiene un formato válido." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const guideUrl = `${siteUrl}/docs/checklist-licencia-actividad.pdf`;

  try {
    // 1) Email al cliente con la guía
    await transporter.sendMail({
      from: `"Abaco Ingeniería" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Tu guía: Checklist de licencia de actividad",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            Gracias, ${nombre} 🙌
          </h2>
          <p style="font-size: 15px; line-height: 1.6; color: #334155;">
            Aquí tienes la <strong>guía de licencia de actividad</strong> que nos
            pediste. Incluye el checklist con los puntos críticos que revisamos
            antes de firmar cualquier proyecto.
          </p>
          <p style="margin: 28px 0;">
            <a href="${guideUrl}"
               style="display:inline-block;background:#0ea5e9;color:#fff;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:600;font-size:15px;">
              Descargar la guía (PDF)
            </a>
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Si tienes cualquier duda sobre un local concreto, respóndenos a este
            mismo correo o llámanos al
            <a href="tel:+34670607830" style="color:#0284c7;">670 607 830</a>.
            La visita al local es gratuita y el presupuesto, cerrado.
          </p>
          <p style="margin-top:28px;font-size:12px;color:#94a3b8;">
            Abaco Ingeniería · Ctra. de Ronda, 293, Entresuelo 2 · 04009 Almería<br/>
            Recibes este correo porque lo has solicitado en abacoingenieria.es.
          </p>
        </div>
      `,
    });

    // 2) Notificación interna al despacho
    await transporter.sendMail({
      from: `"Web abacoingeniería" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Descarga guía licencia: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Nuevo lead desde la guía descargable</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 120px;">Nombre</td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Email</td>
              <td style="padding: 6px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color:#0ea5e9;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Origen</td>
              <td style="padding: 6px 0; color: #0f172a;">/guia-licencia-actividad</td>
            </tr>
          </table>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando guía:", error);
    return { success: false, error: "Error al enviar la guía. Inténtalo de nuevo." };
  }
}
