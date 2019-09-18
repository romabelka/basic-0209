import { normalizedRestaurants } from "../../fixtures";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const {
        payload: {
          restaurantId,
          review: { id }
        }
      } = action;
      const restaurant = restaurants[restaurantId];
      restaurant.reviews = restaurant.reviews.concat(id);
      return restaurants;
    default:
      return restaurants;
  }
};
