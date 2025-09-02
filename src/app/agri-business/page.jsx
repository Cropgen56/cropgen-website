"use client";
import Head from "next/head";
import Body from "@/components/agri-business/Body";
import BusinessSolution from "@/components/agri-business/BusinessSolution";
import HeroSection from "@/components/agri-business/HeroSection";
import Subscrib from "@/components/common/Subscrib";

export default function AgriBusiness() {
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
        name: "Agri-Business",
        item: "https://cropgenapp.com/agri-business",
      },
    ],
  };

  return (
    <div>
      <Head>
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      <HeroSection />
      <Body />
      <BusinessSolution />
      <Subscrib
        text={
          <>
            Start Your Farming Journey with <br />
            Cropgen's Agribusiness
          </>
        }
      />
    </div>
  );
}
