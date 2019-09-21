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
  const { restaurantId, id } = props;
  const restaurantReviews = state.reviews.get(restaurantId);
  if (!restaurantReviews) {
    return null;
  }
  const review = restaurantReviews.entities.get(id).toJS();
  const user = userSelector(state, { id: review.userId });
  return {
    ...review,
    user: user && user.name
  };
};

export const reviewsSelector = (state, restaurantId) => {
  const restaurantReviews = state.reviews.get(restaurantId);
  return restaurantReviews && restaurantReviews.entities.valueSeq().toArray();
};

export const reviewsLoadingSelector = (state, restaurantId) => {
  const restaurantReviews = state.reviews.get(restaurantId);
  return restaurantReviews ? restaurantReviews.loading : true;
};

export const orderedProductsSelector = createSelector(
  state => state.products,
  orderSelector,
  (products, order) => {
    const allProductRecords = {};
    products.forEach(({ entities }) => {
      if (entities) {
        entities.forEach(product => (allProductRecords[product.id] = product));
      }
    });
    return Object.keys(order.toJS())
      .filter(productId => order.get(productId) > 0)
      .map(productId => allProductRecords[productId])
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
