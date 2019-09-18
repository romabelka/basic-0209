import { normalizedReviews } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { id, text, rating } = payload;
      return {
        ...reviews,
        [payload.id]: {
          id,
          text,
          rating
        }
      };
    default:
      return reviews;
  }
};
