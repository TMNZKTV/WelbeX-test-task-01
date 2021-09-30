import React, { useState } from "react";
import styles from "./RadioButtons.module.css";

const options = ["Equals ", "Includes", "More than", "Less than"];

const RadioButtons = ({ setSearchCondition }) => {
  const [radio, setRadio] = useState("");

  function setParam(e) {
    setRadio(e.target.value);
    setSearchCondition(e.target.value);
  }
  return (
    <div>
      <ul className={styles.list__group}>
        {options &&
          options.map((option, idx) => {
            return (
              <li key={idx} className={styles.li}>
                <label>
                  <input
                    className={styles.input}
                    type="radio"
                    checked={radio === option}
                    value={option}
                    onChange={(e) => setParam(e)}
                  />
                  {option}
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RadioButtons;
