"use client";

const AgricultureTechSkeleton = () => {
  return (
    <section className="relative p-6 md:py-12 px-6 bg-white flex flex-col gap-6 md:gap-8 items-center animate-pulse">
      {/* Heading Skeleton */}
      <div className="h-8 w-80 md:w-96 bg-gray-300 rounded mx-auto"></div>

      {/* Image Skeleton */}
      <div className="relative max-w-5xl w-full flex justify-center">
        <div className="w-full md:w-[800px] h-[400px] md:h-[600px] bg-gray-300 rounded-lg"></div>
      </div>
    </section>
  );
};

export default AgricultureTechSkeleton;
