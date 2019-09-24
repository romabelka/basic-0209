import { arrToImmutableMap } from "../utils";
import { OrderedMap, Record, Set } from "immutable";
import { FETCH_PRODUCTS, START, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: []
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: new Set(),
  loaded: new Set(),
  error: null
});

export default (state = new ReducerRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS + START:
      return state.update("loading", loading =>
        loading.add(payload.restaurantId)
      );

    case FETCH_PRODUCTS + SUCCESS:
      return state
        .update("loading", loading => loading.remove(payload.restaurantId))
        .update("loaded", loading => loading.add(payload.restaurantId))
        .update("entities", entities =>
          entities.merge(arrToImmutableMap(payload.products, ProductRecord))
        );

    default:
      return state;
  }
};
