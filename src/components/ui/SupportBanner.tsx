import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface SupportBannerProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function SupportBanner({
  title = "Put STEM teachers into Basho Valley classrooms",
  description = "With zero bricks-and-mortar spending, every contribution strengthens teaching inside existing public schools across the valley.",
  primaryHref = "/support",
  primaryLabel = "Explore sponsorship options",
  secondaryHref = "/contact",
  secondaryLabel = "Speak with the Trust",
}: SupportBannerProps) {
  return (
    <section className="bg-navy-950 text-surface-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-medium leading-tight text-surface-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-surface-white/80">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ochre-500 px-6 py-3 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
            >
              <span>{primaryLabel}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-surface-white/30 px-6 py-3 text-sm font-medium text-surface-white transition-colors hover:border-surface-white/60 hover:bg-navy-900"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
