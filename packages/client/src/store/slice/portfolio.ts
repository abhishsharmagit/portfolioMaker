import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPortfolio } from "../../types";
import { EntityLoadingState, PortfolioState, UsersState } from "../types";

const initialState = {
  portfolio: [],
  loading: "idle",
  error: "",
  repoExist: false,
} as PortfolioState;

const portfolioSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPortfolioByIdStart: (state) => {
      state.loading = EntityLoadingState.PENDING;
    },
    getPortfolioByIdSuccess: (
      state,
      { payload }: PayloadAction<IPortfolio[]>
    ) => {
      state.portfolio = payload;
    },
    getPortfolioByIdError: (state, { payload }: PayloadAction<any>) => {
      state.loading = EntityLoadingState.FAILED;
      state.error = payload;
    },
    checkRepoExistStart: (state) => {
      state.loading = EntityLoadingState.PENDING;
    },
    checkRepoExistSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.repoExist = payload;
    },
    clearUserState: () => {
      return initialState;
    },
  },
});

export const reducer = portfolioSlice.reducer;

export const {
  getPortfolioByIdError,
  getPortfolioByIdStart,
  getPortfolioByIdSuccess,
  checkRepoExistStart,
  checkRepoExistSuccess,
} = portfolioSlice.actions;
