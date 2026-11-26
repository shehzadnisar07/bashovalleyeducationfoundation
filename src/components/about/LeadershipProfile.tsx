import Image from "next/image";
import type { LeadershipMember } from "@/data/leadership";

type LeadershipProfileProps = {
  member: LeadershipMember;
};

export function LeadershipProfile({ member }: LeadershipProfileProps) {
  const expertiseTags = member.expertise.slice(0, 3);
  const hasContact = Boolean(
    member.contact?.email || member.contact?.phone || member.contact?.linkedIn
  );
  const hasExperience = Boolean(
    member.experience && member.experience.length > 0
  );

  return (
    <article className="rounded-xl border border-border-subtle bg-surface-white p-6 shadow-xs transition-colors duration-200 hover:border-spruce-800/35 sm:p-8 lg:p-10">
      <div className="grid gap-8 md:grid-cols-12 md:items-start lg:gap-10">
        {/* Left Column: Consistent Rectangular Portrait Frame */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl border border-border-subtle bg-surface-mist md:mx-0 md:max-w-none">
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name}, ${member.designation}`}
                fill
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 30vw, 260px"
                className="object-cover object-top"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center bg-surface-mist font-serif text-4xl font-normal text-spruce-900"
                aria-label={`${member.name} initials placeholder`}
              >
                {member.initials}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Identity, Bio, Expertise, Contact & Professional Journey */}
        <div className="min-w-0 md:col-span-8 lg:col-span-9">
          <p className="type-label text-spruce-800">
            {member.designation}
          </p>

          <h3 className="type-subsection mt-1.5 text-spruce-950">
            {member.name}
          </h3>

          {member.location && (
            <p className="type-label mt-1 flex items-center gap-1.5 text-slate-500">
              <svg
                className="h-4 w-4 shrink-0 text-spruce-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.25" />
              </svg>
              <span>{member.location}</span>
            </p>
          )}

          <p className="type-body mt-4 max-w-[65ch] text-text-body">
            {member.bio}
          </p>

          {/* Expertise Badges (Maximum 3) */}
          {expertiseTags.length > 0 && (
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Areas of expertise"
            >
              {expertiseTags.map((label) => (
                <li
                  key={label}
                  className="type-label inline-flex items-center rounded-full border border-spruce-800/20 bg-brand-blue-100 px-3 py-1 text-spruce-900"
                >
                  {label}
                </li>
              ))}
            </ul>
          )}

          {/* Contact Information (Only Rendered When Available) */}
          {hasContact && (
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-subtle pt-5 text-sm">
              {member.contact?.email && (
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Email</dt>
                  <svg
                    className="h-4 w-4 shrink-0 text-spruce-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <dd className="min-w-0">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="break-words font-medium text-spruce-900 underline decoration-spruce-800/45 underline-offset-4 transition-colors hover:text-spruce-950 hover:decoration-spruce-950"
                    >
                      {member.contact.email}
                    </a>
                  </dd>
                </div>
              )}

              {member.contact?.phone && (
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Phone</dt>
                  <svg
                    className="h-4 w-4 shrink-0 text-spruce-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <dd>
                    <a
                      href={`tel:${member.contact.phone.replace(/\s+/g, "")}`}
                      className="font-medium text-spruce-900 transition-colors hover:text-spruce-950"
                    >
                      {member.contact.phone}
                    </a>
                  </dd>
                </div>
              )}

              {member.contact?.linkedIn && (
                <div className="flex items-center gap-2">
                  <dt className="sr-only">LinkedIn</dt>
                  <svg
                    className="h-4 w-4 shrink-0 text-spruce-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <dd>
                    <a
                      href={member.contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-spruce-900 underline decoration-spruce-800/45 underline-offset-4 transition-colors hover:text-spruce-950 hover:decoration-spruce-950"
                    >
                      LinkedIn Profile
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          )}

          {/* Professional Journey Vertical Career Timeline */}
          {hasExperience && (
            <div className="mt-7 border-t border-border-subtle pt-6">
              <h4 className="type-label font-semibold text-spruce-950">
                Professional Journey
              </h4>

              <ol className="relative mt-5 space-y-6 border-s-2 border-spruce-800/25 ps-5 sm:ps-6">
                {member.experience?.map((exp) => (
                  <li
                    key={`${exp.organization}-${exp.period}`}
                    className="relative"
                  >
                    <span
                      className="absolute -start-[1.5625rem] top-1.5 h-2.5 w-2.5 rounded-full bg-spruce-800 ring-4 ring-surface-white sm:-start-[1.8125rem]"
                      aria-hidden="true"
                    />
                    <p className="type-label text-spruce-800">
                      {exp.period} &middot; {exp.organization}
                    </p>
                    <p className="type-card mt-1 text-spruce-950">
                      {exp.role}
                    </p>
                    <p className="type-body mt-1 max-w-[65ch] text-text-body">
                      {exp.summary}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
