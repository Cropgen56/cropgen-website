"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSkeleton = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center">
      {/* Background skeleton */}
      <div className="absolute inset-0">
        <Skeleton
          height="100%"
          width="100%"
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
          className="!h-full !w-full"
        />
      </div>

      {/* Text skeleton */}
      <div className="relative z-10 text-white p-6 md:p-2 lg:p-4 w-full max-w-lg mr-auto md:ml-12 lg:ml-10 text-left rounded-lg">
        <Skeleton height={50} width={200} />
        <Skeleton height={30} width={250} className="mt-4" />
        <Skeleton count={2} height={20} width="100%" className="mt-3" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
