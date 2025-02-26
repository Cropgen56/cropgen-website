"use client";
import Subscrib from "@/components/common/Subscrib";
import HeroSection from "@/components/sustainability/HeroSection";
import Sustainability from "@/components/sustainability/Sustainability";
import SustainabilityFocus from "@/components/sustainability/SustainabilityFocus";
import SustainabilityImpact from "@/components/sustainability/SustainabilityImpact";
import SustainableFarming from "@/components/sustainability/SustainableFarming";

export default function About() {
  return (
    <div>
      <HeroSection />
      <Sustainability />
      <SustainabilityFocus />
      <SustainabilityImpact />
      <SustainableFarming />
      <Subscrib
        text={
          <>
            Start Your Farming Journey with <br />
            Cropgen’s Sustainable Program
          </>
        }
      />
    </div>
  );
}
