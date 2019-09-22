import { Record } from "immutable";
import { arrToImmutableMap, ReducerRecord } from "../utils";
import {
  ADD_REVIEW,
  ERROR,
  FETCH_RESTAURANTS,
  START,
  SUCCESS
} from "../constants";

const RestaurantRecord = Record({
  id: null,
  name: "",
  reviews: [],
  menu: []
});

export default (state = new ReducerRecord(), { type, payload, id }) => {
  switch (type) {
    case FETCH_RESTAURANTS + START:
      return state.set("error", null).set("loading", true);

    case FETCH_RESTAURANTS + SUCCESS:
      return state
        .set("loading", false)
        .set("error", null)
        .set("entities", arrToImmutableMap(payload, RestaurantRecord));

    case FETCH_RESTAURANTS + ERROR:
      return state.set("error", payload).set("loading", false);

    case ADD_REVIEW:
      return state.updateIn(
        ["entities", payload.restaurantId, "reviews"],
        reviews => reviews.concat(id)
      );

    default:
      return state;
  }
};
