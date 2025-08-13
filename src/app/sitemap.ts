import type { MetadataRoute } from "next"
import { branches } from "@/data/branches"

const baseUrl = "https://burgerpark.com.tr"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/subeler`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  const dynamicMenuRoutes: MetadataRoute.Sitemap = branches.map((b) => ({
    url: `${baseUrl}/menu/${b.menuSlug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  return [...staticRoutes, ...dynamicMenuRoutes]
}


