import { Percent, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import FieldImplementationGallery from "./FieldImplementationGallery";

function Result() {
  const cards = [
    {
      number: "35",
      title: "Fertilizer Optimization",
      subtitle: "Improved crop productivity through precision farming",
      percent: true,
    },
    {
      number: 30,
      title: "Yield Increase",
      subtitle: "Improved crop productivity through precision farming",
      percent: true,
    },
    {
      number: "25",
      title: "CO₂ Reduction",
      subtitle: "Lower emissions through optimized resource use",
      percent: true,
    },
  ];

  return (
    <section className="relative py-4 md:py-10 w-full flex flex-col justify-center items-center gap-4 sm:gap-6">
      <div className="flex flex-col gap-6 relative">
        <Image
          src="/assets/image/projects/Impact and Early Results.svg"
          alt="Our AI-Powered Solution"
          width={600}
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
          Impact and Early Results
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
            className="relative z-10 flex flex-col items-center border border-[#00000026] shadow-xl rounded-2xl gap-4 bg-white p-3 sm:p-6 flex-grow sm:flex-grow-0 sm:w-[30%] min-w-[150px]"
          >
            <div className="text-[#2AB673] font-bold text-2xl sm:text-4xl flex items-center justify-center whitespace-nowrap">
              {card.number}
              {card.percent && <Percent size={20} strokeWidth={2.75} />}
            </div>
            <h3 className="text-md md:text-xl font-bold text-center">
              {card.title}
            </h3>
            <p className="text-xs md:text-sm text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col sm:flex-row max-w-sm sm:max-w-3xl w-full border-2 border-[#2AB673] rounded-lg p-4 px-4 sm:px-6 mt-8 gap-4 mx-4 sm:mx-0">
        <div className="flex-shrink-0 flex flex-col justify-center sm:mx-0 mx-auto">
          <Image
            src="/assets/image/projects/farmer-img.jpeg"
            alt="Farmer Image"
            width={120}
            height={120}
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-sm md:text-base text-black leading-relaxed">
            "I am using the CropGen mobile application, which provides me with
            helpful advisories on what fertilizers and pesticides to apply to my
            soybean and turmeric farms. It also gives me images showing where my
            crops are under stress."
            <br />
            "Right now, I am making my crop decisions by myself, but the
            information and insights from CropGen are helping me make better and
            more informed decisions."
          </p>
          <p className="mt-2 text-xs md:text-sm font-bold text-black">
            - Ramesh Patil, Cotton Farmer, Washim
          </p>
        </div>
      </div>

      <FieldImplementationGallery />
    </section>
  );
}

export default Result;
