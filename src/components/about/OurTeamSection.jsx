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
        name: "Janvi Magar ",
        designation: "Market Research Intern",
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
        <section className="flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-1 sm:py-10 bg-white">
            <div className="max-w-6xl text-start relative">
                <Image
                src="/assets/image/about/Our-Team.png"
                alt="Our Team"
                width={400}
                height={200}
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
                        className="bg-[#E1ECF3] relative shadow-lg rounded-xl group transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl" >
                        <div className="absolute -top-2 lg:-top-4 -left-4 w-40 h-40 lg:w-52 lg:h-52 bg-[#2AB67366] rounded-2xl z-0 mx-1"></div>

                        <div className="relative overflow-hidden rounded-xl z-10">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                        <div className="px-4 py-2 lg:p-4 text-start">
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
