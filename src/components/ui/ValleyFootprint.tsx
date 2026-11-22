import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface ValleyFootprintProps {
  compact?: boolean;
}

export function ValleyFootprint({ compact = false }: ValleyFootprintProps) {
  const { totalVillages, activePartnerSchools, plannedNextYearSchools, villagesWaiting } =
    siteConfig.stats;

  const furtherWaiting = Math.max(0, villagesWaiting - plannedNextYearSchools);

  const cells: Array<{
    index: number;
    status: "active" | "planned" | "waiting";
    label: string;
  }> = [
    ...Array.from({ length: activePartnerSchools }, (_, i) => ({
      index: i + 1,
      status: "active" as const,
      label: `Village ${i + 1}: Active partner school`,
    })),
    ...Array.from({ length: plannedNextYearSchools }, (_, i) => ({
      index: activePartnerSchools + i + 1,
      status: "planned" as const,
      label: `Village ${activePartnerSchools + i + 1}: Planned 2nd school before year-end`,
    })),
    ...Array.from({ length: furtherWaiting }, (_, i) => ({
      index: activePartnerSchools + plannedNextYearSchools + i + 1,
      status: "waiting" as const,
      label: `Village ${activePartnerSchools + plannedNextYearSchools + i + 1}: Awaiting expansion`,
    })),
  ];

  return (
    <div className="rounded-sm border border-border-subtle bg-surface-white p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium text-glacial-600">
            Current Footprint — {totalVillages} Villages in Basho Valley
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
            One school proven. Sixteen villages waiting.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-body sm:text-base">
            BVEF currently supports{" "}
            <strong className="font-semibold text-navy-950">
              {activePartnerSchools} partner school
            </strong>{" "}
            and plans to add a{" "}
            <strong className="font-semibold text-navy-950">
              2nd school before year-end
            </strong>
            . Across the valley,{" "}
            <strong className="font-semibold text-navy-950">
              {villagesWaiting} remaining villages
            </strong>{" "}
            are eagerly waiting for the School-Partnership Program to reach their
            children.
          </p>

          {!compact && (
            <div className="mt-6">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-md bg-navy-950 px-5 py-2.5 text-sm font-medium text-surface-white transition-colors hover:bg-navy-900"
              >
                <span>Help expand to the next village</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <div
            className="grid grid-cols-6 gap-2 sm:grid-cols-9 lg:grid-cols-6 xl:grid-cols-9"
            role="list"
            aria-label="Status of the 17 villages in Basho Valley"
          >
            {cells.map((cell) => {
              const style =
                cell.status === "active"
                  ? "border-navy-950 bg-navy-950 text-surface-white"
                  : cell.status === "planned"
                    ? "border-ochre-500 bg-ochre-500 text-navy-980"
                    : "border-border-subtle bg-surface-ivory text-text-muted";

              return (
                <div
                  key={cell.index}
                  role="listitem"
                  title={cell.label}
                  aria-label={cell.label}
                  className={`flex aspect-square flex-col items-center justify-center rounded-sm border text-xs font-semibold tabular-nums ${style}`}
                >
                  <span>{String(cell.index).padStart(2, "0")}</span>
                </div>
              );
            })}
          </div>

          <dl className="mt-6 grid gap-3 border-t border-border-subtle pt-5 text-xs sm:grid-cols-3">
            <div className="flex items-center gap-2.5">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-xs bg-navy-950"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-950">
                  {activePartnerSchools} Active Partner School
                </dt>
                <dd className="text-text-muted">Three-Teacher Team operating</dd>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-xs bg-ochre-500"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-950">
                  +{plannedNextYearSchools} Planned This Year
                </dt>
                <dd className="text-text-muted">Next public school slated</dd>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-xs border border-border-strong bg-surface-ivory"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-950">
                  {villagesWaiting} Villages Waiting
                </dt>
                <dd className="text-text-muted">Ready as funding grows</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
