import type { MetadataRoute } from "next"

const baseUrl = "https://burgerpark.com.tr"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}


