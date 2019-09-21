import { arrToImmutableMap } from "../utils";
import { Map, OrderedMap, Record } from "immutable";
import { ERROR, FETCH_PRODUCTS, START, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  name: "",
  price: null,
  ingredients: []
});

const RestaurantProductsRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});

export default (
  //{[restaurantId]: RestaurantProductsRecord}
  products = new Map(),
  { type, payload, response, error }
) => {
  const { restaurantId } = payload || {};
  switch (type) {
    case FETCH_PRODUCTS + START:
      return products
        .set(restaurantId, new RestaurantProductsRecord())
        .setIn([restaurantId, "error"], null)
        .setIn([restaurantId, "loading"], true);

    case FETCH_PRODUCTS + SUCCESS:
      return products
        .setIn([restaurantId, "loading"], false)
        .setIn([restaurantId, "loaded"], true)
        .setIn([restaurantId, "error"], null)
        .setIn(
          [restaurantId, "entities"],
          arrToImmutableMap(response, ProductRecord)
        );

    case FETCH_PRODUCTS + ERROR:
      return products
        .setIn([restaurantId, "error"], error)
        .setIn([restaurantId, "loading"], false);

    default:
      return products;
  }
};
