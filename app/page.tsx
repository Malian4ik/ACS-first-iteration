import Link from "next/link";

import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { homePage, sharedImages } from "@/lib/stitch-site";

export default function HomePage() {
  return (
    <>
      <div className="watermark-home" style={{ backgroundImage: `url(${sharedImages.homeWatermark})` }} />
      <AvulusNav items={homePage.nav} />

      <main className="content-layer">
        <section className="relative flex h-screen min-h-[884px] flex-col items-center justify-center overflow-hidden px-4 text-center">
          <div className="parallax-outline">AVULUS</div>
          <div className="absolute left-10 top-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#484849] lg:block">
            SYS_READY // LOC: 55.7558° N, 37.6173° E
          </div>

          <img
            alt="AVULUS logo"
            className="relative z-10 mb-8 w-40 drop-shadow-[0_0_20px_rgba(202,152,255,0.3)] md:w-56"
            src={sharedImages.logo}
          />

          <h1 className="relative z-10 mb-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] md:text-8xl">
            AVULUS <span className="text-[#CA98FF]">CYBER SPACE</span>
          </h1>
          <p className="relative z-10 mb-12 text-lg uppercase tracking-[0.15em] text-[#ADAAAB] md:text-2xl">
            CyberClub &amp; Restaurant Experience
          </p>

          <div className="relative z-10 flex w-full max-w-xl flex-col gap-4 md:flex-row">
            <Link
              className="flex-1 bg-[#CA98FF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#46007D] transition-all hover:bg-[#9c42f4]"
              href="/cyberclub#book-pc"
            >
              BOOK A PC
            </Link>
            <Link
              className="flex-1 border border-[#484849] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#CA98FF] transition-all hover:border-[#CA98FF]"
              href="/restaurant#reserve"
            >
              RESERVE A TABLE
            </Link>
          </div>

          <div className="absolute bottom-10 right-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#484849] lg:block">
            LATENCY: 0.04MS // STATUS: ONLINE <span className="ml-2 inline-block h-2 w-2 bg-[#8EFF71]" />
          </div>
        </section>

        <section className="grid min-h-[884px] md:grid-cols-2">
          {homePage.sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="group relative flex min-h-[442px] cursor-pointer flex-col justify-end overflow-hidden bg-[#131314] p-12"
            >
              <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110">
                <img alt="" className="h-full w-full object-cover" src={sector.image} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-[#0e0e0f]/40 to-transparent" />

              <div className="relative z-10">
                <span className={`mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${sector.accent}`}>
                  {sector.label}
                </span>
                <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl">{sector.title}</h2>
                <p className="mb-8 max-w-md text-sm text-[#ADAAAB] md:text-base">{sector.body}</p>

                <div className="flex items-center gap-4">
                  <span className={`material-symbols-outlined ${sector.textColor}`}>{sector.icon}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#767576]">{sector.status}</span>
                </div>

                <div className={`mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${sector.textColor} transition-transform group-hover:translate-x-2`}>
                  {sector.cta}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="bg-[#131314] px-8 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
            {homePage.features.map((feature) => (
              <article key={feature.title} className={`border-l-2 bg-[#262627] p-8 ${feature.accent}`}>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#ADAAAB]">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <AvulusFooter />
    </>
  );
}
