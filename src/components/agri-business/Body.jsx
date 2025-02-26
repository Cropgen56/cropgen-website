"use client";
import React from "react";
import Image from "next/image";

export default function Body() {
  return (
    <div className="px-2 sm:px-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-start  mt-4 sm:mt-10">
        <span className="text-[#2AB673]">Why </span>CropGen for <br />{" "}
        Agribusiness?
      </h2>

      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-6 ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/agri-business/satellite-tractor.webp"
            alt="Crop Health Analytics"
            width={400}
            height={300}
            className="rounded-md object-contain"
          />
        </div>

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
              className="flex items-start gap-2 text-sm text-gray-600 mt-2"
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
      </div>
    </div>
  );
}
