"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    const features = [
        { src: "/assets/image/home/crop-monitoring.png", label: "Crop Monitoring" },
        { src: "/assets/image/home/agri-business.png", label: "Agribusinesses" },
        { src: "/assets/image/home/api-integration.png", label: "API Integration" },
        { src: "/assets/image/home/farm.png", label: "Farmers & Stakeholders" },
    ];

    return (
            <section className="relative flex flex-col md:flex-row justify-between bg-white pb-7 md:pb-10">
                {/* Left Content with Animation */}
                <motion.article
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 text-center lg:text-left space-y-3 pt-8 px-4 md:px-8" >
                    
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        AI- Powered Satellite <br />
                        <span>Crop Monitoring & </span> Advisory System for Precision
                        Agriculture
                    </h1>

                    <p className="text-gray-700 text-sm md:text-base">
                        CropGen uses AI , remote sensing and satellite crop monitoring to
                        deliver real-time , precision agriculture solution for Indian
                        farmers, agribusinesses , and researchers.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 bg-[#00AA64] text-white font-medium rounded-full hover:bg-[#008a50] transition" >    
                        <a href="https://app.cropgenapp.com/login" target="_blank"> Get Started </a>
                    </motion.button>

                    {/* Feature Icons */}
                    <div className="mt-5 grid grid-cols-2 gap-2 lg:gap-4 text-green-600">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="flex items-center gap-1" >
                                <div className="p-1">
                                    <Image
                                        src={feature.src}
                                        width={35}
                                        height={35}
                                        alt={feature.label}
                                    />
                                </div>
                                <span className="text-gray-700 font-medium text-xs md:text-sm">
                                    {feature.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.article>

                {/* Right Side Content with Infinite Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative md:w-1/2 flex justify-start items-center mt-8 md:mt-0 px-6 md:px-0" >
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/assets/image/home/line.png')]  bg-cover bg-center bg-no-repeat opacity-100 h-[100%] w-[100%] z-[1] animate-[moveBg_10s_linear_infinite]" />

                    {/* Content Wrapper */}
                    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl z-10 flex justify-start">
                        <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}>
                        <Image
                            src="/assets/image/home/dashboard.png"
                            alt="Dashboard of satellite crop monitoring and AI-based advisory"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                        />
                        </motion.div>

                        {/* Overlapping Small Images with Infinite Animation */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-14 right-0 sm:top-20 sm:right-[-20px] w-1/3 md:w-1/3" >
                            <Image
                                src="/assets/image/home/doughnut.png"
                                alt="Agricultural Data Chart"
                                width={200}
                                height={120}
                                className="w-full"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 right-0 sm:bottom-[10px] sm:right-[30px] w-1/2 md:w-1/2" >
                            <Image
                                src="/assets/image/home/soil-chart.png"
                                alt="Soil Analysis Graph"
                                width={300}
                                height={300}
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
    );
};

export default HeroSection;
