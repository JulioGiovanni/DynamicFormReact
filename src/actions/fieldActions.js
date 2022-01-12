import { types } from "../types/types";

export const addField = (field) => {
    return {
      type: types.add,
      payload: field
    };
  };
  
  export const deleteField = (id) => {
    return {
      type: types.delete,
      payload: id
    };
  };