import type { Locale } from "@/lib/dictionaries";

export type MenuItem = {
  name: string;
  weight?: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  title: string;
  categories: MenuCategory[];
};

const menuDataRu: MenuSection[] = [
  {
    id: "food",
    title: "ЕДА",
    categories: [
      {
        id: "breakfasts",
        title: "ЗАВТРАКИ",
        items: [
          { name: "Каша пшенная с тыквой", weight: "350г", price: "330" },
          { name: "Блинчики с мясом", weight: "230г", price: "590" },
          { name: "Блинчики с творогом", weight: "230г", price: "350" },
          { name: "Большой тост с авокадо и яйцом пашот", weight: "300г", price: "490" },
          { name: "Французский омлет с лососем", weight: "300г", price: "790" },
          { name: "Яичница шакшука", weight: "250г", price: "480" },
          { name: "Английский завтрак", weight: "350г", price: "850" },
          { name: "Скандинавский завтрак", weight: "250г", price: "950" },
          { name: "Средиземноморский завтрак", weight: "250г", price: "850" },
          { name: "Творог со сливочным муссом и ягодами", weight: "230г", price: "490" },
          { name: "Сырники с ягодами и сливочным кремом", weight: "235г", price: "590" },
          { name: "Рисовая каша на кокосовом молоке", weight: "350г", price: "390" },
          { name: "Злаковая каша с яйцом пашот и пармезаном", weight: "350г", price: "480" },
          { name: "Картофельные вафли с лососем и сливочным сыром", weight: "330г", price: "890" },
          { name: "Картофельные вафли с криспи беконом, яичницей и сырным соусом", weight: "330г", price: "460" }
        ]
      },
      {
        id: "salads",
        title: "САЛАТЫ",
        items: [
          { name: "Тар-тар из говядины", weight: "220г", price: "1190" },
          { name: "Цезарь деревенский с курицей и яйцом", weight: "290г", price: "690" },
          { name: "Цезарь с креветками", weight: "240г", price: "890" },
          { name: "Коул-слоу", weight: "150г", price: "290" },
          { name: "Овощной салат", weight: "200г", price: "480" },
          { name: "Карпачо из говядины в соусе тонато", weight: "100г", price: "690" },
          { name: "Зеленый салат", weight: "210г", price: "760" },
          { name: "Салат с хрустящими баклажанами и страчателлой", weight: "280г", price: "900" },
          { name: "Гриль-салат из говяжьего филе", weight: "330г", price: "990" }
        ]
      },
      {
        id: "soups",
        title: "СУПЫ",
        items: [
          { name: "Том-ям", weight: "450/100/15г", price: "980" },
          { name: "Борщ с говядиной", weight: "330/20г", price: "490" },
          { name: "Суп-пюре томатный", weight: "300г", price: "590" },
          { name: "Куриный бульон с тортелини", weight: "300г", price: "560" },
          { name: "Суп-пюре грибной", weight: "300г", price: "680" },
          { name: "Солянка мясная сборная", weight: "300/20г", price: "690" }
        ]
      },
      {
        id: "pizza-burgers",
        title: "ПИЦЦА / БУРГЕРЫ",
        items: [
          { name: "Острая мясная пицца", weight: "550г", price: "890" },
          { name: "Пицца груша с горгонзолой", weight: "550г", price: "990" },
          { name: "Пицца капри", weight: "550г", price: "690" },
          { name: "Пицца курица-барбекю", weight: "550г", price: "690" },
          { name: "Пицца пеперони", weight: "500г", price: "690" },
          { name: "Пицца маргарита", weight: "450г", price: "590" },
          { name: "Пицца маргарита со страчателлой и рукколой", weight: "500г", price: "790" },
          { name: "Пицца цезарь с курицей", weight: "600г", price: "790" },
          { name: "Закрытый пицца-бургер", weight: "270/100/30г", price: "590" },
          { name: "Закрытый бургер мексиканский", weight: "240/100/30г", price: "710" },
          { name: "Закрытый бургер куриный с беконом", weight: "240/100/30г", price: "490" },
          { name: "Закрытый бургер азиатский", weight: "260/100/30г", price: "590" },
          { name: "Закрытый бургер камамбер", weight: "250/100/30г", price: "690" },
          { name: "Бургер с цыплёнком", weight: "330/100/30г", price: "590" },
          { name: "Бургер мега-чиз", weight: "450/100/30г", price: "990" },
          { name: "Бургер барбекю", weight: "330/100/30г", price: "690" },
          { name: "Чизбургер", weight: "310/100/30г", price: "590" },
          { name: "Бургер Биг-геймер", weight: "450/100/30г", price: "990" }
        ]
      },
      {
        id: "starters",
        title: "СТАРТЕРЫ / СТРИТФУД",
        items: [
          { name: "Кесадилья с цыпленком", weight: "400г", price: "780" },
          { name: "Кесадилья с рваной говядиной", weight: "400г", price: "880" },
          { name: "Буррито с цыпленком", weight: "250г", price: "590" },
          { name: "Буррито с реберным мясом", weight: "280г", price: "690" },
          { name: "Шаурма с реберным мясом", weight: "350г", price: "590" },
          { name: "Шаурма с курицей", weight: "350г", price: "490" },
          { name: "Клаб-сэндвич", weight: "400/100/30г", price: "590" },
          { name: "Начос с чили кон карне и сырным соусом", weight: "230г", price: "780" },
          { name: "Наггетсы куриные", weight: "150г", price: "380" },
          { name: "Картофель фри", weight: "150г", price: "250" },
          { name: "Сырные палочки (медальоны)", weight: "150г", price: "450" },
          { name: "Луковые кольца", weight: "150г", price: "380" },
          { name: "Стрипсы куриные", weight: "150г", price: "390" },
          { name: "Пивное плато", weight: "60/100/100/150/150/30/30г", price: "1790" },
          { name: "Хлебная корзина с ароматным маслом", weight: "150/30г", price: "330" },
          { name: "Куриные крылья в соусе Jack Daniel's", weight: "250г", price: "690" }
        ]
      },
      {
        id: "hot",
        title: "ГОРЯЧИЕ БЛЮДА / ПАСТА",
        items: [
          { name: "Ребра свиные томленые в соусе Jack Daniel's", weight: "450г", price: "1290" },
          { name: "Фиш & Чипс", weight: "400г", price: "690" },
          { name: "Бифштекс из мраморной говядины с яйцом пашот", weight: "280г", price: "980" },
          { name: "Стейк Рибай", weight: "220г", price: "3900" },
          { name: "Стейк стриплойн", weight: "220г", price: "2900" },
          { name: "Стейк из семги с брокколи гриль и соусом лимончелло", weight: "120/150/30г", price: "1900" },
          { name: "Паста с мясным рагу", weight: "310г", price: "780" },
          { name: "Паста карбонара", weight: "300г", price: "690" },
          { name: "Паста Альфредо с курицей", weight: "300г", price: "590" },
          { name: "Лингвини с креветками и соусом биск", weight: "300г", price: "890" },
          { name: "Паста с лососем", weight: "300г", price: "1280" },
          { name: "Орзо с белыми грибами", weight: "300г", price: "790" },
          { name: "Картофельное пюре", weight: "200г", price: "350" }
        ]
      },
      {
        id: "desserts",
        title: "ДЖЕЛАТО И СОРБЕТ",
        items: [
          { name: "Бурбонская ваниль", weight: "50г", price: "300" },
          { name: "Швейцарский шоколад", weight: "50г", price: "300" },
          { name: "Соленая карамель", weight: "50г", price: "300" },
          { name: "Сицилийская фисташка", weight: "50г", price: "300" },
          { name: "Клубника со сливками", weight: "50г", price: "300" },
          { name: "Халва", weight: "50г", price: "300" },
          { name: "Печенье-карамель", weight: "50г", price: "300" },
          { name: "Зеленый чай матча", weight: "50г", price: "300" },
          { name: "Лимон-лайм (сорбет)", weight: "50г", price: "300" },
          { name: "Клубника-базилик (сорбет)", weight: "50г", price: "300" },
          { name: "Малина (сорбет)", weight: "50г", price: "300" },
          { name: "Манго-маракуйя (сорбет)", weight: "50г", price: "300" },
          { name: "Зеленое яблоко (сорбет)", weight: "50г", price: "300" }
        ]
      }
    ]
  },
  {
    id: "drinks",
    title: "НАПИТКИ",
    categories: [
      {
        id: "tea",
        title: "ЧАЙ",
        items: [
          { name: "Эрл Грей", weight: "500мл", price: "350" },
          { name: "Молочный улун", weight: "500мл", price: "350" },
          { name: "Сенча", weight: "500мл", price: "350" },
          { name: "Жасмин", weight: "500мл", price: "350" },
          { name: "Ассам", weight: "500мл", price: "350" },
          { name: "Сладкий фрукт", weight: "500мл", price: "350" },
          { name: "Тегуаньинь", weight: "500мл", price: "500" },
          { name: "Габа", weight: "500мл", price: "500" },
          { name: "Шу Пуэр", weight: "500мл", price: "500" }
        ]
      },
      {
        id: "coffee",
        title: "КОФЕ",
        items: [
          { name: "Эспрессо", weight: "30мл", price: "120" },
          { name: "Доппио", weight: "60мл", price: "250" },
          { name: "Американо", weight: "200/350мл", price: "180/250" },
          { name: "Латте", weight: "200/350мл", price: "280/350" },
          { name: "Капучино", weight: "200/350мл", price: "280/350" },
          { name: "Раф", weight: "200/350мл", price: "400" },
          { name: "Флэт уайт", weight: "350мл", price: "350" },
          { name: "Какао", weight: "350мл", price: "300" }
        ]
      },
      {
        id: "lemonades",
        title: "ЛИМОНАДЫ",
        items: [
          { name: "Avulus tea", weight: "400/1000мл", price: "400/800" },
          { name: "Маракуйя, вишня, ваниль", weight: "400/1000мл", price: "400/800" },
          { name: "Клубника, каламанси, лемонграсс", weight: "400/1000мл", price: "400/800" }
        ]
      },
      {
        id: "fresh",
        title: "СВЕЖЕВЫЖАТЫЕ СОКИ",
        items: [
          { name: "Грейпфрут", weight: "250мл", price: "500" },
          { name: "Апельсин", weight: "250мл", price: "500" }
        ]
      },
      {
        id: "water",
        title: "ВОДА И СОКИ",
        items: [
          { name: "Rich", weight: "0.25л", price: "300" },
          { name: "Dausuz", weight: "0.275/0.5л", price: "300/450" },
          { name: "Baikal", weight: "0.45л", price: "350" }
        ]
      },
      {
        id: "soda",
        title: "ГАЗИРОВКА",
        items: [
          { name: "Coca-Cola, Coca-Cola Zero, Sprite, Fanta", weight: "0.33л", price: "400" },
          { name: "Evervess Индиан Тоник", weight: "0.33л", price: "400" }
        ]
      },
      {
        id: "energy",
        title: "ЭНЕРГЕТИКИ",
        items: [
          { name: "Red Bull", weight: "250мл", price: "500" },
          { name: "Adrenaline Rush", weight: "250мл", price: "400" }
        ]
      }
    ]
  },
  {
    id: "bar",
    title: "БАР",
    categories: [
      {
        id: "beer",
        title: "ПИВО",
        items: [
          { name: "Peroni, Italy", weight: "0.33мл", price: "650" },
          { name: "Corona Extra, Mexico", weight: "0.33мл", price: "500" },
          { name: "Tsingtao, China", weight: "0.33мл", price: "600" },
          { name: "Guinness", weight: "0.44мл", price: "800" },
          { name: "Clausthaler Original б/а", weight: "0.33мл", price: "500" }
        ]
      },
      {
        id: "sparkling",
        title: "ИГРИСТОЕ И ШАМПАНСКОЕ",
        items: [
          { name: "Valvasore Prosecco Brut Millesimato", weight: "Italy, Veneto 125/750мл", price: "1000/6000" },
          { name: "Joseph Beck Cremant d'Alsace Brut Prestige AOC", weight: "France, Alsace 125/750мл", price: "1500/9000" },
          { name: "Champagne Cossy Pechon 1-er Cru Brut", weight: "France, Champagne 750мл", price: "15240" }
        ]
      },
      {
        id: "strong",
        title: "КРЕПКИЕ НАПИТКИ",
        items: [
          { name: "Talisker 10 (односолодовый виски)", weight: "40мл", price: "1300" },
          { name: "Macallan Double Cask 12", weight: "40мл", price: "2000" },
          { name: "Singleton 12", weight: "40мл", price: "1000" },
          { name: "Laphroaig 10", weight: "40мл", price: "1500" },
          { name: "Auchentoshan Oak", weight: "40мл", price: "1000" },
          { name: "Jack Daniel's (американский виски)", weight: "40мл", price: "600" },
          { name: "Jim Beam", weight: "40мл", price: "500" },
          { name: "Woodford Reserve", weight: "40мл", price: "800" },
          { name: "Chivas Regal 12 (купажированный)", weight: "40мл", price: "800" },
          { name: "Ballantine's Finest", weight: "40мл", price: "500" },
          { name: "Monkey Shoulder Original", weight: "40мл", price: "900" },
          { name: "Bushmills Original", weight: "40мл", price: "500" },
          { name: "Jameson", weight: "40мл", price: "600" },
          { name: "Roku Japanese Craft Gin", weight: "40мл", price: "1000" },
          { name: "Bombay Sapphire", weight: "40мл", price: "1200" },
          { name: "Ginster", weight: "40мл", price: "400" },
          { name: "Nordes", weight: "40мл", price: "1200" },
          { name: "Crafters London Dry", weight: "40мл", price: "900" },
          { name: "Zacapa Centenario, Solera Gran Reserva 23 (ром)", weight: "40мл", price: "1100" },
          { name: "Legendario Anejo Blanco", weight: "40мл", price: "500" },
          { name: "Legendario Ron Dorado", weight: "40мл", price: "550" },
          { name: "Legendario Elixir de Cuba", weight: "40мл", price: "600" },
          { name: "Hennessy XO (коньяк)", weight: "40мл", price: "3500" },
          { name: "Courvoisier VS", weight: "40мл", price: "1300" },
          { name: "Courvoisier VSOP", weight: "40мл", price: "1800" },
          { name: "Espolon Blanco (текила)", weight: "40мл", price: "600" },
          { name: "Espolon Reposado", weight: "40мл", price: "600" },
          { name: "Jose Cuervo Especial Blanco", weight: "40мл", price: "500" },
          { name: "Jose Cuervo Especial Reposado", weight: "40мл", price: "500" },
          { name: "Beluga Noble (водка)", weight: "40мл", price: "450" },
          { name: "Чистые росы", weight: "40мл", price: "600" },
          { name: "Балчуг XIX век", weight: "40мл", price: "400" }
        ]
      },
      {
        id: "aperitif",
        title: "АПЕРИТИВ / ЛИКЕР",
        items: [
          { name: "Martini", weight: "75/40мл", price: "550" },
          { name: "Minttu", weight: "40мл", price: "600" },
          { name: "Baileys", weight: "40мл", price: "450" },
          { name: "Jagermeister", weight: "40мл", price: "500" },
          { name: "Campari", weight: "40мл", price: "450" },
          { name: "Sarti", weight: "40мл", price: "500" },
          { name: "Aperol", weight: "40мл", price: "450" }
        ]
      },
      {
        id: "wine",
        title: "ВИНО",
        items: [
          { name: "Palmberg Riesling Trocken (белое)", weight: "125мл", price: "800" },
          { name: "Sonnengold Gruner Veltliner (белое)", weight: "125мл", price: "800" },
          { name: "Marlborough Sounds Sauvignon Blanc (белое)", weight: "125мл", price: "900" },
          { name: "Marlborough Sounds Pinot Noir (красное)", weight: "125мл", price: "900" },
          { name: "Encanto Rosso Terre, Nero d'Avola (красное)", weight: "125мл", price: "800" }
        ]
      },
      {
        id: "tinctures",
        title: "НАСТОЙКИ",
        items: [
          { name: "Джин на малине", price: "300" },
          { name: "Лимончелло", price: "300" },
          { name: "Водка на клюкве", price: "300" },
          { name: "Водка на черной смородине", price: "300" }
        ]
      }
    ]
  },
  {
    id: "cocktails",
    title: "КОКТЕЙЛИ",
    categories: [
      {
        id: "signature",
        title: "АВТОРСКИЕ",
        items: [
          { name: "Crystal Maiden", description: "Джин на мармеладе, чупа-чупс, кордиал клубника, рислинг", price: "1200" },
          { name: "Pudge", description: "Водка на клюкве, трипл сек, сок лайма", price: "1200" },
          { name: "Avulus", description: "Водка на черной смородине, кордиал виноград, лемонграсс, маракуйя, сухое игристое вино", price: "1200" },
          { name: "Plant", description: "Джин на каффирском лайме, каламанси, бузина, трипл сек, пена из маракуйи", price: "1200" },
          { name: "Give the drop", description: "Джин на малине, кампари, личи, тоник", price: "1200" },
          { name: "Phoenix", description: "Водка на клубнике с лаймом, сухое игристое вино", price: "1200" },
          { name: "Wraith King", description: "Лимончелло, ликер сауэр эппл, лимонный сок, белок", price: "1200" },
          { name: "Dazzle", description: "Джин на барбарисках, вермут экстра драй, красный сладкий вермут, бузина", price: "1200" }
        ]
      },
      {
        id: "classic",
        title: "КЛАССИЧЕСКИЕ",
        items: [
          { name: "Negroni", description: "Джин, красный сладкий вермут, кампари", price: "950" },
          { name: "White Russian", description: "Водка, кофейный ликер, сливки 11%", price: "950" },
          { name: "Aperol Spritz", description: "Апероль, сухое игристое, содовая", price: "950" },
          { name: "Pornstar Martini", description: "Ванильная водка, маракуйя, сухое игристое вино", price: "950" },
          { name: "Lynchburg Lemonade", description: "Виски, трипл сек, лимонный сок, спрайт", price: "950" },
          { name: "Margarita", description: "Текила, трипл сек, сок лайма", price: "950" },
          { name: "Whiskey Sour", description: "Бурбон, лимонный сок, белок, ангостура", price: "950" },
          { name: "Clover Club", description: "Джин, пюре малины, сок лайма, белок", price: "950" },
          { name: "Espresso Martini", description: "Водка, эспрессо, кофейный ликер", price: "950" },
          { name: "Basil Smash", description: "Джин, базилик, лимонный сок", price: "950" }
        ]
      }
    ]
  }
];

