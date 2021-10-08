import { createAction } from "@reduxjs/toolkit";

const fetchCardsRequest = createAction("cards/fetchCardsRequest");
const fetchCardsSuccess = createAction("cards/fetchCardsSuccess");
const fetchCardsError = createAction("cards/fetchCardsError");

export default {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsError,
};
