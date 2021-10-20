import { createAction } from "@reduxjs/toolkit";

const fetchCardsRequest = createAction("cards/fetchCardsRequest");
const fetchCardsSuccess = createAction("cards/fetchCardsSuccess");
const fetchCardsError = createAction("cards/fetchCardsError");

const fetchCardsPerPageRequest = createAction("cards/fetchCardsPerPageRequest");
const fetchCardsPerPageSuccess = createAction("cards/fetchCardsPerPageSuccess");
const fetchCardsPerPageError = createAction("cards/fetchCardsPerPageError");

const setFilterRequest = createAction("cards/setFilterRequest");
const setFilterSuccess = createAction("cards/setFilterSuccess");
const setFilterError = createAction("cards/setFilterError");

export default {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsError,
  fetchCardsPerPageRequest,
  fetchCardsPerPageSuccess,
  fetchCardsPerPageError,
  setFilterRequest,
  setFilterSuccess,
  setFilterError,
};
