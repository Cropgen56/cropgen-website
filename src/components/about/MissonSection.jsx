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
    <section className="px-4 md:px-8 lg:px-12 py-4 md:py-8 bg-white">
      {/* Stats Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 text-center border-b-4 border-gray-200 pb-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="flex items-center justify-between">
              <Image
                src={stat.icon}
                width={60}
                height={60}
                alt="icon"
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              />{" "}
              <p className="text-md md:text-xl font-bold ">{counts[index]}+</p>
            </div>
            <p className="text-black text-sm sm:font-semibold pt-1">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:px-4 md:py-12 max-w-7xl mx-auto ">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px] ">
          <Image
            src="/assets/image/about/mission-image.webp"
            alt="Farmers in Field"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Text Content */}
        <article className="w-full md:w-1/2 md:pl-6 flex flex-col items-center md:items-start gap-2 relative">
          <Image
            src="/assets/image/about/Our-Mission.png"
            alt="Our Mission"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-0 sm:start-4"
          />
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2AB673] z-10">
            Our Mission
          </h2>
          <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
            The story of how CropGen <br /> company was founded
          </h3>
          <p className="text-gray-700 mt-4 text-sm md:text-base text-center md:text-left leading-relaxed">
            Begins with a vision to transform agriculture. A group of passionate
            agronomists and tech innovators saw the urgent need for sustainable
            farming. They developed AI-powered tools to help farmers adopt
            eco-friendly practices, improve yields, and earn additional profits
            through carbon credits. CropGen nurtured a resilient agricultural
            landscape, ensuring a greener, more profitable future for
            agriculture.
          </p>
          <button className="w-[50%] sm:w-auto px-6 py-3 bg-[#2AB673] text-white rounded-full text-sm font-medium hover:bg-[#2AB673] transition-all ease-in-out duration-400">
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default MissionSection;
