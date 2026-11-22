import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain.replace(/\/$/, "");
  const lastModified = new Date("2026-11-22");

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/program`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/support`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
