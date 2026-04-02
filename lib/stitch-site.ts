export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const contactLinks = {
  bookPc: "#book-pc",
  reserveTable: "#reserve",
  privacy: "#",
  terms: "#",
  cookies: "#"
};

export const sharedImages = {
  logo: "https://lh3.googleusercontent.com/aida/ADBb0uiRZ6PWqxuxuFUM_6KmDhg6YnEI4T2U12PXAd7mkTvw29eRqSYvu1SP8UoX0wJ9t5AI4GqZMGTE1Wny-MHfydMNCWhHvS-ZKzyUT6T9m__JmMbKk3BSP_vXDwDw3td6cNRSNbcrY3Zno5e6-8vq6Nh6_STFdO0-W58Zj_c8OH7hjK3KCz_bfv1KBXcK0addzwh7TOZk5SOCmiFEEGGum1861OKkjfZ0WR7P7EMwI5uRJwPIPoTgzUcfmC4iFbA19uEIaFA1z2HX5Tg",
  homeWatermark:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD5KzORD40_jJQY0QbYwFJQB7hpFNN3qpcWjGO4ObRan4Jy-OIRrHURg8iRcZPXfIW5FuRpd7c3g6s4d8rPRZL149zGSYY3tTaF89LGrb_3zc0ETvkRIUixGdoNyYISpoMpXr-GxNIN4C_VshBK6BOvLf7sZk8L7UlSyctbhXXHE6mapiRO2zhbINFi3TMEH3qKCKSn4CeJlAqqVI-cOhBJgnU52XFjtLiSzkJVSGn3URAfaXpohUGmcnaqiqwhEaOUFXmT34-htS",
  arenaWatermark:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBLW8NBP2STZUJrulO1NhmpQ8q_8gC0u8jKjj3kuMWb6_OHTgLBOb6wYxio99-jhifQhjbVl68Ux34RRPbCR1YHpDEf6BgxWo-fRs8KfPl21vEAZrRk_3Cth1mg5PgOQZsq-rgsRNAkAz2wOrytW2FrYdeRCyqlC22XETfFiY6SdKzIM0qz1QoddYK35qiAgFA96FSpD4Jf-XA3_DXYnL9uZ83s-LTzU_si__1i7vk5AzCuBmyulsXsUTuir0-9UEGy_mQJaMgLk20m",
  restaurantWatermark:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fFsQhyuNww8WKbSENw7m7jtGQjfJ-NkZoa-bN4aRKecPyAmtznBaxmVpeWOyp4xTql3qePAgkul8RyHm0zM-TSXAiAiHO_gt8PUCY5vmtEnInjoYue-nqViDGJVELNKns3K7t_fZ2owsq2ezM9Otr83Ofc2Gd1xmKIBw88wdAN6uxZzJLyQZZJZdKzd1N3KPlt--1SmNMChG3uLOjbHavbGLOGDSUtGM0kMIE2Xxv4t8DPADlxyWBuwNSpqhCm3Z8Nu_70tN13PI"
};

