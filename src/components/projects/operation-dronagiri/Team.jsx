import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const teamMembers = [
  { id: 1, name: "Rushikesh Landage", role: "Field Executive", img: "/assets/image/about/Rushikesh Landage- field executive.png" },
  { id: 2, name: "Ganesh Gawande", role: "Field Executive", img: "/assets/image/about/Ganesh Gawande - field executive.png" },
  { id: 5, name: "Vishal Maske", role: "Full Stack Developer", img: "/assets/image/about/vishalmaske.png" },
  { id: 7, name: "Mahesh Gote", role: "Founder", img: "/assets/image/about/maheshgote.jpeg" },
  { id: 3, name: "Garima Rawat", role: "Frontend Developer", img: "/assets/image/about/garima-rawat.png" },
  { id: 4, name: "Vishal Pillai", role: "Frontend Developer", img: "/assets/image/about/vishal-pillai.png" },
  { id: 6, name: "Abhishek Sumatkar", role: "Agronomist", img: "/assets/image/about/abhisheksumatkar.png" },
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const scaleMiddle = 1.3;

  // Only run client-side
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const radius = windowWidth / 3 || 320;

  return (
    <section className="w-full flex flex-col justify-center items-center py-10 relative">
      {/* Green background */}
      <Image
        src="/assets/image/projects/green-bg.svg"
        alt="Green Wave"
        fill
        className="absolute top-0 left-0 w-full h-full object-contain -z-10"
      />

      {/* Heading */}
      <div className="flex flex-col gap-6 relative mb-12">
        <Image
          src="/assets/image/projects/Meet-the-Team.svg"
          alt="Meet the Team"
          width={600}
          height={300}
          className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] left-1/2 -translate-x-1/2"
        />
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#2AB673] z-10 relative">
          Meet the Team
        </h2>
      </div>

      {mounted && (
        <div className="relative w-full flex justify-center items-end mb-10 h-[420px]">
          {teamMembers.map((member, index) => {
            const total = teamMembers.length - 1;
            const angle = ((140 / total) * index + 20) * (Math.PI / 180);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const flippedY = -y;
            const isMiddle = index === activeIndex;

            return (
              <div
                key={member.id}
                className="absolute rounded-full border-2 overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  left: `calc(50% + ${x}px)`,
                  bottom: `${flippedY + 500}px`,
                  width: isMiddle ? 120 * scaleMiddle : 120,
                  height: isMiddle ? 120 * scaleMiddle : 120,
                  borderColor: isMiddle ? "#2AB673" : "transparent",
                  zIndex: isMiddle ? 10 : 5,
                  transform: `translateX(-50%) scale(${isMiddle ? scaleMiddle : 1})`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={170}
                  height={170}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="relative flex items-center gap-4">
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
          }
          className="p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] transition-all ease-in-out duration-300"
        >
          <MoveLeft size={24} strokeWidth={1} />
        </button>

        <div className="border border-[#28C878] bg-white rounded-lg p-6 w-80 flex flex-col items-center">
          <p className="font-bold text-[#2AB673] text-lg sm:text-xl">
            {teamMembers[activeIndex].name}
          </p>
          <p className="text-sm sm:text-base">{teamMembers[activeIndex].role}</p>
        </div>

        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
          }
          className="p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition-all ease-in-out duration-300"
        >
          <MoveRight size={24} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
}

export default Team;
