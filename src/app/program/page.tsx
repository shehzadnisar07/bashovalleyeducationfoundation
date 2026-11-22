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
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
            Operational Model
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            School-Partnership{" "}
            <span className="text-gold-500">Program</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-white/80">
            A practical, accountable 9-point model that pairs local educators
            with offline digital classrooms inside existing public schools.
          </p>
        </div>
      </section>

      {/* 9-Point Operational Model */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              How the 9-Point Model Works
            </h2>
            <p className="mt-3 text-base text-text-body">
              Every partner school follows a clear operating framework designed
              for high-altitude, low-connectivity mountain communities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NINE_POINT_MODEL.map((point) => (
              <article
                key={point.number}
                className="rounded-2xl border border-border-subtle bg-surface-ivory p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-950 font-serif text-sm font-bold text-gold-500">
                  {point.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-navy-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Classroom Hardware Kit */}
      <section className="bg-surface-ivory border-y border-border-subtle">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
            <Image
              src="/images/classes/image13.jpg"
              alt="Students studying with digital learning tools inside a partner classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Classroom Technology
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-900">
              Offline Digital Classroom Kit
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-body">
              Because internet connectivity is limited in Basho Valley, each
              supported classroom runs entirely offline with solar-backed power:
            </p>

            <ul className="mt-6 space-y-4">
              {CLASSROOM_KIT_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-border-subtle bg-surface-white p-4"
                >
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="mt-1 text-sm text-text-body">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expansion Roadmap */}
      <section className="bg-navy-850 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
                Current Footprint &amp; Expansion
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold">
                From 1 Partner School to All 17 Villages
              </h2>
              <p className="mt-4 text-base leading-relaxed text-surface-white/80">
                BVEF currently supports{" "}
                <strong className="text-gold-500">
                  {siteConfig.stats.activePartnerSchools} active partner school
                </strong>{" "}
                and plans to launch a{" "}
                <strong className="text-gold-500">
                  2nd partner school before year-end
                </strong>
                . Across Basho Valley,{" "}
                <strong className="text-gold-500">
                  {siteConfig.stats.villagesWaiting} remaining villages
                </strong>{" "}
                are waiting to join the program as funding grows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
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
