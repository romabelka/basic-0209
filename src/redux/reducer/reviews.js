import { SAVE_REVIEW } from "../constants";
import { normalizedReviews } from "../../fixtures";

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_REVIEW: {
      const { uuid, text, rate } = payload;

      return {
        ...reviews,
        [uuid]: {
          id: uuid,
          text,
          rating: rate,
          userId: null
        }
      };
    }
    default:
      return reviews;
  }
};
