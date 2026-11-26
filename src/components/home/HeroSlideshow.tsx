"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/images/hero-section/image1.jpg",
    alt: "Snow-dusted suspension bridge crossing the River Sind toward Basho Valley in winter",
  },
  {
    src: "/images/hero-section/image2.jpeg",
    alt: "Students in blue and white uniforms gathered in morning assembly prayer outside the Basho Valley partner school",
  },
  {
    src: "/images/hero-section/image3.jpeg",
    alt: "Boys and girls standing in rows during morning assembly in the sunlit courtyard of the Basho Valley partner school",
  },
  {
    src: "/images/hero-section/image4.jpeg",
    alt: "Students sitting outdoors in the sunlit courtyard completing written work at the Basho Valley partner school",
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
              loading="eager"
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}
    </>
  );
}
