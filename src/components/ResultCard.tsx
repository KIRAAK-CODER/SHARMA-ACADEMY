import Pending from "@/components/Pending";

// One student result card. Photo, name, rank and year are all [PENDING]
// until the client sends real, verified details. Never fill with made-up data.
export default function ResultCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#cfe5d7] bg-white">
      <div className="grid h-[200px] place-items-center border-b border-[#d3e8da] bg-tint text-sm text-muted">
        <span>
          Student photo <Pending />
        </span>
      </div>
      <div className="px-6 pb-6 pt-4">
        <p className="text-sm font-semibold text-muted">EAMCET Rank</p>
        <p className="text-4xl font-bold leading-tight text-accent">
          <Pending />
        </p>
        <dl className="mt-3 grid grid-cols-[64px_1fr] items-center gap-2 text-[15px]">
          <dt className="text-muted">Name</dt>
          <dd className="font-semibold"><Pending /></dd>
          <dt className="text-muted">Year</dt>
          <dd className="font-semibold"><Pending /></dd>
        </dl>
      </div>
    </article>
  );
}
