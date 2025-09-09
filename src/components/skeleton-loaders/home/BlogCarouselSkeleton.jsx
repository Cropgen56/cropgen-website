"use client";

const BlogCarouselSkeleton = () => {
  return (
    <section className="p-6 lg:py-12 lg:px-6 flex flex-col gap-4 md:gap-8 bg-white animate-pulse">
      {/* Heading Skeleton */}
      <div className="h-8 w-80 md:w-96 bg-gray-300 rounded mx-auto mb-6"></div>

      {/* Featured Blog Skeleton */}
      <div className="w-full md:w-full h-[200px] md:h-[350px] bg-gray-300 rounded-lg mb-4"></div>

      {/* Smaller Blogs Skeleton */}
      <div className="flex justify-around gap-4 mb-4">
        <div className="w-[45%] md:w-[30%] h-40 bg-gray-300 rounded-lg"></div>
        <div className="w-[45%] md:w-[30%] h-40 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Description Skeleton */}
      <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

      {/* Navigation Buttons Skeleton */}
      <div className="flex gap-4 mt-4">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="w-1/5 h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-gray-300 rounded-full w-1/4"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarouselSkeleton;
