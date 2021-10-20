import styles from "./RadioButtons.module.css";

const RadioButtons = ({ columns, searchColumns, setSearchColumns }) => {
  return (
    <div>
      {[].map((column) => {
        if (column !== "_id") {
          return (
            <label>
              <input
                className={styles.input}
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          );
        }
      })}
    </div>
  );
};

export default RadioButtons;

// const options = ["Equals ", "Includes", "More than", "Less than"];

// const [radio, setRadio] = useState("");

// function setParam(e) {
//   setRadio(e.target.value);
//   setSearchCondition(e.target.value);
// }

{
  /* <ul className={styles.list__group}>
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
                    // onChange={(e) => setParam(e)}
                  />
                  {option}
                </label>
              </li>
            );
          })}
      </ul> */
}
