"use client";
import React from "react";

export default function BlogHeroSkeleton() {
  return (
    <section className="h-[600px] md:h-[570px] lg:h-[750px] relative px-6 sm:px-12 lg:px-20">
      {/* Background Skeleton */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>

      {/* Hero Text Skeleton */}
      <div className="relative z-10 max-w-2xl text-white space-y-4 mt-12">
        <div className="h-10 w-3/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Top Post Skeleton Card */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:max-w-5xl top-[-96px] sm:top-[-150px]">
        <div className="bg-white shadow-2xl rounded-lg p-4 flex flex-col sm:flex-row gap-4 animate-pulse">
          {/* Left Side - Image */}
          <div className="w-full sm:w-1/2 relative">
            <div className="w-full h-[200px] sm:h-[300px] bg-gray-300 rounded-lg"></div>
            <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-gray-400"></div>
          </div>

          {/* Right Side - Blog List */}
          <div className="sm:w-1/2 w-full space-y-2">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
