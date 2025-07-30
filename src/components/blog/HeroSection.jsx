"use client";
import React from "react";
import Image from "next/image";

// Format the date (e.g., "28/07/2025")
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Extract day and month (e.g., { date: "28", month: "Jul" })
const extractDateAndMonth = (createdAt) => {
  const dateObj = new Date(createdAt);
  return {
    date: dateObj.getDate(),
    month: dateObj.toLocaleString("en-US", { month: "short" }),
  };
};

// Function to extract image URL from content
const extractImageUrl = (content) => {
  if (typeof content === "string" && content.trim() !== "") {
    const match = content.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  }
  return null;
};

export default function HeroSection({ blogs = [] }) {
  const blogArray = blogs.map((blog) => ({
    id: blog._id,
    title: blog.title || "Untitled Blog",
    content: blog.content || "",
    createdAt: blog.createdAt || new Date().toISOString(),
    image: extractImageUrl(blog.content),
  }));

  let lastPostDate = "";
  let lastPostMonth = "";
  if (blogArray.length > 0) {
    const lastPost = blogArray[blogArray.length - 1];
    const { date, month } = extractDateAndMonth(lastPost.createdAt);
    lastPostDate = date;
    lastPostMonth = month;
  }

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
              {blogArray.length > 0 && blogArray[blogArray.length - 1].image ? (
                <Image
                  src={blogArray[blogArray.length - 1].image}
                  alt="Top Post Image"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              ) : (
                <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
              )}
              {blogArray.length > 0 && (
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
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-4">
                {blogArray?.slice(0, 4).map((blog) => (
                  <div key={blog.id} className="pb-1 sm:pb-2">
                    <p className="text-[#000] text-xs sm:text-sm">
                      DATE: {formatDate(blog.createdAt)}
                    </p>
                    <p className="text-[#000] text-xs sm:text-sm font-semibold hover:text-green-600 transition duration-300 cursor-pointer">
                      {blog.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
