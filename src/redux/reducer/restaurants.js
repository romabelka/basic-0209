import { normalizedRestaurants } from "../../fixtures";
import { ADD_REVIEW } from "../../redux/constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const newRestaurants = Object.assign({}, restaurants);
      const newReviews = newRestaurants[action.restaurantId].reviews.slice();

      newReviews.push(action.uuid);
      newRestaurants[action.restaurantId].reviews = newReviews;

      return newRestaurants;

    default:
      return restaurants;
  }
};
