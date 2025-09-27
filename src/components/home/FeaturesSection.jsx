"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturesSectionSkeleton from "../skeleton-loaders/home/FeaturesSectionSkeleton";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const imagesToLoad = [
    "/assets/image/home/CropGen’s-Monitoring.png",
    "/assets/image/home/features.png",
  ];

  // Preload images
  useEffect(() => {
    let loaded = 0;
    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded += 1;
        if (loaded === imagesToLoad.length) {
          setTimeout(() => setIsLoading(false), 200);
        }
      };
    });
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Heading from left
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.2, // smooth animation
            toggleActions: "play reverse play reverse", // in/out animations
          },
        }
      );

      // Left text from left and grow
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -120, scale: 0.7 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.2,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Right image from bottom and grow
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 60, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.2,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading]);


  return (
    <section ref={sectionRef} className="py-6 md:py-10">
      <div className="container flex flex-col gap-10 items-center px-6 md:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center relative">
          <Image
            src="/assets/image/home/CropGen’s-Monitoring.png"
            alt="CropGen’s-Monitoring"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-2 sm:-top-6 w-[400px] sm:w-[1000px] start-0 sm:start-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 z-10">
            What Makes{" "}
            <span className="text-[#2AB673]">CropGen's Crop Monitoring </span>
            Stand Out?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Content */}
          <article
            ref={leftRef}
            className="p-4 md:p-8 rounded-2xl shadow-green-custom bg-white h-fit w-fit my-auto"
          >
            <h3 className="font-bold p-3 md:py-5">
              Crop Monitoring by{" "}
              <span className="text-[#2AB673]"> CropGen</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              CropGen is a visualization software with advanced array components
              and debugged tools that help enhance productivity. Our system
              provides input tools for controlling output intelligence, job
              control security, and data-driven analysis while minimizing errors
              on MDs.
            </p>
          </article>

          {/* Right Content (Feature Image) */}
          <figure
            ref={rightRef}
            className="p-2 text-white flex justify-center items-center"
          >
            <Image
              src="/assets/image/home/features.png"
              height={500}
              width={500}
              alt="CropGen feature image"
              className="rounded-xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
