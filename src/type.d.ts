import { store } from './store/store';

type User = { avatar: string, login: string };

type TReducerState = {
  owner: User;
  review: User;
  repository: string;
  isLoading: boolean;
  isError: boolean;
  contributors: User[];
  blacklist: string[];
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
