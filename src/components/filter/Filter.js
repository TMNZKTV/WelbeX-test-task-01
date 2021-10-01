import React, { useState } from "react";

const Filter = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");

  function sendSearchValue(e) {
    setInputValue(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <div>
        <input
          className="form-control"
          placeholder="Search here"
          type="text"
          value={inputValue}
          onChange={(e) => sendSearchValue(e)}
        />
      </div>
    </div>
  );
};

export default Filter;
