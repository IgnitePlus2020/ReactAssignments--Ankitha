import React, { useState } from "react";
import Customers from "./Customers";
import App from "./App";
import ReactDOM from "react-dom";

function Success() {
  const [color, setColor] = useState("white");
  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("white");
  }
  function handleClick() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <h1> Oops! There is no Customer of the mentioned ID </h1>
      <br />
      <h1>Here's a list of Valid ID's you can choose among.. </h1>
      <br />
      <table className="container">
        <tr>
          {Customers.map(customer => {
            return (
              <div>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
              </div>
            );
          })}
        </tr>
      </table>
      <button
        type="submit"
        style={{ backgroundColor: color }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Try Again
      </button>
    </div>
  );
}

export default Success;
