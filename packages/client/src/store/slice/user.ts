import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EntityLoadingState, UsersState } from "../types";

const initialState = {
  entities: {},
  portfolioUrl: "",
  loading: "idle",
} as UsersState;

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserByIdSuccess: (state, { payload }: PayloadAction<any>) => {
      //@ts-ignore
      state.entities[payload.id] = payload;
    },
    createPortfolioStart: (state) => {
      state.loading = EntityLoadingState.PENDING;
    },
    createPortfolioSuccess: (state, { payload }: PayloadAction<any>) => {
      state.loading = EntityLoadingState.SUCCEEDED;
      state.portfolioUrl = payload;
    },
    clearUserState: () => {
      return initialState;
    },
  },
});

export const reducer = usersSlice.reducer;

export const {
  fetchUserByIdSuccess,
  clearUserState,
  createPortfolioSuccess,
  createPortfolioStart,
} = usersSlice.actions;
