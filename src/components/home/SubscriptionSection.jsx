"use client";

import Image from "next/image";

export default function SubscriptionSection() {
  return (
    <section className="w-full flex justify-center py-10 px-4 ">
      <div
        className="max-w-5xl w-full rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-6 gap-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/home/line.png')",
          backgroundSize: "cover",
        }}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            Start Monitoring your Farm <br /> Easily Now
          </h2>
          <div className="mt-4 flex items-center bg-white p-2 rounded-full shadow-md w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your Email-ID"
              className="flex-1 outline-none px-4 py-2 rounded-full text-gray-600 text-sm"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            src="/assets/image/home/dashboard.png"
            alt="Subscription Illustration"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
