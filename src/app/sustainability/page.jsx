"use client";
import Head from "next/head";
import Subscrib from "@/components/common/Subscrib";
import HeroSection from "@/components/sustainability/HeroSection";
import Sustainability from "@/components/sustainability/Sustainability";
import SustainabilityFocus from "@/components/sustainability/SustainabilityFocus";
import SustainabilityImpact from "@/components/sustainability/SustainabilityImpact";
import SustainableFarming from "@/components/sustainability/SustainableFarming";

export default function SustainabilityPage() {
  //  Breadcrumb Schema
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
        name: "Sustainability",
        item: "https://cropgenapp.com/sustainability",
      },
    ],
  };

  return (
    <div>
      {/* Inject Breadcrumb Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <HeroSection />
      <Sustainability />
      <SustainabilityFocus />
      <SustainabilityImpact />
      <SustainableFarming />
      <Subscrib
        text={
          <>
            Start Your Farming Journey with <br />
            Cropgen's Sustainable Program
          </>
        }
      />
    </div>
  );
}