export const homePage = {
  nav: [
    { label: "ARENA", href: "/cyberclub" },
    { label: "RESTAURANT", href: "/restaurant" }
  ] satisfies NavItem[],
  sectors: [
    {
      label: "SECTOR 01",
      title: "CYBERCLUB",
      body:
        "Deploy into the high-performance arena. RTX 4090 stations, 360Hz displays, and professional ergonomics for elite combat units.",
      status: "GIGABIT UPLINK ACTIVE",
      cta: "ENTER ARENA",
      href: "/cyberclub",
      accent: "bg-[#CA98FF] text-[#46007D]",
      icon: "sensors",
      textColor: "text-primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBhY8LGvoejraQRVMUbYcLjDhJPVKuRA90ayKv7djaAJZKCemHJHVwGesriyZ0sa-SK7wX00M7JHfudawxHlvqXcV31aBxcwx43M4bmCdpTUdoO4_p52BeW6klllDVcySgjM698m9c0_jeRdFnb5us-gx6YtTnbSMduPhsX7iqFxKJkIi7ttdC3aj3tEP3khfr9fC8VbceCiMv1QYYOrYJuDLrUjH_eSp2lojcOJGEAe_1dqm-WsuL09qS0JzbTcp76Pdo9mj5o3c5h"
    },
    {
      label: "SECTOR 02",
      title: "RESTAURANT",
      body:
        "Refuel at the tactical core. Molecular gastronomy meets cybernetic aesthetics in a high-pressure culinary environment.",
      status: "SYSTEM RECHARGE READY",
      cta: "VIEW MENU",
      href: "/restaurant",
      accent: "bg-[#FF6C8F] text-[#480019]",
      icon: "restaurant",
      textColor: "text-secondary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDxf35KkdxBA2RUQz_knKVeOezIbXLLUIpE4miB06gY_Ixf2hfDcdvBC22vGDimab8T2PCXLlrY4PMOK6v_KR7yAORJIQUyjj8WIENGaDip1ZQ5lIX5o9wjmIgq6z55a9tee7zhGTM4MvDBuxU3sjPVNcOJP5w5wTZCl88iJJsBSCOZJ5uzMxCDnIQOBf8v1XSIV7J03MxKTAQ2sWNY_r7PvWar87CpoxQyOUQ6_kbw8Q2KT8QG1hHwvv2lrwsbDsrk9xaQXtXh6FK2"
    }
  ],
  features: [
    {
      title: "ELITE HARDWARE",
      body:
        "Configured for maximum frames. No compromises. Custom liquid cooling loops and peripheral suites for competitive dominance.",
      accent: "border-primary"
    },
    {
      title: "PRIVATE SUITES",
      body:
        "Secure communication bunkers for team operations. Sound-isolated, dedicated uplink, and integrated catering service.",
      accent: "border-secondary"
    },
    {
      title: "CYBER LOUNGE",
      body:
        "Calibrate your neural net with handcrafted stimulants and neon-infused cocktails in a low-light sanctuary.",
      accent: "border-tertiary"
    }
  ]
};

