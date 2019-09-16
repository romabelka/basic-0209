import { normalizedDishes } from "../../fixtures";

const defaultProducts = normalizedDishes.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
