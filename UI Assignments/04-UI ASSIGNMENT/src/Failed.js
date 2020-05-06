import React from "react";
import Customers from "./Customers";

function Success() {
  return (
    <div className="container">
      <h1> Oops! There is no Customer of the mentioned ID </h1>
      <br />
      <h3>Here's a list of Valid ID's you can choose among.. </h3>
      <br />
      <table>
        <tr>
          {Customers.map(customer => {
            return (
              <div>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
              </div>
            );
          })}
        </tr>
      </table>
    </div>
  );
}

export default Success;
