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
  //  return actionHandlers[action.type]?.(state, action) || state
  return actionHandlers[action.type]
    ? actionHandlers[action.type](state, action)
    : state;
};

const actionHandlers = {
  [FETCH_PRODUCTS + START]: (state, { payload }) =>
    state.update("loading", loading => loading.add(payload.restaurantId)),
  [FETCH_PRODUCTS + SUCCESS]: (state, { payload }) =>
    state
      .update("loading", loading => loading.remove(payload.restaurantId))
      .update("loaded", loading => loading.add(payload.restaurantId))
      .update("entities", entities =>
        entities.merge(arrToImmutableMap(payload.products, ProductRecord))
      )
};
