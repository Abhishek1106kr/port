/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  // Static export — only when NEXT_PUBLIC_BASE_PATH is set (i.e., in CI/GitHub Pages)
  ...(basePath
    ? {
        output: "export",
        basePath,
        // assetPrefix ensures ALL assets (images, fonts, CSS, JS) are served
        // from /port/... instead of /... on GitHub Pages
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
