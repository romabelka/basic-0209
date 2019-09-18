import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import addReview from "../middlewares/addReview";

const enhancer = applyMiddleware(logger, addReview);

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;
