import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ValleyFootprint } from "@/components/ui/ValleyFootprint";
import {
  CLASSROOM_KIT_ITEMS,
  NINE_POINT_MODEL,
  PROGRAM_PHASES,
} from "@/data/program";

export const metadata: Metadata = {
  title: "School-Partnership Program",
  description:
    "Explore BVEF's 9-point School-Partnership Program: Education Department MOU, STEM-only Three-Teacher Teams, offline solar digital classrooms, and exam-linked incentives.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        sectionLabel="School-Partnership Program"
        title="A practical 9-point model built for high-altitude public schools"
        lead="Designed around Basho Valley's real constraints—no internet, occasional electricity, and remote terrain—our program strengthens existing government schools without bricks-and-mortar overhead."
        imageSrc="/images/exams/image14.jpeg"
        imageAlt="Students writing examinations in the sunlit school courtyard in Basho Valley"
        imageCaption="Independent written examinations anchor BVEF's teacher incentive and evaluation system."
        meta="3 Operational Phases · 9 Core Commitments · 100% Existing Public School Infrastructure"
      />

      {/* 3-Phase Structured 9-Point Model */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-glacial-600">
              Operational Architecture
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
              How the 9-Point Model works in practice
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-body">
              Every partner school follows nine concrete commitments grouped
              into three operational phases—from public-sector partnership to
              classroom technology and dual accountability.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {PROGRAM_PHASES.map((phase) => {
              const phasePoints = NINE_POINT_MODEL.filter(
                (point) => point.phase === phase.id
              );

              return (
                <div
                  key={phase.id}
                  id={phase.id}
                  className="grid gap-8 border-t border-border-strong pt-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-4">
                    <p className="text-xs font-semibold text-ochre-600">
                      {phase.numeral}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-950">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-body">
                      {phase.summary}
                    </p>
                  </div>

                  <div className="divide-y divide-border-subtle rounded-sm border border-border-subtle bg-surface-white lg:col-span-8">
                    {phasePoints.map((point) => (
                      <article
                        key={point.number}
                        className="grid gap-3 p-6 sm:grid-cols-12 sm:gap-6 sm:p-7"
                      >
                        <div className="sm:col-span-2">
                          <span className="inline-flex h-8 w-10 items-center justify-center rounded-sm bg-navy-950 font-serif text-sm font-medium tabular-nums text-ochre-400">
                            {point.number}
                          </span>
                        </div>
                        <div className="sm:col-span-10">
                          <h4 className="font-serif text-xl font-medium text-navy-950">
                            {point.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-text-body">
                            {point.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offline Digital Classroom Hardware Kit */}
      <section
        id="classroom-kit"
        className="border-y border-border-subtle bg-surface-linen"
      >
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-glacial-600">
                Off-Grid Classroom Infrastructure
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                The Offline Digital Classroom Kit
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                Because Basho Valley has no internet access and only occasional
                electricity, donors equip each supported classroom with a
                self-contained offline teaching setup powered by solar backup.
              </p>

              <figure className="mt-7">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-white">
                  <Image
                    src="/images/classes/image12.jpg"
                    alt="Students engaged enthusiastically together inside a partner classroom in Basho Valley"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-text-muted">
                  Students participating in an interactive classroom session.
                </figcaption>
              </figure>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {CLASSROOM_KIT_ITEMS.map((item) => (
                <div
                  key={item.code}
                  className="flex flex-col justify-between rounded-sm border border-border-subtle bg-surface-white p-6"
                >
                  <div>
                    <span className="text-xs font-semibold tabular-nums text-ochre-600">
                      Component {item.code}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-medium text-navy-950">
                      {item.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-sm border border-navy-950/15 bg-navy-950 p-6 text-surface-white sm:col-span-2">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-serif text-xl font-medium text-surface-white">
                      Equip an entire off-grid classroom
                    </p>
                    <p className="mt-1 text-sm text-surface-white/75">
                      Sponsor all four hardware components for an active or
                      upcoming partner school.
                    </p>
                  </div>
                  <Link
                    href="/contact?topic=Equip+a+Digital+Classroom+Kit"
                    className="inline-flex shrink-0 items-center gap-2 rounded-md bg-ochre-500 px-5 py-2.5 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
                  >
                    <span>Sponsor a kit</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Accountability Highlight + 17-Village Footprint */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl space-y-14 px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-sm border border-border-subtle bg-surface-white p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium text-glacial-600">
                  Institutional Safeguard
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium text-navy-950 sm:text-3xl">
                  How dual accountability protects teaching quality
                </h2>
              </div>
              <div className="space-y-3 lg:col-span-7">
                <p className="text-sm leading-relaxed text-text-body sm:text-base">
                  Working inside public schools succeeds because roles are
                  unambiguous:
                </p>
                <ul className="space-y-2.5 text-sm text-text-body">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ochre-600" />
                    <span>
                      <strong className="font-semibold text-navy-950">
                        Administrative alignment:
                      </strong>{" "}
                      BVEF Teacher-Teams report administratively to the
                      government school headmaster and follow school schedules.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ochre-600" />
                    <span>
                      <strong className="font-semibold text-navy-950">
                        Academic rigor:
                      </strong>{" "}
                      Teachers remain directly accountable to BVEF and follow
                      only BVEF-approved STEM methodologies, offline resources,
                      and external exam benchmarks.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ValleyFootprint />
        </div>
      </section>

      <SupportBanner
        title="Bring the 9-Point Model to the next village"
        description="Your partnership enables BVEF to recruit, train, and equip a Three-Teacher STEM Team inside another waiting public school."
      />
    </>
  );
}
