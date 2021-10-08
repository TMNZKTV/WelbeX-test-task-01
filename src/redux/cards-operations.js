import axios from "axios";
import { cardsActions } from "./";

axios.defaults.baseURL = "https://welbex-backend.herokuapp.com/api";

const fetchCards = () => (dispatch) => {
  dispatch(cardsActions.fetchCardsRequest);

  return axios
    .get("/files")
    .then(({ data }) => dispatch(cardsActions.fetchCardsSuccess(data.files)))
    .catch((error) => console.log(error));
};

export default { fetchCards };
