import { NextResponse } from "next/server";

/**
 * GET /api/blog/:id
 * Server-side proxy to cropgen-server's single-blog endpoint.
 * Keeps BLOG_API_KEY out of the client bundle - it never reaches the browser.
 */
export async function GET(_req, { params }) {
  const { id } = await params;
  const baseUrl = (
    process.env.NEXT_PUBLIC_API_URL || "https://server.cropgenapp.com/v1/api"
  ).replace(/\/+$/, "");

  try {
    const upstream = await fetch(`${baseUrl}/blog/${id}`, {
      headers: {
        "x-api-key": process.env.BLOG_API_KEY || "",
      },
      cache: "no-store",
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("Blog detail proxy error:", err);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 502 }
    );
  }
}
