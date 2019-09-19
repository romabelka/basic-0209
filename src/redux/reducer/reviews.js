import { normalizedReviews } from "../../fixtures";
import { arrToMap } from "../utils";
import { ADD_REVIEW } from "../constants";

export default (
  reviews = arrToMap(normalizedReviews),
  { type, payload, id }
) => {
  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [id]: { ...payload.review, id } };

    default:
      return reviews;
  }
};
