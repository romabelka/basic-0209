import { normalizedReviews } from "../../fixtures";
import { SUBMIT_REVIEW } from "../constants";

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_REVIEW:
      return {
        ...reviews,
        [payload.id]: {
          text: payload.text || "",
          rating: payload.rate || 0,
          id: payload.id
        }
      };
    default:
      return reviews;
  }
};
