import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumber.push(i);
  }
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
