"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot follows instantly — no lag
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const tick = () => {
      // Ring follows with slight lerp for smooth trail
      rx += (mx - rx) * 0.25;
      ry += (my - ry) * 0.25;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    const grow = () => ring.classList.add("!scale-150", "!border-acid/80");
    const shrink = () => ring.classList.remove("!scale-150", "!border-acid/80");

    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] w-2 h-2 rounded-full bg-acid pointer-events-none hidden md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9997] w-8 h-8 rounded-full border border-acid/40 pointer-events-none hidden md:block transition-all duration-200"
      />
    </>
  );
}
