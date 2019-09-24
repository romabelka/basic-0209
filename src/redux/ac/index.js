import {
  ADD_REVIEW,
  DECREMENT,
  FETCH_PRODUCTS,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  INCREMENT,
  START,
  SUCCESS
} from "../constants";
import {
  restaurantSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector
} from "../selectors";

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

  const response = await fetch(`/api/dishes?id=${restaurantId}`);
  const products = await response.json();

  dispatch({
    payload: { restaurantId, products },
    type: FETCH_PRODUCTS + SUCCESS
  });
};

export const fetchReviews = restaurantId => async (dispatch, getState) => {
  const restaurant = restaurantSelector(getState(), { id: restaurantId });
  const loading = reviewsLoadingSelector(getState(), { restaurant });
  const loaded = reviewsLoadedSelector(getState(), { restaurant });

  if (loading || loaded) return;

  dispatch({
    payload: { restaurantId },
    type: FETCH_REVIEWS + START
  });

  const response = await fetch(`/api/reviews?id=${restaurantId}`);
  const reviews = await response.json();

  dispatch({
    payload: { restaurantId, reviews },
    type: FETCH_REVIEWS + SUCCESS
  });
};
