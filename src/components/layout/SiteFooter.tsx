import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-980 text-surface-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Institutional Identity */}
          <div className="space-y-4 lg:col-span-5">
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo-white.svg"
                alt=""
                width={36}
                height={46}
                className="h-10 w-auto"
              />
              <div>
                <p className="font-serif text-xl font-semibold leading-none text-surface-white">
                  Basho Valley
                </p>
                <p className="mt-1 text-xs text-surface-white/70">
                  Education Foundation
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-surface-white/75">
              {siteConfig.description}
            </p>

            <p className="text-xs font-medium text-ochre-400">
              {siteConfig.isRegistrationPending
                ? "Registered Charitable Trust · Seven Local Trustees"
                : `${siteConfig.registrationNumber} · Seven Local Trustees`}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-surface-white/60">
              Foundation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-surface-white/80 transition-colors hover:text-ochre-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Model Pillars */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-surface-white/60">
              Our Approach
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-surface-white/80">
              <li>
                <Link
                  href="/program#partnership"
                  className="transition-colors hover:text-ochre-400"
                >
                  Education Dept. MOU
                </Link>
              </li>
              <li>
                <Link
                  href="/program#classroom"
                  className="transition-colors hover:text-ochre-400"
                >
                  Three-Teacher STEM Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/program#classroom-kit"
                  className="transition-colors hover:text-ochre-400"
                >
                  Offline Solar Classrooms
                </Link>
              </li>
              <li>
                <Link
                  href="/program#accountability"
                  className="transition-colors hover:text-ochre-400"
                >
                  Exam-Linked Incentives
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Inquiries */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-wide text-surface-white/60">
              Location &amp; Inquiries
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-surface-white/80">
              <div>
                <dt className="text-xs text-surface-white/50">Valley Location</dt>
                <dd className="mt-0.5">{siteConfig.contact.address}</dd>
                <dd className="mt-0.5 text-xs text-surface-white/60">
                  Altitude {siteConfig.stats.altitude} · {siteConfig.stats.distanceFromK2}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-surface-white/50">Direct Inquiries</dt>
                <dd className="mt-0.5">
                  {siteConfig.contact.isPlaceholder ? (
                    <Link
                      href="/contact"
                      className="underline decoration-ochre-500/70 underline-offset-4 transition-colors hover:text-ochre-400"
                    >
                      Submit an inquiry via Contact
                    </Link>
                  ) : (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="transition-colors hover:text-ochre-400"
                    >
                      {siteConfig.contact.email}
                    </a>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-surface-white/10 pt-6 text-xs text-surface-white/60 sm:flex-row sm:items-center">
          <p>
            &copy; 2026 {siteConfig.name} ({siteConfig.shortName}). All rights reserved.
          </p>
          <p>
            {siteConfig.stats.activePartnerSchools} active partner school ·{" "}
            {siteConfig.stats.villagesWaiting} villages awaiting expansion
          </p>
        </div>
      </div>
    </footer>
  );
}
