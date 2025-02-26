"use client";
import React from "react";

export default function PromoSection() {
  return (
    <div className="mx-auto sm:w-[1200px]  h-[120px] sm:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] sm:w-[70%]   h-full flex justify-center flex-col items-cente p-4 sm:p-20  ">
        <h2 className="text-[12px] sm:text-3xl font-bold text-[#2AB673]">
          Start Monitoring your Farm <br /> Easily Now
        </h2>
        <div className="mt-4 flex justify-between sm:w-1/2">
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md text-[10px] sm:font-semibold hover:bg-[#2AB673] transition-all">
            Start Free Trial
          </button>
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md text-[10px] sm:font-semibold hover:bg-[#2AB673] transition-all">
            Choose Plane
          </button>
        </div>
      </div>
    </div>
  );
}
