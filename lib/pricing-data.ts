import type { Locale } from "@/lib/dictionaries";

export type PricingPeriod = {
  hours: number;
  price: number;
};

export type PricingPackage = {
  key: "night" | "morning" | "day" | "24h";
  price: number;
};

export type PricingSchedule = {
  day: PricingPeriod[];
  night: PricingPeriod[];
  packages?: PricingPackage[];
};

export type ZonePricing = {
  id: string;
  name: string;
  specsLine1: string;
  specsLine2: string;
  weekdays: PricingSchedule;
  weekends: PricingSchedule;
};

const pricingBase: ZonePricing[] = [
  {
    id: "private",
    name: "PRIVATE",
    specsLine1: "INTEL CORE I5-12400F | 16GB DDR5 | RTX 4060 | 360HZ 24.5\"",
    specsLine2: "PERIPHERALS: DARK PROJECT KD87A, LOGITECH G PRO X, HYPERX CLOUD II",
    weekdays: {
      day: [{ hours: 1, price: 290 }, { hours: 3, price: 730 }, { hours: 5, price: 1170 }],
      night: [{ hours: 1, price: 330 }, { hours: 3, price: 840 }, { hours: 5, price: 1340 }],
      packages: [{ key: "night", price: 2010 }, { key: "morning", price: 2830 }]
    },
    weekends: {
      day: [{ hours: 1, price: 350 }, { hours: 3, price: 870 }, { hours: 5, price: 1390 }],
      night: [{ hours: 1, price: 390 }, { hours: 3, price: 1000 }, { hours: 5, price: 1590 }],
      packages: [{ key: "night", price: 2400 }, { key: "morning", price: 3400 }]
    }
  },
  {
    id: "private-plus",
    name: "PRIVATE +",
    specsLine1: "INTEL CORE I7-13700KF | 32GB DDR5 | RTX 4070 TI | 360HZ 24.5\"",
    specsLine2: "PERIPHERALS: DARK PROJECT KD87A, LOGITECH G PRO X SUPERLIGHT, HYPERX CLOUD II",
    weekdays: {
      day: [{ hours: 1, price: 410 }, { hours: 3, price: 1020 }, { hours: 5, price: 1620 }],
      night: [{ hours: 1, price: 470 }, { hours: 3, price: 1170 }, { hours: 5, price: 1860 }],
      packages: [{ key: "night", price: 2830 }, { key: "morning", price: 3740 }]
    },
    weekends: {
      day: [{ hours: 1, price: 480 }, { hours: 3, price: 1210 }, { hours: 5, price: 1930 }],
      night: [{ hours: 1, price: 560 }, { hours: 3, price: 1390 }, { hours: 5, price: 2210 }],
      packages: [{ key: "night", price: 3410 }, { key: "morning", price: 4510 }]
    }
  },
  {
    id: "vip",
    name: "VIP",
    specsLine1: "INTEL CORE I9-14900K | 32GB DDR5 | RTX 4080 SUPER | 540HZ 24.5\"",
    specsLine2: "PERIPHERALS: WOOTING 60HE, RAZER DEATHADDER V3 PRO, LOGITECH G PRO X 2",
    weekdays: {
      day: [{ hours: 1, price: 680 }, { hours: 3, price: 1700 }, { hours: 5, price: 2720 }],
      night: [{ hours: 1, price: 800 }, { hours: 3, price: 1950 }, { hours: 5, price: 3130 }],
      packages: [{ key: "night", price: 4800 }]
    },
    weekends: {
      day: [{ hours: 1, price: 820 }, { hours: 3, price: 2050 }, { hours: 5, price: 3280 }],
      night: [{ hours: 1, price: 900 }, { hours: 3, price: 2350 }, { hours: 5, price: 3760 }],
      packages: [{ key: "night", price: 5400 }]
    }
  },
  {
    id: "stream",
    name: "STREAM",
    specsLine1: "DUAL PC SETUP: DUAL I9-14900K | 64GB DDR5 | RTX 4090 | 360HZ DUAL MONITORS",
    specsLine2: "SHURE SM7B, ELGATO STREAM DECK XL, GOXLR, SONY A7IV CAMERA",
    weekdays: {
      day: [{ hours: 1, price: 525 }, { hours: 3, price: 1315 }, { hours: 5, price: 2100 }],
      night: [{ hours: 1, price: 615 }, { hours: 3, price: 1510 }, { hours: 5, price: 2410 }],
      packages: [{ key: "night", price: 3690 }, { key: "morning", price: 4900 }]
    },
    weekends: {
      day: [{ hours: 1, price: 630 }, { hours: 3, price: 1575 }, { hours: 5, price: 2520 }],
      night: [{ hours: 1, price: 705 }, { hours: 3, price: 1810 }, { hours: 5, price: 2900 }],
      packages: [{ key: "night", price: 4230 }, { key: "morning", price: 5600 }]
    }
  },
  {
    id: "ps5",
    name: "PS5",
    specsLine1: "PLAYSTATION 5 PRO | 65\" 4K HDR 120HZ OLED TV",
    specsLine2: "4X DUALSENSE EDGE WIRELESS CONTROLLERS, LOUNGE SOFA",
    weekdays: {
      day: [{ hours: 1, price: 750 }, { hours: 3, price: 1875 }, { hours: 5, price: 2625 }],
      night: [{ hours: 1, price: 900 }, { hours: 3, price: 2250 }, { hours: 5, price: 3150 }],
      packages: [{ key: "day", price: 3200 }, { key: "night", price: 3800 }]
    },
    weekends: {
      day: [{ hours: 1, price: 950 }, { hours: 3, price: 2375 }, { hours: 5, price: 3325 }],
      night: [{ hours: 1, price: 1100 }, { hours: 3, price: 2750 }, { hours: 5, price: 3850 }],
      packages: [{ key: "day", price: 3900 }, { key: "night", price: 4400 }]
    }
  },
  {
    id: "super-vip",
    name: "SUPER VIP",
    specsLine1: "INTEL CORE I9-14900KS | 64GB DDR5 7200MHZ | RTX 4090 OC | 540HZ 24.5\"",
    specsLine2: "PRIVATE BUTLER SERVICE, EXCLUSIVE CATERING MENU, SOUND ISOLATED CHAMBER",
    weekdays: {
      day: [{ hours: 1, price: 12500 }, { hours: 3, price: 31250 }, { hours: 5, price: 43750 }],
      night: [{ hours: 1, price: 15000 }, { hours: 3, price: 37500 }, { hours: 5, price: 52500 }],
      packages: [{ key: "night", price: 82500 }, { key: "24h", price: 150000 }]
    },
    weekends: {
      day: [{ hours: 1, price: 17500 }, { hours: 3, price: 43750 }, { hours: 5, price: 61250 }],
      night: [{ hours: 1, price: 20000 }, { hours: 3, price: 50000 }, { hours: 5, price: 70000 }],
      packages: [{ key: "night", price: 110000 }, { key: "24h", price: 300000 }]
    }
  }
];

