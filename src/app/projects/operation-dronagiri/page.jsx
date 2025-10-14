"use client";

import AiPowered from "@/components/projects/operation-dronagiri/AiPowered";
import Challenge from "@/components/projects/operation-dronagiri/Challenge";
import HeroSection from "@/components/projects/operation-dronagiri/HeroSection";
import Next from "@/components/projects/operation-dronagiri/Next";
import Pilot from "@/components/projects/operation-dronagiri/Pilot";
import PromoSection from "@/components/projects/operation-dronagiri/PromoCard";
import Result from "@/components/projects/operation-dronagiri/Result";
import Team from "@/components/projects/operation-dronagiri/Team";

export default function ProjectDronagiri() {
    return (
        <>
            <HeroSection />
            <Challenge />
            <AiPowered />
            <Pilot />
            <Result />
            <Team />
            <Next />
            <PromoSection />
        </>
    );
}
