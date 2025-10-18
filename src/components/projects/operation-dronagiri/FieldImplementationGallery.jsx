"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

const crops = ["Soyabean", "Turmeric"];

const cropImages = {
  Soyabean: [
    "/assets/image/projects/gallery/soyabean1.png",
    "/assets/image/projects/gallery/soyabean-video.mp4",
    "/assets/image/projects/gallery/soyabean2.png",
    "/assets/image/projects/gallery/soyabean3.png",
    "/assets/image/projects/gallery/soyabean4.png",
    "/assets/image/projects/gallery/soyabean5.png",
    "/assets/image/projects/gallery/soyabean3.png",
  ],
  Turmeric: [
    "/assets/image/projects/gallery/turmeric1.png",
    "/assets/image/projects/gallery/turmeric-video.mp4",
    "/assets/image/projects/gallery/turmeric2.png",
    "/assets/image/projects/gallery/turmeric3.png",
    "/assets/image/projects/gallery/turmeric4.png",
    "/assets/image/projects/gallery/turmeric3.png",
    "/assets/image/projects/gallery/turmeric.jpg",
  ],
};

const FieldImplementationGallery = () => {
  const [activeCropIndex, setActiveCropIndex] = useState(0);
  const [phase, setPhase] = useState("idle");
  const [direction, setDirection] = useState("next");

  const cropName = crops[activeCropIndex];
  const images = cropImages[cropName];

  const OUT_DURATION = 900;
  const IN_DURATION = 1100;
  const STAGGER = 0;

  const startChange = (dir, nextIndexFn) => {
    if (phase !== "idle") return;
    setDirection(dir);
    setPhase("animatingOut");

    setTimeout(() => {
      setActiveCropIndex((prev) => nextIndexFn(prev));
      setPhase("animatingIn");
      setTimeout(() => {
        setPhase("idle");
      }, IN_DURATION + STAGGER * 6);
    }, OUT_DURATION);
  };

  const handlePrev = () =>
    startChange("prev", (prev) => (prev === 0 ? crops.length - 1 : prev - 1));
  const handleNext = () =>
    startChange("next", (prev) => (prev === crops.length - 1 ? 0 : prev + 1));

  const renderMedia = (src, alt) => {
    const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
    return isVideo ? (
      <video
        key={src}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full md:h-[550px]"
      />
    ) : (
      <Image key={src} src={src} alt={alt} fill className="object-cover" />
    );
  };

  const tileClass = (roleIndex) => {
    const staggerDelay = "0ms";

    let fromTransform;
    switch (roleIndex) {
      case 0:
      case 1:
        fromTransform = "translateX(-60px)";
        break;
      case 2:
        fromTransform = "translateY(-60px)";
        break;
      case 3:
      case 4:
        fromTransform = "translateY(60px)";
        break;
      case 5:
        fromTransform = "translateX(60px)";
        break;
      case 6:
        fromTransform = "translateY(60px)";
        break;
      default:
        fromTransform = "translateY(20px)";
    }

    let outTransform;
    if (phase === "animatingOut") {
      if (fromTransform.includes("translateX(-")) outTransform = "translateX(-80px)";
      else if (fromTransform.includes("translateX(60px)")) outTransform = "translateX(80px)";
      else if (fromTransform.includes("translateY(-")) outTransform = "translateY(-80px)";
      else outTransform = "translateY(80px)";
    }

    const commonTransition = "transform transition-all duration-[1000ms] ease-[cubic-bezier(0.45,0,0.55,1)]";

    if (phase === "idle") {
      return {
        className: `${commonTransition} opacity-100`,
        style: { transform: "translate(0,0)", opacity: 1 },
      };
    } else if (phase === "animatingOut") {
      return {
        className: `${commonTransition} opacity-0`,
        style: { transitionDelay: staggerDelay, transform: outTransform, opacity: 0 },
      };
    } else if (phase === "animatingIn") {
      return {
        className: `${commonTransition} opacity-100`,
        style: { transitionDelay: staggerDelay, transform: "translate(0,0)", opacity: 1 },
      };
    } else {
      return {
        className: `${commonTransition} opacity-100`,
        style: { transform: "translate(0,0)", opacity: 1 },
      };
    }
  };

  const initialStyleFor = (roleIndex) => {
    if (phase !== "animatingIn") return {};
    switch (roleIndex) {
      case 0:
      case 1:
        return { transform: "translateX(-40px)", opacity: 0 };
      case 2:
        return { transform: "translateY(-40px)", opacity: 0 };
      case 3:
      case 4:
        return { transform: "translateY(40px)", opacity: 0 };
      case 5:
        return { transform: "translateX(40px)", opacity: 0 };
      case 6:
        return { transform: "translateY(40px)", opacity: 0 };
      default:
        return { transform: "translateY(20px)", opacity: 0 };
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl md:text-2xl font-bold text-center text-[#2AB673] mb-8">
        Field Implementation Gallery
      </h2>

      <div className="flex items-center justify-between mb-6">
        <span className="text-lg md:text-2xl font-bold text-[#000]">Gallery</span>
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
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow"
            style={{
              ...(phase === "animatingIn" ? initialStyleFor(0) : {}),
              ...(tileClass(0).style || {}),
            }}

            {...{ className: `${tileClass(0).className} relative w-full h-full rounded-xl overflow-hidden shadow` }}
          >
            {renderMedia(images[0], "img-0")}
          </div>

          <div
            className="relative w-full h-full md:h-[550px] rounded-xl overflow-hidden shadow"
            style={{
              ...(phase === "animatingIn" ? initialStyleFor(1) : {}),
              ...(tileClass(1).style || {}),
            }}
            {...{ className: `${tileClass(1).className} relative w-full h-full md:h-[550px] rounded-xl overflow-hidden shadow` }}
          >
            {renderMedia(images[1], "img-1")}
          </div>
        </div>

        <div className="col-span-4 grid grid-rows-2 gap-4">
          <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow"
            style={{
              ...(phase === "animatingIn" ? initialStyleFor(2) : {}),
              ...(tileClass(2).style || {}),
            }}
            {...{ className: `${tileClass(2).className} relative w-full h-full rounded-xl overflow-hidden shadow` }}
          >
            {renderMedia(images[2], "img-2")}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="relative w-full h-[365px] rounded-xl overflow-hidden shadow"
              style={{
                ...(phase === "animatingIn" ? initialStyleFor(3) : {}),
                ...(tileClass(3).style || {}),
              }}
              {...{ className: `${tileClass(3).className} relative w-full h-[365px] rounded-xl overflow-hidden shadow` }}
            >
              {renderMedia(images[3], "img-3")}
            </div>

            <div
              className="relative w-full h-[365px] rounded-xl overflow-hidden shadow"
              style={{
                ...(phase === "animatingIn" ? initialStyleFor(4) : {}),
                ...(tileClass(4).style || {}),
              }}
              {...{ className: `${tileClass(4).className} relative w-full h-[365px] rounded-xl overflow-hidden shadow` }}
            >
              {renderMedia(images[4], "img-4")}
            </div>
          </div>
        </div>

        <div className="col-span-3 grid grid-rows-[3fr_2fr] gap-4">
          <div
            className="relative w-full h-[685px] rounded-xl overflow-hidden shadow"
            style={{
              ...(phase === "animatingIn" ? initialStyleFor(5) : {}),
              ...(tileClass(5).style || {}),
            }}
            {...{ className: `${tileClass(5).className} relative w-full h-[685px] rounded-xl overflow-hidden shadow` }}
          >
            {renderMedia(images[5], "img-5")}
          </div>

          <div
            className="relative w-full rounded-xl overflow-hidden shadow"
            style={{
              ...(phase === "animatingIn" ? initialStyleFor(6) : {}),
              ...(tileClass(6).style || {}),
              height: `calc(485px / 2)`,
            }}
            {...{ className: `${tileClass(6).className} relative w-full rounded-xl overflow-hidden shadow` }}
          >
            {renderMedia(images[6], "img-6")}
          </div>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-4">
        {images.map((src, idx) => {
          const mobileInitial =
            phase === "animatingIn"
              ? { transform: "translateY(24px)", opacity: 0 }
              : undefined;
          const mobileFinalStyle = tileClass(idx).style || {};
          return (
            <div
              key={idx}
              className={`${tileClass(idx).className} relative w-full aspect-video rounded-xl overflow-hidden shadow`}
              style={{
                ...(mobileInitial || {}),
                ...mobileFinalStyle,
              }}
            >
              {renderMedia(src, `img-${idx}`)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FieldImplementationGallery;
