"use client";

import { Check, X } from "lucide-react";

export default function PlanCard({ plan }) {
  const isRecommended = plan.recommended;
  

  return (
    <div
  className={`relative flex flex-col rounded-2xl shadow-lg p-6 w-[250px] 
        transition-all duration-300 items-stretch
   ${isRecommended
  ? "bg-white text-black [border-width:8px] border-[#265A48]" // also works
  : "bg-white text-black border border-gray-200"}

        hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]`}

    >
      {isRecommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#265A48] text-white text-xs font-bold px-3 py-1 rounded-full">
          Recommended
        </span>
      )}

      <h3 className="text-[22px] font-bold mt-6 mb-1">{plan.name}</h3>
      <p className="text-xs mb-2 text-gray-400">{plan.tagline}</p>
      <p className="text-[20px] font-bold mb-4">{plan.price}</p>

      <hr className="border-t border-gray-300 mb-4" />

      <div className="flex-1 flex flex-col gap-2 text-[12px] leading-[16px]">
        {plan.features.map((f, i) => (
          <p key={i} className="flex items-start gap-2">
            <Check size={14} strokeWidth={3} className="text-green-500 shrink-0" /> {f}
          </p>
        ))}
        {plan.missing?.map((f, i) => (
          <p key={i} className="flex items-start gap-2 text-gray-400">
            <X size={14} strokeWidth={3} className="text-red-500 shrink-0" /> {f}
          </p>
        ))}
      </div>

     <button
  className="mt-6 py-2 rounded-2xl font-semibold transition-colors duration-300
             bg-[#2AB673] text-white hover:bg-[#466657]"
>
  Get Started
</button>

    </div>
  );
}
