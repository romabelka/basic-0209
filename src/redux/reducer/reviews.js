import { Map, Record } from "immutable";
import { normalizedReviews } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

export default (
  reviews = new Map(arrToImmutableMap(normalizedReviews, ReviewRecord)),
  { type, payload, id }
) => {
  switch (type) {
    case ADD_REVIEW:
      return reviews.set(id, new ReviewRecord({ ...payload.review, id }));

    default:
      return reviews;
  }
};
