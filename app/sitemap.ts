import type { MetadataRoute } from "next";

const siteUrl = "https://www.abacoingenieria.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const alt = (path: string) => ({
    languages: { "es-ES": `${siteUrl}${path}` },
  });
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alt("/"),
    },
    {
      url: `${siteUrl}/licencia-de-actividad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alt("/licencia-de-actividad"),
    },
    {
      url: `${siteUrl}/peritaciones-judiciales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alt("/peritaciones-judiciales"),
    },
    {
      url: `${siteUrl}/fichas-tecnicas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/fichas-tecnicas"),
    },
    {
      url: `${siteUrl}/licencia-bar-restaurante-almeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/licencia-bar-restaurante-almeria"),
    },
    {
      url: `${siteUrl}/precio-licencia-actividad-almeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/precio-licencia-actividad-almeria"),
    },
    {
      url: `${siteUrl}/licencia-actividad-roquetas-de-mar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/licencia-actividad-roquetas-de-mar"),
    },
    {
      url: `${siteUrl}/licencia-actividad-el-ejido`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/licencia-actividad-el-ejido"),
    },
    {
      url: `${siteUrl}/licencia-actividad-vicar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alt("/licencia-actividad-vicar"),
    },
    {
      url: `${siteUrl}/guia-licencia-actividad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: alt("/guia-licencia-actividad"),
    },
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
