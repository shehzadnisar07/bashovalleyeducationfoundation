import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { siteConfig } from "@/config/site";
import { VALLEY_REALITIES } from "@/data/program";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the geography of Basho Valley, the local education gap across its 17 villages, and the seven local Trustees leading the Basho Valley Education Foundation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        sectionLabel="About Us"
        title="Born inside Basho Valley, led by its own teachers"
        lead="Basho Valley Education Foundation is a duly registered charitable Trust established by valley residents determined to transform STEM learning outcomes inside existing public schools."
        imageSrc="/images/valley-views/image5.jpg"
        imageAlt="Towering Himalayan granite mountain wall rising above the turquoise River Sind"
        imageCaption="The Himalayan gorge and River Sind framing the approach to Basho Valley."
        meta={`Altitude ${siteConfig.stats.altitude} · ${siteConfig.stats.distanceFromK2} · ${siteConfig.stats.distanceFromNangaParbat} · ${siteConfig.stats.distanceFromRakaposhi}`}
      />

      {/* Chapter 1: Geography & Daily Realities */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-5 lg:col-span-5">
              <p className="text-xs font-medium text-glacial-600">
                01 · Geography &amp; Isolation
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                A valley virtually cut off from the modern world
              </h2>
              <p className="text-base leading-relaxed text-text-body">
                Tucked away in the Himalayan mountain range—roughly{" "}
                <strong className="font-semibold text-navy-950">
                  68 miles from K2
                </strong>
                ,{" "}
                <strong className="font-semibold text-navy-950">
                  46 miles from Nanga Parbat
                </strong>
                , and{" "}
                <strong className="font-semibold text-navy-950">
                  66 miles from Rakaposhi
                </strong>
                —Basho Valley rises between {siteConfig.stats.altitude}.
              </p>
              <p className="text-base leading-relaxed text-text-body">
                Reaching the valley means crossing a suspension bridge over the
                gushing River Sind near Skardu and traveling a 20 km unpaved
                mountain track. Only recently have specialized 4×4 jeeps begun
                navigating the steep terrain.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {VALLEY_REALITIES.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-sm border border-border-subtle bg-surface-white p-6"
                  >
                    <h3 className="font-serif text-xl font-medium text-navy-950">
                      {item.label}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Local Education Gap */}
      <section className="border-y border-border-subtle bg-surface-linen">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-white">
                  <Image
                    src="/images/school-building/image16.jpg"
                    alt="Existing whitewashed government school veranda in Basho Valley"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-text-muted">
                  Existing public school buildings already stand across the valley.
                </figcaption>
              </figure>

              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-white">
                  <Image
                    src="/images/valley-views/image6.jpg"
                    alt="Unpaved mountain track winding above terraced village plots in Basho Valley"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-text-muted">
                  Remote terrain makes recruiting outside specialist teachers difficult.
                </figcaption>
              </figure>
            </div>

            <div className="space-y-5 lg:col-span-6">
              <p className="text-xs font-medium text-glacial-600">
                02 · The Education Challenge
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                School buildings exist—qualified STEM instruction does not
              </h2>
              <p className="text-base leading-relaxed text-text-body">
                Apart from a single high school in the valley, every other
                school is a primary or middle school. Sending a child to an
                out-of-town high school demands resources far beyond what most
                valley families possess.
              </p>
              <p className="text-base leading-relaxed text-text-body">
                While government school buildings stand in the villages, they
                have long lacked enough qualified, experienced teachers. As a
                result, large numbers of children fail even Middle School
                examinations, and hardly any student from Basho Valley has ever
                gone on to university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Trust & Local Governance */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-5 lg:col-span-6">
              <p className="text-xs font-medium text-glacial-600">
                03 · Trust Origin &amp; Governance
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                Seven Trustees taking responsibility for the next generation
              </h2>
              <p className="text-base leading-relaxed text-text-body">
                Frustrated by decades of stagnation, the residents of Basho
                Valley established BVEF as a duly registered charitable Trust
                with one singular mandate: to improve learning outcomes for the
                children of the valley.
              </p>
              <p className="text-base leading-relaxed text-text-body">
                Most of BVEF&apos;s{" "}
                <strong className="font-semibold text-navy-950">
                  {siteConfig.stats.trusteesCount} Trustees
                </strong>{" "}
                are teachers actively working in Basho Valley. Because
                governance sits directly inside the community, every decision—from
                hiring local female educators to conducting regular
                parent-teacher meetings—is rooted in lived classroom reality.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/program"
                  className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-2.5 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-900"
                >
                  <span>Read the 9-Point Program</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-md border border-border-strong bg-surface-white px-5 py-2.5 text-sm font-medium text-navy-950 transition-colors hover:bg-surface-linen"
                >
                  Browse field photographs
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-linen">
                  <Image
                    src="/images/teachers/image23.jpg"
                    alt="Five local educators standing together at the Basho Valley partner school"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-text-muted">
                  Local educators dedicated to Basho Valley&apos;s classrooms.
                </figcaption>
              </figure>

              <figure>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-linen">
                  <Image
                    src="/images/parent-teacher-meeting/image24.jpg"
                    alt="Mothers and fathers gathered in the school courtyard for a parent-teacher meeting"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-text-muted">
                  Parents gathered in the courtyard for regular progress reviews.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <SupportBanner
        title="Partner with a community-led charitable Trust"
        description="Support our active partner school, help launch the 2nd school planned before year-end, or discuss expanding to the 16 villages still waiting."
      />
    </>
  );
}
