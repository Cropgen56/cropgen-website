"use client";

import React from "react";

const SubscriptionBanner = () => {
  return (
    <div
      className="relative my-10 sm:top-[5rem] w-full  sm:w-3/5  mx-auto flex justify-between items-center p-3 rounded-2xl shadow-lg "
      style={{
        backgroundImage: "url('/assets/image/blog/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className=" text-sm sm:text-xl font-semibold text-gray-900">
        Get The Latest News from <span className="font-bold">CropGen</span>
      </h2>
      <button className="bg-[#00AA64] text-white px-6 py-1 rounded-full text-lg font-medium hover:bg-[#00AA64] transition">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionBanner;