export const cyberclubPage = {
  nav: [
    { label: "ARENA", href: "/cyberclub", active: true },
    { label: "RESTAURANT", href: "/restaurant" }
  ] satisfies NavItem[],
  specs: [
    { label: "Processor", value: "i9-14900K" },
    { label: "Graphics", value: "RTX 4090" },
    { label: "Refresh Rate", value: "360HZ" },
    { label: "Latency", value: "0.5MS" }
  ],
  zones: [
    {
      level: "Level 1 // Solo",
      title: "TACTICAL NEST",
      body: "Dedicated solo station with prioritized bandwidth and sound-isolating hardware.",
      bullets: ["PRIVATE ACCESS TUNNEL", "ERGONOMIC XL SEATING", "PERIPHERAL CUSTOMIZATION"],
      cta: "RESERVE SLOT",
      accent: "text-secondary border-primary text-primary hover:bg-primary hover:text-on-primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBjedVi-Ue_RTA4OSLwumpgLodrOcyWA9rLnkpSvc4fvMy3XrENl6z4W98vW2QpDSKCVpgqKCZSloxXcowtAFGeiMxmDe7mVwdXNfRV4sz4oG0qRSBiBzYZ3kaYbb4CdYhh7ASCF9U4x4SEut8RhWtPOzC8FrwTXIBYtYVVBN-gri-TrBm5qzI08Dtmf8kxEGMoOmr-3sk5pD4fFJN-jvPlOued31Y6IhPnFFlanuBgyF4Mt1PgxFG6Yp6GoJOeuQIfuk0s7fq8vQRV"
    },
    {
      level: "Level 2 // Duo",
      title: "STRIKE TEAM",
      body: "Paired stations engineered for seamless coordination and shared tactical displays.",
      bullets: ["DUAL-SYNC COMM-LINK", "SHARED COOLING GRID", "COORDINATED LIGHTING"],
      cta: "RESERVE SLOT",
      accent: "text-primary bg-primary text-on-primary hover:bg-primary-dim",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSkb-tLbyvnMWF5hk-slS3kylOLAyGb7X0oTeXiDZRN-WKSmCivdhtxEoW0TXU1MkRENwXN1XxT6zqzNXD2V9epW-FlCBvoGydWXHQNegGnJU1BUCY6YfF22vP3BK-aksfc4fb3CFnxZArZO3H7aul7ckeZoij6DR-FPSE14KlbDSZ1JRb2M_dScCks7Jbr8JwNKYNNlUDJe9iu2sxFInZFeMJKcF5j0Kod1At3ArUVd9FGiUNBYFk6bWC5DlDiT174kTLMOvYKGqU"
    },
    {
      level: "Level 3 // Bootcamp",
      title: "WAR ROOM",
      body: "Full tactical squad command floor for training blocks, scrims, and high-pressure team prep.",
      bullets: ["5X PRO-STATION ARRAY", "REPLAY ANALYSIS HUD", "ANALYST STATION INCL."],
      cta: "RESERVE SLOT",
      accent: "text-tertiary border-tertiary text-tertiary hover:bg-tertiary hover:text-[#0d6100]",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCr0rckYagUm3t7GeSzwShasVkLB5EYjkLgGt2kt29Huwi82iQx6GvAEEf2tCR4ASr5SA_9_6qgWpxosep0Ou0Grj9TYMsmhFk3YU_ygmhJvpDatRdLZ3RIzCNzSTDJOjNY6oq3nvgC-F7448ozZORK6tbsiMX2kcv0Uto_PRdBuCZpHUrVXOyZfZk_IPwFOd87Y4Od2ZnepHaq30VLi40WTrCfUjJJBWLWahZBCeR6X96Z6l1MNKm9GpYLzqviNun19wjOLP_PRaV0"
    }
  ],
  hardwarePanels: [
    {
      title: "DISPLAY PRECISION",
      body:
        "Every station is equipped with 360Hz refresh rate panels, ensuring that every frame of data is delivered with zero ghosting or delay.",
      accent: "border-primary text-primary"
    },
    {
      title: "PROCESSING POWER",
      body:
        "Powered by i9-14900K and RTX 4090 architecture, the Arena handles 4K competitive rendering without breaking a sweat.",
      accent: "border-secondary text-secondary"
    },
    {
      title: "NEURAL CONNECTIVITY",
      body:
        "Fiber-optic backbone with <1ms jitter. Our local network is optimized for zero-packet-loss environments.",
      accent: "border-tertiary text-tertiary"
    }
  ],
  hardwareImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvu5aE3DBskXk1ItJuBmK_-ysymI4WPoswptPLDByx0JJbRoG5o6NNnCykivRsPrRWTPQ_NfmWiEpA0eF2bGq6wD3boyl7VkgH56Bgj6K9IR165p4sECHNVMuL_XbJl9XWRKviPnKSx7gicJVdWGUL7WFX7MfxwoqKdHQf7DsxFD6LvAvf7BZTZ7BEKIVDGPlaY9kdXRFazbswlk4nk_8VkkBWr3qrANkj3wkCtXoIDp0n5GUE3T8DzliM51G34jE-5sk8OjnPMMBj"
};

