"use client";

import Head from "next/head";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissonSection";
import OurStorySection from "@/components/about/OurStorySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import SubscribeSection from "@/components/about/SubsribeSection";
import TestimonialSection from "@/components/about/TestimonilSection";

export default function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CropGen",
    url: "https://cropgenapp.com",
    logo: "https://cropgenapp.com/assets/image/home/logo-cropgen.png",
    sameAs: [
      "https://www.linkedin.com/company/cropgen/about/?viewAsMember=true",
      "https://x.com/CropGen",
      "https://www.facebook.com/share/1C42JygSKC/",
      "https://www.instagram.com/cropgen?igsh=M2hnNXR3ZDB2eWRi",
      "https://www.youtube.com/channel/UCuU7d-rByYZfMkfoj0Pgq0w",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@cropgenapp.com",
        availableLanguage: ["en", "hi", "mr"],
      },
    ],
  };

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
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
