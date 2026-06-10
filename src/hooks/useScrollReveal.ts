"use client";

import { useEffect, useRef, RefObject } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out";

interface UseScrollRevealOptions {
  threshold?: number;   // 0–1, fraction of element visible to trigger
  rootMargin?: string;  // e.g. "0px 0px -80px 0px"
  once?: boolean;       // animate only once (default true)
}

/**
 * Returns a ref to attach to any element.
 * When that element enters the viewport the `is-visible` class is added,
 * driving the CSS animation defined in globals.css.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
