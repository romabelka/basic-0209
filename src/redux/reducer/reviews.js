import { normalizedReviews } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultReviews = normalizedReviews.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { type_, payload } = action;
      const reviewsWithNewReview = Object.assign({}, reviews);

      reviewsWithNewReview[payload.id] = {
        id: payload.restaurantID,
        rating: payload.rate,
        text: payload.text
      };

      return reviewsWithNewReview;
    default:
      return reviews;
  }
};
