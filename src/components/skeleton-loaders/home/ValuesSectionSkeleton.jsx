"use client";

const ValuesSectionSkeleton = () => {
  return (
    <section className="relative flex flex-col gap-12 bg-white py-5 px-4 sm:px-6 md:px-12 lg:px-20 animate-pulse">
      {/* Values Heading Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
        {/* Left Content Skeleton */}
        <div className="flex flex-col gap-4 px-4 md:px-0 relative">
          <div className="h-8 w-48 bg-gray-300 rounded absolute -top-6 start-0 sm:start-4"></div>
          <div className="h-10 w-64 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Right Content Skeleton */}
        <div className="relative flex flex-row items-center justify-around">
          <div className="w-36 h-24 bg-gray-300 rounded"></div>
          <div className="w-64 h-64 bg-gray-300 rounded"></div>
          <div className="w-96 h-96 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Call to Action Skeleton */}
      <div className="flex justify-center mt-6">
        <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-gray-300 rounded-lg p-3 md:p-4 h-24 md:h-28"></div>
      </div>
    </section>
  );
};

export default ValuesSectionSkeleton;
