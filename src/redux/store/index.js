import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";
import api from "../middlewares/api";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = applyMiddleware(thunk, generateId, api, logger);

const store = createStore(reducer, composeWithDevTools(enhancer));

//dev only
window.store = store;

export default store;
