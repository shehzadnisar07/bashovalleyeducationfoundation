import type { Metadata } from "next";
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
      <section className="bg-navy-950 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
            Support Our Work
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Invest Directly in{" "}
            <span className="text-gold-500">Basho Valley Classrooms</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-white/80">
            With zero bricks-and-mortar spending, every contribution goes
            directly toward local STEM educators, offline digital learning
            equipment, and solar power for partner schools.
          </p>
        </div>
      </section>

      {/* Tangible Sponsorship Tiers */}
      <section className="bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border-subtle bg-surface-ivory p-8">
              <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-navy-900">
                Core Teaching Support
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold text-navy-900">
                Sponsor a Three-Teacher STEM Team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Fund a dedicated team of three qualified local educators
                teaching Science, Mathematics, and English inside an existing
                public school, complete with exam-linked performance bonuses.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-navy-900">
                <li>&bull; Primarily local female educators for high retention</li>
                <li>&bull; Formal Education Department MOU partnership</li>
                <li>&bull; Measured through independent external exams</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-border-subtle bg-surface-ivory p-8">
              <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-navy-900">
                Classroom Technology
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold text-navy-900">
                Equip a Digital Classroom Kit
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Provide a partner classroom with everything needed for
                offline, solar-powered STEM instruction:
              </p>
              <ul className="mt-5 space-y-2 text-sm text-navy-900">
                {CLASSROOM_KIT_ITEMS.map((item) => (
                  <li key={item.name}>&bull; {item.name}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Donation / Bank Transfer Details (Config-Driven) */}
      <section className="bg-surface-ivory border-t border-border-subtle">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border-subtle bg-surface-white p-8 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
              How to Donate
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy-900 sm:text-3xl">
              Trust Bank &amp; Contribution Details
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-body">
              {siteConfig.donation.instructionsPlaceholder}
            </p>

            <dl className="mt-6 grid gap-4 rounded-xl border border-border-subtle bg-surface-ivory p-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Account Title
                </dt>
                <dd className="mt-1 font-semibold text-navy-900">
                  {siteConfig.donation.accountTitle}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  Bank Name
                </dt>
                <dd className="mt-1 font-semibold text-navy-900">
                  {siteConfig.donation.bankName}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  IBAN / Account
                </dt>
                <dd className="mt-1 font-semibold text-navy-900">
                  {siteConfig.donation.iban}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-xs transition-colors hover:bg-gold-600"
              >
                Inquire About Sponsoring a School
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center rounded-lg border border-navy-900 bg-surface-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-surface-ivory"
              >
                Email {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
