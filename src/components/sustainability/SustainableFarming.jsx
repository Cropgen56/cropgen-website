import Image from "next/image";

const SustainableFarming = () => {
  const features = [
    {
      icon: "/assets/image/sustainability/emporing.webp",
      title: (
        <>
          Empowering <br />
          100,000+ Farmers <br />
          by 2025
        </>
      ),
      description:
        "We're on a mission to transform agriculture by helping farmers adopt eco-friendly practices, ensuring better yields and a greener planet.",
    },
    {
      icon: "/assets/image/sustainability/earn-sustainability.webp",
      title: (
        <>
          Earn from <br />
          Sustainability
        </>
      ),
      description:
        "Our AI-powered carbon credit system allows farmers to monetize their eco-friendly efforts, turning sustainability into a source of income.",
    },
    {
      icon: "/assets/image/sustainability/collaboration.webp",
      title: (
        <>
          Collaborating for
          <br /> Impact
        </>
      ),
      description:
        "Partnering with government bodies, NGOs, and agribusinesses, we are scaling sustainable farming worldwide.",
    },
  ];

  return (
    <section className="px-4 sm:px-10 lg:px-20 py-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-start">
        <span className="text-[#2AB673]">The Future of Sustainable</span>
        <br />
        Farming with CropGen
      </h2>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3  mx-auto gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-10 text-center hover:shadow-lg transition"
          >
            {" "}
            <div className="flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={150}
                height={150}
              />
            </div>
            <h3 className="text-lg font-semibold text-[#2AB673] mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SustainableFarming;
