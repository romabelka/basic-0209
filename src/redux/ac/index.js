import {
  ADD_REVIEW,
  DECREMENT,
  FETCH_PRODUCTS,
  FETCH_REVIEWS,
  FETCH_RESTAURANTS,
  INCREMENT,
  START,
  SUCCESS,
  ERROR
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

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
  callAPI: "/api/restaurants"
});

export const fetchProducts = restaurantId => async dispatch => {
  dispatch({
    payload: { restaurantId },
    type: FETCH_PRODUCTS + START
  });

  let action = { payload: { restaurantId } };
  try {
    const data = await fetch(`/api/dishes?id=${restaurantId}`);
    const response = await data.json();

    action = {
      ...action,
      type: FETCH_PRODUCTS + SUCCESS,
      response
    };
  } catch (error) {
    action = {
      ...action,
      type: FETCH_PRODUCTS + ERROR,
      error
    };
  } finally {
    dispatch(action);
  }
};

export const fetchReviews = restaurantId => ({
  type: FETCH_REVIEWS,
  payload: { restaurantId },
  callAPI: `/api/reviews?id=${restaurantId}`
});
