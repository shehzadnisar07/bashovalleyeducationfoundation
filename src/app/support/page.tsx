import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CLASSROOM_KIT_ITEMS } from "@/data/program";

export const metadata: Metadata = {
  title: "Support & Donate",
  description:
    "Support Basho Valley Education Foundation by sponsoring a Three-Teacher STEM Team or equipping an offline solar-powered digital classroom.",
};

export default function SupportPage() {
  return (
    <>
      <section
        aria-label="Support Basho Valley students"
        className="w-full overflow-hidden bg-surface-mist"
      >
        <h1 className="sr-only">
          Invest Directly in Basho Valley Classrooms
        </h1>
        <Image
          src="/images/support/foundation_banner.png"
          alt="Your donation can change a child's future — three Basho Valley schoolgirls standing together"
          width={1920}
          height={600}
          priority
          unoptimized
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* Tangible Sponsorship Tiers */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-border-subtle bg-surface-mist p-8">
              <span className="type-label inline-flex items-center rounded-full bg-saffron-100 px-3 py-1 text-saffron-700">
                Core Teaching Support
              </span>
              <h2 className="type-subsection mt-4 text-spruce-950">
                Sponsor a Three-Teacher STEM Team
              </h2>
              <p className="type-body mt-3 max-w-[65ch] text-text-body">
                Fund a dedicated team of three qualified local educators
                teaching Science, Mathematics, and English inside an existing
                public school, complete with exam-linked performance bonuses.
              </p>
              <ul className="type-body mt-5 space-y-2 text-spruce-900">
                <li>&bull; Primarily local female educators for high retention</li>
                <li>&bull; Formal Education Department MOU partnership</li>
                <li>&bull; Measured through independent external exams</li>
              </ul>
            </article>

            <article className="rounded-xl border border-border-subtle bg-surface-mist p-8">
              <span className="type-label inline-flex items-center rounded-full bg-saffron-100 px-3 py-1 text-saffron-700">
                Classroom Technology
              </span>
              <h2 className="type-subsection mt-4 text-spruce-950">
                Equip a Digital Classroom Kit
              </h2>
              <p className="type-body mt-3 max-w-[65ch] text-text-body">
                Provide a partner classroom with everything needed for
                offline, solar-powered STEM instruction:
              </p>
              <ul className="type-body mt-5 space-y-2 text-spruce-900">
                {CLASSROOM_KIT_ITEMS.map((item) => (
                  <li key={item.name}>&bull; {item.name}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Donation / Bank Transfer Details (Config-Driven) */}
      <section className="border-t border-border-subtle bg-surface-mist">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border-subtle bg-surface-white p-8 shadow-xs">
            <p className="type-label text-saffron-600">
              How to Donate
            </p>
            <h2 className="type-section mt-2 text-spruce-950">
              Trust Bank &amp; Contribution Details
            </h2>
            <p className="type-body mt-3 max-w-[65ch] text-text-body">
              {siteConfig.donation.instructionsPlaceholder}
            </p>

            <dl className="mt-6 grid gap-4 rounded-xl border border-border-subtle bg-surface-mist p-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="type-label text-slate-500">
                  Account Title
                </dt>
                <dd className="mt-1 font-semibold text-spruce-950">
                  {siteConfig.donation.accountTitle}
                </dd>
              </div>
              <div>
                <dt className="type-label text-slate-500">
                  Bank Name
                </dt>
                <dd className="mt-1 font-semibold text-spruce-950">
                  {siteConfig.donation.bankName}
                </dd>
              </div>
              <div>
                <dt className="type-label text-slate-500">
                  IBAN / Account
                </dt>
                <dd className="mt-1 font-semibold text-spruce-950">
                  {siteConfig.donation.iban}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="type-btn inline-flex items-center justify-center rounded-full bg-saffron-600 px-8 py-3 text-surface-white transition-colors hover:bg-saffron-700"
              >
                Inquire About Sponsoring a School
              </Link>
              <a
                href={`mailto:${siteConfig.ceo.email}`}
                className="type-btn inline-flex items-center justify-center rounded-full border border-spruce-900 bg-surface-white px-7 py-3 text-spruce-900 transition-colors hover:bg-surface-mist"
              >
                Email CEO ({siteConfig.ceo.email})
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
