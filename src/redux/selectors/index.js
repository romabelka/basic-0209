import { createSelector } from "reselect";

export const restaurantsSelector = state => state.restaurants;
export const orderSelector = state => state.order;

export const orderedProductsSelector = createSelector(
  restaurantsSelector,
  orderSelector,
  (restaurants, order) => {
    const allProducts = restaurants.flatMap(restaurant => restaurant.menu);

    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => allProducts.find(product => product.id === productId))
      .map(product => ({
        product,
        amount: order[product.id]
      }));
  }
);

export const totalPriceSelector = createSelector(
  orderedProductsSelector,
  orderedProducts => {
    return orderedProducts.reduce(
      (acc, { product, amount }) => acc + product.price * amount,
      0
    );
  }
);
