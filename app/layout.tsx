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
    default: "Abaco Ingeniería – Ingeniería y Consultoría Técnica en Almería",
    template: "%s | Abaco Ingeniería",
  },
  description:
    "Empresa de ingeniería en Almería especializada en proyectos técnicos, informes periciales, tramitación administrativa y consultoría. Soluciones prácticas y rigurosas para particulares y empresas.",
  keywords: [
    "ingeniería Almería",
    "consultoría técnica Almería",
    "proyectos de ingeniería",
    "informes periciales",
    "tramitación administrativa",
    "ingeniería industrial Almería",
    "empresa ingeniería",
    "asesoramiento técnico",
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
    title: "Abaco Ingeniería – Ingeniería y Consultoría Técnica en Almería",
    description:
      "Proyectos técnicos, informes periciales, tramitación y consultoría de ingeniería en Almería. Profesionalidad y cercanía.",
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
    title: "Abaco Ingeniería – Consultoría técnica en Almería",
    description:
      "Proyectos técnicos, informes periciales y consultoría de ingeniería en Almería.",
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
      "@id": `${siteUrl}/#service`,
      name: "Consultoría e Ingeniería Técnica",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Ingeniería y Consultoría",
      areaServed: { "@type": "AdministrativeArea", name: "Almería" },
      description:
        "Proyectos técnicos, informes periciales, tramitación administrativa y asesoramiento de ingeniería para particulares y empresas en Almería.",
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
