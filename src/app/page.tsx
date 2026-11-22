import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { siteConfig } from "@/config/site";
import { GALLERY_PHOTOS } from "@/data/gallery";

const WHY_CARDS = [
  {
    title: "Why Basho Valley",
    description:
      "Across a suspension bridge over the River Sind and a 20 km mountain track at 8,800–11,800 ft, 17 villages have long lacked consistent STEM instruction.",
  },
  {
    title: "Why Existing Schools",
    description:
      "Zero bricks-and-mortar spending: BVEF signs an MOU with the local Education Department to strengthen existing public schools from within.",
  },
  {
    title: "Why Local Female Teachers",
    description:
      "Employing qualified local female educators maximizes retention, creates strong role models, and links bonuses directly to external exam results.",
  },
];

const HIGHLIGHT_IDS = [
  "valley-1",
  "classes-11",
  "assembly-7",
  "children-21",
  "teachers-23",
  "village-1",
];

export default function Home() {
  const highlights = GALLERY_PHOTOS.filter((photo) =>
    HIGHLIGHT_IDS.includes(photo.id)
  );

  return (
    <>
      {/* 1. Full-Bleed Village Slideshow Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <HeroSlideshow />

        {/* Neutral dark left-to-right fade: preserves natural photo colors while keeping text readable */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[82dvh] max-w-7xl items-center px-4 pt-24 pb-20 sm:min-h-[85dvh] sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            <h1 className="font-serif text-3xl font-bold leading-[1.14] tracking-tight text-surface-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Transforming Learning Outcomes{" "}
              <span className="text-gold-500">in Basho Valley</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-surface-white/95 drop-shadow-sm sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/support"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-md transition-colors hover:bg-gold-600 sm:w-auto"
              >
                Support a Classroom
              </Link>
              <Link
                href="/program"
                className="inline-flex w-full items-center justify-center rounded-full border border-surface-white/50 bg-navy-950/35 px-7 py-3.5 text-sm font-semibold text-surface-white backdrop-blur-sm transition-colors hover:border-gold-500/70 hover:bg-navy-900/70 sm:w-auto"
              >
                Explore Our 9-Point Model
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Angled Deep Navy Mission & Impact Stats Band (#022046) */}
      <section className="angled-band-bottom bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-18 text-center sm:px-6 sm:pt-14 sm:pb-24 lg:px-8">
          <h2 className="mx-auto max-w-4xl font-serif text-xl font-medium leading-snug text-surface-white sm:text-3xl">
            Basho Valley Education Foundation establishes high-impact,
            community-led STEM learning inside existing public schools across
            remote Himalayan villages.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-4">
            <div>
              <p className="font-serif text-2xl font-bold text-gold-500 sm:text-4xl lg:text-5xl">
                {siteConfig.stats.altitude}
              </p>
              <p className="mt-1.5 text-xs text-surface-white/80 sm:mt-2 sm:text-sm">
                Himalayan Valley Altitude
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl lg:text-5xl">
                {siteConfig.stats.activePartnerSchools}
              </p>
              <p className="mt-1.5 text-xs text-surface-white/80 sm:mt-2 sm:text-sm">
                Active Partner School
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl lg:text-5xl">
                {siteConfig.stats.villagesWaiting}
              </p>
              <p className="mt-1.5 text-xs text-surface-white/80 sm:mt-2 sm:text-sm">
                Remaining Villages Waiting
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-gold-500 sm:text-4xl lg:text-5xl">
                {siteConfig.stats.trusteesCount}
              </p>
              <p className="mt-1.5 text-xs text-surface-white/80 sm:mt-2 sm:text-sm">
                Trustees Guiding BVEF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Split Appeal + 3-Card "Why" Grid (#FCF8F7) */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Top Split Appeal */}
          <div className="grid items-center gap-10 border-b border-navy-950/20 pb-14 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-950/5">
              <Image
                src="/images/children/image21.jpg"
                alt="Smiling schoolchildren at the BVEF partner school in Basho Valley"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">
                Support a student&apos;s journey to quality STEM education in
                Basho Valley
              </h2>

              <ul className="space-y-3 text-base text-text-body">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-950">
                      Three-Teacher STEM Team:
                    </strong>{" "}
                    Sponsor dedicated local educators inside an existing school.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-950">
                      Offline Digital Classroom Kit:
                    </strong>{" "}
                    TV screen, two laptops, and extra speakers with offline
                    lessons.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-950">
                      Solar Power &amp; Battery Backup:
                    </strong>{" "}
                    Keep digital lessons running reliably off the grid.
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-xs transition-colors hover:bg-gold-600"
                >
                  Support a Classroom
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom 3-Column Flat "Why" Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WHY_CARDS.map((card) => (
              <article key={card.title} className="bg-[#EFECE6] p-8">
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 2-Column School-Partnership Program Feature */}
      <section className="bg-surface-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy-950/5">
            <Image
              src="/images/classes/image11.jpg"
              alt="Students engaged in a classroom lesson in Basho Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              How Our Model Works
            </p>
            <h2 className="font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
              The 9-Point School-Partnership Program
            </h2>
            <p className="text-base leading-relaxed text-text-body">
              Guided by seven Trustees—most of whom are teachers working in
              Basho Valley—our model pairs an Education Department MOU with
              offline digital classrooms, local female teachers, and
              exam-linked performance bonuses. With 1 partner school active and a
              2nd planned this year, 16 villages await expansion.
            </p>
            <div className="pt-2">
              <Link
                href="/program"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy-950 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-surface-white"
              >
                Explore the 9-Point Model
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dark Navy Field Gallery Showcase (#141E2A) */}
      <section className="bg-navy-850 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
                From the Field
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-surface-white">
                Life &amp; Learning in Basho Valley
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-gold-500/60 px-6 py-2.5 text-sm font-semibold text-gold-500 transition-colors hover:bg-gold-500 hover:text-navy-950"
            >
              View All {GALLERY_PHOTOS.length} Photos
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((photo) => (
              <figure
                key={photo.id}
                className="overflow-hidden border border-surface-white/10 bg-navy-900"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium text-surface-white/90">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
