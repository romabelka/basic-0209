import { createSelector } from "reselect";

export const restaurantsSelector = state => state.restaurants;
export const orderSelector = state => state.order;
export const productsSelector = state => state.products;
export const reviewsSelector = state => state.reviews;

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

export const createRestarauntReviewsSelector = restaurant =>
  createSelector(
    restaurantsSelector,
    reviewsSelector,
    (restaurants, reviews) => {
      return Object.values(reviews).filter(review =>
        restaurant.reviews.includes(review.id)
      );
    }
  );
