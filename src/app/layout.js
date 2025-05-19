import { Footer, Header } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "AI Satellite Crop Monitoring & Precision Farming Advisory",
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
    name: "AI Satellite Crop Monitoring & Precision Farming Advisory",
    url: siteUrl,
    description:
      "CropGen is India's first LLM-based crop monitoring system using satellite imagery and AI to enable smarter farming decision and real-time crop advisory.",
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

        {/* Zoho chat boat  */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho = window.$zoho || {};
              $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
            `,
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siqb1dfcc250d87c7426b1842b94264cfe74d2fbb646c7b17079870b4b6c6f77628"
          defer
        /> */}

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
        {/* <!-- Elfsight WhatsApp Chat | Untitled WhatsApp Chat --> */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-23d7a14f-0f17-4372-a233-60d65c1b78b2"
          data-elfsight-app-lazy
        ></div>

        <Header />
        <main className="pt-16">
          {children} <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
