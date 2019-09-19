import { Record } from "immutable";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW, FETCH_RESTAURANTS } from "../constants";

const RestaurantRecord = Record({
  id: null,
  name: "",
  reviews: [],
  menu: []
});

export default (
  state = arrToImmutableMap([], RestaurantRecord),
  { type, payload, id, response }
) => {
  switch (type) {
    case FETCH_RESTAURANTS:
      return arrToImmutableMap(response, RestaurantRecord);

    case ADD_REVIEW:
      return state.updateIn([payload.restaurantId, "reviews"], reviews =>
        reviews.concat(id)
      );

    default:
      return state;
  }
};
