import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#2b2b2b", padding: "120px 60px 80px" }}
    >
      {/* ── Blended background portrait ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/res/ChatGPT Image Jun 9, 2026, 06_51_48 PM.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{
            mixBlendMode: "soft-light",
            opacity: 0.28,
          }}
          priority
        />
        {/* extra dark vignette so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, transparent 30%, #2b2b2b 80%)",
          }}
        />
      </div>

      {/* ── Content (above background) ── */}
      <div className="relative z-10">
        <p
          className="font-sans text-cream/60 uppercase tracking-[0.12em] text-xs mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          B.Tech CS (AI/ML) · Aerospace &amp; Space Tech · DevOps Intern @ Nexavise
        </p>

        <h1
          className="font-serif text-cream max-w-5xl animate-fade-up"
          style={{
            fontSize: "clamp(54px, 11.1vw, 160px)",
            lineHeight: "1em",
            letterSpacing: "-0.01em",
            fontWeight: 400,
            animationDelay: "0.25s",
            opacity: 0,
          }}
        >
          Abhishek
          <br />
          Kumar Chauhan
          <br />
          <em style={{ fontSize: "clamp(18px, 3vw, 44px)" }}>
            Systems Engineer. ML Practitioner. Space-Tech Tinkerer.
          </em>
        </h1>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-16 gap-10 animate-fade-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          <p
            className="font-sans text-cream/75 max-w-sm"
            style={{ fontSize: "17px", lineHeight: "2em" }}
          >
            I build systems that sit at the intersection of{" "}
            <span style={{ color: "rgb(249,111,77)", fontWeight: 500 }}>machine intelligence</span>,{" "}
            <span style={{ color: "rgb(249,111,77)", fontWeight: 500 }}>automated infrastructure</span>,
            {" "}and{" "}
            <span style={{ color: "rgb(249,111,77)", fontWeight: 500 }}>aerospace data</span>
            {" "}—{" "}
            <em className="font-serif not-italic" style={{ color: "#f0ebd6", fontStyle: "italic", fontWeight: 300 }}>
              the kind that don&apos;t break when complexity scales.
            </em>
          </p>
          <p
            className="font-sans text-cream/45 mt-5 max-w-xs"
            style={{ fontSize: "12px", lineHeight: "1.9em", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Dual degrees · CS (AI/ML) &amp; Aerospace &amp; Space Technology
            <br />
            <span style={{ color: "rgb(249,111,77,0.9)" }}>DevOps Intern</span>{" "}shipping real infrastructure
          </p>

          <Link
            href="#contact"
            className="hero-cta shrink-0 font-sans uppercase tracking-widest text-xs font-bold"
            style={{ padding: "26px 40px", borderRadius: "100px" }}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
