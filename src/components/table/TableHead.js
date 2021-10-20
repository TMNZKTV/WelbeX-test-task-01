import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr key="fixed">
        <td className="w-25 h4">Date</td>
        <td className="w-25 h4">Name</td>
        <td className="w-25 h4">Amount</td>
        <td className="w-25 h4">Distance</td>
      </tr>
    </thead>
  );
};

export default TableHead;
