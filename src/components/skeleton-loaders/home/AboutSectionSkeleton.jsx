"use client";

const AboutSectionSkeleton = () => {
  return (
    <section className="relative flex flex-col gap-4 bg-white py-3 md:py-6 px-4 sm:px-6 md:px-12 lg:px-20 animate-pulse">
      
      {/* Who We Are Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-2">
          <div className="h-8 w-40 bg-gray-300 rounded"></div> {/* heading */}
          <div className="h-6 w-60 bg-gray-300 rounded mt-2"></div>
          <div className="h-6 w-full bg-gray-200 rounded mt-1"></div>
          <div className="h-6 w-full bg-gray-200 rounded mt-1"></div>
        </div>

        {/* Right Content Skeleton */}
        <div className="flex justify-center relative">
          <div className="w-[350px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-300 rounded-md"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* What We Offer Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center relative bg-gray-100 rounded-lg p-4 mt-6">
        {/* Left Image Skeleton */}
        <div className="w-full md:w-[500px] h-[300px] md:h-[500px] bg-gray-300 rounded-md"></div>

        {/* Right Content Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-gray-300 rounded"></div> {/* heading */}
          <div className="space-y-2 mt-4">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSkeleton;
