import { normalizedDishes } from "../../fixtures";
import { Record } from "immutable";
import { arrToImmutableMap } from "../utils";

const DishRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: null
});

export default (
  products = arrToImmutableMap(normalizedDishes, DishRecord),
  action
) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
