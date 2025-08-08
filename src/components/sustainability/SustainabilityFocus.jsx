"use client";
import React from "react";
import Image from "next/image";

export default function SustainabilityFocus() {
  return (
    <section className="px-6 sm:px-10 mt-2">
      <figure className="relative flex justify-center items-center">
        <Image
          src="/assets/image/sustainability/sustainability-focus.webp"
          alt="Crop Health Analytics"
          width={1000}
          height={200}
          className="absolute z-0 opacity-80"
        />

        <h2 className="relative text-2xl sm:text-5xl font-bold leading-tight text-center mt-4 sm:mt-10 z-10">
          <span className="text-[#2AB673]">
            Key Sustainability Focus Areas{" "}
          </span>
        </h2>
      </figure>

      {/* Soil Health & Regeneration*/}
      <article className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/sustainability/soil-health.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain h-[200px] sm:h-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Soil </span>
            Health & Regeneration
          </h2>
          {[
            {
              title: "AI-powered Soil Health Reports",
              description:
                " Analyze organic carbon, fertility, and moisture levels.",
            },
            {
              title: "Reduce excessive fertilizer ",
              description:
                "usage with NPK availability & requirement tracking using AI & ML.",
            },
            {
              title: "Precision irrigation",
              description:
                " with real-time soil moisture & temperature data to prevent overwatering.",
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
                className="sm:mt-1"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Water Conservation & Smart Irrigation*/}
      <article className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/sustainability/water.webp"
            alt="Crop gen sustainabilty water "
            width={500}
            height={300}
            className="rounded-md object-contain h-[200px] sm:h-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Water </span>
            Conservation & <br />
            Smart Irrigation
          </h2>
          {[
            {
              title: "NDWI & NDMI ",
              description:
                "indices help track water stress levels and optimize irrigation schedules.",
            },
            {
              title: "Avoid groundwater  ",
              description:
                "depletion with hyper-local weather-based irrigation alerts.",
            },
            {
              title: "Drip irrigation support & rainwater harvesting ",
              description: " guidance for efficient water use.",
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
                className="sm:mt-1"
              />
              <p>
                <strong className="text-black">{item.title}</strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Carbon Sequestration & Climate Action */}
      <article className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/sustainability/carbon.webp"
            alt="Crop gen carbon sequestration"
            width={500}
            height={300}
            className="rounded-md object-contain h-[200px] sm:h-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Carbon </span>
            Sequestration & <br />
            Climate Action
          </h2>
          {[
            {
              title: "Carbon Credit Program (Coming Soon)",
              description:
                "Helping farmers monetize sustainable farming practices.",
            },
            {
              title: "Satellite-based Carbon Monitoring",
              description:
                "Assess soil carbon levels & optimize carbon sequestration.",
            },
            {
              title: " AI-driven GHG emission tracking",
              description: " for low-impact farming practices.",
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
                className="sm:mt-1"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Crop Disease & Pest Management*/}
      <article className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/sustainability/crop-disease.webp"
            alt="Crop disease detaction "
            width={500}
            height={300}
            className="rounded-md object-contain h-[200px] sm:h-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]"> Crop </span>
            Disease & Pest <br />
            Management
          </h2>

          {[
            {
              title: "AI-powered disease detection",
              description: " Reduce excessive pesticide use.",
            },
            {
              title: "Integrated Pest Management (IPM)  ",
              description: "solutions for eco-friendly crop protection.",
            },
            {
              title: " Predictive alerts & real-time pest detection ",
              description: "to prevent crop loss.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 "
            >
              <Image
                src="/assets/image/comman/dot.svg"
                width={24}
                height={24}
                alt="dot"
                className="sm:mt-1"
              />
              <p>
                <strong className="text-black">{item.title} – </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Sustainable Supply Chain & Traceability*/}
      <article className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/image/sustainability/supply-chain.webp"
            alt="Crop Health Analytics"
            width={500}
            height={300}
            className="rounded-md object-contain h-[200px] sm:h-[300px]"
          />
        </figure>

        {/* Text Content */}
        <div className="w-full md:w-1/2 ">
          <h2 className="font-bold text-2xl py-2">
            <span className="text-[#2AB673]">Sustainable </span>
            Supply Chain & <br /> Traceability
          </h2>
          {[
            {
              title: "Blockchain",
              description:
                "based farm-to-market transparency for better pricing & reduced food wastage.",
            },
            {
              title: "Operational & Profit/Loss",
              description: " traceability for cost-efficient farming.",
            },
            {
              title: "Optimized harvesting ",
              description:
                " schedules using AI-driven mandi price predictions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2 "
            >
              <Image
                src="/assets/image/comman/dot.svg"
                width={24}
                height={24}
                alt="dot"
                className="sm:mt-1"
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
