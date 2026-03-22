"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const grow = () => dot.classList.add("scale-150");
    const shrink = () => dot.classList.remove("scale-150");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9998] w-2.5 h-2.5 rounded-full pointer-events-none hidden md:block transition-transform duration-100 bg-acid"
    />
  );
}
