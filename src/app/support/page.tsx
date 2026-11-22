import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  AwardIcon,
  CheckIcon,
  MailIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";
import { SPONSORSHIP_PATHWAYS } from "@/data/program";

export const metadata: Metadata = {
  title: "Support & Sponsorship",
  description:
    "Support Basho Valley Education Foundation by sponsoring a Three-Teacher STEM Team, equipping an offline solar digital classroom, or partnering on next-village expansion.",
};

const STEWARDSHIP_PRINCIPLES = [
  {
    icon: ShieldIcon,
    title: "Zero bricks-and-mortar overhead",
    detail:
      "Classes run inside existing government school buildings under a formal Education Department MOU.",
  },
  {
    icon: AwardIcon,
    title: "External exam accountability",
    detail:
      "Teacher bonuses are tied to independent external examination results, measured separately by subject.",
  },
  {
    icon: UsersIcon,
    title: "Local Trustee governance",
    detail:
      "Seven Trustees—most of whom are teachers in Basho Valley—steward every contribution with direct oversight.",
  },
];

export default function SupportPage() {
  const isBankActive = siteConfig.donation.status === "active";

  return (
    <>
      <PageHero
        sectionLabel="Support & Sponsorship"
        title="Invest directly in STEM teachers and off-grid classrooms"
        lead="Because BVEF operates inside existing public schools, donor contributions fund instruction, teacher training, and solar-backed offline classroom technology—never unnecessary construction."
        imageSrc="/images/children/image22.jpg"
        imageAlt="Four Basho Valley students sitting together in sunlight studying from their notebooks"
        imageCaption="Students reviewing lessons on the veranda of the Basho Valley partner school."
        meta="1 Active Partner School · 2nd School Planned Before Year-End · 16 Villages Waiting"
      />

      {/* Stewardship Principles Strip */}
      <section className="border-b border-border-subtle bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {STEWARDSHIP_PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-ivory text-navy-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-medium text-navy-950">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-text-body">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Pathways */}
      <section className="bg-surface-ivory">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-glacial-600">
              Ways to Contribute
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
              Three direct pathways to classroom impact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-body">
              Whether you are an individual donor, family foundation, or
              institutional partner, each pathway connects directly to a
              concrete element of the 9-Point School-Partnership Program.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SPONSORSHIP_PATHWAYS.map((pathway) => (
              <article
                key={pathway.id}
                className="flex flex-col justify-between rounded-sm border border-border-subtle bg-surface-white p-7"
              >
                <div>
                  <p className="text-xs font-semibold text-ochre-600">
                    {pathway.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-950">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-body">
                    {pathway.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-border-subtle pt-5 text-sm text-text-body">
                    {pathway.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-glacial-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href={`/contact?topic=${encodeURIComponent(pathway.inquiryTopic)}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-900"
                  >
                    <span>{pathway.ctaLabel}</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Trust Contribution & Transfer Details */}
      <section className="border-t border-border-subtle bg-surface-linen">
        <div className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-sm border border-border-subtle bg-surface-white p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium text-glacial-600">
                  Direct Trust Transfers
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium text-navy-950 sm:text-3xl">
                  Contribution &amp; Trust banking details
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {siteConfig.donation.instructionsPlaceholder}
                </p>
              </div>

              <div className="lg:col-span-7">
                {isBankActive ? (
                  <dl className="grid gap-4 rounded-sm border border-border-subtle bg-surface-ivory p-5 text-sm sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-medium text-text-muted">
                        Account Title
                      </dt>
                      <dd className="mt-1 font-semibold text-navy-950">
                        {siteConfig.donation.accountTitle}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-text-muted">
                        Bank Name
                      </dt>
                      <dd className="mt-1 font-semibold text-navy-950">
                        {siteConfig.donation.bankName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-text-muted">
                        IBAN / Account Number
                      </dt>
                      <dd className="mt-1 font-semibold tabular-nums text-navy-950">
                        {siteConfig.donation.iban}
                      </dd>
                    </div>
                  </dl>
                ) : (
                  <div className="rounded-sm border border-border-subtle bg-surface-ivory p-6">
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="text-xs font-medium text-text-muted">
                          Beneficiary Trust
                        </dt>
                        <dd className="mt-0.5 font-semibold text-navy-950">
                          {siteConfig.donation.accountTitle}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-text-muted">
                          Governance Status
                        </dt>
                        <dd className="mt-0.5 text-text-body">
                          Registered Charitable Trust (7 Trustees)
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium text-text-muted">
                          Transfer Instructions
                        </dt>
                        <dd className="mt-0.5 text-text-body">
                          Provided directly by the Trust upon inquiry for both
                          domestic and international transfers.
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact?topic=Direct+Trust+Bank+Transfer+Details"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-ochre-500 px-6 py-3 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
                  >
                    <span>Request verified transfer details</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  {!siteConfig.contact.isPlaceholder && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong bg-surface-white px-5 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-surface-ivory"
                    >
                      <MailIcon className="h-4 w-4" />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
