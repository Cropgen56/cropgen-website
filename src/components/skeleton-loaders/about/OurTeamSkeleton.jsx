"use client";

const OurTeamSkeleton = () => {
  return (
    <section className="flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-1 sm:py-10 bg-white animate-pulse">
      {/* Heading */}
      <div className="max-w-6xl text-start relative">
        <div className="h-8 w-40 bg-gray-300 rounded mb-4" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-xl shadow-md w-full h-48 flex flex-col"
          >
            <div className="h-32 bg-gray-300 rounded-t-xl" />
            <div className="flex flex-col gap-2 p-3">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="h-3 w-20 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSkeleton;
