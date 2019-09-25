import { createSelector } from "reselect";

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;
export const restaurantSelector = (state, { id }) =>
  state.restaurants.getIn(["entities", id]);

export const orderSelector = state => state.order;
export const productsSelector = state => state.products.entities;
export const productAmountSelector = (state, props) =>
  state.order.get(props.id) || 0;
export const productSelector = (state, props) =>
  state.products.getIn(["entities", props.id]);
export const productsLoadingSelector = (state, props) =>
  state.products.loading.has(props.restaurant.id);
export const productsLoadedSelector = (state, props) =>
  state.products.loaded.has(props.restaurant.id);

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading.has(props.restaurant.id);
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded.has(props.restaurant.id) && usersLoadedSelector(state);

export const usersLoadedSelector = state => state.users.loaded;
export const usersLoadingSelector = state => state.users.loading;
export const userSelector = (state, props) =>
  state.users.entities.get(props.id);

export const reviewSelector = (state, props) => {
  const review = state.reviews.getIn(["entities", props.id]).toJS();
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
    return order
      .keySeq()
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
