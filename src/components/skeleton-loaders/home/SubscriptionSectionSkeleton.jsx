"use client";

const SubscriptionSectionSkeleton = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 animate-pulse">
      <div className="max-w-5xl w-full rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-6 gap-6 relative overflow-hidden bg-gray-100">
        {/* Left Content Skeleton */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-200 rounded-full"></div>
        </div>

        {/* Right Image Skeleton */}
        <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-lg"></div>
      </div>
    </section>
  );
};

export default SubscriptionSectionSkeleton;
