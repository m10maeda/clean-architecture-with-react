import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './features';

type PreloadedState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = (preloadedState?: PreloadedState) => {
  const middleware = [...getDefaultMiddleware()];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      diff: true,
      collapsed: true,
    });

    middleware.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState,
  });

  return store;
};

export default createStore;

type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
