import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uuid from "../middlewares/generate-uuid";

const enhancer = applyMiddleware(uuid, logger);

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;
