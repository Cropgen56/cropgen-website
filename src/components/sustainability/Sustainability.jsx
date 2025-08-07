"use client";
import React from "react";
import Image from "next/image";

export default function Su() {
  return (
    <div className="px-6 sm:px-10 mt-8 md:mt-2">
      <div className="relative w-full md:w-1/2">
        {" "}
        <Image
          src="/assets/image/sustainability/sustainability-text.webp"
          alt="Crop Health Analytics"
          width={400}
          height={200}
          className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-6 sm:start-10"
        />
        <h2 className="relative text-2xl sm:text-4xl font-bold leading-tight text-start mt-4 sm:mt-14 z-10">
          <span className="text-[#2AB673]">Sustainability </span> at <br />{" "}
          CropGen
        </h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-start gap-4 md:gap-8 mt-3 md:mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-start">
          <Image
            src="/assets/image/sustainability/sustainability-image.webp"
            alt="Crop Health Analytics"
            width={500}
            height={400}
            className="rounded-md object-cover h-[300px] sm:h-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="font-bold py-1">
            Our Commitment to Sustainable Agriculture
          </h3>
          <p className="text-sm py-1">
            At CropGen, we are revolutionizing farming with AI-powered remote
            sensing and precision agriculture to create a sustainable,
            eco-friendly, and efficient agricultural system. Our AI-driven
            analytics empower farmers to reduce costs, optimize resources, and
            improve soil health, ensuring a profitable and climate-resilient
            future.
          </p>
          {[
            {
              title: "Reducing water wastage with smart irrigation",
              description: "",
            },
            {
              title:
                "Cutting excessive fertilizer use with precision NPK monitoring",
              description: "",
            },
            {
              title:
                "Tracking carbon sequestration for monetization through carbon credits",
              description: "",
            },
            {
              title:
                "AI-powered pest and disease detection to minimize chemical usage",
              description: "",
            },
            {
              title: "Sustainable Agriculture Practices",
              description: "",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2"
            >
              <Image
                src="/assets/image/comman/dot.svg"
                width={24}
                height={24}
                alt="dot"
              />
              <p >
                <span className="text-black font-medium">{item.title}</span>
                {item.description}
              </p>
            </div>
          ))}
          <p className="text-sm py-1">
            With remote sensing, machine learning, and hyper-local weather
            analytics, CropGen is helping farmers transition to sustainable
            farming with real-time decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}
