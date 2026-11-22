import Link from "next/link";
import Pending from "@/components/Pending";

// 3 cards. Names, ranks, years and photos are all [PENDING] until the client sends them.
const cards = [1, 2, 3];

export default function Results() {
  return (
    <section className="bg-main pb-10 text-white md:pb-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="sr-only">Our EAMCET results</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {cards.map((n) => (
            <article key={n} className="overflow-hidden rounded-xl bg-white text-ink">
              <div className="grid h-[200px] place-items-center gap-2 border-b border-[#d3e8da] bg-tint text-sm text-muted">
                <span>
                  Student photo <Pending />
                </span>
              </div>
              <div className="px-6 pb-6 pt-4">
                <p className="text-sm font-semibold text-muted">EAMCET Rank</p>
                <p className="text-4xl font-bold leading-tight text-accent">
                  <Pending />
                </p>
                <h3 className="mb-1 mt-2 text-lg font-bold">
                  Student name <Pending />
                </h3>
                <p className="text-[15px] text-muted">
                  Year <Pending /> · Inter MPC / EAMCET batch
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/results" className="font-semibold text-white underline-offset-4 hover:underline">
            See all results → <span lang="te">అన్ని ఫలితాలు</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
