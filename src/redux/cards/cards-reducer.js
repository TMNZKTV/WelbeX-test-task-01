import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cardsActions } from "./";

const items = createReducer([], {
  [cardsActions.fetchCardsSuccess]: (_, { payload }) => payload,
});
const itemsPerPage = createReducer(10, {
  [cardsActions.fetchCardsPerPageSuccess]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [cardsActions.setFilterSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [cardsActions.fetchCardsRequest]: () => true,
  [cardsActions.fetchCardsError]: () => false,
  [cardsActions.fetchCardsPerPageRequest]: () => false,
  [cardsActions.fetchCardsPerPageError]: () => false,
});

const error = createReducer(null, {
  [cardsActions.fetchCardsRequest]: null,
  [cardsActions.fetchCardsError]: (_, { payload }) => payload,
  [cardsActions.fetchCardsPerPageRequest]: null,
  [cardsActions.fetchCardsPerPageError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  itemsPerPage,
  filter,
  loading,
  error,
});
