import { createSelector } from "reselect";

export const restaurantsSelector = state => state.restaurants;
export const orderSelector = state => state.order;
export const productsSelector = state => state.products;

export const orderedProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => products[productId])
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
