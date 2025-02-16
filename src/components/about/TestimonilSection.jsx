"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem",
    image: "/assets/image/about/testimonial1.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa rem maxime modi delectus perspiciatis corporis quidem.",
    image: "/assets/image/about/testimonial2.webp",
  },
];

const logos = [
  "/assets/image/logo1.webp",
  "/assets/image/logo2.webp",
  "/assets/image/logo3.webp",
  "/assets/image/logo4.webp",
  "/assets/image/logo5.webp",
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#2AB673]">
            Testimonial
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="bg-[#E4FFF1] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
            >
              <Image
                src="/assets/image/left-arrow.png"
                width={16}
                height={16}
                alt="Left arrow"
              />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#28C878] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
            >
              <Image
                src="/assets/image/right-arrow.png"
                width={16}
                height={16}
                alt="Right arrow"
              />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative flex flex-col md:flex-row items-center gap-6 mt-6">
          {/* Image Section */}
          <div className="relative w-full md:w-1/3 h-64">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-black pb-3">
              {testimonials[currentIndex].name}
            </h3>
            <p className="mt-2 text-gray-600 text-sm relative indent-8 leading-relaxed">
              <span className="absolute -top-3 left-0">
                <Image
                  src="/assets/image/about/left-comma.webp"
                  width={20}
                  height={20}
                  alt="left comma"
                />
              </span>
              {testimonials[currentIndex].text}
              <span className="absolute -bottom-3 right-0">
                <Image
                  src="/assets/image/about/right-comma.webp"
                  width={20}
                  height={20}
                  alt="right comma"
                />
              </span>
            </p>
          </div>
        </div>

        {/* Green Line */}
        <div className="w-full md:w-1/4 flex mx-auto mt-6">
          {/* Green (25%) */}
          <div className="w-1/4 h-1 bg-[#2AB673]"></div>
          {/* Light Blue (75%) */}
          <div className="w-3/4 h-1 bg-[#E1ECF3]"></div>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-around items-center gap-6 mt-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-row items-center">
              <Image
                src="/assets/image/about/black-white-logo.webp"
                width={40}
                height={40}
                alt="CropGen Logo"
              />
              <p className="text-[#9A9898] text-sm">Cropgen</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
