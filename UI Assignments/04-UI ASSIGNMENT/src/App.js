import React, { useState } from "react";
import ReactDOM from "react-dom";
import Customers from "./Customers.js";
import Success from "./Success";
import Failed from "./Failed";

export default function App() {
  const [id, setID] = useState(0);
  const [color, setColor] = useState("white");

  function handleClick() {
    var flag = true;
    Customers.map(customer => {
      if (customer.id === parseInt(id)) {
        ReactDOM.render(<Success id={id} />, document.getElementById("root"));
        flag = false;
      }
    });

    if (flag === true) {
      ReactDOM.render(<Failed />, document.getElementById("root"));
    }
  }

  function handleOnChange(event) {
    setID(event.target.value);
  }

  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("white");
  }

  return (
    <div className="container">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search for an ID"
      />
      <button
        style={{ backgroundColor: color }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

