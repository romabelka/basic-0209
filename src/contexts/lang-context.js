import { createContext } from "react";

export const languages = {
  en: {
    menu: "Menu",
    reviews: "Reviews",
    order: "Order",
    total: "Total",
    sub_total: "Sub total",
    delivery_costs: "Delivery costs",
    select_restaurant: "Please select a restaurant"
  },
  ru: {
    menu: "Меню",
    reviews: "Отзывы",
    order: "Заказ",
    total: "Общая сумма",
    sub_total: "Стоимость заказа",
    delivery_costs: "Стоимость доставки",
    select_restaurant: "Пожалуйста, выберите ресторан"
  }
};

export const context = createContext(languages.en);
export const { Consumer, Provider } = context;
export default context;
