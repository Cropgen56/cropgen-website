import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-[800px] ">
      {/* Background Image */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center px-6 sm:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/assets/image/blog/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            CropGen
            <br />
            <span className="mt-6 inline-block">Blog</span>
          </h1>
          <p className="my-3 text-xl">
            Stay connected with our latest insights,
            <br /> updates, and real-world impact stories.
          </p>
        </div>
      </div>

      {/* Top Post Positioned Overlapping the Bottom */}
      <div className="relative  left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:max-w-5xl top-[-70px] sm:top-[-150px]">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 relative">
          {/* Card Container */}
          <div className="bg-white shadow-2xl rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start relative">
            {/* Left Side - Image with Badge */}
            <div className="relative w-full sm:w-1/2">
              <Image
                src="/assets/image/blog/top-post.webp"
                alt="Top Post Image"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
              {/* Date Badge */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                12 <br /> Jun
              </div>
            </div>
            {/* Right Side - Text Content */}
            <div className="sm:w-1/2 w-full mt-4 sm:mt-0 sm:pl-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2AB673]">
                Top Post
              </h2>

              {/* List of Posts */}
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="pb-1 sm:pb-2">
                    <p className="text-[#000] text-xs sm:text-sm">
                      DATE : 00/00/00
                    </p>
                    <p className="text-[#000] text-xs sm:text-sm font-semibold hover:text-green-600 transition duration-300 cursor-pointer">
                      Maximize Yield with Precision: How Crop Monitoring Can
                      Boost Your Bottom Line
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
