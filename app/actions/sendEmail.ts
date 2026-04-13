"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const telefono = formData.get("telefono") as string;
  const email = formData.get("email") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return { success: false, error: "Por favor rellena todos los campos obligatorios." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web abacoingeniería" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nueva consulta web de ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            Nueva consulta desde abacoingeniería.es
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Teléfono</td>
              <td style="padding: 8px 0; color: #0f172a;">${telefono || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px; background: #f8fafc; border-left: 4px solid #0ea5e9; padding: 16px; border-radius: 4px;">
            <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;">Mensaje</p>
            <p style="color: #0f172a; margin: 0; white-space: pre-wrap;">${mensaje}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Enviado desde el formulario de contacto de abacoingeniería.es
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando email:", error);
    return { success: false, error: "Error al enviar el mensaje. Inténtalo de nuevo." };
  }
}
