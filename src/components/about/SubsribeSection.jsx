"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SubscribeSectionSkeleton from "../skeleton-loaders/about/SubscribeSectionSkeleton";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);

  // ✅ fallback to avoid infinite skeleton
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (bgLoaded && iconLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [bgLoaded, iconLoaded]);

  const handleSubscribe = async () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10", {
            action: "subscribe",
          })
          .then(async (token) => {
            const response = await fetch("/api/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, token }),
            });
            const data = await response.json();
            setMessage(data.message);

            if (data.message.toLowerCase().includes("subscribed")) {
              alert(`Subscribed with ${email}`);
              setEmail("");
            }
          });
      });
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="relative mt-4 md:mx-auto sm:shadow-lg sm:rounded-2xl px-6 md:px-12 py-8 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8 sm:my-10
      bg-[url('/assets/image/about/subscribe-background.webp')] bg-cover bg-center"
      aria-label="Subscribe to CropGen Farm Monitoring Updates"
    >
      {/* ✅ preload background via hidden img */}
      <img
        src="/assets/image/about/subscribe-background.webp"
        alt="preload background"
        className="hidden"
        onLoad={() => setBgLoaded(true)}
      />

      {/* Left */}
      <div className="flex flex-col gap-2 relative z-10 md:w-2/5 text-center md:text-left">
        <h2 className="text-[#2AB673] text-lg md:text-2xl font-bold leading-tight">
          Start Monitoring your Farm <br /> Easily Now
        </h2>
        <div className="flex items-center bg-[#F6FCFF] rounded-md p-1 shadow-sm">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="w-full bg-transparent px-3 py-2 outline-none text-gray-400 text-sm placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className=" text-white px-4 py-2 text-sm rounded-md bg-[#2AB673] hover:bg-[#2ab672d5] transition-all ease-in-out duration-500"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Right */}
      <address className="flex flex-col gap-1 relative z-10 md:w-2/5 text-center md:text-left text-gray-700 text-sm">
        <h3 className="text-[#2AB673] font-semibold text-md md:text-lg">
          Our Location
        </h3>
        <p>Pune, Maharashtra, 411038, India</p>

        <h3 className="text-[#2AB673] font-semibold text-md md:text-lg">
          Quick Contact
        </h3>
        <p>info@cropgenapp.com</p>
        <p className="text-[#2AB673] font-bold text-md md:text-xl pt-2">
          We will get back to you
          <br /> within 24 hours, call us at
        </p>
        <div className="flex justify-center md:justify-start items-center gap-3">
          <div className="p-2 rounded-full">
            <Image
              src="/assets/image/about/call-image.webp"
              width={40}
              height={40}
              alt="Phone icon for contact"
              onLoadingComplete={() => setIconLoaded(true)}
              onLoad={() => setIconLoaded(true)}
            />
          </div>
          <p className="text-[#2AB673] font-bold text-base">+91 9665935570</p>
        </div>
      </address>
    </section>
  );
};

export default SubscribeSection;
