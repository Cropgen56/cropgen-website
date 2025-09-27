"use client";
import { useState } from "react";
import Image from "next/image";

const OurStorySection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-4 md:py-8 bg-white">

      <div
        className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
      >
        {/* Text Content */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 lg:w-[45%] text-center md:text-left relative">
          <Image
            src="/assets/image/about/Our-Story.png"
            alt="Our Story"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-0 sm:start-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-[#2AB673] z-10">
            Our Story
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            CropGen embarked on a mission to revolutionize agriculture by making
            carbon sequestration a farmer&apos;s practice. With a vision of
            sustainability, prosperity, and longevity for future generations,
            the company aims to transform 1M+ hectares into regenerative farms.
            Recognizing CropGen&apos;s advanced solutions, companies worldwide
            partner with us, enabling carbon credit trade and international land
            expansion. This approach not only supports eco-friendly methods but
            also increases farmer profitability. As soil carbon sequestration
            accelerates, future-fit AI, CropGen now holds a unified ecosystem to
            advance toward sustainability.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src="/assets/image/about/story-image.webp"
            alt="Farmers in Field"
            fill
            className="object-contain"
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
