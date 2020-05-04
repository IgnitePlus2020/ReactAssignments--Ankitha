import React, { useState } from "react";
import Submit from "./Submit";
import ReactDOM from "react-dom";

function App() {
  const [color, setColor] = useState("white");
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [prodNo, setProdNo] = useState("");

  function handleMouseOver() {
    setColor("black");
  }

  function handleMouseOut() {
    setColor("white");
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleProduct(event) {
    setProduct(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  function handleAddress(event) {
    setAddress(event.target.value);
  }

  function handleProdNo(event) {
    setProdNo(event.target.value);
  }

  function onSubmit() {
    console.log("order placed!");
    ReactDOM.render(
      <Submit
        name={name}
        email={email}
        product={product}
        prodNo={prodNo}
        quantity={quantity}
        address={address}
      />,
      document.getElementById("root")
    );
  }

  return (
    <div className="container">
      <h1>Place Your Order Here!</h1>
      <br />
      <input onChange={handleName} type="text" placeholder="Enter your Name" />
      <input
        onChange={handleEmail}
        type="email"
        placeholder="Enter your Email id"
        name="email"
      />
      <input
        onChange={handleProduct}
        type="text"
        placeholder="Product name"
        name="product"
      />
      <input
        onChange={handleProdNo}
        type="text"
        placeholder="Product Number"
        name="prodNo"
      />
      <input
        onChange={handleQuantity}
        type="number"
        placeholder="Quantity"
        name="quantity"
      />
      <input
        onChange={handleAddress}
        type="text"
        placeholder="Address"
        name="address"
      />
      <br />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onSubmit}
        style={{ backgroundColor: color }}
      >
        Place Order!
      </button>
    </div>
  );
}

export default App;
