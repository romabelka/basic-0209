import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uuidGenerator from "../middlewares/uuid-generator";

const enhancers = applyMiddleware(logger, uuidGenerator);

const store = createStore(reducer, enhancers);

//dev only
window.store = store;

export default store;
