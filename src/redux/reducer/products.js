import { normalizedDishes } from "../../fixtures";
import { arrToMap } from "../utils";

export default (products = arrToMap(normalizedDishes), action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
