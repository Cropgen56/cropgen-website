"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Head from "next/head";

// Helper function to extract the first image URL from the content
const extractImageUrl = (content) => {
  if (typeof content === "string" && content.trim() !== "") {
    const imgMatch = content.match(/<img[^>]+src=["'](.*?)["']/i);
    return imgMatch ? imgMatch[1] : null;
  }
  return null;
};

const wrapImagesInLinks = (htmlContent) => {
  if (!htmlContent) return htmlContent;

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const images = doc.querySelectorAll("img");

  images.forEach((img) => {
    if (!img.parentElement || img.parentElement.tagName !== "A") {
      const link = doc.createElement("a");
      link.href = img.src;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      img.replaceWith(link);
      link.appendChild(img);
    }
  });

  return doc.body.innerHTML;
};

export default function BlogDetail() {
  const searchParams = useSearchParams();
  const router = useRouter();
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cropgenapp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Smart Crop Monitoring",
        item: "https://cropgenapp.com/blog/smart-crop-monitoring-with-cropgen%3A-the-future-of-farming-is-here?id=6899bb984b379435b055f03a",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Precision Advisory",
        item: `https://cropgenapp.com/blog/how-precision-advisory-increased-chili-yield-and-reduced-costs?id=68ac4f135e33da19d76c2b88`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Real-Time Advisory",
        item: `https://cropgenapp.com/blog/crop-speaks%2C-we-listen%3A-how-real-time-advisory-is-transforming-farming?id=68ac53755e33da19d76c2c07`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Data-Driven Agriculture",
        item: `https://cropgenapp.com/blog/data-driven-agriculture%3A-a-global-imperative-for-agri-business?id=68ac590a20ce9e458427750b`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Farming Without Limits",
        item: `https://cropgenapp.com/blog/farming-without-limits%3A-one-tap%2C-one-link%2C-one-eye-from-space?id=68ac5f8c20ce9e4584277521`,
      },
    ],
  };

  return (
    <section className="px-8 py-4 lg:px-8">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <nav className="text-sm text-gray-600 mb-8 flex items-center">
        <span
          className="hover:underline cursor-pointer text-xs md:text-sm"
          onClick={() => router.push("/blog")}
        >
          Blog
        </span>
        <ChevronRight className="mx-1 w-4 h-4 inline-flex" />
        <span className="text-gray-800 font-medium text-xs md:text-sm">
          {blog.title || "Untitled Blog"}
        </span>
      </nav>

      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col gap-2 md:gap-4">
        {/* Blog Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">
          {blog.title || "Untitled Blog"}
        </h1>

        {/* Blog Date */}
        <p className="text-sm md:text-lg text-gray-500">{createdAt}</p>

        {/* Blog Content (rendered as HTML, unchanged from CKEditor output) */}
        <div
          className="ck-content prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: wrapImagesInLinks(
              blog.content || "<p>No content available</p>"
            ),
          }}
        />
      </div>
    </section>
  );
}
