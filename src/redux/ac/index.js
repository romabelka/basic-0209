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

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
  callAPI: "/api/restaurants"
});

export const fetchProducts = restaurantId => async dispatch => {
  dispatch({
    payload: { restaurantId },
    type: FETCH_PRODUCTS + START
  });

  try {
    const data = await fetch(`/api/dishes?id=${restaurantId}`);
    const response = await data.json();
    dispatch({
      payload: { restaurantId },
      type: FETCH_PRODUCTS + SUCCESS,
      response
    });
  } catch (error) {
    dispatch({
      payload: { restaurantId },
      type: FETCH_PRODUCTS + ERROR,
      error
    });
  }
};

export const fetchReviews = restaurantId => async dispatch => {
  dispatch({
    payload: { restaurantId },
    type: FETCH_REVIEWS + START
  });

  try {
    const data = await fetch(`/api/reviews?=id=${restaurantId}`);
    const response = await data.json();
    dispatch({
      type: FETCH_REVIEWS + SUCCESS,
      payload: { restaurantId },
      response
    });
  } catch (error) {
    dispatch({
      type: FETCH_REVIEWS + ERROR,
      payload: { restaurantId },
      error
    });
  }
};
