"use client";

import { useState } from "react";
import { pricingData, ZonePricing } from "@/lib/pricing-data";

type PricingTranslations = {
  title: string;
  weekdays: string;
  weekends: string;
  day: string;
  night: string;
  hour1: string;
  hour3: string;
  hour5: string;
  packages: Record<string, string>;
  perHour: string;
  timeRangeDay: string;
  timeRangeNight: string;
};

export function PricingSection({ t }: { t: PricingTranslations }) {
  const [activeZoneId, setActiveZoneId] = useState<string>(pricingData[0].id);

  const activeZone = pricingData.find((z) => z.id === activeZoneId) || pricingData[0];

  const renderSchedule = (schedule: ZonePricing["weekdays"], title: string) => (
    <div className="flex-1 rounded-xl border border-[#484849]/20 bg-[#19191b] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-[#FF6C8F] px-6 py-4 text-center">
        <h4 className="text-xl font-bold uppercase tracking-widest text-[#131314]">{title}</h4>
      </div>

      <div className="flex flex-col gap-6 p-6">
        {/* Day / Night Spits */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Day Column */}
          <div className="flex-1 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[#CA98FF] mb-2 border-b border-[#484849]/30 pb-2 flex justify-between">
              <span>{t.day}</span>
              <span className="text-[#ADAAAB]">{t.timeRangeDay}</span>
            </h5>
            {schedule.day.map((period, i) => (
              <div key={i} className="flex justify-between items-center bg-[#201f21] px-4 py-2 rounded">
                <span className="text-sm font-bold text-[#ADAAAB]">{period.hours === 1 ? t.hour1 : period.hours === 3 ? t.hour3 : t.hour5}</span>
                <span className="text-lg font-bold text-white">{period.price} {t.perHour}</span>
              </div>
            ))}
          </div>

          {/* Night Column */}
          <div className="flex-1 space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[#CA98FF] mb-2 border-b border-[#484849]/30 pb-2 flex justify-between">
              <span>{t.night}</span>
              <span className="text-[#ADAAAB]">{t.timeRangeNight}</span>
            </h5>
            {schedule.night.map((period, i) => (
              <div key={i} className="flex justify-between items-center bg-[#201f21] px-4 py-2 rounded">
                <span className="text-sm font-bold text-[#ADAAAB]">{period.hours === 1 ? t.hour1 : period.hours === 3 ? t.hour3 : t.hour5}</span>
                <span className="text-lg font-bold text-[#FF6C8F]">{period.price} {t.perHour}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        {schedule.packages && schedule.packages.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#484849]/30 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {schedule.packages.map((pkg, i) => (
              <div key={i} className="bg-[#CA98FF]/10 border border-[#CA98FF]/20 px-4 py-3 flex justify-between items-center rounded">
                <span className="text-xs font-bold uppercase tracking-widest text-[#CA98FF]">{t.packages[pkg.key as keyof typeof t.packages]}</span>
                <span className="text-md font-bold text-white">{pkg.price} {t.perHour}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-[#131314] py-24 px-6 border-y border-[#484849]/15" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-6xl text-white">
            <span className="text-[#CA98FF]">SELECT</span> {t.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="uppercase tracking-widest text-[#ADAAAB]">Operational Rate Parameters</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Vertical Tabs */}
          <div className="lg:w-64 flex-shrink-0 flex flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar" style={{ flexFlow: 'row lg:column' }}>
            <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
              {pricingData.map((zone) => {
                const isActive = activeZoneId === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`
                      relative group px-6 py-4 text-left transition-all duration-300
                      font-bold uppercase tracking-widest text-sm
                      border overflow-hidden
                      ${isActive 
                        ? "bg-[#CA98FF] text-[#131314] border-[#CA98FF] scale-[1.02]" 
                        : "bg-[#19191b] text-white border-[#484849]/30 hover:bg-[#201f21] hover:border-[#CA98FF]/50"}
                      transform origin-left
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
                    )}
                    {zone.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Details Panel */}
          <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Active Zone Header Specs */}
            <div className="mb-8 p-6 bg-[#19191b] border-l-4 border-[#CA98FF]">
              <h3 className="text-3xl font-bold uppercase text-white mb-2">{activeZone.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8EFF71] mb-1">{activeZone.specsLine1}</p>
              <p className="text-xs uppercase tracking-widest text-[#ADAAAB]">{activeZone.specsLine2}</p>
            </div>

            {/* Split Price Tables */}
            <div className="flex flex-col md:flex-row gap-6">
              {renderSchedule(activeZone.weekdays, t.weekdays)}
              {renderSchedule(activeZone.weekends, t.weekends)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
