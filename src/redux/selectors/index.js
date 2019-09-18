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

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  r => Object.values(r)
);

export const reviewsWithUsersSelector = createSelector(
  usersSelector,
  reviewsSelector,
  (users, reviews) =>
    reviews.map(item => ({
      user: users[item.userId],
      ...item
    }))
);

export const reviewSelector = createSelector(
  usersSelector,
  reviewsSelector,
  (users, reviews) => id => ({
    user:
      reviews[id] &&
      users[reviews[id].userId] &&
      users[reviews[id].userId].name,
    ...reviews[id]
  })
);
