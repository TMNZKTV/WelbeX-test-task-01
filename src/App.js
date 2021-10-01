import React, { useState, useEffect } from "react";

import Title from "./components/title/Title";
import Table from "./components/table/Table";
import RadioButtons from "./components/radio-buttons/RadioButtons";
import Filter from "./components/filter/Filter";
import CardsService from "./api/CardsService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchColumns, setSearchColumns] = useState(["name"]);
  const [searchValue, setSearchValue] = useState("");
  const [hidden, setHidden] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  const [fetchCards, isLoading, error] = useFetching(async () => {
    const cards = await CardsService.getAll();
    setCards(cards);
  });

  useEffect(() => {
    fetchCards();
  }, []);

  // // Получаем текущие карточки
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  // // Меняем страницу
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Фильтруем карточки
  function search(cards) {
    return cards.filter((card) =>
      searchColumns.some((column) =>
        card[column]
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }

  const columns = cards[0] && Object.keys(cards[0]);

  return (
    <div className="container mt-5">
      <Title />

      <button type="button" onClick={(e) => setHidden(!hidden)}>
        Фильтровать +
      </button>

      {!hidden ? (
        <>
          <RadioButtons
            columns={columns}
            searchColumns={searchColumns}
            setSearchColumns={setSearchColumns}
          />
          <Filter setSearchValue={setSearchValue} />{" "}
        </>
      ) : null}

      {error && <h1>Произошла ошибка ${error}</h1>}

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Table cards={search(currentCards)} />
      )}

      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
