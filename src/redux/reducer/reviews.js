import { OrderedMap, Record, Set } from "immutable";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW, FETCH_REVIEWS, START, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: new Set(),
  loaded: new Set(),
  error: null
});

export default (state = new ReducerRecord(), { type, payload, id }) => {
  switch (type) {
    case ADD_REVIEW:
      return state.setIn(
        ["entities", id],
        new ReviewRecord({ ...payload.review, id })
      );

    case FETCH_REVIEWS + START:
      return state.update("loading", loading =>
        loading.add(payload.restaurantId)
      );

    case FETCH_REVIEWS + SUCCESS:
      return state
        .update("loading", loading => loading.remove(payload.restaurantId))
        .update("loaded", loading => loading.add(payload.restaurantId))
        .update("entities", entities =>
          entities.merge(arrToImmutableMap(payload.reviews, ReviewRecord))
        );

    default:
      return state;
  }
};
