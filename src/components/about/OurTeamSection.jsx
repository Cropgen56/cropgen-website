"use client";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Mahesh Gote",
    designation: "Founder",
    image: "/assets/image/about/maheshgote.jpeg",
  },
  {
    id: 2,
    name: "Abhishek Sumatkar",
    designation: "Agronomist",
    image: "/assets/image/about/abhisheksumatkar.png",
  },
  {
    id: 3,
    name: "Vishal Maske",
    designation: "Full Stack Developer",
    image: "/assets/image/about/vishalmaske.png",
  },
  {
    id: 4,
    name: "Adesh Borkute",
    designation: "UI / UX Designer",
    image: "/assets/image/about/adeshborkute.png",
  },
  {
    id: 5,
    name: "Market Research Intern",
    designation: "Janvi Magar",
    image: "/assets/image/about/janhvimagar.png",
  },
  {
    id: 6,
    name: "Frontend Developer",
    designation: "Vishal Pillai",
    image: "/assets/image/about/vishal-pillai.png",
  },
  {
    id: 7,
    name: "Frontend Developer",
    designation: "Garima Rawat",
    image: "/assets/image/about/garima-rawat.png",
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
                className="w-full h-100 object-cover"
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
