"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/stitch-site";
import type { Locale } from "@/lib/dictionaries";

export function AvulusNav({ items, lang }: { items: NavItem[]; lang: Locale }) {
  const pathname = usePathname();

  // Create the alternate path by replacing /en or /ru
  const getAlternates = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    // pathname might be /ru/cyberclub -> ["", "ru", "cyberclub"]
    if (segments.length > 1 && (segments[1] === "en" || segments[1] === "ru")) {
      segments[1] = targetLang;
    } else {
      segments.splice(1, 0, targetLang);
    }
    return segments.join("/");
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#0E0E0F]/80 px-6 py-4 backdrop-blur-xl">
      <Link href={`/${lang}`} className="text-xs font-bold uppercase tracking-[-0.03em] text-[#CA98FF] sm:text-2xl">
        AVULUS
      </Link>
      
      <div className="flex items-center gap-8">
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

        {/* Language Switcher */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider text-[#ADAAAB]">
          <Link
            href={getAlternates("ru")}
            className={`transition-colors ${lang === "ru" ? "text-white" : "hover:text-[#CA98FF]"}`}
          >
            RU
          </Link>
          <span className="opacity-30">/</span>
          <Link
            href={getAlternates("en")}
            className={`transition-colors ${lang === "en" ? "text-white" : "hover:text-[#CA98FF]"}`}
          >
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
}
