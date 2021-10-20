import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsOperations, cardsSelectors } from "../../redux/cards";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(cardsSelectors.getFilter);

  return (
    <div>
      <div>
        <input
          className="form-control mb-2"
          placeholder="Search here"
          type="text"
          value={value}
          onChange={(e) => dispatch(cardsOperations.setFilter(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filter;
