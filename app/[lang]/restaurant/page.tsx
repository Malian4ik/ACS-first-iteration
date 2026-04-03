import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { RestaurantMenu } from "@/components/restaurant-menu";
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

  return (
    <>
      <AvulusNav items={navItems} lang={lang} />

      <main className="content-layer bg-[#131314]">
        {/* Main Hero Wrapper - Place for future picture */}
        <header className="avulus-grid relative flex min-h-[884px] flex-col items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 z-0">
            {/* Temp hero picture injected here */}
            <img 
              alt="Restaurant Hero Placeholder" 
              className="h-full w-full object-cover opacity-30 grayscale" 
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
              {t.restaurant.heroTitle.split(' ').map((word, i, arr) => 
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

        {/* Picture Showcase Gallery */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 border-t border-[#484849]/15">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">
              <span className="text-[#CA98FF]">ГАЛЕРЕЯ</span> АТМОСФЕРЫ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="group relative aspect-square overflow-hidden bg-[#19191b] rounded-xl">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={restaurantPage.atmosphereImage} />
              <div className="absolute inset-0 bg-[#CA98FF]/0 transition-all duration-300 group-hover:bg-[#CA98FF]/10 mix-blend-overlay" />
            </div>
            
            <div className="group relative aspect-square md:col-span-2 overflow-hidden bg-[#19191b] rounded-xl">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={restaurantPage.dishes[0].image} />
              <div className="absolute inset-0 bg-[#CA98FF]/0 transition-all duration-300 group-hover:bg-[#CA98FF]/10 mix-blend-overlay" />
            </div>

            <div className="group relative aspect-square overflow-hidden bg-[#19191b] rounded-xl">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={sharedImages.restaurantWatermark} />
              <div className="absolute inset-0 bg-[#CA98FF]/0 transition-all duration-300 group-hover:bg-[#CA98FF]/10 mix-blend-overlay" />
            </div>

            <div className="group relative aspect-square md:col-span-2 xl:col-span-3 overflow-hidden bg-[#19191b] rounded-xl">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={restaurantPage.dishes[1].image} />
              <div className="absolute inset-0 bg-[#CA98FF]/0 transition-all duration-300 group-hover:bg-[#CA98FF]/10 mix-blend-overlay" />
            </div>

            <div className="group relative aspect-square overflow-hidden bg-[#19191b] rounded-xl">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={restaurantPage.dishes[2].image} />
              <div className="absolute inset-0 bg-[#CA98FF]/0 transition-all duration-300 group-hover:bg-[#CA98FF]/10 mix-blend-overlay" />
            </div>
          </div>
        </section>
      </main>

      <AvulusFooter lang={lang} stable />
    </>
  );
}
