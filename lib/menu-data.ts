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

export const menuData: MenuSection[] = [
  {
    id: "food",
    title: "FOOD",
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
        title: "СТАРТЕРЫ / STREET FOOD",
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
        title: "GELATO & СОРБЕТ",
        items: [
          { name: "Бурбонская ваниль", weight: "50г", price: "300" },
          { name: "Шоколад швейцарский", weight: "50г", price: "300" },
          { name: "Соленая карамель", weight: "50г", price: "300" },
          { name: "Сицилийская фисташка", weight: "50г", price: "300" },
          { name: "Клубника со сливками", weight: "50г", price: "300" },
          { name: "Халва", weight: "50г", price: "300" },
          { name: "Печенье-карамель", weight: "50г", price: "300" },
          { name: "Зеленый чай матча", weight: "50г", price: "300" },
          { name: "Лимон-лайм (Сорбет)", weight: "50г", price: "300" },
          { name: "Клубника-базилик (Сорбет)", weight: "50г", price: "300" },
          { name: "Малина (Сорбет)", weight: "50г", price: "300" },
          { name: "Манго-маракуйя (Сорбет)", weight: "50г", price: "300" },
          { name: "Зеленое яблоко (Сорбет)", weight: "50г", price: "300" }
        ]
      }
    ]
  },
  {
    id: "drinks",
    title: "DRINKS",
    categories: [
      {
        id: "tea",
        title: "ЧАЙ",
        items: [
          { name: "Эрл Грей", weight: "500мл", price: "350" },
          { name: "Молочный Улун", weight: "500мл", price: "350" },
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
    title: "BAR",
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
          { name: "Talisker 10 (Односолодовый виски)", weight: "40мл", price: "1300" },
          { name: "Macallan Double Cask 12", weight: "40мл", price: "2000" },
          { name: "Singleton 12", weight: "40мл", price: "1000" },
          { name: "Laphroaig 10", weight: "40мл", price: "1500" },
          { name: "Auchentoshan Oak", weight: "40мл", price: "1000" },
          { name: "Jack Daniel's (Американский виски)", weight: "40мл", price: "600" },
          { name: "Jim Beam", weight: "40мл", price: "500" },
          { name: "Woodford Reserve", weight: "40мл", price: "800" },
          { name: "Chivas Regal 12 (Купажированный)", weight: "40мл", price: "800" },
          { name: "Ballantine's Finest", weight: "40мл", price: "500" },
          { name: "Monkey Shoulder Original", weight: "40мл", price: "900" },
          { name: "Bushmills Original", weight: "40мл", price: "500" },
          { name: "Jameson", weight: "40мл", price: "600" },
          { name: "Roku Japanese Craft Gin", weight: "40мл", price: "1000" },
          { name: "Bombay Sapphire", weight: "40мл", price: "1200" },
          { name: "Ginster", weight: "40мл", price: "400" },
          { name: "Nordes", weight: "40мл", price: "1200" },
          { name: "Crafters London Dry", weight: "40мл", price: "900" },
          { name: "Zacapa Centenario, Solera Gran Reserva 23 (Ром)", weight: "40мл", price: "1100" },
          { name: "Legendario Anejo Blanco", weight: "40мл", price: "500" },
          { name: "Legendario Ron Dorado", weight: "40мл", price: "550" },
          { name: "Legendario Elixir de Cuba", weight: "40мл", price: "600" },
          { name: "Hennessy XO (Коньяк)", weight: "40мл", price: "3500" },
          { name: "Courvoisier VS", weight: "40мл", price: "1300" },
          { name: "Courvoisier VSOP", weight: "40мл", price: "1800" },
          { name: "Espolon Blanco (Текила)", weight: "40мл", price: "600" },
          { name: "Espolon Reposado", weight: "40мл", price: "600" },
          { name: "Jose Cuervo Especial Blanco", weight: "40мл", price: "500" },
          { name: "Jose Cuervo Especial Reposado", weight: "40мл", price: "500" },
          { name: "Beluga Noble (Водка)", weight: "40мл", price: "450" },
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
          { name: "Palmberg Riesling Trocken (Белое)", weight: "125мл", price: "800" },
          { name: "Sonnengold Gruner Veltliner (Белое)", weight: "125мл", price: "800" },
          { name: "Marlborough Sounds Sauvignon Blanc (Белое)", weight: "125мл", price: "900" },
          { name: "Marlborough Sounds Pinot Noir (Красное)", weight: "125мл", price: "900" },
          { name: "Encanto Rosso Terre, Nero d'Avola (Красное)", weight: "125мл", price: "800" }
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
    title: "COCKTAILS",
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
