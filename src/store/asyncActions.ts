import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import getReviewers from "../api/getReviewers";
import { RootState } from "../type";
import { setIsFetching } from "./actions";

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const fetchContributors =
  (login: string, repository: string): AppThunk =>
    (dispatch) => {
      dispatch(setIsFetching(true));
      getReviewers(login, repository)
        .then(res => console.log(res))
        .catch(console.log);

    }
