import type { Metadata } from "next";
import BatchCard from "@/components/BatchCard";

export const metadata: Metadata = { title: "Batches – Sharma Academy" };

const groups = [
  {
    title: "Tuition: Class 8-10",
    batches: [
      { level: "Tuition", name: "Class 8" },
      { level: "Tuition", name: "Class 9" },
      { level: "Tuition", name: "Class 10" },
    ],
  },
  {
    title: "Inter MPC & EAMCET coaching",
    batches: [
      { level: "Inter MPC", name: "Inter MPC – 1st Year", subjects: "Maths, Physics, Chemistry" },
      { level: "Inter MPC", name: "Inter MPC – 2nd Year", subjects: "Maths, Physics, Chemistry" },
      { level: "EAMCET", name: "EAMCET Coaching" },
    ],
  },
];

export default function Batches() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10 md:py-16">
      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight text-main">
        Batches at Sharma Academy, Dilsukhnagar
      </h1>
      <p lang="te" className="mb-10 mt-1.5 text-muted">
        తరగతుల వారీ బ్యాచ్‌లు, సమయాలు
      </p>

      {groups.map((g) => (
        <section key={g.title} className="mb-10 last:mb-0">
          <h2 className="mb-4 border-l-4 border-accent pl-3 text-xl font-bold">{g.title}</h2>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {g.batches.map((b) => (
              <BatchCard key={b.name} level={b.level} name={b.name} subjects={"subjects" in b ? b.subjects : undefined} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
