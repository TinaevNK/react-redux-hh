import { store } from './store/store';

type TReducerState = {
  username: string;
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
