import Link from "next/link";

import { contactLinks } from "@/lib/stitch-site";

export function AvulusFooter({ stable = false }: { stable?: boolean }) {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-[#ADAAAB]/15 bg-[#0E0E0F] px-8 py-12 md:flex-row">
      <div className={`text-xs uppercase tracking-widest ${stable ? "text-[#8EFF71]" : "text-[#ADAAAB]"}`}>
        © 2024 AVULUS CYBER SPACE. ALL SYSTEMS ACTIVE.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.privacy}>
          PRIVACY POLICY
        </Link>
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.terms}>
          TERMS OF SERVICE
        </Link>
        <Link className="text-xs uppercase tracking-widest text-[#ADAAAB] transition-colors hover:text-[#CA98FF]" href={contactLinks.cookies}>
          COOKIE POLICY
        </Link>
        {stable ? null : (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8EFF71]" />
            <span className="text-xs uppercase tracking-widest text-[#8EFF71]">SERVICE STABLE</span>
          </div>
        )}
      </div>
    </footer>
  );
}
