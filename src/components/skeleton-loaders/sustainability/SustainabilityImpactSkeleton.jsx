"use client";
import React from "react";

export default function SustainabilityImpactSkeleton() {
  return (
    <section className="px-6 sm:px-10 mt-8 md:mt-2 space-y-4">
      {/* Heading Skeleton */}
      <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      
      {/* Subtitle Skeleton */}
      <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>

      {/* Image Skeleton */}
      <div className="w-full h-64 sm:h-80 bg-gray-200 rounded animate-pulse"></div>
    </section>
  );
}
