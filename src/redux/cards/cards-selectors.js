// import { createSelector } from "@reduxjs/toolkit";

const getAllCards = (state) => state.cards.items;

const getCardsPerPage = (state) => state.cards.itemsPerPage;

const getFilter = (state) => state.cards.filter;

export default { getAllCards, getCardsPerPage, getFilter };
