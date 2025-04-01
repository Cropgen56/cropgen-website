"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://server.cropgenapp.com/v1/api/blog/details";
// const API_URL = "http://localhost:8080/v1/api/blog/details";

// make some canges
let i;
export default function BlogDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`, {
          headers: {
            "x-api-key": "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",
          },
        });

        setBlog(response.data.blog);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog) {
    return <p className="text-center text-red-500">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        {blog.title}
      </h1>

      {/* Blog Author & Date */}
      <div className="flex items-center space-x-4 mb-6">
        <p className="text-lg font-medium text-gray-600">{blog.author}</p>
        <span className="text-gray-500">|</span>
        <p className="text-lg text-gray-500">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Blog Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {blog.description}
      </p>

      {/* Blog Content */}
      <div className="prose max-w-none text-gray-700">
        {/* You can render the content if it's HTML or markdown */}
        {/* If the content is raw text or markdown, you might want to process it */}
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
