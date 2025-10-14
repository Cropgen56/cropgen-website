import Image from "next/image";
import React from "react";
import PilotStats from "./PilotStats";

function Pilot() {
    const cards = [
        {
            img: "/assets/image/projects/Field-Implementation.svg",
            title: "Field Implementation",
            subtitle: "Real-time monitoring across diverse crop types",
        },
        {
            img: "/assets/image/projects/NDVI-Analysis.svg",
            title: "NDVI Analysis",
            subtitle: "Satellite-based vegetation health monitoring",
        },
        {
            img: "/assets/image/projects/Advisory-System.svg",
            title: "Advisory System",
            subtitle: "AI-powered recommendations for farmers",
        },
    ];

    return (
        <section className="py-4 md:py-10 w-full flex flex-col justify-center items-center gap-3 sm:gap-6">
            <div className="flex flex-col gap-6 relative">
                <Image
                    src="/assets/image/projects/Pilot at Washim, Maharashtra.svg"
                    alt="Pilot at Washim, Maharashtra"
                    width={600}
                    height={300}
                    className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
                />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
                    Pilot at Washim, Maharashtra
                </h2>
            </div>

            <div className="max-w-2xl text-center px-4 py-2">
                <p className="text-black text-xs md:text-base leading-relaxed">
                    Our pilot implementation at IIT Tirupati Accelerator validates
                    CropGen's effectiveness across 5 different crops using comprehensive
                    datasets from Sentinel, NASA POWER, ERA5, and SoilGrids.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:mt-6 px-4 w-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 border border-[#00000026] shadow-xl rounded-2xl sm:gap-4 bg-white px-2 pt-2 pb-4 w-full"
                    >
                        <div className="relative bg-white rounded-2xl rounded-b-none w-full h-[170px] flex items-center justify-center overflow-hidden">
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-md md:text-xl text-[#28C878] font-bold text-center">
                            {card.title}
                        </h3>
                        <p className="text-xs md:text-md text-black text-center px-4">
                            {card.subtitle}
                        </p>
                    </div>
                ))}
            </div>

            <PilotStats />
        </section>
    );
}

export default Pilot;
