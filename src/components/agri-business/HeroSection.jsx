"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[250px] sm:h-[600px] w-full flex flex-row sm:flex-row items-center justify-between px-4 sm:px-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/image/agri-business/hero.webp"
          alt="Farming Field with Sprinklers"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-white text-left sm:p-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Agri <br />
          <span className="sm:mt-6 inline-block">Business</span>
        </h1>
        <p className="mt-4 text-xs sm:text-lg md:text-xl">
          Empowering Agribusinesses with AI-Driven{" "}
          <br className="hidden sm:block" /> Insights for Smarter Farming
        </p>
      </div>
    </section>
  );
}
