import { ReducerAction } from "react";

export const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn React",
    done: false,
  },
];

export interface ActionReducer { 
  type: string;
  payload: any;
}

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((state) => state.id !== action.payload);

    case "TOGGLE":
      return state.map((state) =>
        state.id === action.payload ? { ...state, done: !state.done } : state
      );

    default:
      return state;
  }
};
