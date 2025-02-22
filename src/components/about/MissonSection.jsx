"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  {
    id: 1,
    icon: "/assets/image/about/people.webp",
    target: 500,
    text: "Farmers join with our company",
  },
  {
    id: 2,
    icon: "/assets/image/about/map.webp",
    target: 1000,
    text: "Hector Are Mapped",
  },
  {
    id: 3,
    icon: "/assets/image/about/world.webp",
    target: 4,
    text: `Available in Countries`,
  },
];

const MissionSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].target
            ? count + Math.ceil(stats[index].target / 50)
            : stats[index].target
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 bg-white">
      {/* Stats Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-center mb-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="flex items-center justify-between">
              <Image src={stat.icon} width={60} height={60} alt="icon" />{" "}
              <p className="text-xl font-bold ">{counts[index]}+</p>
            </div>
            <p className="text-black text-sm sm:font-semibold pt-1 w-1/2">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center p-4 max-w-7xl mx-auto ">
        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-[400px] ">
          <Image
            src="/assets/image/about/mission-image.webp"
            alt="Farmers in Field"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2AB673]">
            Our Mission
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            The story of how CropGen <br /> company was founded
          </h3>
          <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
            Begins with a vision to transform agriculture. A group of passionate
            agronomists and tech innovators saw the urgent need for sustainable
            farming. They developed AI-powered tools to help farmers adopt
            eco-friendly practices, improve yields, and earn additional profits
            through carbon credits. CropGen nurtured a resilient agricultural
            landscape, ensuring a greener, more profitable future for
            agriculture.
          </p>
          <button className="mt-6 w-[50%] sm:w-auto px-6 py-3 bg-[#2AB673] text-white rounded-full text-sm font-medium hover:bg-[#2AB673] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
