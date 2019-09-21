import { normalizedDishes } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { Record } from "immutable";

const ProductRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: []
});

export default (
  products = arrToImmutableMap(normalizedDishes, ProductRecord),
  action
) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
