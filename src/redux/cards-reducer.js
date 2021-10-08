import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cardsActions } from "./";

const items = createReducer([], {
  [cardsActions.fetchCardsSuccess]: (_, { payload }) => payload,
});

// const filter = createReducer("", {});

const loading = createReducer(false, {
  [cardsActions.fetchCardsRequest]: () => true,
  [cardsActions.fetchCardsError]: () => false,
});

const error = createReducer(null, {
  [cardsActions.fetchCardsRequest]: null,
  [cardsActions.fetchCardsError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  //   filter,
  loading,
  error,
});
