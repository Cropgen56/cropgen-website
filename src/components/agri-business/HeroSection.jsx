"use client";
import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-[250px] sm:h-[600px] w-full flex flex-row items-center justify-between px-4 sm:px-10">
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
          src="/assets/image/agri-business/hero.webp"
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

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-white text-left sm:p-6">
        {!imageLoaded ? (
          <div>
            <Skeleton height={40} width={200} />
            <Skeleton height={30} width={150} className="mt-4" />
            <Skeleton count={2} height={20} width="100%" className="mt-3" />
          </div>
        ) : (
          <>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Agri <br />
              <span className="sm:mt-6 inline-block">Business</span>
            </h1>
            <p className="mt-4 text-xs sm:text-lg md:text-xl">
              Empowering Agribusinesses with AI-Driven{" "}
              <br className="hidden sm:block" /> Insights for Smarter Farming
            </p>
          </>
        )}
      </div>
    </section>
  );
}
