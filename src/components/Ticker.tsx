const items = [
  "AI/ML Systems",
  "DevOps & Automation",
  "Aerospace Data",
  "CI/CD Pipelines",
  "ML Inference",
  "Open Source",
  "Infrastructure as Code",
  "Applied Research",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden flex"
      style={{ backgroundColor: "rgb(249,111,77)", padding: "18px 0" }}
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-16 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-sans uppercase tracking-widest text-xs shrink-0 flex items-center gap-16"
            style={{ color: "rgb(22,22,22)" }}
          >
            {item}
            <span className="text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
