import { User } from "../type";

export const SET_OWNER = 'SET_OWNER'; // пользователь
export const SET_REVIEW = 'SET_REVIEW'; // ревьюер
export const SET_REPOSITORY = 'SET_REPOSITORY';
export const SET_BLACKLIST = 'SET_BLACKLIST';
export const GET_CONTRIBUTOR = 'GET_CONTRIBUTOR';
export const SET_ISFETCHING = 'SET_ISFETCHING';

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

export const getContributors = (payload: { login: string, repository: string }) => ({
  type: GET_CONTRIBUTOR,
  payload: payload,
});

export const setIsFetching = (payload: boolean) => ({
  type: SET_ISFETCHING,
  payload: payload,
});
