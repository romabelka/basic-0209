import { normalizedRestaurants } from "../../fixtures";
import { SAVE_REVIEW } from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_REVIEW: {
      const { uuid, restaurant } = payload;
      return {
        ...restaurants,
        [restaurant.id]: Object.assign({}, restaurant, {
          reviews: restaurant.reviews.concat(uuid)
        })
      };
    }
    default:
      return restaurants;
  }
};
