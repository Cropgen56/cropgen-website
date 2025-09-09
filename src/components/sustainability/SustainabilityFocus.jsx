"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SustainabilityFocusSkeleton from "../skeleton-loaders/sustainability/SustainabilityFocusSkeleton";

export default function SustainabilityFocus() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    "/assets/image/sustainability/sustainability-focus.webp",
    "/assets/image/sustainability/soil-health.webp",
    "/assets/image/sustainability/water.webp",
    "/assets/image/sustainability/carbon.webp",
    "/assets/image/sustainability/crop-disease.webp",
    "/assets/image/sustainability/supply-chain.webp",
    "/assets/image/comman/dot.webp",
  ];

  useEffect(() => {
    let loadedCount = 0;
    const isMounted = { value: true };

    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted.value) return;
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
    });

    return () => {
      isMounted.value = false;
    };
  }, []);

  if (!imagesLoaded) return <SustainabilityFocusSkeleton />;

  return (
    <section className="px-6 sm:px-10 mt-2 space-y-6">
      {/* Heading */}
      <figure className="relative flex justify-center items-center">
        <Image
          src="/assets/image/sustainability/sustainability-focus.webp"
          alt="Sustainability Focus"
          width={1000}
          height={200}
          className="absolute z-0 opacity-80"
        />
        <h2 className="relative text-2xl sm:text-5xl font-bold leading-tight text-center mt-4 sm:mt-10 z-10">
          <span className="text-[#2AB673]">Key Sustainability Focus Areas </span>
        </h2>
      </figure>

      {/* Focus Areas */}
      {[
        {
          title: "Soil Health & Regeneration",
          img: "/assets/image/sustainability/soil-health.webp",
          items: [
            { title: "AI-powered Soil Health Reports", description: "Analyze organic carbon, fertility, and moisture levels." },
            { title: "Reduce excessive fertilizer", description: "Usage with NPK availability & requirement tracking using AI & ML." },
            { title: "Precision irrigation", description: "With real-time soil moisture & temperature data to prevent overwatering." },
          ],
          reverse: true,
        },
        {
          title: "Water Conservation & Smart Irrigation",
          img: "/assets/image/sustainability/water.webp",
          items: [
            { title: "NDWI & NDMI", description: "Indices help track water stress levels and optimize irrigation schedules." },
            { title: "Avoid groundwater", description: "Depletion with hyper-local weather-based irrigation alerts." },
            { title: "Drip irrigation & rainwater harvesting", description: "Guidance for efficient water use." },
          ],
        },
        {
          title: "Carbon Sequestration & Climate Action",
          img: "/assets/image/sustainability/carbon.webp",
          items: [
            { title: "Carbon Credit Program (Coming Soon)", description: "Helping farmers monetize sustainable farming practices." },
            { title: "Satellite-based Carbon Monitoring", description: "Assess soil carbon levels & optimize carbon sequestration." },
            { title: "AI-driven GHG emission tracking", description: "For low-impact farming practices." },
          ],
          reverse: true,
        },
        {
          title: "Crop Disease & Pest Management",
          img: "/assets/image/sustainability/crop-disease.webp",
          items: [
            { title: "AI-powered disease detection", description: "Reduce excessive pesticide use." },
            { title: "Integrated Pest Management (IPM)", description: "Solutions for eco-friendly crop protection." },
            { title: "Predictive alerts & real-time pest detection", description: "To prevent crop loss." },
          ],
        },
        {
          title: "Sustainable Supply Chain & Traceability",
          img: "/assets/image/sustainability/supply-chain.webp",
          items: [
            { title: "Blockchain", description: "Based farm-to-market transparency for better pricing & reduced food wastage." },
            { title: "Operational & Profit/Loss", description: "Traceability for cost-efficient farming." },
            { title: "Optimized harvesting", description: "Schedules using AI-driven mandi price predictions." },
          ],
          reverse: true,
        },
      ].map((focus, idx) => (
        <article
          key={idx}
          className={`flex flex-col md:flex-row ${
            focus.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-4 md:gap-8`}
        >
          <figure className="w-full md:w-1/2 flex justify-center">
            <Image
              src={focus.img}
              alt={focus.title}
              width={500}
              height={300}
              className="rounded-md object-contain h-[200px] sm:h-[300px]"
            />
          </figure>

          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-2xl py-2">
              <span className="text-[#2AB673]">{focus.title.split(" ")[0]}</span>{" "}
              {focus.title.replace(focus.title.split(" ")[0], "")}
            </h2>
            {focus.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600 mt-2"
              >
                <Image
                  src="/assets/image/comman/dot.webp"
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
      ))}
    </section>
  );
}
