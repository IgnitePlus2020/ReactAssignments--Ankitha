import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Card from "./Card";

var showDetails = [false, false, false, false];

export default function App() {
  function handleUserName() {
    showDetails = [true, false, false, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function handlePhoneNo() {
    showDetails = [false, true, false, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  function handelEmail() {
    showDetails = [false, false, true, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  function handleReviews() {
    showDetails = [false, false, false, true];
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div className="App">
      <ul>
        <li>
          <a onClick={handleUserName}>Username</a>
        </li>
        <li>
          <a onClick={handlePhoneNo}>Phone Numbers</a>
        </li>
        <li>
          <a onClick={handelEmail}>Emai ID</a>
        </li>
        <li>
          <a onClick={handleReviews}>Reviews</a>
        </li>
      </ul>

      {showDetails[0] && <Card type="name" />}
      {showDetails[1] && <Card type="phone" />}
      {showDetails[2] && <Card type="email" />}
      {showDetails[3] && <Card type="reviews" />}
    </div>
  );
}
