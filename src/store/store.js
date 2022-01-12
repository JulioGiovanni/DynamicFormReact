import { createStore, combineReducers } from "redux";
import { fieldReducer } from "../reducers/fieldReducer";

const reducer = combineReducers({
  fields: fieldReducer
});

export const store = createStore(reducer);
