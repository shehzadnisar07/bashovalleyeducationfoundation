import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  sectionLabel: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  meta?: string;
}

export function PageHero({
  sectionLabel,
  title,
  lead,
  imageSrc,
  imageAlt,
  imageCaption,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-surface-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div
          className={
            imageSrc
              ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
              : "max-w-3xl"
          }
        >
          <div className={imageSrc ? "lg:col-span-7" : ""}>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-surface-white/65"
            >
              <Link
                href="/"
                className="transition-colors hover:text-surface-white"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-ochre-400">{sectionLabel}</span>
            </nav>

            <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-surface-white sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-surface-white/80 sm:text-lg">
              {lead}
            </p>

            {meta && (
              <p className="mt-7 border-t border-surface-white/15 pt-4 text-xs font-medium tracking-wide text-surface-white/70">
                {meta}
              </p>
            )}
          </div>

          {imageSrc && imageAlt && (
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-surface-white/15 bg-navy-900">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              {imageCaption && (
                <figcaption className="mt-2.5 text-xs text-surface-white/65">
                  {imageCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
