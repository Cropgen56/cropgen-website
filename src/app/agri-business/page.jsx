"use client";
import Body from "@/components/agri-business/Body";
import BusinessSolution from "@/components/agri-business/BusinessSolution";
import HeroSection from "@/components/agri-business/HeroSection";
import Subscrib from "@/components/common/Subscrib";

export default function About() {
  return (
    <div>
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
