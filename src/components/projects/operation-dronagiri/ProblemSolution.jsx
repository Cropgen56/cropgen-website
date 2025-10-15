import React from "react";
import { TriangleAlert, EyeOff, Clock4 } from "lucide-react";
import Image from "next/image";
import satellite from "../../../../public/assets/image/projects/material-symbols_satellite-alt-rounded.svg";
import recommendations from "../../../../public/assets/image/projects/bxs_brain.svg";
import monitoring from "../../../../public/assets/image/projects/streamline_graph-solid.svg";

// Dynamic Card Component
const InfoCard = ({ title, content, pointers, bgColor, textColor }) => {
  return (
    <div
      className="w-full lg:max-w-lg flex-1 flex flex-col  gap-4 p-6 rounded-xl shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-xl font-bold" style={{ color: textColor }}>
        {title}
      </h3>
      <p className="text-sm md:text-base leading-loose">{content}</p>
      <ul className="flex flex-col gap-2">
        {pointers.map((pointer, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {pointer.img ? (
              <Image
                src={pointer.img}
                alt={pointer.text}
                width={20}
                height={20}
              />
            ) : pointer.icon ? (
              <pointer.icon
                size={20}
                strokeWidth={2}
                color={textColor}
                fill={pointer.fill || "none"}
              />
            ) : null}
            <span className="text-sm md:text-base leading-loose ">
              {pointer.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component with Data
const ProblemSolution = () => {
  const data = [
    {
      title: "Problem Statement",
      content:
        "Farmers in India face major challenges due to inefficient fertilizer use, poor visibility of crop health, delayed agronomy advisories, and lack of real-time decision support. These issues lead to soil degradation, higher input costs, and reduced yield.",
      pointers: [
        { text: "Inefficient fertilizer use", icon: TriangleAlert },
        { text: "Poor crop health visibility", icon: EyeOff },
        { text: "Delayed agronomy advisories", icon: Clock4 },
      ],
      bgColor: "#FFE4DD",
      textColor: "#F90202",
    },
    {
      title: "Our Solution",
      content:
        "CropGen addresses these gaps by using AI, satellite data, and localized agronomy intelligence to deliver live, field-specific recommendations helping farmers make self-decisions on fertilizer, irrigation, and crop management.",
      pointers: [
        { text: "Sentinel-2 satellite integration", img: satellite },
        { text: "AI-powered recommendations", img: recommendations },
        { text: "Real-time monitoring", img: monitoring },
      ],
      bgColor: "#E5FFF2",
      textColor: "#2AB673",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-6 flex-wrap justify-center items-center py-4 px-4 md:px-16">
      <div className="flex flex-col md:flex-row gap-6">
        {data.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            content={card.content}
            pointers={card.pointers}
            bgColor={card.bgColor}
            textColor={card.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ProblemSolution;
