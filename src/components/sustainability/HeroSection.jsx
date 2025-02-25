import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[250px] sm:h-[600px] w-full flex flex-row sm:flex-row items-center justify-between px-4 sm:px-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/image/sustainability/hero.webp"
          alt="Farming Field with Sprinklers"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-white text-left sm:p-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Sustainability <br />
          <span className="sm:mt-6 inline-block">at Cropgen</span>
        </h1>
        <p className="mt-4 text-xs sm:text-lg md:text-xl">
          Our Commitment to Sustainable Agriculture
        </p>
      </div>
    </div>
  );
}
