import { Record } from "immutable";
import { normalizedRestaurants } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW } from "../constants";

const RestaurantRecord = Record({
  id: null,
  name: "",
  reviews: [],
  menu: []
});

export default (
  state = arrToImmutableMap(normalizedRestaurants, RestaurantRecord),
  { type, payload, id }
) => {
  switch (type) {
    case ADD_REVIEW:
      return state.updateIn([payload.restaurantId, "reviews"], reviews =>
        reviews.concat(id)
      );

    default:
      return state;
  }
};
