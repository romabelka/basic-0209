import { createSelector } from "reselect";

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;

export const productsSelector = state => state.products.entities.toObject();
export const productsListSelector = state =>
  state.products.entities.valueSeq().toArray();
export const productsLoading = state => {
  return state.products.loading;
};
export const productSelector = (state, props) => {
  return productsSelector(state)[props.id];
};

export const productLoading = createSelector(
  productSelector,
  productsLoading,
  (product, loading) => !product || loading
);

export const productAmountSelector = (state, props) =>
  state.order[props.id] || 0;
export const orderSelector = state => state.order;
export const userSelector = (state, props) => state.users[props.id];

export const reviewSelector = (state, props) => {
  const review = state.reviews.get(props.id).toJS();
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
