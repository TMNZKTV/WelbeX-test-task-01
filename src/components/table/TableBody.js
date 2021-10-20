import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ cards }) => {
  return (
    <tbody>
      {cards.map((card, idx) => {
        return <TableRow card={card} key={idx} />;
      })}
    </tbody>
  );
};

export default TableBody;
