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
    "licencia de apertura Almería",
    "licencia de actividad Málaga",
    "licencia de apertura Málaga",
    "licencia de actividad Murcia",
    "licencia de apertura Murcia",
    "proyecto licencia de actividad",
    "proyecto licencia de apertura",
    "proyecto apertura local",
    "ingeniero Almería",
    "ingeniero Málaga",
    "ingeniero Murcia",
    "peritaciones judiciales Almería",
    "peritaciones judiciales Málaga",
    "peritaciones judiciales Murcia",
    "perito judicial ingeniero",
    "informes periciales",
    "ficha técnica reducida",
    "homologación vehículos",
    "consultoría técnica",
    "tramitación licencia apertura",
    "Abaco Ingeniería",
  ],
  authors: [{ name: "Abaco Ingeniería", url: siteUrl }],
  creator: "Abaco Ingeniería",
  publisher: "Abaco Ingeniería",
  category: "Engineering",
  applicationName: "Abaco Ingeniería",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "49oMVv0acqN89KeaiGU9w4PwuJy7dmRzcMsjvHdEetE",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "x-default": "/",
    },
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
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Abaco Ingeniería",
      alternateName: ["abacoingeniería", "Ábaco Ingeniería"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-abaco1.jpeg`,
        width: 1536,
        height: 1024,
      },
      image: `${siteUrl}/images/og-abaco.jpg`,
      telephone: "+34670607830",
      email: "info@abacoingenieria.es",
      priceRange: "€€",
      description:
        "Empresa de ingeniería y consultoría técnica en Almería. Proyectos de licencia de actividad, peritaciones judiciales, fichas técnicas y asesoramiento.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carretera de Ronda, 293",
        addressLocality: "Almería",
        postalCode: "04001",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.8381,
        longitude: -2.4597,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Almería" },
        { "@type": "AdministrativeArea", name: "Málaga" },
        { "@type": "AdministrativeArea", name: "Murcia" },
        { "@type": "AdministrativeArea", name: "Andalucía" },
        { "@type": "AdministrativeArea", name: "Región de Murcia" },
        { "@type": "Country", name: "España" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "16:00",
          closes: "19:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+34670607830",
          email: "info@abacoingenieria.es",
          areaServed: "ES",
          availableLanguage: ["Spanish"],
        },
      ],
      sameAs: [
        "https://www.instagram.com/abacoingenieria",
        "https://wa.me/34670607830",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abaco Ingeniería",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-ES",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
