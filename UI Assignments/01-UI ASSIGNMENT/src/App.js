import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Customers from "./Customers";
import Card from "./Card";

export default function App() {
  function handleUsername() {
    ReactDOM.render(<Card type="name" />, document.getElementById("root"));
  }

  function handlPhoneNumber() {
    ReactDOM.render(<Card type="phone" />, document.getElementById("root"));
  }

  function handleEmail() {
    ReactDOM.render(<Card type="email" />, document.getElementById("root"));
  }

  function handleReviews() {
    ReactDOM.render(<Card type="reviews" />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a onClick={handleUsername}> User Names</a>
          <a onClick={handlPhoneNumber}>Phone Numbers</a>
          <a onClick={handleEmail}>Email ID</a>
          <a onClick={handleReviews}>Reviews</a>
        </div>
      </div>
    </div>
  );
}
