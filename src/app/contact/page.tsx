import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Basho Valley Education Foundation (BVEF) regarding school sponsorships, donations, and education partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-spruce-900 text-surface-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-saffron-100">
            Get in Touch
          </p>
          <h1 className="mt-2 font-serif text-4xl font-normal tracking-tight sm:text-5xl">
            Contact <em className="italic">{siteConfig.shortName}</em>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-white/85">
            Reach out to learn more about sponsoring a Three-Teacher Team,
            equipping a digital classroom, or partnering with our Trust in Basho
            Valley.
          </p>
        </div>
      </section>

      <section className="bg-surface-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border-subtle bg-surface-white p-6 shadow-xs sm:p-8">
              <h2 className="font-serif text-2xl font-normal text-spruce-900">
                Foundation Details
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Organization
                  </dt>
                  <dd className="mt-1 font-bold uppercase text-spruce-900">
                    {siteConfig.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Chief Executive Officer
                  </dt>
                  <dd className="mt-1 font-semibold text-spruce-900">
                    {siteConfig.ceo.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    CEO Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.ceo.email}`}
                      className="font-medium text-spruce-900 underline decoration-saffron-600/60 underline-offset-4 hover:text-saffron-700"
                    >
                      {siteConfig.ceo.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Foundation Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-spruce-900 underline decoration-saffron-600/60 underline-offset-4 hover:text-saffron-700"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Phone / WhatsApp
                  </dt>
                  <dd className="mt-1 font-medium text-text-body">
                    <a
                      href="tel:+923417888621"
                      className="hover:text-spruce-900"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-text-body">
                    {siteConfig.contact.address}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
