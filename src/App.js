import React from "react";

import Title from "./components/title/Title";
import Table from "./components/table/Table";
import RadioButtons from "./components/radio-buttons/RadioButtons";
import Filter from "./components/filter/Filter";
import Loader from "./components/UI/Loader/Loader";
import Pagination from "./components/pagination/Pagination";
import DropDown from "./components/dropdownmenu/DropDown";

const App = () => {
  return (
    <div className="container mt-5">
      <Title />

      {/* Нужно отобразить ошибку в случае, если запрос зафейлится */}
      {/* {error && <h1>Произошла ошибка ${error}</h1>} */}
      {/* {isLoading ? ( */}

      {/* Нужно отобразить лоадер в то время, когда происходит запрос за карточками */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Loader />
      </div> */}

      <DropDown />
      <Table />
      <Pagination />
    </div>
  );
};

export default App;
