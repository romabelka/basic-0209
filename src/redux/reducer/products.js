import { normalizedDishes } from "../../fixtures";
import { OrderedMap, Record } from "immutable";
import { arrToImmutableMap } from "../utils";
import { ERROR, FETCH_PRODUCTS, START, SUCCESS } from "../constants";

const DishRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: null
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: true,
  loaded: false,
  error: null
});

export default (products = new ReducerRecord(), action) => {
  const { type, payload, response } = action;

  switch (type) {
    case FETCH_PRODUCTS + START:
      return products.set("error", null).set("loading", true);

    case FETCH_PRODUCTS + SUCCESS:
      return products
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", arrToImmutableMap(response, DishRecord));

    default:
      return products;
  }
};
