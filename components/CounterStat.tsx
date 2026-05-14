"use client";

import { useEffect, useRef, useState } from "react";

function parse(val: string) {
  const m = val.match(/^([+−\-]?)(\d+(?:\.\d+)?)(%?)$/);
  if (!m) return null;
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { pre: m[1], num: parseFloat(m[2]), suf: m[3], decimals };
}

function fmt(n: number, decimals: number) {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
}

export default function CounterStat({
  value,
  label,
  subLabel,
}: {
  value: string;
  label: string;
  subLabel?: string;
}) {
  const parsed = parse(value);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.pre}${fmt(0, parsed.decimals)}${parsed.suf}` : value
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
          setDisplay(`${parsed.pre}${fmt(eased * parsed.num, parsed.decimals)}${parsed.suf}`);
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
      {subLabel && (
        <span className="font-mono text-[10px] text-smoke/60 leading-snug">{subLabel}</span>
      )}
    </div>
  );
}
