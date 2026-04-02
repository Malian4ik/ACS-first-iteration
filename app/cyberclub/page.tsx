import Link from "next/link";

import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { contactLinks, cyberclubPage, sharedImages } from "@/lib/stitch-site";

export default function CyberClubPage() {
  return (
    <>
      <div className="watermark-arena" style={{ backgroundImage: `url(${sharedImages.arenaWatermark})` }} />
      <AvulusNav items={cyberclubPage.nav} />

      <main className="content-layer">
        <header className="avulus-grid relative flex min-h-[884px] flex-col items-center justify-center px-6 pt-20">
          <div className="absolute left-10 top-24 hidden text-[10px] uppercase tracking-[0.2em] text-[#CA98FF]/40 md:block">
            COORD_X: 47.1293
            <br />
            COORD_Y: 28.5901
            <br />
            STATUS: ACTIVE_COMMAND
          </div>

          <div className="z-10 max-w-5xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8EFF71] shadow-[0_0_8px_#8EFF71]" />
              <span className="text-sm uppercase tracking-widest text-[#8EFF71]">Operational Readiness 100%</span>
            </div>

            <h1 className="text-glow mb-6 text-6xl font-bold uppercase leading-none tracking-tighter italic md:text-8xl lg:text-9xl">
              THE COMMAND <br />
              <span className="text-[#CA98FF]">CENTER</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl uppercase tracking-wide text-[#ADAAAB] md:text-2xl">
              High-performance gaming infrastructure for the elite operator.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                className="w-full bg-[#CA98FF] px-12 py-5 text-xl font-bold uppercase tracking-widest text-[#46007D] shadow-[0_10px_30px_rgba(202,152,255,0.2)] transition-all hover:bg-[#9c42f4] md:w-auto"
                href={contactLinks.bookPc}
                id="book-pc"
              >
                BOOK A PC
              </Link>
              <a
                className="w-full border border-[#484849]/30 px-12 py-5 text-xl font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#262627] md:w-auto"
                href="#hardware"
              >
                VIEW SPECS
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#CA98FF]/20">
            <span className="material-symbols-outlined animate-bounce text-4xl">keyboard_double_arrow_down</span>
          </div>
        </header>

        <section className="border-y border-[#484849]/15 bg-[#131314] py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {cyberclubPage.specs.map((spec) => (
              <div key={spec.label} className="border-l-2 border-[#CA98FF] pl-4">
                <span className="mb-1 block text-xs uppercase tracking-widest text-[#b772ff]">{spec.label}</span>
                <span className="text-2xl font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl">
                  DEPLOYMENT <span className="text-[#FF6C8F]">ZONES</span>
                </h2>
                <p className="uppercase tracking-widest text-[#ADAAAB]">Select your operational environment</p>
              </div>
              <div className="hidden text-right text-xs uppercase tracking-[0.3em] text-[#484849] md:block">
                ZONE_TYPE // AUTH_REQ
              </div>
            </div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
              {cyberclubPage.zones.map((zone) => (
                <article
                  key={zone.title}
                  className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border border-[#484849]/10 bg-[#19191b] p-8"
                >
                  <div className="absolute inset-0 opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0">
                    <img alt="" className="h-full w-full object-cover" src={zone.image} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-[#0e0e0f]/40 to-transparent" />

                  <div className="relative z-10">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-[#FF6C8F]">{zone.level}</span>
                    <h3 className="mb-4 text-4xl font-bold uppercase tracking-tighter">{zone.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#ADAAAB]">{zone.body}</p>
                    <ul className="mb-8 space-y-1 text-[10px] uppercase tracking-widest text-[#CA98FF]/80">
                      {zone.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                    <Link className={`block w-full border py-4 text-center text-sm font-bold uppercase tracking-widest transition-all ${zone.accent}`} href={contactLinks.bookPc}>
                      {zone.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="avulus-grid overflow-hidden bg-[#131314] px-6 py-32" id="hardware">
          <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-8 text-5xl font-bold uppercase tracking-tighter italic">
                HARDWARE <br />
                <span className="text-[#CA98FF]">OVERRIDE</span>
              </h2>
              <div className="space-y-8">
                {cyberclubPage.hardwarePanels.map((panel) => (
                  <div key={panel.title} className={`border-l-4 bg-[#19191b] p-6 ${panel.accent}`}>
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-widest">{panel.title}</h4>
                    <p className="leading-relaxed text-[#ADAAAB]">{panel.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-64 w-64 bg-[#CA98FF]/10 blur-[100px]" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-[#FF6C8F]/10 blur-[100px]" />
              <div className="relative border border-[#484849]/30 bg-[#262627] p-1">
                <img alt="" className="aspect-square w-full object-cover" src={cyberclubPage.hardwareImage} />
                <div className="absolute right-4 top-4 flex gap-2">
                  <span className="border border-[#CA98FF]/30 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-widest text-[#CA98FF]">
                    Live Diagnostics
                  </span>
                  <span className="border border-[#8EFF71]/30 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-widest text-[#8EFF71]">
                    Cooling: 24°C
                  </span>
                </div>
              </div>
              <div className="mt-8 flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                <span>HW_IDENT: XJ-992-ARENA</span>
                <span>FIRMWARE: V2.4.9 ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        <div className="pointer-events-none fixed bottom-0 z-40 w-full p-4">
          <div className="mx-auto flex max-w-7xl justify-end">
            <div className="glass-panel pointer-events-auto flex items-center gap-6 border border-[#484849]/20 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:p-6">
              <div className="hidden sm:block">
                <div className="mb-1 text-[10px] uppercase tracking-widest text-[#CA98FF]">Status: Slots Available</div>
                <div className="text-xl font-bold uppercase tracking-tighter">MISSION READY</div>
              </div>
              <div className="hidden h-10 w-px bg-[#484849]/30 sm:block" />
              <Link
                className="bg-[#CA98FF] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#46007D] transition-transform hover:scale-[0.98]"
                href={contactLinks.bookPc}
              >
                BOOK A PC NOW
              </Link>
            </div>
          </div>
        </div>
      </main>

      <AvulusFooter />
    </>
  );
}
