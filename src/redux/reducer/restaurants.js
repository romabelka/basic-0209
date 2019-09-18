import { normalizedRestaurants } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { type_, payload } = action;
      const restaurantsWithNewReview = Object.assign({}, restaurants);

      restaurantsWithNewReview[payload.restaurantID]["reviews"].push(
        payload.id
      );

      return restaurantsWithNewReview;
    default:
      return restaurants;
  }
};
