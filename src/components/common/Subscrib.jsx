"use client";
import React, { useState } from "react";

export default function Subscrib({ text }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubscribe = async () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsClicked(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }

    setTimeout(() => setIsClicked(false), 2000); // Reset button color after 2 seconds
  };

  return (
    <div className="mx-auto sm:w-[1200px] my-5 h-[120px] sm:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] sm:w-[70%] h-full flex justify-between flex-col items-center p-4 sm:p-20">
        <h2 className="text-[12px] sm:text-3xl font-bold text-[#2AB673]">
          {text}
        </h2>
        <div className="mt-4 flex items-center bg-[#F6FCFF] sm:p-2 rounded-full w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="flex-1 outline-none px-1 sm:px-4 py-2 rounded-full text-gray-600 bg-[#F6FCFF] text-sm w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`px-2 sm:px-6 py-1 sm:py-2 rounded-md text-sm sm:font-semibold transition-all ${
              isClicked ? "bg-[#1A854E]" : "bg-[#2AB673]"
            } text-white hover:bg-[#1A854E]`}
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
        {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
