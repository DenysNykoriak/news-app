import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18NextOptions: InitOptions = {
  fallbackLng: "en",
  supportedLngs: ["uk", "en"],
  backend: {
    loadPath: "/locales/{{lng}}.json",
  },
  ns: [
    "App",
    // "Months",
    // "NewsCategories",
    // "Widgets",
    // "Navbar",
    // "Footer",
    // "Dialogs",
    // "Pages",
    // "HomePage",
    // "NewsPage",
    // "ProfilePage",
  ],
  defaultNS: "App",
  debug: true,
  interpolation: {
    escapeValue: true,
  },
  resources: {
    en: {
      App: {
        Months: {
          Jan: "Jan {{sequel}}",
          Feb: "Feb {{sequel}}",
          // ....
        },
        NewsCategories: {
          Finances: "Finances",
          Politics: "Politics",
          IT: "IT",
          Medicine: "Medicine",
          Jobs: "Jobs",
          Other: "Other",
        },
        Widgets: {
          NewsStatistics: "News Statistics",
          LastNews: "Last News",
          LastNewsPosts: {
            post1: "Last News",
            post2: "Some News",
            post3: "More About Banks",
            post4: "Look into your past",
            post5: "Future Medicine",
            post6: "Best facts about Ukraine",
            post7: "Computer Devices",
          },
        },
        Navbar: {
          Notification: "Notification",
          Login: "Log in",
          Logout: "Log out",
          confirmLogout: "Are you sure want to log out?",
          links: {
            "/": "Home",
            "/news": "News",
            "/profile": "Profile",
          },
        },
        Footer: {
          mainText:
            "Test Task for AlterEGO on position Strong Junior Developer",
          author: "Author: Denys Nykoriak",
          inspiredBy: "Inspired by",
          inspiredLink: "Dribbble",
        },
        Dialogs: {
          //Confirmation Dialog
          confirmAction: "Please, confirm this action",
          //LoginDialog
          loginTitle: "Login",
          loginFields: {
            username: "Username",
            usernamePlaceholder: "admin",
            password: "Password",
            passwordPlaceholder: "Some strong password",
          },
          invalidFields: "Username or password entered incorrectly",

          //Buttons
          CancelButton: "Cancel",
          ConsentButton: "Consent",
          LoginButton: "Log in",
          DeleteButton: "Delete",
        },
        Pages: {
          recentNews_zero: "no news",
          recentNews_one: "+1 new",
          recentNews_other: "+{{count}} news",
        },
        HomePage: {
          title: "Home",
          contentTitle: "All News In One Place",
          contentSubtitle:
            "Find, read, delete news and have quick access to all of these",
        },
        NewsPage: {
          title: "News",
          allNewsLoaded:
            "Unfortunately, this is all the news. Come back later to see more",
        },
        ProfilePage: {
          title: "Profile",
          role: "Role",
          lvl: "Lvl",
          messageButton: "Message",
          shareProfile: "Share Profile",
        },
      },
    },
    uk: {
      App: {
        Months: {
          Jan: "Січ {{sequel}}",
          Feb: "Лют {{sequel}}",
          // ....
        },
        NewsCategories: {
          Finances: "Фінанси",
          Politics: "Політика",
          IT: "IT",
          Medicine: "Медицина",
          Jobs: "Ринок Праці",
          Other: "Інше",
        },
        Widgets: {
          NewsStatistics: "Статистика новин",
          LastNews: "Останні новини",
          LastNewsPosts: {
            post1: "Останні новини",
            post2: "Якісь новини",
            post3: "Більше про банки",
            post4: "Заглянь в своє минуле",
            post5: "Медицина майбутнього",
            post6: "Топ факти про Україну",
            post7: "Комп'ютерні девайси",
          },
        },
        Navbar: {
          Notification: "Повідомлення",
          Login: "Ввійти",
          Logout: "Вийти",
          confirmLogout: "Ви дійсно хочете вийти?",
          links: {
            "/": "Головна",
            "/news": "Новини",
            "/profile": "Профіль",
          },
        },
        Footer: {
          mainText:
            "Тестове завдання для AlterEGO на позицію Strong Junior Developer",
          author: "Власник: Денис Никоряк",
          inspiredBy: "Натхнення для дизайну брав",
          inspiredLink: "тут",
        },
        Dialogs: {
          //Confirmation Dialog
          confirmAction: "Будь ласка, підтвердіть цю дію",
          //LoginDialog
          loginTitle: "Вхід в аккаунт",
          loginFields: {
            username: "Ім'я",
            usernamePlaceholder: "admin",
            password: "Пароль",
            passwordPlaceholder: "Надійний пароль",
          },
          invalidFields: "Ім'я або пароль введено невірно",

          //Buttons
          CancelButton: "Відмінити",
          ConsentButton: "Погоджуюсь",
          LoginButton: "Ввійти",
          DeleteButton: "Видалити",
        },
        Pages: {
          recentNews_zero: "немає новин",
          recentNews_one: "+{{count}} новина",
          recentNews_few: "+{{count}} новини",
          recentNews_many: "+{{count}} новин",
        },
        HomePage: {
          title: "Головна",
          contentTitle: "Всі новини в одному місці",
          contentSubtitle:
            "Знаходь, читай, видаляй новини з швидким доступом до них",
        },
        NewsPage: {
          title: "Новини",
          allNewsLoaded:
            "На жаль, це всі новини. Приходь пізніше, щоб побачити більше",
        },
        ProfilePage: {
          title: "Профіль",
          role: "Роль",
          lvl: "Ур",
          messageButton: "Написати",
          shareProfile: "Поширити профіль",
        },
      },
    },
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init(i18NextOptions);

export default i18next;
