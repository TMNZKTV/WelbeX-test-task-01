import React, { useState, useEffect } from "react";
import axios from "axios";

import Title from "./components/title/Title";
import Table from "./components/table/Table";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagination/Pagination";

axios.defaults.baseURL = "https://welbex-backend.herokuapp.com/api";

const App = () => {
  const [cards, setCards] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  const [searchValue, setSearchValue] = useState("");
  const [searchCondition, setSearchCondition] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const response = await axios.get("/files");
      setCards(response.data.files);
      setLoading(false);
    };
    getCards();
  }, []);

  // Получаем текущие карточки
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  // Меняем страницу
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Фильтруем карточки
  function search(cards) {
    const columns = cards[0] && Object.keys(cards[0]);

    return cards.filter((card) =>
      columns.some((column) =>
        card[column]
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }

  return (
    <div className="container mt-5">
      <Title />
      <Filter
        setSearchValue={setSearchValue}
        setSearchCondition={setSearchCondition}
      />
      <Table cards={search(currentCards)} loading={loading} />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
