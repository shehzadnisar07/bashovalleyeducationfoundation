import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import {
  ArrowRightIcon,
  AwardIcon,
  MonitorIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { SupportBanner } from "@/components/ui/SupportBanner";
import { ValleyFootprint } from "@/components/ui/ValleyFootprint";
import { siteConfig } from "@/config/site";
import { GALLERY_PHOTOS } from "@/data/gallery";

const CORE_PILLARS = [
  {
    icon: ShieldIcon,
    title: "Existing public schools",
    description:
      "Formal Education Department MOU with zero bricks-and-mortar spending—100% of donor capital strengthens instruction.",
  },
  {
    icon: UsersIcon,
    title: "Local female STEM teachers",
    description:
      "Three-Teacher Teams recruited primarily from within Basho Valley for lasting retention and trusted mentorship.",
  },
  {
    icon: MonitorIcon,
    title: "Offline solar classrooms",
    description:
      "TV screen, two pre-loaded laptops, speakers, and solar battery backup deliver modern STEM lessons without internet.",
  },
  {
    icon: AwardIcon,
    title: "Exam-linked accountability",
    description:
      "Annual teacher bonuses are tied to student performance in external examinations, measured separately by subject.",
  },
];

const FEATURED_ESSAY_IDS = [
  "assembly-7",
  "classes-11",
  "exams-14",
  "teachers-23",
  "ptm-24",
];

export default function Home() {
  const essayPhotos = FEATURED_ESSAY_IDS.map((id) =>
    GALLERY_PHOTOS.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const [leadPhoto, ...supportingPhotos] = essayPhotos;

  return (
    <>
      {/* 1. Cinematic Documentary Hero */}
      <section className="relative isolate flex min-h-[86dvh] items-end overflow-hidden bg-navy-950 sm:min-h-[90dvh]">
        <HeroSlideshow />

        {/* Dual scrim: guarantees crisp nav contrast at top and editorial readability at bottom-left */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-980/75 via-navy-950/25 to-navy-980/85"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-980/80 via-navy-950/35 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-28 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8">
          <div className="animate-hero-reveal max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ochre-400 sm:text-sm">
              <span>{siteConfig.stats.altitude}</span>
              <span aria-hidden="true">/</span>
              <span>District Skardu, Gilgit-Baltistan</span>
            </p>

            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-surface-white sm:text-5xl lg:text-[4rem]">
              Bringing STEM education to the high villages of Basho Valley
            </h1>

            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-surface-white/90 sm:text-lg">
              Established by the residents and teachers of Basho Valley, BVEF
              partners with existing public schools to place local Three-Teacher
              STEM Teams and solar-powered offline digital classrooms where
              children need them most.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ochre-500 px-6 py-3.5 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
              >
                <span>Support a classroom</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center rounded-md border border-surface-white/40 bg-navy-950/40 px-6 py-3.5 text-sm font-medium text-surface-white backdrop-blur-xs transition-colors hover:border-surface-white/75 hover:bg-navy-950/70"
              >
                Read the 9-Point Model
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Mandate & Key Valley Figures (#0E2243) */}
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="font-serif text-2xl font-normal leading-snug text-surface-white sm:text-[1.75rem]">
                A duly registered charitable Trust governed by{" "}
                <span className="italic text-ochre-400">seven Trustees</span>—most
                of whom are teachers living and working in Basho Valley.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-surface-white/15 pt-8 sm:grid-cols-4 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <dt className="text-xs text-surface-white/65">Altitude</dt>
                <dd className="mt-1.5 font-serif text-2xl font-medium tabular-nums text-ochre-400 sm:text-3xl">
                  8,800–11,800<span className="ml-1 text-base">ft</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-surface-white/65">
                  Active Partner School
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-medium tabular-nums text-surface-white sm:text-3xl">
                  {siteConfig.stats.activePartnerSchools}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-surface-white/65">
                  Villages Waiting
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-medium tabular-nums text-surface-white sm:text-3xl">
                  {siteConfig.stats.villagesWaiting}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-surface-white/65">
                  Local Trustees
                </dt>
                <dd className="mt-1.5 font-serif text-2xl font-medium tabular-nums text-surface-white sm:text-3xl">
                  {siteConfig.stats.trusteesCount}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Editorial Narrative — Across the River Sind (bg-surface-ivory) */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-5">
              <p className="text-xs font-medium text-glacial-600">
                The Context — {siteConfig.stats.distanceFromK2} ·{" "}
                {siteConfig.stats.distanceFromNangaParbat}
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                Beyond a suspension bridge and a 20 km mountain track
              </h2>
              <p className="text-base leading-relaxed text-text-body">
                Tucked deep in the Himalayan range near Skardu, Basho Valley is
                reached by crossing a gushing River Sind over a suspension
                bridge and ascending a 20 km unpaved mountain track. Families
                here live without paved roads, running water, heating, internet,
                or local medical facilities.
              </p>
              <p className="text-base leading-relaxed text-text-body">
                Across 17 villages, there is only one high school. Public
                primary and middle school buildings exist, yet chronic shortages
                of qualified STEM teachers mean many children fail even Middle
                School exams—and hardly any have ever reached university.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-950 underline decoration-ochre-500 decoration-2 underline-offset-6 transition-colors hover:text-ochre-600"
                >
                  <span>Read our full story and Trust governance</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-12 lg:col-span-7">
              <figure className="sm:col-span-7">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-linen">
                  <Image
                    src="/images/children/image21.jpg"
                    alt="Three young schoolgirls in white headscarves and blue uniforms smiling beside a stone wall in Basho Valley"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 34vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-text-muted">
                  Students at BVEF&apos;s partner public school in Basho Valley.
                </figcaption>
              </figure>

              <figure className="sm:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-linen sm:aspect-[3/4]">
                  <Image
                    src="/images/valley-views/image2.jpg"
                    alt="Snow-covered suspension bridge across the River Sind in winter"
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 24vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-text-muted">
                  The River Sind suspension bridge in winter.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The School-Partnership Model Preview (bg-surface-linen) */}
      <section className="border-y border-border-subtle bg-surface-linen">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-glacial-600">
                Our Operational Model
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                Designed for high-altitude realities, accountable to measurable
                learning
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                href="/program"
                className="inline-flex items-center gap-2 rounded-md border border-navy-950 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-surface-white"
              >
                <span>Explore all 9 points of the model</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex flex-col bg-surface-white p-7"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-surface-ivory text-navy-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 17-Village Expansion Footprint (bg-surface-ivory) */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <ValleyFootprint />
        </div>
      </section>

      {/* 6. Documentary Field Essay (#0E2243) */}
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-ochre-400">
                Documentary Archive
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-surface-white sm:text-4xl">
                Inside the valley and partner school
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-md border border-surface-white/30 px-5 py-2.5 text-sm font-medium text-surface-white transition-colors hover:border-ochre-400 hover:text-ochre-400"
            >
              <span>View all {GALLERY_PHOTOS.length} photographs</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {leadPhoto && (
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              {/* Featured Lead Frame */}
              <figure className="flex flex-col lg:col-span-6">
                <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-sm border border-surface-white/10 bg-navy-900 lg:min-h-[26rem]">
                  <Image
                    src={leadPhoto.src}
                    alt={leadPhoto.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-surface-white/80">
                  {leadPhoto.caption}
                </figcaption>
              </figure>

              {/* 2x2 Supporting Frames */}
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
                {supportingPhotos.map((photo) => (
                  <figure key={photo.id} className="flex flex-col">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-surface-white/10 bg-navy-900">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        loading="eager"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`object-cover ${
                          photo.objectPosition === "top"
                            ? "object-top"
                            : "object-center"
                        }`}
                      />
                    </div>
                    <figcaption className="mt-2.5 text-xs leading-relaxed text-surface-white/75">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. Direct Sponsorship Pathways (bg-surface-ivory) */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-5">
              <p className="text-xs font-medium text-glacial-600">
                Direct Classroom Impact
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
                Two tangible ways to stand with Basho Valley&apos;s students
              </h2>
              <p className="text-base leading-relaxed text-text-body">
                Because BVEF operates inside existing government school
                buildings, your support goes straight into qualified local
                teaching and offline solar classroom technology.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <article className="flex flex-col justify-between rounded-sm border border-border-subtle bg-surface-white p-7">
                <div>
                  <p className="text-xs font-medium text-ochre-600">
                    Core Instruction
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-navy-950">
                    Three-Teacher STEM Team
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-body">
                    Fund local educators dedicated solely to STEM subjects
                    inside a partner public school, backed by exam-linked
                    performance incentives.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <Link
                    href="/contact?topic=Sponsor+a+Three-Teacher+STEM+Team"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-ochre-600"
                  >
                    <span>Inquire about team sponsorship</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-sm border border-border-subtle bg-surface-white p-7">
                <div>
                  <p className="text-xs font-medium text-ochre-600">
                    Classroom Hardware
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-navy-950">
                    Offline Digital Classroom Kit
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-body">
                    Equip a classroom with a large TV screen, two laptops with
                    offline STEM libraries, extra speakers, and solar battery
                    backup.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <Link
                    href="/contact?topic=Equip+a+Digital+Classroom+Kit"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-ochre-600"
                  >
                    <span>Inquire about classroom hardware</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  );
}
