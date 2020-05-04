import React from "react";
import Customers from "./Customers";

function Success(props) {
  const customer = Customers[props.id];
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
