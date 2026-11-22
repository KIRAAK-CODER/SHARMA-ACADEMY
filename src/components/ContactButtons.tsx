import Link from "next/link";

type Variant = "on-dark" | "on-light";

// Phone / WhatsApp numbers are [PENDING], so both buttons point to /contact
// for now. Swap href to tel: / wa.me links once the client gives the numbers.
export default function ContactButtons({
  variant = "on-light",
  size = "normal",
}: {
  variant?: Variant;
  size?: "normal" | "big";
}) {
  const call =
    variant === "on-dark" ? "bg-white text-main" : "bg-main text-white";
  const height = size === "big" ? "min-h-[84px] text-xl" : "min-h-[60px] text-[17px]";
  const base = `flex flex-col items-center justify-center whitespace-nowrap rounded-lg px-6 font-bold ${height}`;

  return (
    <>
      <Link href="/contact" className={`${base} ${call}`}>
        Call now
        <span lang="te" className="text-[13px] font-semibold">ఇప్పుడే కాల్ చేయండి</span>
      </Link>
      <Link href="/contact" className={`${base} bg-whatsapp text-[#0b2a1a]`}>
        WhatsApp us
        <span lang="te" className="text-[13px] font-semibold">వాట్సాప్ చేయండి</span>
      </Link>
    </>
  );
}