const ruLabels: Record<string, { name: string; specsLine2?: string }> = {
  private: {
    name: "ПРИВАТ",
    specsLine2: "ПЕРИФЕРИЯ: DARK PROJECT KD87A, LOGITECH G PRO X, HYPERX CLOUD II"
  },
  "private-plus": {
    name: "ПРИВАТ +",
    specsLine2: "ПЕРИФЕРИЯ: DARK PROJECT KD87A, LOGITECH G PRO X SUPERLIGHT, HYPERX CLOUD II"
  },
  vip: {
    name: "VIP",
    specsLine2: "ПЕРИФЕРИЯ: WOOTING 60HE, RAZER DEATHADDER V3 PRO, LOGITECH G PRO X 2"
  },
  stream: {
    name: "СТРИМ",
    specsLine2: "SHURE SM7B, ELGATO STREAM DECK XL, GOXLR, SONY A7IV CAMERA"
  },
  ps5: {
    name: "PS5",
    specsLine2: "4X DUALSENSE EDGE, БЕСПРОВОДНЫЕ КОНТРОЛЛЕРЫ, LOUNGE-ДИВАН"
  },
  "super-vip": {
    name: "СУПЕР VIP",
    specsLine2: "ПРИВАТНЫЙ БАТЛЕР, ЭКСКЛЮЗИВНОЕ КЕЙТЕРИНГ-МЕНЮ, ШУМОИЗОЛИРОВАННАЯ КОМНАТА"
  }
};

export function getPricingData(lang: Locale): ZonePricing[] {
  if (lang === "en") return pricingBase;

  return pricingBase.map((zone) => ({
    ...zone,
    name: ruLabels[zone.id]?.name ?? zone.name,
    specsLine1: zone.id === "stream"
      ? "ДВОЙНОЙ ПК: DUAL I9-14900K | 64GB DDR5 | RTX 4090 | 360HZ ДВА МОНИТОРА"
      : zone.specsLine1,
    specsLine2: ruLabels[zone.id]?.specsLine2 ?? zone.specsLine2
  }));
}
