import React, { useState } from "react";
import RadioButtons from "../radio-buttons/RadioButtons";
import styles from "./Filter.module.css";

const Filter = ({ setSearchValue, setSearchCondition }) => {
  const [inputValue, setInputValue] = useState("");
  const [hidden, setHidden] = useState(true);

  function sendValueToApp(e) {
    setSearchValue(e.target.value);
    setInputValue(e.target.value);
  }

  function handleClick() {
    setHidden((prev) => !prev);
  }

  return (
    <div className={styles.filter}>
      <button type="button" onClick={(e) => handleClick()}>
        Фильтровать +
      </button>

      {!hidden ? (
        <>
          <RadioButtons setSearchCondition={setSearchCondition} />
          <div>
            <input
              className="form-control"
              placeholder="Search here"
              type="text"
              value={inputValue}
              onChange={(e) => sendValueToApp(e)}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Filter;
