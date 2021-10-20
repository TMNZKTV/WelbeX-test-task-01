import React from "react";

const TableRow = ({ card }) => {
  return (
    <tr>
      <td className="w-25">{card.date}</td>
      <td className="w-25">{card.name}</td>
      <td className="w-25">{card.amount}</td>
      <td className="w-25">{card.distance}</td>
    </tr>
  );
};

export default TableRow;
