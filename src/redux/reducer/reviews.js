import { ADD_REVIEW } from "../constants";
import { normalizedReviews } from "../../fixtures";

const defaultReviews = normalizedReviews.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating
        }
      };

    default:
      return reviews;
  }
};
