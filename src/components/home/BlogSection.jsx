"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { User, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import BlogCarouselSkeleton from "../skeleton-loaders/home/BlogCarouselSkeleton";

const extractImageUrl = (content) => {
  if (typeof content === "string" && content.trim() !== "") {
    const match = content.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  }
  return null;
};

export default function BlogCarousel() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {


  const fetchBlogs = async() => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blog`,
        {
          headers: { "x-api-key": "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" },
        }
      );



      const normalized = (response.data?.data || []).map((blog) => ({
        ...blog,
        image: extractImageUrl(blog.content) || blog.image,
      }));


      setBlogs(normalized);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);


  const router = useRouter();

  const handleReadMore = (blog) => {
    const slug = encodeURIComponent(blog.title.replace(/\s+/g, "-").toLowerCase());
    router.push(`/blog/${slug}?id=${encodeURIComponent(blog._id)}`);
  };


  const getVisibleBlogs = (blogs, current) => {
    if (blogs.length === 0) return [];
    return [
      blogs[current],
      blogs[(current + 1) % blogs.length],
      blogs[(current + 2) % blogs.length],
    ];
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const visibleBlogs = getVisibleBlogs(blogs, current);

  if (blogs.length === 0) return <p className="p-6">No blogs available.</p>;

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section className="p-4 sm:p-6 lg:py-12 lg:px-6 flex flex-col gap-8 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-end relative inline-block"
      >
        <Image
          src="/assets/image/home/Latest-Blog.png"
          alt="Latest-Blog"
          width={400}
          height={200}
          priority
          className="absolute right-0 z-0 opacity-80 -top-6 w-[250px] sm:w-[400px] md:w-[600px]"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold z-10 relative">
          <span className="text-green-500">Latest Articles</span> Direct from Blog
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Featured Blog */}
        <AnimatePresence custom={direction} mode="wait">
          {visibleBlogs[0] && (
            <motion.article
              key={visibleBlogs[0]._id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-lg w-full lg:w-[45%]"
            >
              <Image
                src={
                  visibleBlogs[0].image ||
                  "/assets/image/home/blog-placeholder.png"
                }
                alt={visibleBlogs[0].title || "Blog"}
                width={600}
                height={400}
                priority
                className="w-full h-[220px] sm:h-[300px] lg:h-[400px] "
              />
              <div className="absolute inset-0 bg-black/30 p-3 sm:p-4 flex flex-col justify-between">
                {/* Date */}
                <div className="bg-white/80 text-green-600 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold w-fit backdrop-blur-md">
                  {new Date(visibleBlogs[0].createdAt).toLocaleDateString(
                    "en-US",
                    { day: "2-digit", month: "short" }
                  )}
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex gap-2 sm:gap-3">
                    <button className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full text-white text-[10px] sm:text-xs bg-white/20 backdrop-blur-md">
                      <User size={12} /> By-Admin
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full text-white text-[10px] sm:text-xs bg-white/20 backdrop-blur-md">
                      <MessageSquare size={12} />{" "}
                      {visibleBlogs[0]?.comments?.length || 0} Comments
                    </button>
                  </div>
                  <button
                    onClick={() => handleReadMore(visibleBlogs[0])}
                    className="flex items-center gap-1 sm:gap-2 bg-green-500/90 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium text-white hover:bg-green-600">
                    Read More
                    <Image
                      src="/assets/image/home/right-arrow.png"
                      width={14}
                      height={14}
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        {/* Right Side */}
        <div className="flex flex-col gap-6 w-full lg:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {visibleBlogs.slice(1, 3).map((blog, idx) => (
              <motion.article
                key={blog._id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={blog.image || "/assets/image/home/blog-placeholder.png"}
                  alt={blog.title || "Blog"}
                  width={300}
                  height={200}
                  priority
                  className="w-full h-[180px] sm:h-[220px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 p-3 sm:p-4 flex items-end">
                  <div className="flex gap-2 sm:gap-3">
                    <button className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full text-white text-[10px] sm:text-xs bg-white/20 backdrop-blur-md">
                      <User size={12} /> By-Admin
                    </button>
                    <button className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full text-white text-[10px] sm:text-xs bg-white/20 backdrop-blur-md">
                      <MessageSquare size={12} />{" "}
                      {blog?.comments?.length || 0} Comments
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-3 sm:mt-5 text-sm sm:text-base"
          >
            Welcome to the CropGen Blog! Here, you'll find the latest news, tips,
            and insights into the world of crop monitoring and sustainable
            agriculture. Stay updated with expert advice, success stories, and
            industry trends to help you make the most of our platform and improve
            your farming practices.
          </motion.p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 sm:gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="bg-[#E4FFF1] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-green-600"
        >
          <Image
            src="/assets/image/home/left-arrow.png"
            width={16}
            height={16}
            priority
            alt="Left"
          />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#28C878] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-green-600"
        >
          <Image
            src="/assets/image/home/right-arrow.png"
            width={16}
            height={16}
            priority
            alt="Right"
          />
        </button>
      </div>
    </section>
  );
}
