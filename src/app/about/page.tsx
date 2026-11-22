import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Basho Valley Education Foundation's vision, mission, story, CEO Taj Muhammad, and the seven Trustees guiding BVEF.",
};

const PARTNERSHIP_PILLARS = [
  {
    title: "Education Department MOU",
    detail: "Formal partnership strengthening existing government schools.",
    icon: "building",
  },
  {
    title: "Local Female Educators",
    detail: "Qualified valley teachers ensuring retention and role models.",
    icon: "users",
  },
  {
    title: "Offline Digital Kits",
    detail: "TV, two laptops, speakers, and solar power with battery backup.",
    icon: "laptop",
  },
  {
    title: "7 Community Trustees",
    detail: "Mostly working teachers in Basho Valley guiding every decision.",
    icon: "shield",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* 1. Full-Bleed Top Photo Hero */}
      <section className="relative isolate min-h-[380px] overflow-hidden bg-spruce-950 sm:min-h-[480px]">
        <Image
          src="/images/classes/image11.jpg"
          alt="Students learning inside a BVEF partner classroom in Basho Valley"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[380px] max-w-7xl items-end px-4 pb-12 sm:min-h-[480px] sm:px-6 lg:px-8">
          <div className="max-w-2xl text-surface-white">
            <p className="text-xs font-bold uppercase tracking-widest text-saffron-100">
              Who We Are
            </p>
            <h1 className="mt-2 font-serif text-4xl font-normal tracking-tight sm:text-5xl">
              About <strong className="font-bold uppercase">{siteConfig.name}</strong>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Our Vision (White Background, Centered Heading + Editorial Copy) */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-normal text-spruce-900 sm:text-4xl">
            Our Vision
          </h2>
          <p className="mt-8 text-base leading-relaxed text-text-body sm:text-lg">
            Our vision is to unlock human potential across Basho Valley by{" "}
            <strong className="font-semibold text-spruce-950">
              transforming STEM and English learning outcomes for every child.
            </strong>
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-body">
            Quality education stands as a beacon of hope in remote mountain
            communities—uplifting families, strengthening economic stability,
            and opening doors to opportunity across all 17 villages of Basho
            Valley.
          </p>
        </div>
      </section>

      {/* 3. Our Mission (50/50 Full-Bleed Photo Left + Glacier Mist Right) */}
      <section className="grid bg-surface-mist lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[540px]">
          <Image
            src="/images/children/image22.jpg"
            alt="Students smiling at a partner school in Basho Valley"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-lg space-y-5">
            <h2 className="text-center font-serif text-3xl font-normal text-spruce-900 sm:text-4xl lg:text-left">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Our mission is to establish{" "}
              <strong className="font-semibold italic text-spruce-950">
                effective and scalable school-partnership classrooms
              </strong>{" "}
              by combining local educators with offline digital technology.
            </p>
            <p className="text-base leading-relaxed text-text-body">
              Rather than spending donor funds on bricks-and-mortar buildings,
              BVEF signs formal MOUs with the local Education Department to
              supplement public school staff with a dedicated{" "}
              <strong className="font-semibold text-spruce-950">
                Three-Teacher STEM Team
              </strong>
              .
            </p>
            <p className="text-base leading-relaxed text-text-body">
              Each classroom is equipped with a TV screen, two laptops, extra
              speakers, offline lessons, and solar panels with battery backup.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Story (Inverted 50/50 Split: Glacier Mist Left + Full-Bleed Photo Right) */}
      <section className="grid border-t border-border-subtle bg-surface-mist lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-14 sm:px-12 lg:order-1 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-lg space-y-5">
            <h2 className="font-serif text-3xl font-normal text-spruce-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Basho Valley lies across a suspension bridge over the River Sind
              and a{" "}
              <strong className="font-semibold text-spruce-950">
                {siteConfig.stats.distanceFromSkardu}
              </strong>{" "}
              at{" "}
              <strong className="font-semibold text-spruce-950">
                {siteConfig.stats.altitude}
              </strong>{" "}
              altitude near Skardu, Gilgit-Baltistan. Remote geography and
              harsh winters left local schools struggling to retain specialist
              teachers.
            </p>
            <p className="text-base leading-relaxed text-text-body">
              Guided by seven Trustees—most of whom are teachers working in
              Basho Valley—BVEF launched its first partner school, is preparing a
              second before year-end, and is working toward reaching the
              remaining {siteConfig.stats.villagesWaiting} villages.
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[360px] lg:order-2 lg:min-h-[540px]">
          <Image
            src="/images/classes/image12.jpg"
            alt="Classroom instruction inside a Basho Valley partner school"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 5. Leadership & Experience Cards (White Background + Warm Himalayan Sand Cards) */}
      <section id="leadership" className="bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-normal text-spruce-900 sm:text-4xl">
            Meet Our Leadership
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* CEO Profile Card */}
            <article className="rounded-xl bg-surface-sand p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-saffron-700">
                {siteConfig.ceo.title}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-normal text-spruce-900">
                {siteConfig.ceo.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                {siteConfig.ceo.bio}
              </p>
              <dl className="mt-5 space-y-2 border-t border-spruce-900/15 pt-4 text-sm">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.ceo.email}`}
                      className="font-medium text-spruce-900 underline decoration-saffron-600/60 underline-offset-4 hover:text-saffron-700"
                    >
                      {siteConfig.ceo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a
                      href="tel:+923417888621"
                      className="font-medium text-text-body hover:text-spruce-900"
                    >
                      {siteConfig.ceo.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">LinkedIn</dt>
                  <dd>
                    <a
                      href={siteConfig.ceo.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-wider text-spruce-900 underline underline-offset-4 hover:text-saffron-700"
                    >
                      LinkedIn Profile
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Experience Cards */}
            {siteConfig.ceo.experience.map((exp) => (
              <article
                key={exp.organization}
                className="rounded-xl bg-surface-sand p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-spruce-800">
                  {exp.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-normal text-spruce-900">
                  {exp.organization}
                </h3>
                <p className="mt-1 text-sm font-semibold text-saffron-700">
                  {exp.role}
                </p>
                <p className="mt-1 text-xs text-slate-500">{exp.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-body">
                  {exp.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Our Educators & Trustees (Glacier Mist Band with Circular Photos) */}
      <section className="bg-surface-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-normal text-spruce-900 sm:text-4xl">
            Our Valley Team &amp; Trustees
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-body sm:text-base">
            Seven Trustees—most of whom teach in Basho Valley—alongside local
            female educators and community leaders.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-surface-white shadow-xs">
                <Image
                  src="/images/teachers/image23.jpg"
                  alt="Teachers and staff at a Basho Valley partner school"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-normal text-spruce-900">
                Three-Teacher Team
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Dedicated STEM &amp; English Instruction
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-surface-white shadow-xs">
                <Image
                  src="/images/parent-teacher-meeting/image24.jpg"
                  alt="Parent-teacher meeting in Basho Valley"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-normal text-spruce-900">
                {siteConfig.stats.trusteesCount} Trustees
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Registered Charitable Trust Governance
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-surface-white shadow-xs">
                <Image
                  src="/images/morning-assembly/image8.jpeg"
                  alt="Students gathered at morning school assembly"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-normal text-spruce-900">
                Local Female Teachers
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                High Retention &amp; Mentorship
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-surface-white shadow-xs">
                <Image
                  src="/images/village/village-01.png"
                  alt="Basho Valley village community"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl font-normal text-spruce-900">
                17 Valley Villages
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                1 Active · 2nd Planned · 16 Waiting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Full-Bleed Field Photo Divider */}
      <section className="relative min-h-[340px] overflow-hidden bg-spruce-950 sm:min-h-[460px]">
        <Image
          src="/images/children/image21.jpg"
          alt="Smiling students at the BVEF partner school in Basho Valley"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* 8. Partnership & Model Pillars (White Background + 4 Icon Columns + Outlined Pill CTA) */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-normal text-spruce-900 sm:text-4xl">
            Closing the learning gap requires strong partnerships
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERSHIP_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center space-y-3"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-spruce-900/20 bg-surface-mist text-spruce-900">
                  {pillar.icon === "building" && (
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  )}
                  {pillar.icon === "users" && (
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {pillar.icon === "laptop" && (
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M2 20h20" />
                    </svg>
                  )}
                  {pillar.icon === "shield" && (
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-serif text-lg font-normal text-spruce-900">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-body">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/program"
              className="inline-flex items-center justify-center rounded-full border border-spruce-900 px-8 py-3 text-sm font-semibold text-spruce-900 transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              Explore Our 9-Point Program
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-saffron-600 px-8 py-3 text-sm font-semibold text-surface-white transition-colors hover:bg-saffron-700"
            >
              Partner &amp; Donate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
