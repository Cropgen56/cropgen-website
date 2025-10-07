"use client";
import React from "react";

export default function PromoSection() {
  return (
    <div className="mx-auto h-[120px] md:h-[280px] lg:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] h-full flex justify-center flex-col gap-2 sm:gap-4 items-center p-4 md:p-10">
        
        <h2 className="text-xs md:text-xl lg:text-3xl font-bold text-[#2AB673]">
          Be Part of Our Journey
        </h2>

        <p className="text-[10px] w-[40%] sm:text-sm md:text-base text-black text-center">
          Join us in revolutionizing agriculture through AI and satellite technology
        </p>

        <div className="flex justify-between gap-4 whitespace-nowrap">
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-3 rounded-[20px] text-[10px] sm:text-sm sm:font-semibold hover:bg-[#2ab677e9] transition-all duration-300 ease-in-out">
            Contact Us
          </button>
          <button className="bg-[#fff] border border-[#2AB673] text-[#2AB673] px-2 sm:px-6 py-1 sm:py-3 rounded-[20px] text-[10px] sm:text-sm sm:font-semibold hover:bg-[#2AB673] hover:text-white transition-all duration-300 ease-in-out">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
