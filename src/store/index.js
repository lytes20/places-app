import { createStore, compose, applyMiddleware } from "redux";
import allReducers from "./reducers/rootReducer";

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(allReducers, composeEnhancers());
};

export default configureStore;
