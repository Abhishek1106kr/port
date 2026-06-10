/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  // Static export — only when NEXT_PUBLIC_BASE_PATH is set (i.e., in CI/GitHub Pages)
  ...(basePath ? { output: "export", basePath, trailingSlash: true } : {}),
  images: {
    // Next Image optimisation is unavailable in static export mode
    unoptimized: Boolean(basePath),
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
