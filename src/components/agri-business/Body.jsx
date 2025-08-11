"use client";
import React from "react";
import Image from "next/image";

export default function Body() {
  return (
    <section className="px-6 sm:px-10 relative">
      <Image
        src="/assets/image/agri-business/Why-Cropgen-for.png"
        alt="Why-Cropgen-for-Agribusiness"
        width={400}
        height={200}
        className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[300px] sm:w-[600px] start-0 sm:start-4"
      />
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold leading-tight text-start  mt-4 sm:mt-10 relative z-10">
        <span className="text-[#2AB673]">Why </span>CropGen for <br />{" "}
        Agribusiness?
      </h2>

      <article className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6 ">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/satellite-tractor.webp"
            alt="Crop Health Analytics"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          {[
            {
              title: "AI-Powered Crop Insights",
              description:
                "Unlock real-time analytics for smarter farming decisions.",
            },
            {
              title: "Remote Sensing Technology",
              description:
                "Get accurate farm-level data without expensive sensors.",
            },
            {
              title: "Cost-Effective Solutions",
              description:
                "Leverage scalable, affordable services tailored for agribusinesses.",
            },
            {
              title: "Seamless API Integrations",
              description:
                "Enhance existing farm management systems with CropGen’s data.",
            },
            {
              title: "Sustainable Agriculture Practices",
              description:
                "Monitor greenhouse gases, carbon credits, and sustainability metrics.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm md:text-md text-gray-600 mt-2"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="mt-1"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
