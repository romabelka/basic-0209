import { arrToImmutableMap, createReducerRecord } from "../utils";
import { Record, OrderedMap } from "immutable";
import { FETCH_PRODUCTS, START, SUCCESS, ERROR } from "../constants";

const ProductRecord = Record({
  id: "",
  name: "",
  price: null,
  ingredients: []
});

export default (
  state = createReducerRecord(new OrderedMap()),
  { type, response, error }
) => {
  switch (type) {
    case FETCH_PRODUCTS + START:
      return state
        .set("error", null)
        .set("loading", true)
        .set("loaded", false);
    case FETCH_PRODUCTS + SUCCESS:
      return state
        .set("error", null)
        .set("loading", false)
        .set("loaded", true)
        .update("entities", entities =>
          entities.merge(arrToImmutableMap(response, ProductRecord))
        );
    case FETCH_PRODUCTS + ERROR:
      return state
        .set("error", error)
        .set("loading", false)
        .set("loaded", false);
    default:
      return state;
  }
};
