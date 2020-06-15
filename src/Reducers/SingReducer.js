import { ADD_USER } from "../Action/types";
const initialState = {
  user: [],
};

export default function userReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    console.log(action.payload);
    let x = Object(state.user);
    return { ...state, user: { ...action.payload, ...state.user} };
  }
  return state;
}
