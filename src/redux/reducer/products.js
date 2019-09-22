import { Record } from "immutable";
import { ReducerRecord } from "../types";
import { arrToImmutableMap } from "../utils";
import { ERROR, FETCH_PRODUCTS, START, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: []
});

export default (state = new ReducerRecord(), { type, response, error }) => {
  switch (type) {
    case FETCH_PRODUCTS + START:
      return state.set("error", null).set("loading", true);

    case FETCH_PRODUCTS + SUCCESS:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set(
          "entities",
          state.entities.merge(arrToImmutableMap(response, ProductRecord))
        );

    case FETCH_PRODUCTS + ERROR:
      return state.set("error", error).set("loading", false);

    default:
      return state;
  }
};
