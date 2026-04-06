import type { Metadata } from "next";
import Image from "next/image";
import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { RestaurantMenu } from "@/components/restaurant-menu";
import TeamShowcase, { type ShowcaseDish } from "@/components/ui/team-showcase";
import { restaurantPage, sharedImages } from "@/lib/stitch-site";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ru";
  const seo = getDictionary(locale).restaurant.seo;

  return {
    title: seo.title,
    description: seo.description
  };
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ru";
  const t = getDictionary(locale);

  const navItems = restaurantPage.nav.map((item, i) => ({
    ...item,
    label: i === 0 ? t.nav.arena : t.nav.restaurant,
    href: `/${locale}${item.href}`
  }));

  const foodShowcaseItems: ShowcaseDish[] = [
    {
      id: "dish-1",
      name: locale === "ru" ? "Тартар из лосося" : "Void-Sea Tartare",
      category: locale === "ru" ? "Холодная подача" : "Cold Starter",
      image: restaurantPage.dishes[0].image,
      description:
        locale === "ru"
          ? "Светлая подача с акцентом на свежесть и текстуру. Карточка читабельна даже в крупном вертикальном формате."
          : "A cleaner plated composition with enough texture and contrast to hold up in a tall editorial crop.",
      accent: locale === "ru" ? "Шеф рекомендует" : "Chef Pick",
      tags: locale === "ru" ? ["Свежесть", "Фирменное"] : ["Fresh", "Signature"]
    },
    {
      id: "dish-2",
      name: locale === "ru" ? "Неоновый бар Avulus" : "Avulus Neon Bar",
      category: locale === "ru" ? "Барная зона" : "Bar Scene",
      image: restaurantPage.atmosphereImage,
      description:
        locale === "ru"
          ? "Светящийся бар хорошо передает настроение зала и визуально связывает кухню с коктейльной подачей."
          : "The illuminated bar sets the mood of the room and ties the dining story to the cocktail program.",
      accent: locale === "ru" ? "Бар и коктейли" : "Bar & Cocktails",
      tags: locale === "ru" ? ["Неон", "Бар"] : ["Neon", "Bar"]
    },
    {
      id: "dish-3",
      name: locale === "ru" ? "Фирменный бургер" : "Core Bypass Burger",
      category: locale === "ru" ? "Основное блюдо" : "Main Course",
      image: restaurantPage.dishes[2].image,
      description:
        locale === "ru"
          ? "Бургер раскрывается заметно лучше в крупной карточке, чем в маленьком квадрате галереи."
          : "The burger reads much better at a larger scale than it did in the old square gallery tiles.",
      accent: locale === "ru" ? "Хит меню" : "Top Seller",
      tags: locale === "ru" ? ["Сытно", "Гриль"] : ["Hearty", "Grill"]
    },
    {
      id: "dish-4",
      name: locale === "ru" ? "Лаунж-зона ресторана" : "Restaurant Lounge",
      category: locale === "ru" ? "Интерьер" : "Interior",
      image: sharedImages.restaurantWatermark,
      description:
        locale === "ru"
          ? "Мягкий свет, приватная посадка и яркие акценты делают пространство более премиальным на фото."
          : "Soft lounge seating, privacy, and vivid accents make the restaurant feel more premium in the gallery.",
      accent: locale === "ru" ? "Атмосфера зала" : "Dining Mood",
      tags: locale === "ru" ? ["Лаунж", "Посадка"] : ["Lounge", "Seating"]
    },
    {
      id: "dish-5",
      name: locale === "ru" ? "Барная стойка Avulus" : "Avulus Bar Counter",
      category: locale === "ru" ? "Коктейльный сервис" : "Cocktail Service",
      image: restaurantPage.heroImage,
      description:
        locale === "ru"
          ? "Широкий кадр со стойкой и светом показывает ресторан как полноценное вечернее пространство, а не только меню."
          : "The wide bar-counter shot presents the restaurant as a full evening destination, not just a menu page.",
      accent: locale === "ru" ? "Вечерняя подача" : "Evening Venue",
      tags: locale === "ru" ? ["Стойка", "Неон"] : ["Counter", "Neon"]
    }
  ];

  return (
    <>
      <AvulusNav items={navItems} lang={locale} />

      <main className="content-layer bg-[#131314]">
        {/* Main Hero Wrapper - Place for future picture */}
        <header className="avulus-grid relative flex min-h-[884px] flex-col items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 z-0">
            {/* Temp hero picture injected here */}
            <Image
              alt={locale === "ru" ? "Барная стойка ресторана Avulus в Москве" : "Avulus restaurant bar counter in Moscow"}
              className="object-cover opacity-30 grayscale"
              fill
              priority
              sizes="100vw"
              src={restaurantPage.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#131314]/0 via-[#131314]/80 to-[#131314]" />
          </div>

          <div className="absolute left-10 top-24 hidden text-[10px] uppercase tracking-[0.2em] text-[#CA98FF]/40 md:block z-10">
            {t.restaurant.heroMeta.sector}
            <br />
            {t.restaurant.heroMeta.status}
            <br />
            {t.restaurant.heroMeta.temperature}
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8EFF71] shadow-[0_0_8px_#8EFF71]" />
              <span className="text-sm uppercase tracking-widest text-[#8EFF71]">{t.restaurant.heroStatus}</span>
            </div>

            <h1 className="text-glow mb-6 text-6xl font-bold uppercase leading-none tracking-tighter italic md:text-8xl lg:text-9xl text-white">
              {t.restaurant.heroTitle.split(' ').map((word, i) => 
                i === 0 ? <span key={i}>{word} <br /></span> : <span key={i} className="text-[#CA98FF]">{word}</span>
              )}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl uppercase tracking-wide text-[#ADAAAB] md:text-2xl">
              {t.restaurant.heroSubtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                className="w-full bg-[#CA98FF] px-12 py-5 text-xl font-bold uppercase tracking-widest text-[#46007D] shadow-[0_10px_30px_rgba(202,152,255,0.2)] transition-all hover:bg-[#9c42f4] md:w-auto"
                href="#restaurant-menu"
              >
                {t.restaurant.menuCta}
              </a>
            </div>
          </div>

        </header>

        {/* Fancy Restaraunt Menu Component */}
        <RestaurantMenu lang={locale} />

        {/* Food Showcase Gallery */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 border-t border-[#484849]/15">
          <TeamShowcase
            items={foodShowcaseItems}
            eyebrow={t.restaurant.showcase.eyebrow}
            title={t.restaurant.showcase.title}
            description={t.restaurant.showcase.description}
          />
        </section>
      </main>

      <AvulusFooter lang={locale} stable />
    </>
  );
}
