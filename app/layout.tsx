import type { Metadata, Viewport } from "next"
import { Cinzel, Montserrat } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://cielo-studio-2h0zsxldr-clstudio2003-8027.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cielo Studio | Barber Chino — Chicago",
  description:
    "Cielo Studio by Barber Chino. Licensed Chicago barber with 6+ years crafting precise cuts, master fades, and creative designs. Appointments only — book via Booksy.",
  keywords: [
    "barber",
    "Chicago barber",
    "Cielo Studio",
    "Barber Chino",
    "fades",
    "haircut",
    "beard",
    "Lincoln Ave",
  ],
  openGraph: {
    title: "Cielo Studio | Barber Chino — Chicago",
    description:
      "Licensed Chicago barber crafting precise cuts, master fades, and creative designs. Appointments only.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5ecdc",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
