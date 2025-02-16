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
      className="relative mx-auto shadow-lg rounded-2xl px-6 md:px-8 py-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 my-4
      bg-[url('/assets/image/about/subscribe-background.webp')] bg-cover bg-center"
    >
      {/* Overlay for better readability */}
      <div className="relative z-10 md:w-2/5 text-center md:text-left">
        <h2 className="text-[#2AB673] text-xl md:text-2xl font-bold leading-tight">
          Start Monitoring your Farm <br /> Easily Now
        </h2>
        <div className="mt-4 flex items-center bg-[#F6FCFF] rounded-full p-1 shadow-sm">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="w-full bg-transparent px-3 py-2 outline-none text-[#F6FCFF] text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className=" text-white px-4 py-2 text-sm rounded-xl bg-[#2AB673] hover:bg-[#2AB673] transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="relative z-10 md:w-2/5 text-center md:text-left text-gray-700 text-sm">
        <h3 className="text-[#2AB673] font-semibold text-lg">Our Location</h3>
        <p>Pune, Maharashtra, 411038, India</p>

        <h3 className="text-[#2AB673] font-semibold mt-3 text-lg">
          Quick Contact
        </h3>
        <p>info@cropgenapp.com</p>
        <p className="text-[#2AB673] font-bold text-xl pt-2">
          We will get back to you
          <br /> within 24 hours, call us at
        </p>
        <div className="mt-4 flex justify-center md:justify-start items-center gap-3">
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
