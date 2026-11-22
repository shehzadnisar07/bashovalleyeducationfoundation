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
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
            Field Photography
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Basho Valley <span className="text-gold-500">Photo Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-white/80">
            Explore {GALLERY_PHOTOS.length} photographs from across Basho Valley
            and our partner school—filter by category or select any photo to
            view it full size.
          </p>
        </div>
      </section>

      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>
    </>
  );
}
