import { getBlogPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const plPosts = getBlogPosts("pl");
  const enPosts = getBlogPosts("en");

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = [
    ...plPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...enPosts.map((post) => ({
      url: `${BASE_URL}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticPages, ...blogPages];
}
