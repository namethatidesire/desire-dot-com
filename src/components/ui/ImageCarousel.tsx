"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";

interface ImageCarouselProps {
  images?: string[];
  fallbackIcon: LucideIcon;
  alt: string;
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 24 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -24 }),
};

export default function ImageCarousel({ images, fallbackIcon: Icon, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const validImages = images?.filter(Boolean) ?? [];
  const count = validImages.length;

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => go((index - 1 + count) % count);
  const next = () => go((index + 1) % count);

  if (count === 0 || errors[index]) {
    return (
      <div className="w-36 h-36 rounded-2xl bg-accent-subtle flex items-center justify-center shrink-0">
        <Icon size={52} className="text-accent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="relative w-36 h-36 rounded-2xl overflow-hidden group">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={validImages[index]}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="144px"
              className="object-cover"
              onError={() => setErrors((e) => ({ ...e, [index]: true }))}
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            >
              <ChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center gap-1.5">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Image ${i + 1}`}
              className={`rounded-full bg-accent transition-all duration-200 ${
                i === index ? "w-5 h-2" : "w-2 h-2 opacity-40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
