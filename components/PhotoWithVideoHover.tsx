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
      className={className}
      onMouseEnter={() => { setHovered(true); setLoaded(true); }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`w-full ${imgClassName}`}
      />

      {/* Video slides in below the photo */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${hovered ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="relative mt-2" style={{ paddingBottom: "177.78%" }}>
            {loaded && (
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Video preview"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
