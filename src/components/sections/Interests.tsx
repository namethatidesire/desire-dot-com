"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { interests } from "@/data/interests";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL = interests.length;

const pageVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir === 0 ? 0 : dir * 48,
  }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir === 0 ? 0 : dir * -48,
  }),
};

export default function AboutCarousel() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(0);

  const goTo = useCallback((next: number) => {
    setDir(next === 0 && page === 0 ? 0 : next > page ? 1 : -1);
    setPage(next);
  }, [page]);

  const prev = () => {
    const next = (page - 1 + TOTAL) % TOTAL;
    setDir(-1);
    setPage(next);
  };

  const next = () => {
    const next = (page + 1) % TOTAL;
    setDir(1);
    setPage(next);
  };

  const titles = interests.map((i) => i.title);

  return (
    <SectionWrapper id="interests">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.h2 className="mb-2">
              Hobbies & Interests
            </motion.h2>
            <AnimatePresence mode="wait">
              <motion.h2
                key={page}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
                className="text-3xl font-bold text-foreground"
              >
                {titles[page]}
              </motion.h2>
            </AnimatePresence>
            <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous page"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: TOTAL }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${titles[i]}`}
                  className={`rounded-full bg-accent transition-all duration-200 ${
                    i === page ? "w-5 h-2" : "w-2 h-2 opacity-30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next page"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Page content */}
        <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`interest-${page}`}
              custom={dir}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
              className="grid md:grid-cols-[160px_1fr] gap-10 items-start"
            >
              {(() => {
                const interest = interests[page];
                return (
                  <>
                    <div className="flex justify-center md:justify-start">
                      <ImageCarousel
                        images={interest.images}
                        fallbackIcon={interest.icon}
                        alt={interest.title}
                      />
                    </div>
                    <div className="pt-1 text-muted-foreground leading-relaxed">
                        {interest.body}
                    </div>
                  </>
                );
              })()}
            </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
