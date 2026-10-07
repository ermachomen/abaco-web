"use client";

import { useEffect } from "react";

export function origenVisita(): string {
  try {
    const host = document.referrer ? new URL(document.referrer).hostname : "";
    return host === window.location.hostname ? "" : host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      const tipo = href.startsWith("tel:") ? "telefono" : href.includes("wa.me/") ? "whatsapp" : null;
      if (!tipo) return;
      const cuerpo = JSON.stringify({ tipo, pagina: window.location.pathname, origen: origenVisita() });
      navigator.sendBeacon("/api/contacto-clic", new Blob([cuerpo], { type: "application/json" }));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
