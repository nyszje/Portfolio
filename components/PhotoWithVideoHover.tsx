"use client";

import { useState } from "react";

export default function PhotoWithVideoHover({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  videoId,
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  videoId: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => { setHovered(true); setLoaded(true); }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`w-full transition-opacity duration-300 ${imgClassName} ${hovered ? "opacity-0" : ""}`}
      />
      {loaded && (
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1`}
            className="w-full h-full"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Video preview"
          />
        </div>
      )}
    </div>
  );
}
