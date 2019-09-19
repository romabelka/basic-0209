import { createSelector } from "reselect";

export const restaurantsListSelector = state =>
  Object.values(state.restaurants);
export const orderSelector = state => state.order;
export const productsSelector = state => state.products;
export const productAmountSelector = (state, props) =>
  state.order[props.id] || 0;
export const productSelector = (state, props) => state.products[props.id];

export const userSelector = (state, props) => state.users[props.id];

export const reviewSelector = (state, props) => {
  const review = state.reviews[props.id];
  const user = userSelector(state, { id: review.userId });
  return {
    ...review,
    user: user && user.name
  };
};

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
