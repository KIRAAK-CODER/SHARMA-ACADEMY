// Yellow tag for information the client has not given yet. Never replace with made-up data.
export default function Pending({ label = "[PENDING]" }: { label?: string }) {
  return (
    <span className="whitespace-nowrap rounded border border-dashed border-[#b88a00] bg-[#fff6d6] px-2 py-0.5 text-[0.85em] font-semibold text-[#6b5000]">
      {label}
    </span>
  );
}
