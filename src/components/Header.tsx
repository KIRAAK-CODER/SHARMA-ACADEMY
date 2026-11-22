import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/batches", label: "Batches" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-tint bg-white">
      <div className="mx-auto flex min-h-16 max-w-[1100px] items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-main">
          {/* TEMPORARY – logo is [PENDING] */}
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-md border-2 border-dashed border-accent text-center text-[8px] leading-none text-accent"
          >
            LOGO
            <br />
            PENDING
          </span>
          Sharma Academy
        </Link>

        <nav aria-label="Main" className="hidden gap-6 font-semibold md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone number is [PENDING] – no tel: link until client gives it */}
        <span className="inline-flex min-h-11 items-center rounded-lg bg-main px-4 text-sm font-bold text-white">
          Call for details
        </span>
      </div>

      <nav aria-label="Main mobile" className="flex justify-around border-t border-tint py-2 text-sm font-semibold md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="px-2 py-1 text-ink">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
