import Link from "next/link";

import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { Contacts } from "@/components/contacts";
import { homePage, sharedImages } from "@/lib/stitch-site";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const navItems = homePage.nav.map((item, i) => ({
    ...item,
    label: i === 0 ? t.nav.arena : t.nav.restaurant,
    href: `/${lang}${item.href}`
  }));

  return (
    <>
      <div className="watermark-home" style={{ backgroundImage: `url(${sharedImages.homeWatermark})` }} />
      <AvulusNav items={navItems} lang={lang} />

      <main className="content-layer">
        <section className="relative flex h-screen min-h-[884px] flex-col items-center justify-center overflow-hidden px-4 text-center">
          <div className="parallax-outline">AVULUS</div>
          <div className="absolute left-10 top-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#484849] lg:block">
            {t.home.heroMetaTop}
          </div>

          <img
            alt="AVULUS logo"
            className="relative z-10 mb-8 w-40 drop-shadow-[0_0_20px_rgba(202,152,255,0.3)] md:w-56"
            src={sharedImages.logo}
          />

          <h1 className="relative z-10 mb-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] md:text-8xl">
            {t.home.heroTitle} <span className="text-[#CA98FF]">{t.home.heroTitleSpan}</span>
          </h1>
          <p className="relative z-10 mb-12 text-lg uppercase tracking-[0.15em] text-[#ADAAAB] md:text-2xl">
            {t.home.heroSubtitle}
          </p>

          <div className="relative z-10 flex w-full max-w-xl flex-col gap-4 md:flex-row">
            <Link
              className="flex-1 bg-[#CA98FF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#46007D] transition-all hover:bg-[#9c42f4]"
              href={`/${lang}/cyberclub#book-pc`}
            >
              {t.home.bookPc}
            </Link>
            <Link
              className="flex-1 border border-[#484849] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#CA98FF] transition-all hover:border-[#CA98FF]"
              href={`/${lang}/restaurant#reserve`}
            >
              {t.home.reserveTable}
            </Link>
          </div>

          <div className="absolute bottom-10 right-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#484849] lg:block">
            {t.home.heroMetaBottom} <span className="ml-2 inline-block h-2 w-2 bg-[#8EFF71]" />
          </div>
        </section>

        <section className="grid min-h-[884px] md:grid-cols-2">
          {homePage.sectors.map((sectorDef, i) => {
            const sector = t.home.sectors[i];
            return (
              <Link
                key={sector.title}
                href={`/${lang}${sector.href}`}
                className="group relative flex min-h-[442px] cursor-pointer flex-col justify-end overflow-hidden bg-[#131314] p-12"
              >
                <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110">
                  <img alt="" className="h-full w-full object-cover" src={sectorDef.image} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-[#0e0e0f]/40 to-transparent" />

                <div className="relative z-10">
                  <span className={`mb-4 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${sectorDef.accent}`}>
                    {sector.label}
                  </span>
                  <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl">{sector.title}</h2>
                  <p className="mb-8 max-w-md text-sm text-[#ADAAAB] md:text-base">{sector.body}</p>

                  <div className="flex items-center gap-4">
                    <span className={`material-symbols-outlined ${sectorDef.textColor}`}>{sectorDef.icon}</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#767576]">{sector.status}</span>
                  </div>

                  <div className={`mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${sectorDef.textColor} transition-transform group-hover:translate-x-2`}>
                    {sector.cta}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="bg-[#131314] px-8 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
            {homePage.features.map((featureDef, i) => {
              const feature = t.home.features[i];
              return (
                <article key={feature.title} className={`border-l-2 bg-[#262627] p-8 ${featureDef.accent}`}>
                  <h3 className="mb-4 text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[#ADAAAB]">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Contacts lang={lang} />
      <AvulusFooter lang={lang} />
    </>
  );
}
