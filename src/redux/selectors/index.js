import { createSelector } from "reselect";

export const restaurantsSelector = state => state.restaurants;
export const orderSelector = state => state.order;
export const productsSelector = state => state.products;
export const usersSelector = state => state.users;
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

export const mappedReviewsSelector = createSelector(
  reviewsSelector,
  usersSelector,
  (reviews, users) => {
    return Object.entries(reviews).map(([key, review]) => {
      return {
        id: review.id,
        user:
          (users[review.userId] && users[review.userId].name) || "Anonymous",
        text: review.text,
        rating: review.rating
      };
    });
  }
);
