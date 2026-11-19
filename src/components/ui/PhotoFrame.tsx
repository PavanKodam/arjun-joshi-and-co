"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type PhotoFrameProps = {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;       
  imageClassName?: string; // extra line added for imageClassName prop
  sizes?: string;
  priority?: boolean;
};

export default function PhotoFrame({
  src,
  alt,
  fallback,
  className = "",
  imageClassName = "object-cover",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`group relative overflow-hidden bg-sand ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center text-ink/30">
          {fallback}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          // className={`${imageClassName} object-cover transition-transform duration-700 group-hover:scale-110`}
          className={`${imageClassName} transition-transform duration-700 group-hover:scale-105`}
        />
      )}
    </div>
  );
}