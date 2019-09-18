import { normalizedRestaurants } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { restaurantId, id } = payload;
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, id]
        }
      };
    default:
      return restaurants;
  }
};
