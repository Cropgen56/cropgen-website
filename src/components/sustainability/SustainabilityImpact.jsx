"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SustainabilityImpactSkeleton from "../skeleton-loaders/sustainability/SustainabilityImpactSkeleton";

export default function SustainabilityImpact() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    "/assets/image/sustainability/Sustainability-text.webp",
    "/assets/image/sustainability/sustainability-impact.webp",
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

  if (!imagesLoaded) return <SustainabilityImpactSkeleton />;

  return (
    <section className="px-6 sm:px-10 mt-8 md:mt-2">
      <div className="relative w-full">
        <Image
          src="/assets/image/sustainability/Sustainability-text.webp"
          alt="Crop Health Analytics"
          width={400}
          height={200}
          priority
          className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-6 sm:start-10"
        />

        <h2 className="relative text-2xl sm:text-4xl font-bold leading-tight text-start mt-4 sm:mt-10 z-10">
          <span className="text-[#2AB673] sm:text-5xl">
            Sustainability <br /> Impact – In Numbers
          </span>
        </h2>

        <Image
          src="/assets/image/sustainability/sustainability-impact.webp"
          alt="Crop Gen Sustainability Impact"
          width={800}
          height={300}
          priority
          className="h-auto mx-auto mt-5"
        />
      </div>
    </section>
  );
}
