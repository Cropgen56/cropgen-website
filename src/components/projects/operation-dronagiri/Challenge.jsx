import Image from "next/image";
import React from "react";
import ProblemSolution from "./ProblemSolution";

function Challenge() {
    const cards = [
        {
            img: "/assets/image/projects/water-drop.svg",
            title: "Water Scarcity",
            subtitle: "Inefficient irrigation systems",
        },
        {
            img: "/assets/image/projects/plant-fill.svg",
            title: "Soil Degradation",
            subtitle: "Poor soil health monitoring",
        },
        {
            img: "/assets/image/projects/test-tube.svg",
            title: "Fertilizer Overuse",
            subtitle: "Excessive chemical application",
        },
        {
            img: "/assets/image/projects/weather-hail.svg",
            title: "Weather Uncertainty",
            subtitle: "Unpredictable climate patterns",
        },
    ];

    return (
        <section className="py-4 md:py-10 w-full flex flex-col justify-center items-center gap-3 sm:gap-6">
            <div className="flex flex-col gap-6 relative">
                <Image
                    src="/assets/image/projects/The-Challenge-We're-Solving.svg"
                    alt="The Challenge We're Solving"
                    width={600}
                    height={300}
                    className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
                />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
                    The Challenge We're Solving
                </h2>
            </div>
            <div className="max-w-2xl text-center px-4 py-2">
                <p className="text-black text-xs md:text-base leading-relaxed">
                    Traditional farming faces critical challenges: <span className="font-bold">inefficient resource
                        utilization, excessive fertilizer use leading to environmental
                        degradation, unpredictable weather patterns, and declining
                        productivity. </span>Farmers need data-driven insights to make informed
                    decisions and optimize their agricultural practices.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:mt-6 px-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 sm:gap-4 bg-white p-2 md:p-4"
                    >
                        <div className="bg-[#2AB673] rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center">
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={80}
                                height={80}
                                className="object-contain w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
                            />
                        </div>
                        <h3 className="text-sm sm:text-xl font-bold text-center">{card.title}</h3>
                        <p className="text-[10px] sm:text-md font-bold text-center">{card.subtitle}</p>
                    </div>
                ))}
            </div>

            <ProblemSolution />
        </section>
    );
}

export default Challenge;