const sectionTitleEn: Record<string, string> = {
  "ЕДА": "FOOD",
  "НАПИТКИ": "DRINKS",
  "БАР": "BAR",
  "КОКТЕЙЛИ": "COCKTAILS"
};

const categoryTitleEn: Record<string, string> = {
  "ЗАВТРАКИ": "BREAKFASTS",
  "САЛАТЫ": "SALADS",
  "СУПЫ": "SOUPS",
  "ПИЦЦА / БУРГЕРЫ": "PIZZA / BURGERS",
  "СТАРТЕРЫ / СТРИТФУД": "STARTERS / STREET FOOD",
  "ГОРЯЧИЕ БЛЮДА / ПАСТА": "HOT DISHES / PASTA",
  "ДЖЕЛАТО И СОРБЕТ": "GELATO & SORBET",
  "ЧАЙ": "TEA",
  "КОФЕ": "COFFEE",
  "ЛИМОНАДЫ": "LEMONADES",
  "СВЕЖЕВЫЖАТЫЕ СОКИ": "FRESH JUICES",
  "ВОДА И СОКИ": "WATER & JUICES",
  "ГАЗИРОВКА": "SODA",
  "ЭНЕРГЕТИКИ": "ENERGY DRINKS",
  "ПИВО": "BEER",
  "ИГРИСТОЕ И ШАМПАНСКОЕ": "SPARKLING & CHAMPAGNE",
  "КРЕПКИЕ НАПИТКИ": "SPIRITS",
  "АПЕРИТИВ / ЛИКЕР": "APERITIF / LIQUEUR",
  "ВИНО": "WINE",
  "НАСТОЙКИ": "INFUSIONS",
  "АВТОРСКИЕ": "SIGNATURE",
  "КЛАССИЧЕСКИЕ": "CLASSICS"
};

