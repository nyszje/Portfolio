"use client";

import { useEffect, useRef, useState } from "react";

function parse(val: string) {
  const m = val.match(/^([+−\-]?)(\d+)(%?)$/);
  return m ? { pre: m[1], num: parseInt(m[2]), suf: m[3] } : null;
}

export default function CounterStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const parsed = parse(value);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.pre}0${parsed.suf}` : value
  );
  const triggered = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        io.unobserve(el);

        if (!parsed) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          return;
        }

        const dur = 1200;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${parsed.pre}${Math.round(eased * parsed.num)}${parsed.suf}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-display font-extrabold text-display-md text-acid leading-none whitespace-nowrap">
        {display}
      </span>
      <span className="font-mono text-xs text-smoke tracking-wider">{label}</span>
    </div>
  );
}
