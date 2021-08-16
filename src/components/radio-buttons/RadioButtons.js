import React from "react";
import styles from "./RadioButtons.module.css";

const options = ["Equals ", "Includes", "More than", "Less than"];

const RadioButtons = ({ radio, onChange }) => {
  return (
    <div>
      <ul className="list-group">
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
                    onChange={onChange}
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
