export const site = {
  name: "Cielo Studio",
  tagline: "Barber Chino",
  city: "Chicago, IL",
  phone: "872-303-9076",
  phoneHref: "tel:8723039076",
  address: {
    line1: "2724 N Lincoln Ave",
    line2: "Chicago, IL 60614",
  },
  booksy: "https://booksy.com/en-us/dl/show-business/1112349",
  instagram:
    "https://www.instagram.com/chino.theartist?stkn=MWlrem03eXhwN2NmYQ%3D%3D&utm_source=qr",
  instagramHandle: "@chino.theartist",
} as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Studio", href: "#studio" },
  { label: "Visit", href: "#location" },
] as const

export const services = [
  { name: "Haircut", price: "$55" },
  { name: "Beard & Haircut", price: "$55" },
  { name: "Taper / Fade with Design", price: "$55" },
  { name: "Kids Skin Fade", price: "$35" },
  { name: "Kids Haircut (No Fade / Razor)", price: "$30" },
  { name: "Beard Shaping", price: "$25" },
  { name: "Line Up", price: "$25" },
  { name: "House Calls", price: "$80+" },
] as const

export const hours = [
  { day: "Monday", time: "10:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday", time: "Closed", closed: true },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed", closed: true },
] as const

export const gallery = Array.from({ length: 16 }, (_, i) => ({
  src: `/gallery/work${i + 1}.jpg`,
  alt: `Haircut work by Barber Chino — style ${i + 1}`,
}))
