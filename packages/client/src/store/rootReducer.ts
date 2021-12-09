import { combineReducers } from "@reduxjs/toolkit";

import { reducer as userReducer } from "./slice/user";
import { reducer as portfolioReducer } from "./slice/portfolio";

export default combineReducers({
  user: userReducer,
  portfolio: portfolioReducer,
});
