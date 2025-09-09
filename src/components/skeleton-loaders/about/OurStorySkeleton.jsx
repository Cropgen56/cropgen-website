"use client";
import React from "react";

const OurStorySkeleton = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-4 md:py-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Text Skeleton */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 lg:w-[45%] text-center md:text-left relative space-y-3 animate-pulse">
          <div className="h-6 w-40 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 rounded" />
          <div className="h-4 w-4/6 bg-gray-300 rounded" />
        </div>

        {/* Image Skeleton */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <div className="absolute inset-0 w-full h-full bg-gray-200 animate-pulse rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default OurStorySkeleton;
