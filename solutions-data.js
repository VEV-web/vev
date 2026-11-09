// Каталог решений. Отсюда строятся страница «Решения» и выпадающее меню в шапке.
//
// Чтобы добавить решение — вставьте объект в items нужной категории:
//
//   {
//     name: "Название",
//     description: "Коротко, что делает и для кого.",
//     icon: "img/название.png",                 // необязательно, квадратная картинка
//     page: "название.html",                    // необязательно, отдельная страница решения
//     tags: ["Android", "iOS"],                 // необязательно
//     links: [                                  // необязательно
//       { label: "RuStore", url: "https://www.rustore.ru/catalog/app/..." },
//       { label: "Google Play", url: "https://play.google.com/store/apps/details?id=..." }
//     ],
//     privacy: "privacy-название.html"           // необязательно, своя политика приложения
//   },
//
// Чтобы добавить категорию — скопируйте блок категории целиком и задайте новый id
// (латиницей, без пробелов: он попадает в адрес, например solutions.html#mobile).

window.SOLUTIONS = [
  {
    id: "mobile",
    title: "Мобильные приложения",
    description: "Приложения для Android и iOS.",
    items: [
      {
        name: "Привычка — трекер задач",
        description: "Трекер привычек и задач с голосовым вводом: отметки в одно касание, цели и чек-листы, напоминания, виджет и статистика. Распознавание речи работает прямо на устройстве, данные хранятся только в телефоне. Бесплатно, без рекламы и регистрации.",
        icon: "img/habitvoice/icon.png",
        page: "habitvoice.html",
        tags: ["Android 8+", "Бесплатно", "Без рекламы"],
        links: [
          { label: "RuStore", url: "https://www.rustore.ru/catalog/app/com.habitvoice.app" }
        ],
        privacy: "privacy-habitvoice.html"
      }
    ]
  },
  {
    id: "web",
    title: "Веб-сервисы",
    description: "Сайты, веб-приложения и онлайн-сервисы.",
    items: []
  },
  {
    id: "bots",
    title: "Telegram-боты",
    description: "Боты и мини-приложения в Telegram.",
    items: []
  },
  {
    id: "desktop",
    title: "Программы для ПК",
    description: "Программы для Windows, macOS и Linux.",
    items: [
      {
        name: "APK Runner",
        description: "Запускает Android-приложения на компьютере с Windows. Откройте APK-файл — приложение установится, получит ярлык на рабочем столе и будет открываться в своём окне, как обычная программа. Телефон не нужен.",
        icon: "img/apk-runner/icon.png",
        page: "apk-runner.html",
        tags: ["Windows 10 и 11", "64 бит"],
        links: [
          { label: "Скачать для Windows", url: "https://disk.360.yandex.ru/d/uEF-xLoDvGDiyQ" }
        ]
      }
    ]
  }
];
