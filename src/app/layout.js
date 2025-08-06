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
        {/*  Google Analytics (Fixed) */}
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

        <a
          href="https://wa.me/919665935570"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.373 0 0 5.373 0 12c0 2.093.54 4.074 1.56 5.85L0 24l6.3-1.53A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12a11.88 11.88 0 00-3.48-8.52zM12 22.14c-1.818 0-3.591-.492-5.13-1.425l-.366-.213-3.75.912.996-3.648-.237-.375C2.49 15.171 2.04 13.615 2.04 12c0-5.49 4.47-9.96 9.96-9.96 2.663 0 5.166 1.038 7.041 2.919A9.92 9.92 0 0121.96 12c0 5.49-4.47 10.14-9.96 10.14z" />
            <path d="M17.04 14.4l-2.4-.675c-.33-.09-.687-.018-.945.183l-.66.51a8.107 8.107 0 01-3.555-3.555l.51-.66a1.14 1.14 0 00.183-.945L9.6 6.96A1.14 1.14 0 008.52 6h-.96a2.4 2.4 0 00-2.4 2.4c0 .6.09 1.17.255 1.71.54 1.725 1.665 3.33 3.225 4.59 1.56 1.26 3.27 2.01 5.01 2.19a2.4 2.4 0 002.49-2.49v-.96a1.14 1.14 0 00-.6-.99z" />
          </svg>
        </a>

        <Header />
        <main className="pt-[4.5rem] overflow-hidden">
          {children} <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
