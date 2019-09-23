import { Record, OrderedMap } from "immutable";
import { arrToImmutableMap } from "../utils";
import { FETCH_PRODUCTS, ERROR, START, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  ingredients: [],
  name: "",
  price: 0
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: true,
  loaded: false,
  error: null
});

export default (state = new ReducerRecord(), { type, response, error }) => {
  switch (type) {
    case FETCH_PRODUCTS + START:
      return state.set("loading", true);

    case FETCH_PRODUCTS + SUCCESS:
      return state
        .set(
          "entities",
          state.entities.merge(arrToImmutableMap(response, ProductRecord))
        )
        .set("loading", false)
        .set("loaded", true)
        .set("error", null);

    case FETCH_PRODUCTS + ERROR:
      return state.set("loading", false).set("error", error);

    default:
      return state;
  }
};
