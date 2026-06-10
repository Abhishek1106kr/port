import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollParallax from "@/components/ScrollParallax";

const galleryImages = [
  {
    src: "/images/res/ChatGPT Image Jun 9, 2026, 06_51_48 PM.png",
    alt: "AI/ML Systems architecture visualisation",
    caption: "AI Architecture",
    variant: "fade-up" as const,
    delay: 0,
    parallaxSpeed: 0.12,
    wide: true,
  },
  {
    src: "/images/res/ChatGPT Image Jun 9, 2026, 06_53_24 PM.png",
    alt: "DevOps pipeline and infrastructure automation",
    caption: "DevOps Pipeline",
    variant: "fade-left" as const,
    delay: 100,
    parallaxSpeed: 0.18,
    wide: false,
  },
  {
    src: "/images/res/ChatGPT Image Jun 9, 2026, 06_56_39 PM.png",
    alt: "Aerospace data systems and telemetry",
    caption: "Aerospace Data",
    variant: "fade-right" as const,
    delay: 200,
    parallaxSpeed: 0.14,
    wide: false,
  },
  {
    src: "/images/res/ChatGPT Image Jun 9, 2026, 06_59_29 PM.png",
    alt: "ML inference pipeline and model serving",
    caption: "ML Inference",
    variant: "zoom-in" as const,
    delay: 150,
    parallaxSpeed: 0.22,
    wide: false,
  },
  {
    src: "/images/res/ChatGPT Image Jun 9, 2026, 07_06_55 PM.png",
    alt: "Workflow automation and intelligent systems",
    caption: "Workflow Automation",
    variant: "fade-up" as const,
    delay: 250,
    parallaxSpeed: 0.16,
    wide: false,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ backgroundColor: "#2b2b2b", padding: "120px 60px" }}
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="block w-8 h-px bg-cream/50" />
        <span className="font-sans uppercase tracking-[0.15em] text-xs text-cream/50">
          Visual Notes
        </span>
      </div>

      {/* Header */}
      <ScrollReveal variant="fade-up" duration={800}>
        <h2
          className="font-serif font-normal text-cream mb-6"
          style={{ fontSize: "clamp(42px,5.5vw,80px)", lineHeight: "1.1em" }}
        >
          In the
          <br />
          <em>Field</em>
        </h2>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120} duration={800}>
        <p
          className="font-sans text-cream/60 mb-20 max-w-md"
          style={{ fontSize: "18px", lineHeight: "1.8em" }}
        >
          Snapshots from the build — infrastructure diagrams, model outputs, and
          systems at work.
        </p>
      </ScrollReveal>

      {/* Hero image — full width with parallax */}
      <ScrollReveal
        variant={galleryImages[0].variant}
        duration={900}
        threshold={0.1}
        className="mb-6"
      >
        {/* gallery-card = hover root for CSS zoom + caption */}
        <div className="gallery-card rounded-2xl overflow-hidden">
          <ScrollParallax speed={galleryImages[0].parallaxSpeed}>
            <div className="relative w-full" style={{ aspectRatio: "21/9" }}>
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                sizes="100vw"
                className="object-cover gallery-img"
                priority
              />
              <div className="gallery-caption absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <span className="font-sans uppercase tracking-widest text-xs text-cream/80">
                  {galleryImages[0].caption}
                </span>
              </div>
            </div>
          </ScrollParallax>
        </div>
      </ScrollReveal>

      {/* 2-column row: images 2 & 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {galleryImages.slice(1, 3).map((img) => (
          <ScrollReveal
            key={img.src}
            variant={img.variant}
            delay={img.delay}
            duration={800}
            threshold={0.12}
          >
            <div className="gallery-card rounded-2xl overflow-hidden">
              <ScrollParallax speed={img.parallaxSpeed}>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="50vw"
                    className="object-cover gallery-img"
                  />
                  <div className="gallery-caption absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/65 to-transparent">
                    <span className="font-sans uppercase tracking-widest text-xs text-cream/80">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </ScrollParallax>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* 3-column row: images 4 & 5 + quote card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.slice(3, 5).map((img) => (
          <ScrollReveal
            key={img.src}
            variant={img.variant}
            delay={img.delay}
            duration={800}
            threshold={0.12}
          >
            <div className="gallery-card rounded-2xl overflow-hidden">
              <ScrollParallax speed={img.parallaxSpeed}>
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="33vw"
                    className="object-cover gallery-img"
                  />
                  <div className="gallery-caption absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/65 to-transparent">
                    <span className="font-sans uppercase tracking-widest text-xs text-cream/80">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </ScrollParallax>
            </div>
          </ScrollReveal>
        ))}

        {/* Stat / quote card */}
        <ScrollReveal
          variant="zoom-in"
          delay={300}
          duration={700}
          threshold={0.15}
        >
          <div
            className="rounded-2xl flex flex-col justify-between p-10 h-full"
            style={{ backgroundColor: "rgb(249,111,77)", minHeight: "360px" }}
          >
            <span className="font-sans uppercase tracking-widest text-xs text-dark/60">
              Philosophy
            </span>
            <p
              className="font-serif text-dark mt-8"
              style={{ fontSize: "clamp(28px, 3vw, 42px)", lineHeight: "1.2em" }}
            >
              <em>
                &ldquo;Build systems that outlast the problem they solve.&rdquo;
              </em>
            </p>
            <span className="font-sans text-xs text-dark/50 mt-6 uppercase tracking-widest">
              — Abhishek Kumar Chauhan
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
