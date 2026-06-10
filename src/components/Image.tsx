"use client";

import NextImage from "next/image";
import type { ImageProps } from "next/image";

/**
 * Drop-in replacement for next/image that prepends the
 * NEXT_PUBLIC_BASE_PATH env var to every src string.
 *
 * This is needed because Next.js `<Image unoptimized>` in
 * static-export mode does NOT apply basePath to the rendered
 * <img> src attribute, causing 404s when deployed to a subpath
 * (e.g. GitHub Pages at /port/).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Image({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE}${src}`
      : src;

  return <NextImage src={resolvedSrc} {...props} />;
}
