"use client";
import React from "react";

export default function CropMonitoringFeaturesSkeleton() {
  return (
    <section className="py-4 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row-reverse items-center gap-4 mb-8"
          >
            <div className="w-full md:w-1/2 h-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full md:w-1/2 space-y-2">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        ))}
        <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
}
