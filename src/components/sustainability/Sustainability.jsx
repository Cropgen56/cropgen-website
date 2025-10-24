"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SustainabilityFeaturesSkeleton from "../skeleton-loaders/sustainability/SustainabilityFeaturesSkeleton";

export default function SustainabilityFeatures() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = [
    "/assets/image/sustainability/Sustainability-text.webp",
    "/assets/image/sustainability/sustainability-image.webp",
    "/assets/image/comman/dot.webp",
  ];

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!imagesLoaded) return <SustainabilityFeaturesSkeleton />;

  return (
    <section className="px-6 sm:px-10 mt-8 md:mt-2">
      <figure className="relative w-full md:w-1/2">
        <Image
          src="/assets/image/sustainability/Sustainability-text.webp"
          alt="Crop Health Analytics"
          width={400}
          height={200}
          priority
          className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-6 sm:start-10"
        />
        <h2 className="relative text-2xl sm:text-4xl font-bold leading-tight text-start mt-4 sm:mt-14 z-10">
          <span className="text-[#2AB673]">Sustainability </span> at <br />{" "}
          CropGen
        </h2>
      </figure>
      <div className="flex flex-col md:flex-row-reverse items-start gap-4 md:gap-8 mt-3 md:mt-6">
        {/* Image Section */}
        <figure className="w-full md:w-1/2 flex justify-start">
          <Image
            src="/assets/image/sustainability/sustainability-image.webp"
            alt="Crop Health Analytics"
            width={500}
            height={400}
            priority
            className="rounded-md object-cover h-[300px] sm:h-[400px]"
          />
        </figure>

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
            "Reducing water wastage with smart irrigation",
            "Cutting excessive fertilizer use with precision NPK monitoring",
            "Tracking carbon sequestration for monetization through carbon credits",
            "AI-powered pest and disease detection to minimize chemical usage",
            "Sustainable Agriculture Practices",
          ].map((title, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-gray-600 mt-2"
            >
              <Image
                src="/assets/image/comman/dot.webp"
                width={24}
                height={24}
                priority
                alt="dot"
              />
              <p>
                <span className="text-black font-medium">{title}</span>
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
    </section>
  );
}
