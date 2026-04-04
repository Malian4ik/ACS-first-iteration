import Image from "next/image";
import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { RestaurantMenu } from "@/components/restaurant-menu";
import TeamShowcase, { type ShowcaseDish } from "@/components/ui/team-showcase";
import { restaurantPage, sharedImages } from "@/lib/stitch-site";
import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const navItems = restaurantPage.nav.map((item, i) => ({
    ...item,
    label: i === 0 ? t.nav.arena : t.nav.restaurant,
    href: `/${lang}${item.href}`
  }));

  const foodShowcaseItems: ShowcaseDish[] = [
    {
      id: "dish-1",
      name: "Void-Sea Tartare",
      category: lang === "ru" ? "Холодная подача" : "Cold Starter",
      image: restaurantPage.dishes[0].image,
      description:
        lang === "ru"
          ? "Светлая подача с акцентом на свежесть и текстуру. Карточка читабельна даже в крупном вертикальном формате."
          : "A cleaner plated composition with enough texture and contrast to hold up in a tall editorial crop.",
      accent: lang === "ru" ? "Шеф рекомендует" : "Chef Pick",
      tags: lang === "ru" ? ["Свежесть", "Фирменное"] : ["Fresh", "Signature"]
    },
    {
      id: "dish-2",
      name: "Neural Overload",
      category: lang === "ru" ? "Барная карта" : "Cocktail",
      image: restaurantPage.dishes[1].image,
      description:
        lang === "ru"
          ? "Яркий коктейль добавляет ритм подборке и хорошо работает как контраст к еде."
          : "A vivid cocktail that breaks up the food shots and gives the grid a stronger visual cadence.",
      accent: lang === "ru" ? "Авторский микс" : "House Mix",
      tags: lang === "ru" ? ["Цитрус", "Бар"] : ["Citrus", "Bar"]
    },
    {
      id: "dish-3",
      name: "Core Bypass Burger",
      category: lang === "ru" ? "Основное блюдо" : "Main Course",
      image: restaurantPage.dishes[2].image,
      description:
        lang === "ru"
          ? "Бургер раскрывается заметно лучше в крупной карточке, чем в маленьком квадрате галереи."
          : "The burger reads much better at a larger scale than it did in the old square gallery tiles.",
      accent: lang === "ru" ? "Хит меню" : "Top Seller",
      tags: lang === "ru" ? ["Сытно", "Гриль"] : ["Hearty", "Grill"]
    },
    {
      id: "dish-4",
      name: "Grid-Sync Bites",
      category: lang === "ru" ? "Стритфуд" : "Street Food",
      image: restaurantPage.dishes[3].image,
      description:
        lang === "ru"
          ? "Компактная закуска добавляет разнообразие по масштабу и не теряется при наведении."
          : "A compact snack plate that adds size variation without getting lost when the gallery shifts focus.",
      accent: lang === "ru" ? "Для компании" : "Sharing Plate",
      tags: lang === "ru" ? ["Хруст", "Ночной выбор"] : ["Crunchy", "Late Night"]
    },
    {
      id: "dish-5",
      name: lang === "ru" ? "Private Room Dining" : "Private Room Dining",
      category: lang === "ru" ? "Атмосфера" : "Ambience",
      image: sharedImages.restaurantWatermark,
      description:
        lang === "ru"
          ? "Интерьер оставлен как поддержка атмосферы, но теперь еда визуально ведет весь блок."
          : "The room still supports the mood, but food now leads the section instead of being squeezed around it.",
      accent: lang === "ru" ? "Премиум зал" : "Premium Room",
      tags: lang === "ru" ? ["Интерьер", "VIP"] : ["Interior", "VIP"]
    }
  ];

  return (
    <>
      <AvulusNav items={navItems} lang={lang} />

      <main className="content-layer bg-[#131314]">
        {/* Main Hero Wrapper - Place for future picture */}
        <header className="avulus-grid relative flex min-h-[884px] flex-col items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 z-0">
            {/* Temp hero picture injected here */}
            <Image
              alt="Restaurant Hero Placeholder"
              className="object-cover opacity-30 grayscale"
              fill
              priority
              sizes="100vw"
              src={restaurantPage.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#131314]/0 via-[#131314]/80 to-[#131314]" />
          </div>

          <div className="absolute left-10 top-24 hidden text-[10px] uppercase tracking-[0.2em] text-[#CA98FF]/40 md:block z-10">
            SECTOR_ID: ALFA_REST
            <br />
            STATUS: ACTIVE_CATERING
            <br />
            TEMP: 21.0C
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8EFF71] shadow-[0_0_8px_#8EFF71]" />
              <span className="text-sm uppercase tracking-widest text-[#8EFF71]">Gastro-Link Active</span>
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
                VIEW MENU
              </a>
            </div>
          </div>

        </header>

        {/* Fancy Restaraunt Menu Component */}
        <RestaurantMenu />

        {/* Food Showcase Gallery */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 border-t border-[#484849]/15">
          <TeamShowcase
            items={foodShowcaseItems}
            eyebrow={lang === "ru" ? "Food Showcase" : "Food Showcase"}
            title={
              lang === "ru"
                ? "ФОТО БЛЮД В БОЛЕЕ СИЛЬНОМ ФОРМАТЕ"
                : "Food Imagery In A Stronger Format"
            }
            description={
              lang === "ru"
                ? "Вместо тесной сетки блок теперь показывает блюда как редакционную подборку: крупнее, чище и заметно вкуснее визуально."
                : "Instead of cramped squares, the dishes now live in an editorial-style staggered layout with cleaner crops and better focus."
            }
          />
        </section>
      </main>

      <AvulusFooter lang={lang} stable />
    </>
  );
}
