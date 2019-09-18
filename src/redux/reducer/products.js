import { normalizedDishes } from "../../fixtures";
import { listToObjectById } from "../../utils";

const defaultProducts = listToObjectById(normalizedDishes);

export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
