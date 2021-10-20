import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { pagesActions } from "./";

const number = createReducer(1, {
  [pagesActions.paginateSuccess]: (_, { payload }) => payload,
  [pagesActions.fetchCurrentPageSuccess]: (state, _) => state,
});

export default combineReducers({
  number,
});
