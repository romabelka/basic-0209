import { normalizedReviews } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const {
        payload: { review }
      } = action;
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
