import { SiteHeader } from "@/components/site-header"
import { Hero, NoticeBanner } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Studio } from "@/components/studio"
import { Location } from "@/components/location"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <NoticeBanner />
        <About />
        <Services />
        <Gallery />
        <Studio />
        <Location />
      </main>
      <SiteFooter />
    </>
  )
}
