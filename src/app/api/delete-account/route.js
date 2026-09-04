import { NextResponse } from "next/server";

const isValidEmail = (email) => typeof email === "string" && /\S+@\S+\.\S+/.test(email);

/**
 * DELETE /api/delete-account
 * Server-side proxy to cropgen-server's delete-user-by-email endpoint.
 * Keeps DELETE_ACCOUNT_API_KEY out of the client bundle - it never reaches
 * the browser. Note: the upstream endpoint is gated only by this shared key
 * (no session/ownership check), so it deletes whichever account matches the
 * email it's given.
 */
export async function DELETE(req) {
  let email;
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const baseUrl = (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_CROPGEN_SERVER_URL ||
    "https://server.cropgenapp.com"
  ).replace(/\/+$/, "");

  try {
    const upstream = await fetch(
      `${baseUrl}/v1/api/auth/delete-user-by-email/${encodeURIComponent(email.trim())}`,
      {
        method: "DELETE",
        headers: {
          "x-api-key": process.env.DELETE_ACCOUNT_API_KEY || "",
        },
      }
    );

    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("Delete-account proxy error:", err);
    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 502 }
    );
  }
}
