"use client";
import Head from "next/head";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About CropGen - Sustainable Farming Solutions</title>
        <meta
          name="description"
          content="Learn about CropGen, a platform dedicated to sustainable farming and innovative agricultural solutions."
        />
        <meta
          name="keywords"
          content="CropGen, agriculture, farming, sustainable farming, agri-tech"
        />
        <meta name="author" content="CropGen Team" />
      </Head>

      {/* About Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/image/about/hero.webp"
            alt="Farming Field with Sprinklers"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
        </div>

        {/* Overlay Text (Left Aligned) */}
        <div
          className="relative z-10 text-white p-6 md:p-2 lg:p-4 w-full max-w-lg 
  mr-auto md:ml-12 lg:ml-10 text-left rounded-lg"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            About
            <br />
            <span className="mt-6 inline-block">CropGen</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-loose w-full">
            Committed to making every customer’s day brighter and better, one
            step at a time.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
