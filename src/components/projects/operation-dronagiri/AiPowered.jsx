import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import DataFlowSection from "./DataFlow";

function AiPowered() {
  const cards = [
    {
      number: "AAS System",
      title: "Automatic Agronomy System",
      subtitle:
        "18+ ground data points to deliver real-time crop advisories on pests, diseases, irrigation, and fertigation — helping farmers make smart, data-driven decisions for better yield and sustainability.",
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
          src="/assets/image/projects/Solution-Overview.svg"
          alt="Solution Overview"
          width={600}
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
          Solution Overview
        </h2>
      </div>

      <div className="max-w-4xl text-center px-4 py-2">
        <p className="text-black text-xs md:text-base leading-relaxed">
          Comprehensive AI-based crop monitoring system with satellite
          intelligence. <br />
          CropGen is an AI-based Crop Monitoring and Advisory System (AAS
          System) that provides real-time, LLM-powered crop advisories using 18+
          field parameters — including soil health, moisture, weather,
          vegetation indices, and nutrient balance. <br />
          It analyzes 12+ satellite indices (NDVI, EVI, NDWI, MSAVI, SAVI, etc.)
          and offers BBCH-scale nutrient management for precise NPK
          recommendations. <br />
          <strong>Geospatial Datasets (GDI):</strong> Sentinel satellite
          imagery, weather satellite data (NASA POWER & ERA5), SoilGrids, and
          local field validation data.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative flex flex-wrap justify-center w-full px-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center border border-[#00000026] shadow-xl rounded-2xl gap-4 bg-white p-6 flex-grow sm:flex-grow-0 sm:w-[30%] min-w-[150px]"
          >
            <div className="text-[#2AB673] font-bold text-xl sm:text-3xl flex items-center justify-center whitespace-nowrap">
              {card.number}
              {card.plus && <Plus size={20} strokeWidth={2.75} />}
            </div>
            <h3 className="text-md md:text-lg font-bold text-center">
              {card.title}
            </h3>
            <p className="text-xs md:text-sm text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>
      <DataFlowSection />
    </section>
  );
}

export default AiPowered;
