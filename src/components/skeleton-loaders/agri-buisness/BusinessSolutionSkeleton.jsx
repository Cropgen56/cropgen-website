"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BusinessSolutionSkeleton() {
  return (
    <section className="px-6 sm:px-10 mt-8 md:mt-2">
      {/* Heading Skeleton */}
      <Skeleton height={40} width={300} className="mx-auto mb-8" />

      {/* Articles Skeleton */}
      {Array.from({ length: 9 }).map((_, idx) => (
        <article
          key={idx}
          className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 mb-8"
        >
          {/* Image skeleton */}
          <Skeleton className="w-full md:w-1/2 h-48 rounded" />

          {/* Text skeleton */}
          <div className="w-full md:w-1/2 space-y-2">
            <Skeleton height={24} width="60%" />
            <Skeleton height={16} width="100%" />
            <Skeleton height={16} width="90%" />
            <Skeleton height={16} width="80%" />
          </div>
        </article>
      ))}
    </section>
  );
}
