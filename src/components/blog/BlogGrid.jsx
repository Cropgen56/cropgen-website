"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const BlogGrid = ({ blogs = [] }) => {
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

  const handleReadMore = (post) => {
    const slug = encodeURIComponent(
      post.title.replace(/\s+/g, "-").toLowerCase()
    );
    // Send title and author as query parameters
    router.push(`/blog/${slug}?id=${encodeURIComponent(post?._id)}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 sm:mt-[5rem]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Category</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md border-[#2AB673] py-2 pl-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {new Date(post?.createdAt).toLocaleDateString()}
              </p>
              <h3 className="text-lg font-semibold mt-2">{post?.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex justify-around w-full mt-4">
                  <p className="text-gray-600 text-sm flex items-center w-1/3">
                    <Image
                      src="/assets/image/blog/profile-icon.webp"
                      alt="profile icon"
                      width={20}
                      height={20}
                    />
                    <p className="px-2"> {post?.author}</p>
                  </p>
                  <p className="text-gray-600 text-sm flex items-center w-1/2">
                    <Image
                      src="/assets/image/blog/message-icon.webp"
                      alt="comment icon"
                      width={20}
                      height={20}
                    />
                    {post?.comments}
                    <p className="px-2"> Comments</p>
                  </p>
                </div>

                <button
                  onClick={() => {
                    console.log(post);
                    handleReadMore(post);
                  }}
                  className="mt-4 w-1/1 bg-[#28C878] text-white py-1 px-1 text-sm rounded-lg hover:bg-[#28C878]"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
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
  );
};

export default BlogGrid;
