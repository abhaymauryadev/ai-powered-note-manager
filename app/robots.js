const SITE_URL = "https://ai-powered-note-manager.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/auth/", "/dashboard/", "/folders/", "/notebooks/", "/notes/", "/search/", "/settings/", "/summaries/", "/tags/", "/trash/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}