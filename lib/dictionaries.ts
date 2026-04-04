export type Locale = "en" | "ru";

export const dictionaries = {
  en: {
    nav: {
      arena: "ARENA",
      restaurant: "RESTAURANT"
    },
    meta: {
      title: "Avulus Cyber Space",
      description: "Stitch-based frontend conversion for Avulus Cyber Space, CyberClub, and Restaurant."
    },
    home: {
      heroTitle: "AVULUS",
      heroTitleSpan: "CYBER SPACE",
      heroSubtitle: "CyberClub, PS5 Pro, Stream Room & Restaurant Experience",
      heroMetaTop: "SYS_READY // LOC: 55.7558° N, 37.6173° E",
      heroMetaBottom: "LATENCY: 0.04MS // STATUS: ONLINE",
      bookPc: "BOOK A PC",
      reserveTable: "RESERVE A TABLE",
      sectors: [
        {
          label: "SECTOR 01",
          title: "CYBERCLUB",
          body: "Choose from PRIVATE, VIP, STREAM, PS5 Pro, and SUPER VIP setups with hardware ranging from RTX 4060 to RTX 4090.",
          status: "6 GAMING FORMATS READY",
          cta: "ENTER ARENA",
          href: "/cyberclub"
        },
        {
          label: "SECTOR 02",
          title: "RESTAURANT",
          body: "Signature dishes, cocktails, and neon lounge seating turn the restaurant into a full evening destination, not just a quick stop.",
          status: "KITCHEN & BAR ACTIVE",
          cta: "VIEW MENU",
          href: "/restaurant"
        }
      ],
      features: [
        {
          title: "ELITE HARDWARE",
          body: "The lineup spans Intel i5 to i9 systems, RTX 4060 through RTX 4090 graphics, and high-refresh displays built for competitive play."
        },
        {
          title: "PRIVATE SUITES",
          body: "From PRIVATE and PRIVATE+ to SUPER VIP, the club offers quieter rooms, upgraded comfort, and premium service options for longer sessions."
        },
        {
          title: "CYBER LOUNGE",
          body: "The space pairs gaming with a full restaurant and cocktail bar, so guests can move from sessions to dining without leaving the venue."
        }
      ]
    },
    cyberclub: {
      heroMeta: {
        coordX: "COORD_X: 47.1293",
        coordY: "COORD_Y: 28.5901",
        status: "STATUS: ACTIVE_COMMAND"
      },
      heroStatus: "Operational Readiness 100%",
      heroTitleLine1: "THE COMMAND",
      heroTitleLine2: "CENTER",
      heroSubtitle: "Six gaming formats from PRIVATE to SUPER VIP, plus STREAM and PS5 Pro rooms.",
      viewSpecs: "VIEW SPECS",
      specs: [
        { label: "Configurations", value: "PRIVATE -> SUPER VIP" },
        { label: "Graphics", value: "RTX 4060 -> RTX 4090" },
        { label: "Displays", value: "360HZ / 540HZ / 4K 120HZ" },
        { label: "Formats", value: "PC, STREAM, PS5 PRO" }
      ],
      zonesTitle: "CHOOSE YOUR ZONE",
      zonesSubtitle: "Select your operational environment",
      zonesMeta: "ZONE_TYPE // AUTH_REQ",
      zones: [
        {
          level: "Level 1 // Solo",
          title: "TACTICAL NEST",
          body: "PRIVATE and PRIVATE+ rooms focus on solo play with fast panels, strong ergonomics, and quieter setups for long sessions.",
          bullets: ["RTX 4060 / 4070 TI OPTIONS", "360HZ 24.5\" PANELS", "LOW-NOISE PRIVATE SETUP"],
          cta: "RESERVE SLOT"
        },
        {
          level: "Level 2 // Duo",
          title: "STRIKE TEAM",
          body: "VIP and STREAM formats are built for coordinated play, premium peripherals, and creator-ready sessions with more headroom.",
          bullets: ["RTX 4080 SUPER / RTX 4090", "DUAL-PC STREAM OPTION", "PREMIUM MICE, KEYBOARDS, AUDIO"],
          cta: "RESERVE SLOT"
        },
        {
          level: "Level 3 // Bootcamp",
          title: "WAR ROOM",
          body: "SUPER VIP and console options expand the arena into a premium group space with private service, PS5 Pro play, and event-friendly setups.",
          bullets: ["SUPER VIP SERVICE", "PS5 PRO ON 65\" OLED", "PRIVATE ROOM COMFORT"],
          cta: "RESERVE SLOT"
        }
      ],
      hardwarePanels: [
        {
          title: "DISPLAY RANGE",
          body: "The club mixes 360Hz and 540Hz competitive monitors with a 65-inch 4K 120Hz OLED setup for the PS5 Pro room."
        },
        {
          title: "MULTI-TIER HARDWARE",
          body: "Hardware scales from i5-12400F and RTX 4060 up to i9-14900KS systems with RTX 4090 graphics in the highest tier."
        },
        {
          title: "SESSION FORMATS",
          body: "Guests can book PRIVATE, PRIVATE+, VIP, STREAM, PS5 Pro, and SUPER VIP formats depending on performance needs and budget."
        }
      ],
      pricing: {
        title: "PRICING PROTOCOLS",
        subtitle: "Operational Rate Parameters",
        weekdays: "WEEKDAYS",
        weekends: "WEEKENDS",
        day: "DAY",
        night: "NIGHT",
        hour1: "1 HOUR",
        hour3: "3 HOURS",
        hour5: "5 HOURS",
        packages: {
          night: "NIGHT PKG",
          morning: "MORNING PKG",
          day: "DAY PKG",
          "24h": "24H PKG"
        },
        perHour: "₽",
        timeRangeDay: "08:00 - 20:00",
        timeRangeNight: "20:00 - 08:00"
      },
      hardwareTitleLine1: "HARDWARE",
      hardwareTitleLine2: "OVERRIDE",
      diagnostics: "Live Diagnostics",
      cooling: "Cooling: 24°C",
      hardwareIdent: "HW_IDENT: XJ-992-ARENA",
      firmware: "FIRMWARE: V2.4.9 ACTIVE",
      slotsStatus: "Status: Slots Available",
      missionReady: "MISSION READY"
    },
    restaurant: {
      seo: {
        title: "Avulus Restaurant | Cyber Restaurant & Menu in Moscow",
        description: "Explore the Avulus restaurant menu in Moscow: signature dishes, cocktails, premium dining atmosphere, and private table reservations."
      },
      heroTitle: "RESTAURANT",
      heroSubtitle: "Tactical Culinary Experience",
      heroStatus: "Gastro-Link Active",
      heroMeta: {
        sector: "SECTOR_ID: ALFA_REST",
        status: "STATUS: ACTIVE_CATERING",
        temperature: "TEMP: 21.0C"
      },
      menuCta: "VIEW MENU",
      menu: {
        titleAccent: "MENU",
        waiterCall: "WAITER CALL"
      },
      showcase: {
        eyebrow: "Food Showcase",
        title: "Food Imagery In A Stronger Format",
        description: "Instead of cramped squares, the dishes now live in an editorial-style staggered layout with cleaner crops and better focus."
      },
      dishes: [
        {
          label: "DISH // 01",
          title: "VOID-SEA TARTARE",
          body: "Cured atlantic salmon, charcoal-infused oil, wasabi foam, compressed cucumber crystals."
        },
        {
          label: "ELIXIR // 09",
          title: "NEURAL OVERLOAD",
          body: "Gin, elderflower, electric bitters, bioluminescent citrus."
        },
        { title: "CORE BYPASS" },
        { title: "GRID-SYNC SASHIMI" },
        { title: "OPERATIVE RATION X" }
      ],
      atmosphereBullets: [
        {
          title: "BIOMETRIC ACCESS",
          body: "Controlled entry sequence with retinal-grade check-in moments that reinforce the secure, premium mood of the Stitch screen."
        },
        {
          title: "ABSOLUTE DISCRETION",
          body: "Acoustic dampening fields and private pod logic support both elevated dining and confidential tactical meetings."
        },
        {
          title: "PROTOCOL ZERO",
          body: "High-priority table flow, private room handling, and clean reservation routing for VIP guests."
        }
      ],
      form: {
        title: "RESERVATION PROTOCOL",
        subtitle: "SECURE YOUR TERMINAL SLOT",
        alias: "OPERATIVE ALIAS",
        channel: "COMMUNICATION CHANNEL",
        date: "MISSION DATE",
        units: "UNIT COUNT",
        priority: "PRIORITY LEVEL",
        logistics: "ADDITIONAL LOGISTICS",
        submit: "INITIATE RESERVATION",
        disclaimer: "All data is processed through end-to-end encrypted servers. No logs maintained."
      }
    },
    contacts: {
      badge: "CONTACTS",
      title1: "Visit",
      title2: "ACS",
      addressLabel: "ADDRESS",
      addressText: "Moscow, Serebryanicheskiy per., 12s1",
      hoursLabel: "WORKING HOURS",
      hoursText: "Daily, 24/7",
      parkingLabel: "PARKING",
      parkingText: "Free parking nearby",
      telegramBtn: "Message on Telegram",
      callBtn: "Call: +74959212221",
      mapHint: "Check the exact address when booking"
    },
    footer: {
      copyright: "© 2024 AVULUS CYBER SPACE. ALL SYSTEMS ACTIVE.",
      privacy: "PRIVACY POLICY",
      terms: "TERMS OF SERVICE",
      cookies: "COOKIE POLICY",
      stable: "SERVICE STABLE"
    }
  },
  ru: {
    nav: {
      arena: "АРЕНА",
      restaurant: "РЕСТОРАН"
    },
    meta: {
      title: "Avulus Cyber Space | Компьютерный клуб в Москве",
      description: "Премиальный киберклуб и ресторан в Москве. Мощные ПК с RTX 4090, мониторы 360Hz, атмосфера киберпанка."
    },
    home: {
      heroTitle: "AVULUS",
      heroTitleSpan: "CYBER SPACE",
      heroSubtitle: "Киберклуб, PS5 Pro, стрим-комната и ресторан в одном пространстве",
      heroMetaTop: "СИСТЕМА ГОТОВА // ЛОКАЦИЯ: 55.7558° N, 37.6173° E",
      heroMetaBottom: "ЗАДЕРЖКА: 0.04МС // СТАТУС: ОНЛАЙН",
      bookPc: "ЗАБРОНИРОВАТЬ ПК",
      reserveTable: "ЗАБРОНИРОВАТЬ СТОЛ",
      sectors: [
        {
          label: "СЕКТОР 01",
          title: "КИБЕРКЛУБ",
          body: "Выбирайте между форматами PRIVATE, VIP, STREAM, PS5 Pro и SUPER VIP с конфигурациями от RTX 4060 до RTX 4090.",
          status: "6 ИГРОВЫХ ФОРМАТОВ ГОТОВЫ",
          cta: "ВОЙТИ НА АРЕНУ",
          href: "/cyberclub"
        },
        {
          label: "СЕКТОР 02",
          title: "РЕСТОРАН",
          body: "Авторские блюда, коктейли и неоновый интерьер превращают ресторан в полноценное вечернее пространство, а не просто зону перекуса.",
          status: "КУХНЯ И БАР АКТИВНЫ",
          cta: "МЕНЮ",
          href: "/restaurant"
        }
      ],
      features: [
        {
          title: "ЭЛИТНОЕ ЖЕЛЕЗО",
          body: "Линейка охватывает системы от Intel i5 до i9, графику от RTX 4060 до RTX 4090 и быстрые дисплеи для соревновательной игры."
        },
        {
          title: "ПРИВАТНЫЕ КОМНАТЫ",
          body: "От PRIVATE и PRIVATE+ до SUPER VIP: больше уединения, комфорта и расширенного сервиса для длинных игровых сессий."
        },
        {
          title: "КИБЕР ЛАУНЖ",
          body: "Пространство объединяет игровой клуб с рестораном и коктейльным баром, чтобы гости могли отдыхать и ужинать прямо на месте."
        }
      ]
    },
    cyberclub: {
      heroMeta: {
        coordX: "КООРД_X: 47.1293",
        coordY: "КООРД_Y: 28.5901",
        status: "СТАТУС: КОМАНДНЫЙ ЦЕНТР АКТИВЕН"
      },
      heroStatus: "Боевая готовность 100%",
      heroTitleLine1: "КОМАНДНЫЙ",
      heroTitleLine2: "ЦЕНТР",
      heroSubtitle: "Шесть игровых форматов: от PRIVATE до SUPER VIP, включая STREAM и PS5 Pro.",
      viewSpecs: "СМОТРЕТЬ ХАРАКТЕРИСТИКИ",
      specs: [
        { label: "Конфигурации", value: "PRIVATE -> SUPER VIP" },
        { label: "Графика", value: "RTX 4060 -> RTX 4090" },
        { label: "Дисплеи", value: "360HZ / 540HZ / 4K 120HZ" },
        { label: "Форматы", value: "PC, STREAM, PS5 PRO" }
      ],
      zonesTitle: "ВЫБЕРИТЕ СВОЮ ЗОНУ",
      zonesSubtitle: "Выберите игровой формат и конфигурацию",
      zonesMeta: "ТИП ЗОНЫ // ДОСТУП",
      zones: [
        {
          level: "Уровень 1 // Соло",
          title: "ТАКТИЧЕСКОЕ ГНЕЗДО",
          body: "Форматы PRIVATE и PRIVATE+ рассчитаны на одиночную игру: быстрые панели, удобная посадка и более тихая конфигурация.",
          bullets: ["ВАРИАНТЫ RTX 4060 / 4070 TI", "360HZ МОНИТОРЫ 24.5\"", "ТИХАЯ ПРИВАТНАЯ ПОСАДКА"],
          cta: "ЗАБРОНИРОВАТЬ"
        },
        {
          level: "Уровень 2 // Дуо",
          title: "УДАРНАЯ КОМАНДА",
          body: "VIP и STREAM форматы подходят для координации, премиальной периферии и контент-сессий с большим запасом мощности.",
          bullets: ["RTX 4080 SUPER / RTX 4090", "ФОРМАТ С ДВУМЯ ПК ДЛЯ СТРИМА", "ПРЕМИАЛЬНАЯ ПЕРИФЕРИЯ И АУДИО"],
          cta: "ЗАБРОНИРОВАТЬ"
        },
        {
          level: "Уровень 3 // Буткемп",
          title: "ВОЕННАЯ КОМНАТА",
          body: "SUPER VIP и консольный формат дополняют арену приватным сервисом, PS5 Pro и удобным пространством для компании.",
          bullets: ["СЕРВИС SUPER VIP", "PS5 PRO НА 65\" OLED", "КОМФОРТ ПРИВАТНОЙ КОМНАТЫ"],
          cta: "ЗАБРОНИРОВАТЬ"
        }
      ],
      hardwarePanels: [
        {
          title: "ДИАПАЗОН ДИСПЛЕЕВ",
          body: "В клубе сочетаются соревновательные мониторы 360Hz и 540Hz, а также 65-дюймовый 4K 120Hz OLED в комнате с PS5 Pro."
        },
        {
          title: "МНОГОУРОВНЕВОЕ ЖЕЛЕЗО",
          body: "Конфигурации масштабируются от i5-12400F и RTX 4060 до i9-14900KS и RTX 4090 в старших категориях."
        },
        {
          title: "ФОРМАТЫ БРОНИРОВАНИЯ",
          body: "Гости могут выбрать PRIVATE, PRIVATE+, VIP, STREAM, PS5 Pro и SUPER VIP в зависимости от бюджета и сценария игры."
        }
      ],
      pricing: {
        title: "ТАРИФЫ",
        subtitle: "Параметры игровых тарифов",
        weekdays: "БУДНИ",
        weekends: "ВЫХОДНЫЕ",
        day: "ДЕНЬ",
        night: "ВЕЧЕР / НОЧЬ",
        hour1: "1 ЧАС",
        hour3: "3 ЧАСА",
        hour5: "5 ЧАСОВ",
        packages: {
          night: "ПАКЕТ НОЧЬ",
          morning: "ПАКЕТ ДО ОБЕДА",
          day: "ПАКЕТ ДЕНЬ",
          "24h": "ПАКЕТ СУТКИ"
        },
        perHour: "₽",
        timeRangeDay: "08:00 - 20:00",
        timeRangeNight: "20:00 - 08:00"
      },
      hardwareTitleLine1: "ЖЕЛЕЗО",
      hardwareTitleLine2: "БЕЗ КОМПРОМИССОВ",
      diagnostics: "Живая диагностика",
      cooling: "Охлаждение: 24°C",
      hardwareIdent: "HW_IDENT: XJ-992-ARENA",
      firmware: "ПРОШИВКА: V2.4.9 АКТИВНА",
      slotsStatus: "Статус: свободные места",
      missionReady: "ГОТОВО К ИГРЕ"
    },
    restaurant: {
      seo: {
        title: "Ресторан Avulus в Москве | Меню, блюда и бронирование стола",
        description: "Ресторан Avulus в Москве: авторские блюда, коктейли, атмосферный интерьер и удобное бронирование стола."
      },
      heroTitle: "РЕСТОРАН",
      heroSubtitle: "Авторская кухня и коктейли в Москве",
      heroStatus: "Гастро-режим активен",
      heroMeta: {
        sector: "СЕКТОР: РЕСТОРАН AVULUS",
        status: "СТАТУС: ПРИЕМ ГОСТЕЙ АКТИВЕН",
        temperature: "ТЕМПЕРАТУРА ПОДАЧИ: 21°C"
      },
      menuCta: "СМОТРЕТЬ МЕНЮ",
      menu: {
        titleAccent: "МЕНЮ",
        waiterCall: "ВЫЗОВ ОФИЦИАНТА"
      },
      showcase: {
        eyebrow: "Галерея блюд",
        title: "ФОТО БЛЮД В БОЛЕЕ ВЫИГРЫШНОМ ФОРМАТЕ",
        description: "Вместо тесной сетки блок теперь показывает блюда как редакционную подборку: крупнее, чище и заметно аппетитнее визуально."
      },
      dishes: [
        {
          label: "БЛЮДО // 01",
          title: "ТАРТАР ИЗ ПУСТОТЫ",
          body: "Слабосоленый атлантический лосось, масло с углем, пена из васаби, кристаллы из огурца."
        },
        {
          label: "ЭЛИКСИР // 09",
          title: "НЕЙРОННАЯ ПЕРЕГРУЗКА",
          body: "Джин, цветы бузины, электрические биттеры, биолюминесцентный цитрус."
        },
        { title: "ОБХОД ЯДРА" },
        { title: "СИНХРО-САШИМИ" },
        { title: "СУХПАЙ ОПЕРАТИВНИКА" }
      ],
      atmosphereBullets: [
        {
          title: "БИОМЕТРИЧЕСКИЙ ДОСТУП",
          body: "Контролируемая последовательность входа с моментами проверки по сетчатке глаза, подчеркивающими премиальность клуба."
        },
        {
          title: "АБСОЛЮТНАЯ ПРИВАТНОСТЬ",
          body: "Поля акустического гашения и логика приватных капсул поддерживают как изысканный ужин, так и конфиденциальные встречи."
        },
        {
          title: "КАНАЛ НОЛЬ",
          body: "Приоритетный поток столов, обслуживание приватных комнат и чистая маршрутизация резерваций для VIP гостей."
        }
      ],
      form: {
        title: "ПРОТОКОЛ БРОНИРОВАНИЯ",
        subtitle: "ЗАБРОНИРУЙТЕ СТОЛ",
        alias: "ИМЯ ОПЕРАТИВНИКА",
        channel: "КАНАЛ СВЯЗИ",
        date: "ДАТА",
        units: "КОЛИЧЕСТВО ГОСТЕЙ",
        priority: "УРОВЕНЬ ПРИОРИТЕТА",
        logistics: "ДОПОЛНИТЕЛЬНЫЕ ДЕТАЛИ",
        submit: "ПОДТВЕРДИТЬ БРОНИРОВАНИЕ",
        disclaimer: "Все данные передаются по зашифрованному каналу. Логи не ведутся."
      }
    },
    contacts: {
      badge: "КОНТАКТЫ",
      title1: "Приходите",
      title2: "в ACS",
      addressLabel: "АДРЕС",
      addressText: "Москва, Серебрянический пер., 12с1",
      hoursLabel: "ЧАСЫ РАБОТЫ",
      hoursText: "Ежедневно, 24/7",
      parkingLabel: "ПАРКОВКА",
      parkingText: "Бесплатная парковка рядом",
      telegramBtn: "Написать в Telegram",
      callBtn: "Позвонить: +7 495 921-22-21",
      mapHint: "Уточните точный адрес при бронировании"
    },
    footer: {
      copyright: "© 2024 AVULUS CYBER SPACE. ВСЕ СИСТЕМЫ АКТИВНЫ.",
      privacy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
      terms: "ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
      cookies: "ПОЛИТИКА СОКИ",
      stable: "СЕРВЕР СТАБИЛЕН"
    }
  }
} as const;

export function getDictionary(locale: string) {
  return dictionaries[locale as Locale] || dictionaries["ru"];
}
