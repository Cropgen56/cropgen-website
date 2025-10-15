import React from "react";

function PilotStats() {
    const cards = [
        { value: "50", title: "Acres Under Pilot" },
        { value: "200+", title: "Farmers Onboarded"},
        { value: "85%", title: "Advisory Accuracy"},
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-16 py-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center gap-4 bg-white p-4"
                >
                    <div
                        className="rounded-full bg-[#2AB673] flex items-center justify-center w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] text-white text-2xl sm:text-4xl font-bold">
                        {card.value}
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold text-center">{card.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default PilotStats;
