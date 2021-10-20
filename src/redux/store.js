import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards/cards-reducer";
import pagesReducer from "./pages/pages-reducer";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    pages: pagesReducer,
  },
});

export default store;
