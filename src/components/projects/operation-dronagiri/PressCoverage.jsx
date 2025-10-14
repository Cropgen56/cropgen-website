"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

const pressCards = [
  {
    title: "Participated in",
    img: "/assets/image/projects/startup-conclave.svg",
    subtitle: "Startup Conclave 2025 Gandhinagar",
  },
  {
    title: "Featured under",
    img: "/assets/image/projects/iit-tirupati.svg",
    subtitle: "IIT Tirupati",
  },
  {
    title: "Selected for",
    img: "/assets/image/projects/msme.svg",
    subtitle: "MSME Hackathon 5.0",
  },
  {
    title: "Rouge International, Thailand",
    img: "/assets/image/projects/rouge.svg",
    subtitle: "MoU signed",
  },
  {
    title: "Selected by",
    img: "/assets/image/projects/climate-collective.svg",
    subtitle: "Eureka Hackathon",
  },
  {
    title: "Participated in",
    img: "/assets/image/projects/climate-collective.svg",
    subtitle: "Eureka Hackathon",
  },
];

const PressCoverage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = pressCards.length;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleCards(1); // mobile
      } else if (width < 1024) {
        setVisibleCards(2); // md
      } else {
        setVisibleCards(3); // lg+
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Auto scroll every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setStartIndex((prev) =>
        prev + visibleCards >= totalCards ? 0 : prev + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(autoSlide);
  }, [visibleCards, totalCards]);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? totalCards - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCards >= totalCards ? 0 : prev + 1));
  };

  const displayedCards = pressCards.slice(
    startIndex,
    startIndex + visibleCards
  );

  if (displayedCards.length < visibleCards) {
    displayedCards.push(
      ...pressCards.slice(0, visibleCards - displayedCards.length)
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-lg md:text-xl font-bold text-center text-[#2AB673] mb-10">
        Press Coverage
      </h2>

      <div className="flex items-center justify-center gap-1.5">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] hover:text-white transition-all duration-300"
        >
          <MoveLeft size={28} strokeWidth={1.5} />
        </button>

        {/* Carousel Cards */}
        <motion.div
          key={startIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap md:flex-nowrap gap-4 justify-center"
        >
          {displayedCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl w-[250px] sm:w-[270px] md:w-[300px] flex flex-col items-center text-center p-5 ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-[#000] mb-3 text-base md:text-xl">
                {card.title}
              </h3>
              <div className="w-full h-[120px] flex justify-center items-center mb-3">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="text-sm md:text-base font-bold text-black">
                {card.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-300"
        >
          <MoveRight size={28} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default PressCoverage;
