import { configureStore } from "@reduxjs/toolkit";
import { State } from "../models/models";

const initialFactorialState: State = {
  input: 0,
  result: 1,
  history: [],
};

export const store = configureStore({
  reducer: (state = initialFactorialState, action: any) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return { ...state, input: action.payload };
      case "UPDATE_RESULT":
        return { ...state, result: action.payload };
      case "UPDATE_HISTORY":
        return { ...state, history: action.payload };
      default:
        return state;
    }
  },
});
export {};
