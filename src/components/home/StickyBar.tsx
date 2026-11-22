import Link from "next/link";

// Mobile-only bar that stays at the bottom. Numbers [PENDING] -> links go to /contact for now.
export default function StickyBar() {
  return (
    <div
      data-sticky-bar
      aria-label="Call or WhatsApp"
      className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-2 border-t border-[#cfe5d7] bg-white p-2 md:hidden"
    >
      <Link href="/contact" className="flex min-h-[52px] items-center justify-center rounded-lg bg-main font-bold text-white">
        Call
      </Link>
      <Link href="/contact" className="flex min-h-[52px] items-center justify-center rounded-lg bg-whatsapp font-bold text-[#0b2a1a]">
        WhatsApp
      </Link>
    </div>
  );
}
