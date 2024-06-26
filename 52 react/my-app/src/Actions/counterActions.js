import * as T from "../Constants/counterTypes";

export const add1 = () => {
  return {
    type: T.ADD_1,
  };
};
export const remove1 = () => {
  return {
    type: T.REMOVE_1,
  };
};
export const add_range = (payload) => {
  return {
    type: T.ADD_RANGE,
    payload,
  };
};
