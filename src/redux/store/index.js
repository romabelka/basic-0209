import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uuidGenerator from "../middlewares/uuidGenerator";

const enhancer = applyMiddleware(logger, uuidGenerator);

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;
