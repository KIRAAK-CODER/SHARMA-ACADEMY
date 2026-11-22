import ContactButtons from "@/components/ContactButtons";

export default function Cta() {
  return (
    <section className="bg-main py-10 text-center text-white md:py-16">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight">
          Talk to Sharma Academy about your child&apos;s batch
        </h2>
        <p lang="te" className="mt-1.5 text-[#bfe3cc]">
          మీ పిల్లల బ్యాచ్ గురించి ఇప్పుడే మాట్లాడండి
        </p>
        <div className="mx-auto mt-6 grid max-w-[760px] gap-4 md:grid-cols-2">
          <ContactButtons variant="on-dark" size="big" />
        </div>
      </div>
    </section>
  );
}