export const restaurantPage = {
  nav: [
    { label: "ARENA", href: "/cyberclub" },
    { label: "RESTAURANT", href: "/restaurant", active: true }
  ] satisfies NavItem[],
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpiKBsEN08HonsbZ4mKyMIdUVA_8Ei5ILJxoosdoheF0qM7WERu47vj35MPbcUhgCjFwD6LazBTtLCXDPImaIUUX_2NWXJjOVhbY6CGMVKidl1qYbGMtsj1JBAeiSh0peQeFfdDVeaJ9JgCAH0WVwH25Y02rRPRWfQb6MRhMp6sS6dsaD4MR2F12cQjtFjy8WrOv-5dLh_d3aptSP_W2PPdYPw5K8fVgeQy1hOlU0KXymWWBQsr37E5gsOyV4x79XqN33BlN2RsWXE",
  dishes: [
    {
      label: "DISH // 01",
      title: "VOID-SEA TARTARE",
      body:
        "Cured atlantic salmon, charcoal-infused oil, wasabi foam, compressed cucumber crystals.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBxeF2IXrNr53O8WLtKtTytxWC_2WBxIkGlNQB8h1fqfxxxt9VkelGONoe6VKoayuZADdiZe3DM7NA-5W8OMdM8VlLuWCcom8MnahqBKVxt0XqjDW8UXbhL4uqjtllBSX3pQpgzMr8CopkWZHTNo1Y0GvABiZ8a06wbMx-Kv7S9M-cvB_ZOzRmbaBkpLH2AqgdsOCOcaI75Js4ATbaghd3R2nozkPqiq2hPCoA91hMteXUYAv6odS3CqoXmo41HJFlLeU0pG7vgjOMh"
    },
    {
      label: "ELIXIR // 09",
      title: "NEURAL OVERLOAD",
      body: "Gin, elderflower, electric bitters, bioluminescent citrus.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDupLXrcv9QmzAH5OcKIPS3pjDeZey_B4ESuMg3PYf9BQ8dQH9_09Ggxfbcz_7sQYW5r4bALXSfT5AspEhSa3Oxeg0YqFiv3Vd73S55WsV8kvVVR-fkeI5NNbsBJi2qY23mkTtw4LTfFJNj5w7WzNEcru4mVTZVZ9_PRvvD-cXuPXrVW6lsbJVqbZ8vF7Z837lPjT8mQ4Mrh4eksBIr9Ze_-I2OBgwlvfGN2jDMoloagtlKrRHvJ4i-KKqAKBZLOpX5ggT5LFyTxFun"
    },
    {
      title: "CORE BYPASS",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAE8xBLYm2xpsqSBtWrnGzYHtTLqp09CylXr8yIQ2coEMFDXb1reFAQ78hVj9DeN3KpW5Xd5EqhVvGm5Sx0ODZ0B99flrDATNujvb6FI0hhfEDkLvIm89JeozRCmw9VU4H9AniuMBlrymfWjcHYXoC0NCr8dt-hGQX2hE9s51iQkVIrcTQtx9b_E8Ju-AeiptPPAcjTCbVUBJ2-xFxqI0H_AottXgQu04rGVIf-z8mwjVN3_VOhPfxbTXFoUvoBbnKL-8DGnLFWef6w"
    },
    {
      title: "GRID-SYNC SASHIMI",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFepn4deR4bnSbElfqbQ0O6pFKGAJclJeFpI_u3l_qk16B6ovJllekpv2u3e0z5obekVEkY5UqlwjInLS84iW_YDxPjsdE3ZrpgzOMI3ScWi6hIx6w8O1PyjMCQtaQK-HdDLX9lkuzi1wpFnQMaPbkZhwJkbSatXzPbs5oeJN3Cfr8m2fhFReRumwCydeiFG-RXUKlaeOCjCKZCltRjVrmRVXQwLCbOMRc2ZQ7OS0FJOeS1eT3hs6YI6jCYOHg0bVoS0JGsJdfl-mi"
    },
    {
      title: "OPERATIVE RATION X",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUga442h5XXmC7hCVkULpkZOf6C7XgfsxIPPb75fNuBlouRe8kw1l3zcQ7kjm59yopi0PRESlYY9uGeEIZuI3r53Pmgtdqc7zKPFFrqZ0fauKGycAH2maNP_VNNkcbD0obP9cHm_B3Xf3rNOi-vs5PnkKhWgaJmAOiwz4lQpOl5DwYHJkFXg2et9XSLyF9AH47k83CWrJyJ6ke9rGhHqgkKIV-2Ww6HDDFj-ImDZSZnSEQ9vj6CvMtDIuBOBelUUgryYsXnPTyi-Z-"
    }
  ],
  atmosphereImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAbmSWwHzIutAybUPIjJH1dkJy5stPZyOJfvxnQFQklk-MjEUYrIWBuhzoPpCwv9In3whBQ6QU7u5q3cbkjl2ThWlzYrXVttkBvtnTBnBfth2EGen8WHUmLa221I0s_o9sR1Ucxtd3H2Lw2OD3z8_ekoln2lB9pF7JHj7QmlSe5Uhmzjlwmx-sYx5M6tdlG1f2s6X6NQ_1DwlK2mI_23KJ6haxSvANfiN_5KXmRcXvF6R_NZlCeeKU8-pI5z4TnMCjhd3UKvFo8XK6o9Q",
  atmosphereBullets: [
    {
      icon: "local_police",
      title: "BIOMETRIC ACCESS",
      body:
        "Controlled entry sequence with retinal-grade check-in moments that reinforce the secure, premium mood of the Stitch screen."
    },
    {
      icon: "privacy_tip",
      title: "ABSOLUTE DISCRETION",
      body:
        "Acoustic dampening fields and private pod logic support both elevated dining and confidential tactical meetings."
    },
    {
      icon: "shield_with_heart",
      title: "PROTOCOL ZERO",
      body:
        "High-priority table flow, private room handling, and clean reservation routing for VIP guests."
    }
  ]
};
