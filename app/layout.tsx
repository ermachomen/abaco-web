import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.ingenierial.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Licencias de Actividad y Peritaciones Judiciales en Almería | Abaco Ingeniería",
    template: "%s | Abaco Ingeniería",
  },
  description:
    "Ingeniería en Almería especializada en proyectos para licencia de actividad y peritaciones judiciales. Tramitación ágil, informes periciales rigurosos y asesoramiento técnico para particulares, empresas y abogados.",
  keywords: [
    "licencia de actividad Almería",
    "proyecto licencia de actividad",
    "proyecto apertura local Almería",
    "peritaciones judiciales Almería",
    "perito judicial ingeniero Almería",
    "informes periciales Almería",
    "ingeniería Almería",
    "consultoría técnica Almería",
    "tramitación licencia apertura",
  ],
  authors: [{ name: "Abaco Ingeniería", url: siteUrl }],
  creator: "Abaco Ingeniería",
  publisher: "Abaco Ingeniería",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Abaco Ingeniería",
    title:
      "Licencias de Actividad y Peritaciones Judiciales en Almería | Abaco Ingeniería",
    description:
      "Proyectos para licencia de actividad y peritaciones judiciales en Almería. Tramitación ágil e informes periciales rigurosos.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Abaco Ingeniería – Consultoría técnica en Almería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Licencias de Actividad y Peritaciones Judiciales en Almería",
    description:
      "Proyectos para licencia de actividad y peritaciones judiciales en Almería.",
    images: ["/images/og-abaco.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: "Abaco Ingeniería",
      url: siteUrl,
      logo: `${siteUrl}/images/logo-abaco1.jpeg`,
      image: `${siteUrl}/images/og-abaco.jpg`,
      telephone: "+34670607830",
      email: "info@abacoingenieria.es",
      description:
        "Empresa de ingeniería y consultoría técnica en Almería. Proyectos, informes periciales, tramitación y asesoramiento.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carretera de Ronda, 293",
        addressLocality: "Almería",
        postalCode: "04001",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Almería",
      },
      sameAs: ["https://www.instagram.com/abacoingenieria"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abaco Ingeniería",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-ES",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#licencia-actividad`,
      name: "Proyecto para Licencia de Actividad",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Proyecto técnico y tramitación de licencia de actividad",
      areaServed: { "@type": "AdministrativeArea", name: "Almería" },
      description:
        "Redacción de proyecto técnico y tramitación completa de la licencia de actividad para locales, comercios e industrias en Almería.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#peritaciones-judiciales`,
      name: "Peritaciones Judiciales",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Informes periciales judiciales de ingeniería",
      areaServed: { "@type": "AdministrativeArea", name: "Almería" },
      description:
        "Peritaciones judiciales e informes periciales de ingeniería para procedimientos judiciales, aseguradoras y particulares en Almería.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
