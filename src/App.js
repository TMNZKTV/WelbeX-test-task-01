import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/table/Table";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagination/Pagination";
import RadioButtons from "./components/radio-buttons/RadioButtons";

axios.defaults.baseURL = "http://localhost:8081/api/";

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [radio, setRadio] = useState("");
  const [hidden, setHidden] = useState(true);

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
    console.log(columns);

    return cards.filter((card) =>
      columns.some((column) =>
        card[column]
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }
  function handleClick() {
    setHidden((prev) => !prev);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Routes and Destinations map</h1>
      <div>
        <button type="button" onClick={(e) => handleClick()}>
          Фильтровать +
        </button>
      </div>

      {hidden ? null : (
        <div>
          <div>
            <RadioButtons
              radio={radio}
              onChange={(e) => setRadio(e.target.value)}
            />

            <Filter
              searchValue={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      )}

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
