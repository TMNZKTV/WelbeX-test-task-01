import { createAction } from "@reduxjs/toolkit";

const paginateRequest = createAction("pages/paginateRequest");
const paginateSuccess = createAction("pages/paginateSuccess");
const paginateError = createAction("pages/paginateError");

// const DecrementRequest = createAction("pages/DecrementRequest");
// const DecrementSuccess = createAction("pages/DecrementSuccess");
// const DecrementError = createAction("pages/DecrementError");

const fetchCurrentPageRequest = createAction("pages/fetchCurrentPageRequest");
const fetchCurrentPageSuccess = createAction("pages/fetchCurrentPageSuccess");
const fetchCurrentPageError = createAction("pages/fetchCurrentPageError");

export default {
  paginateRequest,
  paginateSuccess,
  paginateError,
  // DecrementRequest,
  // DecrementSuccess,
  // DecrementError,
  fetchCurrentPageRequest,
  fetchCurrentPageSuccess,
  fetchCurrentPageError,
};
