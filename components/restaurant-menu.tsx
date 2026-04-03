"use client";

import { useState } from "react";
import { menuData, MenuSection } from "@/lib/menu-data";

export function RestaurantMenu() {
  const [activeSectionId, setActiveSectionId] = useState<string>(menuData[0].id);
  const activeSection = menuData.find((s) => s.id === activeSectionId) || menuData[0];

  return (
    <section className="bg-[#131314] py-24 px-6 relative" id="restaurant-menu">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold uppercase tracking-tighter md:text-7xl text-white">
            AVULUS <span className="text-[#CA98FF]">МЕНЮ</span>
          </h2>
          <p className="uppercase tracking-[0.3em] text-[#ADAAAB]">Вызов официанта: +7 969 031 48 79</p>
        </div>

        {/* Top Level Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuData.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`
                  px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all
                  ${isActive 
                    ? "bg-[#CA98FF] text-[#131314] shadow-[0_0_20px_rgba(202,152,255,0.4)]" 
                    : "bg-[#19191b] bg-opacity-80 text-white border border-[#484849]/30 hover:border-[#CA98FF]/50"}
                `}
              >
                {section.title}
              </button>
            );
          })}
        </div>

        {/* Selected Section Menu */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="columns-1 lg:columns-2 gap-12 space-y-12">
            {activeSection.categories.map((category) => (
              <div key={category.id} className="break-inside-avoid relative">
                {/* Category Header */}
                <h3 className="text-2xl font-bold uppercase text-white mb-8 border-b-2 border-[#CA98FF] inline-block pr-6 pb-2 relative">
                  {category.title}
                  <div className="absolute w-2 h-2 bg-[#FF6C8F] -right-1 bottom-[-5px] rounded-full"></div>
                </h3>

                {/* Category Items */}
                <ul className="flex flex-col gap-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-end gap-2 w-full group">
                      <div className="flex flex-col flex-shrink-0 max-w-[80%]">
                        <div className="text-base font-bold text-white uppercase transition-colors group-hover:text-[#CA98FF]">
                          {item.name}
                        </div>
                        {item.description && (
                          <div className="text-xs text-[#ADAAAB] mt-1 pr-4 leading-relaxed font-light italic">
                            {item.description}
                          </div>
                        )}
                        {item.weight && (
                          <div className="text-[10px] font-mono text-[#8EFF71] uppercase mt-1">
                            {item.weight}
                          </div>
                        )}
                      </div>

                      {/* Dotted Leader Line */}
                      <div className="flex-grow border-b-2 border-dotted border-[#484849]/40 relative -top-3 opacity-50 transition-opacity group-hover:opacity-100"></div>

                      <div className="flex-shrink-0 text-lg font-bold text-white whitespace-nowrap leading-none relative -top-1">
                        {item.price} <span className="text-[#CA98FF]">₽</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