const itemNameEn: Record<string, string> = {
  "Каша пшенная с тыквой": "Millet porridge with pumpkin",
  "Блинчики с мясом": "Meat crepes",
  "Блинчики с творогом": "Cottage cheese crepes",
  "Большой тост с авокадо и яйцом пашот": "Large avocado toast with poached egg",
  "Французский омлет с лососем": "French omelet with salmon",
  "Яичница шакшука": "Shakshuka eggs",
  "Английский завтрак": "English breakfast",
  "Скандинавский завтрак": "Scandinavian breakfast",
  "Средиземноморский завтрак": "Mediterranean breakfast",
  "Творог со сливочным муссом и ягодами": "Farmer cheese with cream mousse and berries",
  "Сырники с ягодами и сливочным кремом": "Syrniki with berries and cream",
  "Рисовая каша на кокосовом молоке": "Rice porridge with coconut milk",
  "Злаковая каша с яйцом пашот и пармезаном": "Grain porridge with poached egg and parmesan",
  "Картофельные вафли с лососем и сливочным сыром": "Potato waffles with salmon and cream cheese",
  "Картофельные вафли с криспи беконом, яичницей и сырным соусом": "Potato waffles with crispy bacon, fried egg and cheese sauce",
  "Тар-тар из говядины": "Beef tartare",
  "Цезарь деревенский с курицей и яйцом": "Rustic Caesar with chicken and egg",
  "Цезарь с креветками": "Caesar with shrimp",
  "Коул-слоу": "Coleslaw",
  "Овощной салат": "Vegetable salad",
  "Карпачо из говядины в соусе тонато": "Beef carpaccio with tonnato sauce",
  "Зеленый салат": "Green salad",
  "Салат с хрустящими баклажанами и страчателлой": "Salad with crispy eggplant and stracciatella",
  "Гриль-салат из говяжьего филе": "Grilled beef fillet salad",
  "Том-ям": "Tom Yum",
  "Борщ с говядиной": "Borscht with beef",
  "Суп-пюре томатный": "Tomato cream soup",
  "Куриный бульон с тортелини": "Chicken broth with tortellini",
  "Суп-пюре грибной": "Mushroom cream soup",
  "Солянка мясная сборная": "Meat solyanka",
  "Острая мясная пицца": "Spicy meat pizza",
  "Пицца груша с горгонзолой": "Pear and gorgonzola pizza",
  "Пицца капри": "Capri pizza",
  "Пицца курица-барбекю": "BBQ chicken pizza",
  "Пицца пеперони": "Pepperoni pizza",
  "Пицца маргарита": "Margherita pizza",
  "Пицца маргарита со страчателлой и рукколой": "Margherita with stracciatella and arugula",
  "Пицца цезарь с курицей": "Chicken Caesar pizza",
  "Закрытый пицца-бургер": "Closed pizza burger",
  "Закрытый бургер мексиканский": "Closed Mexican burger",
  "Закрытый бургер куриный с беконом": "Closed chicken burger with bacon",
  "Закрытый бургер азиатский": "Closed Asian burger",
  "Закрытый бургер камамбер": "Closed Camembert burger",
  "Бургер с цыплёнком": "Chicken burger",
  "Бургер мега-чиз": "Mega cheese burger",
  "Бургер барбекю": "BBQ burger",
  "Чизбургер": "Cheeseburger",
  "Бургер Биг-геймер": "Big Gamer burger",
  "Кесадилья с цыпленком": "Chicken quesadilla",
  "Кесадилья с рваной говядиной": "Pulled beef quesadilla",
  "Буррито с цыпленком": "Chicken burrito",
  "Буррито с реберным мясом": "Rib meat burrito",
  "Шаурма с реберным мясом": "Shawarma with rib meat",
  "Шаурма с курицей": "Chicken shawarma",
  "Клаб-сэндвич": "Club sandwich",
  "Начос с чили кон карне и сырным соусом": "Nachos with chili con carne and cheese sauce",
  "Наггетсы куриные": "Chicken nuggets",
  "Картофель фри": "French fries",
  "Сырные палочки (медальоны)": "Cheese sticks",
  "Луковые кольца": "Onion rings",
  "Стрипсы куриные": "Chicken strips",
  "Пивное плато": "Beer platter",
  "Хлебная корзина с ароматным маслом": "Bread basket with flavored butter",
  "Куриные крылья в соусе Jack Daniel's": "Chicken wings in Jack Daniel's sauce",
  "Ребра свиные томленые в соусе Jack Daniel's": "Slow-cooked pork ribs in Jack Daniel's sauce",
  "Фиш & Чипс": "Fish & Chips",
  "Бифштекс из мраморной говядины с яйцом пашот": "Marbled beef steak with poached egg",
  "Стейк Рибай": "Ribeye steak",
  "Стейк стриплойн": "Striploin steak",
  "Стейк из семги с брокколи гриль и соусом лимончелло": "Salmon steak with grilled broccoli and limoncello sauce",
  "Паста с мясным рагу": "Pasta with meat ragu",
  "Паста карбонара": "Carbonara pasta",
  "Паста Альфредо с курицей": "Chicken Alfredo pasta",
  "Лингвини с креветками и соусом биск": "Linguine with shrimp and bisque sauce",
  "Паста с лососем": "Salmon pasta",
  "Орзо с белыми грибами": "Orzo with porcini mushrooms",
  "Картофельное пюре": "Mashed potatoes",
  "Бурбонская ваниль": "Bourbon vanilla",
  "Швейцарский шоколад": "Swiss chocolate",
  "Соленая карамель": "Salted caramel",
  "Сицилийская фисташка": "Sicilian pistachio",
  "Клубника со сливками": "Strawberries and cream",
  "Халва": "Halva",
  "Печенье-карамель": "Cookie caramel",
  "Зеленый чай матча": "Matcha green tea",
  "Лимон-лайм (сорбет)": "Lemon-lime sorbet",
  "Клубника-базилик (сорбет)": "Strawberry-basil sorbet",
  "Малина (сорбет)": "Raspberry sorbet",
  "Манго-маракуйя (сорбет)": "Mango-passion fruit sorbet",
  "Зеленое яблоко (сорбет)": "Green apple sorbet",
  "Молочный улун": "Milk Oolong",
  "Эрл Грей": "Earl Grey",
  "Сенча": "Sencha",
  "Жасмин": "Jasmine",
  "Ассам": "Assam",
  "Сладкий фрукт": "Sweet Fruit",
  "Тегуаньинь": "Tie Guan Yin",
  "Габа": "GABA tea",
  "Шу Пуэр": "Shu Pu-erh",
  "Эспрессо": "Espresso",
  "Доппио": "Doppio",
  "Американо": "Americano",
  "Латте": "Latte",
  "Капучино": "Cappuccino",
  "Раф": "Raf coffee",
  "Флэт уайт": "Flat White",
  "Какао": "Cocoa",
  "Маракуйя, вишня, ваниль": "Passion fruit, cherry, vanilla",
  "Клубника, каламанси, лемонграсс": "Strawberry, calamansi, lemongrass",
  "Грейпфрут": "Grapefruit",
  "Апельсин": "Orange",
  "Evervess Индиан Тоник": "Evervess Indian Tonic",
  "Clausthaler Original б/а": "Clausthaler Original non-alcoholic",
  "Talisker 10 (односолодовый виски)": "Talisker 10 (single malt whisky)",
  "Jack Daniel's (американский виски)": "Jack Daniel's (American whiskey)",
  "Chivas Regal 12 (купажированный)": "Chivas Regal 12 (blended whisky)",
  "Zacapa Centenario, Solera Gran Reserva 23 (ром)": "Zacapa Centenario, Solera Gran Reserva 23 (rum)",
  "Hennessy XO (коньяк)": "Hennessy XO (cognac)",
  "Espolon Blanco (текила)": "Espolon Blanco (tequila)",
  "Beluga Noble (водка)": "Beluga Noble (vodka)",
  "Чистые росы": "Chistye Rosy",
  "Балчуг XIX век": "Balchug XIX Century",
  "Palmberg Riesling Trocken (белое)": "Palmberg Riesling Trocken (white)",
  "Sonnengold Gruner Veltliner (белое)": "Sonnengold Gruner Veltliner (white)",
  "Marlborough Sounds Sauvignon Blanc (белое)": "Marlborough Sounds Sauvignon Blanc (white)",
  "Marlborough Sounds Pinot Noir (красное)": "Marlborough Sounds Pinot Noir (red)",
  "Encanto Rosso Terre, Nero d'Avola (красное)": "Encanto Rosso Terre, Nero d'Avola (red)",
  "Джин на малине": "Raspberry gin infusion",
  "Лимончелло": "Limoncello",
  "Водка на клюкве": "Cranberry vodka infusion",
  "Водка на черной смородине": "Blackcurrant vodka infusion"
};

