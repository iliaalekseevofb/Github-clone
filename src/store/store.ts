import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducer as repositoriesReducer } from "./repositories/repositories.slice";
import { api } from './api/api';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  repositories: repositoriesReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>