"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    let mx = 0, my = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      orb.style.transform = `translate(${mx - 20}px, ${my - 20}px)`;
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    const grow = () => orb.classList.add("scale-150");
    const shrink = () => orb.classList.remove("scale-150");

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    addListeners();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden="true"
      className="cursor-orb fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full pointer-events-none hidden md:block transition-transform duration-150"
    />
  );
}
