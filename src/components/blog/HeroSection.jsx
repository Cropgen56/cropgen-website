"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

// Use environment variable for API URL (set in .env.local or .env)
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:7070/v1/api";
const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY || "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";

// Format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Extract day and month
const extractDateAndMonth = (createdAt) => {
  const dateObj = new Date(createdAt);
  return {
    date: dateObj.getDate(),
    month: dateObj.toLocaleString("en-US", { month: "short" }),
  };
};

// Extract image URL from content
const getImageFromContent = (content) => {
  try {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : "/assets/image/blog/default-image.jpg"; // Fallback image
  } catch (error) {
    console.error("Error extracting image from content:", error);
    return "/assets/image/blog/default-image.jpg";
  }
};

export default function HeroSection() {
  const [blogs, setBlogs] = useState([]);
  const [lastPostDate, setLastPostDate] = useState("");
  const [lastPostMonth, setLastPostMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blog`, {
          headers: {
            "x-api-key": API_KEY,
          },
        });

        // Handle the { success, count, data } structure
        const fetchedBlogs = response.data.data || [];
        setBlogs(fetchedBlogs);

        if (fetchedBlogs.length > 0) {
          const lastPost = fetchedBlogs[fetchedBlogs.length - 1];
          const { date, month } = extractDateAndMonth(lastPost.createdAt);
          setLastPostDate(date);
          setLastPostMonth(month);
        }
      } catch (err) {
        setError("Failed to load blogs. Please try again.");
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="h-[800px]">
      {/* Background Image */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center px-6 sm:px-12 lg:px-20"
        style={{
          backgroundImage: "url('/assets/image/blog/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            CropGen
            <br />
            <span className="mt-6 inline-block">Blog</span>
          </h1>
          <p className="my-3 text-xl">
            Stay connected with our latest insights,
            <br /> updates, and real-world impact stories.
          </p>
        </div>
      </div>

      {/* Top Post Section */}
      <div className="relative left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:max-w-5xl top-[-70px] sm:top-[-150px]">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 relative">
          <div className="bg-white shadow-2xl rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start relative">
            {/* Left Side - Image with Badge */}
            <div className="relative w-full sm:w-1/2">
              {loading ? (
                <div className="w-full h-[300px] bg-gray-300 rounded-lg animate-pulse"></div>
              ) : blogs.length > 0 ? (
                <Image
                  src={getImageFromContent(blogs[blogs.length - 1].content)}
                  alt={blogs[blogs.length - 1].title}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ) : (
                <div className="w-full h-[300px] bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                  No blogs available
                </div>
              )}
              {blogs.length > 0 && !loading && (
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                  {lastPostDate} <br /> {lastPostMonth}
                </div>
              )}
            </div>

            {/* Right Side - Blog List */}
            <div className="sm:w-1/2 w-full mt-4 sm:mt-0 sm:pl-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2AB673]">
                Top Posts
              </h2>

              {loading ? (
                <p className="text-gray-500">Loading blogs...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : blogs.length === 0 ? (
                <p className="text-gray-500">No blogs available</p>
              ) : (
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
                  {blogs.slice(0, 4).map((blog) => (
                    <div key={blog._id} className="pb-1 sm:pb-2">
                      <p className="text-[#000] text-xs sm:text-sm">
                        DATE: {formatDate(blog?.createdAt)}
                      </p>
                      <p className="text-[#000] text-xs sm:text-sm font-semibold hover:text-green-600 transition duration-300 cursor-pointer">
                        {blog.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
