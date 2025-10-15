import React from "react";
import Image from "next/image";

function Collab() {
  const cards = [
    { img: "/assets/image/projects/local.svg", title: "Local FPOs" },
    { img: "/assets/image/projects/iit-tirupati.svg", title: "IIT Tirupati" },
    { img: "/assets/image/projects/washim-farmer.svg", title: "Washim Farmers" },
    {
      img: "/assets/image/projects/climate-collective.svg",
      title: "AI for Climate Accelerator Program",
    },
    {
      img: "/assets/image/projects/rouge.svg",
      title: "Rouge International, Thailand",
    },
    {
      img: "/assets/image/projects/eureka.jpg",
      title: "Eureka - ASIA Program",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col items-center gap-8">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#2AB673]">
        Partnerships & Collaborations
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3"
          >
            {/* Image */}
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] flex justify-center items-center overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-medium text-black">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collab;
