"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const playStoreBtnRef = useRef(null); // New ref for Play Store button
  const featuresRef = useRef([]);
  const dashRef = useRef(null);
  const bgRef = useRef(null);
  const donutRef = useRef(null);
  const soilRef = useRef(null);

  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlayStoreAnimating, setIsPlayStoreAnimating] = useState(false); // New state

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLaptop(window.innerWidth >= 1024);
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsLaptop(window.innerWidth >= 1024);
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const features = [
    { src: "/assets/image/home/crop-monitoring.png", label: "Crop Monitoring" },
    { src: "/assets/image/home/agri-business.png", label: "Agribusinesses" },
    { src: "/assets/image/home/api-integration.png", label: "API Integration" },
    { src: "/assets/image/home/farm.png", label: "Farmers & Stakeholders" },
  ];

  const imagesToWait = features.length + 1;

  useEffect(() => {
    if (loadedImages >= imagesToWait) {
      const timer = setTimeout(() => setIsLoading(false), 200);
      return () => clearTimeout(timer);
    }
    const fallback = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(fallback);
  }, [loadedImages, imagesToWait]);

  // Handler for "Get Started" button - redirects to web app
  const handleGetStartedClick = (e) => {
    e.preventDefault();

    if (isAnimating) return;
    setIsAnimating(true);

    const button = e.currentTarget;
    button.classList.add('liquid-active');

    // Redirect to web app after animation
    setTimeout(() => {
      window.open("https://app.cropgenapp.com/login", "_blank");
      setIsAnimating(false);
      button.classList.remove('liquid-active');
    }, 2500);
  };

  // Handler for "Get on Play Store" button - redirects to Play Store
  const handlePlayStoreClick = (e) => {
    e.preventDefault();

    if (isPlayStoreAnimating) return;
    setIsPlayStoreAnimating(true);

    const button = e.currentTarget;
    button.classList.add('liquid-active');

    // Redirect to Play Store after animation
    setTimeout(() => {
      window.open("https://play.google.com/store/apps/details?id=com.cropgenapp", "_blank");
      setIsPlayStoreAnimating(false);
      button.classList.remove('liquid-active');
    }, 2500);
  };

  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // ===== IN ANIMATIONS =====
      gsap.fromTo(h1Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.fromTo(pRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(btnRef.current, { y: 50, opacity: 0 }, { y: isLaptop ? 20 : 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 });
      gsap.fromTo(playStoreBtnRef.current, { y: 50, opacity: 0 }, { y: isLaptop ? 20 : 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }); // Animate Play Store button

      gsap.fromTo(
        featuresRef.current,
        { y: 50, opacity: 0 },
        { y: isLaptop ? 30 : 20, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(dashRef.current, { x: 200, y: -200, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(bgRef.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 });
      gsap.fromTo(donutRef.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4, onComplete: () => { gsap.to(donutRef.current, { y: "+=15", duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" }); } });
      gsap.fromTo(soilRef.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5, onComplete: () => { gsap.to(soilRef.current, { scale: 1.1, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" }); } });

      // ===== OUT ANIMATIONS =====
      const elements = [
        { el: h1Ref.current, x: -200, y: 0 },
        { el: pRef.current, x: -200, y: 0 },
        { el: btnRef.current, x: 0, y: 50 },
        { el: playStoreBtnRef.current, x: 0, y: 50 }, // Add Play Store button to out animations
        { el: featuresRef.current, x: 0, y: isLaptop ? 30 : 20 },
        { el: dashRef.current, x: 200, y: -200 },
        { el: bgRef.current, x: 200, y: 0 },
        { el: donutRef.current, x: 0, y: 200 },
        { el: soilRef.current, x: 0, y: 200 },
      ];

      elements.forEach(({ el, x, y }) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            if (self.progress > 0.1) {
              gsap.to(el, { x: x, y: y, opacity: 0, duration: 0.8, ease: "power2.in" });
            } else {
              gsap.to(el, { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoading, isLaptop]);

  return (
    <section ref={sectionRef} className="relative flex flex-col md:flex-row justify-between bg-white pb-7 md:pb-10 min-h-screen">
      {/* Left */}
      <article className={`md:w-1/2 text-center lg:text-left space-y-3 pt-8 md:px-8 ${isLaptop ? "md:pt-20" : ""}`}>
        <h1 ref={h1Ref} className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          India's First LLM-Based <br /> Crop Monitoring System with <br />Remote Sensing Technology
        </h1>
        <br />

        <p ref={pRef} className="text-gray-700 text-sm md:text-base ">
          The power of AI and remote sensing to drive  <br />precision agriculture. Designed for farmers,<br /> agronomists, agri-businesses, and researchers, <br /> CropGen delivers real-time, data-driven insights for smarter decision-making and sustainable growth.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-4">
          {/* Get Started Button */}
          <div className="button-wrapper">
            <button
              ref={btnRef}
              onClick={handleGetStartedClick}
              className="liquid-button px-5 py-2.5 text-white font-medium rounded-full"
            >
              <span className="button-text">Get Started</span>
              {isAnimating && (
                <>
                  <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="wave-container">
                    <svg className="wave-svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1200,50 1200,50 L1200,100 L0,100 Z"
                        fill="rgba(144, 255, 200, 0.25)"
                      />
                      <path
                        d="M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 L1200,100 L0,100 Z"
                        fill="rgba(122, 255, 190, 0.30)"
                      />
                      <path
                        d="M0,70 C150,50 350,90 500,70 C650,50 850,90 1000,70 C1150,50 1200,70 1200,70 L1200,100 L0,100 Z"
                        fill="rgba(100, 240, 180, 0.35)"
                      />
                    </svg>
                  </div>
                  <span className="liquid-layer-1"></span>
                  <span className="liquid-layer-2"></span>
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="bubble bubble-4"></span>
                  <span className="bubble bubble-5"></span>
                </>
              )}
            </button>
          </div>

          {/* Play Store Button */}
          <div className="button-wrapper">
            <button
              ref={playStoreBtnRef}
              onClick={handlePlayStoreClick}
              className="liquid-button playstore-button px-5 py-2.5 text-white font-medium rounded-full flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span className="button-text">Get on Play Store</span>
              {isPlayStoreAnimating && (
                <>
                  <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="wave-container">
                    <svg className="wave-svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1200,50 1200,50 L1200,100 L0,100 Z"
                        fill="rgba(144, 255, 200, 0.25)"
                      />
                      <path
                        d="M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 L1200,100 L0,100 Z"
                        fill="rgba(122, 255, 190, 0.30)"
                      />
                      <path
                        d="M0,70 C150,50 350,90 500,70 C650,50 850,90 1000,70 C1150,50 1200,70 1200,70 L1200,100 L0,100 Z"
                        fill="rgba(100, 240, 180, 0.35)"
                      />
                    </svg>
                  </div>
                  <span className="liquid-layer-1"></span>
                  <span className="liquid-layer-2"></span>
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="bubble bubble-4"></span>
                  <span className="bubble bubble-5"></span>
                </>
              )}
            </button>
          </div>
        </div>

        <br /><br /><br />
        <div className="mt-5 grid grid-cols-2 gap-2 lg:gap-4 text-green-600">
          {features.map((feature, i) => (
            <div key={i} ref={(el) => (featuresRef.current[i] = el)} className="flex items-center gap-1">
              <div className="p-1">
                <Image
                  src={feature.src}
                  width={35}
                  height={35}
                  priority
                  alt={feature.label}
                  className="w-[35px] h-auto"
                  onLoad={() => setLoadedImages((prev) => prev + 1)}
                />
              </div>
              <span className="text-gray-700 font-medium text-xs md:text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </article>

      {/* Right */}
      <div className="relative md:w-1/2 flex justify-start items-center mt-8 md:mt-0 px-6 md:px-0">
        <div ref={bgRef} className="absolute inset-0 bg-[url('/assets/image/home/line.png')] bg-cover bg-center bg-no-repeat opacity-100 h-[100%] w-[100%] z-[1]" />

        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl z-10 flex justify-start">
          <div ref={dashRef}>
            <Image
              src="/assets/image/home/dashboard.webp"
              alt="Dashboard"
              width={1000}
              height={1000}
              priority
              className="w-full h-full"
              onLoad={() => setLoadedImages((prev) => prev + 1)}
            />
          </div>

          <div ref={donutRef} className="absolute top-14 right-0 sm:top-20 sm:right-[-20px] w-1/3 md:w-1/3">
            <Image src="/assets/image/home/doughnut.webp" alt="Agricultural Data Chart" width={200} height={120} className="w-full h-auto" />
          </div>

          <div ref={soilRef} className="absolute bottom-0 right-0 sm:bottom-[10px] sm:right-[30px] w-1/2 md:w-1/2">
            <Image src="/assets/image/home/soil-chart.webp" alt="Soil Analysis Graph" width={300} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;