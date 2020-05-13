import React, { useState } from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const [showName, setName] = useState(false);
  const [showPhone, setPhone] = useState(false);
  const [showEmail, setEmail] = useState(false);
  const [showReviews, setReviews] = useState(false);

  function handleUsername() {
    setName(true);
    setPhone(false);
    setEmail(false);
    setReviews(false);
  }

  function handlPhoneNumber() {
    setName(false);
    setPhone(true);
    setEmail(false);
    setReviews(false);
  }

  function handleEmail() {
    setName(false);
    setPhone(false);
    setEmail(true);
    setReviews(false);
  }

  function handleReviews() {
    setName(false);
    setPhone(false);
    setEmail(false);
    setReviews(true);
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

      {showName && <Card type="name" />}
      {showPhone && <Card type="phone" />}
      {showEmail && <Card type="email" />}
      {showReviews && <Card type="reviews" />}
    </div>
  );
}
