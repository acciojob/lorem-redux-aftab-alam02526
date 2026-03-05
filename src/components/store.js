import { createStore, applyMiddleware } from "redux";
import loremReducer from "./reducer";

const thunk = (store) => (next) => (action) =>
  typeof action === "function"
    ? action(store.dispatch)
    : next(action);

const store = createStore(loremReducer, applyMiddleware(thunk));

export default store;
