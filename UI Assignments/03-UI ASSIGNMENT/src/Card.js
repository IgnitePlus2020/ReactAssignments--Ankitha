import React from "react";
import Customers from "./Customers";

export default function Card(props) {
  const type = props.type;
  return (
    <div className="container">
      <table>
        {Customers.map(customer => {
          if (type === "name") {
            return (
              <tr>
                <h2>{customer.name}</h2>
              </tr>
            );
          } else if (type === "phone") {
            return (
              <tr>
                <h2>{customer.phone}</h2>
              </tr>
            );
          } else if (type === "email") {
            return (
              <tr>
                <h2>{customer.email}</h2>
              </tr>
            );
          } else if (type === "reviews") {
            return (
              <tr>
                <h2>{customer.reviews}</h2>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}
