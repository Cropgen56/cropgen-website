"use client";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Name",
    designation: "Designation",
    image: "/assets/image/about/team-member.webp",
  },
  {
    id: 2,
    name: "Name",
    designation: "Designation",
    image: "/assets/image/about/team-member.webp",
  },
  {
    id: 3,
    name: "Name",
    designation: "Designation",
    image: "/assets/image/about/team-member.webp",
  },
  {
    id: 4,
    name: "Name",
    designation: "Designation",
    image: "/assets/image/about/team-member.webp",
  },
];

const OurTeamSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-1 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-2xl md:text-4xl font-bold text-[#2AB673]">
          Our Team
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="shadow-lg rounded-xl overflow-hidden">
            <div className="relative">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4 text-start">
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
