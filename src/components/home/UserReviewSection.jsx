"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Lord D. Buggy",
    position: "QA & Testing Expert | Agriculture Quality Assurance",
    company: "Care Inc for Agricultural and Animal Production",
    message: "Great Platform!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque lectus orci in imperdiet sit.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Lord D. Buggy",
    position: "QA & Testing Expert | Agriculture Quality Assurance",
    company: "Care Inc for Agricultural and Animal Production",
    message: "Great Platform!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque lectus orci in imperdiet sit.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Lord D. Buggy",
    position: "QA & Testing Expert | Agriculture Quality Assurance",
    company: "Care Inc for Agricultural and Animal Production",
    message: "Great Platform!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque lectus orci in imperdiet sit.",
    image: "/user3.jpg",
  },
  {
    id: 4,
    name: "Lord D. Buggy",
    position: "QA & Testing Expert | Agriculture Quality Assurance",
    company: "Care Inc for Agricultural and Animal Production",
    message: "Great Platform!",
    review:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque lectus orci in imperdiet sit.",
    image: "/user3.jpg",
  },
];

export default function UserReviewsSection() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(reviews[0].id);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Change selected card
      setSelected((prev) => {
        const currentIndex = reviews.findIndex((review) => review.id === prev);
        if (direction === "left") {
          return (
            reviews[currentIndex - 1]?.id || reviews[reviews.length - 1].id
          );
        } else {
          return reviews[currentIndex + 1]?.id || reviews[0].id;
        }
      });
    }
  };

  return (
    <section className="py-12 px-6 bg-white">
      {/* Header */}
      <div className="max-w-full mx-auto text-start flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3 w-full text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-green-500">Our</span> Users Kind Words
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            It's a good idea before using a platform or service, first look at
            user reviews so you don't experience unwanted things. Here are some
            fun reviews from our users.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <button
            onClick={() => scroll("left")}
            className="bg-[#E4FFF1] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <Image
              src="/assets/image/home/left-arrow.png"
              width={20}
              height={20}
              alt="Left arrow"
            />
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-[#28C878] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <Image
              src="/assets/image/home/right-arrow.png"
              width={20}
              height={20}
              alt="Right arrow"
            />
          </button>
        </div>
      </div>

      {/* Review Cards */}
      <div className="relative mt-8">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar space-x-4 px-4 py-4"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`min-w-[250px] sm:min-w-[250px] md:min-w-[400px] bg-white mx-5 shadow-md rounded-lg p-4 md:p-6 transition-all cursor-pointer 
              ${
                selected === review.id
                  ? "scale-105 bg-[#cce4f2]"
                  : "hover:scale-105 "
              }`}
              onClick={() => setSelected(review.id)}
            >
              <h3 className="font-semibold text-md md:text-lg">
                {review.message}
              </h3>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                {review.review}
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src="/assets/image/home/user.png"
                  width={50}
                  height={50}
                  alt={review.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="mb-1 font-medium text-xs md:text-sm leading-none">
                    {review.name}
                  </p>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 leading-none">
                    {review.position}
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-gray-400 leading-none">
                    {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
