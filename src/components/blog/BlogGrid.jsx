"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Helper function to extract image URL from content
const extractImageUrl = (content) => {
  if (typeof content === "string" && content.trim() !== "") {
    const match = content.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  }
  return null;
};

const BlogGrid = ({ blogArray = [], loading = false }) => {
  const blogs = blogArray.map((blog) => ({
    id: blog._id || "unknown-id",
    title: blog.title || "Untitled Blog",
    content: blog.content || "",
    image: extractImageUrl(blog.content) || null,
    createdAt: blog.createdAt || new Date().toISOString(),
    author: blog.author || "By Admin",
    comments: blog.comments || 0,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const router = useRouter();

  // Filter posts based on search term
  const filteredPosts = blogs.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Handle navigation to individual blog page
  const handleReadMore = (post) => {
    const slug = encodeURIComponent(
      post.title.replace(/\s+/g, "-").toLowerCase()
    );
    router.push(`/blog/${slug}?id=${encodeURIComponent(post.id)}`);
  };

  // Skeleton array to render placeholders
  const skeletonArray = Array.from({ length: postsPerPage });

  return (
    <section className="flex justify-center px-4 md:px-6 py-8 sm:pt-20">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-3xl font-bold">Category</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg border-[#2AB673] py-1 sm:py-2 pl-4 pr-10 w-48 sm:w-64 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all ease-in-out duration-300"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600" />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletonArray.map((_, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
              >
                <Skeleton height={224} />
                <div className="p-4 space-y-2">
                  <Skeleton height={14} width="50%" />
                  <Skeleton height={18} width="80%" />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                      <Skeleton circle height={20} width={20} />
                      <Skeleton height={14} width={40} />
                    </div>
                    <Skeleton height={28} width={80} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={400}
                    priority
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-300 rounded-t-lg"></div>
                )}
                <div className="p-4">
                  <p className="text-gray-800 font-medium text-sm">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Image
                          src="/assets/image/blog/profile-icon.webp"
                          alt="profile icon"
                          width={20}
                          priority
                          height={20}
                        />
                        <span className="text-xs">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Image
                          src="/assets/image/blog/message-icon.webp"
                          alt="comment icon"
                          width={20}
                          priority
                          height={20}
                        />
                        <span className="text-xs">{post.comments} Comments</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleReadMore(post)}
                      className="bg-[#28C878] cursor-pointer text-white p-2 text-sm rounded-lg hover:bg-[#169958] duration-300 transition-all ease-in-out"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-sm sm:text-lg py-10">
            {searchTerm.trim()
              ? (
                  <>
                    No blogs found for "<span className="font-semibold">{searchTerm}</span>"
                  </>
                )
              : "No blogs found."}
          </div>
        )}

        {totalPages > 1 && !loading && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200"
              disabled={currentPage === 1}
            >
              &#8249;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-green-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 font-bold rounded-full text-gray-600 hover:bg-gray-200"
              disabled={currentPage === totalPages}
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
