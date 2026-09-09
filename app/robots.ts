import type { MetadataRoute } from "next"

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return "https://cielo-studio.vercel.app"
}

export default function robots(): MetadataRoute.Robots {
  const url = getSiteUrl()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  }
}
