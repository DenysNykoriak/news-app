import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18NextOptions: InitOptions = {
  fallbackLng: "en",
  supportedLngs: ["uk", "en"],
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  ns: ["App"],
  defaultNS: "App",
  debug: true,
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
