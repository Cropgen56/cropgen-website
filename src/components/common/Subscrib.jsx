"use client";
import React, { useEffect, useState } from "react";

export default function Subscrib({ text }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    // Indicate we are on the client (browser)
    setIsClient(true);

    // Load reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const handleSubscribe = async () => {
  if (!email.includes("@")) {
    setMessage("Please enter a valid email address.");
    return;
  }

  setIsClicked(true);

    try {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6Lfne50rAAAAAPFY9qWeskY_qE3mX1DS5sbG3o10", { action: "subscribe" })
          .then(async (token) => {
            try {
              const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, token }),
              });

              const data = await response.json();
              // console.log("Subscribe API response:", data);
              setMessage(data.message);

              if (data.message.toLowerCase().includes("subscribed")) {
                alert(`Subscribed with ${email}`);
                setEmail(""); 
              }

            } catch (fetchError) {
              console.error("Fetch error:", fetchError);
              setMessage("Something went wrong. Please try again.");
            }
          })
          .catch((recaptchaError) => {
            console.error("reCAPTCHA execution error:", recaptchaError);
            setMessage("reCAPTCHA failed. Please try again.");
          });
      });
    } catch (outerError) {
      console.error("Unexpected outer error:", outerError);
      setMessage("Something went wrong. Please try again.");
    }

  setIsClicked(false);
};


  return (
    <div className="mx-auto my-5 h-[120px] md:h-[300px] lg:h-[400px] bg-[url('/assets/image/comman/background.webp')] bg-cover sm:bg-contain bg-no-repeat bg-center mt-2">
      <div className="relative w-[60%] h-full flex flex-col justify-center gap-1 md:gap-2 items-center md:py-8 md:px-16">
        <h2 className="text-xs sm:text-lg md:text-2xl w-[80%] lg:w-1/2 font-bold text-[#2AB673]">
          {text}
        </h2>
        <div className="flex items-center bg-[#F6FCFF] sm:p-2 rounded-md w-[85%] md:w-auto">
          <input
            type="email"
            placeholder="Enter your Email-ID"
            className="flex-1 outline-none px-1 sm:px-4 py-2 rounded-full text-gray-600 bg-[#F6FCFF] text-xs md:text-sm w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <button
            className={`px-2 sm:px-6 py-1 sm:py-2 rounded-md text-xs md:text-sm sm:font-semibold transition-all ease-in-out duration-500 ${
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
