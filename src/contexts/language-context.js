import { createContext } from "react";

const lang = {
  en: {
    checkout: "Checkout",
    notFoundPage: "Page not found"
  },
  ru: {
    checkout: "Заказать",
    notFoundPage: "Страница не найдена"
  }
};

const context = createContext("en");

// export const { Consumer, Provider } = context;
export default context;
