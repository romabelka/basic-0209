import { createSelector } from "reselect";

const orderMapSelector = state => state.order;
const productsMapSelector = state => state.products;
const reviewsMapSelector = state => state.reviews;

export const restaurantsListSelector = state =>
  state.restaurants.entities.valueSeq().toArray();
export const restaurantsLoading = state => state.restaurants.loading;

export const productAmountSelector = (state, props) =>
  state.order.get(props.id) || 0;
export const productSelector = (state, props) =>
  state.products.get(props.id).toObject();

export const userSelector = (state, props) => state.users.get(props.id);

export const reviewSelector = (state, props) => {
  const review = reviewsMapSelector(state)
    .get(props.id)
    .toObject();
  const user = userSelector(state, { id: review.userId });

  return {
    ...review,
    user: user && user.get("name")
  };
};

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
        amount: order[product.get("id")]
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
