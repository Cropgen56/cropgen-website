"use client";
import Head from "next/head";
import CropMonitoringFeatures from "@/components/crop-monitoring/Features";
import HeroSection from "@/components/crop-monitoring/HeroSection";

export default function CropMonitoring() {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cropgenapp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Crop Monitoring",
        item: "https://cropgenapp.com/crop-monitoring",
      },
    ],
  };

  return (
    <div>
      <Head>
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <HeroSection />
      <CropMonitoringFeatures />
    </div>
  );
}
