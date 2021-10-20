import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButtons from "../radio-buttons/RadioButtons";
import Filter from "../filter/Filter";
import { cardsSelectors } from "../../redux/cards";

const DropDown = () => {
  const [hidden, setHidden] = useState(true);
  const cards = useSelector(cardsSelectors.getAllCards);

  return (
    <>
      <button
        type="button"
        className="btn btn-info mb-2"
        onClick={(e) => setHidden(!hidden)}
      >
        Фильтровать +
      </button>

      {!hidden ? (
        <>
          {" "}
          <RadioButtons
          // columns={columns}
          // searchColumns={searchColumns}
          // setSearchColumns={setSearchColumns}
          />
          <Filter />
        </>
      ) : null}
    </>
  );
};
export default DropDown;
