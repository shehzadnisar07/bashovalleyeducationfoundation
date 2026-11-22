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
    <section className="relative overflow-hidden border-b border-border-subtle bg-surface-linen text-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
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
              className="flex items-center gap-2 text-xs text-text-muted"
            >
              <Link
                href="/"
                className="transition-colors hover:text-navy-950"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-ochre-600">{sectionLabel}</span>
            </nav>

            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.15rem]">
              {title}
            </h1>

            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-text-body sm:text-lg">
              {lead}
            </p>

            {meta && (
              <p className="mt-6 border-t border-border-subtle pt-4 text-xs font-medium tracking-wide text-text-muted">
                {meta}
              </p>
            )}
          </div>

          {imageSrc && imageAlt && (
            <figure className="lg:col-span-5">
              <div className="rounded-sm border border-border-subtle bg-surface-white p-1.5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-surface-ivory">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {imageCaption && (
                <figcaption className="mt-2.5 text-xs text-text-muted">
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
