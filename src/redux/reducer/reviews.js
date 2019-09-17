import { normalizedReviews } from "../../fixtures";

const defaultReviews = normalizedReviews.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
