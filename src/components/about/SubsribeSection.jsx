"use client";

import { useState } from "react";
import Image from "next/image";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`);
  };

  return (
    <section
      className="relative mx-auto md:shadow-lg rounded-2xl px-6 md:px-8 py-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 my-4
      bg-[url('/assets/image/about/subscribe-background.webp')] bg-cover bg-center"
    >
      {/* Overlay for better readability */}
      <div className="flex flex-col gap-2 relative z-10 md:w-2/5 text-center md:text-left">
        <h2 className="text-[#2AB673] text-lg md:text-2xl font-bold leading-tight">
          Start Monitoring your Farm <br /> Easily Now
        </h2>
        <div className="flex items-center bg-[#F6FCFF] rounded-md p-1 shadow-sm">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="w-full bg-transparent px-3 py-2 outline-none text-gray-400 text-sm"
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

      <div className="flex flex-col gap-1 relative z-10 md:w-2/5 text-center md:text-left text-gray-700 text-sm">
        <h3 className="text-[#2AB673] font-semibold text-md md:text-lg">Our Location</h3>
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
          <div className=" p-2 rounded-full">
            <Image
              src="/assets/image/about/call-image.webp"
              width={40}
              height={40}
              alt="Phone"
            />
          </div>
          <p className="text-[#2AB673] font-bold text-base">+91 9665935570</p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
