import {
  ADD_REVIEW,
  DECREMENT,
  FETCH_PRODUCTS,
  FETCH_RESTAURANTS,
  INCREMENT,
  START,
  SUCCESS,
  ERROR,
  FETCH_REVIEWS
} from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

const fetchApi = (type, payload, url) => async dispatch => {
  dispatch({
    payload,
    type: type + START
  });

  try {
    const data = await fetch(url);
    const response = await data.json();

    dispatch({
      payload,
      type: type + SUCCESS,
      response
    });
  } catch (error) {
    dispatch({
      payload,
      type: type + ERROR,
      error
    });
  }
};

export const fetchRestaurants = () =>
  fetchApi(FETCH_RESTAURANTS, {}, "/api/restaurants");

export const fetchProducts = restaurantId =>
  fetchApi(FETCH_PRODUCTS, { restaurantId }, `/api/dishes?id=${restaurantId}`);

export const fetchReviews = restaurantId =>
  fetchApi(FETCH_REVIEWS, { restaurantId }, `/api/reviews?id=${restaurantId}`);
