"use client";
import React from "react";

export default function PromoSection() {
  return (
    <div className="mx-auto  h-[120px] md:h-[280px] lg:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] h-full flex justify-center flex-col gap-2 sm:gap-4 items-center p-4 md:p-10  ">
        <h2 className="text-xs md:text-xl lg:text-3xl font-bold text-[#2AB673]">
          Start Monitoring your Farm <br /> Easily Now
        </h2>
        <div className="flex justify-between gap-4 whitespace-nowrap">
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md text-[10px] sm:text-sm sm:font-semibold hover:bg-[#2ab677e9] transition-all duration-300 ease-in-out">
            Start Free Trial
          </button>
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md text-[10px] sm:text-sm sm:font-semibold hover:bg-[#2ab677e9] transition-all duration-300 ease-in-out">
            Choose Plane
          </button>
        </div>
      </div>
    </div>
  );
}
