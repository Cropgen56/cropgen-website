"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ValuesSectionSkeleton from "../skeleton-loaders/home/ValuesSectionSkeleton";

const ValuesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // List of all images to preload
  const imagesToLoad = [
    "/assets/image/home/our-Values.png",
    "/assets/image/home/weather-card.png",
    "/assets/image/home/insights.png",
    "/assets/image/home/report-cards.png",
    "/assets/image/blog/background.webp",
  ];

  useEffect(() => {
    let loaded = 0;
    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        if (loaded === imagesToLoad.length) {
          setTimeout(() => setIsLoading(false), 200); // smooth fade
        }
      };
    });
  }, []);

  if (isLoading) return <ValuesSectionSkeleton />;

  return (
    <section className="relative flex flex-col gap-12 bg-white py-5 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Values Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-4 px-4 md:px-0 relative">
          <Image
            src="/assets/image/home/our-Values.png"
            alt="our-Values"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-0 sm:start-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 z-10">
            Our <span className="text-green-600">Values</span>
          </h2>
          <ul className=" text-gray-600 text-sm ml-2 md:ml-4 md:text-lg flex flex-col gap-2">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <strong className="text-gray-900">Innovation:</strong> Committed to continuous innovation and pioneering solutions...
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <strong className="text-gray-900">Empowerment:</strong> Providing farmers with the tools and knowledge they need...
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <strong className="text-gray-900">Collaboration:</strong> Foster collaboration and partnerships across the agricultural value chain...
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <strong className="text-gray-900">Integrity:</strong> Upholding the highest standards of integrity and transparency...
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <strong className="text-gray-900">Sustainability:</strong> Dedicated to promoting sustainable farming practices...
            </motion.li>
          </ul>
        </div>

        {/* Right Content - Graphics */}
        <figure className="relative flex flex-row items-center justify-around">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="h-full">
            <div className="float-end">
              <Image
                src="/assets/image/home/weather-card.png"
                alt="Report"
                width={150}
                height={100}
                className="pb-0 md:pb-20"
              />
            </div>
            <Image
              src="/assets/image/home/insights.png"
              alt="Report"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
            <Image
              src="/assets/image/home/report-cards.png"
              alt="Report"
              width={600}
              height={600}
              className="ps-0"
            />
          </motion.div>
        </figure>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div
          className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-white shadow-lg rounded-lg p-3 md:p-4"
          style={{
            backgroundImage: "url('/assets/image/blog/background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-md md:text-xl font-semibold text-gray-900 text-center md:text-center">
            We will bring your Farm to the next level.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=" bg-green-500 text-white px-6 py-2 rounded-full text-sm md:text-lg font-semibold shadow-md hover:bg-green-600 transition-all ease-in-out duration-400"
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
