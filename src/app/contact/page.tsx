import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPinIcon, ShieldIcon, UsersIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with Basho Valley Education Foundation regarding school sponsorships, digital classroom kits, institutional partnerships, or educator inquiries.",
};

const STAKEHOLDER_GUIDES = [
  {
    title: "Donors & Sponsors",
    description:
      "Request verified Trust transfer details, sponsor a Three-Teacher STEM Team, or equip an offline digital classroom.",
  },
  {
    title: "Institutional Partners",
    description:
      "Explore co-funding the 2nd partner school planned this year or expanding into the 16 waiting villages.",
  },
  {
    title: "Educators & Advisors",
    description:
      "Share offline STEM curricula, teacher-training expertise, or educational advisory support.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        sectionLabel="Contact"
        title="Connect with Basho Valley Education Foundation"
        lead="Reach out to our Trustees regarding school sponsorships, digital classroom hardware, institutional partnerships, or community inquiries."
        meta="Basho Valley, District Skardu, Gilgit-Baltistan · Registered Charitable Trust"
      />

      {/* Stakeholder Guidance Strip */}
      <section className="border-b border-border-subtle bg-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {STAKEHOLDER_GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="border-l-2 border-ochre-500 pl-4"
              >
                <h2 className="font-serif text-lg font-medium text-navy-950">
                  {guide.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-text-body">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Institutional Details */}
      <section className="bg-surface-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-sm border border-border-subtle bg-surface-white p-10 text-sm text-text-muted">
                  Loading inquiry form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-sm border border-border-subtle bg-surface-white p-7 sm:p-8">
              <h2 className="font-serif text-2xl font-medium text-navy-950">
                Foundation details
              </h2>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-glacial-600" />
                  <div>
                    <dt className="text-xs font-medium text-text-muted">
                      Legal Entity
                    </dt>
                    <dd className="mt-0.5 font-semibold text-navy-950">
                      {siteConfig.name} ({siteConfig.shortName})
                    </dd>
                    <dd className="mt-0.5 text-text-body">
                      {siteConfig.isRegistrationPending
                        ? "Registered Charitable Trust (official registration number published upon launch)"
                        : siteConfig.registrationNumber}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-glacial-600" />
                  <div>
                    <dt className="text-xs font-medium text-text-muted">
                      Program Region
                    </dt>
                    <dd className="mt-0.5 font-medium text-navy-950">
                      {siteConfig.contact.address}
                    </dd>
                    <dd className="mt-0.5 text-xs text-text-muted">
                      Altitude {siteConfig.stats.altitude} ·{" "}
                      {siteConfig.stats.distanceFromSkardu}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UsersIcon className="mt-0.5 h-5 w-5 shrink-0 text-glacial-600" />
                  <div>
                    <dt className="text-xs font-medium text-text-muted">
                      Governance
                    </dt>
                    <dd className="mt-0.5 text-text-body">
                      Governed by {siteConfig.stats.trusteesCount} Trustees,
                      most of whom are teachers working in Basho Valley.
                    </dd>
                  </div>
                </div>

                {!siteConfig.contact.isPlaceholder && (
                  <div className="border-t border-border-subtle pt-5 space-y-3">
                    <div>
                      <dt className="text-xs font-medium text-text-muted">
                        Official Email
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="font-medium text-navy-950 underline decoration-ochre-500 underline-offset-4 hover:text-ochre-600"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-text-muted">
                        Phone / WhatsApp
                      </dt>
                      <dd className="mt-0.5 text-text-body">
                        {siteConfig.contact.phone}
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>

            <div className="rounded-sm border border-border-subtle bg-surface-linen p-6 text-sm">
              <h3 className="font-serif text-lg font-medium text-navy-950">
                Note on valley connectivity
              </h3>
              <p className="mt-2 leading-relaxed text-text-body">
                Basho Valley has no internet access and only occasional phone
                reception. Inquiries are coordinated through the Trust&apos;s
                designated representatives so international donors and partners
                receive timely responses.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
