"use client";
import React from "react";
import Image from "next/image";

export default function TopPost() {
  return (
    <div className="max-w-5xl mx-auto px-4 relative z-50 py-10">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col lg:flex-row items-start relative">
        {/* Left Side - Image with Badge */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/assets/image/blog/top-post.webp"
            alt="Top Post Image"
            width={500}
            priority
            height={300}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
            12 <br /> Jun
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:pl-6">
          <h2 className="text-2xl font-bold text-[#2AB673]">Top Post</h2>

          {/* List of Posts */}
          <div className="mt-4 space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="pb-2">
                <p className="text-gray-500 text-sm">DATE : 00/00/00</p>
                <p className="text-gray-800 font-semibold hover:text-green-600 transition duration-300 cursor-pointer">
                  Maximize Yield with Precision: How Crop Monitoring Can Boost
                  Your Bottom Line
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
