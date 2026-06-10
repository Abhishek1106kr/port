"use client";

import { ReactNode, CSSProperties } from "react";
import { useScrollReveal, RevealVariant } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;        // ms, e.g. 100, 200 …
  duration?: number;     // ms, default 700
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps any children with a scroll-triggered entrance animation.
 *
 * Usage:
 *   <ScrollReveal variant="fade-up" delay={200}>
 *     <img … />
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold,
  rootMargin,
  once,
  className = "",
  style,
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, rootMargin, once });

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${variant} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
