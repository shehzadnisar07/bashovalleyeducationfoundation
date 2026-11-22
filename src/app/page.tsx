import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { siteConfig } from "@/config/site";
import { GALLERY_PHOTOS } from "@/data/gallery";

const IMPACT_STATS = [
  {
    figure: siteConfig.stats.altitude,
    description: "Himalayan altitude across 17 villages in Basho Valley",
    source: "District Skardu, Gilgit-Baltistan",
  },
  {
    figure: "3-Teacher",
    description:
      "Dedicated STEM team supplementing existing public school staff",
    source: "Education Department MOU",
  },
  {
    figure: `${siteConfig.stats.villagesWaiting} Villages`,
    description:
      "Remaining mountain communities awaiting expansion as funding grows",
    source: "1 active · 2nd planned this year",
  },
];

const FEATURE_CARDS = [
  {
    title: "Our Program",
    description:
      "Learn how our 9-point School-Partnership model equips existing public schools with STEM teachers and offline digital tools.",
    image: "/images/classes/image11.jpg",
    alt: "Students studying inside a BVEF partner classroom",
    ctaLabel: "Read More",
    href: "/program",
    variant: "primary" as const,
  },
  {
    title: "How You Can Help",
    description:
      "With zero bricks-and-mortar spending, your support directly funds local female educators and solar-powered digital kits.",
    image: "/images/children/image21.jpg",
    alt: "Smiling schoolchildren in Basho Valley",
    ctaLabel: "Donate",
    href: "/support",
    variant: "accent" as const,
  },
  {
    title: "Photo Gallery",
    description:
      "Explore 28 field photographs from across Basho Valley—morning assemblies, classrooms, exams, and community meetings.",
    image: "/images/teachers/image23.jpg",
    alt: "Local educators and school community in Basho Valley",
    ctaLabel: "View Photos",
    href: "/gallery",
    variant: "primary" as const,
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Full-Bleed Village Slideshow Hero */}
      <section className="relative isolate overflow-hidden bg-spruce-950">
        <HeroSlideshow />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[58dvh] max-w-7xl items-center px-4 py-16 sm:min-h-[78dvh] sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            <h1 className="font-serif text-3xl font-normal leading-[1.16] tracking-tight text-surface-white drop-shadow-sm sm:text-5xl lg:text-[3.5rem]">
              Transforming learning outcomes{" "}
              <em className="italic">in Basho Valley.</em>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-surface-white/90 sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/support"
                className="inline-flex w-full items-center justify-center rounded-full bg-saffron-600 px-8 py-3.5 text-sm font-semibold text-surface-white transition-colors hover:bg-saffron-700 sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                href="/program"
                className="inline-flex w-full items-center justify-center rounded-full border border-surface-white/70 bg-black/25 px-8 py-3.5 text-sm font-semibold text-surface-white backdrop-blur-xs transition-colors hover:bg-surface-white hover:text-spruce-950 sm:w-auto"
              >
                Explore Our Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Statement & Donate CTA (Soft Glacier Mist) */}
      <section className="bg-surface-mist">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/support"
            className="inline-flex items-center justify-center rounded-full bg-spruce-900 px-10 py-3.5 text-sm font-semibold text-surface-white transition-colors hover:bg-spruce-950"
          >
            Donate Now
          </Link>

          <h2 className="mt-10 text-left font-serif text-2xl font-normal leading-snug text-spruce-900 sm:text-4xl">
            Every child in Basho Valley deserves quality education . . .{" "}
            <em className="italic">
              yet mountain isolation keeps classrooms underserved.
            </em>
          </h2>

          <p className="mt-5 text-left text-base leading-relaxed text-text-body sm:text-lg">
            Across a suspension bridge over the River Sind and a{" "}
            <Link
              href="/about"
              className="font-medium text-spruce-900 underline decoration-spruce-900/50 underline-offset-4 hover:decoration-spruce-900"
            >
              {siteConfig.stats.distanceFromSkardu}
            </Link>{" "}
            from Skardu, 17 mountain villages value education deeply—yet remote
            terrain and harsh winters leave public schools without consistent
            STEM instruction.
          </p>
        </div>
      </section>

      {/* 3. Two-Column Overview Section (Pure White) */}
      <section className="bg-surface-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl font-normal leading-tight text-spruce-900 sm:text-4xl">
              Closing the STEM learning gap,{" "}
              <em className="italic">one partner school at a time</em>
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Rather than spending donor funds on new buildings, BVEF signs an
              MOU with the local Education Department to place a{" "}
              <strong className="font-semibold text-spruce-950">
                Three-Teacher STEM Team
              </strong>{" "}
              inside existing government schools—supported by offline digital
              lessons, solar backup power, and exam-linked accountability.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-spruce-900 px-7 py-3 text-sm font-semibold text-spruce-900 transition-colors hover:bg-spruce-900 hover:text-surface-white"
              >
                Read Our Story
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-subtle shadow-xs">
            <Image
              src="/images/morning-assembly/image7.jpeg"
              alt="Morning school assembly in Basho Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Deep Alpine Spruce Impact Stats Band */}
      <section className="bg-spruce-900 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 text-center md:grid-cols-3 md:gap-8">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.figure} className="flex flex-col items-center">
                <p className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">
                  {stat.figure}
                </p>
                {/* Signature curved white underline */}
                <svg
                  viewBox="0 0 220 14"
                  className="mt-2 h-3 w-44 text-surface-white/90"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10C62 3 158 3 216 9"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-surface-white/90 sm:text-base">
                  {stat.description}
                </p>
                <p className="mt-4 text-xs italic text-surface-white/75 underline decoration-surface-white/40 underline-offset-4">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Full-Bleed 50/50 Split Feature (Photo Left + Glacier Mist Right) */}
      <section className="grid bg-surface-mist lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/classes/image13.jpg"
            alt="Students learning with offline digital classroom tools in Basho Valley"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="max-w-lg space-y-5">
            <h2 className="font-serif text-3xl font-normal leading-tight text-spruce-900 sm:text-4xl">
              Offline digital classrooms.{" "}
              <em className="italic">Solar-powered reliability.</em>
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Because internet and grid power are scarce at high altitude, every
              supported classroom is equipped with a TV screen, two laptops,
              extra speakers, curated offline learning resources, and solar
              panels with battery backup.
            </p>
            <p className="text-base leading-relaxed text-text-body">
              Students gain engaging, visual Science, Mathematics, and English
              lessons every single school day—regardless of weather or
              connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Inverted 50/50 Split Feature (Glacier Mist Left + Photo Right) */}
      <section className="grid border-t border-border-subtle bg-surface-mist lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-14 sm:px-12 lg:order-1 lg:px-16 lg:py-20">
          <div className="max-w-lg space-y-5">
            <h2 className="font-serif text-3xl font-normal leading-tight text-spruce-900 sm:text-4xl">
              Community-anchored{" "}
              <em className="italic">local female educators</em>
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              BVEF prioritizes hiring qualified local female teachers who live
              in Basho Valley—ensuring long-term retention, trusted mentorship
              for girls, and year-round classroom continuity.
            </p>
            <p className="font-serif text-lg font-medium text-spruce-950">
              {siteConfig.stats.activePartnerSchools} partner school active
              &bull; 2nd planned this year &bull;{" "}
              {siteConfig.stats.villagesWaiting} villages waiting.
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-[520px]">
          <Image
            src="/images/village/village-01.png"
            alt="Terraced fields and homes in Basho Valley"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 7. Full-Bleed Valley Photo Banner */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-spruce-950 sm:min-h-[520px]">
        <Image
          src="/images/valley-views/image1.jpg"
          alt="Panoramic view of Basho Valley in the Himalayas"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-3">
            <h2 className="font-serif text-4xl font-normal text-surface-white sm:text-5xl">
              Life in Basho Valley
            </h2>
            <p className="font-serif text-xl italic text-surface-white/90">
              Seven Trustees, local teachers, and communities working together
            </p>
          </div>
        </div>
      </section>

      {/* 8. 3-Column Feature Cards (Soft Glacier Mist) */}
      <section className="bg-surface-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {FEATURE_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-spruce-950/10">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-normal text-spruce-900">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-body">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={card.href}
                    className={`inline-flex items-center justify-center rounded-full px-8 py-2.5 text-sm font-semibold text-surface-white transition-colors ${
                      card.variant === "accent"
                        ? "bg-saffron-600 hover:bg-saffron-700"
                        : "bg-spruce-900 hover:bg-spruce-950"
                    }`}
                  >
                    {card.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-slate-500">
            Explore all {GALLERY_PHOTOS.length} documented field photographs in
            our{" "}
            <Link
              href="/gallery"
              className="font-medium text-spruce-900 underline underline-offset-4"
            >
              Basho Valley Gallery
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
