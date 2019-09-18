import { normalizedReviews } from "../../fixtures";
import { listToObjectById } from "../../utils";
import { ADD_REVIEW } from "../constants/reviews";

const defaultReviews = listToObjectById(normalizedReviews);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const {
        payload: { userId = null, text, rate: rating },
        uuid: id
      } = action;
      return {
        [id]: { id, rating, text, userId },
        ...reviews
      };
    default:
      return reviews;
  }
};
