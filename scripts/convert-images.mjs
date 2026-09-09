import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"
import heicConvert from "heic-convert"

const root = process.cwd()
const outDir = path.join(root, "public", "gallery")
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// map: source file -> { out, width, height(optional) }
const jobs = [
  { src: "Logo.html.PNG", out: "public/logo.png", width: 400, format: "png" },
  { src: "Profile.html.JPG", out: "public/profile.jpg", width: 1400, format: "jpeg" },
  { src: "Studio.html.HEIC", out: "public/studio.jpg", width: 1800, format: "jpeg", heic: true },
]

for (let i = 1; i <= 16; i++) {
  const candidates = [
    `Work${i}.html.jpg`,
    `Work${i}.html.HEIC`,
    `Work${i}.html.heic`,
  ]
  const found = candidates.find((c) => existsSync(path.join(root, c)))
  if (!found) continue
  jobs.push({
    src: found,
    out: `public/gallery/work${i}.jpg`,
    width: 900,
    format: "jpeg",
    heic: /heic$/i.test(found),
  })
}

async function toBuffer(job) {
  const abs = path.join(root, job.src)
  if (job.heic) {
    const inputBuffer = readFileSync(abs)
    const out = await heicConvert({ buffer: inputBuffer, format: "JPEG", quality: 0.9 })
    return Buffer.from(out)
  }
  return readFileSync(abs)
}

for (const job of jobs) {
  try {
    const buf = await toBuffer(job)
    let pipe = sharp(buf).rotate().resize({ width: job.width, withoutEnlargement: true })
    if (job.format === "png") pipe = pipe.png({ quality: 90 })
    else pipe = pipe.jpeg({ quality: 82, mozjpeg: true })
    const outAbs = path.join(root, job.out)
    mkdirSync(path.dirname(outAbs), { recursive: true })
    await pipe.toFile(outAbs)
    console.log("[ok]", job.src, "->", job.out)
  } catch (err) {
    console.error("[fail]", job.src, err.message)
  }
}
console.log("done")
