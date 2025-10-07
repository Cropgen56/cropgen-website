import React from "react";

function SustainableDevelopment() {
  const cards = [
    {
      color: "bg-[#FF7171]",
      text: "SDG 2",
      title: "Zero Hunger",
    },
    {
      color: "bg-[#FBDCA6]",
      text: "SDG 12",
      title: "Responsible Consumption",
    },
    {
      color: "bg-[#B6DF94]",
      text: "SDG 13",
      title: "Climate Action",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#000] mb-8">
        Supporting UN Sustainable Development Goals
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 flex flex-col items-center w-80 text-center"
          >
            <div
              className={`w-[170px] h-[170px] rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 ${card.color}`}
            >
              {card.text}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-black">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      <p className="text-center text-sm md:text-base text-black max-w-3xl mx-auto px-4">
        CropGen promotes sustainable agriculture through data-driven insights that optimize resource use and reduce environmental impact.
      </p>
    </div>
  );
}

export default SustainableDevelopment;
