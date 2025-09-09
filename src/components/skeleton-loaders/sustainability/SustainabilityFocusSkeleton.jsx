"use client";
import React from "react";

export default function SustainabilityFocusSkeleton() {
  return (
    <section className="px-6 sm:px-10 mt-2 space-y-6">
      {/* Skeleton for heading */}
      <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>

      {/* Skeleton for each focus area */}
      {Array.from({ length: 5 }).map((_, idx) => (
        <article
          key={idx}
          className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8"
        >
          {/* Image Skeleton */}
          <div className="w-full md:w-1/2 h-48 sm:h-64 bg-gray-200 rounded animate-pulse"></div>

          {/* Text Skeleton */}
          <div className="w-full md:w-1/2 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            {/* Dots */}
            {Array.from({ length: 3 }).map((_, dotIdx) => (
              <div
                key={dotIdx}
                className="flex items-center gap-2 text-sm mt-2"
              >
                <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
