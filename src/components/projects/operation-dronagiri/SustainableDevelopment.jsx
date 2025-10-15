import React from "react";
import Image from "next/image";

function SustainableDevelopment() {
  const cards = [
    {
      img: "/assets/image/projects/zero-hunger.png",
      title: "Zero Hunger",
    },
    {
      img: "/assets/image/projects/responsible-consumption.png",
      title: "Responsible Consumption",
    },
    {
      img: "/assets/image/projects/climate-action.png",
      title: "Climate Action",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 md:mt-10 px-4">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#000] mb-4 sm:mb-8">
        Supporting UN Sustainable Development Goals
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 place-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-3 sm:p-6 flex flex-col items-center w-full max-w-[20rem] text-center"
          >
            <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-lg overflow-hidden mb-2 sm:mb-4">
              <Image
                src={card.img}
                alt={card.title}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-black">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      <p className="text-center text-sm md:text-base text-black max-w-3xl mx-auto px-4">
        CropGen promotes sustainable agriculture through data-driven insights
        that optimize resource use and reduce environmental impact.
      </p>
    </div>
  );
}

export default SustainableDevelopment;
