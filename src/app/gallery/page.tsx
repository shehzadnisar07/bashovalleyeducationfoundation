import type { Metadata } from "next";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { GALLERY_PHOTOS } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse 28 categorized photographs from Basho Valley: valley views, villages, morning assemblies, classrooms, exams, teachers, and parent-teacher meetings.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-spruce-900 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="type-label text-saffron-100">
            Field Photography
          </p>
          <h1 className="type-hero mt-2 text-surface-white">
            Basho Valley <em className="italic">Photo Gallery</em>
          </h1>
          <p className="type-body mt-4 max-w-[65ch] text-surface-white/85">
            Explore {GALLERY_PHOTOS.length} photographs from across Basho Valley
            and our partner school—filter by category or select any photo to
            view it full size.
          </p>
        </div>
      </section>

      <section className="bg-surface-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
