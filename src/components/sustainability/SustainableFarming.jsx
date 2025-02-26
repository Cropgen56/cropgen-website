"use client";
import Image from "next/image";

const SustainableFarming = () => {
  const features = [
    {
      icon: "/assets/image/sustainability/emporing.webp",
      title: "Empowering 100,000+ Farmers by 2025",
      description:
        "We're on a mission to transform agriculture by helping farmers adopt eco-friendly practices, ensuring better yields and a greener planet.",
    },
    {
      icon: "/assets/image/sustainability/earn-sustainability.webp",
      title: "Earn from Sustainability",
      description:
        "Our AI-powered carbon credit system allows farmers to monetize their eco-friendly efforts, turning sustainability into a source of income.",
    },
    {
      icon: "/assets/image/sustainability/collaboration.webp",
      title: "Collaborating for Impact",
      description:
        "Partnering with government bodies, NGOs, and agribusinesses, we are scaling sustainable farming worldwide.",
    },
  ];

  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-start leading-tight">
        <span className="text-[#2AB673]">The Future of Sustainable</span>
        <br />
        Farming with CropGen
      </h2>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={120}
                height={120}
                priority={index === 0} // Optimize the first image load
                className="object-contain"
              />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-[#2AB673] mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainableFarming;
