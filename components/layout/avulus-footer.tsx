import Link from "next/link";

import { contactLinks } from "@/lib/stitch-site";
import { getDictionary, Locale } from "@/lib/dictionaries";

export function AvulusFooter({ stable = false, lang }: { stable?: boolean; lang: Locale }) {
  const t = getDictionary(lang).footer;

  return (
    <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-[#ADAAAB]/15 bg-[#0E0E0F] px-8 py-12 md:flex-row">
      <div className={`text-xs uppercase tracking-widest text-center ${stable ? "text-[#8EFF71]" : "text-[#ADAAAB]"}`}>
        {t.copyright}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.privacy}>
          {t.privacy}
        </Link>
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.terms}>
          {t.terms}
        </Link>
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.cookies}>
          {t.cookies}
        </Link>
        {stable ? null : (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8EFF71]" />
            <span className="text-xs uppercase tracking-widest text-[#8EFF71]">{t.stable}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
