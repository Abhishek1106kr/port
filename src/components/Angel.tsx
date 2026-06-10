"use client";

import { useEffect, useRef } from "react";

const WAYPOINTS: [number, number, number, number, number][] = [
  [0.00,  72,  6, -20, 1.00],
  [0.06,  54, 15,   8, 1.06],
  [0.12,  32, 10, -12, 0.94],
  [0.20,  16, 28,  14, 1.08],
  [0.28,  42, 38,  -6, 1.02],
  [0.36,  66, 32,  18, 1.10],
  [0.44,  50, 50,  -4, 0.96],
  [0.52,  20, 56,  10, 1.04],
  [0.60,  38, 66,  -8, 0.98],
  [0.70,  68, 60,  16, 1.06],
  [0.78,  53, 74,  -5, 1.00],
  [0.88,  26, 80,  10, 1.03],
  [0.94,  46, 86,  -2, 1.01],
  [1.00,  48, 88,   0, 1.00],
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getPosition(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  let lo = WAYPOINTS[0];
  let hi = WAYPOINTS[WAYPOINTS.length - 1];
  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    if (p >= WAYPOINTS[i][0] && p <= WAYPOINTS[i + 1][0]) {
      lo = WAYPOINTS[i];
      hi = WAYPOINTS[i + 1];
      break;
    }
  }
  const segLen = hi[0] - lo[0];
  const t = segLen === 0 ? 0 : (p - lo[0]) / segLen;
  return {
    x:   lerp(lo[1], hi[1], t),
    y:   lerp(lo[2], hi[2], t),
    rot: lerp(lo[3], hi[3], t),
    sc:  lerp(lo[4], hi[4], t),
  };
}

/**
 * Remove near-white pixels from the JPG on a canvas so only the
 * angel character itself is drawn — no white background box.
 * Tolerance 30 catches the anti-aliased fringe pixels too.
 */
function removeWhiteBackground(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  tolerance = 30
) {
  const imageData = ctx.getImageData(0, 0, w, h);
  const d = imageData.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i + 1], b = d[i + 2];
    // A pixel is "white background" if all channels are close to 255
    if (r >= 255 - tolerance && g >= 255 - tolerance && b >= 255 - tolerance) {
      d[i + 3] = 0; // fully transparent
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

export default function Angel() {
  const elRef    = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef   = useRef<number>(0);
  const cur = useRef({ x: 72, y: 6, rot: -20, sc: 1.0 });
  const tgt = useRef({ x: 72, y: 6, rot: -20, sc: 1.0 });

  /* ── Load image → canvas with white removed ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const SIZE = 140; // display size in px

    const img = new window.Image();
    img.onload = () => {
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      removeWhiteBackground(ctx, img.naturalWidth, img.naturalHeight, 30);
      // Scale display via CSS — keeps canvas resolution at native
      canvas.style.width  = `${SIZE}px`;
      canvas.style.height = `${SIZE}px`;
    };
    img.src = "/images/angel.png";
  }, []);

  /* ── Scroll-linked flight path ── */
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      tgt.current = getPosition(progress);
    };

    const EASE = 0.07;
    const tick = () => {
      cur.current.x   = lerp(cur.current.x,   tgt.current.x,   EASE);
      cur.current.y   = lerp(cur.current.y,    tgt.current.y,   EASE);
      cur.current.rot = lerp(cur.current.rot,  tgt.current.rot, EASE);
      cur.current.sc  = lerp(cur.current.sc,   tgt.current.sc,  EASE);

      el.style.transform =
        `translate(${cur.current.x.toFixed(2)}vw, ${cur.current.y.toFixed(2)}vh)` +
        ` rotate(${cur.current.rot.toFixed(2)}deg)` +
        ` scale(${cur.current.sc.toFixed(3)})`;

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
        transform: "translate(72vw, 6vh) rotate(-20deg) scale(1)",
      }}
    >
      {/* Idle float + glow from CSS */}
      <div className="angel-bob">
        {/* Canvas renders the angel without its white JPG background */}
        <canvas
          ref={canvasRef}
          className="angel-canvas"
          style={{ display: "block", imageRendering: "auto" }}
        />
      </div>
    </div>
  );
}
