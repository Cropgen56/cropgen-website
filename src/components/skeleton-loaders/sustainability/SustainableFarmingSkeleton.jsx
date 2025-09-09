"use client";
import React from "react";

export default function SustainableFarmingSkeleton() {
  return (
    <section className="px-6 sm:px-12 lg:px-24 py-12 space-y-6">
      {/* Heading Skeleton */}
      <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse"></div>

      {/* Cards Skeleton */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 text-center animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="h-28 w-28 bg-gray-200 mx-auto rounded-full mb-4"></div>
            {/* Title Skeleton */}
            <div className="h-6 w-3/4 bg-gray-300 mx-auto rounded mb-2"></div>
            {/* Description Skeleton */}
            <div className="h-4 w-full bg-gray-300 rounded mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
