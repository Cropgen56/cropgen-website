// src/app/blog/[title]/page.js
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import DOMPurify from "dompurify";

// Environment variables
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:7070/v1/api";
const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY || "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";

// Elfsight12 widget component
// const ElfsightWidget = dynamic(() => import("@/components/ElfsightWidget"), {
//   ssr: false,
//   loading: () => <div>Loading widget...</div>,
// });

// Function to extract image URL from content
const getImageFromContent = (content) => {
  try {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : "/assets/image/blog/default-image.jpg";
  } catch (error) {
    console.error("Error extracting image from content:", error);
    return "/assets/image/blog/default-image.jpg";
  }
};

console.log(getImageFromContent);

// Strip HTML and create a description
const stripHtml = (html) => {
  if (!html || typeof html !== "string") {
    console.warn("stripHtml received invalid input:", html);
    return "Read the latest insights from CropGen on agriculture and technology.";
  }
  return html.replace(/<[^>]+>/g, "").slice(0, 160);
};

export default function BlogDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [widgetError, setWidgetError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/blog/${id}`, {
          headers: {
            "x-api-key": API_KEY,
          },
        });

        const blogData = response.data.blog || response.data;
        if (!blogData?.content) {
          blogData.content = "";
        }
        setBlog(blogData);
      } catch (err) {
        setError("Failed to load blog post. Please try again.");
        console.error("API error:", err);
      }
    };

    if (id) {
      fetchBlog();
    }

    // Timeout for invalid IDs
    const timer = setTimeout(() => {
      if (!blog && !error) setError("Blog post not found.");
    }, 5000);
    return () => clearTimeout(timer);
  }, [id, blog, error]);

  useEffect(() => {
    window.addEventListener("error", (event) => {
      if (event.message.includes("APP_VIEWS_LIMIT_REACHED")) {
        setWidgetError("Widget view limit reached. Please try again later.");
      }
    });
    return () => window.removeEventListener("error", () => {});
  }, []);

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="w-full h-80 bg-gray-300 rounded-lg animate-pulse"></div>
        <p className="text-center text-gray-500 mt-4">Loading blog post...</p>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content || "");
  const description = stripHtml(blog.content);
  const canonicalUrl = `https://yourdomain.com/blog/${id}`; // Replace with your domain
  const blogImage = getImageFromContent(blog.content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    image: blogImage,
    author: {
      "@type": "Person",
      name: blog.author || "CropGen Team",
    },
    publisher: {
      "@type": "Organization",
      name: "CropGen",
      logo: {
        "@type": "ImageObject",
        url: "/assets/image/logo.png",
      },
    },
    description: description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Head>
        <title>{blog.title} | CropGen Blog</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="CropGen, agriculture, technology, blog, farming"
        />
        <meta name="author" content={blog.author || "CropGen Team"} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={blogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={blogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="max-w-3xl mx-auto p-4">
        <div className="mb-6">
          <Image
            src={blogImage}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {blog.title}
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          {blog.author && (
            <>
              <p className="text-lg font-medium text-gray-600">{blog.author}</p>
              <span className="text-gray-500">|</span>
            </>
          )}
          <p className="text-lg text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {description}
        </p>
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
        {/* {widgetError ? (
          <div className="text-center text-red-500 mt-6">{widgetError}</div>
        ) : (
          <ElfsightWidget widgetId="23d7a14f-0f17-4372-a233-60d65c1b78b2" />
        )} */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Read More</h2>
          <p className="text-gray-600">
            Explore more articles on{" "}
            <a href="/blog" className="text-green-600 hover:underline">
              our blog
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
