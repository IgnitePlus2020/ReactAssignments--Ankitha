import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

function Submit(props) {
  function handleClick() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <h1> Order Placed! </h1>
      <h3> Name : {props.name}</h3>
      <h3> Email : {props.email}</h3>
      <h3> Product : {props.product}</h3>
      <h3> Product Number : {props.prodNo}</h3>
      <h3> Quantity : {props.quantity}</h3>
      <h3> Address : {props.address}</h3>
      <h2> Thankyou for Shopping with us! </h2>
      <h3> Your Order will be Delivered Very Soon!</h3>
      <br />
      <button onClick={handleClick}> Continue Shopping!</button>
    </div>
  );
}

export default Submit;
