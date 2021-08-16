import React from "react";

const Table = ({ cards, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr key="fixed">
          <td className="w-25 h4">Date</td>
          <td className="w-25 h4">Name</td>
          <td className="w-25 h4">Amount</td>
          <td className="w-25 h4">Distance</td>
        </tr>
      </thead>

      {cards.map((card, idx) => {
        return (
          <tbody key={idx}>
            <tr>
              <td className="w-25">{card.date}</td>
              <td className="w-25">{card.name}</td>
              <td className="w-25">{card.amount}</td>
              <td className="w-25">{card.distance}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
