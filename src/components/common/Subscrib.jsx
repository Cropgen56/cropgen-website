import React from "react";

export default function Subscrib({ text }) {
  return (
    <div className="mx-auto sm:w-[1200px] my-5  h-[120px] sm:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] sm:w-[70%]   h-full flex justify-between flex-col items-cente p-4 sm:p-20">
        <h2 className="text-[12px] sm:text-3xl font-bold text-[#2AB673]">
          {/* Keep Your farm Up to Date with <br /> Cropgen Crop Monitoring */}
          {text}
        </h2>
        <div className="mt-4 flex items-center bg-[#F6FCFF] sm:p-2 rounded-full  w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="flex-1 outline-none px-1 sm:px-4 py-2 rounded-full text-gray-600 bg-[#F6FCFF] text-sm w-full"
          />
          <button className="bg-[#2AB673] text-white px-2 sm:px-6 py-1 sm:py-2 rounded-md text-sm sm:font-semibold hover:bg-[#2AB673] transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
