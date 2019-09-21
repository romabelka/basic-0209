import { Map, OrderedMap, Record } from "immutable";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW, ERROR, FETCH_REVIEWS, START, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

const RestaurantReviewsRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});

export default (
  //{[restaurantId]: RestaurantReviewsRecord}
  reviews = new Map(),
  { type, payload, response, error, id }
) => {
  const { restaurantId } = payload || {};
  switch (type) {
    case FETCH_REVIEWS + START:
      return reviews
        .set(restaurantId, new RestaurantReviewsRecord())
        .setIn([restaurantId, "error"], null)
        .setIn([restaurantId, "loading"], true);

    case FETCH_REVIEWS + SUCCESS:
      return reviews
        .setIn([restaurantId, "loading"], false)
        .setIn([restaurantId, "loaded"], true)
        .setIn([restaurantId, "error"], null)
        .setIn(
          [restaurantId, "entities"],
          arrToImmutableMap(response, ReviewRecord)
        );

    case FETCH_REVIEWS + ERROR:
      return reviews
        .setIn([restaurantId, "error"], error)
        .setIn([restaurantId, "loading"], false);

    case ADD_REVIEW:
      return reviews.setIn(
        [restaurantId, "entities", id],
        new ReviewRecord({ ...payload.review, id })
      );

    default:
      return reviews;
  }
};
