"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    date: "12 Jun",
    title: "Maximize Yield with Precision:",
    description: "How Crop Monitoring Can Boost Your Bottom Line",
    image: "/assets/image/blog-image1.png",
  },
  {
    id: 2,
    title: "Early Detection, Early Action:",
    description: "Using Crop Monitoring to Identify and Combat Crop Threats",
    image: "/assets/image/blog-image2.png",
  },
  {
    id: 3,
    title: "Data-driven Decisions:",
    description: "How Crop Monitoring Promotes Environmental Responsibility",
    image: "/assets/image/blog-image3.png",
  },
];

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center sm:text-end">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-green-500">Latest Articles</span> Direct from
          Blog
        </h2>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-start gap-6 ">
        {/* Featured Blog */}
        <motion.div
          key={blogPosts[current].id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full md:w-1/1 md:h-full rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={blogPosts[current].image}
            alt={blogPosts[current].title}
            width={600}
            height={500}
            className="w-full h-80 object-fit"
          />
          {/* <div className="absolute top-4 left-4 bg-white p-2 rounded text-gray-700 text-sm font-semibold">
            {blogPosts[current].date}
          </div> */}
          {/* <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">{blogPosts[current].title}</h3>
            <p className="text-sm">{blogPosts[current].description}</p>
          </div> */}
        </motion.div>
        <div className="">
          {/* Smaller Blog Posts */}
          <div className="w-full md:w-[100%] md:h-[18rem] flex justify-around">
            {blogPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden cursor-pointer p-4"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-50 object-cover"
                />
                {/* <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm font-bold">{post.title}</h3>
                <p className="text-xs">{post.description}</p>
              </div> */}
              </motion.div>
            ))}
          </div>
          <div className="mt-2">
            <p className="text-sm ">
              Welcome to the CropGen Blog! Here, you'll find the latest news,
              tips, and insights into the world of crop monitoring and
              sustainable agriculture. Stay updated with expert advice, success
              stories, and industry trends to help you make the most of our
              platform and improve your farming practices.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-start items-end gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="bg-[#E4FFF1] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
        >
          <Image
            src="/assets/image/left-arrow.png"
            width={20}
            height={20}
            alt="Left arrow"
          />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#28C878] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
        >
          <Image
            src="/assets/image/right-arrow.png"
            width={20}
            height={20}
            alt="Right arrow"
          />
        </button>
        <div className="w-1/5 bg-gray-200 rounded-full h-1 ">
          <div
            className="bg-green-500 h-1 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
