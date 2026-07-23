import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "./components/WhatsAppWidget";

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
      "Abaco Ingeniería · Licencias, Peritaciones, Tasaciones y Homologaciones en toda España",
    template: "%s | Abaco Ingeniería",
  },
  description:
    "Oficina técnica nacional con más de 40 años de trayectoria. Licencias de apertura, peritaciones judiciales, tasaciones técnicas y homologación de vehículos en toda España. Servicio 100% online con firma digital FNMT.",
  keywords: [
    "ingeniería nacional",
    "ingeniero técnico industrial",
    "oficina técnica España",
    "licencia de actividad España",
    "licencia de apertura España",
    "proyecto técnico de actividad",
    "proyecto apertura local",
    "peritaciones judiciales España",
    "perito judicial ingeniero",
    "informes periciales",
    "tasaciones técnicas",
    "tasación inmueble",
    "tasación judicial",
    "ficha técnica reducida",
    "homologación coche importado",
    "homologación vehículo USA",
    "pasar ITV coche extranjero",
    "consultoría técnica",
    "ingeniero colegiado",
    "firma digital FNMT",
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
      "Abaco Ingeniería · Licencias, Peritaciones, Tasaciones y Homologaciones en toda España",
    description:
      "Oficina técnica nacional con más de 40 años de trayectoria. Servicios técnicos para particulares, empresas y administraciones en toda España. 100% online con firma digital FNMT.",
    images: [
      {
        url: "/images/og-abaco.jpg",
        width: 1200,
        height: 630,
        alt: "Abaco Ingeniería – Oficina técnica nacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abaco Ingeniería · Licencias, Peritaciones, Tasaciones y Homologaciones",
    description:
      "Oficina técnica nacional. Servicio 100% online con firma digital FNMT.",
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
      telephone: "+34687465486",
      email: "info@abacoingenieria.es",
      priceRange: "€€",
      foundingDate: "1983",
      slogan: "Ingeniería de confianza. Décadas de experiencia a tu servicio.",
      knowsLanguage: ["es"],
      founder: {
        "@type": "Person",
        name: "Manuel Marín Vicente",
        jobTitle: "Ingeniero Técnico Industrial",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Ingeniero Técnico Industrial colegiado",
        },
      },
      description:
        "Oficina técnica nacional con más de 40 años de trayectoria. Licencias de apertura, peritaciones judiciales, tasaciones técnicas, fichas técnicas reducidas y homologación de vehículos en toda España. Sede en Almería, servicio 100% online con firma digital FNMT.",
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
      areaServed: { "@type": "Country", name: "España" },
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
          telephone: "+34687465486",
          email: "info@abacoingenieria.es",
          areaServed: "ES",
          availableLanguage: ["Spanish"],
        },
      ],
      sameAs: [
        "https://www.instagram.com/abacoingenieria",
        "https://wa.me/34687465486",
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
      areaServed: { "@type": "Country", name: "España" },
      description:
        "Redacción de proyecto técnico y tramitación completa de la licencia de actividad para locales, comercios e industrias en toda España.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#peritaciones-judiciales`,
      name: "Peritaciones Judiciales",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Informes periciales judiciales de ingeniería",
      areaServed: { "@type": "Country", name: "España" },
      description:
        "Peritaciones judiciales e informes periciales de ingeniería para procedimientos judiciales, aseguradoras y particulares en toda España.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
