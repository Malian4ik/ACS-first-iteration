import Link from "next/link";

import type { NavItem } from "@/lib/stitch-site";

export function AvulusNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#0E0E0F]/80 px-6 py-4 backdrop-blur-xl">
      <Link href="/" className="text-xs font-bold uppercase tracking-[-0.03em] text-[#CA98FF] sm:text-2xl">
        AVULUS
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-bold uppercase tracking-tighter transition-colors duration-300 ${
              item.active
                ? "border-b-2 border-[#CA98FF] text-[#CA98FF]"
                : "text-[#ADAAAB] hover:text-[#FF6C8F]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
