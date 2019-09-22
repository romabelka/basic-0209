import { Record } from "immutable";
import { arrToImmutableMap, ReducerRecord } from "../utils";
import { FETCH_PRODUCTS, ERROR, START, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  name: "",
  ingredients: [],
  price: null
});

export default (products = new ReducerRecord(), { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS + START:
      return products.set("error", null).set("loading", true);

    case FETCH_PRODUCTS + SUCCESS:
      return products
        .set("loading", false)
        .set("error", null)
        .set(
          "entities",
          products.entities.merge(arrToImmutableMap(payload, ProductRecord))
        );

    case FETCH_PRODUCTS + ERROR:
      return products.set("error", payload).set("loading", false);

    default:
      return products;
  }
};
