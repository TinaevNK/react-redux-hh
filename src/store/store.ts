import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const defaultState = {
  username: "default",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "action1":
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
