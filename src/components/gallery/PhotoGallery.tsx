"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryCategoryId,
  type GalleryPhoto,
} from "@/data/gallery";

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

  const showPrevious = () => {
    if (selectedIndex === null || filteredPhotos.length === 0) return;
    setSelectedIndex(
      (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const showNext = () => {
    if (selectedIndex === null || filteredPhotos.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
  };

  // Fallback for browsers without <dialog closedby="any"> support (e.g., Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      setSelectedIndex(null);
    };
    dialog.addEventListener("close", handleClose);

    if ("closedBy" in HTMLDialogElement.prototype) {
      return () => {
        dialog.removeEventListener("close", handleClose);
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
      dialog.removeEventListener("pointerdown", onPointerDown);
      dialog.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Category Filter Bar */}
      <div
        className="flex flex-wrap gap-2"
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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-navy-900 text-surface-white shadow-xs"
                  : "border border-border-subtle bg-surface-white text-text-body hover:border-navy-900/40 hover:bg-gold-100/60"
              }`}
            >
              {category.label}{" "}
              <span
                className={`ml-1 text-xs ${
                  isSelected ? "text-gold-500" : "text-slate-500"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo, index) => (
          <figure
            key={photo.id}
            className="group overflow-hidden rounded-xl border border-border-subtle bg-surface-white shadow-xs transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="block w-full text-left"
              aria-label={`View larger photo: ${photo.caption}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-sm font-medium text-navy-900">
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
        className="m-auto max-h-[90dvh] w-[min(92dvw,56rem)] rounded-2xl border border-border-subtle bg-surface-white p-0 text-text-body shadow-2xl"
      >
        {activePhoto && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-5 py-3.5">
              <h2
                id="lightbox-title"
                className="font-serif text-base font-semibold text-navy-900 sm:text-lg"
              >
                {activePhoto.caption}
              </h2>
              <button
                type="button"
                onClick={closeLightbox}
                autoFocus
                className="rounded-lg border border-border-subtle bg-surface-ivory px-3 py-1.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-100"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-navy-950">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 768px) 92vw, 896px"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border-subtle px-5 py-3">
              <span className="text-xs font-medium text-slate-500">
                Photo {(selectedIndex ?? 0) + 1} of {filteredPhotos.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="rounded-lg border border-border-subtle bg-surface-white px-3 py-1.5 text-sm font-medium text-navy-900 transition-colors hover:bg-surface-ivory"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-lg bg-navy-900 px-3 py-1.5 text-sm font-medium text-surface-white transition-colors hover:bg-navy-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
