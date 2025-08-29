"use client";
import BlogGrid from "@/components/blog/BlogGrid";
import HeroSection from "@/components/blog/HeroSection";
import SubscriptionBanner from "@/components/blog/SubscriptionBanner";
import Subscrib from "@/components/common/Subscrib";

import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

export default function About() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/blog`,
          {
            headers: {
              "x-api-key": "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",
            },
          }
        );
        setBlogs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  return (
    <>
      <div>
        <HeroSection blogs={blogs.data} />
        <SubscriptionBanner />
        <BlogGrid blogArray={blogs.data} />
        <Subscrib
          text={
            <>
              Start Monitoring your Farm <br />
              Easily Now
            </>
          }
        />
      </div>
    </>
  );
}
