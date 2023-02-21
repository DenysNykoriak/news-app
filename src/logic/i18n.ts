import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const isProduction = process.env.NODE_ENV === "production";

const i18NextOptions: InitOptions = {
  fallbackLng: "en",
  supportedLngs: ["uk", "en"],
  backend: {
    loadPath: `${isProduction ? "/news-app" : ""}/locales/{{lng}}/{{ns}}.json`,
  },
  ns: ["App"],
  defaultNS: "App",
  debug: false,
  interpolation: {
    escapeValue: true,
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init(i18NextOptions);

export default i18next;
