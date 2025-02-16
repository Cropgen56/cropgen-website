import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2AB673]">
            Our Story
          </h2>
          <p className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
            CropGen embarked on a mission to revolutionize agriculture by making
            carbon sequestration a farmer’s practice. With a vision of
            sustainability, prosperity, and longevity for future generations,
            the company aims to transform 1M+ hectares into regenerative farms.
            Recognizing CropGen’s advanced solutions, companies worldwide
            partner with us, enabling carbon credit trade and international land
            expansion. This approach not only supports eco-friendly methods but
            also increases farmer profitability. As soil carbon sequestration
            accelerates, future-fit AI, CropGen now holds a unified ecosystem to
            advance toward sustainability.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-[400px] ">
          <Image
            src="/assets/image/about/story-image.webp"
            alt="Farmers in Field"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
