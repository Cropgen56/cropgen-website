"use client";

const HeroSectionSkeleton = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between bg-white pb-7 md:pb-10 animate-pulse">
      {/* Left Content */}
      <article className="md:w-1/2 text-center lg:text-left space-y-4 pt-8 px-4 md:px-8">
        <div className="h-8 w-3/4 bg-gray-300 rounded-md mx-auto lg:mx-0" />
        <div className="h-4 w-full bg-gray-200 rounded-md" />
        <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
        <div className="h-10 w-32 bg-gray-300 rounded-full mx-auto lg:mx-0" />

        {/* Feature Icons */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-md" />
              <div className="w-20 h-4 bg-gray-200 rounded-md" />
            </div>
          ))}
        </div>
      </article>

      {/* Right Content */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-0 px-6 md:px-0">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="w-full h-64 bg-gray-300 rounded-lg" />
          <div className="absolute top-10 right-10 w-24 h-24 bg-gray-200 rounded-lg" />
          <div className="absolute bottom-5 right-5 w-40 h-32 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSkeleton;
