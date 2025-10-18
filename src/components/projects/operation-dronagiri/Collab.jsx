import React from "react";
import Image from "next/image";

function Collab() {
  const cards = [
    { img: "/assets/image/projects/local.svg", title: "Local FPOs" },
    { img: "/assets/image/projects/iit-tirupati.svg", title: "IIT Tirupati" },
    {
      img: "/assets/image/projects/washim-farmer.svg",
      title: "Washim Farmers",
    },
    {
      img: "/assets/image/projects/climate-collective.svg",
      title: "Selected For, AI for Climate Accelerator Program",
    },
    {
      img: "/assets/image/projects/rouge.svg",
      title: "Rouge International Thailand, MoU Signed",
    },
    {
      img: "/assets/image/projects/eureka.jpg",
      title: "Participated In, Eureka ASIA program",
    },
    {
      img: "/assets/image/projects/cropydeals.jpg",
      title: "Service Partner, CropyDeals",
    },
    {
      img: "/assets/image/projects/startup-conclave.svg",
      title: "Participated in, Startup Conclave 2025 Gandhinagar",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-[#2AB673]">
        Partnerships & Collaborations
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-2 sm:gap-3 lg:gap-4 w-full max-w-[140px] sm:max-w-[180px] lg:max-w-[200px]"
          >
            {/* Image */}
            <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex justify-center items-center overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black leading-tight px-2">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collab;
