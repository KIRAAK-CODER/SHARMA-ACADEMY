import Link from "next/link";
import BatchCard from "@/components/BatchCard";

const batches = [
  { level: "Tuition", name: "Class 8" },
  { level: "Tuition", name: "Class 9" },
  { level: "Tuition", name: "Class 10" },
  { level: "Inter MPC", name: "Inter MPC (1st & 2nd Year)", subjects: "Maths, Physics, Chemistry" },
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
            <BatchCard key={b.name} level={b.level} name={b.name} subjects={b.subjects} />
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
