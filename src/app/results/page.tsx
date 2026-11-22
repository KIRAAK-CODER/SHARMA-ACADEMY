import type { Metadata } from "next";

export const metadata: Metadata = { title: "Results – Sharma Academy" };

export default function Results() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">
      <h1 className="text-3xl font-bold text-main">Results</h1>
    </div>
  );
}
