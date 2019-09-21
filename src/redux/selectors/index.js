import { createSelector } from "reselect";

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;

export const orderSelector = state => state.order;
export const orderAmountSelector = (state, props) =>
  state.order.get(props.id) || 0;

export const productsSelector = (state, restaurantId) => {
  const record = state.products.get(restaurantId);
  return record && record.entities.valueSeq().toArray();
};
export const productsLoadingSelector = (state, restaurantId) => {
  const record = state.products.get(restaurantId);
  return record ? record.loading : true;
};
export const productSelector = (state, props) => {
  const record = state.products.get(props.restaurant.id);
  return record && record.entities.get(props.id);
};

export const userSelector = (state, props) => state.users.get(props.id);

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
      .filter(productId => order.get(productId) > 0)
      .map(productId => products.get(productId))
      .map(product => ({
        product,
        amount: order.get(product.id)
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
