import { AnyAction } from "redux";
import { dataRepo } from "../mocks/dataRepo";
import { TReducerState } from "../type";
import { DEFAULT_LOGIN } from "../utils/constants";
import { GET_CONTRIBUTOR, SET_BLACKLIST, SET_ISFETCHING, SET_OWNER, SET_REVIEW } from "./actions";

const initialState: TReducerState = {
  owner: { avatar: '', login: DEFAULT_LOGIN },
  review: { avatar: '', login: DEFAULT_LOGIN },
  repository: '',
  isLoading: false,
  isError: false,
  contributors: [],
  blacklist: [],
};

export const reducer = (state: TReducerState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_OWNER:
      return {
        ...state,
        owner: { avatar: action.payload.avatar, login: action.payload.login },
      };
    case SET_REVIEW:
      return {
        ...state,
        review: { avatar: action.payload.avatar, login: action.payload.login },
      };
    case GET_CONTRIBUTOR:
      return {
        ...state,
        contributors: [...state.contributors, ...dataRepo],
      };
    case SET_BLACKLIST:
      return {
        ...state,
        blacklist: [...action.payload],
      };
    case SET_ISFETCHING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
