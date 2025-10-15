import React from "react";

const DataFlowSection = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center py-20 bg-white">
      <div className="flex flex-col items-center text-center z-10">
        <img
          src="/assets/image/projects/Satellite-data.svg"
          alt="Satellite Data"
          className="w-32 h-32 object-contain"
        />
        <h3 className="text-lg font-semibold mt-3 text-black">
          Satellite Data
        </h3>
      </div>

      <div className="flex flex-col items-center text-center mx-40 z-10">
        <h3 className="hidden md:flex text-lg font-semibold mb-3 text-black whitespace-nowrap">AI Processing</h3>
        <img
          src="/assets/image/projects/ai.svg"
          alt="AI Processing"
          className="w-32 h-32 object-contain"
        />
         <h3 className="block md:flex text-lg font-semibold mb-3 text-black whitespace-nowrap">AI Processing</h3>
      </div>

      <div className="flex flex-col items-center text-center z-10">
        <img
          src="/assets/image/projects/farmer.svg"
          alt="Farmer Insights"
          className="w-32 h-32 object-contain"
        />
        <h3 className="text-lg font-semibold mt-3 text-black">
          Farmer Insights
        </h3>
      </div>

      <div className="hidden md:block absolute border-dashed border-t-2 border-green-400 w-[180px] rotate-[25deg] left-[33%] top-[42%]"></div>

      <div className="hidden md:block absolute border-dashed border-t-2 border-green-400 w-[180px] rotate-[-25deg] right-[33%] top-[42%]"></div>
    </div>
  );
};

export default DataFlowSection;
