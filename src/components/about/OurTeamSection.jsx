"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Mahesh Gote",
    designation: "Founder",
    image: "/assets/image/about/maheshgote.jpeg",
    linkedin: "https://www.linkedin.com/in/mahesh-gote-106738228/",
  },
  {
    id: 2,
    name: "Abhishek Sumatkar",
    designation: "Agronomist",
    image: "/assets/image/about/abhisheksumatkar.png",
    linkedin: "https://www.linkedin.com/in/abhishek-sumatkar-997271252/",
  },
  {
    id: 3,
    name: "Vishal Maske",
    designation: "Full Stack Developer",
    image: "/assets/image/about/vishalmaske.png",
    linkedin: "https://www.linkedin.com/in/vishalmaske-/",
  },
  {
    id: 4,
    name: "Adesh Borkute",
    designation: "UI / UX Designer",
    image: "/assets/image/about/adeshborkute.png",
    linkedin: "https://www.linkedin.com/in/adesh-borkute-5203811a1/",
  },
  {
    id: 6,
    name: "Vishal Pillai",
    designation: "Frontend Developer",
    image: "/assets/image/about/vishal-pillai.png",
    linkedin: "https://www.linkedin.com/in/vishalpillai21122004/",
  },
  {
    id: 7,
    name: "Garima Rawat",
    designation: "Frontend Developer",
    image: "/assets/image/about/garima-rawat.png",
    linkedin: "https://www.linkedin.com/in/garima-rawat-1a5798221/",
  },
  {
    id: 8,
    name: "Darshan Shirsat",
    designation: "Data Analyst",
    image: "/assets/image/about/darshan.png",
    linkedin: "https://www.linkedin.com/in/darshan-shirsat-5b182b210/",
  },
];

const OurTeamSection = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allImagesLoaded = loadedCount >= teamMembers.length;

  return (
    <section className="px-4 md:px-8 lg:px-12 py-1 sm:py-10 bg-white">
      <div
        className={`flex flex-col gap-8 transition-opacity duration-700 ${
          allImagesLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
      >
        <div className="max-w-6xl text-start relative">
          <Image
            src="/assets/image/about/Our-Team.png"
            alt="Our Team"
            width={400}
            height={200}
            priority
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-0 sm:start-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-[#2AB673] relative z-10">
            Our Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#E1ECF3] relative shadow-lg rounded-xl group transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute -top-2 lg:-top-4 -left-4 w-40 h-40 lg:w-52 lg:h-52 bg-[#2AB67366] rounded-2xl z-0 mx-1"></div>

              <div className="relative overflow-hidden rounded-xl z-10">
                {/* Clickable Image */}
                <div
                  onClick={() => window.open(member.linkedin, "_blank")}
                  className="cursor-pointer relative"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    priority
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    onLoadingComplete={handleImageLoad}
                  />
                </div>
              </div>

              <div className="px-4 py-2 lg:p-4 text-start">
                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
