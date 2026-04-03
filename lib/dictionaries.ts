import { sharedImages } from "./stitch-site";

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
      heroSubtitle: "CyberClub & Restaurant Experience",
      bookPc: "BOOK A PC",
      reserveTable: "RESERVE A TABLE",
      sectors: [
        {
          label: "SECTOR 01",
          title: "CYBERCLUB",
          body: "Deploy into the high-performance arena. RTX 4090 stations, 360Hz displays, and professional ergonomics for elite combat units.",
          status: "GIGABIT UPLINK ACTIVE",
          cta: "ENTER ARENA",
          href: "/cyberclub"
        },
        {
          label: "SECTOR 02",
          title: "RESTAURANT",
          body: "Refuel at the tactical core. Molecular gastronomy meets cybernetic aesthetics in a high-pressure culinary environment.",
          status: "SYSTEM RECHARGE READY",
          cta: "VIEW MENU",
          href: "/restaurant"
        }
      ],
      features: [
        {
          title: "ELITE HARDWARE",
          body: "Configured for maximum frames. No compromises. Custom liquid cooling loops and peripheral suites for competitive dominance."
        },
        {
          title: "PRIVATE SUITES",
          body: "Secure communication bunkers for team operations. Sound-isolated, dedicated uplink, and integrated catering service."
        },
        {
          title: "CYBER LOUNGE",
          body: "Calibrate your neural net with handcrafted stimulants and neon-infused cocktails in a low-light sanctuary."
        }
      ]
    },
    cyberclub: {
      specs: [
        { label: "Processor", value: "i9-14900K" },
        { label: "Graphics", value: "RTX 4090" },
        { label: "Refresh Rate", value: "360HZ" },
        { label: "Latency", value: "0.5MS" }
      ],
      zonesTitle: "CHOOSE YOUR ZONE",
      zones: [
        {
          level: "Level 1 // Solo",
          title: "TACTICAL NEST",
          body: "Dedicated solo station with prioritized bandwidth and sound-isolating hardware.",
          bullets: ["PRIVATE ACCESS TUNNEL", "ERGONOMIC XL SEATING", "PERIPHERAL CUSTOMIZATION"],
          cta: "RESERVE SLOT"
        },
        {
          level: "Level 2 // Duo",
          title: "STRIKE TEAM",
          body: "Paired stations engineered for seamless coordination and shared tactical displays.",
          bullets: ["DUAL-SYNC COMM-LINK", "SHARED COOLING GRID", "COORDINATED LIGHTING"],
          cta: "RESERVE SLOT"
        },
        {
          level: "Level 3 // Bootcamp",
          title: "WAR ROOM",
          body: "Full tactical squad command floor for training blocks, scrims, and high-pressure team prep.",
          bullets: ["5X PRO-STATION ARRAY", "REPLAY ANALYSIS HUD", "ANALYST STATION INCL."],
          cta: "RESERVE SLOT"
        }
      ],
      hardwarePanels: [
        {
          title: "PICTURE PERFECT",
          body: "Every station is equipped with 360Hz refresh rate displays, ensuring every frame is delivered with zero tear and absolute clarity."
        },
        {
          title: "COMPUTING EXCELLENCE",
          body: "Powered by i9-14900K architectures and RTX 4090s, the Arena handles 4K competitive rendering without breaking a sweat."
        },
        {
          title: "NEURAL UPLINK",
          body: "Fiber-optic backbone pushing <1ms latency. Our internal network routing is optimized for a zero-packet-loss environment."
        }
      ],
      pricing: {
        title: "PRICING PROTOCOLS",
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
      }
    },
    restaurant: {
      heroTitle: "RESTAURANT",
      heroSubtitle: "Tactical Culinary Experience",
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
      heroSubtitle: "Киберклуб и ресторанный комплекс",
      bookPc: "ЗАБРОНИРОВАТЬ ПК",
      reserveTable: "ЗАБРОНИРОВАТЬ СТОЛ",
      sectors: [
        {
          label: "СЕКТОР 01",
          title: "КИБЕРКЛУБ",
          body: "Отправьтесь на высокопроизводительную арену. Станции на базе RTX 4090, дисплеи 360Гц и профессиональная эргономика для элитных боевых единиц.",
          status: "ГИГАБИТНЫЙ КАНАЛ АКТИВЕН",
          cta: "ВОЙТИ НА АРЕНУ",
          href: "/cyberclub"
        },
        {
          label: "СЕКТОР 02",
          title: "РЕСТОРАН",
          body: "Заправка в тактическом ядре. Молекулярная гастрономия встречается с кибернетической эстетикой в условиях высокого давления.",
          status: "СИСТЕМА ПОДЗАРЯДКИ ГОТОВА",
          cta: "МЕНЮ",
          href: "/restaurant"
        }
      ],
      features: [
        {
          title: "ЭЛИТНОЕ ЖЕЛЕЗО",
          body: "Настроено на максимум FPS. Никаких компромиссов. Кастомные контуры водяного охлаждения и наборы периферии для доминирования в соревновательных играх."
        },
        {
          title: "ПРИВАТНЫЕ КОМНАТЫ",
          body: "Бункеры безопасной связи для командных операций. Звукоизоляция, выделенный канал связи и интегрированное обслуживание."
        },
        {
          title: "CYBER LOUNGE",
          body: "Калибруйте вашу нейросеть крафтовыми стимуляторами и неоновыми коктейлями в нашем полумрачном sanctuary."
        }
      ]
    },
    cyberclub: {
      specs: [
        { label: "Процессор", value: "i9-14900K" },
        { label: "Графика", value: "RTX 4090" },
        { label: "Частота кадров", value: "360HZ" },
        { label: "Задержка", value: "0.5MS" }
      ],
      zonesTitle: "ВЫБЕРИТЕ СВОЮ ЗОНУ",
      zones: [
        {
          level: "Уровень 1 // Соло",
          title: "TACTICAL NEST",
          body: "Выделенная соло станция с приоритетной пропускной способностью и звукоизолирующим оборудованием.",
          bullets: ["ПРИВАТНЫЙ ДОСТУП", "ЭРГОНОМИЧНОЕ XL КРЕСЛО", "КАСТОМИЗАЦИЯ ПЕРИФЕРИИ"],
          cta: "ЗАБРОНИРОВАТЬ"
        },
        {
          level: "Уровень 2 // Дуо",
          title: "STRIKE TEAM",
          body: "Парные станции, созданные для бесшовной координации и общих тактических дисплеех.",
          bullets: ["СИНХРОНИЗАЦИЯ СВЯЗИ", "ОБЩАЯ СЕТЬ ОХЛАЖДЕНИЯ", "КООРДИНИРОВАННЫЙ СВЕТ"],
          cta: "ЗАБРОНИРОВАТЬ"
        },
        {
          level: "Уровень 3 // Буткемп",
          title: "WAR ROOM",
          body: "Полноценный командный этаж для тренировочных блоков, скримов и напряженной подготовки команды.",
          bullets: ["5X PRO-СТАНЦИЙ", "АНАЛИТИКА REPLAY", "СТОЛ АНАЛИТИКА"],
          cta: "ЗАБРОНИРОВАТЬ"
        }
      ],
      hardwarePanels: [
        {
          title: "ИДЕАЛЬНАЯ КАРТИНКА",
          body: "Каждая станция оснащена дисплеями с частотой обновления 360Гц, что гарантирует доставку каждого кадра без задержек и размытия."
        },
        {
          title: "ВЫЧИСЛИТЕЛЬНАЯ МОЩНОСТЬ",
          body: "На базе архитектуры i9-14900K и RTX 4090 Arena справляется с 4K соревновательным рендерингом без малейших усилий."
        },
        {
          title: "НЕЙРОННАЯ СВЯЗЬ",
          body: "Волоконно-оптическая магистраль с <1мс задержки. Наша локальная сеть оптимизирована для окружения без потери пакетов."
        }
      ],
      pricing: {
        title: "ТАРИФЫ",
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
      }
    },
    restaurant: {
      heroTitle: "РЕСТОРАН",
      heroSubtitle: "Тактический Кулинарный Опыт",
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
        { title: "GRID-SYNC САШИМИ" },
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

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries["ru"];
}
