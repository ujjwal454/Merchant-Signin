import { createStore, applyMiddleware } from "redux";
import { authReducer } from "./reducers/projectReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middlewar = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewar.push(logger);
}

export const store = createStore(authReducer, applyMiddleware(...middlewar));
