"use client";

import React from "react";

const SubscriptionBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 my-6 lg:my-8">
      <div
        className="max-w-3xl mx-auto flex flex-row gap-4 sm:gap-6 items-center justify-between p-4 sm:p-6 rounded-2xl shadow-lg"
        style={{
          backgroundImage: "url('/assets/image/blog/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-center sm:text-left text-sm md:text-lg lg:text-xl font-semibold text-gray-900">
          Get The Latest News from <span className="font-bold">CropGen</span>
        </h2>

        <button className="bg-[#00AA64] text-white px-4 sm:px-6 py-2 sm:py-1 rounded-full text-sm sm:text-base font-medium hover:bg-[#00AA64] transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
