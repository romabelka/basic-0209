import { restaurants } from "../../fixtures";

const dishes = restaurants.flatMap(restaurant =>
  restaurant.menu.map(m => ({
    restaurant: restaurant.id,
    ...m
  }))
);

const initialState = {
  dishes,
  restaurants
};

export default (state = initialState, action) => state;
