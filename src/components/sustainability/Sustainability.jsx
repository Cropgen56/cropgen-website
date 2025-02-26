"use client";
import React from "react";
import Image from "next/image";

export default function Su() {
  return (
    <div className="px-2 sm:px-10">
      <div className="relative w-full md:w-1/2">
        {" "}
        {/* <Image
          src="/assets/image/sustainability/sustainability-text.webp"
          alt="Crop Health Analytics"
          width={500}
          height={300}
          className="absolute z-0 opacity-80 sm:ms-40"
        /> */}
        <h2 className="relative text-2xl sm:text-4xl font-bold leading-tight text-start mt-4 sm:mt-10 z-10">
          <span className="text-[#2AB673]">Sustainability </span> at <br />{" "}
          CropGen
        </h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-start gap-8 mt-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-start">
          <Image
            src="/assets/image/sustainability/sustainability-image.webp"
            alt="Crop Health Analytics"
            width={500}
            height={400}
            className="rounded-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="font-bold py-1">
            Our Commitment to Sustainable Agriculture
          </h3>
          <p className="text-sm py-1">
            At CropGen, we are revolutionizing farming with AI-powered remote
            sensing and precision agriculture to create a sustainable,
            eco-friendly, and efficient agricultural system. Our AI-driven
            analytics empower farmers to reduce costs, optimize resources, and
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
                src="/assets/image/comman/dot.webp"
                width={20}
                height={20}
                alt="dot"
                className="mt-1"
              />
              <p>
                <strong className="text-black">{item.title}</strong>
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
