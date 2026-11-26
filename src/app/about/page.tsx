import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadershipCarousel } from "@/components/about/LeadershipCarousel";
import { siteConfig } from "@/config/site";
import { LEADERSHIP_MEMBERS } from "@/data/leadership";

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
            <p className="type-label text-saffron-100">
              Who We Are
            </p>
            <h1 className="type-hero mt-2 text-surface-white">
              About {siteConfig.name}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Our Vision (White Background, Centered Heading + Editorial Copy) */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="type-section text-center text-spruce-950">
            Our Vision
          </h2>
          <p className="type-body mx-auto mt-8 max-w-[65ch] text-text-body">
            Our vision is to unlock human potential across Basho Valley by{" "}
            <strong className="font-semibold text-spruce-950">
              transforming STEM and English learning outcomes for every child.
            </strong>
          </p>
          <p className="type-body mx-auto mt-4 max-w-[65ch] text-text-body">
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
            <h2 className="type-section text-center text-spruce-950 lg:text-left">
              Our Mission
            </h2>
            <p className="type-body max-w-[65ch] text-text-body">
              Our mission is to establish{" "}
              <strong className="font-semibold italic text-spruce-950">
                effective and scalable school-partnership classrooms
              </strong>{" "}
              by combining local educators with offline digital technology.
            </p>
            <p className="type-body max-w-[65ch] text-text-body">
              Rather than spending donor funds on bricks-and-mortar buildings,
              BVEF signs formal MOUs with the local Education Department to
              supplement public school staff with a dedicated{" "}
              <strong className="font-semibold text-spruce-950">
                Three-Teacher STEM Team
              </strong>
              .
            </p>
            <p className="type-body max-w-[65ch] text-text-body">
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
            <h2 className="type-section text-spruce-950">
              Our Story
            </h2>
            <p className="type-body max-w-[65ch] text-text-body">
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
            <p className="type-body max-w-[65ch] text-text-body">
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

      {/* 5. Meet Our Leadership (Consistent Executive Leadership Directory) */}
      <section id="leadership" className="bg-surface-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="type-section text-spruce-950">
              Meet Our Leadership
            </h2>
            <p className="type-body mt-3 text-text-body">
              Dedicated leadership. Community experience. A shared commitment to
              education.
            </p>
          </div>

          <LeadershipCarousel members={LEADERSHIP_MEMBERS} />
        </div>
      </section>

      {/* 6. Partnership & Model Pillars (White Background + 4 Icon Columns + Outlined Pill CTA) */}
      <section className="border-t border-border-subtle bg-surface-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="type-section text-spruce-950">
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
                <h3 className="type-card text-spruce-950">
                  {pillar.title}
                </h3>
                <p className="type-body text-text-body">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/program"
              className="type-btn inline-flex items-center justify-center rounded-full border border-spruce-900 px-8 py-3 text-spruce-900 transition-colors hover:bg-spruce-900 hover:text-surface-white"
            >
              Explore Our 9-Point Program
            </Link>
            <Link
              href="/support"
              className="type-btn inline-flex items-center justify-center rounded-full bg-saffron-600 px-8 py-3 text-surface-white transition-colors hover:bg-saffron-700"
            >
              Partner &amp; Donate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
