/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cropgenapp.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Tell next-sitemap how to get blog slugs
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path.startsWith("/blog/") ? 0.7 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },

  // Exclude admin/dashboard routes if needed
  exclude: ["/admin/*", "/api/*"],
};
