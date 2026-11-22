import Link from "next/link";
import Pending from "@/components/Pending";

const batches = [
  { level: "Tuition", name: "Class 8" },
  { level: "Tuition", name: "Class 9" },
  { level: "Tuition", name: "Class 10" },
  { level: "Inter MPC", name: "Inter MPC (1st & 2nd Year)" },
];

export default function BatchesPreview() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight text-main">
          Pick your child&apos;s class – see the batch timing
        </h2>
        <p lang="te" className="mb-6 mt-1.5 text-muted">
          తరగతుల వారీ బ్యాచ్‌లు, సమయాలు
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {batches.map((b) => (
            <article key={b.name} className="flex flex-col rounded-xl border border-[#cfe5d7] bg-white p-6">
              <p className="text-[13px] font-bold uppercase tracking-wide text-accent">{b.level}</p>
              <h3 className="mb-4 mt-1 text-xl font-bold text-main">{b.name}</h3>
              <dl className="mb-6 grid grid-cols-[80px_1fr] gap-2 text-[15px]">
                <dt className="text-muted">Timing</dt>
                <dd><Pending /></dd>
                <dt className="text-muted">Medium</dt>
                <dd><Pending /></dd>
              </dl>
              <Link
                href="/contact"
                className="mt-auto flex min-h-12 items-center justify-center rounded-lg border-2 border-accent font-bold text-main"
              >
                Call for details
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6">
          <Link href="/batches" className="font-semibold text-accent underline-offset-4 hover:underline">
            See all batches →
          </Link>
        </p>
      </div>
    </section>
  );
}
