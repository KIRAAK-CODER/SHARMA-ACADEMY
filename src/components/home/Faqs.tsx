import Pending from "@/components/Pending";

// Answers are [PENDING] until the client confirms them. Do not invent answers.
const faqs = [
  { q: "Are classes in Telugu or English medium?", a: "[PENDING – medium for each batch]" },
  { q: "How many students are in one batch?", a: "[PENDING – batch size]" },
  { q: "When do new batches start?", a: "[PENDING – admission / batch start dates]" },
  { q: "Where is Sharma Academy in Dilsukhnagar?", a: "[PENDING – full address + map]" },
  { q: "Can I talk to a teacher before deciding?", a: "[PENDING – phone]" },
];

export default function Faqs() {
  return (
    <section className="bg-tint py-10 md:py-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight text-main">
          Questions parents ask before joining Sharma Academy
        </h2>
        <p lang="te" className="mb-6 mt-1.5 text-muted">
          తల్లిదండ్రులు తరచుగా అడిగే ప్రశ్నలు
        </p>

        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i === 0}
            className="group mb-2 rounded-lg border border-[#cfe5d7] bg-white"
          >
            <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-3 font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-2xl font-bold text-accent group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden text-2xl font-bold text-accent group-open:inline">–</span>
            </summary>
            <p className="px-6 pb-6 text-muted">
              <Pending label={f.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
