import { Resend } from "resend";

/**
 * Cliente de correo único para los server actions de la web.
 *
 * Variables de entorno (configurar en Vercel → Settings → Environment Variables):
 * - RESEND_API_KEY  (obligatoria) — API key de resend.com
 * - EMAIL_FROM      (opcional)    — remitente; debe ser del dominio verificado
 *                                   en Resend. Por defecto web@ingenierial.es.
 *                                   Para probar sin dominio verificado usar
 *                                   "Abaco Ingeniería <onboarding@resend.dev>".
 * - CONTACT_EMAIL   (opcional)    — buzón interno del despacho que recibe las
 *                                   notificaciones. Por defecto
 *                                   info@abacoingenieria.es.
 */

export const FROM_EMAIL =
  process.env.EMAIL_FROM ?? "Abaco Ingeniería <web@ingenierial.es>";

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "info@abacoingenieria.es";

export interface MailAttachment {
  filename: string;
  content: Buffer;
}

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}

export interface SendMailResult {
  success: boolean;
  /** Mensaje apto para mostrar al usuario final si success es false. */
  error?: string;
}

const FALLBACK_CONTACT =
  "Llámanos al 687 465 486 o escríbenos a info@abacoingenieria.es.";

export async function sendMail(options: SendMailOptions): Promise<SendMailResult> {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada en el entorno.");
    return {
      success: false,
      error: `Servicio de correo no configurado. ${FALLBACK_CONTACT}`,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
      attachments: options.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
      })),
    });

    if (error) {
      console.error("Resend devolvió error:", error);
      return {
        success: false,
        error: `Error al enviar el mensaje. ${FALLBACK_CONTACT}`,
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Error de red enviando email:", err);
    return {
      success: false,
      error: `Servicio de correo temporalmente no disponible. ${FALLBACK_CONTACT}`,
    };
  }
}
