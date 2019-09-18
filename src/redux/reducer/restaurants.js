import { normalizedRestaurants } from "../../fixtures";
import { listToObjectById } from "../../utils";
import { ADD_REVIEW } from "../constants/reviews";

const defaultRestaurants = listToObjectById(normalizedRestaurants);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const {
        payload: { restaurantId },
        uuid: id
      } = action;
      const newState = restaurants;
      newState[restaurantId].reviews.push(id);
      return newState;
    default:
      return restaurants;
  }
};
