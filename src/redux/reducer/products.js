import { Record, OrderedMap } from "immutable";
import { FETCH_PRODUCTS, SUCCESS } from "../constants";

const ProductRecord = Record({
  id: null,
  name: null,
  price: null,
  ingredients: []
});

export default (products = new OrderedMap(), action) => {
  const { type, response } = action;

  switch (type) {
    case FETCH_PRODUCTS + SUCCESS:
      return response.reduce(
        (acc, item) => acc.set(item.id, new ProductRecord(item)),
        products
      );
    default:
      return products;
  }
};
