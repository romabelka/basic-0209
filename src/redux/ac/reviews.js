import { ADD_REVIEW } from "../constants/reviews";

export const addReview = ({ restaurantId, text, rate }) => ({
  type: ADD_REVIEW,
  createUuid: true,
  payload: {
    restaurantId,
    text,
    rate
  }
});
