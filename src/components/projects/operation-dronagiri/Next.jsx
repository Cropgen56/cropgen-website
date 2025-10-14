import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import SustainableDevelopment from "./SustainableDevelopment";
import PressCoverage from "./PressCoverage";

function Next() {
  const cards = [
    {
      image: "/assets/image/projects/Group 582.svg",
      title: "Scale to 10,000+ Acres",
      subtitle: "Expanding coverage across multiple states",
    },
    {
      image: "/assets/image/projects/Clip path group.svg",
      title: "ICAR Validation",
      subtitle: "Official validation from agricultural research council",
    },
    {
      image: "/assets/image/projects/Group 583.svg",
      title: "Carbon Tracking",
      subtitle: "Comprehensive environmental impact monitoring",
    },
  ];

  return (
    <section className="relative py-4 md:py-10 w-full flex flex-col justify-center items-center gap-4 sm:gap-6">
      {/* Heading */}
      <div className="flex flex-col gap-6 relative">
        <Image
          src="/assets/image/projects/What's Next_.svg"
          alt="What's Next?"
          width={600}
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
          What's Next?
        </h2>
      </div>

      <div className="max-w-2xl text-center px-4 py-2">
        <p className="text-black text-xs md:text-base leading-relaxed">
          CropGen is scaling to reach 10,000+ acres with ICAR validation and
          comprehensive carbon tracking capabilities to drive sustainable
          agriculture transformation.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative flex flex-wrap justify-center w-full px-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center border border-[#00000026] shadow-xl rounded-2xl gap-4 bg-white p-6 flex-grow sm:flex-grow-0 sm:w-[30%] min-w-[150px]"
          >
            <div className="w-20 h-20 relative">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-md md:text-xl font-bold text-center">
              {card.title}
            </h3>
            <p className="text-xs md:text-sm text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>
      <PressCoverage />
      <SustainableDevelopment />
    </section>
  );
}

export default Next;
