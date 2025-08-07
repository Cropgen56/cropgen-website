"use client";
import React from "react";
import Image from "next/image";

export default function SustainabilityImpact() {
  return (
    <div className="px-6 sm:px-10 mt-8 md:mt-2">
      <div className="relative w-full">
        {" "}
        <Image
          src="/assets/image/sustainability/sustainability-text.webp"
          alt="Crop Health Analytics"
          width={400}
          height={200}
          className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-6 sm:start-10"
        />
        <h2 className="relative text-2xl sm:text-4xl font-bold leading-tight text-start mt-4 sm:mt-10 z-10">
          <span className="text-[#2AB673] sm:text-5xl">
            Sustainability <br /> Impact – In Numbers
          </span>{" "}
        </h2>
        <Image
          src="/assets/image/sustainability/sustainability-impact.webp"
          alt="Crop Gen Sustainability Impact"
          width={800}
          height={300}
          className=" h-auto mx-auto mt-5 "
        />
      </div>
    </div>
  );
}
