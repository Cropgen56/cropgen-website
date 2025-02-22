import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[250px] sm:h-[600px] w-full flex flex-row sm:flex-row items-center justify-between px-4 sm:px-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/image/crop-monitoring/hero.webp"
          alt="Farming Field with Sprinklers"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-white text-left sm:p-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Crop <br />
          <span className="sm:mt-6 inline-block">Monitoring</span>
        </h1>
        <p className="mt-4 text-xs sm:text-lg md:text-xl">
          Monitor your fields with ease using the{" "}
          <br className="hidden sm:block" />
          latest satellite technology. Access and{" "}
          <br className="hidden sm:block" />
          compare multiple data layers without extra tools.
        </p>
        <button className="bg-[#00AA64] rounded-full px-4 sm:px-6 py-2 mt-4 sm:mt-5 flex items-center justify-center text-sm sm:text-base">
          Start Your Demo{" "}
          <Image
            src="/assets/image/comman/right-arrow.webp"
            alt="Right Arrow"
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </div>

      {/* Dashboard Image */}
      <div className="relative z-10 w-[90%] sm:w-[700px] max-w-md sm:max-w-lg mt-4 sm:mt-0">
        <Image
          src="/assets/image/crop-monitoring/dashboard.webp"
          alt="Cropgen Crop Monitoring Dashboard"
          width={800}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}
