import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsOperations, cardsSelectors } from "../../redux/cards";
import { pagesSelectors } from "../../redux/pages";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";

export default function Table() {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelectors.getAllCards);
  const currentPage = useSelector(pagesSelectors.getPage);
  const cardsPerPage = useSelector(cardsSelectors.getCardsPerPage);
  const filter = useSelector(cardsSelectors.getFilter);

  useEffect(() => {
    dispatch(cardsOperations.fetchCards());
  }, []);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  // Пока захардкодил поиск только по имени, т.к. метод toString() не может работать на undefined
  const [searchColumns, setSearchColumns] = useState(["name"]);

  function search(cards) {
    return cards.filter((card) =>
      searchColumns.some((column) =>
        card[column].toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  // Понять, что это такое и зачем это нужно О_о ?
  // const columns = cards[0] && Object.keys(cards[0]);

  return (
    <div>
      <table className="table table-bordered table-striped">
        <TableHead />
        <TableBody cards={search(currentCards)} />
      </table>
    </div>
  );
}
