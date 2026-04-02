import Link from "next/link";

import { AvulusFooter } from "@/components/layout/avulus-footer";
import { AvulusNav } from "@/components/layout/avulus-nav";
import { contactLinks, restaurantPage, sharedImages } from "@/lib/stitch-site";

export default function RestaurantPage() {
  const [featuredDish, sideDish, ...smallDishes] = restaurantPage.dishes;

  return (
    <>
      <div
        className="watermark-restaurant"
        style={{ backgroundImage: `url(${sharedImages.restaurantWatermark})` }}
      />
      <AvulusNav items={restaurantPage.nav} />

      <main className="content-layer bg-[#0e0e0f]">
        <section className="relative flex h-screen min-h-[884px] items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 z-0">
            <img alt="" className="h-full w-full object-cover opacity-40 grayscale" src={restaurantPage.heroImage} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0f]/0 via-[#0e0e0f]/60 to-[#0e0e0f]" />
          </div>

          <div className="relative z-10 max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse bg-[#8EFF71]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ADAAAB]">STATUS: ACTIVE COMMISSARY</span>
            </div>
            <h1 className="mb-4 text-6xl font-bold uppercase leading-none tracking-[-0.04em] text-white md:text-8xl">
              TACTICAL
              <br />
              <span className="text-[#CA98FF]">GASTRONOMY</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-light uppercase tracking-wide text-[#ADAAAB] md:text-2xl">
              Premium refuel for the digital operative. High-performance nutrients, absolute precision.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                className="w-full bg-[#CA98FF] px-10 py-4 font-bold uppercase tracking-widest text-[#46007D] transition-all duration-300 hover:bg-[#9c42f4] md:w-auto"
                href={contactLinks.reserveTable}
              >
                RESERVE A TABLE
              </Link>
              <a
                className="w-full border border-[#484849]/30 px-10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#262627] md:w-auto"
                href="#menu"
              >
                VIEW PROTOCOLS
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 hidden font-mono text-[10px] uppercase tracking-widest text-[#ADAAAB] md:block">
            LAT: 52.5200° N
            <br />
            LONG: 13.4050° E
            <br />
            ALT: 450M
          </div>
          <div className="absolute bottom-10 right-10 hidden text-right font-mono text-[10px] uppercase tracking-widest text-[#ADAAAB] md:block">
            SECTOR: 07
            <br />
            ENCRYPTION: AES-256
            <br />
            TEMP: 22.4°C
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24" id="menu">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="mb-2 text-4xl font-bold uppercase tracking-tighter text-white">SIGNATURE DISHES</h2>
              <div className="mb-6 h-1 w-24 bg-[#CA98FF]" />
              <p className="text-sm uppercase tracking-widest text-[#ADAAAB]">
                Molecular engineering meets high-density caloric intake.
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6C8F]">CATALOG_ID: REST_004</div>
          </div>

          <div className="grid grid-cols-1 gap-1 bg-[#484849]/15 p-1 md:grid-cols-12">
            <article className="group relative aspect-[16/9] overflow-hidden bg-[#19191b] md:col-span-8">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={featuredDish.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#8EFF71]">{featuredDish.label}</span>
                <h3 className="mb-2 text-3xl font-bold uppercase text-white">{featuredDish.title}</h3>
                <p className="max-w-md text-sm uppercase text-[#ADAAAB]">{featuredDish.body}</p>
              </div>
            </article>

            <article className="group relative overflow-hidden bg-[#19191b] md:col-span-4">
              <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={sideDish.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#8EFF71]">{sideDish.label}</span>
                <h3 className="mb-2 text-2xl font-bold uppercase text-white">{sideDish.title}</h3>
                <p className="text-sm uppercase text-[#ADAAAB]">{sideDish.body}</p>
              </div>
            </article>

            {smallDishes.map((dish) => (
              <article key={dish.title} className="group relative aspect-square overflow-hidden bg-[#19191b] md:col-span-4">
                <img alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src={dish.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-lg font-bold uppercase text-white">{dish.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#131314] py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
            <div className="relative">
              <img alt="" className="h-[600px] w-full object-cover grayscale" src={restaurantPage.atmosphereImage} />
            </div>

            <div>
              <h2 className="mb-3 text-4xl font-bold uppercase tracking-tighter text-white">
                INDEPENDENT
                <br />
                <span className="text-[#FF6C8F]">SECURE ENTRY</span>
              </h2>
              <div className="mb-8 h-1 w-20 bg-[#CA98FF]" />

              <div className="space-y-8">
                {restaurantPage.atmosphereBullets.map((bullet) => (
                  <div key={bullet.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="material-symbols-outlined text-3xl text-[#CA98FF]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {bullet.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold uppercase">{bullet.title}</h4>
                      <p className="text-sm uppercase leading-relaxed text-[#ADAAAB]">{bullet.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-4xl px-6 py-24" id="reserve">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-tighter">RESERVATION PROTOCOL</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-[#ADAAAB]">SECURE YOUR TERMINAL SLOT</p>
          </div>

          <form className="glass-panel space-y-8 border-l-4 border-[#CA98FF] p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">OPERATIVE ALIAS</label>
                <input className="w-full bg-[#201f21] px-4 py-4 text-white placeholder:text-[#767576]/50 focus:bg-[#262627] focus:outline-none" placeholder="GHOST_01" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">COMMUNICATION CHANNEL</label>
                <input className="w-full bg-[#201f21] px-4 py-4 text-white placeholder:text-[#767576]/50 focus:bg-[#262627] focus:outline-none" placeholder="SECURE@AVULUS.CYBER" type="email" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">MISSION DATE</label>
                <input className="w-full bg-[#201f21] px-4 py-4 text-white focus:bg-[#262627] focus:outline-none" type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">UNIT COUNT</label>
                <select className="w-full bg-[#201f21] px-4 py-4 text-white focus:bg-[#262627] focus:outline-none">
                  <option>01 UNIT</option>
                  <option>02 UNITS</option>
                  <option>04 UNITS</option>
                  <option>08 UNITS (TEAM)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">PRIORITY LEVEL</label>
                <select className="w-full bg-[#201f21] px-4 py-4 text-white focus:bg-[#262627] focus:outline-none">
                  <option>STANDARD</option>
                  <option>ELEVATED (VIP)</option>
                  <option>CRITICAL (PRIVATE VAULT)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#ADAAAB]">ADDITIONAL LOGISTICS</label>
              <textarea
                className="w-full bg-[#201f21] px-4 py-4 text-white placeholder:text-[#767576]/50 focus:bg-[#262627] focus:outline-none"
                placeholder="DIETARY RESTRICTIONS OR SECURITY REQUIREMENTS..."
                rows={4}
              />
            </div>

            <button className="w-full bg-[#CA98FF] py-5 font-bold uppercase tracking-[0.2em] text-[#46007D] transition-all duration-300 hover:bg-[#9c42f4]" type="submit">
              INITIATE RESERVATION
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-[#767576]">
              All data is processed through end-to-end encrypted servers. No logs maintained.
            </p>
          </form>
        </section>
      </main>

      <AvulusFooter stable />
    </>
  );
}
