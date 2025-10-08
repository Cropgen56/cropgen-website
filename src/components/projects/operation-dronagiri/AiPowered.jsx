import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

function AiPowered() {
  const cards = [
    {
      number: "18",
      title: "Field Parameters",
      subtitle:
        "Comprehensive monitoring of soil, weather, and crop conditions",
      plus: true,
    },
    {
      number: 12,
      title: "Satellite Indices",
      subtitle: "Advanced spectral analysis for crop health assessment",
      plus: true,
    },
    {
      number: "BBCH-scale",
      title: "NPK Advisory",
      subtitle: "Precise nutrient recommendations based on growth stages",
      plus: false,
    },
  ];

  return (
    <section className="relative py-4 md:py-10 w-full flex flex-col justify-center items-center gap-3 sm:gap-6">
      {/* Heading */}
      <div className="flex flex-col gap-6 relative">
        <Image
          src="/assets/image/projects/Our-AI-Powered-Solution.svg"
          alt="Our AI-Powered Solution"
          width={600}
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
          Our AI-Powered Solution
        </h2>
      </div>

      <div className="max-w-2xl text-center px-4 py-2">
        <p className="text-black text-xs md:text-base leading-relaxed">
          CropGen leverages advanced AI algorithms and satellite imagery to
          provide real-time crop monitoring and personalized advisory services.
          Our platform analyzes multiple data sources including weather
          patterns, soil conditions, and crop health indicators to deliver
          actionable insights that optimize farming practices, reduce resource
          waste, and maximize yield potential while promoting sustainable
          agriculture.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative flex flex-wrap justify-center w-full px-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center border border-[#00000026] shadow-xl rounded-2xl gap-4 bg-white p-6 flex-grow sm:flex-grow-0 sm:w-[30%] min-w-[150px]"
          >
            <div className="text-[#2AB673] font-bold text-2xl sm:text-4xl flex items-center justify-center whitespace-nowrap">
              {card.number}
              {card.plus && <Plus size={20} strokeWidth={2.75} />}
            </div>
            <h3 className="text-md md:text-xl font-bold text-center">
              {card.title}
            </h3>
            <p className="text-xs md:text-sm text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AiPowered;
