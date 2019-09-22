import { Map, Record } from "immutable";
import { ADD_REVIEW, FETCH_REVIEWS, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

export default (reviews = new Map(), { type, payload, id, response }) => {
  switch (type) {
    case ADD_REVIEW:
      return reviews.set(id, new ReviewRecord({ ...payload.review, id }));

    case FETCH_REVIEWS + SUCCESS:
      return response.reduce(
        (acc, item) => acc.set(item.id, new ReviewRecord(item)),
        reviews
      );
    default:
      return reviews;
  }
};
