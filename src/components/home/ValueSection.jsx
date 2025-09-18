"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValuesSectionSkeleton from "../skeleton-loaders/home/ValuesSectionSkeleton";

gsap.registerPlugin(ScrollTrigger);

const ValuesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  // refs
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const weatherRef = useRef(null);
  const reportRef = useRef(null);
  const insightsRef = useRef(null);
  const ctaRef = useRef(null);

  const imagesToLoad = [
    "/assets/image/home/our-Values.png",
    "/assets/image/home/weather-card.png",
    "/assets/image/home/insights.png",
    "/assets/image/home/report-cards.png",
    "/assets/image/blog/background.webp",
  ];

  // preload images
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

  // animations
  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Texts from left
        tl.from(textRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
          // Weather card from right
          .from(
            weatherRef.current,
            {
              x: 100,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.8"
          )
          // Report cards from top
          .from(
            reportRef.current,
            {
              y: -100,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.8"
          )
          // Insights flip/rotate in
          .fromTo(
            insightsRef.current,
            { opacity: 0, rotateY: 90 },
            { opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" },
            "-=0.8"
          )
          // CTA fade + scale in
          .from(
            ctaRef.current,
            {
              opacity: 0,
              scale: 0.9,
              y: 50,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.8"
          );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  if (isLoading) return <ValuesSectionSkeleton />;

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col gap-12 bg-white py-5 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Values Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
        {/* Left Content */}
        <div
          ref={textRef}
          className="flex flex-col gap-4 px-4 md:px-0 relative"
        >
          <Image
            src="/assets/image/home/our-Values.png"
            alt="our-Values"
            width={400}
            height={200}
            className="absolute z-0 opacity-80 -top-6 w-[300px] sm:w-[400px] start-0 sm:start-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 z-10">
            Our <span className="text-green-600">Values</span>
          </h2>
          <ul className=" text-gray-600 text-sm ml-2 md:ml-4 md:text-lg flex flex-col gap-2">
            <li>
              <strong className="text-gray-900">Innovation:</strong> Committed
              to continuous innovation and pioneering solutions...
            </li>
            <li>
              <strong className="text-gray-900">Empowerment:</strong> Providing
              farmers with the tools and knowledge they need...
            </li>
            <li>
              <strong className="text-gray-900">Collaboration:</strong> Foster
              collaboration and partnerships across the agricultural value
              chain...
            </li>
            <li>
              <strong className="text-gray-900">Integrity:</strong> Upholding
              the highest standards of integrity and transparency...
            </li>
            <li>
              <strong className="text-gray-900">Sustainability:</strong>{" "}
              Dedicated to promoting sustainable farming practices...
            </li>
          </ul>
        </div>

        {/* Right Content - Graphics */}
        <figure className="relative flex flex-row items-center justify-around">
          {/* Weather + Insights */}
          <div className="h-full">
            <div className="float-end" ref={weatherRef}>
              <Image
                src="/assets/image/home/weather-card.png"
                alt="Report"
                width={150}
                height={100}
                className="pb-0 md:pb-20"
              />
            </div>

            <div ref={insightsRef}>
              <Image
                src="/assets/image/home/insights.png"
                alt="Report"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Report Cards */}
          <div ref={reportRef}>
            <Image
              src="/assets/image/home/report-cards.png"
              alt="Report"
              width={600}
              height={600}
              className="ps-0"
            />
          </div>
        </figure>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <div
          ref={ctaRef}
          className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-white shadow-lg rounded-lg p-3 md:p-4"
          style={{
            backgroundImage: "url('/assets/image/blog/background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-md md:text-xl font-semibold text-gray-900 text-center md:text-center">
            We will bring your Farm to the next level.
          </p>
          <button className=" bg-green-500 text-white px-6 py-2 rounded-full text-sm md:text-lg font-semibold shadow-md hover:bg-green-600 transition-all ease-in-out duration-400">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
