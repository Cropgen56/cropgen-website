import { NextResponse } from "next/server";

/**
 * GET /api/blog
 * Server-side proxy to cropgen-server's blog list endpoint.
 * Keeps BLOG_API_KEY out of the client bundle - it never reaches the browser.
 */
export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_API_URL || "https://server.cropgenapp.com/v1/api"
  ).replace(/\/+$/, "");

  try {
    const upstream = await fetch(`${baseUrl}/blog`, {
      headers: {
        "x-api-key": process.env.BLOG_API_KEY || "",
      },
      cache: "no-store",
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("Blog list proxy error:", err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 502 }
    );
  }
}
