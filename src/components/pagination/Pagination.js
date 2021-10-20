import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsOperations, cardsSelectors } from "../../redux/cards";
import { pagesOperations } from "../../redux/pages";

const Pagination = () => {
  const dispatch = useDispatch();

  const cardsPerPage = useSelector(cardsSelectors.getCardsPerPage);
  const totalCards = useSelector(cardsSelectors.getAllCards);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCards.length / cardsPerPage); i += 1) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber) => {
    dispatch(pagesOperations.paginate(pageNumber));
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => {
          return (
            <li key={number} className="page-item mt-3">
              <a
                ahref="!#"
                className="page-link "
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
