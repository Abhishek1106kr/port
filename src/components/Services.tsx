import Image from "@/components/Image";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    num: "01",
    name: "AI/ML Systems",
    desc: "Designing, training, and deploying applied ML pipelines — from feature engineering to inference at scale.",
  },
  {
    num: "02",
    name: "DevOps & Automation",
    desc: "Building CI/CD pipelines, container orchestration, and infrastructure-as-code that eliminates manual toil.",
  },
  {
    num: "03",
    name: "Aerospace & Data Architecture",
    desc: "Applying systems thinking from space-tech constraints to engineer robust, high-reliability data environments.",
  },
  {
    num: "04",
    name: "Open Source & Research",
    desc: "Contributing to open-source tooling and applied research at the edge of intelligent workflow automation.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f0ebd6", padding: "120px 60px" }}
    >
      {/* ── Blended background image ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/res/ChatGPT Image Jun 9, 2026, 06_59_29 PM.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left-top"
          style={{ mixBlendMode: "multiply", opacity: 0.14 }}
        />
        {/* fade right so the list stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, #f0ebd6 40%, transparent 80%)",
          }}
        />
      </div>

      {/* ── Content (above background) ── */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-14">
          <span className="block w-8 h-px bg-dark/50" />
          <span className="font-sans uppercase tracking-[0.15em] text-xs text-dark/50">
            What I Do
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Intro */}
          <div className="md:pr-20">
            <ScrollReveal variant="fade-up" duration={800} threshold={0.1}>
              <h2
                className="font-serif font-normal text-dark mb-10"
                style={{ fontSize: "clamp(42px,5.5vw,80px)", lineHeight: "1.1em" }}
              >
                Capabilities &amp;
                <br />
                <em>Expertise</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={120} duration={800} threshold={0.1}>
              <p
                className="font-sans text-dark/70 mb-12"
                style={{ fontSize: "20px", lineHeight: "2em" }}
              >
                I don&apos;t just write code — I design the systems that run it, scale
                it, and make it learn. My work spans three tightly coupled
                engineering domains.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={220} duration={700} threshold={0.1}>
              <a href="#contact" className="services-cta">
                Let&apos;s Connect
              </a>
            </ScrollReveal>
          </div>

          {/* List */}
          <ul className="border-t border-dark/15">
            {services.map((s, i) => (
              <ScrollReveal
                key={s.num}
                variant="fade-left"
                delay={i * 90}
                duration={700}
                threshold={0.08}
              >
                <li className="service-row flex items-start justify-between py-8 border-b border-dark/15 cursor-pointer gap-5">
                  <span className="font-sans text-xs tracking-widest text-dark/40 mt-1 shrink-0">
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <span
                      className="font-serif font-normal text-dark block mb-2"
                      style={{ fontSize: "clamp(24px,2.5vw,36px)" }}
                    >
                      {s.name}
                    </span>
                    <p className="font-sans text-dark/60 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <span className="service-arrow w-10 h-10 rounded-full border border-dark/30 flex items-center justify-center text-base text-dark shrink-0 mt-1">
                    ↗
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
