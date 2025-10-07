"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleStartDemo = () => {
    // Redirect to external CropGen app
    window.location.href = "https://app.cropgenapp.com";
  };

  return (
    <section className="relative w-full h-[230px] md:h-[460px] lg:h-[600px] flex items-center justify-start text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/image/projects/bg-img.png"
          alt="AI & Satellite-Based Farming Platform"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 px-4 md:px-10 max-w-3xl mt-16 md:mt-8 lg:mt-0 flex flex-col justify-center gap-2 md:gap-6">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
          CropGen - AI & Satellite-Based <br />
          Climate-Smart Farming Platform
        </h1>

        <p className="text-xs md:text-lg text-white">
          Developed under Operation Dronagiri | Early Stage | Agriculture Sector
        </p>

        <button
          className="flex items-center gap-2 w-fit px-4 sm:px-6 py-2 md:px-8 sm:py-3 bg-[#00AA64] hover:bg-green-700 transition-all ease-in-out duration-300 text-white rounded-3xl text-xs sm:text-base font-semibold"
          onClick={handleStartDemo}
        >
          Start Your Demo
          <Image
            src="/assets/image/comman/right-arrow.webp"
            alt="Right Arrow"
            width={18}
            height={18}
          />
        </button>
      </div>
    </section>
  );
}
