import { AnyAction, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TReducerState } from '../type';

const initialState: TReducerState = {
  username: "default",
};

const reducer = (state: TReducerState = initialState, action: AnyAction) => {
  switch (action.type) {
    case "action1":
      return { ...state, username: action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
