import type { MetadataRoute } from "next";
import { CITIES } from "./_data/cities";

const siteUrl = "https://www.ingenierial.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const alt = (path: string) => ({
    languages: { "es-ES": `${siteUrl}${path}` },
  });

  const cityLandings = CITIES.flatMap((c) => [
    {
      url: `${siteUrl}/licencia-actividad-${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: alt(`/licencia-actividad-${c.slug}`),
    },
    {
      url: `${siteUrl}/peritaciones-${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: alt(`/peritaciones-${c.slug}`),
    },
    {
      url: `${siteUrl}/tasaciones-${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: alt(`/tasaciones-${c.slug}`),
    },
  ]);

  return [
    // ── Home ──
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alt("/"),
    },

    // ── Hubs de servicio ──
    {
      url: `${siteUrl}/licencia-de-actividad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: alt("/licencia-de-actividad"),
    },
    {
      url: `${siteUrl}/peritaciones-judiciales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: alt("/peritaciones-judiciales"),
    },
    {
      url: `${siteUrl}/tasaciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: alt("/tasaciones"),
    },
    {
      url: `${siteUrl}/fichas-tecnicas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alt("/fichas-tecnicas"),
    },

    // ── Landings de vehículos ──
    {
      url: `${siteUrl}/homologacion-coche-importado`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: alt("/homologacion-coche-importado"),
    },
    {
      url: `${siteUrl}/homologacion-coche-usa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: alt("/homologacion-coche-usa"),
    },
    {
      url: `${siteUrl}/pasar-itv-coche-extranjero`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: alt("/pasar-itv-coche-extranjero"),
    },
    {
      url: `${siteUrl}/homologacion-vehiculo-historico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/homologacion-vehiculo-historico"),
    },
    {
      url: `${siteUrl}/homologacion-reforma-vehiculo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/homologacion-reforma-vehiculo"),
    },

    // ── Landings de licencia long-tail ya existentes (Almería sub-zonas) ──
    {
      url: `${siteUrl}/licencia-bar-restaurante-almeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alt("/licencia-bar-restaurante-almeria"),
    },
    {
      url: `${siteUrl}/precio-licencia-actividad-almeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alt("/precio-licencia-actividad-almeria"),
    },
    {
      url: `${siteUrl}/licencia-actividad-roquetas-de-mar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alt("/licencia-actividad-roquetas-de-mar"),
    },
    {
      url: `${siteUrl}/licencia-actividad-el-ejido`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alt("/licencia-actividad-el-ejido"),
    },
    {
      url: `${siteUrl}/licencia-actividad-vicar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: alt("/licencia-actividad-vicar"),
    },
    {
      url: `${siteUrl}/guia-licencia-actividad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: alt("/guia-licencia-actividad"),
    },

    // ── 30 landings por capital ──
    ...cityLandings,

    // ── Páginas legales ──
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: alt("/aviso-legal"),
    },
    {
      url: `${siteUrl}/politica-privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: alt("/politica-privacidad"),
    },
    {
      url: `${siteUrl}/politica-cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: alt("/politica-cookies"),
    },
  ];
}
