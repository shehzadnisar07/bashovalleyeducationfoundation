"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/images/village/village-01.png",
    alt: "Homes and terraced agricultural plots in a Basho Valley village",
  },
  {
    src: "/images/village/village-02.png",
    alt: "Traditional stone and timber dwellings nestled against the Basho Valley mountains",
  },
  {
    src: "/images/village/village-03.png",
    alt: "Wide view of village households across Basho Valley",
  },
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Slide indicator dots */}
      <div
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5"
        role="group"
        aria-label="Hero village photos"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show village photo ${index + 1}`}
              aria-pressed={isActive}
              className={`h-2.5 rounded-full transition-all ${
                isActive
                  ? "w-7 bg-gold-500"
                  : "w-2.5 bg-surface-white/70 hover:bg-surface-white"
              }`}
            />
          );
        })}
      </div>
    </>
  );
}
