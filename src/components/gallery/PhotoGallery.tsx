"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/ui/Icons";
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryCategoryId,
  type GalleryPhoto,
} from "@/data/gallery";

const CATEGORY_LABEL_MAP = Object.fromEntries(
  GALLERY_CATEGORIES.map((c) => [c.id, c.label])
);

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GALLERY_PHOTOS.length };
    for (const photo of GALLERY_PHOTOS) {
      counts[photo.category] = (counts[photo.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const activePhoto: GalleryPhoto | null =
    selectedIndex !== null ? filteredPhotos[selectedIndex] ?? null : null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeLightbox = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;
      return (prev + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  // Keyboard navigation inside open lightbox + backdrop click fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      setSelectedIndex(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
    };

    dialog.addEventListener("close", handleClose);
    window.addEventListener("keydown", handleKeyDown);

    if ("closedBy" in HTMLDialogElement.prototype) {
      return () => {
        dialog.removeEventListener("close", handleClose);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    const isOutside = (e: PointerEvent) => {
      const rect = dialog.getBoundingClientRect();
      return (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      );
    };

    let pressedOutside = false;
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener("pointerdown", onPointerDown);
    dialog.addEventListener("pointerup", onPointerUp);

    return () => {
      dialog.removeEventListener("close", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("pointerup", onPointerUp);
    };
  }, [showNext, showPrevious]);

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      <div className="border-b border-border-subtle pb-5">
        <div
          className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
          role="group"
          aria-label="Filter gallery by category"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.id;
            const count = categoryCounts[category.id] ?? 0;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedIndex(null);
                }}
                aria-pressed={isSelected}
                className={`shrink-0 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-navy-950 text-surface-white"
                    : "border border-border-subtle bg-surface-white text-text-body hover:border-navy-950/40 hover:text-navy-950"
                }`}
              >
                {category.label}
                <span
                  className={`ml-1.5 text-xs tabular-nums ${
                    isSelected ? "text-ochre-400" : "text-text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo, index) => (
          <figure key={photo.id} className="group flex flex-col">
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="block w-full text-left"
              aria-label={`View full photograph: ${photo.caption}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-linen">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                    photo.objectPosition === "top"
                      ? "object-top"
                      : "object-center"
                  }`}
                />
              </div>
              <figcaption className="mt-3 space-y-1">
                <span className="block text-xs font-medium text-glacial-600">
                  {CATEGORY_LABEL_MAP[photo.category]}
                </span>
                <p className="text-sm font-medium leading-snug text-navy-950 group-hover:text-ochre-600">
                  {photo.caption}
                </p>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {/* Native Modal Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        {...({ closedby: "any" } as Record<string, string>)}
        className="m-auto max-h-[92dvh] w-[min(94dvw,60rem)] overflow-hidden rounded-sm border border-surface-white/15 bg-navy-980 p-0 text-surface-white shadow-2xl"
      >
        {activePhoto && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-surface-white/10 px-5 py-4">
              <div className="min-w-0">
                <span className="block text-xs font-medium text-ochre-400">
                  {CATEGORY_LABEL_MAP[activePhoto.category]}
                </span>
                <h2
                  id="lightbox-title"
                  className="mt-0.5 truncate font-serif text-base font-medium text-surface-white sm:text-lg"
                >
                  {activePhoto.caption}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                autoFocus
                aria-label="Close photograph viewer"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-surface-white/20 text-surface-white transition-colors hover:bg-navy-900"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black/50">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 768px) 94vw, 960px"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-surface-white/10 px-5 py-3.5">
              <span className="text-xs font-medium tabular-nums text-surface-white/70">
                Photograph {(selectedIndex ?? 0) + 1} of {filteredPhotos.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex items-center gap-1.5 rounded-md border border-surface-white/20 px-3.5 py-1.5 text-sm font-medium text-surface-white transition-colors hover:bg-navy-900"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex items-center gap-1.5 rounded-md bg-ochre-500 px-3.5 py-1.5 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
                >
                  <span>Next</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
