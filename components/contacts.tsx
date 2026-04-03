import Link from "next/link";
import { getDictionary, Locale } from "@/lib/dictionaries";

export function Contacts({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).contacts;

  return (
    <section className="bg-[#0E0E0F] px-4 py-24 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* Badge */}
          <div className="flex">
            <span className="rounded-full border border-[#CA98FF]/20 bg-[#CA98FF]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#CA98FF]">
              {t.badge}
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl uppercase">
            {t.title1} <br /> {t.title2}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-1 text-[#ADAAAB]">location_on</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">{t.addressLabel}</p>
                <p className="text-lg text-white">{t.addressText}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-1 text-[#ADAAAB]">schedule</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">{t.hoursLabel}</p>
                <p className="text-lg text-white">{t.hoursText}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded bg-transparent border border-[#ADAAAB] text-xs font-bold text-[#ADAAAB]">P</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">{t.parkingLabel}</p>
                <p className="text-lg text-white">{t.parkingText}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://t.me/avulus"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#CA98FF] px-8 py-4 text-sm font-bold tracking-wider text-[#46007D] transition-all hover:bg-[#9c42f4] whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z"/>
              </svg>
              {t.telegramBtn}
            </Link>
            <Link
              href="tel:+74959212221"
              className="flex items-center justify-center gap-2 rounded-xl border border-[#ADAAAB]/30 bg-transparent px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:bg-white/5 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              {t.callBtn}
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-[#ADAAAB]/15 bg-[#131314] shadow-2xl">
            <iframe
              src={`https://yandex.ru/map-widget/v1/?ll=37.648259%2C55.750145&mode=search&oid=244165336383&ol=biz&z=17&theme=dark&lang=${lang === 'ru' ? 'ru_RU' : 'en_US'}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full grayscale-[20%] invert-[5%] filter"
            ></iframe>
          </div>
          <p className="flex justify-center gap-2 text-center text-xs text-[#ADAAAB]">
            <span className="material-symbols-outlined text-[14px] text-[#FF6C8F]">location_on</span>
            {t.mapHint}
          </p>
        </div>
      </div>
    </section>
  );
}
