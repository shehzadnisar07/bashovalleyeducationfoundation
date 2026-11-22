import type { Metadata } from "next";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { PageHero } from "@/components/ui/PageHero";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { GALLERY_CATEGORIES, GALLERY_PHOTOS } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse 28 documentary photographs from Basho Valley: the River Sind suspension bridge, alpine terrain, morning assemblies, classrooms, examinations, educators, and parent-teacher meetings.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        sectionLabel="Photo Gallery"
        title="Documentary photography from Basho Valley"
        lead={`Explore ${GALLERY_PHOTOS.length} photographs across ${GALLERY_CATEGORIES.length - 1} themes—from the suspension bridge over the River Sind to morning assemblies, classroom lessons, written examinations, and community parent-teacher meetings.`}
        meta="Select any photograph for full-screen viewing · Use arrow keys or Escape to navigate"
      />

      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <PhotoGallery />
        </div>
      </section>

      <SupportBanner
        title="Help turn these classrooms into a foundation for university and careers"
        description="Every photograph here reflects a community investing its own leadership into education. Partner with BVEF to reach the 16 villages still waiting."
      />
    </>
  );
}
