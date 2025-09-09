"use client";
import React from "react";

export default function SustainabilityFeaturesSkeleton() {
  return (
    <section className="px-6 sm:px-10 mt-8 md:mt-2">
      {/* Skeleton for heading */}
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-6 animate-pulse mx-auto"></div>

      {/* Skeleton for main content */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row-reverse items-start gap-4 md:gap-8 mb-6"
        >
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-full md:w-1/2 space-y-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      ))}

      {/* Skeleton for feature list */}
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 text-sm text-gray-600 mt-2"
        >
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
      ))}
    </section>
  );
}
