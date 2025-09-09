"use client";
import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SustainabilityHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-full h-[250px] sm:h-[600px] flex items-center px-4 sm:px-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <Skeleton
            height="100%"
            width="100%"
            baseColor="#e0e0e0"
            highlightColor="#f5f5f5"
            className="!h-full !w-full"
          />
        )}
        <Image
          src="/assets/image/sustainability/hero.webp"
          alt="Farming Field with Sprinklers"
          layout="fill"
          objectFit="cover"
          priority
          className={`transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 max-w-2xl text-white text-left sm:p-6">
        {!imageLoaded ? (
          <div>
            <Skeleton height={50} width={250} />
            <Skeleton height={30} width={200} className="mt-4" />
            <Skeleton count={2} height={20} width="100%" className="mt-3" />
          </div>
        ) : (
          <>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Sustainability <br />
              <span className="sm:mt-6 inline-block">at CropGen</span>
            </h1>
            <p className="mt-4 text-xs sm:text-lg md:text-xl leading-relaxed">
              Our Commitment to Sustainable Agriculture
            </p>
          </>
        )}
      </div>
    </section>
  );
}
