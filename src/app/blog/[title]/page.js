"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

// Helper function to extract the first image URL from the content
const extractImageUrl = (content) => {
  if (typeof content === "string" && content.trim() !== "") {
    const imgMatch = content.match(/<img[^>]+src=["'](.*?)["']/i);
    return imgMatch ? imgMatch[1] : null;
  }
  return null;
};

export default function BlogDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError("No blog ID provided");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`,
          {
            headers: {
              "x-api-key": "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",
            },
          }
        );

        setBlog(response.data.data);
        setError(null);
        const extractedImage = extractImageUrl(response.data.content);
        console.log("Extracted image URL:", extractedImage);
        setImageSrc(extractedImage);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error || !blog) {
    return (
      <p className="text-center text-red-500">{error || "Blog not found"}</p>
    );
  }

  // Format createdAt date
  const createdAt = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl flex flex-col gap-2 md:gap-4 mx-auto px-8 py-4 lg:px-8">
      {/* Blog Title */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
        {blog.title || "Untitled Blog"}
      </h1>

      {/* Blog Date */}
      <p className="text-sm md:text-lg text-gray-500">{createdAt}</p>

      {/* Blog Content (rendered as HTML, unchanged from CKEditor output) */}
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{
          __html: blog.content || "<p>No content available</p>",
        }}
      />
    </div>
  );
}