const descriptionEn: Record<string, string> = {
  "Джин на мармеладе, чупа-чупс, кордиал клубника, рислинг": "Gin infused with marmalade, lollipop notes, strawberry cordial, Riesling",
  "Водка на клюкве, трипл сек, сок лайма": "Cranberry vodka infusion, triple sec, lime juice",
  "Водка на черной смородине, кордиал виноград, лемонграсс, маракуйя, сухое игристое вино": "Blackcurrant vodka infusion, grape cordial, lemongrass, passion fruit, dry sparkling wine",
  "Джин на каффирском лайме, каламанси, бузина, трипл сек, пена из маракуйи": "Gin infused with kaffir lime, calamansi, elderflower, triple sec, passion fruit foam",
  "Джин на малине, кампари, личи, тоник": "Raspberry gin infusion, Campari, lychee, tonic",
  "Водка на клубнике с лаймом, сухое игристое вино": "Strawberry vodka with lime, dry sparkling wine",
  "Лимончелло, ликер сауэр эппл, лимонный сок, белок": "Limoncello, sour apple liqueur, lemon juice, egg white",
  "Джин на барбарисках, вермут экстра драй, красный сладкий вермут, бузина": "Gin infused with barberry candy, extra dry vermouth, sweet red vermouth, elderflower",
  "Джин, красный сладкий вермут, кампари": "Gin, sweet red vermouth, Campari",
  "Водка, кофейный ликер, сливки 11%": "Vodka, coffee liqueur, 11% cream",
  "Апероль, сухое игристое, содовая": "Aperol, dry sparkling wine, soda",
  "Ванильная водка, маракуйя, сухое игристое вино": "Vanilla vodka, passion fruit, dry sparkling wine",
  "Виски, трипл сек, лимонный сок, спрайт": "Whiskey, triple sec, lemon juice, Sprite",
  "Текила, трипл сек, сок лайма": "Tequila, triple sec, lime juice",
  "Бурбон, лимонный сок, белок, ангостура": "Bourbon, lemon juice, egg white, Angostura",
  "Джин, пюре малины, сок лайма, белок": "Gin, raspberry puree, lime juice, egg white",
  "Водка, эспрессо, кофейный ликер": "Vodka, espresso, coffee liqueur",
  "Джин, базилик, лимонный сок": "Gin, basil, lemon juice"
};

function localizeWeight(weight: string | undefined, lang: Locale) {
  if (!weight || lang === "ru") return weight;

  return weight
    .replaceAll("г", "g")
    .replaceAll("мл", "ml")
    .replaceAll("л", "L")
    .replaceAll("Италия", "Italy")
    .replaceAll("Франция", "France")
    .replaceAll("Венето", "Veneto")
    .replaceAll("Эльзас", "Alsace");
}

function toEnglish(data: MenuSection[]): MenuSection[] {
  return data.map((section) => ({
    ...section,
    title: sectionTitleEn[section.title] ?? section.title,
    categories: section.categories.map((category) => ({
      ...category,
      title: categoryTitleEn[category.title] ?? category.title,
      items: category.items.map((item) => ({
        ...item,
        name: itemNameEn[item.name] ?? item.name,
        description: item.description ? descriptionEn[item.description] ?? item.description : undefined,
        weight: localizeWeight(item.weight, "en")
      }))
    }))
  }));
}

export function getMenuData(lang: Locale): MenuSection[] {
  return lang === "ru" ? menuDataRu : toEnglish(menuDataRu);
}
