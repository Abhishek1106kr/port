import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    id: "01",
    title: "AI Metadata Platform",
    desc: "End-to-end AI-powered metadata ingestion, classification, and search platform built with applied ML.",
    src: "/images/proj_ai_metadata.png",
    wide: true,
  },
  {
    id: "02",
    title: "CI/CD Infrastructure",
    desc: "Automated deployment pipeline with container orchestration, IaC, and zero-downtime delivery at Nexavise.",
    src: "/images/proj_cicd.png",
    wide: false,
  },
  {
    id: "03",
    title: "ML Inference Pipeline",
    desc: "Scalable inference engine — feature engineering to model serving with monitoring and drift detection.",
    src: "/images/proj_ml_inference.png",
    wide: false,
  },
  {
    id: "04",
    title: "Aerospace Data System",
    desc: "High-reliability data architecture applying aerospace-grade fault tolerance to distributed systems design.",
    src: "/images/proj_aerospace.png",
    wide: false,
  },
  {
    id: "05",
    title: "Workflow Automation",
    desc: "Intelligent automation layer eliminating manual toil across engineering and data operations workflows.",
    src: "/images/proj_automation.png",
    wide: false,
  },
  {
    id: "06",
    title: "Open Source Contributions",
    desc: "Active contributor to open-source tooling in the ML and DevOps ecosystems. Code that outlasts the project.",
    src: "/images/proj_opensource.png",
    wide: false,
  },
];

export default function WorkGrid() {
  return (
    <section
      id="work"
      style={{ backgroundColor: "#f0ebd6", padding: "120px 60px" }}
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="block w-8 h-px bg-dark/50" />
        <span className="font-sans uppercase tracking-[0.15em] text-xs text-dark/50">
          Selected Work
        </span>
      </div>

      {/* Header row */}
      <div className="flex items-end justify-between gap-10 mb-14">
        <ScrollReveal variant="fade-up" duration={800}>
          <h2
            className="font-serif font-normal text-dark"
            style={{ fontSize: "clamp(42px,5.5vw,80px)", lineHeight: "1.1em" }}
          >
            Featured
            <br />
            <em>Projects</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={150} duration={700}>
          <Link
            href="#"
            className="font-sans uppercase tracking-widest text-xs text-dark border-b border-dark pb-0.5 shrink-0 transition-opacity duration-200 hover:opacity-50"
          >
            View all work
          </Link>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal
            key={p.id}
            variant={i % 2 === 0 ? "fade-up" : "fade-up"}
            delay={p.wide ? 0 : (i % 2) * 120}
            duration={800}
            threshold={0.08}
            className={p.wide ? "md:col-span-2" : ""}
          >
            <div className="work-card relative overflow-hidden rounded-xl cursor-pointer bg-[#e0dac8] w-full">
              <span className="absolute top-6 left-7 z-10 font-sans text-xs tracking-widest text-cream/60">
                {p.id}
              </span>

              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: p.wide ? "16/9" : "4/3" }}
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  unoptimized
                  sizes={p.wide ? "100vw" : "50vw"}
                  className="object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Hover overlay */}
              <div
                className="card-overlay absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(43,43,43,0.88) 0%, transparent 100%)",
                }}
              >
                <p
                  className="font-serif text-cream mb-1"
                  style={{ fontSize: "28px" }}
                >
                  {p.title}
                </p>
                <p className="font-sans text-cream/80 text-sm">{p.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
