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
      const id = action.uuid;
      const newReviews = Object.assign({}, reviews);

      newReviews[id] = {
        id,
        text: action.text,
        rating: action.rating
      };

      return newReviews;

    default:
      return reviews;
  }
};
