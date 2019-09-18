import { ADD_REVIEW } from "../constants";
import { normalizedRestaurants } from "../../fixtures";

const defaultRestaurants = normalizedRestaurants.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurants[payload.restaurantId],
          reviews: [...restaurants[payload.restaurantId].reviews, payload.id]
        }
      };

    default:
      return restaurants;
  }
};
