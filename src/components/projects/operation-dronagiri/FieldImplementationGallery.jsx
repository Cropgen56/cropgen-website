"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

const crops = [
  "Soyabean",
  "Turmeric",
  // "Black Gram"
];

const cropImages = {
  Soyabean: [
    "/assets/image/projects/gallery/3.png",
    "/assets/image/projects/gallery/water mark vid.mp4",
    "/assets/image/projects/gallery/2.png",
    "/assets/image/projects/gallery/1.png",
    "/assets/image/projects/gallery/im2.png",
    "/assets/image/projects/gallery/2 copy.png",
    "/assets/image/projects/gallery/1 copy.png",
  ],
  Turmeric: [
    "/assets/image/projects/gallery/1 copy 2.png",
    "/assets/image/projects/gallery/water mark vid1.mp4",
    "/assets/image/projects/gallery/img4.png",
    "/assets/image/projects/gallery/4.png",
    "/assets/image/projects/gallery/2 copy 2.png",
    "/assets/image/projects/gallery/4.png",
    "/assets/image/projects/gallery/turmeric.jpg",
  ],
};

const FieldImplementationGallery = () => {
  const [activeCropIndex, setActiveCropIndex] = useState(0);
  const cropName = crops[activeCropIndex];
  const images = cropImages[cropName];

  const handlePrev = () => {
    setActiveCropIndex((prev) => (prev === 0 ? crops.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCropIndex((prev) => (prev === crops.length - 1 ? 0 : prev + 1));
  };

  const renderMedia = (src, alt) => {
    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
    return isVideo ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full md:h-[550px]"
      />
    ) : (
      <Image src={src} alt={alt} fill className="object-cover" />
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-center text-[#2AB673] mb-8">
        Field Implementation Gallery
      </h2>

      <div className="flex items-center justify-between mb-6">
        <span className="text-lg md:text-2xl font-bold text-[#000]">
          Gallery
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-[#E4FFF1] hover:bg-[#28C878] hover:text-white transition"
          >
            <MoveLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-[#2AB673] text-white hover:bg-[#24965a] transition"
          >
            <MoveRight size={24} />
          </button>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-10 gap-4 h-[600px] md:h-[1000px]">
        <div className="col-span-3 grid grid-rows-[2fr_4fr] gap-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            {renderMedia(images[0], "img-0")}
          </div>
          <div className="relative w-full h-full md:h-[550px] rounded-xl overflow-hidden shadow">
            {renderMedia(images[1], "img-0")}
          </div>
        </div>

        <div className="col-span-4 grid grid-rows-2 gap-4">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow">
            {renderMedia(images[2], "img-2")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-[365px] rounded-xl overflow-hidden shadow">
              {renderMedia(images[3], "img-3")}
            </div>
            <div className="relative w-full h-[365px] rounded-xl overflow-hidden shadow">
              {renderMedia(images[4], "img-4")}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 grid grid-rows-[3fr_2fr] gap-4">
          <div className="relative w-full h-[685px] rounded-xl overflow-hidden shadow">
            {renderMedia(images[5], "img-5")}
          </div>
          <div
            className="relative w-full  rounded-xl overflow-hidden shadow"
            style={{ height: `calc(485px / 2)` }}
          >
            {renderMedia(images[6], "img-6")}
          </div>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow"
          >
            {renderMedia(src, `img-${idx}`)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldImplementationGallery;
