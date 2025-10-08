"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  "/assets/image/projects/Group 589.svg",
  "/assets/image/projects/Group 590.svg",
  "/assets/image/projects/Group 591.svg",
  "/assets/image/projects/Group 592.svg",
  "/assets/image/projects/Group 593.svg",
  "/assets/image/projects/Group 594.svg",
  "/assets/image/projects/Group 595.svg",
  "/assets/image/projects/Group 596.svg",
  "/assets/image/projects/Group 597.svg",
];

const FieldImplementationGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = galleryImages.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const getImageIndex = (offset) =>
    (activeIndex + offset + totalImages) % totalImages;

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#2AB673] mb-10">
        Field Implementation xGallery
      </h2>

      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-3">
        <button
          onClick={handlePrev}
          className="hidden sm:flex p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] transition-all duration-300 outline-none"
        >
          <MoveLeft size={28} strokeWidth={1.5} />
        </button>

        {/* Previous Thumbnail (Desktop Only) */}
        <motion.div
          key={`prev-${getImageIndex(-1)}`}
          layout
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 0.8, scale: 1 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setActiveIndex(getImageIndex(-1))}
          className="hidden sm:block relative cursor-pointer aspect-[16/9] w-[calc(48rem-4rem)] max-w-[calc(100%-4rem)] rounded-xl overflow-hidden shadow-md ring-1 ring-gray-300"
        >
          <Image
            src={galleryImages[getImageIndex(-1)]}
            alt="Previous Thumbnail"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/60 rounded-xl" />
        </motion.div>

        {/* Active Image with Mobile Arrows Overlay */}
        <motion.div
          key={`active-${activeIndex}`}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/9] w-[48rem] max-w-full rounded-xl overflow-hidden ring-4 ring-[#2AB673] shadow-xl z-10"
        >
          <Image
            src={galleryImages[activeIndex]}
            alt={`Field Implementation ${activeIndex + 1}`}
            fill
            className="object-cover rounded-xl"
          />

          {/* Mobile-only Prev Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 sm:hidden z-20 p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] transition-all duration-300 outline-none"
          >
            <MoveLeft size={24} strokeWidth={1.5} />
          </button>

          {/* Mobile-only Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 sm:hidden z-20 p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-300 outline-none"
          >
            <MoveRight size={24} strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Next Thumbnail (Desktop Only) */}
        <motion.div
          key={`next-${getImageIndex(1)}`}
          layout
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 0.8, scale: 1 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setActiveIndex(getImageIndex(1))}
          className="hidden sm:block relative cursor-pointer aspect-[16/9] w-[calc(48rem-4rem)] max-w-[calc(100%-4rem)] rounded-xl overflow-hidden shadow-md ring-1 ring-gray-300"
        >
          <Image
            src={galleryImages[getImageIndex(1)]}
            alt="Next Thumbnail"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/60 rounded-xl" />
        </motion.div>

        {/* Next Button (Desktop Only) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-300 outline-none"
        >
          <MoveRight size={28} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default FieldImplementationGallery;
