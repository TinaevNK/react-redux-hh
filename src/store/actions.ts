import { User } from "../type";

export const SET_OWNER = 'SET_OWNER';
export const SET_REVIEW = 'SET_REVIEW';
export const SET_REPOSITORY = 'SET_REPOSITORY';
export const SET_BLACKLIST = 'SET_BLACKLIST';
export const SET_CONTRIBUTOR = 'GET_CONTRIBUTOR';
export const SET_ISFETCHING = 'SET_ISFETCHING';
export const SET_HAS_ERROR = 'SET_HAS_ERROR';

export const setOwner = (payload: User) => ({
  type: SET_OWNER,
  payload: payload,
});

export const setReview = (payload: User) => ({
  type: SET_REVIEW,
  payload: payload,
});

export const setRepository = (payload: string) => ({
  type: SET_REPOSITORY,
  payload: payload,
});

export const setBlacklist = (payload: string[]) => ({
  type: SET_BLACKLIST,
  payload: payload,
});

export const setContributors = (payload: User[]) => ({
  type: SET_CONTRIBUTOR,
  payload: payload,
});

export const setIsFetching = (payload: boolean) => ({
  type: SET_ISFETCHING,
  payload: payload,
});

export const setHasError = (payload: boolean) => ({
  type: SET_HAS_ERROR,
  payload: payload,
});
