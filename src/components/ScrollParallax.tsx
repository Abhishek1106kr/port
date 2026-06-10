"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number;        // 0 = static, 0.5 = half scroll speed, 1 = full (negative = reverse)
  className?: string;
  style?: CSSProperties;
}

/**
 * Applies a smooth Y-axis parallax offset bound to scroll position.
 * Uses requestAnimationFrame + CSS translate for GPU-composited, jank-free movement.
 *
 * Usage:
 *   <ScrollParallax speed={0.25}>
 *     <img … />
 *   </ScrollParallax>
 */
export default function ScrollParallax({
  children,
  speed = 0.2,
  className = "",
  style,
}: ScrollParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let currentY = 0;
    let targetY = 0;
    const ease = 0.08; // lerp factor — lower = smoother / lazier

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far the element's centre is from the viewport centre (normalised)
      const centreOffset = (rect.top + rect.height / 2) - viewH / 2;
      targetY = centreOffset * speed;

      // Lerp toward target for buttery smoothness
      currentY += (targetY - currentY) * ease;
      inner.style.transform = `translateY(${currentY.toFixed(2)}px)`;

      rafId.current = requestAnimationFrame(update);
    };

    rafId.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId.current);
  }, [speed]);

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden ${className}`}
      style={style}
    >
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
