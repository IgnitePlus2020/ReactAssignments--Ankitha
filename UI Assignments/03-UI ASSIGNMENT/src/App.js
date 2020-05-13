import React, { useState } from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const [showName, setName] = useState(false);
  const [showPhone, setPhone] = useState(false);
  const [showEmail, setEmail] = useState(false);
  const [showReview, setReview] = useState(false);
  function handleUserName() {
    setName(true);
    setEmail(false);
    setPhone(false);
    setReview(false);
  }
  function handelEmail() {
    setName(false);
    setEmail(true);
    setPhone(false);
    setReview(false);
  }
  function handlePhoneNo() {
    setName(false);
    setEmail(false);
    setPhone(true);
    setReview(false);
  }
  function handleReviews() {
    setName(false);
    setEmail(false);
    setPhone(false);
    setReview(true);
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

      {showName && <Card type="name" />}
      {showPhone && <Card type="phone" />}
      {showEmail && <Card type="email" />}
      {showReview && <Card type="reviews" />}
    </div>
  );
}
