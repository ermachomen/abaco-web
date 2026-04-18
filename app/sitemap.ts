import type { MetadataRoute } from "next";

const siteUrl = "https://www.ingenierial.es";

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
  ];
}
