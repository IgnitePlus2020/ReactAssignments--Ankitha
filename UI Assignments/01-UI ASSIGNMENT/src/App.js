import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Card from "./Card";

var showDetails = [false, false, false, false]; //four boolean values for four columns

export default function App() {
  function handleUsername() {
    showDetails = [true, false, false, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function handlPhoneNumber() {
    showDetails = [false, true, false, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function handleEmail() {
    showDetails = [false, false, true, false];
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function handleReviews() {
    showDetails = [false, false, false, true];
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a onClick={handleUsername}> User Names</a>
          <a onClick={handlPhoneNumber}>Phone Numbers</a>
          <a onClick={handleEmail}>Email ID</a>
          <a onClick={handleReviews}>Reviews</a>
        </div>
      </div>

      {showDetails[0] && <Card type="name" />}
      {showDetails[1] && <Card type="phone" />}
      {showDetails[2] && <Card type="email" />}
      {showDetails[3] && <Card type="reviews" />}
    </div>
  );
}
