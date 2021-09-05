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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (module as any).hot.accept('./features', () => {
      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
      const newRootReducer = require('./features').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default createStore;

type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
