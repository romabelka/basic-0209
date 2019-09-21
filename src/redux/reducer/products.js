import { OrderedMap, Record } from "immutable";
import { normalizedDishes } from "../../fixtures";
import { arrToImmutableMap } from "../utils";

const ProductRecord = Record({
  id: null,
  ingredients: [],
  name: "",
  price: 0
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
