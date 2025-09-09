import React from "react";

const SubscribeSectionSkeleton = () => {
  return (
    <section
      className="relative mt-4 md:mx-auto sm:shadow-lg sm:rounded-2xl px-6 md:px-12 py-8 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:my-10 bg-gray-100"
      aria-label="Subscribe skeleton loader"
    >
      <div className="w-full flex flex-col sm:flex-row gap-8 animate-pulse">
        {/* Left (Title + Input) */}
        <div className="flex flex-col gap-4 w-full sm:w-2/5">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>

        {/* Right (Contact Info) */}
        <div className="flex flex-col gap-3 w-full sm:w-2/5">
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-200 rounded w-2/3"></div>
          <div className="h-8 bg-gray-300 rounded w-full"></div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSectionSkeleton;
