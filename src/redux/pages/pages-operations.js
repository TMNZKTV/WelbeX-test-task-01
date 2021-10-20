import { pagesActions } from "./";

const fetchCurrentPage = () => (dispatch) => {
  dispatch(pagesActions.fetchCurrentPageRequest);

  return dispatch(pagesActions.fetchCurrentPageSuccess);
};

const paginate = (pageNumber) => (dispatch) => {
  dispatch(pagesActions.paginateRequest);
  return dispatch(pagesActions.paginateSuccess(pageNumber));
};

// const DecrementPage = () => (dispatch) => {
//   dispatch(pagesActions.DecrementRequest);
//   return dispatch(pagesActions.IncrementSuccess(number));
// };

export default {
  fetchCurrentPage,
  paginate,
  // DecrementPage,
};
