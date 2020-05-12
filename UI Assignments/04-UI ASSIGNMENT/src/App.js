import React, { useState } from "react";
import ReactDOM from "react-dom";
import Customers from "./Customers.js";
import Success from "./Success";
import Failed from "./Failed";

export default function App() {
  const [id, setID] = useState(0);

  function handleClick() {
    var flag = true;
    Customers.map(customer => {
      if (customer.id == id) {
        const rootElement = document.getElementById("root");
        ReactDOM.render(
          <React.StrictMode>
            <Success id={id} />
          </React.StrictMode>,
          rootElement
        );
        flag = false;
        console.log(flag);
      }
    });

    if (flag == true) {
      const rootElement = document.getElementById("root");
      ReactDOM.render(
        <React.StrictMode>
          <Failed />
        </React.StrictMode>,
        rootElement
      );
    }
  }

  function handleOnChange(event) {
    setID(event.target.value);
  }

  return (
    <div className="container">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search for an ID"
      />
      <button onClick={handleClick}>Search </button>
    </div>
  );
}
