"use client";

const PromoSection = () => {
  return (
    <section
      className="relative container mx-auto rounded-2xl px-6 sm:px-8 md:px-12 py-16 md:py-24 
      flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 my-6
      bg-[url('/assets/image/comman/background.webp')] bg-cover bg-center"
    >
      <div className="text-center lg:text-left max-w-2xl">
        <h2 className="text-[#2AB673] text-sm sm:text-3xl md:text-3xl font-bold leading-tight">
          Start Monitoring Your Farm <br className="hidden sm:block" /> Easily
          Now
        </h2>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#2AB673] text-white px-1 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 transition">
            Start Free Trial
          </button>
          <button className="bg-[#2AB673] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 transition">
            Choose Plan
          </button>
        </div>
      </div>
      4{" "}
    </section>
  );
};

export default PromoSection;
