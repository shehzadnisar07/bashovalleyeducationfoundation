import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Basho Valley, the local education gap, and the seven Trustees guiding the Basho Valley Education Foundation (BVEF).",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
            Our Story &amp; Trust
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            About Basho Valley{" "}
            <span className="text-gold-500">Education Foundation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-white/80">
            A community-anchored charitable Trust working across Basho Valley to
            close the STEM learning gap in existing public schools.
          </p>
        </div>
      </section>

      {/* Geography & Valley Context */}
      <section className="bg-surface-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              Life Across the River Sind
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Basho Valley sits in the Himalayan mountain range at{" "}
              <strong className="text-navy-900">
                {siteConfig.stats.altitude}
              </strong>{" "}
              altitude near Skardu, Gilgit-Baltistan—roughly 68 miles from K2.
              Reaching the valley means crossing a suspension bridge over the
              River Sind and traveling a{" "}
              <strong className="text-navy-900">
                {siteConfig.stats.distanceFromSkardu}
              </strong>{" "}
              through steep alpine terrain.
            </p>
            <p className="text-base leading-relaxed text-text-body">
              Across 17 villages, families value education deeply, yet remote
              geography, harsh winters, and limited specialist staffing leave
              local primary and middle schools struggling to deliver consistent
              science, mathematics, and English instruction.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
            <Image
              src="/images/village/village-01.png"
              alt="Homes and terraced fields in a Basho Valley village"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BVEF Trust & Governance */}
      <section className="bg-surface-ivory border-y border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border-subtle bg-surface-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Governance
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-navy-900">
                {siteConfig.stats.trusteesCount} Trustees
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                BVEF is a duly registered charitable Trust governed by seven
                Trustees—most of whom are teachers actively working in Basho
                Valley—ensuring decisions reflect real classroom needs.
              </p>
              <p className="mt-4 text-xs font-medium text-slate-500">
                Status: {siteConfig.registrationNumber}
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Focus
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-navy-900">
                Existing Public Schools
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Rather than constructing parallel private buildings, BVEF signs
                MOUs with the Education Department to strengthen existing
                government schools from within.
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Retention
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-navy-900">
                Local Female Educators
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Employing qualified female teachers from within the valley
                reduces turnover, builds community trust, and keeps classrooms
                open year-round.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/program"
              className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-950"
            >
              Read the 9-Point Program
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-lg border border-navy-900 bg-surface-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-surface-ivory"
            >
              View Field Photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
