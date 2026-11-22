import Link from "next/link";
import Pending from "@/components/Pending";

// One card per batch. Reused on /batches and on the Home page preview.
// Timing and medium stay [PENDING] until the client confirms them.
// `subjects` is only passed for Inter MPC (MPC = Maths, Physics, Chemistry);
// everything else shows [PENDING].
export default function BatchCard({
  level,
  name,
  subjects,
}: {
  level: string;
  name: string;
  subjects?: string;
}) {
  return (
    <article className="flex flex-col rounded-xl border border-[#cfe5d7] bg-white p-6">
      <p className="text-[13px] font-bold uppercase tracking-wide text-accent">{level}</p>
      <h3 className="mb-4 mt-1 text-xl font-bold text-main">{name}</h3>
      <dl className="mb-6 grid grid-cols-[84px_1fr] gap-2 text-[15px]">
        <dt className="text-muted">Timing</dt>
        <dd><Pending /></dd>
        <dt className="text-muted">Medium</dt>
        <dd><Pending /></dd>
        <dt className="text-muted">Subjects</dt>
        <dd>{subjects ?? <Pending />}</dd>
      </dl>
      <Link
        href="/contact"
        className="mt-auto flex min-h-12 items-center justify-center rounded-lg border-2 border-accent font-bold text-main"
      >
        Call for details
      </Link>
    </article>
  );
}
