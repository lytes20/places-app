import { createStore } from "redux";
import allReducers from "./reducers/rootReducer";

const store = createStore(allReducers);

export default store;
