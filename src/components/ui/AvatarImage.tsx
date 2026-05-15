"use client";

import { useState } from "react";
import Image from "next/image";

interface AvatarImageProps {
  src?: string;
  alt: string;
  initials: string;
  /** "profile" = large rounded square (w-36 h-36), "logo" = small rounded square (w-10 h-10) */
  variant?: "profile" | "logo";
}

export default function AvatarImage({
  src,
  alt,
  initials,
  variant = "profile",
}: AvatarImageProps) {
  const [error, setError] = useState(false);

  const showImage = !!src && !error;

  if (variant === "logo") {
    return showImage ? (
      <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0">
        <Image
          src={src!}
          alt={alt}
          fill
          sizes="40px"
          className="object-cover"
          onError={() => setError(true)}
        />
      </div>
    ) : (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent-subtle text-accent text-xs font-bold shrink-0 select-none">
        {initials}
      </span>
    );
  }

  return showImage ? (
    <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0">
      <Image
        src={src!}
        alt={alt}
        fill
        sizes="144px"
        className="object-cover scale-120"
        onError={() => setError(true)}
      />
    </div>
  ) : (
    <div className="w-36 h-36 rounded-2xl bg-accent-subtle flex items-center justify-center shrink-0">
      <span className="text-4xl font-bold text-accent select-none">{initials}</span>
    </div>
  );
}
