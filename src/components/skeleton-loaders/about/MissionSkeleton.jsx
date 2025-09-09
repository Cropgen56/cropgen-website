"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MissionSkeleton = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-4 md:py-8 bg-white">
      {/* Stats Skeleton */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 text-center border-b-4 border-gray-200 pb-8 max-w-4xl mx-auto">
        {[1, 2, 3].map((id) => (
          <div key={id} className="flex flex-col items-center">
            <div className="flex items-center justify-between gap-2">
              <Skeleton circle height={40} width={40} className="md:!h-[60px] md:!w-[60px]" />
              <Skeleton height={25} width={60} />
            </div>
            <Skeleton height={20} width={120} className="mt-2" />
          </div>
        ))}
      </div>

      {/* Mission Skeleton */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:px-4 md:py-12 max-w-7xl mx-auto">
        {/* Image Placeholder */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Skeleton height="100%" width="100%" />
        </div>

        {/* Text Placeholder */}
        <article className="w-full md:w-1/2 md:pl-6 flex flex-col items-center md:items-start gap-3 relative">
          <Skeleton height={40} width={200} />
          <Skeleton height={30} width={300} />
          <Skeleton count={4} height={20} width="100%" />
          <Skeleton height={40} width={150} className="rounded-full mt-4" />
        </article>
      </div>
    </section>
  );
};

export default MissionSkeleton;
