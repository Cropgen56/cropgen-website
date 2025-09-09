"use client";

const FeaturesSectionSkeleton = () => {
  return (
    <section className="py-6 md:py-10 animate-pulse">
      <div className="container flex flex-col gap-10 items-center px-6 md:px-8">
        {/* Heading Skeleton */}
        <div className="text-center relative w-full max-w-4xl">
          <div className="h-8 w-80 bg-gray-300 rounded mx-auto"></div>
          <div className="h-6 w-60 bg-gray-200 rounded mt-2 mx-auto"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Content Skeleton */}
          <div className="p-4 md:p-8 rounded-2xl shadow bg-gray-300 h-64 w-full"></div>

          {/* Right Content Skeleton */}
          <div className="p-2 flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionSkeleton;
