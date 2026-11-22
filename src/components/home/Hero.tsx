import ContactButtons from "@/components/ContactButtons";

export default function Hero() {
  return (
    <section className="bg-main text-white">
      <div className="mx-auto max-w-[1100px] px-4 pb-6 pt-10 md:pt-16">
        <span className="mb-4 inline-block rounded bg-accent px-2.5 py-1 text-[13px] font-bold">
          15 years in Dilsukhnagar
        </span>
        <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight">
          EAMCET rank under 2,000 – from our classrooms
        </h1>
        <p lang="te" className="mt-2 text-[#bfe3cc]">
          దిల్‌సుఖ్‌నగర్‌లో 15 ఏళ్లుగా – EAMCET 2,000 లోపు ర్యాంకులు
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-[repeat(2,minmax(0,260px))]">
          <ContactButtons variant="on-dark" />
        </div>
      </div>
    </section>
  );
}
