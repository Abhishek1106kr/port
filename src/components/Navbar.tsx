"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
      style={{ padding: "28px 60px", background: "transparent" }}
    >
      {/* Logo — always visible */}
      <Link
        href="/"
        className="group shrink-0"
        aria-label="Home"
        style={{ display: "inline-block" }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(240,235,214,0.35)",
            background: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "scale(1.1)";
            el.style.boxShadow = "0 0 18px rgba(249,111,77,0.55)";
            el.style.borderColor = "rgb(249,111,77)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.transform = "scale(1)";
            el.style.boxShadow = "none";
            el.style.borderColor = "rgba(240,235,214,0.35)";
          }}
        >
          <Image
            src="/images/avatar_logo.png"
            alt="Abhishek Kumar Chauhan"
            width={48}
            height={48}
            style={{ objectFit: "cover", display: "block" }}
            priority
          />
        </div>
      </Link>

      {/* Nav links — fade out when scrolled */}
      <ul
        className="hidden md:flex gap-9 list-none"
        style={{
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
          transform: scrolled ? "translateY(-6px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="font-sans text-cream/70 hover:text-cream uppercase tracking-widest text-xs transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
