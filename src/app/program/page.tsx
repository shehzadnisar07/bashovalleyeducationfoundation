import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CLASSROOM_KIT_ITEMS, NINE_POINT_MODEL } from "@/data/program";

export const metadata: Metadata = {
  title: "School-Partnership Program",
  description:
    "Explore BVEF's 9-point School-Partnership Program: Three-Teacher STEM Teams, offline digital classrooms, and expansion across Basho Valley.",
};

export default function ProgramPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-spruce-900 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="type-label text-saffron-100">
            Operational Model
          </p>
          <h1 className="type-hero mt-2 text-surface-white">
            School-Partnership{" "}
            <em className="italic">Program</em>
          </h1>
          <p className="type-body mt-4 max-w-[65ch] text-surface-white/85">
            A practical, accountable 9-point model that pairs local educators
            with offline digital classrooms inside existing public schools.
          </p>
        </div>
      </section>

      {/* 9-Point Operational Model */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="type-section text-spruce-950">
              How the 9-Point Model Works
            </h2>
            <p className="type-body mt-3 max-w-[65ch] text-text-body">
              Every partner school follows a clear operating framework designed
              for high-altitude, low-connectivity mountain communities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NINE_POINT_MODEL.map((point) => (
              <article
                key={point.number}
                className="rounded-xl border border-border-subtle bg-surface-mist p-6"
              >
                <span className="type-label inline-flex h-9 w-9 items-center justify-center rounded-full bg-spruce-900 font-semibold text-surface-white">
                  {point.number}
                </span>
                <h3 className="type-card mt-4 text-spruce-950">
                  {point.title}
                </h3>
                <p className="type-body mt-2 text-text-body">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Classroom Hardware Kit */}
      <section className="border-y border-border-subtle bg-surface-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle shadow-xs">
            <Image
              src="/images/classes/image13.jpg"
              alt="Students studying with digital learning tools inside a partner classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="type-label text-saffron-600">
              Classroom Technology
            </p>
            <h2 className="type-section mt-2 text-spruce-950">
              Offline Digital Classroom Kit
            </h2>
            <p className="type-body mt-3 max-w-[65ch] text-text-body">
              Because internet connectivity is limited in Basho Valley, each
              supported classroom runs entirely offline with solar-backed power:
            </p>

            <ul className="mt-6 space-y-4">
              {CLASSROOM_KIT_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-border-subtle bg-surface-white p-4"
                >
                  <p className="type-card text-spruce-950">{item.name}</p>
                  <p className="type-body mt-1 text-text-body">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expansion Roadmap */}
      <section className="bg-spruce-900 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="type-label text-saffron-100">
                Current Footprint &amp; Expansion
              </p>
              <h2 className="type-section mt-2 text-surface-white">
                From 1 Partner School to All 17 Villages
              </h2>
              <p className="type-body mt-4 max-w-[65ch] text-surface-white/85">
                BVEF currently supports{" "}
                <strong className="font-semibold text-surface-white">
                  {siteConfig.stats.activePartnerSchools} active partner school
                </strong>{" "}
                and plans to launch a{" "}
                <strong className="font-semibold text-surface-white">
                  2nd partner school before year-end
                </strong>
                . Across Basho Valley,{" "}
                <strong className="font-semibold text-surface-white">
                  {siteConfig.stats.villagesWaiting} remaining villages
                </strong>{" "}
                are waiting to join the program as funding grows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/support"
                className="type-btn inline-flex items-center justify-center rounded-full bg-saffron-600 px-8 py-3 text-surface-white transition-colors hover:bg-saffron-700"
              >
                Sponsor a Partner School
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-surface-white/30 px-6 py-3 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-900"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
