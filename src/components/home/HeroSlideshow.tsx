"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/images/valley-views/image4.jpg",
    alt: "Basho Valley village, terraced fields, and partner public school nestled beneath golden Himalayan cliffs",
    caption: "Basho Valley village and partner public school · 8,800–11,800 ft",
  },
  {
    src: "/images/morning-assembly/image7.jpeg",
    alt: "Students lined up in morning assembly in the sunlit courtyard of the partner school in Basho Valley",
    caption: "Morning assembly at the Basho Valley partner school",
  },
  {
    src: "/images/valley-views/image1.jpg",
    alt: "Wooden suspension bridge with blue railings spanning the River Sind into Basho Valley",
    caption: "Crossing the River Sind suspension bridge toward the valley",
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
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeIndex];

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

      {/* Editorial bottom caption & slide selector */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-surface-white/15 bg-navy-980/55 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-xs text-surface-white/85">
            {currentSlide.caption}
          </p>

          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Select hero photograph"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show photograph ${index + 1}: ${slide.caption}`}
                  aria-pressed={isActive}
                  className={`h-1.5 rounded-xs transition-all ${
                    isActive
                      ? "w-8 bg-ochre-500"
                      : "w-4 bg-surface-white/45 hover:bg-surface-white/80"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
