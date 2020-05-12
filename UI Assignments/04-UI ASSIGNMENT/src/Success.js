import React from "react";
import Customers from "./Customers";
var customer = "";
function Success(props) {
  Customers.map(x => {
    if (x.id === parseInt(props.id)) {
      customer = x;
    }
  });
  return (
    <div className="container">
      <h1>Name : {customer.name}</h1>
      <h2>Email Id : {customer.email} </h2>
      <h2>Phone Number: {customer.phone} </h2>
      <h2> Review : {customer.reviews} </h2>
    </div>
  );
}

export default Success;
