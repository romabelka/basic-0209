import { normalizedRestaurants } from "../../fixtures";
import { SUBMIT_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_REVIEW:
      const r = restaurants[payload.restaurantId];
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...r,
          reviews: [...r.reviews, payload.id]
        }
      };
    default:
      return restaurants;
  }
};
