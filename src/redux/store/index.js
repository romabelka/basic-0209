import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import uuidgenerator from "../middlewares/uuidgenerator";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(logger, uuidgenerator));

const store = createStore(reducer, enhancer);

//dev only
window.store = store;

export default store;
