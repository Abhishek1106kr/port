import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollParallax from "@/components/ScrollParallax";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2b2b2b", padding: "120px 60px" }}
    >
      {/* ── Blended background portrait ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/res/ChatGPT Image Jun 9, 2026, 06_53_24 PM.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right-top"
          style={{ mixBlendMode: "soft-light", opacity: 0.22 }}
        />
        {/* fade left so text stays crisp */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #2b2b2b 35%, transparent 70%, #2b2b2b 100%)",
          }}
        />
      </div>

      {/* ── Content grid (above background) ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <div>
          <ScrollReveal variant="fade-right" duration={700} threshold={0.1}>
            <div className="flex items-center gap-4 mb-14">
              <span className="block w-8 h-px bg-cream/50" />
              <span className="font-sans uppercase tracking-[0.15em] text-xs text-cream/50">
                About Me
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80} duration={800} threshold={0.1}>
            <h2
              className="font-serif font-normal text-cream mb-10"
              style={{ fontSize: "clamp(42px,5.5vw,80px)", lineHeight: "1.1em" }}
            >
              Engineering
              <br />
              <em>at the Edge</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={180} duration={800} threshold={0.1}>
            <p
              className="font-sans text-cream/70 mb-12"
              style={{ fontSize: "20px", lineHeight: "2em" }}
            >
              I&apos;m Abhishek — a CS (AI/ML) student at Polaris School of Technology
              and a concurrent Aerospace &amp; Space Technology undergraduate,
              currently cutting my teeth as a DevOps Intern at Nexavise. My work
              lives at a specific intersection: I architect intelligent workflows
              where ML models meet hardened infrastructure, then apply the
              reliability demands of aerospace systems to keep it all honest.
              Whether I&apos;m optimising a CI/CD pipeline, shipping an AI-powered
              metadata platform, or contributing to open-source tooling, the
              throughline is the same — build systems that are observable,
              automatable, and built to outlast the problem they solve.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={260} duration={700} threshold={0.1}>
            <Link
              href="#"
              className="font-sans uppercase tracking-widest text-xs text-cream border-b border-cream/60 pb-0.5 transition-opacity duration-200 hover:opacity-60"
            >
              Full Resume →
            </Link>
          </ScrollReveal>
        </div>

        {/* Right column — floating portrait card */}
        <ScrollReveal
          variant="zoom-in"
          delay={100}
          duration={900}
          threshold={0.1}
          className="order-first md:order-last"
        >
          <ScrollParallax speed={0.12}>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/res/ChatGPT Image Jun 9, 2026, 06_56_39 PM.png"
                alt="Abhishek Kumar Chauhan"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* subtle inner shadow so portrait edges blend into dark section */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 60px 20px #2b2b2b",
                  pointerEvents: "none",
                }}
              />
            </div>
          </ScrollParallax>
        </ScrollReveal>
      </div>
    </section>
  );
}
