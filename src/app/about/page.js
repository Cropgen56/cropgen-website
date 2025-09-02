"use client";

import Head from "next/head";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissonSection";
import OurStorySection from "@/components/about/OurStorySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import SubscribeSection from "@/components/about/SubsribeSection";
// import TestimonialSection from "@/components/about/TestimonilSection";

export default function About() {
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
        name: "About",
        item: "https://cropgenapp.com/about",
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
      <MissionSection />
      <OurStorySection />
      <OurTeamSection />
      {/* <TestimonialSection /> */}
      <SubscribeSection />
    </div>
  );
}
