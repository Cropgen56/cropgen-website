"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import AgricultureTechSkeleton from "../skeleton-loaders/home/AgricultureTechSkeleton";

export default function AgricultureTechSection() {
  const [isLoading, setIsLoading] = useState(true);

  const imagesToLoad = [
    "/assets/image/home/Enhancing-Agriculture-with-Technology.png",
    "/assets/image/home/technology.png",
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


  return (
    <section className="relative p-6 md:py-12 px-6 bg-white flex flex-col gap-6 md:gap-8 items-center">
      
      <Image
        src="/assets/image/home/Enhancing-Agriculture-with-Technology.png"
        alt="Enhancing-Agriculture-with-Technology"
        width={400}
        height={200}
        priority
        className="absolute left-1/2 -translate-x-1/2 z-0 opacity-80 -top-2 w-[400px] sm:w-[750px] md:w-[1000px]"
      />

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold text-center z-10"
      >
        <span className="text-green-500">Enhancing</span> Agriculture with Technology
      </motion.h2>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/image/home/technology.png"
            width={1000}
            height={1000}
            priority
            alt="agriculture technology image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
