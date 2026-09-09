import type { MetadataRoute } from "next"

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return "https://cielo-studio.vercel.app"
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl()

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
