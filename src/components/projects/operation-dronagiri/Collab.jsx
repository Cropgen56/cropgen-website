import React from "react";
import Image from "next/image";

function Collab() {
  const cards = [
    { img: "/assets/image/projects/local.svg", title: "Local FPOs" },
    { img: "/assets/image/projects/iit-tirupati.svg", title: "IIT Tirupati" },
    { img: "/assets/image/projects/washim-farmer.svg", title: "Washim Farmers" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col items-center gap-8">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#2AB673]">
        Partnerships & Collaborations
      </h2>

<div className="w-full flex flex-wrap justify-center gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className="flex flex-col items-center flex-[1_1_250px] sm:flex-[1_1_45%] md:flex-[1_1_30%] gap-2 md:gap-4"
    >
      {/* Image container same size for all */}
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-[150px] flex justify-center items-center overflow-hidden">
        <Image
          src={card.img}
          alt={card.title}
          width={card.title === "IIT Tirupati" ? 200 : 150} // IIT wider
          height={150} // uniform height
          className="object-contain"
        />
      </div>
      <h3 className="text-center text-md md:text-lg font-semibold">
        {card.title}
      </h3>
    </div>
  ))}
</div>
    </div>
  );
}

export default Collab;
