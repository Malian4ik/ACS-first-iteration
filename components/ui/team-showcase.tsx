"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ShowcaseDish {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  accent?: string;
  tags?: string[];
}

const DEFAULT_DISHES: ShowcaseDish[] = [
  {
    id: "1",
    name: "Void-Sea Tartare",
    category: "Cold Starter",
    image: "/images/dish-ramen.jpg",
    description: "Silky salmon, bright herbs, and a plated finish that feels premium instead of cramped.",
    accent: "Chef Pick",
    tags: ["Fresh", "Signature"]
  },
  {
    id: "2",
    name: "Neural Overload",
    category: "Cocktail",
    image: "/images/dish-cocktail.jpg",
    description: "A luminous serve that works better as a supporting visual than a tiny boxed thumbnail.",
    accent: "House Mix",
    tags: ["Citrus", "Bar"]
  },
  {
    id: "3",
    name: "Core Bypass Burger",
    category: "Main Course",
    image: "/images/dish-burger.jpg",
    description: "Stacked layers, stronger depth, and enough texture to fill a portrait card without distortion.",
    accent: "Top Seller",
    tags: ["Smoky", "Hearty"]
  },
  {
    id: "4",
    name: "Grid-Sync Bites",
    category: "Street Food",
    image: "/images/dish-snack.jpg",
    description: "A snack plate that reads clearly in a tall crop and keeps the hover interaction lively.",
    accent: "Sharing Plate",
    tags: ["Crunchy", "Late Night"]
  },
  {
    id: "5",
    name: "Private Room Spread",
    category: "Chef's Table",
    image: "/images/restaurant-card.jpg",
    description: "A wider plated composition that adds variety while still fitting the staggered gallery rhythm.",
    accent: "Event Dining",
    tags: ["Curated", "Premium"]
  },
  {
    id: "6",
    name: "Atmosphere Course",
    category: "Dining Scene",
    image: "/images/restaurant-room.jpg",
    description: "The room still matters, but now it supports the food story instead of dominating the gallery.",
    accent: "Signature Mood",
    tags: ["Interior", "Ambient"]
  }
];

interface TeamShowcaseProps {
  items?: ShowcaseDish[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function TeamShowcase({
  items = DEFAULT_DISHES,
  eyebrow = "Food Showcase",
  title = "Plated Like A Feature, Not A Thumbnail",
  description = "A staggered gallery keeps the food feeling editorial and gives each dish enough space to breathe."
}: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(items[0]?.id ?? null);

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#151518] px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:px-6 md:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,152,255,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,108,143,0.12),transparent_28%)]" />

      <div className="relative mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#CA98FF]">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-bold uppercase leading-none tracking-[-0.04em] text-white md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.16em] text-white/55 md:text-base">
          {description}
        </p>
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-shrink-0">
          <div className="flex flex-col gap-3">
            {col1.map((item) => (
              <PhotoCard
                key={item.id}
                item={item}
                className="h-[160px] w-[126px] sm:h-[200px] sm:w-[156px] md:h-[230px] md:w-[184px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="mt-[54px] flex flex-col gap-3 sm:mt-[64px] md:mt-[82px]">
            {col2.map((item) => (
              <PhotoCard
                key={item.id}
                item={item}
                className="h-[176px] w-[138px] sm:h-[216px] sm:w-[172px] md:h-[248px] md:w-[204px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          <div className="mt-[24px] flex flex-col gap-3 sm:mt-[30px] md:mt-[38px]">
            {col3.map((item) => (
              <PhotoCard
                key={item.id}
                item={item}
                className="h-[168px] w-[132px] sm:h-[206px] sm:w-[164px] md:h-[238px] md:w-[194px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((item) => (
            <DishRow
              key={item.id}
              item={item}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCard({
  item,
  className,
  hoveredId,
  onHover
}: {
  item: ShowcaseDish;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-[#1b1b20] transition-all duration-500",
        className,
        isDimmed ? "scale-[0.985] opacity-55" : "opacity-100"
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 156px, (max-width: 1024px) 204px, 220px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(0.95) brightness(0.72)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CA98FF]">
          {item.category}
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
          {item.name}
        </p>
      </div>
    </div>
  );
}

function DishRow({
  item,
  hoveredId,
  onHover
}: {
  item: ShowcaseDish;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer rounded-[22px] border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 md:p-5",
        isActive && "border-[#CA98FF]/45 bg-[#CA98FF]/[0.08]",
        isDimmed && "opacity-45"
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "mt-1 h-3 w-3 flex-shrink-0 rounded-full border transition-all duration-300",
            isActive ? "border-[#CA98FF] bg-[#CA98FF] shadow-[0_0_18px_rgba(202,152,255,0.6)]" : "border-white/25 bg-transparent"
          )}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-base font-semibold uppercase tracking-[0.08em] text-white md:text-lg">
              {item.name}
            </p>
            {item.accent ? (
              <span className="rounded-full border border-[#FF6C8F]/35 bg-[#FF6C8F]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB7C7]">
                {item.accent}
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
            {item.category}
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/72">
            {item.description}
          </p>

          {item.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "border-[#CA98FF]/40 bg-[#CA98FF]/10 text-[#E5D0FF]"
                      : "border-white/10 bg-white/[0.03] text-white/55"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
