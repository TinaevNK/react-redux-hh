import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import getReviewers from "../api/getReviewers";
import { RootState } from "../type";
import { DEFAULT_LOGIN } from "../utils/constants";
import { setBlacklist, setContributors, setHasError, setIsFetching, setOwner, setReview } from "./actions";

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export const fetchContributors =
  (login: string, repository: string): AppThunk =>
    (dispatch) => {
      dispatch(setIsFetching(true));

      getReviewers(login, repository)
        .then(data => {
          dispatch(setContributors(data.result));
          dispatch(setOwner({ avatar: data.ownerData.avatar, login: data.ownerData.login || login }));
          dispatch(setHasError(false));
        })
        .catch(() => {
          dispatch(setHasError(true));
          dispatch(setContributors([]));
          dispatch(setOwner({ avatar: '', login: DEFAULT_LOGIN }))
        })
        .finally(() => {
          dispatch(setIsFetching(false));
          dispatch(setBlacklist([]));
          dispatch(setReview(({ avatar: '', login: DEFAULT_LOGIN })))
        });
    }
