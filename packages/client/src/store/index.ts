import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, Context } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const store = configureStore({ reducer: rootReducer });

/**
 * TODO : check why not strict type check working here
 */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//@ts-ignore
export const makeStore: MakeStore<AppState> = (_context: Context) =>
  configureStore({ reducer: rootReducer });
