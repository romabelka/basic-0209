import { createSelector } from "reselect";

const orderMapSelector = state => state.order;
const productsMapSelector = state => state.products.entities;
const reviewsMapSelector = state => state.reviews.entities;
const restaurantsMapSelector = state => state.restaurants.entities;

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;

export const productAmountSelector = (state, props) =>
  state.order.get(props.id) || 0;

export const productsSelector = (state, props) => {
  const products = productsMapSelector(state);
  const restaurant = restaurantsMapSelector(state).get(props.restaurantId);

  return restaurant.get("menu").reduce((acc, productId) => {
    const product = products.get(productId);
    if (product) acc.push(product.toObject());

    return acc;
  }, []);
};
export const productsLoading = state => state.products.loading;
export const productsError = state => state.products.error;

export const userSelector = (state, props) => state.users.get(props.id);

export const reviewsSelector = (state, props) => {
  const reviews = reviewsMapSelector(state);
  const restaurant = restaurantsMapSelector(state).get(props.restaurantId);

  return restaurant.get("reviews").reduce((acc, reviewId) => {
    const review = reviews.get(reviewId);
    if (review) {
      const user = userSelector(state, { id: review.get("userId") });
      acc.push({
        ...review.toObject(),
        user: user ? user.name : "Anonymous"
      });
    }

    return acc;
  }, []);
};
export const reviewsLoading = state => state.reviews.loading;
export const reviewsError = state => state.reviews.error;

export const orderedProductsSelector = createSelector(
  productsMapSelector,
  orderMapSelector,
  (products, order) => {
    return order
      .filter(amount => amount > 0)
      .map((amount, id) => products.get(id))
      .valueSeq()
      .toArray()
      .map(product => ({
        product,
        amount: order.get(product.get("id"))
      }));
  }
);

export const totalPriceSelector = createSelector(
  orderedProductsSelector,
  orderedProducts => {
    return orderedProducts.reduce(
      (acc, { product, amount }) => acc + product.get("price") * amount,
      0
    );
  }
);
