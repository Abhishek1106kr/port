import Image from "@/components/Image";

const socials = [
  { label: "GitHub", href: "https://github.com/Abhishek1106kr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhi-chauhan-685b0130a/" },
  { label: "Twitter / X", href: "https://media.tenor.com/xA-2d4VEHGMAAAAM/it-does-not-exist-data.gif" },
];

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#2b2b2b", padding: "80px 60px 60px" }}
    >
      {/* ── Blended background portrait ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/res/ChatGPT Image Jun 9, 2026, 07_06_55 PM.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ mixBlendMode: "soft-light", opacity: 0.2 }}
        />
        {/* stronger bottom fade so copyright row stays clean */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #2b2b2b 85%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16 mb-20">
          <div>
            <h2
              className="font-serif font-normal text-cream mb-10"
              style={{ fontSize: "clamp(42px,5.5vw,80px)", lineHeight: "1.1em" }}
            >
              Let&apos;s build
              <br />
              <em>something real</em>
            </h2>
            <a href="mailto:chauhanabhishekkr@gmail.com" className="footer-email-btn">
              Contact ME!
            </a>
          </div>

          <div className="md:text-right">
            <p className="font-sans uppercase tracking-widest text-xs text-cream/40 mb-4">
              Get in touch
            </p>
            <a
              href="mailto:chauhanabhishekkr@gmail.com"
              className="font-sans text-lg text-cream/90 block mb-8 hover:opacity-60 transition-opacity duration-200"
            >
              Contact ME!
            </a>
            <div className="flex gap-6 md:justify-end">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-sans uppercase tracking-widest text-xs text-cream/50 hover:text-cream transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pt-10"
          style={{ borderTop: "1px solid rgba(240,235,214,0.15)" }}
        >
          <p className="font-sans text-xs text-cream/35">
            © 2026 Abhishek Kumar Chauhan. All rights reserved.
          </p>
          <ul className="flex gap-8 list-none">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-sans uppercase tracking-widest text-xs text-cream/50 hover:text-cream transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
