"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const teamMembers = [
  { id: 1, name: "Ganesh Gawande", role: "Field Executive", img: "/assets/image/about/Ganesh Gawande - field executive.png" },
  { id: 2, name: "Abhishek Sumatkar", role: "Agronomist", img: "/assets/image/about/abhisheksumatkar.png" },
  { id: 3, name: "Vishal Maske", role: "Full Stack Developer", img: "/assets/image/about/vishalmaske.png" },
  { id: 4, name: "Mahesh Gote", role: "Founder", img: "/assets/image/about/maheshgote.jpeg" },
  { id: 5, name: "Vishal Pillai", role: "Frontend Developer", img: "/assets/image/about/vishal-pillai.png" },
  { id: 6, name: "Garima Rawat", role: "Frontend Developer", img: "/assets/image/about/garima-rawat.png" },
  { id: 7, name: "Rushikesh Landage", role: "Field Executive", img: "/assets/image/about/Rushikesh Landage- field executive.png" },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleNext = () =>
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));

  const isLargeScreen = windowWidth >= 1024;
  const isSmallScreen = windowWidth < 640;

  const activeSize = isLargeScreen ? 170 : 120;
  const normalSize = isLargeScreen ? 130 : 90;
  const visibleOffset = isSmallScreen ? 1 : 2;

  return (
    <section className="w-full flex flex-col justify-center items-center py-8 relative overflow-hidden">
      {/* background */}
      <Image
        src="/assets/image/projects/green-bg.svg"
        alt="Green Wave"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-contain -z-10 opacity-80"
      />

      {/* heading */}
      <div className="flex flex-col gap-6 relative mb-10 text-center">
        <Image
          src="/assets/image/projects/Meet-the-Team.svg"
          alt="Meet the Team"
          width={600}
          priority
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#2AB673] z-10 relative">
          Meet the Team
        </h2>
      </div>

      {/* team layout */}
      {isClient && (
        <div className="relative w-full max-w-5xl h-[130px] md:h-[180px] lg:h-[280px] flex justify-center items-end mb-8 md:mb-12">
          {teamMembers.map((member, index) => {
            const total = teamMembers.length;
            let offset = (index - activeIndex + total) % total;

            // Normalize for symmetrical display
            if (offset > total / 2) offset -= total;

            if (Math.abs(offset) > visibleOffset) return null;

            const isActive = index === activeIndex;
            const imgSize = isActive ? activeSize : normalSize;
            let positionStyles = {};

            // Center
            if (offset === 0) {
              positionStyles = {
                bottom: "0%",
                left: "50%",
                transform: "translateX(-50%)",
              };
            }
            // Right side
            else if (offset === 1) {
              positionStyles = {
                bottom: "15%",
                left: isSmallScreen ? "82%" : "70%", 
                transform: "translateX(-50%)",
              };
            } else if (offset === 2) {
              positionStyles = {
                bottom: "30%",
                left: "85%",
                transform: "translateX(-50%)",
              };
            }
            // Left side
            else if (offset === -1) {
              positionStyles = {
                bottom: "15%",
                left: isSmallScreen ? "18%" : "30%", 
                transform: "translateX(-50%)",
              };
            } else if (offset === -2) {
              positionStyles = {
                bottom: "30%",
                left: "15%",
                transform: "translateX(-50%)",
              };
            }

            return (
              <div
                key={member.id}
                className={`absolute rounded-full border overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive
                    ? "border-[#2AB673] scale-125 z-20 border-4"
                    : "border-[#989898] scale-100 z-10"
                }`}
                style={{
                  width: imgSize,
                  height: imgSize,
                  ...positionStyles,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  priority
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="relative flex items-center gap-2 sm:gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-[#E4FFF1] hover:bg-[#2AB673] hover:text-white transition-all duration-500 ease-in-out"
        >
          <MoveLeft size={24} strokeWidth={1.5} />
        </button>

        <div className="border border-[#28C878] bg-white rounded-xl p-6 w-60 sm:w-80 flex flex-col items-center text-center shadow-md">
          <p className="font-bold text-[#2AB673] text-lg sm:text-xl mb-1">
            {teamMembers[activeIndex].name}
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            {teamMembers[activeIndex].role}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all duration-500 ease-in-out"
        >
          <MoveRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
