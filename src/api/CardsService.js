import axios from "axios";

axios.defaults.baseURL = "https://welbex-backend.herokuapp.com/api";

export default class CardsService {
  static async getAll() {
    const response = await axios.get("/files");
    return response.data.files;
  }
}
