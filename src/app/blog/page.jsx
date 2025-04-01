"use client";
import BlogGrid from "@/components/blog/BlogGrid";
import HeroSection from "@/components/blog/HeroSection";
import SubscriptionBanner from "@/components/blog/SubscriptionBanner";
import Subscrib from "@/components/common/Subscrib";

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://server.cropgenapp.com/v1/api/blog/list";
// const API_URL = "http://localhost:8080/v1/api/blog/list";

export default function About() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "x-api-key": "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",
          },
        });
        setBlogs(response.data.blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <HeroSection />
      <SubscriptionBanner />
      <BlogGrid blogs={blogs} />
      <Subscrib
        text={
          <>
            Start Monitoring your Farm <br />
            Easily Now
          </>
        }
      />
    </div>
  );
}
