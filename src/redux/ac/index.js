import {
  ADD_REVIEW,
  DECREMENT,
  FETCH_PRODUCTS,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
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

  const fullResponse = await fetch(`/api/reviews?id=${restaurantId}`);

  if (!fullResponse.ok) {
    dispatch({
      payload: { restaurantId },
      type: FETCH_REVIEWS + ERROR,
      error: fullResponse.statusText
    });
  } else {
    const response = await fullResponse.json();
    dispatch({
      payload: { restaurantId },
      type: FETCH_REVIEWS + SUCCESS,
      response
    });
  }
};
