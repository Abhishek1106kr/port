/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static export for GitHub Pages deployment
  output: "export",
  // Set basePath to /port when deploying to GitHub Pages
  basePath,
  // Disable image optimisation (not supported with static export)
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  // Trailing slash so paths resolve correctly on GH Pages
  trailingSlash: true,
};

export default nextConfig;
