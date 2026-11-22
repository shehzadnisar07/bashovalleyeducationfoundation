import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-surface-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo-white.svg"
                alt=""
                width={38}
                height={48}
                className="h-11 w-auto"
              />
              <div>
                <p className="text-2xl tracking-tight text-surface-white">
                  <span className="font-serif font-bold">Basho </span>
                  <span className="font-sans font-light text-surface-white/90">
                    Valley
                  </span>
                </p>
                <p className="text-xs text-surface-white/75">{siteConfig.name}</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-surface-white/80">
              {siteConfig.description}
            </p>
            <p className="inline-flex items-center rounded-full border border-gold-500/35 bg-navy-900 px-3 py-1 text-xs font-medium text-gold-500">
              {siteConfig.registrationNumber}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-base font-semibold text-gold-500">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-surface-white/80 transition-colors hover:text-gold-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Pillars */}
          <div>
            <h2 className="font-serif text-base font-semibold text-gold-500">
              Our Model
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-surface-white/80">
              <li>Three-Teacher STEM Team</li>
              <li>Offline Digital Classrooms</li>
              <li>Local Female Educators</li>
              <li>Exam-Linked Accountability</li>
              <li>Zero Bricks-and-Mortar Overhead</li>
            </ul>
          </div>

          {/* Contact & Valley Info */}
          <div>
            <h2 className="font-serif text-base font-semibold text-gold-500">
              Contact &amp; Location
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-surface-white/80">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Location
                </dt>
                <dd className="mt-0.5">{siteConfig.contact.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="transition-colors hover:text-gold-500"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-0.5">{siteConfig.contact.phone}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom Legal & Trust Strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-surface-white/10 pt-6 text-xs text-surface-white/70 sm:flex-row sm:items-center">
          <p>
            &copy; 2026 {siteConfig.name} ({siteConfig.shortName}). All rights
            reserved.
          </p>
          <p>
            Supporting {siteConfig.stats.activePartnerSchools} partner school &bull;{" "}
            {siteConfig.stats.villagesWaiting} villages awaiting expansion
          </p>
        </div>
      </div>
    </footer>
  );
}
