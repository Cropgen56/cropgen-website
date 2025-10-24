import Image from "next/image";
import React from "react";
import PilotStats from "./PilotStats";
import { motion } from "framer-motion";

function Pilot() {
    const cards = [
        {
            img: "/assets/image/projects/Field-Implementation.svg",
            title: "Field Validation Visit",
            subtitle: "Farmers + CropGen Team",
        },
        {
            img: "/assets/image/projects/NDVI-Analysis.svg",
            title: "NDVI Map",
            subtitle: "Washim Pilot Fields",
        },
        {
            img: "/assets/image/projects/true-color.svg",
            title: "True Color Satellite View",
            subtitle: "Washim",
        },
        {
            img: "/assets/image/projects/Advisory-System.svg",
            title: "CropGen Dashboard",
            subtitle: "AI Advisory Output",
        },
    ];

    // Animation variants for fade in
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="py-4 md:py-10 w-full flex flex-col justify-center items-center gap-3 sm:gap-6 overflow-hidden">
            <div className="flex flex-col gap-6 relative">
                <Image
                    src="/assets/image/projects/Pilot at Washim, Maharashtra.svg"
                    alt="Pilot at Washim, Maharashtra"
                    width={600}
                    height={300}
                    priority
                    className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative"
                >
                    Pilot at Washim, Maharashtra
                </motion.h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-2xl text-center px-4 py-2"
            >
                <p className="text-black text-xs md:text-base leading-relaxed">
                    Our pilot implementation at IIT Tirupati Accelerator validates
                    CropGen's effectiveness across 5 different crops using comprehensive
                    datasets from Sentinel, NASA POWER, ERA5, and SoilGrids.
                </p>
            </motion.div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:mt-6 px-4 w-full">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex flex-col items-center gap-2 border border-[#00000026] shadow-xl rounded-2xl sm:gap-4 bg-white px-2 pt-2 pb-4 w-full"
                    >
                        <div className="relative bg-white rounded-2xl rounded-b-none w-full h-[170px] flex items-center justify-center overflow-hidden">
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-base md:text-xl text-[#28C878] font-bold text-center">
                            {card.title}
                        </h3>
                        <p className="text-xs md:text-base text-black text-center px-4">
                            {card.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full"
            >
                <PilotStats />
            </motion.div>
        </section>
    );
}

export default Pilot;
