"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LeadershipProfile } from "@/components/about/LeadershipProfile";
import type { LeadershipMember } from "@/data/leadership";

type LeadershipCarouselProps = {
  members: LeadershipMember[];
};

export function LeadershipCarousel({ members }: LeadershipCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(
    null
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedMember) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [selectedMember]);

  const total = members.length;
  if (total === 0) return null;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibleCount = Math.min(4, total);
  const orderedMembers = Array.from({ length: visibleCount }, (_, offset) => {
    return members[(startIndex + offset) % total];
  });

  const desktopGridClass =
    visibleCount <= 2
      ? "mx-auto max-w-2xl grid-cols-1 sm:grid-cols-2"
      : visibleCount === 3
        ? "mx-auto max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <>
      <div className="relative mt-10 sm:px-14">
        {/* Desktop / Tablet Side Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous leadership member"
              className="hidden sm:inline-flex absolute left-0 top-[6.25rem] z-10 h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-white text-spruce-900 shadow-sm transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M19 12H5m6-6-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next leadership member"
              className="hidden sm:inline-flex absolute right-0 top-[6.25rem] z-10 h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-white text-spruce-900 shadow-sm transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </>
        )}

        {/* Responsive Circular Member Grid */}
        <div className={`grid gap-8 ${desktopGridClass}`}>
          {orderedMembers.map((member, slotIndex) => {
            const visibilityClass =
              slotIndex === 0
                ? "flex"
                : slotIndex === 1
                  ? "hidden sm:flex"
                  : "hidden lg:flex";

            return (
              <article
                key={`${member.id}-${slotIndex}`}
                className={`${visibilityClass} flex-col items-center text-center`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-surface-mist bg-spruce-900 shadow-xs transition-transform duration-300 group-hover:scale-[1.02] sm:h-50 sm:w-50">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.designation}`}
                        fill
                        sizes="200px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-serif text-4xl font-normal text-surface-white">
                        {member.initials}
                      </span>
                    )}
                  </div>

                  <h3 className="type-card mt-5 text-spruce-950">
                    {member.name}
                  </h3>
                  <span className="type-label mt-1 text-spruce-800 underline decoration-spruce-800/60 underline-offset-4 transition-colors group-hover:text-spruce-950 group-hover:decoration-spruce-950">
                    {member.designation}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* Mobile Centered Arrows Below Active Card */}
        {total > 1 && (
          <div className="mt-7 flex items-center justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous leadership member"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-white text-spruce-900 shadow-sm transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M19 12H5m6-6-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next leadership member"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface-white text-spruce-900 shadow-sm transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Consistent Executive Profile Modal on Click */}
      <dialog
        ref={dialogRef}
        aria-label={
          selectedMember
            ? `${selectedMember.name} leadership profile`
            : "Leadership profile"
        }
        onClose={() => setSelectedMember(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            setSelectedMember(null);
          }
        }}
        className="m-auto max-h-[90dvh] w-[min(94vw,64rem)] overflow-y-auto rounded-2xl bg-transparent p-0 shadow-2xl"
      >
        {selectedMember && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-surface-white text-spruce-950 shadow-xs transition-colors hover:bg-surface-mist sm:right-6 sm:top-6"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <LeadershipProfile member={selectedMember} />
          </div>
        )}
      </dialog>
    </>
  );
}
