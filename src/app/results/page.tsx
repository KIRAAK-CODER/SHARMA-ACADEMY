import type { Metadata } from "next";
import ResultCard from "@/components/ResultCard";
import Cta from "@/components/home/Cta";

export const metadata: Metadata = { title: "Results – Sharma Academy" };

export default function Results() {
  return (
    <>
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:py-16">
        <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight text-main">
          Our EAMCET results
        </h1>
        <p lang="te" className="mb-8 mt-1.5 text-muted">
          మా EAMCET ఫలితాలు
        </p>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
      <Cta />
    </>
  );
}
