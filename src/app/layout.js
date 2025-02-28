import { Footer, Header } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "CropGen - Smart Farm Management",
  description:
    "CropGen is an advanced farm management system integrating satellite data for better agricultural decision-making.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  const siteUrl = "https://cropgenapp.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CropGen - Smart Farm Management",
    url: siteUrl,
    description:
      "CropGen is an advanced farm management system integrating satellite data for better agricultural decision-making.",
    image: "/logo.png",
  };

  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="farm management, agriculture, satellite data, crop monitoring"
        />
        <meta name="author" content="CropGen Team" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${siteUrl}/logo.png`} />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${siteUrl}/logo.png`} />

        {/* Favicon & Icons */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {/* ✅ Google Analytics (Fixed) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-602SZE71SM"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-602SZE71SM');
          `}
        </Script>

        <Header />
        <main className="pt-16">
          {children} <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
