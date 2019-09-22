import { Map, OrderedMap, Record } from "immutable";
import { normalizedReviews } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW, FETCH_PRODUCTS, START, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: true,
  loaded: false,
  error: null
});

export default (
  reviews = new ReducerRecord(),
  { type, payload, id, response }
) => {
  switch (type) {
    case FETCH_PRODUCTS + START:
      return reviews.set("error", null).set("loading", true);

    case FETCH_PRODUCTS + SUCCESS:
      return reviews
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set("entities", new Map(arrToImmutableMap(response, ReviewRecord)));

    case ADD_REVIEW:
      return reviews
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set(
          "entities",
          new Map(
            arrToImmutableMap(
              response,
              new ReviewRecord({ ...payload.review, id })
            )
          )
        );

    default:
      return reviews;
  }
};
