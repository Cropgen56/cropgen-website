export default async function sitemap() {
  const baseUrl = "https://cropgenapp.com";

  // Fetch blogs from your API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    headers: {
      "x-api-key": "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",
    },
    next: { revalidate: 60 },
  });

  const blogs = await res.json();

  // Static pages
  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date() },
    { url: `${baseUrl}/delete-account`, lastModified: new Date() },
    { url: `${baseUrl}/agri-business`, lastModified: new Date() },
    { url: `${baseUrl}/crop-monitoring`, lastModified: new Date() },
    { url: `${baseUrl}/sustainability`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];

  // Blog pages (dynamic slugs)
  const blogUrls =
    blogs?.data?.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug || blog.title}`, // use slug if available
      lastModified: new Date(blog.updatedAt || new Date()),
    })) || [];

  return [...staticUrls, ...blogUrls];
}
