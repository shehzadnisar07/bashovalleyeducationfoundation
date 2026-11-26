import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-footer text-surface-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top Row: Organization, Address & Direct Contacts */}
        <div className="flex flex-col justify-between gap-6 pb-8 sm:flex-row sm:items-start">
          <div className="space-y-3">
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo-white.svg"
                alt=""
                width={36}
                height={44}
                className="h-10 w-auto"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-surface-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-surface-white/80">
              {siteConfig.contact.address}
            </p>
            <div className="space-y-1 text-sm text-surface-white/85">
              <p>
                <strong className="font-semibold text-surface-white">
                  General Inquiries:
                </strong>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline decoration-surface-white/40 underline-offset-4 transition-colors hover:text-saffron-100"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong className="font-semibold text-surface-white">
                  CEO ({siteConfig.ceo.name}):
                </strong>{" "}
                <a
                  href={`mailto:${siteConfig.ceo.email}`}
                  className="underline decoration-surface-white/40 underline-offset-4 transition-colors hover:text-saffron-100"
                >
                  {siteConfig.ceo.email}
                </a>{" "}
                &bull; WhatsApp / Phone:{" "}
                <a
                  href="tel:+923417888621"
                  className="underline decoration-surface-white/40 underline-offset-4 transition-colors hover:text-saffron-100"
                >
                  {siteConfig.ceo.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="type-label inline-flex items-center rounded-full border border-surface-white/25 bg-surface-white/5 px-3.5 py-1.5 text-surface-white/90">
              {siteConfig.registrationNumber}
            </span>
          </div>
        </div>

        {/* Full-Width Thin Divider Rule */}
        <div className="border-t border-surface-white/25 pt-10">
          {/* 3-Column Link Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="type-label font-semibold text-surface-white">
                About Us
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-surface-white/80">
                <li>
                  <Link href="/about" className="hover:text-surface-white">
                    Vision, Mission &amp; Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#leadership"
                    className="hover:text-surface-white"
                  >
                    Leadership &amp; Trustees
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-surface-white">
                    Field Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-surface-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="type-label font-semibold text-surface-white">
                What We Do
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-surface-white/80">
                <li>
                  <Link href="/program" className="hover:text-surface-white">
                    School-Partnership Program
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="hover:text-surface-white">
                    Three-Teacher STEM Team
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="hover:text-surface-white">
                    Offline Digital Classrooms
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="hover:text-surface-white">
                    17-Village Expansion
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="type-label font-semibold text-surface-white">
                Support &amp; Impact
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-surface-white/80">
                <li>
                  <Link href="/support" className="hover:text-surface-white">
                    Donate Now
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-surface-white">
                    Sponsor a Classroom Kit
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-surface-white">
                    Basho Valley Footprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Centered Copyright */}
        <div className="type-label mt-12 text-center text-surface-white/70">
          <p>
            &copy; Copyright 2026{" "}
            <strong className="font-semibold text-surface-white">
              {siteConfig.name}
            </strong>{" "}
            ({siteConfig.shortName}) - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
