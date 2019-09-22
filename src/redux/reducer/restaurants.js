import { OrderedMap, Record } from "immutable";
import { arrToImmutableMap } from "../utils";
import {
  ADD_REVIEW,
  ERROR,
  FETCH_RESTAURANTS,
  FETCH_PRODUCTS,
  FETCH_REVIEWS,
  START,
  SUCCESS
} from "../constants";

const RestaurantRecord = Record({
  id: null,
  name: "",
  reviews: [],
  menu: [],
  productsLoading: false,
  productsLoaded: false,
  reviewsLoading: false,
  reviewsLoaded: false
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});

export default (
  state = new ReducerRecord(),
  { type, payload, id, response, error }
) => {
  switch (type) {
    case FETCH_RESTAURANTS + START:
      return state.set("error", null).set("loading", true);

    case FETCH_RESTAURANTS + SUCCESS:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", arrToImmutableMap(response, RestaurantRecord));

    case FETCH_RESTAURANTS + ERROR:
      return state.set("error", error).set("loading", false);

    case ADD_REVIEW:
      return state.updateIn(
        ["entities", payload.restaurantId, "reviews"],
        reviews => reviews.concat(id)
      );

    case FETCH_PRODUCTS + START:
      return state.setIn(
        ["entities", payload.restaurantId, "productsLoading"],
        true
      );

    case FETCH_PRODUCTS + SUCCESS:
      return state
        .setIn(["entities", payload.restaurantId, "productsLoading"], false)
        .setIn(["entities", payload.restaurantId, "productsLoaded"], true);

    case FETCH_PRODUCTS + ERROR:
      return state
        .setIn(["entities", payload.restaurantId, "productsLoading"], false)
        .setIn(["entities", payload.restaurantId, "productsError"], error);

    case FETCH_REVIEWS + START:
      return state.setIn(
        ["entities", payload.restaurantId, "reviewsLoading"],
        true
      );

    case FETCH_REVIEWS + SUCCESS:
      return state
        .setIn(["entities", payload.restaurantId, "reviewsLoading"], false)
        .setIn(["entities", payload.restaurantId, "reviewsLoaded"], true);

    case FETCH_REVIEWS + ERROR:
      return state
        .setIn(["entities", payload.restaurantId, "reviewsLoading"], false)
        .setIn(["entities", payload.restaurantId, "reviewsError"], error);

    default:
      return state;
  }
};
