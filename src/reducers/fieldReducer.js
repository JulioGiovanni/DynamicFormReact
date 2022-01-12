import { types } from "../types/types";

export const fieldReducer = (state = [], actions) => {
  console.log(actions);
  switch (actions.type) {
    case types.add:
      console.log("add");
      return [...state, actions.payload];

    case types.delete:
      console.log("delete");
      state = state.filter((s) => s.id !== actions.payload);
      return state;
      
    default:
      console.log("default");
      return state;
  }
};
