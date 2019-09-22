import { createSelector } from "reselect";

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;

export const productsSelector = state => state.products.entities;
export const productsLoading = state => state.products.loading;
export const productSelector = (state, props) =>
  state.products.entities.get(props.id);

export const orderSelector = state => state.order.toJS();
export const productAmountSelector = (state, props) =>
  state.order.get(props.id) || 0;

export const userSelector = (state, props) => state.users.get(props.id);

export const reviewsLoading = state => state.reviews.loading;

export const reviewSelector = (state, props) => {
  const review = state.reviews.entities.get(props.id);
  if (!review) return {};
  const user = userSelector(state, { id: review.userId });
  return {
    ...review.toJS(),
    user: user && user.name
  };
};

export const orderedProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => products.get(productId))
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
