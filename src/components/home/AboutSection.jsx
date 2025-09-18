"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSectionSkeleton from "../skeleton-loaders/home/AboutSectionSkeleton";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const textLeftRef = useRef(null);
  const imgRightRef = useRef(null);
  const offerImgRef = useRef(null);
  const offerTextRef = useRef(null);

  // preload images
  useEffect(() => {
    const imagesToLoad = [
      "/assets/image/home/who-are-we-text.png",
      "/assets/image/home/index-image.png",
      "/assets/image/home/about.png",
      "/assets/image/home/curve-background.png",
      "/assets/image/home/monitoring.png",
      "/assets/image/home/What-We-Offer.png",
    ];

    let loaded = 0;
    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === imagesToLoad.length) {
          setTimeout(() => setIsLoading(false), 200);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Who We Are - Left Text
        gsap.fromTo(
          textLeftRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textLeftRef.current,
              start: "top 85%",
              end: "bottom 65%",
              scrub: 1, // smoother scroll sync
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Who We Are - Right Image
        gsap.fromTo(
          imgRightRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imgRightRef.current,
              start: "top 85%",
              end: "bottom 65%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // What We Offer - Image
        gsap.fromTo(
          offerImgRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: offerImgRef.current,
              start: "top 90%",
              end: "bottom 70%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // What We Offer - Text
        gsap.fromTo(
          offerTextRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: offerTextRef.current,
              start: "top 90%",
              end: "bottom 70%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  if (isLoading) return <AboutSectionSkeleton />;

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col gap-4 bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Who We Are Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Text */}
        <article ref={textLeftRef} className="flex flex-col gap-1 lg:gap-2 relative">
          <Image
            src="/assets/image/home/who-are-we-text.png"
            alt="Who We Are Text"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px]"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 z-10">
            <span className="text-green-600">Who</span> We Are?
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-lg">
            CropGen is dedicated to transforming the agricultural landscape through innovative technology and data-driven solutions. Our mission is to empower farmers, agribusinesses, and stakeholders worldwide with the tools and insights they need to optimize crop management, enhance productivity, and promote sustainable agricultural practices.
          </p>
          <p className="mt-4 text-gray-600 text-sm md:text-lg">
            We specialize in providing advanced crop monitoring services and agricultural data solutions, leveraging the power of remote sensing technology, artificial intelligence, and data analytics.
          </p>
        </article>

        {/* Right Image */}
        <div ref={imgRightRef} className="flex items-center justify-between relative p-4">
          <div className="relative z-10">
            <Image
              src="/assets/image/home/index-image.png"
              alt="NDVI"
              width={400}
              height={400}
              className="rounded-md w-[350px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
            />
          </div>

          {/* Floating Label */}
          <div className="absolute top-0 right-0 animate-bounce-slow">
            <Image
              src="/assets/image/home/about.png"
              width={120}
              height={120}
              alt="Dotted Background"
            />
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center relative bg-[url('/assets/image/home/curve-background.png')] bg-cover bg-center rounded-lg p-4">
        {/* Left Image */}
        <div ref={offerImgRef} className="relative flex justify-center items-start">
          <Image
            src="/assets/image/home/monitoring.png"
            alt="Monitoring"
            width={500}
            height={500}
            className="md:w-[500px] md:h-[500px] block"
          />
        </div>

        {/* Right Text */}
        <div ref={offerTextRef} className="flex flex-col gap-4 relative">
          <Image
            src="/assets/image/home/What-We-Offer.png"
            alt="What We Offer"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px]"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 z-10">
            <span className="text-green-600">What</span> We Offer?
          </h2>
          <ul className="flex flex-col gap-2 text-gray-600 ml-2 md:ml-4 text-sm md:text-lg">
            <li>
              <strong className="text-gray-900">Remote Sensing Technology:</strong> Utilize cutting-edge remote sensing technology...
            </li>
            <li>
              <strong className="text-gray-900">API Integration:</strong> Offer robust API integration...
            </li>
            <li>
              <strong className="text-gray-900">Crop Monitoring Services:</strong> Provide location-based crop monitoring services...
            </li>
            <li>
              <strong className="text-gray-900">Actionable Insights:</strong> Transform raw data into actionable insights...
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
