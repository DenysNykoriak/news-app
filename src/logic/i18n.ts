import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18NextOptions: InitOptions = {
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["uk", "en"],
  ns: [
    "Months",
    "NewsCategories",
    "Widgets",
    "Navbar",
    "Footer",
    "Dialogs",
    "Pages",
    "HomePage",
    "NewsPage",
    "ProfilePage",
  ],
  debug: true,
  interpolation: {
    escapeValue: true,
  },
  resources: {
    en: {
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
          post4: "Look in your past",
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
        mainText: "Test Task for AlterEGO on position Strong Junior Developer",
        author: "Author: Denys Nykoriak",
        inspiredBy: "Inspired by",
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
};

i18next.use(initReactI18next).init(i18NextOptions);

export default i18next;
